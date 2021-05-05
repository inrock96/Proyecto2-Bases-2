import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaccion',
  templateUrl: './transaccion.component.html',
  styleUrls: ['./transaccion.component.css']
})
export class TransaccionComponent implements OnInit {

  constructor() { }
  instituciones = ['Banco Agromercantil','Banco G&T','Banco de desarrollo rural','Banco Promerica','Banco Industrial']
  institucion:String
  ngOnInit(): void {
  }

}
