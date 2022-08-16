import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {ProductListComponent} from './product-list.component';
import { ProductFormComponent } from './product-form.component';
import { ProductCreateComponent } from './product-create.component';
import { ProductEditComponent } from './product-edit.component';
import { NotFoundComponent } from './not-found.component';
import {RouterModule, Routes} from '@angular/router';
import {DataService} from './data.service';

const appRoutes: Routes = [
  {path: '', component: ProductListComponent},
  { path: 'create', component: ProductCreateComponent },
  { path: 'edit/:id', component: ProductEditComponent },
  {path: '**', redirectTo: '/'}
];

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductCreateComponent,
    ProductEditComponent,
    ProductFormComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'ng-cli-universal'}),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
