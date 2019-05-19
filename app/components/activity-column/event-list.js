import Component from '@ember/component';
import TableCommon from '../../mixins/table-common';
import Ember from 'ember';

export default Component.extend(TableCommon,{
  modelType:'event',

  // contentObserver: Ember.observer('table.rows.[]', 'isLoading', function(){
  //   if (this.get('page') == 1 && this.get('table.rows.length') && !this.get('isCountLoading')) {
  //     this.set('table.rows.firstObject.selected', true)
  //     return this.set('selectedNotification', this.get('table.rows.firstObject.content'))
  //   } else {
  //     return this.setFlags();
  //   }
  // }),

  // setFlags: function(){
  //   Ember.run.schedule('actions', () => {
  //     this.set('emptyNotification', this.get('table.isEmpty'))
  //     this.set('isTableLoading', this.get('isLoading'))
  //     if(this.get('table.isEmpty')) {
  //       this.set('selectedNotification', null)
  //     }
  //   })
  // }.observes('table.isEmpty', 'isCountLoading', 'isLoading'),

  columns: Ember.computed(function() {
    return [
      {
        cellComponent: 'events/event-card',
        sortable: false,
        ellipsis: this.get('ellipsis'),
        cellClassNames:['padding-sm-left padding-vs-right'],
      },
    ];
  })
});
