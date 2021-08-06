import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hobby',
  templateUrl: './hobby.component.html',
  styleUrls: ['./hobby.component.css']
})
export class HobbyComponent implements OnInit {
  arrproject:any =[
    {
      "url":"https://raw.githubusercontent.com/NishikantaRay/Nishikantaray.github.io/main/sergio2.jpg",
      "name":"Sergio"
    },
    {
      "url":"https://raw.githubusercontent.com/NishikantaRay/Nishikantaray.github.io/main/sergio.jpg",
      "name":"Sergio"
    },
    {
      "url":"https://raw.githubusercontent.com/NishikantaRay/Nishikantaray.github.io/main/face.jpg",
      "name":"Face Illustrator"
    },
    {
      "url":"https://raw.githubusercontent.com/NishikantaRay/Nishikantaray.github.io/main/img/sanjay.jpeg",
      "name":"Sanjay Dutt"
    },
    {
      "url":"https://raw.githubusercontent.com/NishikantaRay/Nishikantaray.github.io/main/img/carry.jpeg",
      "name":"CarryMinati"
    },
    {
      "url":"https://raw.githubusercontent.com/NishikantaRay/Nishikantaray.github.io/main/img/cards.jpeg",
      "name":"QueenofDecks"
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
