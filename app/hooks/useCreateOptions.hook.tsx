import {IInitialVariants, IOption} from '~/types/types';

export const useCreateOptions = (variants: any) => {
  let allOptions: IOption[] = [];

  variants.map((item: any) => {
    item.selectedOptions.map((option: any) => {
      if (option.name === 'Color') {
        let variant = {
          index: item.id,
          image: item.image!.url,
          option: option.value,
        };
        allOptions.push(variant);
      }
    });
  });

  let uniqueOptions = [
    ...new Map(allOptions.map((item) => [item['option'], item])).values(),
  ];

  uniqueOptions.forEach(function (row, index) {
    row.id = index;
  });

  return {uniqueOptions};
};
