import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'medicion', url: 'medicion', icon: 'speedometer' },
    { title: 'ubicacion', url: 'ubicacion', icon: 'map' },
    { title: 'trabajo', url: 'trabajo', icon: 'analytics' },
    { title: 'registrar', url: 'registrar', icon: 'train' },
    
  ];
  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
