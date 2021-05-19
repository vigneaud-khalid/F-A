import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-feature-card',
  templateUrl: './feature-card.component.html',
  styleUrls: ['./feature-card.component.css']
})
export class FeatureCardComponent implements OnInit {

  // @Input() : permet a un composant dumb de recuperer des
  // donnees de son composant smart (=> home-features)
  // Elles devront être injectées par le composant parent.

  @Input() description !: string;
  @Input() icon!: string;
  @Input() title!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
