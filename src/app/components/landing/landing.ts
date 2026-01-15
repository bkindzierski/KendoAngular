import { Component, signal,computed, effect, } from '@angular/core';
import { Storedata } from '../../../services/storedata';
import { Store } from '../../../models/store';

@Component({
  selector: 'app-landing',
  imports: [],
  templateUrl: './landing.html',
  styleUrl: './landing.scss',
})
export class Landing {

   #stores = signal<Store[]>([]);
  constructor(private storeService: Storedata){
    this.loadStores(); 
    
    effect(() => {
      console.log('Stores in landing page:', this.#stores());
      //this.dashboardAccounts = accountComp.getAccounts();
    });
  }

  async loadStores(){ 
    try {
        //**promise */
        // const accounts = await this.accountService.getAccountData(); 
        // this.#accounts.set(accounts); 
        /**obervable */
        this.storeService.getStoreDataObservable().subscribe((resp:Store[])=>{
            this.#stores.set(resp); 
        });
        
      } 
      catch (err) {
        console.log(err);
      }
  }

  getStores = computed(()=>{
    const stores = this.#stores;
    return stores;
  })

}
