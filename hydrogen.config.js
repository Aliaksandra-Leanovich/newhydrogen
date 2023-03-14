import {defineConfig} from '@shopify/hydrogen/config';

export default defineConfig({
  shopify: {
    /* The domain of your Shopify store */
    storeDomain: 'softteco-test.myshopify.com',
    /* Your app's Storefront API access token */
    storefrontToken: '18593954fee8c378256870fc974490d0',
    /* The Storefront API version that your app uses */
    storefrontApiVersion: '2022-07',
  },
});
