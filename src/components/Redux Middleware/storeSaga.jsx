import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { put, call, takeLatest, all } from "redux-saga/effects";
import axios from "axios";
import { userReducer } from "./reducer"; // Assuming you have a userReducer in reducers.js
import {
  FETCH_USER_REQUEST,
  fetchUserSuccess,
  fetchUserFailure,
} from "./Actions";

// Saga Worker function to fetch user data
function* fetchUserSaga(action) {
  try {
    const response = yield call(
      axios.get,
      `https://jsonplaceholder.typicode.com/users/${action.payload}`
    );
    yield put(fetchUserSuccess(response.data));
  } catch (error) {
    yield put(fetchUserFailure(error.message));
  }
}

// Saga Watcher function
function* rootSaga() {
  yield takeLatest(FETCH_USER_REQUEST, fetchUserSaga);
}

// Create the Redux Saga middleware
const sagaMiddleware = createSagaMiddleware();

// Combine reducers if you have more than one reducer
const rootReducer = combineReducers({
  user: userReducer,
});

// Create the store with middleware applied
const storeSaga = createStore(rootReducer, applyMiddleware(sagaMiddleware));

// Run the rootSaga
sagaMiddleware.run(rootSaga);

export default storeSaga;
