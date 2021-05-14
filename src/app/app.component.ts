import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ResumeRohitJain';

  downloadResume() {
    let link = document.createElement('a');
    link.setAttribute('type', 'hidden');
    link.href = 'assets/RohitResume.pdf';
    link.download = "RohitJainResume.pdf";
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
}
