import {Pipe, PipeTransform} from "@angular/core";


@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(members: any, term: any): any {

    if (term === undefined) return members;

    return members.filter(function(member){
      return member.theme.toLowerCase().includes(term.toLowerCase());
    })
  }

}
