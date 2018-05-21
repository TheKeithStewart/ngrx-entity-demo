import { Action } from '@ngrx/store';
import { User } from '../models';

export enum UserActionTypes {
  LoadUsers = '[User] Load Users',
  LoadUsersSuccess = '[User] Load Users Success',
  LoadUsersFail = '[User] Load Users Fail',
  AddUser = '[User] Add User',
  AddUserSuccess = '[User] Add User Success',
  AddUserFail = '[User] Add User Fail',
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

export class AddUser implements Action {
  readonly type = UserActionTypes.AddUser;

  constructor(public payload: { user: User }) {}
}

export class AddUserSuccess implements Action {
  readonly type = UserActionTypes.AddUserSuccess;

  constructor(public payload: { user: User }) {}
}

export class AddUserFail implements Action {
  readonly type = UserActionTypes.AddUserFail;

  constructor(public payload: { error: string }) {}
}

export type UserActions =
  LoadUsers
  | LoadUsersSuccess
  | LoadUsersFail
  | AddUser
  | AddUserSuccess
  | AddUserFail;
