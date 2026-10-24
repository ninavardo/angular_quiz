import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  orders = [
    { name: 'Robert Fox', initial: 'R', color: '#d7a98a', status: 'High', billable: '120 hrs', efficiency: '95%' },
    { name: 'Darlene Robertson', initial: 'D', color: '#6d5c53', status: 'Low', billable: '210 hrs', efficiency: '50%' },
    { name: 'Theresa Webb', initial: 'T', color: '#c9a27a', status: 'Medium', billable: '85 hrs', efficiency: '75%' },
    { name: 'Kristin Watson', initial: 'K', color: '#a67c62', status: 'Medium', billable: '100 hrs', efficiency: '80%' },
    { name: 'Cody Fisher', initial: 'C', color: '#5d7ea3', status: 'High', billable: '350 hrs', efficiency: '98%' },
    { name: 'Jane Cooper', initial: 'J', color: '#8d6b63', status: 'Low', billable: '50 hrs', efficiency: '60%' },
    { name: 'Jerome Bell', initial: 'J', color: '#7a675c', status: 'Low', billable: '75 hrs', efficiency: '55%' },
    { name: 'Jenny Wilson', initial: 'J', color: '#9a7468', status: 'High', billable: '190 hrs', efficiency: '80%' },
    { name: 'Darrell Steward', initial: 'D', color: '#6e7c8a', status: 'Medium', billable: '110 hrs', efficiency: '70%' },
    { name: 'Savannah Nguyen', initial: 'S', color: '#b08a6a', status: 'Low', billable: '90 hrs', efficiency: '60%' }
  ];

  totalResults = 250;

  getOrders() {
    return this.orders;
  }

  getTotal() {
    return this.totalResults;
  }
}
