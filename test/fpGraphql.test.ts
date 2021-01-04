import MockAdapter from 'axios-mock-adapter';
import { createApi } from '../src';
import { pipe } from 'fp-ts/es6/pipeable';
import * as TE from 'fp-ts/es6/TaskEither';
import { AxiosError } from 'axios';
import { mockAndValidateGraphQL } from '@craigmiller160/ajax-api/lib/test-utils';

const payload = `
    query {
        clients {
            id
            name
        }
    }
`;

describe('fpGraphql', () => {
    it('request success', () => {
        const api = createApi();
        const mockApi = new MockAdapter(api.instance);
        mockAndValidateGraphQL<string>({
            mockApi,
            payload,
            responseData: {
                data: 'Success'
            }
        });

        return pipe(
            api.graphql<string>({
                payload
            }),
            TE.map((res) => expect(res.data).toEqual({ data: 'Success' })),
            TE.mapLeft((ex) => expect(ex).toBeUndefined())
        )();
    });

    it('request error', () => {
        const api = createApi();
        new MockAdapter(api.instance);

        return pipe(
            api.graphql<string>({
                payload
            }),
            TE.map((res) => expect(res).toBeUndefined()),
            TE.mapLeft((ex: Error) => {
                expect((ex as AxiosError).response?.status).toEqual(404);
            })
        )();
    });

    it('request graphql error', () => {
        throw new Error();
    });
});
