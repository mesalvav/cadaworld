export class PostResultObject {
  constructor(
    public destination: string,
    public origin: string,
    public tripType: string,
    public departureDate: Date,
    public fareClass: string,
    public routes: RoutesObject[],

    public returnDate?: Date,

  ) {}
}

export class RoutesObject {
  constructor(
    public departureTime: string,
    public arrivalTime: string,
    public priceUSD
  ) {}
}
