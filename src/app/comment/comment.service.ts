import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { CommentModel } from "./comment.model";

@Injectable({providedIn:'root'})
export class CommentService{
    commentchnage = new Subject<CommentModel[]>()


    private comment:CommentModel[] = [
        new CommentModel('Admin test'),
        new CommentModel('Mani bigdeli')
    ]
 



    getcomment(){
       return this.comment.slice();
    }

    addcomment(comment:CommentModel){
        this.comment.push(new CommentModel(comment));
        this.commentchnage.next(this.comment.slice())
    }
}