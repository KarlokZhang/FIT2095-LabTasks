import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ActorComponent } from './actor/actor.component';
import { DatabaseService } from './database.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, ActorComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [DatabaseService],
  bootstrap: [AppComponent],
})
export class AppModule {}
