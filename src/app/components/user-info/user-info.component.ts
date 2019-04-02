import { Component, OnInit } from '@angular/core';
import { UserEventsService } from "../../services/user-events.service";
import { EditState } from "../../interfaces/User";
import { Subscription } from 'rxjs';
import { Location } from "@angular/common";

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  constructor(
    private userEvents: UserEventsService,
    private location: Location
  ) { }

  editState: EditState = {
    isEdit: false
  };

  private subscription: Subscription;

  ngOnInit() {
    this.subscription = this.userEvents.userEditFormStateObservableSubject.subscribe((value: EditState) => {
      this.editState = value;
    });
  }

  onGoBack() {
    this.location.back();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onEdit(){
    this.editState.isEdit = !this.editState.isEdit;
    this.userEvents.emitEditUserState(this.editState);
  }
}
