import { DomseguroPipe } from './shared/pipe/domseguro.pipe';
import { SpotifyService } from './shared/services/spotify.service';
import { MaterialModule } from './material/material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './general/header/header.component';
import { BodyComponent } from './general/body/body.component';
import { FooterComponent } from './general/footer/footer.component';
import { DirectivesDirective } from './shared/directives.directive';
import { OverviewSheetComponent } from './shared/overview-sheet/overview-sheet.component';
import { HttpClientModule } from '@angular/common/http';
import { NewRelasesComponent } from './components/new-relases/new-relases.component';
import { NoimagePipe } from './shared/pipe/noImage.pipe';
import { CardDirective } from './shared/card.directive';
import { DialogComponent } from './shared/dialog/dialog.component';
import { LoadingComponent } from './shared/loading/loading.component';
import { GoogleMapsComponent } from './general/google-maps/google-maps.component';
import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    DirectivesDirective,
    OverviewSheetComponent,
    NewRelasesComponent,
    NoimagePipe,
    DomseguroPipe,
    CardDirective,
    DialogComponent,
    LoadingComponent,
    GoogleMapsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDNOu2JQ001PxZY-GVwFvVou0_6h_Sj-14'
    })
  ],
  providers: [
    SpotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
