import { Component, NgModule, Input, OnInit } from '@angular/core';
import { PConvertToStars } from '../pipes/PConvertToStars';
import { StarRatingComponent } from '../star-rating/star-rating.component';
import { IProducts } from './IProduct';
import { ProductsService } from './products.service';

@Component({
    selector:"pm-products",
    templateUrl:"./product-list.component.html"
})

export class ProductListComponent implements OnInit
{
    constructor(private productService:ProductsService){}
    ngOnInit() {
        this.productService.getProductDetails().subscribe(p=>
            {
                this.allProducts=p;
                this.products=this.allProducts;
            });
        console.log("NgOninit "+this.allProducts);
    }
pageTitle:string="Product List Page";
showStatus:boolean = false;
allProducts : IProducts[];
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