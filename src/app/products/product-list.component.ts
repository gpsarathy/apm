import { Component, NgModule, Input, OnInit } from '@angular/core';
import { PConvertToStars } from '../pipes/PConvertToStars';
import { StarRatingComponent } from '../star-rating/star-rating.component';
import { IProducts } from './IProduct';

@Component({
    selector:"pm-products",
    templateUrl:"./product-list.component.html"
})

export class ProductListComponent implements OnInit
{
    ngOnInit(): void {
        this.products=this.allProducts;
    }
pageTitle:string="Product List Page";
showStatus:boolean = false;
allProducts : IProducts[]=[
    {
        name:"Watch",
        code:"W05",
        status:"Y",
        price:"Rs 200",
        rating:"9"
    },
    {
        name:"Mobile",
        code:"M65",
        status:"Y",
        price:"Rs 2000",
        rating:"7"
    },
    {
        name:"Note",
        code:"A12",
        status:"Y",
        price:"Rs 56",
        rating:"7"
    },
    {
        name:"Pen",
        code:"A32",
        status:"N",
        price:"Rs 2",
        rating:"8"
    },
    {
        name:"Pencil",
        code:"P32",
        status:"Y",
        price:"Rs 2",
        rating:"6"
    }
];
products:IProducts[];

private _addCode: string;

get addCode():string
{
    return this._addCode;
}

set addCode(value:string)
{
    this.testFunc();
    this.products= value.toLowerCase?this.allProducts.filter((product:IProducts)=>product.name.indexOf(value)!=-1):this.allProducts;
    this._addCode=value;
}
testFunc()
{
    console.log("In SET");
}
toggleStatus()
{
 this.showStatus= !this.showStatus;
}
ratingClick(rating:number)
{
    this.pageTitle="You gave "+rating;
}
}