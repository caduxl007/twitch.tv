import { FaSearch, FaEllipsisV } from 'react-icons/fa';
import { AiOutlineInbox } from 'react-icons/ai';
import { CgCrown } from 'react-icons/cg';
import { BsChatSquare } from 'react-icons/bs';

import { Icon } from '../Icon';

import * as S from './styles';
import { Profile } from '../Profile';

export function Header() {
  return (
    <S.Container>
      <div>
        <div></div>

        <S.Nav>
          <ul>
            <li>
              <a href="">Seguindo</a>
            </li>

            <li>
              <a href="">Procurar</a>
            </li>

            <Icon>
              <FaEllipsisV />
            </Icon>
          </ul>
        </S.Nav>
      </div>

      <S.Input>
        <input type="text" placeholder="Buscar" />
        <div>
          <FaSearch />
        </div>
      </S.Input>

      <S.ContentIcons>
        <Icon>
          <CgCrown size={25} />
        </Icon>
        <Icon>
          <AiOutlineInbox size={20} />
        </Icon>
        <Icon>
          <BsChatSquare />
        </Icon>

        <Profile />
      </S.ContentIcons>
    </S.Container>
  );
}
