import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-menupages',
  templateUrl: './menupages.component.html',
  styleUrls: ['./menupages.component.css']
})
export class MenupagesComponent implements OnInit{

  constructor(private param:ActivatedRoute, private service:OrderDetailsService){}
  getMenuId:any; 
  menuData:any;

  ngOnInit(): void {
    this.getMenuId = this.param.snapshot.paramMap.get('id');
    if(this.getMenuId){
      this.menuData = this.service.details.filter((value)=>{
        return value.id == this.getMenuId;
      })
    }   
  }
}
