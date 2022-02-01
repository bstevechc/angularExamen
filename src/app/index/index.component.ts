import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {


  constructor() { }



  ngOnInit(): void {
    let loader = new Loader({
      apiKey: 'AIzaSyBSMELJR5UGDDGENRuzVbDFMv1MtBB32IE'
    })
    let marker;
    // loader.load().then(() => {
    //   // The location of Uluru

    //   const myLatLng = {
    //     lat: -34.397,
    //     lng: 150.644
    //   };
    //   // The map, centered at Uluru
    //   // The location of Uluru
    //   const uluru = { lat: -25.344, lng: 131.036 };
    //   // The map, centered at Uluru
    //   const map = new google.maps.Map(
    //     document.getElementById("map") as HTMLElement,
    //     {
    //       zoom: 4,
    //       center: uluru,
    //     }
    //   );

    //   // The marker, positioned at Uluru
    //   const marker = new google.maps.Marker({
    //     position: uluru,
    //     map: map,
    //   });

    // });

  }



}
