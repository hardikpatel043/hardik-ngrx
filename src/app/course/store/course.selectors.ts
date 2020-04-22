import { createFeatureSelector, createSelector } from "@ngrx/store";

import { CourseState } from "./course.reducers";
import { selectAll } from "./course.reducers";

export const courseFeatureSelector = createFeatureSelector<CourseState>(
  "courses"
);

export const getAllCourses = createSelector(courseFeatureSelector, selectAll);

export const areCoursesLoaded = createSelector(
  courseFeatureSelector,
  state => state.coursesLoaded
);
