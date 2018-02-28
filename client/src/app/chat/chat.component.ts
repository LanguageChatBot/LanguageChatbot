import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/ChatService';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  toSend:string;

  constructor(public chat:ChatService) { }

  ngOnInit() {
  }

  sendMessage(){
    console.log(`Enviando mensaje: ${this.toSend}`);
    this.chat.sendMessage(this.toSend);
    this.toSend = "";
  }

}
