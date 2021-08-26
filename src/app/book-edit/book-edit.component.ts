import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {BookService} from '../service/book.service';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  bookForm: FormGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    author: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required)
  });
  id: number;
  constructor(private bookService: BookService, private activateRoute: ActivatedRoute) {
    this.activateRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getBookById(this.id);
    })
  }

  ngOnInit(): void {
  }
  getBookById(id: number) {
    return this.bookService.getBookById(id).subscribe()
  }
  edit(id: number) {
    const book = this.bookForm.value;
    this.bookService.editBookById(id, book).subscribe(() => {
      alert('Successful Update');
    }, e => {
      console.log(e);
    });
  }
}
