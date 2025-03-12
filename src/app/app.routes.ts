import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MainComponent } from './theme/main/main.component';
import { HomeComponent } from './project_component/home/home.component';
import { JobDetailsComponent } from './project_component/job-details/job-details.component';
import { NotFoundComponent } from './theme/not-found/not-found.component';
import { AboutComponent } from './project_component/about/about.component';
import { ContactComponent } from './project_component/contact/contact.component';
import { NgModule } from '@angular/core';
import { LoginComponent } from './project_component/login/login.component';


export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'jobDetails', component: JobDetailsComponent },

      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },

      { path: '**', component: NotFoundComponent },
    ],
  },
  { path: 'login', component: LoginComponent },
  //{ path: 'login', loadChildren: () => import('./public/login/login.module').then(m => m.LoginModule) },
  { path: '**', component: MainComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,  {
      preloadingStrategy: PreloadAllModules,
      useHash: true,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
