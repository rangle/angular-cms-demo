import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../athletes.service';

interface Athlete {
  id: number,
  firstName: string,
  lastName: string,
  image: any;
  sport: {
    type: string,
    retired: boolean,
    position: string,
    nationalTeam: string
  }
}

@Component({
  selector: 'app-athlete',
  templateUrl: './athlete.component.html',
  styleUrls: ['./athlete.component.scss']
})
export class AthleteComponent implements OnInit {

  athletes: Athlete[] = [];

  constructor(private athleteService: ContentfulService) {}

  async ngOnInit(): Promise<void> {
    
    let apiResponse = await this.athleteService.getAthletes();

    this.athletes = apiResponse.map(entry => {
      return entry.fields;
    });

  }

}
