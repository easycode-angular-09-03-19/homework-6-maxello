import { Component, OnInit } from '@angular/core';
import { UsersService } from "../../services/users.service";
import { User } from "../../interfaces/User";
import { MessageEventsService } from '../../services/message-events.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users: User[];

  constructor(
    private usersService: UsersService,
    private messageEvents: MessageEventsService
  ) { }

  ngOnInit() {
    this.usersService.getUsers().subscribe((data: User[]) => {
      this.users = data;
    }, () => {
      this.messageEvents.emitMessage({
        severity: 'error', 
        summary: 'Something wrong!'
      });
    });
  }

}
