import { Action, createFeatureSelector, createSelector } from '@ngrx/store';
import { UserActions, UserActionTypes } from './../../actions/user.actions';
import { User } from '../../models';

export interface State {
  users: User[];
}

export const initialState: State = {
  users: []
};

export function reducer(state = initialState, action: UserActions): State {
  switch (action.type) {
    case UserActionTypes.LoadUsersSuccess: {
      return {
        ...state,
        users: action.payload.users
      };
    }

    default:
      return state;
  }
}

export const selectUsersState = createFeatureSelector<State>('user');

export const selectAllUsers = createSelector(
  selectUsersState,
  state => state.users
);

export const selectUserById = (id: number) => createSelector(
  selectAllUsers,
  users => {
    const filteredUsers = users.filter(user => user.id === id);
    return filteredUsers.length === 1 ? filteredUsers[0] : null;
  }
);
