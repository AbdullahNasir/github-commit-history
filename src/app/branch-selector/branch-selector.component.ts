import { Component, OnInit, Input } from '@angular/core';
import { GithubApiServiceService } from '../github-api-service.service';
import { GithubBranch } from '../interfaces/github-branch';

@Component({
  selector: 'app-branch-selector',
  templateUrl: './branch-selector.component.html',
  styleUrls: ['./branch-selector.component.css']
})
export class BranchSelectorComponent implements OnInit {

  @Input() repositoryUrl: string;
  branches: GithubBranch[];

  constructor(private githubApiService: GithubApiServiceService) {

  }

  async ngOnInit() {
    this.branches = await this.githubApiService.fetchBranches(this.repositoryUrl);
  }

}
