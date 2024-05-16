import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question } from '../interfaces/question';
import { Choice } from '../interfaces/choice';

@Injectable({
  providedIn: 'root'
})
export class PollService {
  private apiUrl = 'http://127.0.0.1:8000'

  constructor(private http: HttpClient) { }

  getItems(): Observable<any[]> {
    this.apiUrl += '/questions/'
    return this.http.get<any[]>(this.apiUrl);
  }

  getQuestions(): Observable<any[]> {
    this.apiUrl += '/questions/'
    return this.http.get<any[]>(this.apiUrl)
  }

  getChoices(): Observable<any[]> {
    this.apiUrl += '/choices/'
    return this.http.get<any[]>(this.apiUrl)
  }

}
