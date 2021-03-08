import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { DemoComponent } from './demo/demo.component';

import { LayoutComponent } from './layout/layout.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

import { ProductsComponent } from './products/products.component';
import { AdminGuard } from "./admin.guard";
import { ProductFormComponent } from './product/product-form/product-form.component';
import { NavegacionesComponent } from './product/navegaciones/navegaciones.component';


const routes: Routes = [
  {
   path:'',
   component: LayoutComponent,
   
   //con esto se le dicen que todos son hijos de LayoutComponent
   children: [
      {
        path:'',
        redirectTo:'/home',
        pathMatch:'full'
      },
    {
      path: 'home',
      loadChildren: ()=> import('./home/home.module').then(m => m.HomeModule)
    },
    {
      path:'products',
      component:ProductsComponent
    },
    {
      path:'demo',
      component:DemoComponent
    },
    {
      path: 'contact',
      canActivate: [AdminGuard],
      component:ContactComponent
    },
    {
      path:'products/:id',
      component:ProductDetailComponent
    },

    {
     path:'navegacion',
     component: NavegacionesComponent,
     children: [
      {
        path:'create',
        component: ProductFormComponent
      }
     ]
    },
    {
      path: '**',
      component: PageNotFoundComponent
    }


   ]

  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
