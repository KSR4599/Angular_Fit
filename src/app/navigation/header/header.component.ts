import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
isAuth: boolean;
authSubscription: Subscription;
  // void is to specify that, this event has no pay load, or any any data getting emitetd with it.
  // @Output specifies that, this event is listenable from outside

  @Output() sidenavToggle = new EventEmitter<void>();
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authSubscription = this.authService.authChange.subscribe(authStatus => {
       this.isAuth = authStatus;
    });
  }

  onToggleSidenav() {
   this.sidenavToggle.emit();
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }

}
