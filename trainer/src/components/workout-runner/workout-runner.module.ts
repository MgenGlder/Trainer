import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WorkoutRunnerComponent } from './workout-runner.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { ExerciseDescriptionComponent } from './exercise-description/exercise-description.component';
import { SecondsToTimePipe } from './seconds-to-time.pipe';
import { VideoDialogComponent } from './video-player/video-dialog.component';

import { WorkoutContainerComponent } from './workout-container/workout-container.component';

import { WorkoutAudioComponent } from './workout-audio/workout-audio.component';
import { MyAudioDirective } from './workout-audio/my-audio.directive';
@NgModule({
    //Module to be imported for use inside of this module
    imports: [ BrowserModule ],
    //declarations, components made available in this module- that are part of this module
    declarations: [ WorkoutRunnerComponent, ExerciseDescriptionComponent, VideoPlayerComponent, SecondsToTimePipe, VideoDialogComponent, MyAudioDirective, WorkoutAudioComponent, WorkoutContainerComponent ],
    //components to exported from this module to be made available to other modules
    entryComponents: [VideoDialogComponent],
    //The videoDialogComponent is added here because it isn't explicitly used in the component tree.
    exports: [ WorkoutContainerComponent ]
})
export class WorkoutRunnerModule { }