import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import User from "../../models/login-model";

@Component({
  selector: "app-login-form",
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.css"]
})
export class LoginFormComponent implements OnInit {
  email = new FormControl("", [Validators.required, Validators.email]);
  password = new FormControl("", [
    Validators.required,
    Validators.minLength(4)
  ]);
  @Output()
  next = new EventEmitter<User>();
  constructor() {}

  ngOnInit() {}

  getErrorMessageForEmail() {
    return this.email.hasError("required")
      ? "L'email est obligatoire"
      : this.email.hasError("email")
        ? "Emial invalide!"
        : "";
  }
  getErrorMessageForPassword() {
    return this.password.hasError("required")
      ? "Le mot de passe est obligaotire"
      : this.password.hasError("minlength")
        ? "La taille du mot de passe >= 4"
        : "";
  }
  showNextStep() {
    const user: User = { email: this.email.value, password: this.password.value };
    this.next.emit(user);
  }
}
