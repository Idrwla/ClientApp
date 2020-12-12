import { Injectable } from '@angular/core';
import {City} from '../Shared/City';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {cityUrl} from '../../assets/BaseUrls';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  citys: City[];
  constructor(private http: HttpClient) { }
  getCity(): Observable<City[]>{
    const fromServer$ = this.http.get<City[]>(cityUrl);
    fromServer$.subscribe( (data) => {
      this.citys = data;
    });
    return fromServer$;
  }
}
