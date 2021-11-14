import { ReactNode } from 'react';
import Switch from 'react-switch';

import * as S from './styles';

interface ProfileNavProps {
  title: string;
  children: ReactNode;
  checked?: boolean;
  handleSwitch?: () => void;
}

export function ProfileNav({
  title,
  children,
  checked = false,
  handleSwitch,
}: ProfileNavProps) {
  return (
    <S.Container>
      {children}
      <p>{title}</p>

      {handleSwitch && <Switch checked={checked} onChange={handleSwitch} />}
    </S.Container>
  );
}
