import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchRepoPipe } from './pipes/search-repo.pipe';
import { CapitalizeNameDirective } from './directives/capitalize-name.directive';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    SearchRepoPipe,
    CapitalizeNameDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
