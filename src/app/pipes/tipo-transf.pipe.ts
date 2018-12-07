import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tipoTransf'
})
export class TipoTransfPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value) {
      return "Entrada";
    }
      return "Saída"
  }

}
