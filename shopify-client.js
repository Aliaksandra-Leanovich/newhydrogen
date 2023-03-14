import {createStorefrontClient} from '@shopify/hydrogen-react';

const client = createStorefrontClient({
  privateStorefrontToken: '18593954fee8c378256870fc974490d0',
  storeDomain: '18593954fee8c378256870fc974490d0',
  storefrontApiVersion: '2022-07',
});

export const getStorefrontApiUrl = client.getStorefrontApiUrl;
export const getPrivateTokenHeaders = client.getPrivateTokenHeaders;
