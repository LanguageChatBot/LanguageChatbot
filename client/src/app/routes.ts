import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LoginFormComponent } from "./login-form/login-form.component";
import { SingupFormComponent } from "./singup-form/singup-form.component";
import { ChatComponent } from "./chat/chat.component";
import { ProfileComponent } from "./profile/profile.component";
import { EditComponent } from "./edit/edit.component";
import { UserListComponent } from "./user-list/user-list.component";

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'singout', component: SingupFormComponent },
  { path: 'chat', component:ChatComponent},
  { path:'profile', component:ProfileComponent},
  { path: 'list', component:UserListComponent},
  { path: 'edit', component:EditComponent},
];