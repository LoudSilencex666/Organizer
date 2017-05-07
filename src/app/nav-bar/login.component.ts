import { Component } from '@angular/core';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})

export class LoginComponent {
    selectedLogin = true;
    selectedRegister = true;
    
    onSelectRegister(): void {
    this.selectedRegister = !this.selectedRegister;
    }

    onSelectLogin(): void {
    this.selectedLogin = !this.selectedLogin;
  }

  
}