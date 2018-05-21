import { Action, createFeatureSelector, createSelector } from '@ngrx/store';
import { UserActions, UserActionTypes } from './user.actions';
import { User } from '../models';

export interface State {
  users: {
    ids: number[],
    entities: {
      [key: number]: User
    }
  };
}

export const initialState: State = {
  users: {
    ids: [],
    entities: {}
  }
};

export function reducer(state = initialState, action: UserActions): State {
  switch (action.type) {
    case UserActionTypes.LoadUsersSuccess: {
      const ids = action.payload.users.map(user => user.id);
      const entities: { [key: number]: User } = action.payload.users.reduce((map, obj) => {
        map[obj.id] = obj;
        return map;
      }, {});

      return {
        ...state,
        users: {
          ids,
          entities
        }
      };
    }

    case UserActionTypes.AddUserSuccess: {
      const ids: number[] = [ ...state.users.ids ];
      ids.push(action.payload.user.id);
      return {
        ...state,
        users: {
          ...state.users,
          entities: {
            [action.payload.user.id]: action.payload.user
          },
          ids
        }
      };
    }

    default:
      return state;
  }
}

export const selectUsersState = createFeatureSelector<State>('user');

export const selectAllUsers = createSelector(
  selectUsersState,
  state => state.users.ids.map(id => state.users.entities[id])
);

export const selectUserById = (id: number) => createSelector(
  selectAllUsers,
  users => users[id]
);
