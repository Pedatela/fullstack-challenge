import styled from "styled-components";

export const Container = styled.div`
   position: absolute;
    width: 376px;
    height: 812px;
    left: -1px;
    top: 0px;
    background: #FFFCF9;

    svg{
        position: absolute;
        width: 8px;
        height: 8px;
        left: 0%;
        bottom: 89%;
        font-size: large;
    }
`;

export const Search = styled.input`
    position: absolute;
    width: 336px;
    height: 48px;
    left: 19px;
    top: 50px;
    border: 0;
    background: #FDFCFC;
    box-shadow: 5px 5px 80px rgba(212, 173, 134, 0.122623);
    border-radius: 10px;
`;

export const WelcomeText = styled.span`
    position: absolute;
    width: 210px;
    height: 29px;
    left: 19px;
    top: 128px;
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 29px;
    color: #54565A;
`;

export const WelcomeName = styled.span`
    width: 210px;
    height: 29px;
    left: 19px;
    top: 128px;
    color: #FF6978;
`
export const Icon = styled.span`
    position: absolute;
    width: 24px;
    height: 24px;
    left: 240px;
    top: 0px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
`
export const Image = styled.img`
    height: 153px;
    width: 105px;
`

export const ImageContainer = styled.div`
    position: absolute;
    top: 25%;
    max-width: 376px;
    margin: 0 10px;
    padding-bottom: 10%;
    display: grid;
    grid-gap: 5px;
    grid-template-columns: repeat(3, 1fr);
    background: #FFFCF9;
`


export const BookName = styled.span`
    height: 14px;
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    color: rgba(49, 49, 49, 0.8);
`

export const BookAuthor = styled.span`
    height: 12px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 900;
    font-size: 10px;
    line-height: 12px;
    color: rgba(49, 49, 49, 0.8);
`

export const LoadMore = styled.button`
    height: 20px;
    align-self: center;
    box-shadow: 5px 5px 80px rgba(212, 173, 134, 0.4926);
    border-radius: 10px;
    border: 0;
    line-height: 13px;

    background: ${props => props.disabled ? 'grey' : '#FF6978'};
    color: #FFFFFF;
`

export const Navigation = styled.div`
    position: fixed;
    width: 375px;
    height: 59px;
    left: 0px;
    bottom: 0%;
    background: #FFFFFF;
`

export const Home = styled.div`
   position: absolute;
    height: 12px;
    left: 10%;
    right: 0%;
    top: calc(50% - 25px/2 + 14px);
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 12px;
`

export const HomeIcon = styled.div`
    position: absolute;
    font-size: 18px;
    left: 1.1%;
    right: 0%;
    top: calc(50% - 80px/2 + 14px);
`

export const NewBook = styled.div`
    position: absolute;
    height: 12px;
    left: 42%;
    right: 0%;
    top: calc(50% - 25px/2 + 14px);
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 12px;
    color: #BFBEBF;
`

export const NewBookIcon = styled.div`
    position: absolute;
    font-size: 18px;
    left: 5.6%;
    right: 0%;
    top: calc(50% - 80px/2 + 14px);
`

export const Profile = styled.div`
   position: absolute;
    height: 12px;
    left: 80%;
    right: 0%;
    top: calc(50% - 25px/2 + 14px);
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 12px;
    color: #BFBEBF;
`

export const ProfileIcon = styled.div`
   position: absolute;
    font-size: 18px;
    left: 5.6%;
    right: 0%;
    top: calc(50% - 80px/2 + 14px);
`