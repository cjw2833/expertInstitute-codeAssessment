import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencySearchFilter'
})
export class CurrencySearchFilterPipe implements PipeTransform {

  transform(list: any[], filterText: string): any {
    
    return list ? list.filter(asset => asset.name.search(new RegExp(filterText, 'i')) > -1) : [];
  }

}
