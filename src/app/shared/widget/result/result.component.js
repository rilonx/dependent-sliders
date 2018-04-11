/* @flow */
import template from './result.component.pug'
import './result.component.styl'
import { Item } from '../item/item.model'

class Controller {

  list: Item[];

  /* @ngInject */
  constructor() {

  }

}

export const result = {
  bindings: {
    list: '<'
  },
  template: template(),
  controller: Controller,
};