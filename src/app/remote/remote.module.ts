import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RemoteComponent } from './remote.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: RemoteComponent
  }
];

@NgModule({
  declarations: [
    RemoteComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class RemoteModule { }
