import { Component, OnInit } from '@angular/core';
import { UsersService } from "../../services/users.service";
import { User, EditState, UserFormFields } from "../../interfaces/User";
import { ActivatedRoute } from "@angular/router";
import { UserEventsService } from "../../services/user-events.service";
import { Router } from "@angular/router";
import { Subscription } from 'rxjs';
import { MessageEventsService } from '../../services/message-events.service';

@Component({
  selector: 'app-user-info-form',
  templateUrl: './user-info-form.component.html',
  styleUrls: ['./user-info-form.component.css']
})
export class UserInfoFormComponent implements OnInit {
  user: User;

  userFieldsCopy: UserFormFields = {
    name: '',
    username: '',
    email: '',
    phone: '',
    website: ''
  };

  private subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private userService: UsersService,
    private userEvents: UserEventsService,
    private router: Router,
    private messageEvents: MessageEventsService
  ) { }

  formEditState: EditState = {
    isEdit: false
  }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.userService.getUserById(id).subscribe((data: User) => {
      this.user = data;
      this.subscription = this.userEvents.userEditUserItemStateObservableSubject.subscribe((value: EditState) => {
        this.formEditState = value;
        if (this.formEditState.isEdit) {
          this.userFieldsCopy.name = this.user.name;
          this.userFieldsCopy.email = this.user.email;
          this.userFieldsCopy.username = this.user.username;
          this.userFieldsCopy.phone = this.user.phone;
          this.userFieldsCopy.website = this.user.website;
        } else if (this.userFieldsCopy.name && this.userFieldsCopy.email) {
          this.user.name = this.userFieldsCopy.name;
          this.user.email = this.userFieldsCopy.email;
          this.user.username = this.userFieldsCopy.username;
          this.user.phone = this.userFieldsCopy.phone;
          this.user.website = this.userFieldsCopy.website;
        }
      });
    }, () => {
      this.messageEvents.emitMessage({
        severity: 'error', 
        summary: 'Something wrong!'
      });
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSubmit(form: any) {
    if (form.valid) {
      this.userService.editUser(this.user).subscribe((data) => {
      this.formEditState.isEdit = false;
      this.userEvents.emitEditUserState(this.formEditState);
      this.messageEvents.emitMessage({
        severity: 'success', 
        summary: 'Information was changed successfuly.'
      });
      this.router.navigate([`/`]);
      }, () => {
        this.messageEvents.emitMessage({
          severity: 'error', 
          summary: 'Something wrong!'
        });
      });
    }
  }

}
