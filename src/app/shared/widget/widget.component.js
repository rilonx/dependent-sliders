/* @flow */
import template from './widget.component.pug'
import './widget.component.styl'
import { Item } from './item/item.model'

class Controller {

  widgetService: Object;
  list: Item[];

  /* @ngInject */
  constructor(widgetService) {
    this.widgetService = widgetService;
  }

  $onInit(): void {
    this.onChange = this.onChange.bind(this);
    this.loadItems();
  }

  onChange(curItem: Item, prevItem: Item): void {
    if (this.list.length === 0) {
      return;
    }
    if (this.list.length === 1) {
      this.list = this.list.map((item: Item) => item = curItem)
    }
    else {
      this.list = this.widgetService.calcPercents(curItem, prevItem, this.list)
    }
  }

  loadItems(): Item[] {
    this.widgetService.getItems().then(items => {
      this.items = items;
      this.select(this.items.length);
    })
  }

  select(count: number): Item[] {
    this.list = this.widgetService.parsePercents(this.items.filter((item, i) => i + 1 <= count));
  }

}

export const widget = {
  bindings: {},
  template: template(),
  controller: Controller,
};