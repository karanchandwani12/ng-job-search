import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { IJobDetail } from '../ijob-detail';
import { CommonModule } from '@angular/common';
import { SjobServService } from '../sjob-serv.service';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.css'
})
export class JobsComponent {

  public jobs: Array<IJobDetail>=[];
  public myfavMarkedJobs= this.jobServ.favMarkedJobs;


  constructor(private jobServ : SjobServService, private route : Router){
  }

  ngOnInit(){
    this.jobServ.getJobDetails().subscribe(data=>this.jobs=data);
    
  }

  toggleFunc(job: IJobDetail){
    this.jobServ.addFavJobs(job);
    this.myfavMarkedJobs=this.jobServ.favMarkedJobs;
    job.isFavorite=!job.isFavorite;
    console.log(this.myfavMarkedJobs);
}

  jobdesc( job: IJobDetail){
   // this.jobServ.descibeJob=job.description;
    this.route.navigate(['/jobs',job.id])
  }


}
