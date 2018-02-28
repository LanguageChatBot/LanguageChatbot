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

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    LoginFormComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ChatService,SessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
