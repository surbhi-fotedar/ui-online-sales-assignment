import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from './../services/api.service';

@Component({
  selector: 'app-data-summary',
  templateUrl: './data-summary.component.html',
  styleUrls: ['./data-summary.component.scss']
})
export class DataSummaryComponent implements OnInit {

  tableSource: any;
  dataSource = [
    { statusName: 'UNSEEN' },
    { statusName: 'ACTED' },
    { statusName: 'REJECTED' },
    { statusName: 'FAIL_TO_ACT' }
  ];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getData();
  }

  getData(): void {
    this.apiService.getData()
      .subscribe((response) => {
        this.tableSource = response;
      }, (error) => {
        console.error('Unable to get Data: ', error);
      });

  }
}
