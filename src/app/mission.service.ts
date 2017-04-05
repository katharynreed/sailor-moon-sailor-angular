import { Injectable } from '@angular/core';
import { Mission } from './mission.model'
import {  }
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class MissionService {

  constructor(private angularFire: AngularFire) {
    this.missions = angularFire.database.list('missions');
  }

  getMissions() {
    return this.missions;
  }

  getMission(missionId) {
    return this.angularFire.database.object('missions/' + missionId);
  }

  updateMission(localUpdatedMission) {
    let missionEntryInFirebase = this.getMission(localUpdatedMission.$key);
    missionEntryInFirebase.update({name: localUpdatedMission.name});
  }

  newMission(newMission: Mission) {
    this.missions.push(newMission);
  }
}
