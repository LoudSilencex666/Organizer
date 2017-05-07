import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from '../calendar/calendar.component';
    

@Component({
    selector: 'nav-bar',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.css'],
})

export class NavigationComponent {
     
    selectedLogin = false;
    selectedRegister = false;
    
    onSelectRegister(): void {
    this.selectedRegister = !this.selectedRegister;
    }

    onSelectLogin(): void {
    this.selectedLogin = !this.selectedLogin;
  }

  
}

