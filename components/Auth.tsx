import { lighten } from 'polished';
import { FC } from 'react';
import styled from 'styled-components';
import config from '../config';
import { Icon } from '../ui';

const AuthBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 40px;
  max-width: 500px;
  width: 500px;
`;

const AuthTitle = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 15px;
  padding: 16px 0 20px;
  color: ${({ theme }) => theme.accent2Color};
`;

const SocialForm = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const LoginButton = styled('a')<{
  cColor: string;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 17px;
  margin: 5px;
  text-align: center;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
  background: ${props => props.cColor};

  :hover {
    background: ${props => lighten(0.1, props.cColor)};
  }
`;

const SocialIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 62px;
  font-size: 20px;
  height: 100%;
`;

const SocialTitle = styled.div`
  opacity: 0.85;
  font-size: 13px;
  height: 40px;
  padding-right: 62px;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  letter-spacing: 2px;
`;

const SocialButton = ({ bgColor, path, icon, title }) => (
  <LoginButton cColor={bgColor} href={`${config.apiUrl}auth/${path}`}>
    <SocialIcon>
      <Icon type={icon} />
    </SocialIcon>
    <SocialTitle>{title}</SocialTitle>
  </LoginButton>
);

export const Auth: FC = () => (
  <AuthBox>
    <AuthTitle>Выберите наиболее удобную для Вас платформу</AuthTitle>
    <SocialForm>
      <SocialButton bgColor={'#507299'} path="vkontakte" icon="vk" title="VK" />
      <SocialButton
        bgColor={'#DB4437'}
        path="google"
        icon="google"
        title="GOOGLE"
      />
      <SocialButton
        bgColor={'#6542a6'}
        path="twitch"
        icon="twitch"
        title="TWITCH"
      />
    </SocialForm>
  </AuthBox>
);
