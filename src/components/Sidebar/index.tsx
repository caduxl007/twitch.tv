import React from 'react';
import { BiLogOut } from 'react-icons/bi';
import { Icon } from '../Icon';
import { Channel } from './Channel';

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

        <Channel />
        <Channel />
        <Channel isOffline />
        <Channel isOffline />
      </div>

      <div>
        <header>
          <h2>CANAIS RECOMENDADOS</h2>
        </header>

        <Channel />
        <Channel />
        <Channel isOffline />
        <Channel isOffline />
      </div>
    </S.Container>
  );
}
