import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { Action } from '@ngrx/store';

import { UserActionTypes, LoadUsers, LoadUsersSuccess } from './user.actions';
import { UserService } from '../services/user.service';

@Injectable()
export class UserEffects {
  @Effect()
  loadUsers$: Observable<Action> = this.actions$.pipe(
    ofType<LoadUsers>(UserActionTypes.LoadUsers),
    switchMap((action: LoadUsers) => this.userService.getUsers().pipe(
      map((users: any) => new LoadUsersSuccess({ users }))
    ))
  );

  constructor(private actions$: Actions, private userService: UserService) {}
}
