import { Author } from './author';

export interface GithubCommit {
    sha: string;
    commit: {
        author: Author;
        message: string;
    };
    url: string;
    date: string;
    historyUrl: string;

}
