import { Injectable } from '@angular/core';
import { GithubBranch } from './interfaces/github-branch';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GithubApiServiceService {

  constructor(private http: HttpClient) { }

  fetchBranches(respositoryUrl: string): Promise<GithubBranch[]> {
    return this.http.get<GithubBranch[]>(`${respositoryUrl}/branches`).toPromise();
  }


}
