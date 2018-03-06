import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ChatService } from '../services/ChatService';
import { ChatComponent } from './chat/chat.component';
import {FormsModule} from '@angular/forms';
import { LoginFormComponent } from './login-form/login-form.component';
import { SessionService } from '../services/session.service';
import { HttpModule } from '@angular/http';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { NgSemanticModule } from 'ng-semantic';
import { SingupFormComponent } from './singup-form/singup-form.component';
import { AnimationComponent } from './animation/animation.component';
import { ProfileComponent } from './profile/profile.component';
import { EditComponent } from './edit/edit.component';
import { UserListComponent } from './user-list/user-list.component';
import { userService } from '../services/user.service';



@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    LoginFormComponent,
    HomeComponent,
    SingupFormComponent,
    AnimationComponent,
    ProfileComponent,
    EditComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    NgSemanticModule
  ],
  providers: [ChatService,SessionService,userService],
  bootstrap: [AppComponent]
})
export class AppModule { }
