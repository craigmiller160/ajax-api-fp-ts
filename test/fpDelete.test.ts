import MockAdapter from 'axios-mock-adapter';
import { createApi } from '../src';
import { pipe } from 'fp-ts/es6/pipeable';
import * as TE from 'fp-ts/es6/TaskEither';
import { AxiosError } from 'axios';

const uri = '/foo/bar';

describe('fpDelete', () => {
    it('request success', () => {
        const api = createApi();
        const mockApi = new MockAdapter(api.instance);
        mockApi.onDelete(uri)
            .reply(200, 'Success');

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
        new MockAdapter(api.instance);

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
