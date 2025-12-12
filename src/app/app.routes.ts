import { App } from './app';
import { Routes } from '@angular/router';
import {MyKendoScheduler} from './components/kendo-scheduler/kendo-scheduler'
import { Home } from './components/home/home'

export const routes: Routes = [
    {
        path: '',
        component: Home,
        //canActivate:[isUserAuthenticated]
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
    path: '**',
    redirectTo: '/'
    }
];
