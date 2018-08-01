import { Component, OnInit } from '@angular/core';
import { ParentsService } from '../../services/parents/parents.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-parents',
  templateUrl: './parents.component.html',
  styleUrls: ['./parents.component.css']
})
export class ParentsComponent implements OnInit {

  parents: User[];

  constructor(private parentsService: ParentsService) { }

  getParents(): void {
    this.parentsService.getParents()
      .subscribe(parents => this.parents = parents);
  }

  delete(parent: User): void {
    this.parents = this.parents.filter(h => h !== parent);
    this.parentsService.deleteParent(parent).subscribe();
  }

  ngOnInit() {
    this.getParents();
  }

}
