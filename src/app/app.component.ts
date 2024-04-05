import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent, ToolbarComponent } from './components';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToolbarComponent, FooterComponent, MatDialogModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'GentlemanAngularTest';
}
