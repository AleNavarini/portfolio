import { Component, OnInit } from '@angular/core';
import { Project } from "../../models/project";
import { ProjectService } from "../../services/project.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ProjectService]
})
export class CreateComponent implements OnInit {
    public new_project: Project;
  constructor(
    private _projectService: ProjectService
  ) { 
    this.new_project = new Project('','','','','');
  }

  ngOnInit(): void {
  }

  onSubmit(projectForm){
    this._projectService.save(this.new_project).subscribe(
      response => {
        if( response.project){
          alert("Project added succesfully!");
          projectForm.reset();
        } 
      },
      error => {
        console.log("Error creating project: " + error);
      }
    )
  }
}
