const ListData: Data[] = [];
export class Data {
  url: string;
  hatePercentage:number
  date: string;
  constructor(data: Data) {
    this.url = data.url;
    this.hatePercentage= data.hatePercentage
    this.date = data.date;
  }
}
export class urlData {
  url: string;
  type:string
  constructor(urldata: urlData) {
    this.url = urldata.url;
    this.type = urldata.type;
  }
}