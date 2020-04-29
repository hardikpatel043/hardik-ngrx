import { Component, OnInit } from "@angular/core";
import { Observable, combineLatest } from "rxjs";

import { Course } from "./../../model/course.model";
import { CourseEntityService } from "../../store/course.entity.service";
import { FormControl } from "@angular/forms";
import { Update } from "@ngrx/entity";

@Component({
  selector: "app-courses-list",
  templateUrl: "./courses-list.component.html"
})
export class CoursesListComponent implements OnInit {
  courses$: Observable<Course[]>;

  courseToBeUpdated: Course;
  isUpdateActivated = false;
  search = new FormControl();
  sort = new FormControl("assending");

  constructor(private courseEntityService: CourseEntityService) {}

  ngOnInit() {
    this.courseEntityService.getAll();
    this.courses$ = this.courseEntityService.entities$;
  }

  deleteCourse(courseId: string) {
    this.courseEntityService.delete(courseId);
  }

  showUpdateForm(course: Course) {
    this.courseToBeUpdated = { ...course };
    this.isUpdateActivated = true;
  }

  updateCourse(updateForm) {
    const update: Course = {
      ...this.courseToBeUpdated,
      ...updateForm.value
    };
    this.courseEntityService.update(update);
    this.isUpdateActivated = false;
    this.courseToBeUpdated = null;
  }
}
