import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galera',
  templateUrl: './galera.component.html',
  styleUrls: ['./galera.component.css']
})
export class GaleraComponent implements OnInit {

  titulos = [["Carniceria", "../../assets/carn1.jpg", "../../assets/carn2.jpg", "../../assets/carn3.jpg", 'Un buen lugar para realizar tus compras y disfrutar de la mejor comida que peudas preparar'], ["Estética", "../../assets/est1.jpg", "../../assets/est2.jpg", "../../assets/est3.jpg", 'Un lugar para visitar sea para consentirte o mantener por tu higuiene personal'], ["Restaurante", "../../assets/rest1.jpg", "../../assets/rest2.jpg", "../../assets/rest3.jpg", 'Disfruta de unas buenas hamburguesas, puedes elegir de un amplio catálogo de sabores'], ["Mecánica", "../../assets/meca1.jpg", "../../assets/meca2.jpg", "../../assets/meca3.jpg", 'Una opcion de muchas para arreglar o dar mantenimiento a tu auto, un taller que ofrece calidad y servicio'], ["Mini Market", "../../assets/tienda1.jpg", "../../assets/tienda2.jpg", "../../assets/tienda3.jpg", 'El mini Market tiene todo lo que puedes necesitar para tu hogar incluyendo papelería']];

  constructor() {
  }

  ngOnInit(): void {

  }



}
