import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  category1 = {categoryId : 3, categoryName:"Kozmetik"}
  category2 = {categoryId : 3, categoryName:"Takı Tasarım"}
  category3 = {categoryId : 3, categoryName:"Elektronik"}
  category4 = {categoryId : 3, categoryName:"Araç"}
  category5 = {categoryId : 3, categoryName:"Erkek Giyim"}
  category6 = {categoryId : 3, categoryName:"Bayan Giyim"}
  category7 = {categoryId : 3, categoryName:"Mutfak"}
  category8 = {categoryId : 3, categoryName:"Spor"}
  category9 = {categoryId : 3, categoryName:"Okul"}

  categories = [this.category1,this.category2,this.category3,this.category4,this.category5,this.category6,this.category7,this.category8,this.category9]
  constructor() { }

  ngOnInit(): void {
  }

}
