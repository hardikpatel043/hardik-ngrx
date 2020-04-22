import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { CourseModule } from "./course/course.module";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "src/environments/environment";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CourseModule,
    HttpClientModule,
    !environment.production
      ? StoreDevtoolsModule.instrument({ maxAge: 25 })
      : []
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
