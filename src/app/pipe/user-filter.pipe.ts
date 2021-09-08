import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../user/user';

@Pipe({
  name: 'userFilter'
})
export class UserFilterPipe implements PipeTransform {

  transform(user: User[], filterText: string): User[] {

    filterText = filterText?filterText.toLocaleLowerCase():""

    return filterText?user.filter((p:User)=>p.name.toLocaleLowerCase().indexOf(filterText)!==-1):user;
  }
}
