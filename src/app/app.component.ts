import { Component } from '@angular/core';
import { Mission } from './mission.model';
import { MissionDetailComponent } from './mission-detail/mission-detail.component';
import { MissionService } from './mission.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MissionService]
})
export class AppComponent {
  missions: FireBaseListObservable<any[]>;
  constructor(private missionService: MissionService) { }

  ngOnInit() {
    this.missions = this.missionService.getMissions();
  }
}
