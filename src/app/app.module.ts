// ######## ANGULAR ########
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
// ######## IONIC ########
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
// ######## APP ########
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// ######## COMPONENTS ########
import { ComponentsModule } from './components/components.module';
// ######## PIPES ########
import { PipesModule } from './pipes/pipes.module';
// ######## DIRECTIVES ########
import { DirectivesModule } from './directives/directives.module';
// ######## PLUGINS ########
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    HttpClientModule,
    IonicModule.forRoot(), 
    AppRoutingModule,
    ComponentsModule,
    PipesModule,
    DirectivesModule
  ],
  providers: [
    InAppBrowser,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
