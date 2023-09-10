import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: 'budget-friendly-tips',
        loadChildren: () => import('../pages/budget-friendly-tips/budget-friendly-tips.module').then(m => m.BudgetFriendlyTipsPageModule)
      },
      {
        path: 'luxurious',
        loadChildren: () => import('../pages/luxurious/luxurious.module').then(m => m.LuxuriousPageModule)
      },
      {
        path: 'tickets',
        loadChildren: () => import('../pages/tickets/tickets.module').then(m => m.TicketsPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
