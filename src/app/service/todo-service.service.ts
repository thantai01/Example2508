import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Todo} from '../todo';
import {environment} from '../../environments/environment';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>(API_URL);
  }

  getOne(id: number): Observable<Todo> {
    return this.http.get<Todo>(API_URL + '/' + id);
  }

  updateById(id: number, todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(API_URL + '/' + id, todo);
  }

  saveTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(API_URL, todo);
  }

  deleteTodo(id: number): Observable<Todo> {
    return this.http.delete<Todo>(API_URL + '/' + id);
  }
}
