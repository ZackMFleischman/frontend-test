const LoadingStatus = {
    NOT_LOADED: 'NOT_LOADED',
    LOADING: 'LOADING',
    LOADED_SUCCESSFULLY: 'LOADED_SUCCESSFULLY',
    LOADING_ERROR: 'LOADING_ERROR',
};

export const notLoaded = (loadingStatus) => loadingStatus === LoadingStatus.NOT_LOADED;
export const haveNotFinishedLoading = (loadingStatus) => loadingStatus === LoadingStatus.NOT_LOADED || loadingStatus === LoadingStatus.LOADING;
export const couldntLoad = (loadingStatus) => loadingStatus === LoadingStatus.LOADING_ERROR;
export const shouldLoad = (loadingStatus) => loadingStatus === LoadingStatus.NOT_LOADED || loadingStatus === LoadingStatus.LOADING_ERROR;

export default LoadingStatus;