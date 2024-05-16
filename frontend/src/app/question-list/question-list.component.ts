import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PollService } from '../services/poll.service';
import { Router, RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-question-list',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink],
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent {
  items: any[] = [];

  constructor(private pollService: PollService, private router: Router) { }

  ngOnInit(): void {
    this.pollService.getQuestions().subscribe(data => {
      this.items = data;
    });
  }
}
