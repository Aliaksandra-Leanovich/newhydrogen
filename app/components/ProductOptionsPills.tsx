import clsx from 'clsx';
import {useSliderIdContext} from '~/context/SliderIdContext';
import {IOption} from '~/types/types';
import {ProductOptionLink} from './ProductOptionLink';

export default function ProductOptionsPills({
  variants,
  searchParamsWithDefaults,
}: {
  variants: IOption[];
  searchParamsWithDefaults: URLSearchParams;
}) {
  const {setSliderId} = useSliderIdContext();

  const handleId = (id: number) => {
    setSliderId(id);
  };

  return (
    <div className="flex gap-2 mb-6">
      {variants.map((variant: IOption) => {
        let id = 0;
        if (variant.id) {
          id = variant.id;
        }
        return (
          <ProductOptionLink
            key={variant.index}
            optionName={variant.option}
            optionValue={variant.option}
            searchParams={searchParamsWithDefaults}
          >
            <div
              className={clsx(
                'flex items-center justify-center rounded-full h-8 w-8 py-1 cursor-pointer transition-all duration-200',
              )}
            >
              <button
                onClick={() => handleId(id)}
                className="rounded-full h-6 w-6"
              >
                <img
                  src={variant.image}
                  alt={variant.option}
                  className="rounded-full h-6 w-6 "
                />
                <span className="sr-only">{variant.option}</span>
              </button>
            </div>
          </ProductOptionLink>
        );
      })}
    </div>
  );
}
