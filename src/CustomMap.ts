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
}
