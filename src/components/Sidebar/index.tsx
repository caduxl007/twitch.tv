import { BiLogOut } from 'react-icons/bi';
import { Icon } from '../Icon';

import * as S from './styles';

export function Sidebar() {
  return (
    <S.Container>
      <div>
        <header>
          <h2>CANAIS SEGUIDOS</h2>
          <Icon>
            <BiLogOut size={20} />
          </Icon>
        </header>
      </div>
    </S.Container>
  );
}
