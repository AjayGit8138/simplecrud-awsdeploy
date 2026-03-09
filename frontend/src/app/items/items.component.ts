import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ItemsService, Item } from '../items.service';

@Component({
  selector: 'app-items',
  imports: [CommonModule, FormsModule],
  templateUrl: './items.component.html',
  styleUrl: './items.component.css'
})
export class ItemsComponent implements OnInit {
  items: Item[] = [];
  newItem: Item = { name: '', description: '' };
  editingItem: Item | null = null;

  constructor(private itemsService: ItemsService) { }

  ngOnInit(): void {
    this.loadItems();
  }

  loadItems(): void {
    this.itemsService.getItems().subscribe(items => this.items = items);
  }

  addItem(): void {
    if (this.newItem.name && this.newItem.description) {
      this.itemsService.createItem(this.newItem).subscribe(item => {
        this.items.push(item);
        this.newItem = { name: '', description: '' };
      });
    }
  }

  editItem(item: Item): void {
    this.editingItem = { ...item };
  }

  updateItem(): void {
    if (this.editingItem && this.editingItem._id) {
      this.itemsService.updateItem(this.editingItem._id, this.editingItem).subscribe(updatedItem => {
        const index = this.items.findIndex(i => i._id === updatedItem._id);
        if (index !== -1) {
          this.items[index] = updatedItem;
        }
        this.editingItem = null;
      });
    }
  }

  cancelEdit(): void {
    this.editingItem = null;
  }

  deleteItem(id: string): void {
    this.itemsService.deleteItem(id).subscribe(() => {
      this.items = this.items.filter(item => item._id !== id);
    });
  }
}
