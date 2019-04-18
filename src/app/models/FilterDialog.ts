export class FilterDialogFormValues {
  constructor(

  public departureHourLessThan?: string,
  public departureHourMoreThan?: string,
  public departureMinuteLessThan?: string,
  public departureMinuteMoreThan?: string,
  public priceLessThan?: number,
  public priceMoreThan?: number

  ) { }

  public getNumericalTimeLessThan() {
    const str = this.departureHourLessThan + this.departureMinuteLessThan;
    return Number(str);
  }

  public getNumericalTimeMoreThan() {
    const str = this.departureHourMoreThan + this.departureMinuteMoreThan;
    return Number(str);
  }
}
