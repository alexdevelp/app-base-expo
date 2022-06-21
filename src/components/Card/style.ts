import styled from "styled-components/native";
import * as Animatable from 'react-native-animatable';
import { RFPercentage } from "react-native-responsive-fontsize";

export const Container = styled(Animatable.View)`
    align-items:center;
    width:180px;
    height: 250px;
    background-color: ${( {theme} )=> theme.COLORS.PRIMARY_900};
    margin:0 10px ;
    border-radius:10px;
`;

export const Title = styled.Text`
    font-size: ${RFPercentage(2.4)}px;
    margin-top:24px;
    color:${({ theme})=> theme.COLORS.BACKGROUND};
    font-family: ${({ theme })=> theme.FONTS.MEDIUM} ;
`;
export const Foundation = styled.Text`
    font-size:14px;
    margin-top:16px;
    color:${({ theme})=> theme.COLORS.BACKGROUND};
    font-family: ${({ theme })=> theme.FONTS.REGULAR} ;
`;

export const Image = styled(Animatable.Image)`
    margin-top:-50px;
    width:150px;
    height:150px;
`;