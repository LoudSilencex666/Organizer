import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavigationComponent } from './nav-bar/navigation.component';
import { LoginComponent } from './nav-bar/login.component';
import { RegisterComponent } from './nav-bar/register.component';
import { MainContentComponent } from './main-content/main-content.component';
import { SinglePartComponent } from './main-content/single-part.component';
import { FooterComponent } from './footer/footer.component';
import { CalendarComponent } from './calendar/calendar.component';
import { EmptyDayComponent } from './calendar/days/empty.day.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: MainContentComponent },
  { path: 'calendar', component: CalendarComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LoginComponent,
    RegisterComponent,
    MainContentComponent,
    SinglePartComponent,
    FooterComponent,
    CalendarComponent,
    EmptyDayComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
