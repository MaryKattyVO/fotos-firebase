import { NgModule } from '@angular/core';
import { RouterModule , Routes} from '@angular/router';
import { FotosComponent } from './components/fotos/fotos.component';
import { CargaComponent } from './components/carga/carga.component';

const ROUTES: Routes = [
  { path: 'fotos', component: FotosComponent},
  { path: 'carga', component: CargaComponent},
  { path: '**', pathMatch: 'full' , redirectTo: 'fotos'}
]

@NgModule({
  declarations: [],
  exports: [ RouterModule],
  imports: [
    RouterModule.forRoot(ROUTES)
  ]
})
export class AppRoutingModule { }
