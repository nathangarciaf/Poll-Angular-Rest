import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PollService } from '../services/poll.service';

@Component({
  selector: 'app-question-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent {
  items: any[] = [];

  constructor(private pollService: PollService) { }

  ngOnInit(): void {
    this.pollService.getQuestions().subscribe(data => {
      this.items = data;
    });
  }
}
