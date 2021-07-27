import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css'],
})
export class AboutmeComponent implements OnInit {
  details: any = {
    personalmail: 'nishikantaray1@gmail.com',
    clgmail: 'ece.190410294@silicon.ac.in',
    phone: '+91-6372833923',
    name: 'About me',
    picname: 'Nishikanta Ray',
    intro:
      'I am a second year Undergraduate student of Electronics and Communication Engineering at Silicon Institute of Technology,Bhubanewer,Odisha. I am a tech enthusiast who likes creating new things and experimenting with things. I am a fast learner and enjoy challenges encountered along the way. I am always willing to learn new things with full enthusiasm and passion.',
    url: 'https://avatars.githubusercontent.com/u/62615392?v=4',
  };
  constructor() {}

  ngOnInit(): void {}
}
