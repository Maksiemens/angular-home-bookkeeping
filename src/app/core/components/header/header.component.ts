import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { User } from '@app/shared/models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  @Input() isLoading!: boolean;
  @Input() isBackButtonActive!: boolean;
  @Input() isFoodRouteActive!: boolean;
  // @Input() currentPatient: Patient;
  @Input() currentUser!: User;
  @Output() toggle = new EventEmitter<any>();
  @Output() open = new EventEmitter<any>();
  @Output() close = new EventEmitter<any>();
  @Output() logout = new EventEmitter<any>();
  public today: Date = new Date();
  public isDropDownMenuActive = false;

  constructor() {}

  ngOnInit(): void {
  }

  openSidenav(): void {
    this.open.emit();
  }

  toggleDropDownMenu(): void {
    this.isDropDownMenuActive = !this.isDropDownMenuActive;
  }

  closeOutsideDropDownMenu(): void {
    this.isDropDownMenuActive = false;
  }

  closeDropDownMenu(): void {
    this.isDropDownMenuActive = false;
  }

  onLogout(): void {
    this.logout.emit();
  }
}
