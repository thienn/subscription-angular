import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule, MatCheckboxModule, MatTableModule, MatGridListModule, MatIconModule, MatInputModule, MatFormFieldModule, MatListModule, MatToolbarModule, MatSidenavModule, MatSelectModule, MatSortModule, MatSnackBarModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTableModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatListModule,
    MatToolbarModule,
    MatSidenavModule,
    MatSelectModule,
    MatSortModule,
    MatSnackBarModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatTableModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatListModule,
    MatToolbarModule,
    MatSidenavModule,
    MatSelectModule,
    MatSortModule,
    MatSnackBarModule
  ]
})
export class AppMaterialModule { }
