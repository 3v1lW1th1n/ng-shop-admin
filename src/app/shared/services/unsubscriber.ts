import { OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

export class Unsubscriber implements OnDestroy {
  public unsubscribeControl$$ = new Subject();

  public ngOnDestroy(): void {
    this.unsubscribeControl$$.next(true);
    this.unsubscribeControl$$.complete();
  }
}
