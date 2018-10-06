import { Component, OnInit } from "@angular/core";
import { LoginService } from "./services/login.service";
import User from "./models/login-model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [LoginService]
})
export class AppComponent {
  title = "test-angular";
  userToLogin: User;
  showForm = true;
  constructor(private loginService: LoginService) {}

  showNext(args) {
    this.userToLogin = args;
    this.showForm = false;
  }
  showPrevious(args) {
    this.showForm = true;
  }
  sendForm(args) {
    this.loginService.login(this.userToLogin);
  }
}
