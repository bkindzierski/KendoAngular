import { Component, signal,inject } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkWithHref } from '@angular/router';

import {MatSidenav, MatSidenavContainer} from "@angular/material/sidenav";
import {MatListItem, MatNavList} from "@angular/material/list";
import {MatIcon} from "@angular/material/icon";
import {MatToolbar} from "@angular/material/toolbar";
import {MatIconButton} from "@angular/material/button";

//import {LoadingIndicatorComponent} from "./loading/loading.component";
//import {MessagesComponent} from "./messages/messages.component";
//import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatSidenav, MatSidenavContainer, MatListItem, MatNavList, MatIcon, MatToolbar, MatIconButton, RouterLinkWithHref],
  providers:[RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('kendo-angular-app');
  private button: HTMLElement
  sideBar// =  document.getElementById('asidebar');
  toggleBtn// = document.getElementById('toggle-btn') as HTMLButtonElement;

  constructor(router: RouterOutlet, ){
    // this.button = document.getElementById('btn1')!
    // this.button.addEventListener('click', this.toggleSubMenu.bind(this));
    
  }

  ngOnInit(){
    //commit test
  }

  showSidebar():any {
    //console.log('showSidebar ...')
    var sidebar = document.querySelector('.sidebar') as HTMLElement;
    return sidebar.style.display = 'flex'  
  }
  closeSidebar() : any{
     //console.log('showSidebar ...')
    var sidebar = document.querySelector('.sidebar') as HTMLElement;
    return sidebar.style.display = 'none'
  }

  toggleSubMenu(element:string) : any{
    //console.log('element: ', element);
    if (element =='btn1') {
      //console.log(`Button clicked! The button text is: `);
      const btn1 = document.getElementById('btn1') as HTMLButtonElement;
      btn1.nextElementSibling.classList.toggle('show');
      btn1.classList.toggle('rotate');
    }
    else if(element =='btn2'){
      const btn2 = document.getElementById('btn2') as HTMLButtonElement;
      btn2.nextElementSibling.classList.toggle('show');
      btn2.classList.toggle('rotate');
    }
    if(this.sideBar.classList.contains('close')){
      this.sideBar.classList.toggle('close');
      this.toggleBtn.classList.toggle('rotate');
    }
  }

  // toggleSubMenu(element: any) : any{
  //   //console.log('element: ', element);
  //   element.nextElementSibling.classList.toggle('show');
  // }

  toggleSideBar(){
    this.toggleBtn = document.getElementById('toggle-btn') as HTMLButtonElement;
    this.sideBar = document.getElementById('asidebar');
    this.sideBar.classList.toggle('close');
    this.toggleBtn.classList.toggle('rotate');

    Array.from(this.sideBar.getElementsByClassName('show')).forEach(ul =>{
      //ul.classList.remove('show')
      //ul.previousElementSibling.classList.remove('rotate')
    });

  }
}
