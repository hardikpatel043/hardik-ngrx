import { EntityAdapter, EntityState, createEntityAdapter } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";

import { Course } from "./../model/course.model";
import { courseActionTypes } from "./course.actions";

export interface CourseState extends EntityState<Course> {
  coursesLoaded: boolean;
}

export const adapter: EntityAdapter<Course> = createEntityAdapter<Course>();

export const initialState = adapter.getInitialState({
  coursesLoaded: false
});

export function courseReducer(state, action) {
  return createReducer(
    initialState,
    on(courseActionTypes.coursesLoaded, state =>
      adapter.addAll(action.courses, { ...state, coursesLoaded: true })
    )
  )(state, action);
}

export const { selectAll, selectIds } = adapter.getSelectors();
