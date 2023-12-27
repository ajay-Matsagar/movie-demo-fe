import { all } from "redux-saga/effects";
import { loadingRootSaga } from "../reducers/loader/LoderSaga";
import { toasterRootSaga } from "../reducers/toaster/ToasterSaga";

function* rootSaga() {
  yield all([
    loadingRootSaga(),
    toasterRootSaga(),
    // Add other sagas as needed
  ]);
}
export default rootSaga;
