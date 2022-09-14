export interface Mappable {
  location: {
    lat: number
    lng: number
  }
  markerContent(): string
}

export class CustomMap {
  private googleMap: google.maps.Map
  constructor(divId: string) {
    const mapDiv: HTMLElement = document.getElementById(divId)!
    this.googleMap = new google.maps.Map(mapDiv, {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
      //   mapId: '789df0804f21d168',
    })
  }

  //   below is bad code

  //   addUserMarker(user: User): void {
  //     new google.maps.Marker({
  //       map: this.googleMap,
  //       position: {
  //         lat: user.location.lat,
  //         lng: user.location.lng,
  //       },
  //       label: user.name,
  //     })
  //   }

  //   addCompanyUser(company: Company): void {
  //     new google.maps.Marker({
  //       map: this.googleMap,
  //       position: {
  //         lat: company.location.lat,
  //         lng: company.location.lng,
  //       },
  //       label: company.companyName,
  //     })
  //   }

  addUserMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
      //   label: user.name,
    })
    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent(),
      })
      infoWindow.open(this.googleMap, marker)
    })
  }
}
