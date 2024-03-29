import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from'@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatToolbarModule, MatFormFieldModule, MatInputModule, MatOptionModule, MatSelectModule, MatIconModule, MatButtonModule, MatCardModule, MatTableModule, MatDividerModule, MatSnackBarModule, MatAutocompleteModule } from '@angular/material';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { ListComponent } from './components/list/list.component';
import { SaleService } from './sale.service';
import { from } from 'rxjs';

const routes: Routes = [
  { path: 'create', component: CreateComponent},
  { path: 'edit/:id', component: EditComponent},
  { path: 'list', component: ListComponent},
  { path: '', redirectTo: 'list', pathMatch: 'full'} 
];


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CreateComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatFormFieldModule, 
    MatInputModule, 
    MatOptionModule, 
    MatSelectModule, 
    MatIconModule, 
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatDividerModule, 
    MatSnackBarModule,
    MatAutocompleteModule
  ],
  providers: [SaleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
