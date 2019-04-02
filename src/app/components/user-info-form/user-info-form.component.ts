import { Component, OnInit } from '@angular/core';
import { UsersService } from "../../services/users.service";
import { User, EditState } from "../../interfaces/User";
import { ActivatedRoute } from "@angular/router";
import { UserEventsService } from "../../services/user-events.service";
import { Router } from "@angular/router";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-info-form',
  templateUrl: './user-info-form.component.html',
  styleUrls: ['./user-info-form.component.css']
})
export class UserInfoFormComponent implements OnInit {
  user: User;
  userFieldsCopy = {
    name: "",
    email: ""
  };
  
  private subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private userService: UsersService,
    private userEvents: UserEventsService,
    private router: Router
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
        console.log("from user item", value);
        if(this.formEditState.isEdit){
          this.userFieldsCopy.name = this.user.name;
          this.userFieldsCopy.email = this.user.email;
        } else if(this.userFieldsCopy.name && this.userFieldsCopy.email){
          this.user.name = this.userFieldsCopy.name;
          this.user.email = this.userFieldsCopy.email;
        }
      });
    }, (err) => {
      console.log(err);
    });
  }

  ngOnDestroy() {
    console.log("Form Destroy");
    this.subscription.unsubscribe();
  }

  onSubmit(form: any) {
    if(form.valid) {
      this.userService.editUser(this.user).subscribe((data) => {
      this.formEditState.isEdit = false;
      // this.userEvents.emitEditFormState(this.isFormEdit);
      this.userEvents.emitEditFormState(this.formEditState);
      this.router.navigate([`/users`]);
      }, () => {

      });
    }
  }

}
