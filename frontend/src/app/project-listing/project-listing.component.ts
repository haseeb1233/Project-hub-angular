import { Component } from '@angular/core';

@Component({
  selector: 'app-project-listing',
  templateUrl: './project-listing.component.html',
  styleUrls: ['./project-listing.component.css']
})
export class ProjectListingComponent {
   projects=[
    { id: 1, name: 'Project 1', description: 'Description for Project 1' },
    { id: 2, name: 'Project 2', description: 'Description for Project 2' },
   ] 
  
   deleteProject(project: any) {
    console.log('Project deleted:', project);
  }
 
}
