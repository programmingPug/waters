import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UserAdminComponent } from './user-admin/user-admin.component';
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [
	/* default path sends users to login */
	{ path: '', redirectTo: '/login', pathMatch: 'full' },
	/* component paths */
	{ path: 'login', component: LoginComponent },
	{ path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
	{ path: 'about', component: AboutComponent, canActivate: [AuthGuard] },
	{ path: 'user-admin', component: UserAdminComponent, canActivate: [AuthGuard] }

];


@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule { }
