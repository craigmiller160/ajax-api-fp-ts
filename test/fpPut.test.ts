import MockAdapter from 'axios-mock-adapter';
import { pipe } from 'fp-ts/es6/pipeable';
import * as TE from 'fp-ts/es6/TaskEither';
import { AxiosError } from 'axios';
import { createApi } from '../src';

const uri = '/foo/bar';
const body = {
    hello: 'world'
};
type BodyType = typeof body;

describe('fpPut', () => {
    it('request success', () => {
        const api = createApi();
        const mockApi = new MockAdapter(api.instance);
        mockApi.onPut(uri, body)
            .reply(200, 'Success');

        return pipe(
            api.put<BodyType, string>({
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
            api.put<BodyType, string>({
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
