/* @flow */
import template from './item.component.pug'
import './item.component.styl'
import { Item } from './item.model'

class Controller {

  item: Item;
  value: Item;
  change: Function;
  watchers: watcher[];

  /* @ngInject */
  constructor($scope) {
    this.$scope = $scope;
    this.watchers = [];
  }

  $onInit(): void {
    this.value = this.item.Percent;
    this.watchers.push(this.$scope.$watch(() => {
      return this.item.Percent
    }, (value) => {
      this.value = value;
    }))
  }

  onChange(value): void {
    if (typeof value === 'number') {
      this.change(Object.assign({}, this.item, { Percent: value }), this.item)
    }
  }

  $onDestroy(): void {
    this.watchers.map(watcher => watcher());
  }

}

export const item = {
  bindings: {
    change: '<',
    item: '<'
  },
  template: template(),
  controller: Controller
};