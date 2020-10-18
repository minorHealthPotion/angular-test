import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { CategoriesComponent } from "./categories/categories.component";
import { DataHandleService } from "./service/data-handle.service";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, CategoriesComponent],
  bootstrap: [AppComponent],
  providers: [DataHandleService]
})
export class AppModule {}
