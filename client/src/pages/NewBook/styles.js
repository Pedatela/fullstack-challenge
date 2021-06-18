import styled from 'styled-components';

export const Container = styled.div`
   position: absolute;
    width: 376px;
    height: 900px;
    left: -1px;
    top: 0px;
    background: #FFFCF9;
`;

export const Title = styled.div`
    margin: 53px 27px;
    position: absolute;
    width: 169px;
    height: 29px;
    font-style: normal;
    font-family: SF Pro Display;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    color: #FF6978;
`;

export const LabelName = styled.div`
    position: absolute;
    width: 46px;
    height: 18px;
    left: 20px;
    top: 139px;
    font-family: SFProText;
    font-size: 16px;
    line-height: 18px;
    text-align: center;
    color: #000000;
`;

export const InputName = styled.input`
    position: absolute;
    width: 336px;
    height: 48px;
    left: 20px;
    top: 167px;
    border: 0;
    background: #FDFCFC;
    box-shadow: 5px 5px 80px rgba(212, 173, 134, 0.4926);
    border-radius: 10px;
`;


export const LabelAuthor = styled.div`
    position: absolute;
    width: 54px;
    height: 18px;
    left: 20px;
    top: 253px;
    font-family: SFProText;
    font-size: 16px;
    line-height: 18px;
    text-align: center;
    color: #000000;
`;

export const InputAuthor = styled.input`
    position: absolute;
    width: 336px;
    height: 48px;
    left: 19px;
    top: 281px;
    border: 0;
    background: #FDFCFC;
    box-shadow: 5px 5px 80px rgba(212, 173, 134, 0.4926);
    border-radius: 10px;
`;

export const LabelDescription = styled.div`
    position: absolute;
    width: 91px;
    height: 18px;
    left: 20px;
    top: 368px;
    font-family: SFProText;
    font-size: 16px;
    line-height: 18px;
    text-align: center;
    color: #000000;
`;

export const InputDescription = styled.textarea`
    position: absolute;
    width: 336px;
    height: 228px;
    left: 20px;
    top: 396px;
    border: 0;
    background: #FDFCFC;
    box-shadow: 5px 5px 80px rgba(212, 173, 134, 0.4926);
    border-radius: 10px;
`;


export const LabelCover = styled.div`
    position: absolute;
    width: 91px;
    height: 18px;
    top: 650px;
    font-family: SFProText;
    font-size: 16px;
    line-height: 18px;
    text-align: center;
    color: #000000;
`;

export const InputCover = styled.input`
    position: absolute;
    width: 336px;
    left: 20px;
    top: 678px;
    border: 0;
    background: #FDFCFC;
    box-shadow: 5px 5px 80px rgba(212, 173, 134, 0.4926);
`;

export const AddButton = styled.button`
    position: absolute;
    width: 336px;
    height: 48px;
    left: 16px;
    top: 745px;
    background: #FF6978;
    box-shadow: 5px 5px 80px rgba(212, 173, 134, 0.4926);
    border-radius: 10px;
    border: 0;
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    color: #FFFFFF;

`;

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
    color: #BFBEBF;

`

export const HomeIcon = styled.div`
    position: absolute;
    font-size: 18px;
    left: 1.1%;
    right: 0%;
    top: calc(50% - 80px/2 + 14px);
`

export const NewBookContainer = styled.div`
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