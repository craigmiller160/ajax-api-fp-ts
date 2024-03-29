import { describe, it, expect } from 'vitest';
import MockAdapter from 'axios-mock-adapter';
import { pipe } from 'fp-ts/function';
import * as TE from 'fp-ts/TaskEither';
import { AxiosError } from 'axios';
import { createApi } from '../src';

const uri = '/foo/bar';
const body = {
	hello: 'world'
};
type BodyType = typeof body;

describe('fpPost', () => {
	it('request success', () => {
		const api = createApi();
		const mockApi = new MockAdapter(api.instance);
		mockApi.onPost(uri, body).reply(200, 'Success');

		return pipe(
			api.post<string, BodyType>({
				uri,
				body
			}),
			TE.map((res) => expect(res.data).toEqual('Success')),
			TE.mapLeft((ex) => expect(ex).toBeUndefined())
		)();
	});

	it('request error', () => {
		const api = createApi();
		new MockAdapter(api.instance); // eslint-disable-line no-new

		return pipe(
			api.post<string, BodyType>({
				uri,
				body
			}),
			TE.map((res) => expect(res).toBeUndefined()),
			TE.mapLeft((ex: Error) => {
				expect((ex as AxiosError).response?.status).toEqual(404);
			})
		)();
	});
});
