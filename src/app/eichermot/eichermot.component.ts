import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eichermot',
  templateUrl: './eichermot.component.html',
  styleUrls: ['./eichermot.component.css']
})
export class EichermotComponent implements OnInit {

  
  constructor() { }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType = 'line';
  public barChartLegend = true;
  public dates=[];
  public high=[];
  public low=[];
  public open=[];
  public close=[];
  public bardata=[{data :this.high,label :'High'},{data :this.low,label :'low'},{data :this.open,label :'open'},{data :this.close,label :'close'}];
  

  async ngOnInit() {
  
    // const response = await fetch('testdata.csv');
    const response = await fetch('assets/ExcelFiles/EICHERMOT.NS.csv');
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
    console.log(open)
    
  }

}
