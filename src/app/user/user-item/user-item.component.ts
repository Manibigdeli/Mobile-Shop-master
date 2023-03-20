import { Component, Input, } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { USerModel } from '../user.model';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent {
 @Input() id:number
 @Input()  user:USerModel
 constructor(){}



}
