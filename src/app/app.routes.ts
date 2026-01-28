import { App } from './app';
import { Routes } from '@angular/router';
import {MyKendoScheduler} from './components/kendo-scheduler/kendo-scheduler'
import { Home } from './components/home/home'
import { Landing } from './components/landing/landing';
//import { Login } from './components/login/login';
import { AccountLogin } from './components/account/account-login';
import { Gridpoc } from './components/gridpoc/gridpoc';
import { Mighome } from './components/mighome/mighome';

export const routes: Routes = [
    {
        path: '',        
        component: AccountLogin,
        //canActivate:[isUserAuthenticated]
    },
    {
        path:"home",
        component: Home,
        //canActivate:[isUserAuthenticated],
        // resolve:{
        //     course: courseResolver,
        //     lessons: courseLessonsResolver
        // }
    },
    {
        path:"scheduler",
        component: Home,
        //canActivate:[isUserAuthenticated],
        // resolve:{
        //     course: courseResolver,
        //     lessons: courseLessonsResolver
        // }
    },
    {
        path:"landing",
        component: Landing,
        //component: Gridpoc,
        //canActivate:[isUserAuthenticated],
        // resolve:{
        //     course: courseResolver,
        //     lessons: courseLessonsResolver
        // }
    },
     {
        path:"Mighome",
        component: Mighome,
        //component: Gridpoc,
        //canActivate:[isUserAuthenticated],
        // resolve:{
        //     course: courseResolver,
        //     lessons: courseLessonsResolver
        // }
    },
    {
    path: '**',
    redirectTo: '/'
    }
];
