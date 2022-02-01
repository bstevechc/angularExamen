import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';

@Component({
  selector: 'app-minimarket',
  templateUrl: './minimarket.component.html',
  styleUrls: ['./minimarket.component.css']
})
export class MinimarketComponent implements OnInit {

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
       
      const uluru = { lat: -0.26616386557144517, lng: -78.48000793611443 };
      //The map, centered at Uluru
      const map = new google.maps.Map(
        document.getElementById("map") as HTMLElement,
        {
          zoom: 20,
          center: uluru,
        }
      );

      //  The marker, positioned at Uluru
      const marker = new google.maps.Marker({
        position: uluru,
        map: map,
        
        title: "Mini Market Wil. F"
      });

    });

  }

}
