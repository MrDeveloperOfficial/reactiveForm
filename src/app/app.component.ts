import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  userform!:FormGroup
  email = new FormControl('')

  constructor(private readonly fb:FormBuilder){}

  ngOnInit(): void {
    this.initiateForm()
  }



  initiateForm(){
    this.userform = this.fb.group({
      email : ['',Validators.required,Validators.maxLength(10)],
      password : ['',Validators.required],
      address : ['',Validators.required],
      city : ['',Validators.required],
      district : ['',Validators.required],
    })
  }

  submit(){
    // if (this.userform.invalid) {
    //   alert('Invalid from')
    //   return
    // }

    console.log(this.userform.value);
    
    
  }
  
}
