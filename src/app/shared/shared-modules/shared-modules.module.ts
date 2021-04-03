import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerModule } from "ngx-spinner";
import { FooterComponent } from '../components/footer/footer.component';
import { HeaderComponent } from '../components/header/header.component';
import { ShortNumberPipe } from '../pipes/short-number.pipe';
import { TimeAgoPipe } from '../pipes/time-ago.pipe';



@NgModule({
  declarations: [ FooterComponent,HeaderComponent,ShortNumberPipe ,TimeAgoPipe],
  imports: [
    CommonModule
  ],
  exports: [MatButtonModule, NgbPaginationModule, NgxSpinnerModule,FooterComponent,
    HeaderComponent ,ShortNumberPipe,TimeAgoPipe],
  providers:[ShortNumberPipe,TimeAgoPipe]
})
export class SharedModulesModule { }
