import {ReactNode} from 'react';

export interface ISliderIdContextProviderProps {
  children: ReactNode;
}

export interface ISliderIdContext {
  sliderId: number;
  setSliderId: (newBudget: number) => void;
}
