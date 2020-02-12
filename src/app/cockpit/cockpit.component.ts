import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() createServer= new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() createBluePrint= new EventEmitter<{serverName: string, serverContent: string}>();;
  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit(): void {
  }
 
  onAddServer(serverName: HTMLInputElement) {
    this.createServer.emit(
      {
        serverName: serverName.value, 
        serverContent: this.newServerContent
      }
    )
  }

  onAddBlueprint() {
    this.createBluePrint.emit(
      {
        serverName: this.newServerName, 
        serverContent: this.newServerContent
      }
    )
  }

}
