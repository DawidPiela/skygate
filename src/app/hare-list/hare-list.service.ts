import { Hare } from '../shared/hare.model';
import { Subject } from 'rxjs/Subject';

export class HareListService {
    haresChanged = new Subject<Hare[]>();
    startedEditing = new Subject<number>();
    private hares: Hare[] = [];

    getHares() {
        return this.hares.slice();
    }

    getHare(index: number) {
        return this.hares[index];
    }

    addHare(hare: Hare) {
        this.hares.push(hare);
        this.haresChanged.next(this.hares.slice());
    }

    updateHare(index: number, newHare: Hare) {
        this.hares[index] = newHare;
        this.haresChanged.next(this.hares.slice());
    }

    deleteHare(index: number) {
        this.hares.splice(index, 1);
        this.haresChanged.next(this.hares.slice());
    }
}