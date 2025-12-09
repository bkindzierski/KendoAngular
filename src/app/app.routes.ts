import { App } from './app';
import { Routes } from '@angular/router';
import { Scheduler } from './scheduler/scheduler';


export const routes: Routes = [
    {
        path: '',
        component: Scheduler,
        //canActivate:[isUserAuthenticated]
    },
    {
        path:"scheduler",
        component: Scheduler,
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
