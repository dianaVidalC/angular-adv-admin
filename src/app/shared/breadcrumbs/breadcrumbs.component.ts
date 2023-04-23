import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { Observable, Subscription, filter, map } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [],
})
export class BreadcrumbsComponent implements OnDestroy {
  public titulo!: string;
  public titulo$!: Subscription;
  constructor(private router: Router, private route: ActivatedRoute) {
    // console.log(this.route.snapshot.children[0].data);

    this.titulo$ = this.getArgumentsRoute().subscribe(({ title }) => {
      this.titulo = title;
      document.title = title;
    });
  }

  getArgumentsRoute(): Observable<any> {
    return this.router.events.pipe(
      filter((evt: any) => evt instanceof ActivationEnd),
      filter((evt: ActivationEnd) => evt.snapshot.firstChild == null),
      map((evt: ActivationEnd) => evt.snapshot.data)
    );
  }

  ngOnDestroy(): void {
    this.titulo$.unsubscribe();
  }
}
