export class FilterDialogFormValues {
  constructor(
  public departureHourLessThan?: string,
  public departureHourMoreThan?: string,
  public departureMinuteLessThan?: string,
  public departureMinuteMoreThan?: string
  ) { }

  atLeastOneNotNull() {
    return this.departureHourLessThan !== null
            || this.departureHourMoreThan !== null ;
  }
}
