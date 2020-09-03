import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Project } from "../models/project";
import { Global } from './global';
import { Observable } from 'rxjs';

@Injectable()
export class ProjectService{
    public url:string;
    constructor(
        private _http:HttpClient
    ){
        this.url = Global.url;
    }

    save(project: Project): Observable<any>{
        let params = JSON.stringify(project);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.post( this.url + 'project', params, {headers: headers});
    }
}