export class PostResultObject {
  constructor(
    public destination: string,
    public origin: string,
    public tripType: string,
    public departureDate: string,
    public fareClass: string,
    public routes: RoutesObject[],

    public returnDate?: string

  ) {}
}

export class RoutesObject {
  constructor(
    public departureTime: string,
    public arrivalTime: string,
    public priceUSD: number
  ) {}
}



export class FlattenPostResultObject {

  constructor(
    public destination: string,
    public origin: string,
    public tripType: string,

    public fareClass: string,
    public departureDate?: string,
    public returnDate?: string,

    public routes?: RoutesObject[],
    public departureTime?: string,
    public arrivalTime?: string,
    public priceUSD?: number

  ) {}
}


