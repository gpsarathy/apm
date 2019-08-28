import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnChanges {
  
  ngOnChanges(){
    this.starWidth=this.rating*75/10;
  }
  @Input() rating:number;
  starWidth:number;
  @Output() ratingGiven :EventEmitter<number> = new  EventEmitter<number>();
  
  
  onRatingClick(i:number)
  {
    this.ratingGiven.emit(i);
  }
}
