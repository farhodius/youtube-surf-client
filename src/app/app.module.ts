import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';

import {ReactiveFormsModule} from '@angular/forms';

// Angular materials
import {
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule,
  MatGridListModule,
  MatProgressSpinnerModule,
  MatDividerModule,
  MatDialogModule,
  MatTooltipModule,
  MatBadgeModule,
  MatCardModule
} from '@angular/material';

// Flex-layout
import {FlexLayoutModule} from '@angular/flex-layout';
// Services
import {HttpClientModule} from '@angular/common/http';
import {DataService} from './services/data.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {SearchComponent} from './components/search/search.component';
import {VideoComponent} from './components/video/video.component';
import {VideoplayerComponent} from './components/dialogs/videoplayer/videoplayer.component';
import {ChannelComponent} from './components/channel/channel.component';
import {LibraryComponent} from './components/library/library.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchComponent,
    VideoComponent,
    VideoplayerComponent,
    ChannelComponent,
    LibraryComponent
  ],
  entryComponents: [VideoplayerComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatDividerModule,
    MatDialogModule,
    MatTooltipModule,
    MatBadgeModule,
    MatCardModule,
    FlexLayoutModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
