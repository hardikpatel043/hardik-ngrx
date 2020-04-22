import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot
} from "@angular/router";
import { filter, finalize, first, tap } from "rxjs/operators";

import { Course } from "./model/course.model";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class CourseResolver implements Resolve<Observable<any>> {
  constructor() {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return new Observable();
  }
}
