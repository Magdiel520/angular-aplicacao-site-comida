import { OrderDetailsService } from './../../services/order-details.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private service: OrderDetailsService) { }
  foodData:any;

  ngOnInit(): void {
    this.foodData = this.service.foodDetails;
  }
}
