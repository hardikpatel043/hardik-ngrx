import { Component, OnInit } from "@angular/core";
import { courseActionTypes, loadCourses } from "../../store/course.actions";
import { startWith, switchMap } from "rxjs/operators";

import { Course } from "./../../model/course.model";
import { CourseState } from "../../store/course.reducers";
import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { Update } from "@ngrx/entity";
import { getSearchCourses } from "../../store/course.selectors";

@Component({
  selector: "app-courses-list",
  templateUrl: "./courses-list.component.html"
})
export class CoursesListComponent implements OnInit {
  courses$: Observable<Course[]>;

  courseToBeUpdated: Course;

  isUpdateActivated = false;
  search = new FormControl();

  constructor(private store: Store<CourseState>) {
    this.store.dispatch(loadCourses());
  }

  ngOnInit() {
    this.courses$ = this.search.valueChanges.pipe(
      startWith(""),
      switchMap(value => this.store.select(getSearchCourses(value)))
    );
  }

  deleteCourse(courseId: string) {
    this.store.dispatch(courseActionTypes.deleteCourse({ courseId }));
  }

  showUpdateForm(course: Course) {
    this.courseToBeUpdated = { ...course };
    this.isUpdateActivated = true;
  }

  updateCourse(updateForm) {
    const update: Update<Course> = {
      id: this.courseToBeUpdated.id,
      changes: {
        ...this.courseToBeUpdated,
        ...updateForm.value
      }
    };
    this.store.dispatch(courseActionTypes.updateCourse({ update }));
    this.isUpdateActivated = false;
    this.courseToBeUpdated = null;
  }
}
