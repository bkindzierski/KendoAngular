
import {Injectable} from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import {firstValueFrom, Observable} from "rxjs";
import {Store} from "../models/store";
import {map} from "rxjs/operators";


@Injectable({
  providedIn: 'root',
})

export class Storedata {
  
  private apiUrl: string = './assets/sample-data/storedata.json';

  constructor(private http: HttpClient){

  }
  
  /** as observable */
  getStoreDataObservable():Observable<Store[]> {
    return this.http.get<Store[]>(this.apiUrl);
  }

  /** as promise */
  async getStoreData():Promise<Store[]>{
    
    const stores$ = 
      this.http.get<Store[]>(this.apiUrl,
        {
          /**this is how we can skip the loading indicator */
          //context: new HttpContext().set(SkipLoading, true)
        });

    //** firstValueFrom converts to a promise return*/
    const response = await firstValueFrom(stores$)
    //globalSignal.set(response);
    return response;
    //async automatically returns this empty array as a promise 
    //return [];
  }

}
