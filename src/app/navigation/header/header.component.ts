import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // void is to specify that, this event has no pay load, or any any data getting emitetd with it.
  // @Output specifies that, this event is listenable from outside

  @Output() sidenavToggle = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }

  onToggleSidenav() {
   this.sidenavToggle.emit();
  }

}
