import { Component, OnInit, Input } from '@angular/core';
import { GithubCommit } from '../interfaces/github-commit';
import * as moment from 'moment';

@Component({
  selector: 'app-commit',
  templateUrl: './commit.component.html',
  styleUrls: ['./commit.component.css']
})
export class CommitComponent implements OnInit {

  @Input() commit: GithubCommit;

  constructor() { }

  ngOnInit() {
    this.commit.commit.message = this.commit.commit.message.split('\n')[0];
    this.commit.date = moment(this.commit.date).fromNow();
  }

}
