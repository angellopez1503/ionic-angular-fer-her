import { Component, OnInit } from '@angular/core';

interface Componente{
  icon: string;
  name: string;
  redirecTo: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {


  public componentes: Componente[]=[
    {
      icon:'american-football-outline',
      name:'Action sheet',
      redirecTo:'/action-sheet'
    },
    {
      icon:'alert-circle-outline',
      name:'alert',
      redirecTo:'/alert'
    },
    {
      icon:'beaker-outline',
      name:'avatar',
      redirecTo:'/avatar'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
