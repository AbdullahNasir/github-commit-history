import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Git Commit History';
  repositoryUrl = 'https://api.github.com/repos/abdullahnasir/ionRangeSlider-Angular-Directive';
  branchName: string;

  onBranchChange(branchName: string) {
    this.branchName = branchName;
  }

}
