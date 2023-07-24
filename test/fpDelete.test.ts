import MockAdapter from 'axios-mock-adapter';
import { pipe } from 'fp-ts/pipeable';
import * as TE from 'fp-ts/TaskEither';
import { AxiosError } from 'axios';
import { createApi } from '../src';

const uri = '/foo/bar';

describe('fpDelete', () => {
	it('request success', () => {
		const api = createApi();
		const mockApi = new MockAdapter(api.instance);
		mockApi.onDelete(uri).reply(200, 'Success');

		return pipe(
			api.delete<string>({
				uri
			}),
			TE.map((res) => expect(res.data).toEqual('Success')),
			TE.mapLeft((ex) => expect(ex).toBeUndefined())
		)();
	});

	it('request error', () => {
		const api = createApi();
		new MockAdapter(api.instance); // eslint-disable-line no-new

		return pipe(
			api.delete<string>({
				uri
			}),
			TE.map((res) => expect(res).toBeUndefined()),
			TE.mapLeft((ex: Error) => {
				expect((ex as AxiosError).response?.status).toEqual(404);
			})
		)();
	});
});
