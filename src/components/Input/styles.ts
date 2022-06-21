import styled from 'styled-components/native';


export const Container = styled.TextInput`
    width: 100%;
    height: 56px;
    color: ${( {theme} )=> theme.COLORS.TEXT};
    padding-left: 10px;
    border-radius: 5px;
    background-color:  ${( {theme} )=> theme.COLORS.BACKGROUND};
`;