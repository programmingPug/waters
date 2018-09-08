import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserAdminComponent } from './user-admin/user-admin.component';
import { SearchViewComponent } from './search-view/search-view.component';
import { StockViewComponent } from './stock-view/stock-view.component';

import { HttpClientModule }    from '@angular/common/http';
import { JsonpModule } from '@angular/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './_mockdata/mock-data-nasdaq';

import { AlertComponent } from './_helpers/alert.component';
import { AlertService } from './_services/alert.service';
import { EmitcomService } from './_services/emitcom.service';

import { AppRoutingModule } from './/app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatIconRegistry } from "@angular/material";
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    UserAdminComponent,
    AlertComponent,
    SearchViewComponent,
    StockViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService
    ),
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    JsonpModule 
  ],
  providers: [
    AlertService,
    EmitcomService,
    MatIconRegistry
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor (public matIconRegistry: MatIconRegistry) {
    matIconRegistry.registerFontClassAlias ('fa');
  }
}
