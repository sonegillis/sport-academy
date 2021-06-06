import {Component, OnInit, ViewChild} from '@angular/core';
import {IonMenu} from "@ionic/angular";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  @ViewChild(IonMenu) menu: IonMenu;
  title = 'sport-academy';
  constructor(private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.fragment.subscribe((fragment: string) => {
      if (fragment && document.getElementById(fragment) != null) {
        document.getElementById(fragment).scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  chat(): void {
    const routeTo = `https://wa.me/+4915213218514/?text=''`;
    window.location.href = routeTo;
  }

  async navTo(fragment: string) {
    await this.menu.close()
    await this.router.navigate([''], {fragment})
  }
}
