import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GithubApiServiceService } from '../github-api-service.service';
import { GithubBranch } from '../interfaces/github-branch';

@Component({
  selector: 'app-branch-selector',
  templateUrl: './branch-selector.component.html',
  styleUrls: ['./branch-selector.component.css']
})
export class BranchSelectorComponent implements OnInit {

  @Input() repositoryUrl: string;
  @Output() branchChanged = new EventEmitter<string>();
  branches: GithubBranch[];
  isLoading = false;

  constructor(private githubApiService: GithubApiServiceService) {

  }

  async ngOnInit() {
    this.isLoading = true;
    this.branches = await this.githubApiService.fetchBranches(this.repositoryUrl);
    this.onBranchChange(this.branches[0].name);
    this.isLoading = false;
  }

  onBranchChange(branch: string) {
    this.branchChanged.emit(branch);
  }

}
