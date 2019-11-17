const LoadingStatus = {
    NOT_LOADED: 'NOT_LOADED',
    LOADING: 'LOADING',
    LOADED_SUCCESSFULLY: 'LOADED',
    LOADING_ERROR: 'LOADING_ERROR',
};

export const isNotLoaded = (loadingStatus) => loadingStatus === LoadingStatus.NOT_LOADED || loadingStatus === LoadingStatus.LOADING;
export const couldntLoad = (loadingStatus) => loadingStatus === LoadingStatus.LOADING_ERROR;

export default LoadingStatus;