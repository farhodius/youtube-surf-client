import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SearchComponent} from './components/search/search.component';
import {LibraryComponent} from './components/library/library.component';

const routes: Routes = [
  {path: '', component: SearchComponent},
  {path: 'library', component: LibraryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
