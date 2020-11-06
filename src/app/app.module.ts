import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { CategoriesComponent } from "./categories/categories.component";
import { DataHandleService } from "./service/data-handle.service";
import { TasksComponent } from "./tasks/tasks.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatTableModule } from "@angular/material/table";
import { MatSortModule } from "@angular/material/sort";
import { MatPaginator } from "@angular/material/paginator";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    MatPaginator,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    CategoriesComponent,
    TasksComponent
  ],
  bootstrap: [AppComponent],
  providers: [DataHandleService]
})
export class AppModule {}
