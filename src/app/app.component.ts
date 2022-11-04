import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = "Дмитрий"
  surname: string =  "";
  val: string = "pp";

  func() {
    // alert("hello");
    console.log(this.name)
    console.log(this.surname)
  }
}
