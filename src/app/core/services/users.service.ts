import { Injectable } from '@angular/core';
import {User} from '../models/User';
import {Observable} from 'rxjs';

const ELEMENT_DATA: User[] = [
  {id: 1, name: 'Lesly', lastName: 'Ariza', username:'Lariza'},
  {id: 1, name: 'Carlos', lastName: 'Obando', username:'Cobando'},
  {id: 1, name: 'Camilo', lastName: 'calderon', username:'Ccalderon'},
  {id: 1, name: 'Armando', lastName: 'Ospina', username:'Aospina'},
];

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  public getUsers(): Observable<User[]> {
    return new Observable((observer) => {
      observer.next(ELEMENT_DATA);
      observer.complete();
    });
  }
}
