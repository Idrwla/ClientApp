import {Directive, HostListener, Input} from '@angular/core';
import {Router} from '@angular/router';

@Directive({
  selector: '[appBackButton]',
})
export class BackButtonDirective {
  // tslint:disable-next-line:no-input-rename
  @Input('appToPage') Page: string;
  constructor(private router: Router) { }
  @HostListener('click')
  onClick(): void{
    this.router.navigateByUrl(this.Page);
  }
}
