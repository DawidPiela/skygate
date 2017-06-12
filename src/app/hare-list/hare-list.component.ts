import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Hare } from '../shared/hare.model';
import { HareListService } from './hare-list.service';

@Component({
    selector: 'app-hare-list',
    templateUrl: './hare-list.component.html'
})
export class HareListComponent implements OnInit, OnDestroy {
    hares: Hare[];
    private subscription: Subscription

    sortField: string = 'amount';
    sortFields: Array<string> = [
        'name',
        'amount'
    ];

    constructor(private hlService: HareListService) { }

    ngOnInit() {
        this.hares = this.hlService.getHares();
        this.subscription = this.hlService.haresChanged
            .subscribe(
                (hares: Hare[]) => {
                    this.hares = hares;
                }
            );
    }

    onEditItem(index: number) {
        this.hlService.startedEditing.next(index);
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}