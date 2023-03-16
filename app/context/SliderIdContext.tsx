import {createContext, useContext, useState} from 'react';
import {ISliderIdContext, ISliderIdContextProviderProps} from './types';

const SliderIDContext = createContext<ISliderIdContext>({
  sliderId: 0,
  setSliderId: () => {},
});

const useSliderIdContextValue = () => {
  const [sliderIdContext, setSliderIdContext] = useState<ISliderIdContext>(
    () => ({
      sliderId: 0,
      setSliderId: (newId) => {
        setSliderIdContext((ctx) => ({...ctx, sliderId: newId}));
      },
    }),
  );

  return sliderIdContext;
};

export const useSliderIdContext = () =>
  useContext<ISliderIdContext>(SliderIDContext);

export const SliderIdContextProvider = ({
  children,
}: ISliderIdContextProviderProps) => {
  return (
    <SliderIDContext.Provider value={useSliderIdContextValue()}>
      {children}
    </SliderIDContext.Provider>
  );
};
