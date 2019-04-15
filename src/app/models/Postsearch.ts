export class PostSearchObject {
  constructor(
    public destination: string,
    public origin: string,
    public departureDate: string,

    public passengerCount: number,

    public returnDate?: string,
    public promoCode?: string
  ) {}
}
