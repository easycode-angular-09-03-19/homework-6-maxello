import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { PostsService } from '../../services/posts.service';
import { Post } from '../../interfaces/Post';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  currentUserId: string;
  posts: Post[];
  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService
  ) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe((param: ParamMap) => {
      this.currentUserId = param.get('userId');

      this.postsService.getPostsByUserId(this.currentUserId).subscribe((data: Post[]) => {
        if (data.length) {
          this.posts = data;
        }
      });
    })
  }
}
