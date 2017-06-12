import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sortBy',
    pure: false
})
export class SortByPipe implements PipeTransform {

    transform(hares: Array<any>, args?: any): any {

        let sortField = args[0];

        hares.sort((b, a) => {
            if (a[sortField] < b[sortField]) {
                return -1;
            } else if (a[sortField] > b[sortField]) {
                return 1;
            } else {
                return a.name - b.name;
            }
        });
        return hares;
    }
}
