import { Component } from '@angular/core';

@Component({
  selector: 'pm-login',
  templateUrl: './login.component.html'
})

export class LoginComponent{
    title = "Logs Portal";
    userId: string;
    password:string;
    login: boolean = false;
    invalidPassowrd: boolean = false;
    loginHandler(): void {
        console.log('handler called'+ this.userId + this.password);
        if(this.userId === 'admin' && this.password === 'iwonttellyou'){
            console.log("inside true");
            this.login = true;
        }
        else{
            console.log("inside false");
            this.login = false;
            this.invalidPassowrd = true;
        }
    }
}