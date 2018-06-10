import {Component, OnInit} from '@angular/core';
import {MylistService} from './mylist.service';

@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.scss']
})
export class MyListComponent implements OnInit {

  public greet = ''; //todo DC if you change this from public to let it will throw errir

  constructor(public mylistservice: MylistService) {

  }

  ngOnInit() {
    this.greet = this.mylistservice.getGreeting();
  }

}
