import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

const URL = environment.githubUrl;
const GITHUB_TOKEN = environment.githubToken;

@Injectable({
  providedIn: 'root'
})
export class GitHubRequest {

  constructor(
    private http: HttpClient
  ) { }

  //  *****************************************************
  //    __ _  ___| |_ 
  //   / _` |/ _ \ __|
  //  | (_| |  __/ |_ 
  //   \__, |\___|\__|
  //   |___/       

  getFeed(offset: number) {
    let params = new HttpParams();
    params = params.append('since', offset);
    params = params.append('per_page', 10);

    let headers = new HttpHeaders();
    headers = headers.append('Authorization', `Bearer ${GITHUB_TOKEN}`);

    return this.http.get(`${URL}/users`, { headers, params});
  }

  getUser(user: string){
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', `Bearer ${GITHUB_TOKEN}`);

    return this.http.get(`${URL}/users/${user}`, { headers });
  }
}
