import { Component, OnInit } from '@angular/core';
import {Category} from '../category';
import {CategoryServiceService} from '../serivce/category-service.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories: Category[] = [];

  constructor(private categoryService: CategoryServiceService) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll() {
    this.categoryService.getAll().subscribe(categories => {
      this.categories = categories;
    });
  }
}
