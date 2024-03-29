import { Injectable } from '@angular/core';
import { GithubBranch } from './interfaces/github-branch';
import { HttpClient } from '@angular/common/http';
import { GithubCommit } from './interfaces/github-commit';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubApiServiceService {

  constructor(private http: HttpClient) { }

  fetchBranches(respositoryUrl: string): Promise<GithubBranch[]> {
    try {
      return this.http.get<GithubBranch[]>(`${respositoryUrl}/branches`).toPromise();
    } catch (e) {
      this.handleEror(e);
    }
  }

  fetchCommits(respositoryUrl: string, branchName: string): Promise<GithubCommit[]> {
    try {
      return this.http.get(`${respositoryUrl}/commits?sha=${branchName}`)
        .map((commits: Object[]): GithubCommit[] => {
          return commits.map((commit) => {
            return {
              sha: commit['sha'],
              commit: {
                author: { ...commit['commit']['author'], imgUrl: commit['author']['avatar_url'] },
                message: commit['commit']['message']
              },
              url: this.createGithubCommitUrl(respositoryUrl, commit['sha']),
              date: commit['commit']['author']['date'],
              historyUrl: this.createGithubHistoryUrl(respositoryUrl, commit['sha'])
            };
          });
        }).toPromise();
    } catch (e) {
      this.handleEror(e);
    }

  }

  private createGithubCommitUrl(respositoryUrl: string, sha: string) {
    respositoryUrl = respositoryUrl.replace('api.', '').replace('repos/', '');
    return `${respositoryUrl}/commit/${sha}`;
  }

  private createGithubHistoryUrl(respositoryUrl: string, sha: string) {
    respositoryUrl = respositoryUrl.replace('api.', '').replace('repos/', '');
    return `${respositoryUrl}/tree/${sha}`;
  }

  private handleEror(exception) {
    alert('something went wrong, check console for error');
    console.error(exception);
  }

}
