import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { LoginService } from '../_services/login.service';
import { AlertService } from '../_services/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	public form: any;

	constructor(
		private loginService: LoginService,
		private alertService: AlertService,
		private router: Router
		) { }

	ngOnInit() {
		this.loginService.logout();
		this.buildForm();
	}

	buildForm(){
		const formGroup = {};
		
		formGroup["userName"] = new FormControl( "", this.mapValidators({ required: true }) );
		formGroup["password"] = new FormControl( "", this.mapValidators({ required: true }) );

		this.form = new FormGroup(formGroup);
	}

	private mapValidators(validators) {
		const formValidators = [];
		
		for( var key in validators ){
			if( key == "required" ) {
				if( validators.required ){
					formValidators.push( Validators.required );
				}
			}
		}
		return formValidators;
	}

	login( form ) {
		
		this.alertService.clear();
		this.form.controls.userName.setValue("", false);
		this.form.controls.password.setValue("", false);

		this.loginService.login( form )
			.subscribe(
				data => {
					if( Object.keys(data).length === 0 ){
						this.alertService.error( "Bad username or password" );
					}else{
						//console.log(data[0].userName);
						localStorage.setItem('currentUser', JSON.stringify(data[0]));
						this.router.navigate(["home"]);
					}
				},
				error => {
					//console.log(error)
					this.alertService.error( "Bad username or password" );
				});
	}

}
