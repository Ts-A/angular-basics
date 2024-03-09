import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SignalsComponent } from './signals/signals.component';
import { AppComponentComponent } from './app-component/app-component.component';
import { LocalReferenceComponent } from './local-reference/local-reference.component';
import { LifecycleHooksComponent } from './lifecycle-hooks/lifecycle-hooks.component';
import { GreenDirective } from './directive/directive';
import { BetterDirective } from './directive/better-directive';
import { HostListenerDirective } from './directive/host-listener.directive';
import { HostBindingDirective } from './directive/host-binding.directive';
import { InputtingDirective } from './directive/inputting.directive';
import { UnlessDirective } from './directive/unles..directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnimationComponent } from './animation/animation.component';

@NgModule({
  declarations: [
    AppComponent,
    SignalsComponent,
    AppComponentComponent,
    LocalReferenceComponent,
    LifecycleHooksComponent,
    GreenDirective,
    BetterDirective,
    HostListenerDirective,
    HostBindingDirective,
    InputtingDirective,
    UnlessDirective,
    AnimationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
