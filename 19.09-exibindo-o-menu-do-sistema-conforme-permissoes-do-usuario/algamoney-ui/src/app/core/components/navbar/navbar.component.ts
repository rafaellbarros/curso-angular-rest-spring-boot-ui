import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/modules/seguranca/services';


@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

}
