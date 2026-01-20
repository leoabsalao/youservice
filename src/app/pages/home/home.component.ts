import { Component } from '@angular/core';
import { PrincipalComponent } from "../../components/principal/principal.component";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PrincipalComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
