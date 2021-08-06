import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-swags',
  templateUrl: './swags.component.html',
  styleUrls: ['./swags.component.css']
})
export class SwagsComponent implements OnInit {
  arrproject:any =[
    {
      "url":"https://raw.githubusercontent.com/NishikantaRay/Minimalist-portfolio/main/img/mlh.jpeg",
      "name":"Mlhacks swags"
    },
    {
      "url":"https://pbs.twimg.com/media/En7Ztt5UYAISELX.jpg",
      "name":"Google cloud ready facilitator program"
    },
    {
      "url":"https://i.ytimg.com/vi/UvcI5G0bidQ/maxresdefault.jpg",
      "name":"Hacktoberfest Swags 2020"
    },
    {
      "url":"https://raw.githubusercontent.com/NishikantaRay/Minimalist-portfolio/main/img/IMG-20200114-WA0005.jpg",
      "name":"Google Cloud skills challenge 2019"
    },
    {
      "url":"https://raw.githubusercontent.com/NishikantaRay/Minimalist-portfolio/main/img/laptop.jpg",
      "name":"Biju Yuva Sashaktikaran Yojana(Odisha Govt)"
    }

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
