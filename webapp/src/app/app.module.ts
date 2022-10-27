import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BottomNavComponent } from './components/bottom-nav/bottom-nav.component';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { SearchComponent } from './views/search/search.component';
import { SettingsComponent } from './views/settings/settings.component';
import { SongBasicComponent } from './components/song-basic/song-basic.component';
import { SongVotingComponent } from './components/song-voting/song-voting.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'settings', component: SettingsComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    BottomNavComponent,
    HomeComponent,
    SearchComponent,
    SettingsComponent,
    SongBasicComponent,
    SongVotingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
