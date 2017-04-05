import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { MissionService } from './../mission.service';
import { Mission } from './../mission.model';

@Component({
  selector: 'app-mission-detail',
  templateUrl: './mission-detail.component.html',
  styleUrls: ['./mission-detail.component.css']
})
export class MissionDetailComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private location: Location, private missionService: MissionService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.missionId = urlParameters['id'];
    });
    this.mission = this.missionService.getMission(this.missionId);
  }

  goToDetailPage(clickedId) {
    this.mission - this.missionService.getMission(missionId);
    this.router.navigate(['missions', clickedId]);
  }

}
