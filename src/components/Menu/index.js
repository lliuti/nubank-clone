import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import QRCode from '../../../assets/qr.png';
import { Container, Code, Logo, Nav, NavItem, NavText, SignOutButton, SignOutButtonText } from './styles';

export default function Menu({ translateY }) {
  return (
    <Container style={{
      opacity: translateY.interpolate({
        inputRange: [0, 150],
        outputRange: [0, 1],
      })
    }}>
      <Code>
        <Logo source={QRCode} style={{ width: 80, height: 80}}/>
      </Code>

      <Nav>
        <NavItem>
          <Icon name='help-outline' size={20} color='#fff'/>
          <NavText>Me ajude</NavText>
        </NavItem>
        <NavItem>
          <Icon name='person-outline' size={20} color='#fff'/>
          <NavText>Perfil</NavText>
        </NavItem>
        <NavItem>
          <Icon name='credit-card' size={20} color='#fff'/>
          <NavText>Configurar cartão</NavText>
        </NavItem>
        <NavItem>
          <Icon name='smartphone' size={20} color='#fff'/>
          <NavText>Configurações do app</NavText>
        </NavItem>
      </Nav>
      <SignOutButton>
        <SignOutButtonText>Sair do app</SignOutButtonText>
      </SignOutButton>
    </Container>
  );
}
