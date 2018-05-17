import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromUser from './state/user.reducer';
import * as userActions from './state/user.actions';
import { User } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  users$: Observable<User[]>;
  selectedUser$: Observable<User>;

  constructor(private store: Store<fromUser.State>) {
    this.store.dispatch(new userActions.LoadUsers());

    this.users$ = this.store.select(fromUser.selectAllUsers);
    this.selectedUser$ = this.store.select(fromUser.selectUserById(500));
  }
}
