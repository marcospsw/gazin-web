import { NgModule } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ComponentsModule } from '../components/components.module';
import { AppComponent } from './app/app.component';
import { LevelsComponent } from './levels/levels.component';
import { DesenvolvedoresComponent } from './desenvolvedores/desenvolvedores.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { UpdateLevelsComponent } from './update-level/update-level.component';
import { CreateDesenvolvedorComponent } from './create-desenvolvedor/create-desenvolvedor.component';
import { UpdateDesenvolvedorComponent } from './update-desenvolvedor/update-desenvolvedor.component';

@NgModule({
  declarations: [
    AppComponent,
    LevelsComponent,
    DesenvolvedoresComponent,
    UpdateLevelsComponent,
    CreateDesenvolvedorComponent,
    UpdateDesenvolvedorComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ComponentsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
  ],
  exports: [],
  bootstrap: [AppComponent],
})
export class PagesModule {}
