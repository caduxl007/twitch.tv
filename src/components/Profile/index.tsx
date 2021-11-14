import { useState } from 'react';
import { AiOutlineInbox, AiOutlineControl } from 'react-icons/ai';
import {
  FiUser,
  FiSettings,
  FiStar,
  FiUsers,
  FiGlobe,
  FiMoon,
} from 'react-icons/fi';
import { IoWalletOutline } from 'react-icons/io5';
import { VscSettings } from 'react-icons/vsc';
import { BiLogOut } from 'react-icons/bi';

import { useTheme } from '../../hooks/useTheme';

import { ProfileNav } from './ProfileNav';

import * as S from './styles';

export function Profile() {
  const { toggleTheme, theme } = useTheme();
  const [isVisibleOptionsProfile, setIsVisibleOptionsProfile] = useState(false);

  return (
    <>
      <S.Container>
        <FiUser
          onClick={() => setIsVisibleOptionsProfile(!isVisibleOptionsProfile)}
          color="#fff5fd"
          size={20}
        />

        <div />
      </S.Container>

      {isVisibleOptionsProfile && (
        <S.NavProfile>
          <div>
            <ProfileNav title="Estúdio de Vídeo">
              <VscSettings />
            </ProfileNav>

            <ProfileNav title="Painel de controle do criador">
              <AiOutlineControl size={18} />
            </ProfileNav>
          </div>

          <div>
            <ProfileNav title="Amigos">
              <FiUsers />
            </ProfileNav>

            <ProfileNav title="Inscrições">
              <FiStar />
            </ProfileNav>

            <ProfileNav title="Drops">
              <AiOutlineInbox />
            </ProfileNav>

            <ProfileNav title="Twitch Wallet">
              <IoWalletOutline />
            </ProfileNav>
          </div>

          <div>
            <ProfileNav title="Configurações">
              <FiSettings />
            </ProfileNav>

            <ProfileNav title="Idioma">
              <FiGlobe />
            </ProfileNav>

            <ProfileNav
              title="Tema escuro"
              checked={theme.title === 'light'}
              handleSwitch={toggleTheme}
            >
              <FiMoon />
            </ProfileNav>
          </div>

          <div>
            <ProfileNav title="Sair">
              <BiLogOut size={17} />
            </ProfileNav>
          </div>
        </S.NavProfile>
      )}
    </>
  );
}
