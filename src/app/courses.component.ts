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
              <br/>
              
              {{ course.title | uppercase | lowercase }} <br/>
              {{ course.students | number }} <br/>
              {{ course.rating | number:'2.1-1' }} <br/>
              {{ course.price | currency:'AUD':true:'3.2-2' }} <br/>
              {{ course.releaseDate | date:'shortDate' }} <br/>

              {{ text | summary: 100 }}
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

    course = {
        title: "The Complete Angular Course",
        rating: 4.923,
        students: 30123,
        price: 190.95,
        releaseDate: new Date(2016, 3, 1)
    }

    text = `
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        `
    // constructor(service: CoursesService){
    //     // let service = new CoursesService()
    //     this.courses = service.getCourses()
    // }
 

    // getTitle() {
    //   return this.title
    // }
}

// <input [value]="email"  (keyup.enter)="email = $event.target.value; onKeyUp()" />