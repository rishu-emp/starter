import { all, fork } from 'redux-saga/effects';
import { getUserInfoWatcher } from './watchers/auth.watcher';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function* rootSaga() {
  yield all([fork(getUserInfoWatcher)]);
}
