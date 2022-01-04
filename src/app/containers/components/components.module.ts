import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoadingComponent } from './loading/loading.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormErrorComponent } from './form-error/form-error.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, LoadingComponent, FormErrorComponent],
  imports: [CommonModule, AppRoutingModule, MatProgressSpinnerModule],
  exports: [HeaderComponent, FooterComponent, LoadingComponent, FormErrorComponent],
})
export class ComponentsModule {}
