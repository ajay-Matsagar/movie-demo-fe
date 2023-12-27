import store from "../../store/store";


export const componentKey = 'LOGIN';
const { actions } = store.reducerManager.add({
    key: componentKey,
    addedReducers: {
        setLoadingState: (state, action) => {
            state.loadingState = action.payload;
        },
    },
    initialReducerState: {
        loadingState: { state: "PAGE_READY", message: '' },
        isLogin: false
    }
});

export const {
    setLoadingState
} = actions;