import { ExercisePlan } from '../components/workout-runner/model';
import { LocalStorage } from './local-storage';
import { Injectable } from '@angular/core';
//By adding the @Injectable decorator, we are forcing Typescript compiler
//to generate metadata for the WorkoutHistoryTracker class.
//Other things that import work because they have some kind of decotor so typescript
//knows to generate the metadata.
@Injectable()
export class WorkoutHistoryTracker {
    private maxHistoryItems: number = 20; //Tracking last 20 exercises
    private currentWorkoutLog: WorkoutLogEntry = null;
    private workoutHistory: Array<WorkoutLogEntry> = [];
    private workoutTracked: boolean;
    private storageKey: string = "workouts";

    constructor(private storage: LocalStorage) {
        this.workoutHistory = (storage.getItem<Array<WorkoutLogEntry>>(this.storageKey) || [])
        .map((item: WorkoutLogEntry) => {
            item.startedOn = new Date(item.startedOn.toString());
            item.endedOn = item.endedOn == null ? null
            : new Date(item.endedOn.toString());
            return item;
        });
    }

    get tracking(): boolean {
        return this.workoutTracked;
    }
    startTracking () {
        this.workoutTracked = true;
        this.currentWorkoutLog = new WorkoutLogEntry(new Date());
        if (this.workoutHistory.length >= this.maxHistoryItems) {
            this.workoutHistory.shift();
            //remove the first element added, if the array is equal to or larger than are max list amount
        }
        this.workoutHistory.push(this.currentWorkoutLog);
        this.storage.setItem(this.storageKey, this.workoutHistory);
    }
    exerciseComplete(exercise: ExercisePlan) {
        this.currentWorkoutLog.lastExercise = exercise.exercise.title;
        ++this.currentWorkoutLog.exercisesDone;
        this.storage.setItem(this.storageKey, this.workoutHistory);
    }
    endTracking(completed: boolean) {
        this.currentWorkoutLog.completed = completed;
        this.currentWorkoutLog.endedOn = new Date();
        this.currentWorkoutLog = null;
        this.workoutTracked = false;
        this.storage.setItem(this.storageKey, this.workoutHistory);
    }
    //save the workout history when the tracking is started, when it's ended, and when the exercises complete.
    getHistory(): Array<WorkoutLogEntry> {
        return this.workoutHistory;
    }
}
export class WorkoutLogEntry {
    constructor(
        public startedOn: Date,
        public completed: boolean = false,
        public exercisesDone: number = 0,
        public lastExercise?: string,
        public endedOn?: Date) { }
}