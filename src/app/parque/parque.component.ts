import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';

@Component({
  selector: 'app-parque',
  templateUrl: './parque.component.html',
  styleUrls: ['./parque.component.css']
})
export class ParqueComponent implements OnInit {

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
      const uluru = { lat: -0.269416, lng: -78.469254 };
      //The map, centered at Uluru
      const map = new google.maps.Map(
        document.getElementById("map") as HTMLElement,
        {
          zoom: 16,
          center: uluru,
        }
      );

      //  The marker, positioned at Uluru
      const marker = new google.maps.Marker({
        position: uluru,
        map: map,
        
        title: "Parque Metropolitano de la Armenia"
      });

    });

  }


}
