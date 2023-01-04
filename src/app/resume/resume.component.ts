import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { MatSliderModule } from '@angular/material/slider';


@Component({
  selector: 'app-resume',

  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],

  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('500ms', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class ResumeComponent {
  experiences = [
    { title: 'Oddo Website Code ',Date : '2019-2020', description: 'Summer internship in Aurax ', details: 'Technologie : Oddo , Python , Html , Css , Js , PHP' ,fRAMWORK:'Framwork : Bootstrap , Laravel' },
    { title: 'Ui/UX Design for website',Date:'2020-2021', description: " Internship with a French online startup MarketPro", details: 'Framwork : Bootstrap , JQuery ,Tailwind ', fRAMWORK:'software : Figma ' },
    { title: 'Platform & Mobile Application E-learning ', Date:'2021-2022',description: 'Project end of study with Aurax', details: 'Technologie : MERN Stack & React native' , fRAMWORK:'Methodology: Scrum '}
  ];
  Education = [
    { title: 'Baccalaureate in Economics and Management',Date:'2018-2019', description: 'High School Road Tabarka Mateur ' },
    { title: 'National License in Management Computing ',Date:'2019-2022', description: "Speciality : E-Bussines", details: 'Higher Institute of Computer Science Mahdia ' },
    { title: 'Master Pro in Devops & Cloud',Date:'Begin in 2022', description: 'Higher Institute of Technological Studies of Tozeur'}
  ];
   Certificate = [
    { title: "L'essentiel de JavaScript",Date:'2020', description: 'From : Linkidinlearning ' },
    { title:  'Foundations of User Experience(UX) Design',Date:'2021', description: "From : Google"  },
    { title: 'Version Control',Date:' 2021', description: 'From : Coursera'},
    { title: 'Scrum Foundation professional',Date:' 2022', description: 'From : CertiProf'}
  ];
  associative = [
    { title: 'Red Crescent Member ',Date : '2019-2022',lieu: 'Mateur ', },
  ];
  sliderValue = 0;
  currentYear = new Date().getFullYear();

  constructor() { }

  ngOnInit(): void {
  }
}
