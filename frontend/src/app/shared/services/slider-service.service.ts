import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SliderServiceService {

  public subjectCategory: Subject<string> =new Subject<string>();
  public var: any;

  constructor() { }

  public sendCategory(category: string){
    console.log("servicio :" + category);
    this.subjectCategory.next(category);
    console.log(this.subjectCategory);
  }

  public recibeCategory(): Observable<any>{
    console.log("servicio recibeCategory: " + this.subjectCategory)
    return this.subjectCategory.asObservable();
  }

}
