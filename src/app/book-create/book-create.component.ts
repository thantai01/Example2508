import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {BookService} from '../service/book.service';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {
  bookForm: FormGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    author: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required)
  });
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
  }
  add() {
    const book = this.bookForm.value;
    this.bookService.addBook(book).subscribe(() => {
      this.bookForm.reset();
      alert('Successful Added');
    }, error => {
      console.log(error);
    });
  }
}
