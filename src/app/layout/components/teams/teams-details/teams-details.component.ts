import { Component, Input } from '@angular/core';
import { TeamsResponseModel } from 'src/app/_model';

@Component({
  selector: 'app-teams-details',
  templateUrl: './teams-details.component.html',
  styleUrls: ['./teams-details.component.scss']
})
export class TeamsDetailsComponent {
  @Input() teamDetails: TeamsResponseModel = new TeamsResponseModel();
}
