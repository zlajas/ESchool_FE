import { Component, OnInit, Input } from '@angular/core';
import { Mark } from '../../models/mark';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import { MarksService } from '../../services/marks/marks.service';

@Component({
  selector: 'app-mark-details',
  templateUrl: './mark-details.component.html',
  styleUrls: ['./mark-details.component.css']
})
export class MarkDetailsComponent implements OnInit {

  @Input() mark: Mark;
  constructor(
    private route: ActivatedRoute,
    private markService: MarksService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getMark();
  }

  getMark(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.markService.getMark(id)
      .subscribe(m => this.mark = m);
  }
  goBack(): void {
    this.location.back();
  }
  save(): void {
    this.markService.updateMark(this.mark)
    .subscribe(() => this.goBack());
  }

  delete(mark: Mark): void {
    this.markService.deleteMark(mark).subscribe(() => this.goBack());
  }


}
