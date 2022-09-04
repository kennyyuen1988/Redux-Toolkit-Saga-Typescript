
import { ListResponse } from './../../models/common';
import {PortingUser} from 'models';
import { call, put, takeLatest } from 'redux-saga/effects';
import axios from "axios";
import { userActions } from './portingSlice';

export function requestGetUser() {
  return axios.request({
    method: "get",
    url:
      "https://my-json-server.typicode.com/kennyyuenhk01/jsonServer/user/"
  });
}

function* fetchUser() {
  console.log('saga-fetchUser')
  try {
    const response:ListResponse<PortingUser> = yield call(requestGetUser);
    console.log('user', response.data)
    const responseData = {
      data:response.data,
      pagination: {
        _page:1,
        _limit:10,
        _totalRows:4,
      }
    }
    console.log('responseData',responseData)
    yield put(userActions.fetchUserSuccess(responseData));
  } catch(error){
    console.log('fetchUser error:', error)
    yield put(userActions.fetchUserFailed(error.message));
  }
}

export default function* userSaga() {
  yield takeLatest(userActions.fetchUser.type, fetchUser);
}
