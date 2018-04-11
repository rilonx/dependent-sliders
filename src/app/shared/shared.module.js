/* @flow */
import { widget, item, result, widgetService } from './'

angular.module('shared', [])
  .component('widget', widget)
  .component('item', item)
  .component('result', result)
  .factory('widgetService', widgetService);
