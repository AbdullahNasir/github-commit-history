import { Component, OnInit, Input } from '@angular/core';
import { GithubCommit } from '../interfaces/github-commit';

@Component({
  selector: 'app-commit-group',
  templateUrl: './commit-group.component.html',
  styleUrls: ['./commit-group.component.css']
})
export class CommitGroupComponent implements OnInit {

  @Input() date: string;
  @Input() commits: GithubCommit[];

  constructor() { }

  ngOnInit() {
  }

}
