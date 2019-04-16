import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "angularInterpollation";
  empFirstname: string = "pranav";
  empLastname: string = "verma";
  a: number = 10;
  b: number = 20;
}
