import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/Classes/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input()post : Post = {_id:"" , body:"" , title:""}
  constructor() { }

  ngOnInit(): void {
  }

}
