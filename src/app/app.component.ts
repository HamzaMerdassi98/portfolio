import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  openGithub() {
    window.open('https://github.com/HamzaMerdassi98', '_blank');
  }

  sendEmail() {
    window.open('hamzzamardessi@gmail.com', '_blank');
  }

  openWhatsApp() {
    window.open('https://wa.me/+21654035174', '_blank');
  }

  openLinkedIn() {
    window.open('https://www.linkedin.com/in/merdassi-hamza-0271a7201/', '_blank');
  }
}
