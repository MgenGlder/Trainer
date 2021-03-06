import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MyAudioDirective } from './my-audio.directive';
import { WorkoutPlan, ExercisePlan, ExerciseProgressEvent, ExerciseChangedEvent } from '../model';

@Component({
    selector: 'workout-audio',
    templateUrl: '/src/components/workout-runner/workout-audio/workout-audio.html'
})
export class WorkoutAudioComponent implements AfterViewInit {
    @ViewChild('ticks') private ticks: MyAudioDirective;
    @ViewChild('nextUp') private nextUp: MyAudioDirective;
    @ViewChild('nextUpExercise') private nextUpExercise: MyAudioDirective;
    @ViewChild('halfway') private halfway: MyAudioDirective;
    @ViewChild('aboutToComplete') private aboutToComplete: MyAudioDirective;
    private nextUpSound: string;

    ngAfterViewInit() {
        this.ticks.start();
        //wait until the view has been rendered to start the ticks. If you run it
        //in the constructor, ticks will be null. This will give us the component lifestyle
        //hook such that we can run this after the view has been completely initialized.
    }

    stop() {
        this.ticks.stop();
        this.nextUp.stop();
        this.halfway.stop();
        this.aboutToComplete.stop();
        this.nextUpExercise.stop();
    }
    resume() {
        this.ticks.start();
        if (this.nextUp.currentTime > 0 && !this.nextUp.playbackComplete)
            this.nextUp.start();
        else if (this.nextUpExercise.currentTime > 0 && !this.nextUpExercise.playbackComplete)
            this.nextUpExercise.start();
        else if (this.halfway.currentTime > 0 && !this.halfway.playbackComplete)
            this.halfway.start();
        else if (this.aboutToComplete.currentTime > 0 && !this.aboutToComplete.playbackComplete)
            this.aboutToComplete.start();
    }
    onExerciseProgress(progress: ExerciseProgressEvent) {
        if (progress.runningFor == Math.floor(progress.exercise.duration / 2) && progress.exercise.exercise.name != "rest") {
            this.halfway.start();
        }
        else if (progress.timeRemaining == 3) {
            this.aboutToComplete.start();
        }
    }
    onExerciseChanged(state: ExerciseChangedEvent) {
        if (state.current.exercise.name == "rest") {
            this.nextUpSound = state.next.exercise.nameSound;
            setTimeout(() => this.nextUp.start(), 2000);
            setTimeout(() => this.nextUpExercise.start(), 3000);
        }
    }
}
//Allos us to inject a child component/directive/element reference into its parent.
//The parameter passed is the template variable name, which helps DI match the
//element/directive to inject.
/*
    Without 'exportAs' set on the 'MyAudioDirective' directive, the @ViewChild
    injection injects the related ElementRef instance instead of the MyAudioDirective instance.
*/