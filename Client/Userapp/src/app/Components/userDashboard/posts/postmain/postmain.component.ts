import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/Classes/post';

@Component({
  selector: 'app-postmain',
  templateUrl: './postmain.component.html',
  styleUrls: ['./postmain.component.css']
})
export class PostmainComponent implements OnInit {
  @Input() userPosts : Post[] = []
  constructor() { }

  ngOnInit(): void {
  }

}
