import { Injectable } from '@angular/core';

@Injectable()
export class MylistService {

  constructor() { }

  getGreeting ()
  {
    return "hello";
  }

}
