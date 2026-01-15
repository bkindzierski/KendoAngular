import { Component, signal,computed, effect, ChangeDetectorRef, } from '@angular/core';
import { Storedata } from '../../../services/storedata';
import { Store } from '../../../models/store';
import { KENDO_LABELS } from "@progress/kendo-angular-label";
import { GridDataResult, KENDO_GRID } from '@progress/kendo-angular-grid';
import { CommonModule } from '@angular/common';
import { Gridview } from '../landing/gridview/gridview'
import { Observable } from 'rxjs/internal/Observable';


@Component({
  selector: 'app-landing',
  imports: [CommonModule,KENDO_LABELS,KENDO_GRID,Gridview],
  templateUrl: './landing.html',
  styleUrl: './landing.scss',
})
export class Landing {

  #stores = signal<Store[]>([]);
  public gridStores:Store[] = [];
 
  //public gridData: Store[] = [];

  constructor(private storeService: Storedata,
            private cdr: ChangeDetectorRef){
    this.loadStores(); 
   
    
    effect(() => {
      console.log('Stores in landing page:', this.#stores());
      this.gridStores = this.#stores();
      this.cdr.detectChanges();
    });
  }

  ngOnInit(){
    //this.loadStores(); 
    
  }

 
  async loadStores(){ 
    try {
        //**promise */
        // const accounts = await this.accountService.getAccountData(); 
        // this.#accounts.set(accounts); 
        /**obervable */
        this.storeService.getStoreDataObservable().subscribe((resp:Store[])=>{
            this.#stores.set(resp); 
            //this.gridStores = resp;
        });
        
      } 
      catch (err) {
        console.log(err);
      }
  }

  getStores = computed(()=>{
    const stores = this.#stores();
    return stores;
  });
}
// export class Product{
//      ProductID: number;
//     ProductName:string;
//     UnitPrice: number;
//     Category: object;
// }