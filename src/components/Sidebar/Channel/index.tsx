import * as S from './styles';

interface ChannelProps {
  isOffline?: boolean;
}

export function Channel({ isOffline = false }: ChannelProps) {
  return (
    <S.Container>
      <div className={isOffline ? `off` : ''}>
        <img
          src="https://marketingcomcafe.com.br/wp-content/uploads/2017/12/banco-imagens-gratis.png"
          alt="Exemplo"
        />
      </div>

      <div>
        <strong>Gaules</strong>
        <p>Counter-Strike: Go</p>
      </div>

      {isOffline ? <p>Offline</p> : <p className="online">29 mil</p>}
    </S.Container>
  );
}
