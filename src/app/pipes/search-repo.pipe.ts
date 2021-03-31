import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchRepo'
})
export class SearchRepoPipe implements PipeTransform {

  transform(value: any, findRepo:string ): any {

          let newRepos= [];

          value.forEach(element => {
                if( element.name == findRepo){
                       newRepos.push(element);
                }
          });

          if(findRepo != ''){
            return newRepos;
          }
          
          return value;
  }

}
