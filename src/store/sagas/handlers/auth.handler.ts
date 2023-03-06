import { getUserInfoSucceed } from '@store/slices/auth/authSlice';
import { call, put } from 'redux-saga/effects';
import { getUser } from '../requests/auth.request';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function* getUserInfo() {
  try {
    const email: string = yield call(getUser);
    yield put(getUserInfoSucceed(email));
  } catch (e) {
    console.log(e);
  }
}
