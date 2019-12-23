import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { GithubCommit } from '../interfaces/github-commit';
import { GithubApiServiceService } from '../github-api-service.service';
import * as _ from 'lodash';
import { GithubCommitsGrouped } from '../interfaces/github-commit-grouped';

@Component({
  selector: 'app-commits-list',
  templateUrl: './commits-list.component.html',
  styleUrls: ['./commits-list.component.css']
})
export class CommitsListComponent implements OnInit, OnChanges {

  keys = Object.keys;

  @Input() repositoryUrl: string;
  @Input() branch: string;
  groupedCommits: GithubCommitsGrouped = {};
  isLoading = false;

  constructor(private githubApi: GithubApiServiceService) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.branch.currentValue) {
      this.fetchCommits();
    }
  }

  async fetchCommits() {
    this.isLoading = true;
    const commits: GithubCommit[] = await this.githubApi.fetchCommits(this.repositoryUrl, this.branch);
    this.groupedCommits = _.groupBy(commits, commit => commit.date.split('T')[0]);
    this.isLoading = false;
  }



}
