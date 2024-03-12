import { Routes } from '@angular/router';
import { JobsComponent } from './jobs/jobs.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { JobsDescriptionComponent } from './jobs-description/jobs-description.component';

export const routes: Routes = [
    {path: 'jobs' , component:JobsComponent},
    {path: 'jobs/:id' , component:JobsDescriptionComponent},
    {path:'favorites', component:FavoritesComponent}
];
