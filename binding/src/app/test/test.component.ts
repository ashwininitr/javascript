import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
              <h1>
                  Welcome {{name}}
              </h1>
              <h1>{{2+2}}</h1>
              <h1>{{"Welcome "+name}}</h1>
              <h1>{{name.length}}</h1>
              <h1>{{name.toUpperCase()}}</h1>
              <h1>{{greetUser()}}</h1>
              <h1>{{siteurl}}</h1>
              
            `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public name="Ashwini";
  public siteurl=window.location.href;
  constructor() { }

  ngOnInit(): void {
  }
  greetUser(){
    return "Hello "+ this.name;
  }

}
