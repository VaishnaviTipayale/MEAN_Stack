import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vaishnavi',
  templateUrl: './vaishnavi.component.html',
  styleUrls: ['./vaishnavi.component.css']
})
export class VaishnaviComponent implements OnInit {
  userinput='';
  newPost='No content'

  savepost(){
    //alert(postdata value);
    //cansole.log(postdata value);
    this.newPost='';
  }
  constructor() { }

  ngOnInit(): void {
  }

}
