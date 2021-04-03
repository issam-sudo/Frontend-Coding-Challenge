import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RepositoriesDetailsComponent } from './core/components/repositories-details/repositories-details.component';
import { RepositoriesContainerComponent } from './core/components/repositories-container/repositories-container.component';
import { SharedModulesModule } from './shared/shared-modules/shared-modules.module';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
     
@NgModule({
  declarations: [
    AppComponent,
    RepositoriesDetailsComponent,
    RepositoriesContainerComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModulesModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    
  
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
