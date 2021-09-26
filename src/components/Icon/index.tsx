import { ReactNode } from 'react';

import * as S from './styles';

type IconProps = {
  children: ReactNode;
};

export function Icon({ children }: IconProps) {
  return <S.Container>{children}</S.Container>;
}
