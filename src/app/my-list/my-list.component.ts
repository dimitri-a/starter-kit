import { Component, OnInit } from '@angular/core';
import { MylistService }  from './mylist.service';
@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.scss']
})
export class MyListComponent implements OnInit {

  let players=[];

  constructor(private mylistservice:MylistService) {
    let players = mylistservice.getGreeting();
   }

  ngOnInit() {

  }

}
