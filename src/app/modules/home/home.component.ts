import { Component } from '@angular/core';
import { PeopleTableComponent } from '../../components/people-table';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PeopleTableComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {
   
}
