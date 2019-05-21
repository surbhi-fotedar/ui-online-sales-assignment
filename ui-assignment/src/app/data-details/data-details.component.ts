import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../services/api.service';

import {MatPaginator, MatTableDataSource} from '@angular/material';
import { MdePopoverTrigger } from '@material-extended/mde';

export interface DataDetails {
  total: number;
  actions: any;
}

@Component({
  selector: 'app-data-details',
  templateUrl: './data-details.component.html',
  styleUrls: ['./data-details.component.scss']
})
export class DataDetailsComponent implements OnInit {

  displayedColumns: string[] = ['creationDate', 'lastUpdate', 'type', 'status', 'message', 'detailedMessage'];
  tableData: any;
  dataSource: MatTableDataSource<any>;

  @ViewChild('scheduledOrdersPaginator') paginator: MatPaginator;
  @ViewChild(MdePopoverTrigger) trigger: MdePopoverTrigger;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getData();
  }
  getData(): void {
    this.apiService.getData()
      .subscribe((response) => {
        this.tableData = response;
        this.dataSource = this.tableData.actions;
        this.dataSource.paginator = this.paginator;
        console.log(this.dataSource);
      }, (error) => {
        console.error('Unable to get Data: ', error);
      });

  }
}
