import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IJobDetail } from './ijob-detail';
import { HttpClient } from '@angular/common/http';
import { worker } from '../main';
import { IJobDescription } from './ijob-description';

@Injectable({
  providedIn: 'root',
})
export class SjobServService {
  descibeJob: String = '';
  public favMarkedJobs: Array<number> = [];

  getJobDetails(): Observable<IJobDetail[]> {
    return this.http.get<IJobDetail[]>(`/jobs`);
  }

  getJobDescription(jobId: string): Observable<IJobDescription> {
    return this.http.get<IJobDescription>(`/jobs/` + jobId);
  }
  initializeFav(jobs: IJobDetail[]) {}
  addFavJobs(job: IJobDetail) {
    if (!this.favMarkedJobs.includes(job.id)) this.favMarkedJobs.push(job.id);
    else {
      const index: number = this.favMarkedJobs.indexOf(job.id);
      if (index !== -1) {
        this.favMarkedJobs.splice(index, 1);
        console.log(job.id);
      }
    }
  }

  constructor(private http: HttpClient) {}
}
