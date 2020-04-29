import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from "@ngrx/data";

import { Course } from "../model/course.model";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";

@Injectable({ providedIn: "root" })
export class CourseEntityService extends EntityCollectionServiceBase<Course> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super("Course", serviceElementsFactory);
  }

  getSearchedSortedCourses(searchtxt: string, sortBy: string) {
    return this.entities$.pipe(
      map(course => {
        return course
          .filter(
            course =>
              course.name.toLowerCase().includes(searchtxt) ||
              course.description.toLowerCase().includes(searchtxt)
          )
          .sort((a, b) => {
            switch (sortBy) {
              case "assending":
                return a.name.localeCompare(b.name);
              default:
                return b.name.localeCompare(a.name);
            }
          });
      })
    );
  }
}
