import { CustomizeHttpUrls, entityMetadata } from "./store/entity.metadata";
import { EntityDataModule, HttpUrlGenerator } from "@ngrx/data";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { CommonModule } from "@angular/common";
import { CourseService } from "./services/course.service";
import { CoursesListComponent } from "./component/courses-list/courses-list.component";
import { CreateCourseComponent } from "./component/create-course/create-course.component";
import { EffectsModule } from "@ngrx/effects";
import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";

@NgModule({
  declarations: [CoursesListComponent, CreateCourseComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot({ entityMetadata })
  ],
  providers: [
    CourseService,
    { provide: HttpUrlGenerator, useClass: CustomizeHttpUrls }
  ],
  bootstrap: [],
  exports: [CoursesListComponent, CreateCourseComponent]
})
export class CourseModule {}
