import faker from "faker";
import { Mappable } from './CustomMap';

// optional: add 'implements' clause to help us with error handling
// error will show up if User does not satisfy Mappable interface
export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `<h3>Username: ${this.name}</h3>`;
  }
}
