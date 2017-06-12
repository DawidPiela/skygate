import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

import { Hare } from '../../shared/hare.model';
import { HareListService } from '../hare-list.service';


@Component({
    selector: 'app-hare-edit',
    templateUrl: './hare-edit.component.html'
})
export class HareEditComponent implements OnInit, OnDestroy {
    @ViewChild('f') hlForm: NgForm;
    subscription: Subscription;
    editMode = false;
    editedItemIndex: number;
    editedItem: Hare;

    public name;
    public amount = 0;

    constructor(private hlService: HareListService) { }

    ngOnInit() {
        this.subscription = this.hlService.startedEditing
            .subscribe(
                (index: number) => {
                    this.editedItemIndex = index;
                    this.editMode = true;
                    this.editedItem = this.hlService.getHare(index);
                    this.hlForm.setValue({
                        name: this.editedItem.name,
                        amount: this.editedItem.amount
                    })
                }
        );
    }

    onSubmit(form: NgForm) {
        const value = form.value;
        const newHare = new Hare(value.name, value.amount);
        if(this.editMode) {
            this.hlService.updateHare(this.editedItemIndex, newHare);
        } else {
            this.hlService.addHare(newHare);
        }
        this.editMode = false;
        form.reset();
    }

    onAdd(form: NgForm, val: number) {
        this.amount += val;
        const value = form.value;
    }

    onSubstract(form: NgForm, val: number) {
        this.amount -= val;
        const value = form.value;
    }

    onDelete() {
        this.hlService.deleteHare(this.editedItemIndex);
        this.hlForm.reset();
        this.editMode = false;
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}