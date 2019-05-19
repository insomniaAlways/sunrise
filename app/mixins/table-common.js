import Mixin from '@ember/object/mixin';
import { inject as service } from '@ember/service'
import Ember from 'ember';
import Table from 'ember-light-table';
import _ from "lodash";

export default Mixin.create({
  store: service(),
  page: 1,
  pageLoadRow:new Array(15),
  pageSize: 20,
  s: null,
  sort: null,
  isLoading: false,
  isCountLoading: true,
  canLoadMore: false,
  enableSync: true,

  model: Ember.A([]),
  columns: Ember.A([]),
  table: null,
  modelType:null,

  init: function() {
    this._super(...arguments)
    let table = new Table(this.get('columns'), this.get('model') , { enableSync: this.get('enableSync') });
    let sortColumn = table.get('allColumns').findBy('valuePath', this.get('sort'));

    // Setup initial sort column
    if (sortColumn) {
      sortColumn.set('sorted', true);
    }
    this.set('table', table);
    this.get('model').clear();
    this.get('table').removeRows(this.get('table.rows'));
  },

  fetchRecords: function(page) {
    let query = _.omitBy(this.getProperties(['page', 'pageSize']), _.isNil);
    query.page = page || query.page ;
    this.set('isLoading', true);
    this.get('store')
      .query(this.get('modelType'), query)
      .then(records => {
        if(this.get('isCountLoading')) {
          this.set('isCountLoading', false);
        }
        this.set('totalCount', records.get('meta.total'));
        if(!Ember.isEmpty(records)){
          this.get('model').pushObjects(records.toArray());
        }
        this.set('canLoadMore', this.get('model.length') < records.get('meta.total'));
      })
      .finally(() => {
        if ( !(this.get('isDestroyed') || this.get('isDestroying')) ) {
         this.set('isLoading', false);
        }
      });
  },

  // eslint-disable-next-line ember/no-function-prototype-extensions
  search: function() {
    this.get('model').clear();
    this.set('page', 1);
    this.fetchRecords(1);
  }.on('init'),

  actions: {
    onScrolledToBottom() {
      if (this.get('canLoadMore') && !this.get('isLoading')){
        this.incrementProperty('page');
        this.fetchRecords();
      }
    },

    onColumnClick() {
      let sort = [];
      this.get('table.sortedColumns').forEach(c => {
        sort.push((c.ascending ? '': '-') +c.get('valuePath'));
      });
      this.setProperties({
        sort: sort.join(','),
        page: 1
      });
      this.get('model').clear();
      return this.fetchRecords();
    },

    onDoubleClick(column){
      column.set('sorted',false);
    }
  }
});
