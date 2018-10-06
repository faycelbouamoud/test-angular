import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatCardModule,
  MatCheckboxModule,
  MatButtonModule
} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatCheckboxModule,
    MatButtonModule
  ],
  declarations: [],
  exports: [
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatCheckboxModule,
    MatButtonModule
  ]
})
export class MaterialModule {}
