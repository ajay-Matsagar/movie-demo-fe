import { all, put, takeLatest } from 'redux-saga/effects'
import store from '../../store/store'
import { componentKey, setLoadingState } from './loginSlice'

//Generator function
function* postLoginUserWithCredentialsAsync(action) {
    try {


        yield put(setLoadingState(true))
        // toast.success("Welcome aboard! You've successfully logged in.")

    } catch (error) {
        // toast.error(error?.response?.data?.message?.toString())
        console.log('err: ', error)
    } finally {
    }
}

export const { postLoginUserWithCredentials } = {
    postLoginUserWithCredentials: (payload) => {
        return {
            type: 'AUTHENTICATION/LOGIN_API',
            payload
        }
    }
}

function* rootSaga() {
    yield all([
        takeLatest(postLoginUserWithCredentials().type, postLoginUserWithCredentialsAsync)
    ])
}

store.sagaManager.addSaga(componentKey, rootSaga)