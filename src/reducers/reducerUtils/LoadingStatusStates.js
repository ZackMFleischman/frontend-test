import LoadingStatus from './LoadingStatus';

export const getNotLoadedState = () => ({
    loadingStatus: LoadingStatus.NOT_LOADED
});

export const getLoadingState = () => ({
    loadingStatus: LoadingStatus.LOADING
});

export const getLoadingSuccessState = (data) => ({
    loadingStatus: LoadingStatus.LOADED_SUCCESSFULLY,
    data
});

export const getLoadingErrorState = (error) => ({
    loadingStatus: LoadingStatus.LOADED_ERROR,
    error
});