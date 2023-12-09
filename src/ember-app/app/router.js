import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-123-заказ-l');
  this.route('i-i-s-123-заказ-e',
  { path: 'i-i-s-123-заказ-e/:id' });
  this.route('i-i-s-123-заказ-e.new',
  { path: 'i-i-s-123-заказ-e/new' });
  this.route('i-i-s-123-клиент-l');
  this.route('i-i-s-123-клиент-e',
  { path: 'i-i-s-123-клиент-e/:id' });
  this.route('i-i-s-123-клиент-e.new',
  { path: 'i-i-s-123-клиент-e/new' });
  this.route('i-i-s-123-менеджер-l');
  this.route('i-i-s-123-менеджер-e',
  { path: 'i-i-s-123-менеджер-e/:id' });
  this.route('i-i-s-123-менеджер-e.new',
  { path: 'i-i-s-123-менеджер-e/new' });
  this.route('i-i-s-123-поставщик-l');
  this.route('i-i-s-123-поставщик-e',
  { path: 'i-i-s-123-поставщик-e/:id' });
  this.route('i-i-s-123-поставщик-e.new',
  { path: 'i-i-s-123-поставщик-e/new' });
  this.route('i-i-s-123-производитель-l');
  this.route('i-i-s-123-производитель-e',
  { path: 'i-i-s-123-производитель-e/:id' });
  this.route('i-i-s-123-производитель-e.new',
  { path: 'i-i-s-123-производитель-e/new' });
  this.route('i-i-s-123-товар-l');
  this.route('i-i-s-123-товар-e',
  { path: 'i-i-s-123-товар-e/:id' });
  this.route('i-i-s-123-товар-e.new',
  { path: 'i-i-s-123-товар-e/new' });
});

export default Router;
