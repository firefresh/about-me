import { Component } from '@angular/core';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';

interface EventItem {
  title: string;
  date: string;
  text: string;
  tags?: [string];
  icon?: string;
  color?: string;
  image?: string;
}

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [TimelineModule, CardModule, CommonModule],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
  events: EventItem[];

  constructor() {
    this.events = [
      {
        title: "Python Developer", 
        date: "2019 - 2022", 
        text: "Python developer, carrying out integration tasks and improvements of Leafnoise products.",
        icon: 'pi pi-check', 
        color: '#607D8B'
      },
      {
        title: "DevOps Lead", date: "2022 - Present", text: "", icon: 'pi pi-check', color: '#607D8B'
      }
    ];
  }
}
