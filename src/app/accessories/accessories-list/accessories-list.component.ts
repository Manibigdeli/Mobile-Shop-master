import { Component, OnInit } from '@angular/core';
import { AccessoriesModel } from '../accessories.model';
import { AccessoriesService } from '../accessories.service';

@Component({
  selector: 'app-accessories-list',
  templateUrl: './accessories-list.component.html',
  styleUrls: ['./accessories-list.component.css']
})
export class AccessoriesListComponent implements OnInit{
  accessories:AccessoriesModel[]
  constructor(private accessori:AccessoriesService){}
  ngOnInit(): void {
    this.accessories = this.accessori.getaccessories()
  }
}
