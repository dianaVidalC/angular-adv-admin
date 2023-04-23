import { Component, OnDestroy } from '@angular/core';
import {
  Observable,
  Subject,
  filter,
  interval,
  map,
  retry,
  take,
  takeUntil,
} from 'rxjs';

@Component({
  selector: 'app-rxjs',
  template: ` <p>rxjs works!</p> `,
  styleUrls: ['./rxjs.component.css'],
})
export class RxjsComponent implements OnDestroy {
  private destroySubject: Subject<void> = new Subject();

  constructor() {
    // this.returnObservable()
    //   .pipe(retry(1))
    //   .subscribe(
    //     (res) => console.log('Subs:', res),
    //     (err) => console.warn('Error', err),
    //     () => console.info('Obs terminado')
    //   );

    this.returnInterval().subscribe(console.log);
  }

  returnInterval(): Observable<number> {
    return interval(1000).pipe(
      map((v) => v + 1),
      filter((v) => (v % 2 == 0 ? true : false)),
      takeUntil(this.destroySubject)
      // take(4)
    );
  }

  returnObservable(): Observable<number> {
    let i = -1;
    return new Observable<number>((observer) => {
      // let i = -1;
      const interval = setInterval(() => {
        i++;
        observer.next(i);

        if (i === 4) {
          clearInterval(interval);
          observer.complete();
        }

        if (i === 2) {
          observer.error('Llegó al valor de 2');
        }
      }, 1000);
    });
  }

  ngOnDestroy(): void {
    this.destroySubject.next();
  }
}
