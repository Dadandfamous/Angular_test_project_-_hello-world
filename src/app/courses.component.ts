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
              <div (click)="onDivClicked()">
                <button (click)="onSave($event)"  [style.backgroundColor]="isActive ? 'blue' : 'white'" class="btn btn-primary" [class.active]="isActive">Save</button>
              </div>
              <br/>
              
             
              <input [(ngModel)]="email"  (keyup.enter)="onKeyUp()" />
              
              ` 
})


export class CoursesComponent {
    title = "List of courses"
    imageUrl = "http://lorempixel.com/400/200";
    colSpan = 2;
    isActive = true
    
    email = "me@example.com"
    onKeyUp(){
        console.log(this.email)
    }

    onDivClicked() {
        console.log("div was clicked");
    }

    onSave($event){
        $event.stopPropagation()

        console.log("button was clicked", $event);
    } 
    // constructor(service: CoursesService){
    //     // let service = new CoursesService()
    //     this.courses = service.getCourses()
    // }
 

    // getTitle() {
    //   return this.title
    // }
}

// <input [value]="email"  (keyup.enter)="email = $event.target.value; onKeyUp()" />