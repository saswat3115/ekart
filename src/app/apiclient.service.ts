import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class ApiclientService {

  BASE_URL = 'http://localhost:5000/api/products';

  constructor(private http: Http) { }

  getAllProducts(callback): any {
    this.http.get(this.BASE_URL + '/getallproducts').subscribe(res => {
        callback(res.json());
    });
  }

}
