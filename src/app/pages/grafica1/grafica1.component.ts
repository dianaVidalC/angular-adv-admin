import { Component } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [],
})
export class Grafica1Component {
  public data1 = {
    labels: ['Limpieza', 'Salud', 'Mail-Order Sales'],
    datasets: [
      {
        data: [350, 450, 100],
        backgroundColor: ['#6857e6', '#009fee', '#f02059'],
      },
    ],
  };

  public data2 = {
    labels: ['Verduras', 'Carnes', 'Frutas'],
    datasets: [
      {
        data: [390, 200, 180],
        backgroundColor: ['#6857e6', '#009fee', '#f02059'],
      },
    ],
  };

  public data3 = {
    labels: ['Pan', 'Dulces', 'Menestras'],
    datasets: [
      {
        data: [200, 150, 200],
        backgroundColor: ['#6857e6', '#009fee', '#f02059'],
      },
    ],
  };

  public data4 = {
    labels: ['Leche', 'Yogurt', 'Arroz'],
    datasets: [
      {
        data: [300, 430, 200],
        backgroundColor: ['#6857e6', '#009fee', '#f02059'],
      },
    ],
  };
}
