import { Action } from '@ngrx/store';
import { User } from '../models';

export enum UserActionTypes {
  LoadUsers = '[User] Load Users',
  LoadUsersSuccess = '[User] Load Users Success',
  LoadUsersFail = '[User] Load Users Fail',
  AddUserSuccess = ''
}

export class LoadUsers implements Action {
  readonly type = UserActionTypes.LoadUsers;
}

export class LoadUsersSuccess implements Action {
  readonly type = UserActionTypes.LoadUsersSuccess;

  constructor(public payload: { users: User[] }) {}
}

export class LoadUsersFail implements Action {
  readonly type = UserActionTypes.LoadUsersFail;

  constructor(public payload: { error: string }) {}
}

export class AddUserSuccess implements Action {
  readonly type = UserActionTypes.AddUserSuccess;

  constructor(public payload: { user: User }) {}
}

export type UserActions =
  LoadUsers
  | LoadUsersSuccess
  | LoadUsersFail
  | AddUserSuccess;
