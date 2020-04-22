import * as uuid from "uuid";

import { Component, OnInit } from "@angular/core";

import { Course } from "./../../model/course.model";

@Component({
  selector: "app-create-course",
  templateUrl: "./create-course.component.html"
})
export class CreateCourseComponent implements OnInit {
  constructor() {}

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
  }
}
