import MockAdapter from 'axios-mock-adapter';
import { createApi } from '../src';
import { pipe } from 'fp-ts/es6/pipeable';
import * as TE from 'fp-ts/es6/TaskEither';
import { AxiosError } from 'axios';

const uri = '/foo/bar';

describe('fpGraphql', () => {
    it('request success', () => {
        throw new Error();
    });

    it('request error', () => {
        throw new Error();
    });

    it('request graphql error', () => {
        throw new Error();
    });
});
