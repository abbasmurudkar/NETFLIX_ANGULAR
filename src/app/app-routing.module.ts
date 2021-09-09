import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HOMEPAGEComponent } from './COMPONENTS/HOMEPAGE/homepage.component';
import { SIGNINPARTComponent } from './COMPONENTS/SIGNIN/signin-part/signin-part.component';
import { MPAGESComponent } from './MOVIESPAGES/m-pages/m-pages.component';
import { VIDEOComponent } from './MOVIESPAGES/video/video.component';

const routes: Routes = [
  {
    path:"",
    component:HOMEPAGEComponent
  },
  {
    path:"form",children:[
      {path:"",component:SIGNINPARTComponent},
      {path:"netflix-page",children:[
        {path:"",component:MPAGESComponent},
        {path:"video",component:VIDEOComponent}
      ]}
      
    ]
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
