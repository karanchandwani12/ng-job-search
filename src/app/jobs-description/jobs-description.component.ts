import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, RouterModule } from '@angular/router';
import { SjobServService } from '../sjob-serv.service';
import { CommonModule } from '@angular/common';
import { IJobDetail } from '../ijob-detail';
import { IJobDescription } from '../ijob-description';

@Component({
  selector: 'app-jobs-description',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './jobs-description.component.html',
  styleUrl: './jobs-description.component.css'
})
export class JobsDescriptionComponent {
  public currentJobPost: IJobDescription | undefined;
  public currentjobDetails: Array<IJobDetail>=[];
  public currentJobDesc: String='';

  public jobid: string | null | undefined;
  
constructor(private actRoute  : ActivatedRoute, private serv : SjobServService){
  console.log('const');

}

 ngOnInit(){
  this.actRoute.paramMap.subscribe((params: ParamMap)=>{
    let id= params.get('id');
    this.jobid=id;
  });
if(this.jobid!=null)
  this.serv.getJobDescription(this.jobid).subscribe(data=>this.currentJobPost=data);
  console.log(this.currentJobPost);
 }
}
