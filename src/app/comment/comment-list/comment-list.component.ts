import { Component, OnInit } from '@angular/core';
import { CommentModel } from '../comment.model';
import { CommentService } from '../comment.service';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit{
comment:CommentModel[]
constructor(private commentService:CommentService){}

ngOnInit(): void {
  this.comment = this.commentService.getcomment();
  this.commentService.commentchnage.subscribe(
    (comment:CommentModel[])=>{
      this.comment = comment
    }
  )
}
}
