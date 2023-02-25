import { NgModule } from "@angular/core";
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {MatTableModule} from "@angular/material/table"
import {MatPaginatorModule} from "@angular/material/paginator"
import {MatSortModule} from "@angular/material/sort"
import {MatDialogModule} from "@angular/material/dialog"
import {MatButtonModule} from "@angular/material/button";
import { MatSelectModule } from "@angular/material/select";


@NgModule({
    exports: [
      MatInputModule,
      MatSelectModule,
      MatCardModule,
      MatTableModule,
      MatPaginatorModule,
      MatSortModule,
      MatDialogModule,
      MatButtonModule
    ]
})

export class MaterialModule { }