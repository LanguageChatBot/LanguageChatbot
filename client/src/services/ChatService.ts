import { Injectable } from "@angular/core";
import * as io from 'socket.io-client';

interface Message {
    mensaje:string;
    type:string;
}

@Injectable()
export class ChatService {
    public mensajes:Array<Message>= [];
    socket: any;
    constructor(){
        this.socket = io('http://localhost:3000/');
        this.socket.on('connect',() =>console.log("Connected to WS"))
        this.socket.on('chat', m => {
            console.log("Mensaje recibido");
            this.mensajes.push({
                mensaje:m.mensaje,
                type:'other'
            })
        })
    }
    
    sendMessage(m:string){
        this.socket.emit('chat-ready',{
            status:"Mensaje recibido",
            mensaje:m
        });
        this.mensajes.push({
            mensaje:m,
            type:'me'
        })
    }
}