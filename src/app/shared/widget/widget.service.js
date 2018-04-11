/* @flow */
import { Item } from './item/item.model'

/* @ngInject */
export function widgetService($http) {

  const round = (value: number): number => {
    return +value.toFixed(2)
  };

  const findIndexItemForCalc = (curPercent: number, prevPercent: number, itemIndex: number, list: Item[]): number => {
    let findIndex = itemIndex !== 0 ? 0 : 1;
    list.map((item: Item, i: number) => {
      if (i === itemIndex)
        return;
      if (curPercent > prevPercent) {
        if (item.Percent > list[findIndex].Percent) {
          findIndex = i;
        }
      }
      else if (curPercent < prevPercent) {
        if (item.Percent < list[findIndex].Percent) {
          findIndex = i;
        }
      }
    });
    return findIndex;
  };

  return {
    getItems(): Promise {
      return $http.get('/items').then(data => this.parsePercents(data.data))
    },

    calcPercents(curItem: Item, prevItem: Item, list: Item[]): Item[] {
      const _list = list.filter((item: Item) => item);
      const itemIndex = list.indexOf(prevItem);

      let complete = false;

      for (;!complete;) {
        const findIndex = findIndexItemForCalc(curItem.Percent, prevItem.Percent, itemIndex, list);
        const forFill = _list[findIndex].Percent + (prevItem.Percent - curItem.Percent);

        if (forFill < 0) {
          _list[findIndex].Percent = 0;
          _list[itemIndex].Percent = round(_list[itemIndex].Percent - ((prevItem.Percent - curItem.Percent) - forFill))
        }
        else {
          _list[findIndex].Percent = round(forFill);
          _list[itemIndex].Percent = round(_list[itemIndex].Percent - (prevItem.Percent - curItem.Percent));
          complete = true;
        }
      }
      return _list;
    },

    parsePercents(list: Item[]): Item[] {
      let score = 0;

      const _list = list.reduce((resultList: Item[], item: Item) => {
        score += item.Percent;
        resultList.push(item);
        return resultList;
      }, []);

      if (score !== 100) {
        _list.map((item: Item, i: number) => {
          item.Percent = i === 0 ? 100 : 0;
        });
      }
      return list;
    }
  }
}