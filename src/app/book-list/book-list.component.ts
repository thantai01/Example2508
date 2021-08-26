import { Component, OnInit } from '@angular/core';
import {Book} from '../book';
import {BookService} from '../service/book.service';
import {ActivatedRoute, Router, Routes} from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[];
  constructor(private bookService: BookService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.bookService
      .getAll().subscribe(data => {
        this.books = data;
        console.log(data);
    }, error => {
      console.log(error);
    });
  }
  deleteBook(id: number) {
    if (confirm('Do you want to delete') === true) {
      this.bookService.deleteBook(id);
      alert('Delete successful');
    }
    else {
      this.router.navigate(['http://localhost:4200/books']);
    }
  }
}
