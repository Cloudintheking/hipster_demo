/* tslint:disable max-line-length */
import { shallowMount, createLocalVue, Wrapper } from '@vue/test-utils';
import axios from 'axios';

import * as config from '@/shared/config/config';
import InvoiceDetailComponent from '@/entities/invoice/invoice/invoice-details.vue';
import InvoiceClass from '@/entities/invoice/invoice/invoice-details.component';
import InvoiceService from '@/entities/invoice/invoice/invoice.service';

const localVue = createLocalVue();
const mockedAxios: any = axios;

config.initVueApp(localVue);
const i18n = config.initI18N(localVue);
const store = config.initVueXStore(localVue);
localVue.component('font-awesome-icon', {});
localVue.component('router-link', {});

jest.mock('axios', () => ({
  get: jest.fn()
}));

describe('Component Tests', () => {
  describe('Invoice Management Detail Component', () => {
    let wrapper: Wrapper<InvoiceClass>;
    let comp: InvoiceClass;

    beforeEach(() => {
      mockedAxios.get.mockReset();
      mockedAxios.get.mockReturnValue(Promise.resolve({}));

      wrapper = shallowMount<InvoiceClass>(InvoiceDetailComponent, {
        store,
        i18n,
        localVue,
        provide: { invoiceService: () => new InvoiceService() }
      });
      comp = wrapper.vm;
    });

    describe('OnInit', async () => {
      it('Should call load all on init', async () => {
        // GIVEN
        mockedAxios.get.mockReturnValue(Promise.resolve({ data: { id: 123 } }));

        // WHEN
        comp.retrieveInvoice(123);
        await comp.$nextTick();

        // THEN
        expect(comp.invoice).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
