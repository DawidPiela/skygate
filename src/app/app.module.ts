import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HareListComponent } from './hare-list/hare-list.component';
import { HareEditComponent } from './hare-list/hare-edit/hare-edit.component';
import { HareListService } from './hare-list/hare-list.service';
import { SortByPipe } from './shared/sort-by.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HareListComponent,
    HareEditComponent,
    SortByPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [HareListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
