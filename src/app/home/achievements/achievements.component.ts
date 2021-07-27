import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css'],
})
export class AchievementsComponent implements OnInit {
  name: any = 'Achievements';
  arrproject: any = [
    {
      img: 'https://raw.githubusercontent.com/NishikantaRay/os-portfolio/main/p1.png?token=AO5W6YHOMTV67CAI7WJ4RHLBA3LI4',
      details:
        ' The first, (currently only) and hands down BEST bootstrap 5 snippet extension. Includes templates, powerful utility snippets, and much more.',
      name: 'Bootstrap 5 Code Snippets ',
      link: 'https://marketplace.visualstudio.com/items?itemName=Nishikanta12.bootstrap5snippets',
    },
    {
      img: 'https://raw.githubusercontent.com/NishikantaRay/os-portfolio/main/p2.png?token=AO5W6YB4C7NT3A5WO2SAU5LBA3N4M',
      details:
        ' StudyTub is an online platform where you can get all engineering study material ,video lectures and assignment solution',
      name: 'Studytub ',
      link: 'https://studytub.ml',
    },
    {
      img: 'https://raw.githubusercontent.com/NishikantaRay/os-portfolio/main/p3.png?token=AO5W6YGSJAUQEETXKPZHZSLBA3RHS',
      details:
        'To Control the black market of medicines, Control the production of Falsified drugs and provide real and trusted medicines to the buyer.',
      name: 'Hackthe mountain 2.0',
      link: 'https://devfolio.co/submissions/eliminating-black-market-of-medicines-0cd3',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
