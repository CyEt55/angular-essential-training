import { Component, Input } from "@angular/core";

@Component({
  selector: "mw-category-list",
  template: `
    <span class="label" *ngFor="let category of categories">
      {{ category }}
    </span>
  `,
  styles: [
    `
      span {
        display: inline-block;
        margin: 0 4px 4px 0;
      }
      .label {
        background-color: #999999;
        color: #ffffff;
        border-radius: 4px;
        padding: 2px 6px;
        font-style: italic;
        width: max-content;
      }
    `
  ]
})
export class CategoryListComponent {
  @Input() categories: string[];
}