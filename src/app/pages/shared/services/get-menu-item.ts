import { Injectable } from '@angular/core';
import {MenuItem} from "../models/MenuItem";
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GetMenuItemService {

  constructor() {
  }

  getMenuItem():Observable<MenuItem[]> {
    const mockData: MenuItem[] = [
      {
        id : '1',
        tittle: 'item1',
        children: [
          {
            id: '2',
            tittle: 'sub item1',
            children: []
          },
          {
            id: '3',
            tittle: 'sub item2',
            children: []
          }
        ]
      },
      {
        id : '4',
        tittle: 'item2',
        children: []
      }
    ]
   return of(mockData);
  }

}
