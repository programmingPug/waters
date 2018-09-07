import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserAdminComponent } from './user-admin/user-admin.component';

const routes: Routes = [
	/* default path sends users to login */
	{ path: '', redirectTo: '/login', pathMatch: 'full' },
	/* component paths */
	{ path: 'login', component: LoginComponent },
	{ path: 'home', component: HomeComponent },
	{ path: 'user-admin', component: UserAdminComponent }
];


@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule { }
