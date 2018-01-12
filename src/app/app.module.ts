import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { AboutComponent } from './about/about.component';

const appRoutes: Routes = [
  {path: '', component: TableComponent},
  {path: 'about', component: AboutComponent},
  {path: '**', component: TableComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
