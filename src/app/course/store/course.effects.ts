import { Actions, createEffect, ofType } from "@ngrx/effects";
import { concatMap, map, tap } from "rxjs/operators";

import { CourseService } from "./../services/course.service";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { courseActionTypes } from "./course.actions";

@Injectable()
export class CourseEffects {
  loadCourses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(courseActionTypes.loadCourses),
      concatMap(() => this.courseService.getAllCourses()),
      map(courses => courseActionTypes.coursesLoaded({ courses }))
    )
  );

  constructor(
    private courseService: CourseService,
    private actions$: Actions,
    private router: Router
  ) {}
}
