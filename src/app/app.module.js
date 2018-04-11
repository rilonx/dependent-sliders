/* @flow */
import './shared/shared.module'
import appComponent from './app.component'

angular.module('app', [
  'ngMockE2E',
  'ngMaterial',
  'ngMessages',
  'shared'
])
  .component('appRoot', appComponent)
  .run(function($httpBackend) {
    const items = [
      {
        Name: 'Item1',
        Percent: 15
      },
      {
        Name: 'Item2',
        Percent: 30
      },
      {
        Name: 'Item3',
        Percent: 5
      },
      {
        Name: 'Item4',
        Percent: 40
      },
      {
        Name: 'Item5',
        Percent: 10
      }
    ];
    $httpBackend.whenGET('/items').respond(items);
  });
