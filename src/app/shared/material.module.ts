// shared/material.module.ts
import { NgModule } from '@angular/core';

// Angular Material Modules
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatChipsModule } from '@angular/material/chips';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

const MaterialComponents = [
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSnackBarModule,
  MatProgressSpinnerModule,
  MatMenuModule,
  MatSidenavModule,
  MatListModule,
  MatGridListModule,
  MatChipsModule,
  MatBadgeModule,
  MatDialogModule,
  MatTabsModule,
  MatCheckboxModule,
  MatRadioModule,
  MatSlideToggleModule,
  MatTooltipModule,
  MatExpansionModule,
  MatStepperModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule
];

@NgModule({
  imports: MaterialComponents,
  exports: MaterialComponents,
})
export class MaterialModule { }