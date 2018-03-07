import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ListProductComponent } from './list-product/list-product.component';
import { ApiclientService } from './apiclient.service';



const routes = [{
  path: '',
  component: ListProductComponent
}];

@NgModule({
  declarations: [
    AppComponent,
    ListProductComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes), HttpModule
  ],
  providers: [ApiclientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
