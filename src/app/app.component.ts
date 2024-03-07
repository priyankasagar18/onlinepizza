import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import {MatButtonModule} from '@angular/material/button'
import { HomepageComponent } from './homepage/homepage.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { HomeCounterComponent } from './home-counter/home-counter.component';
import { HomeOfferComponent } from './home-offer/home-offer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent, MatButtonModule,HomepageComponent,MatCardModule,
    MatIconModule,HomeCounterComponent, HomeOfferComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'onlinepizza';
}
