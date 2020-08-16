import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nse',
  templateUrl: './nse.component.html',
  styleUrls: ['./nse.component.css']
})
export class NseComponent implements OnInit {
  public dates=[];
  public high = [];
  public low=[];
  public open=[];
  public close=[];
  public n : number;
  public p : number;
  public maxn : number;
  public minn : number;
 

  constructor() { }

  async ngOnInit() {
  
    // const response = await fetch('testdata.csv');
    const response = await fetch('assets/ExcelFiles/NSE (Nifty).csv');
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


