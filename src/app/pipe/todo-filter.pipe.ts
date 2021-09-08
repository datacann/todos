import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../todo/todo';

@Pipe({
  name: 'todoFilter'
})
export class TodoFilterPipe implements PipeTransform {

  transform(todo: Todo[], filterText: string): Todo[] {

    filterText = filterText?filterText.toLocaleLowerCase():""

    return filterText?todo.filter((p:Todo)=>p.title.toLocaleLowerCase().indexOf(filterText)!==-1):todo;
  }

}
