import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'budget-friendly-tips',
    loadChildren: () => import('./pages/budget-friendly-tips/budget-friendly-tips.module').then( m => m.BudgetFriendlyTipsPageModule)
  },
  {
    path: 'luxurious',
    loadChildren: () => import('./pages/luxurious/luxurious.module').then( m => m.LuxuriousPageModule)
  },
  {
    path: 'tickets',
    loadChildren: () => import('./pages/tickets/tickets.module').then( m => m.TicketsPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
