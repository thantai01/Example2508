import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from '../book';

const GET_ALL_API =  'http://localhost:3000/books';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpClient: HttpClient) { }
  getAll(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(GET_ALL_API);
  }
  getBookById(id: number): Observable<Book> {
    return this.httpClient.get<Book>(GET_ALL_API + `/${id}`);
  }
  editBookById(id: number, book: Book): Observable<Book> {
    return this.httpClient.put<Book>(GET_ALL_API + `/${id}`, book);
  }
  addBook(book: Book): Observable<any> {
    return this.httpClient.post<Book>(GET_ALL_API, book);
  }
  deleteBook(id: number): Observable<any> {
    return this.httpClient.delete<Book>(GET_ALL_API + `${id}`);
  }
}
