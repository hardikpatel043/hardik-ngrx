import * as uuid from "uuid";

import { Component, OnInit } from "@angular/core";

import { Course } from "./../../model/course.model";
import { CourseEntityService } from "../../store/course.entity.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-create-course",
  templateUrl: "./create-course.component.html"
})
export class CreateCourseComponent implements OnInit {
  constructor(
    private courseEntityService: CourseEntityService,
    private router: Router
  ) {}

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

    this.courseEntityService.add(course);
    this.router.navigateByUrl("/course");
    // this.store.dispatch(createCourse({ course }));
  }
}
