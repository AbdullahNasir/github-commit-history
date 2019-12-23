import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BranchSelectorComponent } from './branch-selector/branch-selector.component';
import { CommitsListComponent } from './commits-list/commits-list.component';
import { CommitGroupComponent } from './commit-group/commit-group.component';
import { CommitComponent } from './commit/commit.component';


@NgModule({
  declarations: [
    AppComponent,
    BranchSelectorComponent,
    CommitsListComponent,
    CommitGroupComponent,
    CommitComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
