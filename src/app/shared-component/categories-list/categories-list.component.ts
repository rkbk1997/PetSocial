import { Component, OnInit } from '@angular/core';
import { UserService } from '../.././services/userservices/user.service';
@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent implements OnInit {
  catedata;
  constructor(private userservice: UserService) { }

  ngOnInit(): void {
    this.userservice.addcate()
    .subscribe(
      res => {
        console.log(res);
        this.catedata = res ;
      },
    );
  }

}
