import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { ReviewPageComponent } from './review-page/review-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';

@Component({
  selector: 'app-root',
  imports:[HomePageComponent,NavbarComponent,ReviewPageComponent,AboutPageComponent,ContactPageComponent,FooterComponent],
  standalone:true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gym-management';
}

export default AppComponent; // Export the AppComponent class
