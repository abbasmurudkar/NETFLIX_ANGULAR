import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin-part',
  templateUrl: './signin-part.component.html',
  styleUrls: ['./signin-part.component.scss']
})
export class SIGNINPARTComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  hide=true;
    passwordtype:string="password";
    passwordshow:boolean=false
    tooglepass(my: { value: string; }){
        if(this.passwordshow==true)
        {
            this.passwordshow=false;
            this.passwordtype="password"
        }
        else{
            this.passwordshow=true;
            this.passwordtype=my.value
        }
    }

}
