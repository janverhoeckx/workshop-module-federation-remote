import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloWorldComponent } from "./hello-world/hello-world.component";
import { RouterModule } from "@angular/router";



@NgModule({
  declarations: [
    HelloWorldComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: 'hello-world',
      pathMatch: 'full',
      component: HelloWorldComponent
    }])
  ]
})
export class RemoteModule { }
