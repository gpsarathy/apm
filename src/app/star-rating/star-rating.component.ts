import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnInit,OnChanges {
  
  ngOnChanges(){
    this.starWidth=this.rating*75/10;
  }
  @Input() rating:number;
  starWidth:number;
  constructor() { }
  
  ngOnInit() {
  }

}
