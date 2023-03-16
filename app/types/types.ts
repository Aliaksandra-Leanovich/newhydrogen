export interface IOption {
  option: string;
  index: string;
  image: string;
  id?: number;
}

export interface IVariants {
  variants: IOption[];
}

export interface ISelectedOption {
  name: string;
  value: string;
}

export interface IInitialVariants {
  availableForSale: boolean;
  compareAtPrice: {amount: string; currencyCode: string};
  id: string;
  image: {
    id: string;
    url: string;
    altText: null;
    width: number;
    height: number;
  };
  price: {amount: string; currencyCode: string};
  product: {title: string; handle: 'string'};
  selectedOptions: ISelectedOption[];
  sku: string;
  title: string;
  unitPrice: null;
}
