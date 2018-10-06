import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { ScrollEvent } from "ngx-scroll-event";
import { FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-agreement",
  templateUrl: "./agreement.component.html",
  styleUrls: ["./agreement.component.css"]
})
export class AgreementComponent implements OnInit {
  agreementNotRead = true;
  accepted = new FormControl("", Validators.requiredTrue);
  @Output() previous = new EventEmitter<boolean>();
  @Output() valid = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit() {}

  checkEndOfCard(event: ScrollEvent) {
    if (!event.isWindowEvent && event.isReachingBottom) {
      this.agreementNotRead = !event.isReachingBottom;
    }
  }

  getErrorMessageForAgreement() {
    return this.accepted.hasError("required")
      ? "Il faut accepter les conditions générales"
      : "";
  }

  showPrevStep() {
    this.previous.emit(true);
  }

  sendForm() {
    this.valid.emit(true);
  }
}
