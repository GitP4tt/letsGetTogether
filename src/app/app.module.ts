import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';
import {SocketIoModule, SocketIoConfig} from 'ng-socket-io';
import {Device} from "@ionic-native/device";
import {TapticEngine} from "@ionic-native/taptic-engine";


import {MyApp} from './app.component';
import {TabsModule} from "../pages/tabs/tabs.module";
import {UserPageModule} from "../pages/user/user.module";
import {JoinSessionPageModule} from "../pages/join-session/join-session.module";
import {ChooseAvatarPageModule} from "../pages/popover/chooseAvatar/choose-avatar.module";

/* Digital Ocean */
//const config: SocketIoConfig = { url:  'api.getto.patrice.codes', options: {}};

const config: SocketIoConfig = {url: 'http://localhost:3001', options: {}};

/* Heidelberg */
//const config: SocketIoConfig = {url: '192.168.2.102:3001', options: {}};


@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    SocketIoModule.forRoot(config),
    TabsModule,
    UserPageModule,
    JoinSessionPageModule,
    ChooseAvatarPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    Device,
    StatusBar,
    SplashScreen,
    TapticEngine,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
