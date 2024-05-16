import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PollService } from '../services/poll.service';

@Component({
  selector: 'app-choice-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './choice-list.component.html',
  styleUrls: ['./choice-list.component.css']
})
export class ChoiceListComponent {
  items: any[] = [];

  constructor(private pollService: PollService) { }

  ngOnInit(): void {
    this.pollService.getChoices().subscribe(data => {
      this.items = data;
    });
  }
}
