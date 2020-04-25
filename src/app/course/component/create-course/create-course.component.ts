import * as uuid from "uuid";

import { Component, OnInit } from "@angular/core";

import { Course } from "./../../model/course.model";
import { CourseState } from "../../store/course.reducers";
import { Store } from "@ngrx/store";
import { createCourse } from "../../store/course.actions";

@Component({
  selector: "app-create-course",
  templateUrl: "./create-course.component.html"
})
export class CreateCourseComponent implements OnInit {
  constructor(private store: Store<CourseState>) {}

  ngOnInit() {}

  onSubmit(submittedForm) {
    console.log(submittedForm.value);

    if (submittedForm.invalid) {
      return;
    }

    const course: Course = {
      id: uuid.v4(),
      name: submittedForm.value.name,
      description: submittedForm.value.description
    };

    this.store.dispatch(createCourse({ course }));
  }
}
