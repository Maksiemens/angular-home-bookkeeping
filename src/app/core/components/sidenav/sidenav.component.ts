import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavComponent implements OnInit {
  @Input() isSidenavActive = true;
  @Output() toggle = new EventEmitter<any>();
  @Output() close = new EventEmitter<any>();
  @Output() logout = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {
  }

  closeSidenav(): void {
    this.close.emit();
  }

  onLogout() {
    this.logout.emit();
  }
}
