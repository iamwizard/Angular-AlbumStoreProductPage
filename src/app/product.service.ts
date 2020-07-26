import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _albumUrl: string;  //a private class property
  constructor(private _http: Http) { 
    this._albumUrl = "../assets/album.json";
  }
  public getAlbum(id:number) {
   return this._http.get(this._albumUrl)
      .map(Response => Response.json()); //Mapping The JSON Response in getAlbum
}
}
