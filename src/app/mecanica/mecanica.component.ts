import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';

@Component({
  selector: 'app-mecanica',
  templateUrl: './mecanica.component.html',
  styleUrls: ['./mecanica.component.css']
})
export class MecanicaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let loader = new Loader({
      apiKey: 'AIzaSyBSMELJR5UGDDGENRuzVbDFMv1MtBB32IE'
    })
    let marker;
    loader.load().then(() => {
      // The location of Uluru
      // The map, centered at Uluru
      // The location of Uluru
       
      const uluru = { lat: -0.26445732742826944, lng: -78.48063216306738 };
      //The map, centered at Uluru
      const map = new google.maps.Map(
        document.getElementById("map") as HTMLElement,
        {
          zoom: 18,
          center: uluru,
        }
      );

      //  The marker, positioned at Uluru
      const marker = new google.maps.Marker({
        position: uluru,
        map: map,
        
        title: "Taller Multimarca"
      });

    });

  }

}
