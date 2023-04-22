import { Component } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css'],
})
export class AccountSettingsComponent {
  public links = document.querySelectorAll('.selector');
  constructor(private settingService: SettingsService) {}

  ngAfterViewInit(): void {
    this.settingService.checkCurrentTheme(this.links);
  }

  changeTheme(theme: string) {
    this.settingService.changeTheme(theme, this.links);
  }
}
