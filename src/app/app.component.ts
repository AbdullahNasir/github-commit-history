import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  repositoryUrl = 'https://api.github.com/repos/abdullahnasir/ionRangeSlider-Angular-Directive';

  onBranchChange(branchName: string) {
    console.log(branchName);
  }

}
