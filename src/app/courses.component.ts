// import { CoursesService } from './course/courses.service';
import { Component } from '@angular/core'

@Component({
    selector: 'courses',
    template: `
              <h2>{{ title }}</h2>
              
              <img [src]="imageUrl"/>

              <table>
                <tr>
                    <td [attr.colspan]="colSpan"></td>
                </tr>
              </table>
              <br/>

              Here comes a button:
              <br/>
              <button class="btn btn-primary">Save</button>
              ` 
})


export class CoursesComponent {
    title = "List of courses"
    imageUrl = "http://lorempixel.com/400/200";
    colSpan = 2;

    // constructor(service: CoursesService){
    //     // let service = new CoursesService()
    //     this.courses = service.getCourses()
    // }
 

    // getTitle() {
    //   return this.title
    // }
}