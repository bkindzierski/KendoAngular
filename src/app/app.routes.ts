import { App } from './app';
import { Routes } from '@angular/router';
import {MyKendoScheduler} from './components/kendo-scheduler/kendo-scheduler'
import { Home } from './components/home/home'
import { Landing } from './components/landing/landing';
import { Login } from './components/login/login';

export const routes: Routes = [
    {
        path: '',
        component: Login,
        //canActivate:[isUserAuthenticated]
    },
    {
        path:"home",
        component: MyKendoScheduler,
        //canActivate:[isUserAuthenticated],
        // resolve:{
        //     course: courseResolver,
        //     lessons: courseLessonsResolver
        // }
    },
    {
        path:"scheduler",
        component: MyKendoScheduler,
        //canActivate:[isUserAuthenticated],
        // resolve:{
        //     course: courseResolver,
        //     lessons: courseLessonsResolver
        // }
    },
    {
        path:"landing",
        component: Landing,
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
