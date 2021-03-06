import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { HomeComponent } from './routes/home/home.component';
import { LegalComponent } from './routes/legal/legal.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { WidgetModule } from './widget/widget.module';
import { QuizzService } from './quizz.service';
import { HttpQuizzService } from './http-quizz.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, HomeComponent, LegalComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    FontAwesomeModule,
    WidgetModule,
    HttpClientModule
  ],
  providers: [{ provide: QuizzService, useClass: HttpQuizzService }],
  bootstrap: [AppComponent],
})
export class AppModule {}
