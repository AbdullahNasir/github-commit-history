import { GithubCommit } from './github-commit';

export interface GithubCommitsGrouped {
    [key: string]: GithubCommit[];
}
