import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { EditState } from "../interfaces/User";

@Injectable({
  providedIn: 'root'
})
export class UserEventsService {

  private userEditUserItemStateSource = new BehaviorSubject({});
  public  userEditUserItemStateObservableSubject = this.userEditUserItemStateSource.asObservable();

  private userEditFormStateSource = new BehaviorSubject({});
  public  userEditFormStateObservableSubject = this.userEditFormStateSource.asObservable();

  constructor() { }

  emitEditUserState(value: EditState) {
    this.userEditUserItemStateSource.next(value);
  }

  emitEditFormState(value: EditState) {
    this.userEditFormStateSource.next(value);
  }
}
