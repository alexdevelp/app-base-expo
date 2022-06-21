import React from 'react';
import { Container, Header, Content } from './styles';
import { View, Text } from 'react-native';
import { Input } from '../../components/Input';
import { Card } from '../../components/Card';
import bannerImg from '../../assets/banner.jpg'


export function Home(){
    return(
        <Container>
            <Header source={bannerImg}>
                <Input />
            </Header>

            <Content>
                <Card />
            </Content>

        </Container>
   );
}