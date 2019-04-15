export class Rutafave {
  constructor(
    public destination: string,
    public origin: string,
    public fareclass: string,
    public tripType: string,
    public departureDate: Date,
    public returnDate: Date,
    public routeCoverImage: string,
    public price?: number

  ) {}
}
