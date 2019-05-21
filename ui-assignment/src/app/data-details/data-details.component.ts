import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { ApiService } from '../services/api.service';

import { MatPaginator, MatTableDataSource } from '@angular/material';

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
  dataSource: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private apiService: ApiService, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.getData();
  }
  getData(): void {
    this.apiService.getData()
      .subscribe((response) => {
        this.tableData = response;
        this.dataSource = new MatTableDataSource(this.tableData.actions);
        this.cdr.detectChanges();
        this.dataSource.paginator = this.paginator;
      }, (error) => {
        console.error('Unable to get Data: ', error);
      });

  }
}
