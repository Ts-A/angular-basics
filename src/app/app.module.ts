import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    UnlessDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
