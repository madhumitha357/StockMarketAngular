import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bse',
  templateUrl: './bse.component.html',
  styleUrls: ['./bse.component.css']
})
export class BseComponent implements OnInit {
  public dates=[];
  public high=[];
  public low=[];
  public open=[];
  public close=[];
  public n : number;
  public p : number;
  constructor() { }

  async ngOnInit() {
  
    // const response = await fetch('testdata.csv');
    const response = await fetch('assets/ExcelFiles/BSE (Sensex).csv');
    const data = await response.text();
    
    const rows = data.split('\n').slice(1);
    rows.forEach(row => {
      const cols = row.split(',');
      this.dates.push(cols[0]);
      this.open.push(parseFloat(cols[1]));
      this.close.push(parseFloat(cols[4]));

      this.high.push(parseFloat(cols[2]));
      this.low.push(parseFloat(cols[3]));

    });
    console.log(open);
    this.n = (this.open[this.open.length -1] + this.close[this.close.length - 2])/2;
    this.p = this.open[this.open.length -1] - this.close[this.close.length - 2];
  }
}
