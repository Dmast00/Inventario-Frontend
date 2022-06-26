import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  apiURL = 'https://localhost:44361/api/'
  constructor() { }
}
