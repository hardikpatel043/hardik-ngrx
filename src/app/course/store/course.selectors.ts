import { createFeatureSelector, createSelector } from "@ngrx/store";

import { CourseState } from "./course.reducers";
import { selectAll } from "./course.reducers";

export const courseFeatureSelector = createFeatureSelector<CourseState>(
  "courses"
);

export const getAllCourses = createSelector(courseFeatureSelector, selectAll);
export const getSearchCourses = (searchtxt: string, sortBy: string) =>
  createSelector(getAllCourses, state => {
    return state
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
  });

export const areCoursesLoaded = createSelector(
  courseFeatureSelector,
  state => state.coursesLoaded
);
