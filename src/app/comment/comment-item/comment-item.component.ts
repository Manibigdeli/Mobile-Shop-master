import { Component } from '@angular/core';
import { CommentService } from '../comment.service';
import {FormGroup , FormControl, Validators} from '@angular/forms'

@Component({
  selector: 'app-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.css']
})
export class CommentItemComponent {
  form:FormGroup = new FormGroup({
    'comment' : new FormControl(null , Validators.required)
  })
  data: any[] = [];
  submitting = false;
  user = {
    author: 'Admin',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
  };
  
constructor(private commentService:CommentService){}

  handleSubmit(): void {
      this.submitting = true;
      console.log(this.form.get('comment').value);
      this.commentService.addcomment(this.form.get('comment').value);
      setTimeout(() => {
        if(!this.form.value.valid){
          this.submitting = false
        }
       
      }, 3000);
  }
  
}
