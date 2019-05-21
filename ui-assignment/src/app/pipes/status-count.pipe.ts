import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusCount'
})
export class StatusCountPipe implements PipeTransform {
  transform(dataArray: any[], statusName: string): number {
    let count = 0;
    dataArray.forEach((data) => {
      if (data.status === statusName) {
        ++count;
      }
    });
    return count;
  }
}
