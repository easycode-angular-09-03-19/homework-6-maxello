import { Component, OnInit } from '@angular/core';
import { UserEventsService } from "../../services/user-events.service";
import { EditState } from "../../interfaces/User";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  constructor(
    private userEvents: UserEventsService
  ) { }

  editState: EditState = {
    isEdit: false
  };

  private subscription: Subscription;

  ngOnInit() {
    this.subscription = this.userEvents.userEditFormStateObservableSubject.subscribe((value: EditState) => {
      console.log("from form", value)
      this.editState = value;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onEdit(){
    this.editState.isEdit = !this.editState.isEdit;
    this.userEvents.emitEditUserState(this.editState);
  }
}
