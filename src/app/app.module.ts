import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UserListItemComponent } from './components/user-list-item/user-list-item.component';
import { HttpClientModule } from "@angular/common/http";
import { UserInfoComponent } from './components/user-info/user-info.component';
import { PostsComponent } from './components/posts/posts.component';
import { FormsModule} from "@angular/forms";
import { UserInfoFormComponent } from './components/user-info-form/user-info-form.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { PostItemComponent } from './components/post-item/post-item.component';
import { PostsListComponent } from './components/posts-list/posts-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    PageNotFoundComponent,
    NavbarComponent,
    UsersListComponent,
    UserListItemComponent,
    UserInfoComponent,
    PostsComponent,
    UserInfoFormComponent,
    PostItemComponent,
    PostsListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MessagesModule,
    MessageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
