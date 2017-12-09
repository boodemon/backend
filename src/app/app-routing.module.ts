import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { ForgotComponent } from './auth/forgot/forgot.component';
import { FullLayoutComponent } from './layouts/full-layout.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { CategoryComponent } from './foods/category/category.component';
import { RestourantComponent } from './foods/restourant/restourant.component';
import { FoodComponent } from './foods/food/food.component';
import { PaymentComponent } from './payment/payment.component';
import { ReportComponent } from './report/report.component';
import { MemberComponent } from './member/member.component';
import { AdminComponent } from './admin/admin.component';
import { CheckComponent } from './auth/check/check.component';
import { LogoutComponent } from './Auth/logout/logout.component';


const routes: Routes = [
  {
    path:'',
    component:CheckComponent
    /*
    redirectTo:'login',
    pathMatch:'full'
    */
  },

  {
    path: 'login',
    component: LoginComponent,
    data:{
      title:'Administrator Login'
    }
  },
  {
    path: 'forgot',
    component: ForgotComponent,
    data:{
      title:'Administrator Forgot password'
    }
  },
  {
    path: '',
    component: FullLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'orders',
        component:OrdersComponent,
        data : {
          title: 'Order from mobile'
        }
      },
      {
        path: 'order-detail/:id',
        component:OrderDetailComponent
      },
      {
        path: 'foods/category',
        component:CategoryComponent,
      },
      {
        path: 'foods/category/new',
        component:CategoryComponent,
      },
      {
        path: 'foods/category/:id/edit',
        component:CategoryComponent,
      },
      {
        path: 'foods/restourant',
        component:RestourantComponent
      },
      {
        path: 'foods/restourant/new',
        component:RestourantComponent
      },
      {
        path: 'foods/restourant/:id/edit',
        component:RestourantComponent
      },
      {
        path: 'foods/restourant/:id/delete',
        component:RestourantComponent
      },
      {
        path: 'foods/food',
        component:FoodComponent
      },
      {
        path: 'payment',
        component:PaymentComponent
      },
      {
        path: 'report',
        component:ReportComponent
      },
      {
        path: 'member',
        component:MemberComponent
      },
      {
        path: 'admin',
        component:AdminComponent
      },
      {
        path: 'logout',
        component:LogoutComponent
      },
    ]
  },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule { }
