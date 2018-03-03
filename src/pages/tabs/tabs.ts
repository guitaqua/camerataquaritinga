import { Component } from '@angular/core';

import { AboutPage } from '../tvcamera/tvcamera';
import { ContactPage } from '../feed/feeds';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';


@Component({
  templateUrl: 'tabs.html'
  
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab5Root = LoginPage;

  constructor() {

  }
}
