import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
  data={
    to:"",
    subject:"",
    message:""
  }
  constructor() { }

  ngOnInit(): void {
  }
  onSubmitForm=()=>{
    console.log("Form Submitted");
    console.log(this.data);

  }

}
