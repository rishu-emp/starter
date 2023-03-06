/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { getUserInfoRequest } from '@store/slices/auth/authSlice';
import { takeLatest } from 'redux-saga/effects';
import { getUserInfo } from '../handlers/auth.handler';

export function* getUserInfoWatcher() {
  yield takeLatest(getUserInfoRequest.type, getUserInfo);
}
