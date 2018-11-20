import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';
import {Device} from "@ionic-native/device";


import { MyApp } from './app.component';
import {TabsModule} from "../pages/tabs/tabs.module";
import {UserPageModule} from "../pages/user/user.module";
import {JoinSessionPageModule} from "../pages/join-session/join-session.module";
import {ChooseAvatarPageModule} from "../pages/popover/chooseAvatar/choose-avatar.module";
import {ComponentsModule} from "../components/components.module";

///* Digital Ocean */ const config: SocketIoConfig = { url:  'http://165.227.151.58:3001', options: {}};
const config: SocketIoConfig = { url: 'localhost:3001', options: {}};

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
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
