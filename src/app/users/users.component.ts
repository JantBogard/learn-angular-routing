import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

interface User {
  id: number;
  name: string;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public users: User[] = [
    {
      id: 1,
      name: 'Jean'
    },
    {
      id: 2,
      name: 'Julie'
    },
    {
      id: 3,
      name: 'Nicolas'
    }
  ];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  public redirection(user: User): void {
    this.router.navigate([user.id], {
      relativeTo: this.activatedRoute,
      queryParams: {
        name: user.name
      },
      fragment: 'foo'
    });
  }

}
