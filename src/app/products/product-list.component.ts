import { Component, NgModule, Input } from '@angular/core';
import { PConvertToStars } from '../pipes/PConvertToStars';
import { StarRatingComponent } from '../star-rating/star-rating.component';

@Component({
    selector:"pm-products",
    templateUrl:"./product-list.component.html"
})

export class ProductListComponent
{
pageTitle:string="Product List ! :-)";
showStatus:boolean = false;

products : any[] =[
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
    }
];
private _addCode: string;

get addCode():string
{
    return this._addCode;
}

set addCode(value)
{
    this.testFunc();
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
    this.pageTitle="YOu gave "+rating;
}
}