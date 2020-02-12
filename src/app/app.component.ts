import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type: 'server', name: 'Testserver', content: 'Just a test!'}];
  //NUMBER GAME
  numbers = [];
  oddNumbers = [];
  evenNumbers = [];

  onAddedServer(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onAddedBlueprint(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  //NUMBER GAME
  numberGenerated(numberGenerated: number) {
  console.log(numberGenerated);
  this.numbers.push(numberGenerated);
  if (numberGenerated % 2 === 1) {
    this.oddNumbers.push(numberGenerated);
  }
}



}
