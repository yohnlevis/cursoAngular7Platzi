import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//imports de forms 
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ProductComponent } from './product/product.component';
/* import { ExponentialPipe } from './shared/pipes/exponential/exponential.pipe'; */
/* import { HighlightDirective } from './shared/directives/highlight/highlight.directive'; */

import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { DemoComponent } from './demo/demo.component';
/* import { HeaderComponent } from './shared/components/header/header.component'; */
/* import { FooterComponent } from './shared/components/footer/footer.component'; */
/* import { BannerComponent } from './home/components/banner/banner.component'; */
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { LayoutComponent } from './layout/layout.component';
import { SharedModule } from "./shared/shared.module";
import { CoreModule } from "./core/core.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from "./material/material.module";
import { ProductFormComponent } from './product/product-form/product-form.component';
import { NavegacionesComponent } from './product/navegaciones/navegaciones.component';
import { LayoutModule } from '@angular/cdk/layout';

import { ProductsListComponent } from './products-list/products-list.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
/*     ExponentialPipe,
    HighlightDirective, */
    ProductsComponent,
    ContactComponent,
    DemoComponent,
  /*   HeaderComponent,
    FooterComponent, */
/*     BannerComponent, */
    PageNotFoundComponent,
    ProductDetailComponent,
    LayoutComponent,
    ProductFormComponent,
    NavegacionesComponent,
    ProductsListComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    SharedModule,
    CoreModule,
    BrowserAnimationsModule,
    MaterialModule,
  /*   MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule, */
    ReactiveFormsModule,
     LayoutModule,
     HttpClientModule
     /*
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
