import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PortingUser, ListResponse, ListParams } from 'models';
import { RootState } from './../../app/store';

export interface UserState {
    loading: boolean;
    list: PortingUser[];
}

export const initialState: UserState = {
    loading: false,
    list: [],
};

const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        fetchUser(state) {
            state.loading = true;
        },
        fetchUserSuccess(state, action: PayloadAction<ListResponse<PortingUser>>) {
            state.loading = false;
            state.list = action.payload.data;
        },
        fetchUserFailed(state, action: PayloadAction<string>) {
            state.loading = false;
            console.log(action);
        },

        setUser(state, action: PayloadAction<ListParams>) {
          state.list = action.payload.data;
        },
    },
});


// Actions
export const userActions = userSlice.actions;

// Selectors
export const selectUserLoading = (state: RootState) => state.user.loading;
export const selectUserList = (state: RootState) => state.user.list;

// Reducer
const userReducer = userSlice.reducer;
export default userReducer;