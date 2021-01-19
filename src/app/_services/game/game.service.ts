import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {RegistrationFormValues} from '../../models/game/registration-form-values/registration-form-values';

const API_URL = 'http://localhost:8080/api/cg/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http: HttpClient) { }

  create(game: object): Observable<object> {
    return this.http.post(API_URL + 'save', game);
  }

  public getFormValues(): Observable<RegistrationFormValues> {
    return this.http.get<RegistrationFormValues>(API_URL + 'save');
  }

}
