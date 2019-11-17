import toAction, { toActionError } from "./ToAction";

const fetchData = (fetchFn, fetchActions, dispatch) => {
    dispatch(toAction(fetchActions.start));
    fetchFn()
        .then(data => dispatch(toAction(fetchActions.success, data)))
        .catch(error => dispatch(toActionError(fetchActions.error, error)));
};

export default fetchData;