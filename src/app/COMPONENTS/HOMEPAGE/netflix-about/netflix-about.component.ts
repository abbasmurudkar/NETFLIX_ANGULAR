import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-netflix-about',
  templateUrl: './netflix-about.component.html',
  styleUrls: ['./netflix-about.component.scss']
})
export class NetflixAboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  cross: string = "";
  activemeter:number | undefined; 
  bool: boolean = false
  handleclick(index : any) {
    this.activemeter = this.activemeter == index ? null : index
    if (this.bool == true) {
      this.bool = false
      this.cross = "transform: rotate(0deg);"
    }
    else {
      this.bool = true
      this.cross ="transform: rotate(-45deg);"
    }
  }
  myarray = [
    {
      name: 'What is Netflix?',
      text: 'Netflix is a streaming service that offers a wide variety of<br> award-winning TV shows, movies, anime, documentaries<br> and more– on thousands of internet-connected devices.<br><br><br>    You can watch as much as you want, whenever you want,<br> without a single ad – all for one low monthly price. There<br> always something new to discover, and new TV shows and<br> movies are added every week!',
      isActive: false
    },
    {
      name: 'How much did Netflix Cost?',
      text: ' Watch Netflix on your smartphone,tablet, SmartTV, laptop,or<br> streaming device, all for one fixed monthly fee. Plans range<br> from ₹ 199 to ₹ 799 a month. No extra costs, no contracts.',
      isActive: false
    },
    {
      name: 'Where can I watch?',
      text: ' Watch anywhere,anytime, on an unlimited number devices.<br> Sign in with your Netflix account instantly on the web<br> at netflix.com from your computer or on any internet-<br>connected device that offer the Netflix app,including smart<br> TVs,smartphones,tablets,streaming media players and game<br> consoles.<br><br><br>  You can also download your favourite shows with the iOS,<br> Android, or Windows 10 app.Use downloads to watch while<br> youre on the go and without an internet connection. Take<br> Netflix with you anywhere.',
      isActive: false
    },
    {
      name: 'How do I cancle?',
      text: ' Netflix is flexible. There are no annoying contracts and no<br> commitments.You easily cancel your account online in two<br>clicks. There are no cancellation fees – start or stop your<br> account anytime.',
      isActive: false
    },
    {
      name: 'What can I watch in netflix?',
      text: ' Netflix has an extensive library feature films,documentaries,<br> TV shows, anime, award-winning Netflix originals,and more.<br>Watch as much as you want, anytime you want.',
      isActive: false
    },
    {
      name: 'Is Netflix good for Kids?',
      text: 'The Netflix Kid experience included in your membership to<br>give parent control while kid enjoy family-friendly TV shows<br>and films in their own space.<br><br><br>Kid profile come with PIN-protected parent control that let<br> you restrict  maturity rating of content kids can watch and<br> block specific title you don’t want kid to see.',
      isActice: false
    }

  ]
}
