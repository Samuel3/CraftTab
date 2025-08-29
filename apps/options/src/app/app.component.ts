import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BackgroundSettingsComponent } from './components/background-settings/background-settings.component';

@Component({
  standalone: true,
  selector: 'options-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [BackgroundSettingsComponent]
})
export class AppComponent {}
