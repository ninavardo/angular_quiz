import { Component } from '@angular/core';
import { Orders } from './orders/orders';

@Component({
  selector: 'app-root',
  imports: [Orders],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
