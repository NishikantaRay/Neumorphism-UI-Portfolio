import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-opensource',
  templateUrl: './opensource.component.html',
  styleUrls: ['./opensource.component.css']
})
export class OpensourceComponent implements OnInit {
  arrproject:any=[
    {
      "url":"https://avatars.githubusercontent.com/u/72062226?s=200&v=4",
      "name":"C0D1NG"
    },
    {
      "url":"https://avatars.githubusercontent.com/u/80479011?s=200&v=4",
      "name":"SWITCH-CLUB"
    },
    {
      "url":"https://avatars.githubusercontent.com/u/64004382?s=200&v=4",
      "name":"OpenSourceDSA"
    },
    {
      "url":"https://avatars.githubusercontent.com/u/68415711?s=200&v=4",
      "name":"DevScript"
    },
    {
      "url":"https://avatars.githubusercontent.com/u/32596943?v=4",
      "name":"wejustdevelop"
    }

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
