import fetchData from './FetchData';

describe('FetchData tests', () => {
    const dispatch = jest.fn();
    const testData = 'test data';
    const fetchFn = jest.fn().mockResolvedValue(testData);

    const fetchActionTypes = {
        start: 'START_ACTION',
        success: 'SUCCESS_ACTION',
        error: 'ERROR_ACTION'
    };

    beforeEach(() => {
        dispatch.mockClear();
        fetchFn.mockClear();
    });

    it('dispatches the correct success action AFTER the start action', async () => {
        await fetchData(fetchFn, fetchActionTypes, dispatch);
        expect(dispatch.mock.calls[0][0]).toEqual({ type: fetchActionTypes.start });
        expect(dispatch.mock.calls[1][0]).toEqual({ type: fetchActionTypes.success, payload: testData });
    });

    it('calls the fetchFn', async () => {
        await fetchData(fetchFn, fetchActionTypes, dispatch);
        expect(fetchFn).toHaveBeenCalled();
    });

    it('dispatches the correct error action if fetchFn rejects', async () => {
        const errorMessage = 'error message';
        fetchFn.mockRejectedValueOnce({ message: errorMessage })

        await fetchData(fetchFn, fetchActionTypes, dispatch)
        expect(dispatch.mock.calls[0][0]).toEqual({ type: fetchActionTypes.start });
        expect(dispatch.mock.calls[1][0]).toEqual({ type: fetchActionTypes.error, error: errorMessage });
    });
});