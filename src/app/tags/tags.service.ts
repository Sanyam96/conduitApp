import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Subject } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class TagsService {

  url = " https://conduit.productionready.io/api/tags" 
  tagName = new Subject<any>()
  constructor(private http: HttpClient) { }

  getTagName() {
    return this.tagName
  }

  setTagName(name) {
    this.tagName.next(name)
  }

  getGlobalTags(){
    return this.http.get(this.url);
  }
  
}
