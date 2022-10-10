import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { NavBarComponent } from './components/heroes/nav-bar/nav-bar.component';
import { HeroesComponent } from './pages/heroes/heroes.component';
import { HeroesTableComponent } from './components/heroes/heroes-table.component';
import { CreateOrUpdateComponent } from './pages/heroes/create-or-update/create-or-update.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeroesSearchBarComponent } from './components/heroes/search-bar/heroes-search-bar.component';
import { AlertDialogComponent } from './components/alert-dialog/alert-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateOrUpdateComponent,
    NavBarComponent,
    HeroesComponent,
    HeroesTableComponent,
    HeroesSearchBarComponent,
    AlertDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
  ],
  providers: [{
    provide: MatDialogRef,
    useValue: {},
  }],
  bootstrap: [AppComponent],
})
export class AppModule { }
