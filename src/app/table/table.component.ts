import { Component, OnInit } from '@angular/core';
import {  UsersService } from '../service/users.service';
import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  users$: Observable<User[]>;
  filteredHeaders: any = Object.keys;
  
  tableHeaders: any;

  constructor(private usersService: UsersService) { }

  ngOnInit() {

    // for (let i = 0; i < this.testApi.length; i++) {
    //   this.usersData.push(this.testApi[i])
    // }
    this.users$ = this.usersService.getUsers();
      // this.dataBackup = this.tableData;
      // const tableHeaders = Object.keys(this.usersData[0]);

      // tableHeaders.forEach(element => {
      //   this.filteredHeaders.push({ 'name': element, "displayName": element.charAt(0).toUpperCase() + element.slice(1) })
      // });
    }
  }
