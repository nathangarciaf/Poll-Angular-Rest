import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { QuestionListComponent } from "./question-list/question-list.component";
import { ChoiceListComponent } from "./choice-list/choice-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, ChoiceListComponent, QuestionListComponent]
})

export class AppComponent {
  title = 'frontend';
} 