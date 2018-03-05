import { Component, OnInit } from "@angular/core";
import { ChatService } from "../../services/ChatService";
import { SessionService } from "../../services/session.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-chat",
  templateUrl: "./chat.component.html",
  styleUrls: ["./chat.component.css"]
})
export class ChatComponent implements OnInit {
  toSend: string;

  constructor(
    public chat: ChatService,
    public session: SessionService,
    private router: Router
  ) {}

  ngOnInit() {
    if (this.session.user == undefined) {
      this.router.navigate(["/login"]);
    }
  }

  sendMessage() {
    //console.log(`Enviando mensaje: ${this.toSend}`);
    this.chat.sendMessage(this.toSend);
    this.toSend = "";
  }
}
