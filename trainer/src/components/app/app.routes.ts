import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkoutRunnerComponent } from '../workout-runner/workout-runner.component';
import { WorkoutHistoryComponent } from '../workout-history/workout-history.component';
import { StartComponent } from '../start/start.component';
import { FinishComponent } from '../finish/finish.component';
import { WorkoutContainerComponent } from '../workout-runner/workout-container/workout-container.component';

export const routes: Routes = [
    { path: 'history', component: WorkoutHistoryComponent },
    { path: 'start', component: StartComponent },
    { path: 'workout', component: WorkoutContainerComponent },
    { path: 'finish', component: FinishComponent },
    { path: '**', redirectTo: '/start' }
];
//delineate which path is associated with which component. 
//** represents all of the paths that are left out of our explicit path definitions.
//catch all 'wildcard' route.
export const routing: ModuleWithProviders = RouterModule.forRoot(routes); //Exports our router definitions as a router module.