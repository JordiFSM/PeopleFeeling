import { Component, OnInit, ViewChild, Input, Inject } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Person } from '../../models';
import { People } from '../../data';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-people-table',
  standalone: true,
  imports: [MatPaginatorModule, MatTableModule, MatFormFieldModule, MatInputModule, MatSortModule, MatCheckboxModule, FormsModule],
  templateUrl: './people-table.component.html',
  styleUrls: ['./people-table.component.scss']
})
export class PeopleTableComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'category', 'company', 'levelOfHappiness', 'check'];
  dataSource: MatTableDataSource<Person>;
  people = People;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) set matSort(sort: MatSort) {
    this.dataSource.sort = sort;
  }

  constructor() {

    this.dataSource = new MatTableDataSource(People);
  }



  updateCheckValue(checked: boolean, row: any) {
    row.check = checked ? 'yes' : 'no';
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnInit() {}
}