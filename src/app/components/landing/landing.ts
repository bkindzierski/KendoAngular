import { Component, signal,computed, effect, ChangeDetectorRef, OnInit, } from '@angular/core';
import { Storedata } from '../../../services/storedata';
import { Store } from '../../../models/store';
import { KENDO_LABELS } from "@progress/kendo-angular-label";
import { GridComponent, GridDataResult, KENDO_GRID } from '@progress/kendo-angular-grid';
import { CommonModule,AsyncPipe } from '@angular/common';
//import { Gridview } from '../landing/gridview/gridview'
import { Observable } from 'rxjs/internal/Observable';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-landing',
  //imports: [CommonModule,KENDO_LABELS,KENDO_GRID,Gridview],
  imports: [CommonModule,KENDO_LABELS,KENDO_GRID],
  templateUrl: './landing.html',
  styleUrl: './landing.scss',
})
export class Landing  {

  #stores = signal<Store[]>([]);
  //stores = signal<Store[]>([]);
  // public gridStores:Store[] = [];
  
  private serviceSubscription: Subscription;
  public gridStores$!: Observable<Store[]>; // Data source as an Observable
  public view: Observable<GridDataResult>;

  constructor(private storeService: Storedata,
              private cdr: ChangeDetectorRef)  {
   
    this.loadStores();    
    
    effect(() => {
      //console.log('Stores in landing page:', this.#stores());      
    });
  }

  public  ngOnInit(): void{  
    
  }

 

  async loadStores(){ 
    try {
        //**promise */
        // const stores = await this.storeService.getStoreData(); 
        // this.#stores.set(stores);

        /**obervable */
        this.serviceSubscription = this.storeService.getStoreDataObservable().subscribe((resp:Store[])=>{
            this.#stores.set(resp);                                      
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

  public  ngOnDestroy(): void {
    if (this.serviceSubscription) {
      this.serviceSubscription.unsubscribe();
    }    
  }
}