import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  template: ` <p>promises works!</p> `,
  styleUrls: ['./promises.component.css'],
})
export class PromisesComponent implements OnInit {
  ngOnInit(): void {
    // const promise = new Promise<string>((resolve, reject) => {
    //   resolve('Hola,');
    //   reject('algo salió mal.');
    // });
    // promise
    //   .then((msj) => {
    //     console.log(`${msj} terminé :p`);
    //   })
    //   .catch((err) => {
    //     console.log('Error en la promesa, ${err}');
    //   });
    // console.log('...');

    this.getUsers().then((users) => console.log(users));
  }

  getUsers() {
    const promise = new Promise<void>((resolve, reject) => {
      fetch('https://reqres.in/api/users?page=2')
        .then((res) => res.json())
        .then((body) => resolve(body.data));
    });

    return promise;
  }
}
