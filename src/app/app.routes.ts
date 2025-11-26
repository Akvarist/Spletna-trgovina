
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home-page/home-page';
import { Catalog } from './catalog/catalog';
import { Cart } from './cart/cart';
import { SignInPage } from './sign-in-page/sign-in-page';
import { RegisterPage } from './register-page/register-page';

export const routes: Routes = [
    {path:'home', component:HomePage, title:"home is here"},
    {path:'catalog', component:Catalog, title:"catalog is here"},
    {path:'cart',component:Cart,title:"cart is here"},
    {path:'signin',component:SignInPage,title:"signin is here"},
    {path:'register',component:RegisterPage,title:"register is here"},
    {path:'', redirectTo:'home', pathMatch:'full'}
];

@NgModule({
    declarations: [],
    imports:[
        CommonModule, RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }