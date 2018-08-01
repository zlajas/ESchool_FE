import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../models/user';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ParentsService } from '../../services/parents/parents.service';

@Component({
  selector: 'app-parent-details',
  templateUrl: './parent-details.component.html',
  styleUrls: ['./parent-details.component.css']
})
export class ParentDetailsComponent implements OnInit {

  @Input() parent: User;
  constructor(
    private route: ActivatedRoute,
    private parentService: ParentsService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getParent();
  }

  getParent(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.parentService.getParent(id)
      .subscribe(parent => this.parent = parent);
  }
  goBack(): void {
    this.location.back();
  }
  save(): void {
    this.parentService.updateParent(this.parent)
      .subscribe(() => this.goBack());
  }


}
