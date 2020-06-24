// instructions to every other class on how they can be an argument to 'addMarker'
// must satisfy the property location as below
export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
}

// create a custom map class so that the google.maps.Map with all its functions is not exposed/cannot be accessed outside of this custom class
// prevent other devs from calling functions that could break our app
export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });

    marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent(),
      });

      infoWindow.open(this.googleMap, marker);
    });
  }
}
