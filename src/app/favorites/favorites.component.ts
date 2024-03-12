import { Component, SimpleChange } from '@angular/core';
import { SjobServService } from '../sjob-serv.service';
import { IJobDetail } from '../ijob-detail';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})
export class FavoritesComponent {
  public myfavMarkedJobs= this.myServ.favMarkedJobs;
  public jobs: Array<IJobDetail>=[];

  constructor(private myServ : SjobServService){}
 
  ngOnInit(){
     this.myServ.getJobDetails().subscribe(data=>this.jobs=data);
  }

}
