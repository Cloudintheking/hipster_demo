import axios from 'axios';

import buildPaginationQueryOpts from '@/shared/sort/sorts';

import { IOrderItem } from '@/shared/model/order-item.model';

const baseApiUrl = 'api/order-items';

export default class OrderItemService {
  public find(id): Promise<IOrderItem> {
    return new Promise<IOrderItem>(resolve => {
      axios.get(`${baseApiUrl}/${id}`).then(function(res) {
        resolve(res.data);
      });
    });
  }

  public retrieve(paginationQuery?: any): Promise<any> {
    return new Promise<any>(resolve => {
      axios.get(baseApiUrl + `?${buildPaginationQueryOpts(paginationQuery)}`).then(function(res) {
        resolve(res);
      });
    });
  }

  public delete(id): Promise<any> {
    return new Promise<any>(resolve => {
      axios.delete(`${baseApiUrl}/${id}`).then(function(res) {
        resolve(res);
      });
    });
  }

  public create(entity): Promise<IOrderItem> {
    return new Promise<IOrderItem>(resolve => {
      axios.post(`${baseApiUrl}`, entity).then(function(res) {
        resolve(res.data);
      });
    });
  }

  public update(entity): Promise<IOrderItem> {
    return new Promise<IOrderItem>(resolve => {
      axios.put(`${baseApiUrl}`, entity).then(function(res) {
        resolve(res.data);
      });
    });
  }
}
