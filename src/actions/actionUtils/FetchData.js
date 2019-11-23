import toAction, { toActionError } from "./ToAction";

const fetchData = (fetchFn, fetchActions, dispatch) => {
    dispatch(toAction(fetchActions.start));
    return fetchFn()
        .then(data => dispatch(toAction(fetchActions.success, data)))
        .catch(error => dispatch(toActionError(fetchActions.error, error.message)));
};

export default fetchData;