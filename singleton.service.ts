import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SingletonService {
  baseAPIUrl="http://localhost:8081";

  constructor() { }
}