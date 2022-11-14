import { Component, OnInit, Output, EventEmitter } from '@angular/core';



// ანგულარის რეაქტიული ფორმების შემოსატანად
import { FormGroup,FormControl } from '@angular/forms';
import { User, USERS } from 'src/app/data/DUser';
import { getRandomText } from 'src/app/utils/URandomText';
import { IUser } from 'src/app/interface/IUser';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.scss']
})
export class TestFormComponent implements OnInit {

  @Output() clicked: EventEmitter<any> = new EventEmitter();

  // ფორმის შემთხვევა
  // testForm = new FormGroup({
  //   test1:new FormControl(""),
  //   test2:new FormControl(""),
  // })
  
  person : IUser = {
    firstName:"",
    lastName:"",
    age:0
  }

  // ინფუთის შემთხვევა
  // name = new FormControl('');

  // ორმხრივი მონაცემის ბმა
  // status:string = ""

  constructor() {
    // this.testForm.setValue({test1:"David",test2:"asd"})
  }

  ngOnInit(): void {
    // console.log("On Init")
  }

  ngAfterViewInit():void{
    // console.log("After View Init")
  }

  updateName(){
    // this.name.setValue("saxeli");
  }



  logValues(){
    // console.log(this.testForm.value)
  }


  changeStatusToNone(){
    // this.status = getRandomText()
  }


  savePerson(){
      // this.person.age = this.person.age*1

      // new User(this.person);

      // console.log(USERS);


      this.clicked.emit("ეს დაკლიკება გავიტანეთ მშობელში");
  }

}
