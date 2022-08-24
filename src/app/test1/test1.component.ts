import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {

  number1:string = "Hello";
  
  str:string = "";

  peoples = ["Tom", "Bob", "Sam", "hghfg","Tom", "Bob", "Sam", "hghfg"];

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
  }

  test1(){
   
    this.http.get('http://numbersapi.com/42').subscribe(   (v) => console.log(v),
                                                            (e) => this.str = e.error.text)

  }


}


function test3(){
  
}


