import { Component } from '@angular/core';
@Component({
    selector: 'app-new-role',
    templateUrl: './new-role.component.html',
    styleUrls: ['./new-role.component.scss']
})
/** new-role component*/
export class NewRoleComponent {
   title: string;
   closeBtnName: string;
   list: any[] = [];

  constructor() { }

  ngOnInit() {
    //this.list.push('PROFIT!!!');
  }

}
