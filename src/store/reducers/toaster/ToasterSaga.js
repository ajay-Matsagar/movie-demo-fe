import { all, put, takeLatest } from "redux-saga/effects";
import { setToaster } from "./ToasterSlice";

export const { showToaster, hideToaster } = {
  showToaster: (payload) => {
    return {
      type: "OPEN_TOASTER",
      payload,
    };
  },
  hideToaster: () => {
    return {
      type: "CLOSE_TOASTER",
    };
  },
};

function* handleOpenToaster(action) {
  try {
    yield put(setToaster(action?.payload));
  } catch (error) {
    console.error("Error in handleOpenToaster saga:", error);
  }
}

function* handleCloseToaster() {
  try {
    yield put(setToaster());
  } catch (error) {
    console.error("Error in handleCloseToaster saga:", error);
  }
}

export function* toasterRootSaga() {
  yield all([
    takeLatest(showToaster().type, handleOpenToaster),
    takeLatest(hideToaster().type, handleCloseToaster),
  ]);
}
