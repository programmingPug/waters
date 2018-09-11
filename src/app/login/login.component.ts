import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../_services/login.service';
import { MatSnackBar } from '@angular/material';


@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

	public form: any;
	private snackBar: MatSnackBar;

	constructor(
		private loginService: LoginService,
		private router: Router,
		private matSnackBar: MatSnackBar
	) { }

	ngOnInit() {
		this.loginService.logout();
		this.buildForm();
		this.snackBar = this.matSnackBar;
	}

	buildForm(){
		const formGroup = {};
		
		/* Create form controls with a method to map custom validation with Angular provided ones. */
		formGroup["userName"] = new FormControl( "", this.mapValidators({ required: true }) );
		formGroup["password"] = new FormControl( "", this.mapValidators({ required: true }) );

		/* Pass form entitie object to create a FormGroup to be used by the template */
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
		
		/* Reset for values */
		this.form.controls.userName.setValue("", false);
		this.form.controls.password.setValue("", false);

		/* Hit up the login service for verification of credentials */
		this.loginService.login( form )
			.subscribe(
				data => {
					/* Reason for checking keys is simple, i'm not great at writing regular expressions and thats what i'm using for the mock DB. */
					if( Object.keys(data).length === 0 ){
						/* Bad login, show message */
						this.snackBar.open('Yeah No... Try again?');
					}else{
						/* Good login! set user object and redirect */
						localStorage.setItem('currentUser', JSON.stringify(data[0]));
						this.router.navigate(["home"]);
					}
				},
				error => {
					/* Bad login, show message */
					this.snackBar.open('Yeah No... Try again?');
				});
	}

}
