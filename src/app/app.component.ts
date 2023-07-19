import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  /*name = 'Carlos Alberto';
  age = 20;
  img = 'https://plus.unsplash.com/premium_photo-1686978705183-2fd8453a1e7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4OTczNTEyNA&ixlib=rb-4.0.3&q=80&w=1080';
  btnDisabled = true;
  person = {
    name: 'Carlos',
    age: 20,
    avatar: 'https://plus.unsplash.com/premium_photo-1686978705183-2fd8453a1e7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4OTczNTEyNA&ixlib=rb-4.0.3&q=80&w=1080'
  };*/
  
  person = {
    name: 'Carlos',
    age: 20,
    avatar: 'https://plus.unsplash.com/premium_photo-1686978705183-2fd8453a1e7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4OTczNTEyNA&ixlib=rb-4.0.3&q=80&w=1080'
  };

  btnDisabled = true;
  toggleButton() {
    this.btnDisabled = !this.btnDisabled;
  }

  increaseAge(){
    this.person.age += 1;
  }

  onScroll(event: any){
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changeName(event: Event){
    const element = event.target as HTMLInputElement;
    this.person.name = element.value
  }
}
