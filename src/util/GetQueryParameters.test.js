import { getQueryParameters } from './GetQueryParameters';

describe('getQueryParameters tests', () => {
    it('should return the empty string given an undefined object', () => {
        expect(getQueryParameters())
            .toBe('');
    });

    it('should return the empty string given an empty object', () => {
        expect(getQueryParameters({}))
            .toBe('');
    });

    it('should handle a single key/value pair', () => {
        expect(getQueryParameters({
            foo: 'bar'
        })).toBe('?foo=bar');
    });

    it('should ignore keys with undefined values', () => {
        expect(getQueryParameters({
            key: undefined,
            foo: 'bar'
        })).toBe('?foo=bar');
    });

    it('should string together multiple key/value pairs', () => {
        expect(getQueryParameters({
            foo: 'bar',
            baz: 'bat',
            abc: 'def'
        })).toBe('?foo=bar&baz=bat&abc=def');
    });

    it('should escape space characters with %20', () => {
        expect(getQueryParameters({
            name: 'Zack M Fleischman'
        })).toBe('?name=Zack%20M%20Fleischman');
    });
});