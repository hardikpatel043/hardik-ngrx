import { RouterModule, Routes } from "@angular/router";

import { CourseResolver } from "./course/course.resolver";
import { CoursesListComponent } from "./course/component/courses-list/courses-list.component";
import { CreateCourseComponent } from "./course/component/create-course/create-course.component";
import { NgModule } from "@angular/core";

const routes = [
  {
    path: "courses",
    component: CoursesListComponent,
    resolve: {
      courses: CourseResolver
    }
  },
  { path: "create-course", component: CreateCourseComponent },
  { path: "**", redirectTo: "courses" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
