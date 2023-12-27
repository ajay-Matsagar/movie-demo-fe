import { all, put, takeLatest } from "redux-saga/effects";
import { setMovies } from "./moviesSlice";
import { setLoading } from "../reducers/loader/LoaderSlice";
import MoviesService from "../../services/MoviesDataService";
import { setToaster } from "../reducers/toaster/ToasterSlice";

export const { fetchMoviesList, addMovie, deleteMovie, editMovie } = {
  fetchMoviesList: (payload) => {
    return {
      type: "FETCH_MOVIES",
      payload,
    };
  },
  addMovie: (payload) => {
    return {
      type: "ADD_MOVIE",
      payload,
    };
  },
  deleteMovie: (payload) => {
    return {
      type: "DELETE_MOVIE",
      payload,
    };
  },
  editMovie: (payload) => {
    return {
      type: "EDIT_MOVIE",
      payload,
    };
  },
};

function* handleFetchMovies(action) {
  try {
    yield put(setLoading({ isLoading: true }));

    const response = yield MoviesService.getAllMovies(
      action?.payload?.page || 1,
      8,
      localStorage.getItem("token")
    );
    yield put(setLoading({ isLoading: false }));

    yield put(setMovies(response.data));
  } catch (error) {
    yield put(
      setToaster({
        open: true,
        message: error?.message,
        severity: "error",
      })
    );
    yield put(setLoading({ isLoading: false }));
    console.error("Error in handleFetchMovies saga:", error);
  }
}

function* handleAddMovie(action) {
  try {
    yield put(setLoading({ isLoading: true }));

    yield MoviesService.addMovieDetails(
      action?.payload?.body,
      localStorage.getItem("token")
    );
    action?.payload?.addMovieButtonHandle(false);
    yield put(fetchMoviesList());
    yield put(setLoading({ isLoading: false }));
    yield put(
      setToaster({
        open: true,
        message: "Movie added successefully!",
        severity: "success",
      })
    );
  } catch (error) {
    yield put(setLoading({ isLoading: false }));
    yield put(
      setToaster({
        open: true,
        message: error?.message,
        severity: "error",
      })
    );
    console.error("Error in handleFetchMovies saga:", error);
  }
}

function* handleDeleteMovie(action) {
  try {
    yield put(setLoading({ isLoading: true }));
    yield MoviesService.deleteMovie(
      action?.payload?.id,
      localStorage.getItem("token")
    );
    yield put(fetchMoviesList());
    yield put(setLoading({ isLoading: false }));
    yield put(
      setToaster({
        open: true,
        message: "Movie deleted successefully!",
        severity: "success",
      })
    );
  } catch (error) {
    yield put(
      setToaster({
        open: true,
        message: error?.message,
        severity: "error",
      })
    );
    yield put(setLoading({ isLoading: false }));
    console.error("Error in handleFetchMovies saga:", error);
  }
}

function* handleEditMovie(action) {
  try {
    yield put(setLoading({ isLoading: true }));
    yield MoviesService.updateMovieDetails(
      action?.payload?.id,
      action?.payload?.body,
      localStorage.getItem("token")
    );
    action?.payload?.addMovieButtonHandle(false);
    yield put(fetchMoviesList());
    yield put(setLoading({ isLoading: false }));
    yield put(
      setToaster({
        open: true,
        message: "Movie updated successefully!",
        severity: "success",
      })
    );
  } catch (error) {
    yield put(setLoading({ isLoading: false }));
    yield put(
      setToaster({
        open: true,
        message: error?.message,
        severity: "error",
      })
    );
    console.error("Error in handleFetchMovies saga:", error);
  }
}

export function* moviesRootSaga() {
  yield all([
    takeLatest(fetchMoviesList().type, handleFetchMovies),
    takeLatest(addMovie().type, handleAddMovie),
    takeLatest(deleteMovie().type, handleDeleteMovie),
    takeLatest(editMovie().type, handleEditMovie),
  ]);
}
