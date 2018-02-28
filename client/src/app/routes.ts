import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LoginFormComponent } from "./login-form/login-form.component";
import { ChatComponent } from "./chat/chat.component";

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent },
  { path: 'login', component: LoginFormComponent },
  { path:'chat', component:ChatComponent}
];