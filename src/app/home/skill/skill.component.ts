import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  arrproject:any =[
    {
      "url":"https://raw.githubusercontent.com/rahulbanerjee26/githubAboutMeGenerator/main/icons/javascript.svg",
      "name":"JAVASCRIPT"
    },
    {
      "url":"https://raw.githubusercontent.com/rahulbanerjee26/githubAboutMeGenerator/main/icons/angularjs.svg",
      "name":"ANGULAR"
    }
    ,
    {
      "url":"https://raw.githubusercontent.com/rahulbanerjee26/githubAboutMeGenerator/main/icons/bootstrap.svg",
      "name":"BOOTSTRAP"
    }
    ,
    {
      "url":"https://raw.githubusercontent.com/rahulbanerjee26/githubAboutMeGenerator/main/icons/github.svg",
      "name":"GITHUB"
    }
    ,
    {
      "url":"https://raw.githubusercontent.com/rahulbanerjee26/githubAboutMeGenerator/main/icons/nodejs.svg",
      "name":"NODEJS"
    }
    ,
    {
      "url":"https://raw.githubusercontent.com/rahulbanerjee26/githubAboutMeGenerator/main/icons/express.svg",
      "name":"EXPRESS"
    }
    ,
    {
      "url":"https://raw.githubusercontent.com/rahulbanerjee26/githubAboutMeGenerator/main/icons/mongodb.svg",
      "name":"MONGODB"
    },
    {
      "url":"https://raw.githubusercontent.com/rahulbanerjee26/githubAboutMeGenerator/main/icons/c.svg",
      "name":"C"
    },
    {
      "url":"https://raw.githubusercontent.com/rahulbanerjee26/githubAboutMeGenerator/main/icons/html.svg",
      "name":"HTML"
    }
    ,
    {
      "url":"https://raw.githubusercontent.com/rahulbanerjee26/githubAboutMeGenerator/main/icons/css.svg",
      "name":"CSS"
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
