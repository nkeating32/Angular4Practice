import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FollowerService } from '../services/follower.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';

@Component({
  selector: 'followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {
  followers: any[]

  constructor(
    private route: ActivatedRoute,
    private service: FollowerService) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe(params => {

      })

    this.route.queryParamMap
      .subscribe(params => {

      })
    
    this.service.getAll()
      .subscribe(followers => this.followers = followers)
  }

}
