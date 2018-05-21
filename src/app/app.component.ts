import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromUser from './state/user.reducer';
import * as userActions from './state/user.actions';
import { User } from './models';
import { DataSource } from '@angular/cdk/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  selectedUser$: Observable<User>;

  displayedColumns = ['id', 'email', 'actions'];
  dataSource: UsersDataSource;

  constructor(private store: Store<fromUser.State>) {
    this.store.dispatch(new userActions.LoadUsers());

  }

  ngOnInit() {
    this.dataSource = new UsersDataSource(this.store);
  }

  selectUser(id: number) {
    this.selectedUser$ = this.store.select(fromUser.selectUserById(id));
  }
}

class UsersDataSource implements DataSource<any> {
  constructor(private store: Store<fromUser.State>) {}

  connect() {
    return this.store.select(fromUser.selectAllUsers);
  }

  disconnect() {}
}
