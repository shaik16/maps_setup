import { Mappable } from './CustomMap'
import { faker } from '@faker-js/faker'

export class User implements Mappable {
  name: string
  location: {
    lat: number
    lng: number
  }
  constructor() {
    this.name = faker.name.firstName()
    this.location = {
      lng: +faker.address.longitude(),
      lat: +faker.address.latitude(),
    }
  }

  markerContent(): string {
    return `User Name: ${this.name}`
  }
}
