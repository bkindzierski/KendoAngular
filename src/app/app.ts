import { Component, signal,inject } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

import {MatSidenav, MatSidenavContainer} from "@angular/material/sidenav";
import {MatListItem, MatNavList} from "@angular/material/list";
import {MatIcon} from "@angular/material/icon";
import {MatToolbar} from "@angular/material/toolbar";
import {MatIconButton} from "@angular/material/button";
import { KENDO_DATEINPUTS } from '@progress/kendo-angular-dateinputs';
//import {LoadingIndicatorComponent} from "./loading/loading.component";
//import {MessagesComponent} from "./messages/messages.component";
//import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MatSidenav, MatSidenavContainer, MatListItem, MatNavList,MatIcon,MatToolbar, MatIconButton, KENDO_DATEINPUTS],
  providers:[RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('kendo-angular-app');

  constructor(router: RouterOutlet, ){
    
  }
}
