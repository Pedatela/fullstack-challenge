import styled from 'styled-components';

export const Container = styled.div`
   position: relative;
    width: 376px;
    height: 900px;
    left: -1px;
    top: 0px;
    background: #FFFCF9;
`;

export const ImageContainer = styled.div`
    position: absolute;
    width: 376px;
    height: 282px;
    left: -1px;
    top: 0px;
    background: #FFF6E5;
    border-radius: 0px 0px 100px 0px;

`;

export const Icon = styled.div`
    position: absolute;
    width: 7px;
    height: 14px;
    left: 32px;
    top: 55px;
    font-size: 20px;
`;

export const Cover = styled.img`
    position: absolute;
    width: 151px;
    height: 234px;
    left: 113px;
    top: 84px;
`


export const OvalImage = styled.img`
    position: absolute;
    width: 100px;
    height: 100px;
    left: 300px;
    top: -10px;
    transform: rotate(25deg);

`;

export const Oval2Image = styled.img`
    position: absolute;
    width: 48px;
    height: 48px;
    left: 242.39px;
    top: 218.11px;
    transform: rotate(25deg);

`;

export const PinkImage = styled.img`
    position: absolute;
    width: 15px;
    height: 15px;
    left: 46px;
    top: 125px;
`;


export const LittleImage = styled.img`
    position: absolute;
    width: 24px;
    height: 24px;
    left: 248px;
    top: 86px;
`;

export const BlueImage = styled.img`
    position: absolute;
    width: 63px;
    height: 63px;
    left: 73px;
    top: 115px;
`;

export const BookTitle = styled.div`
    position: absolute;
    width: 335px;
    height: 58px;
    left: 20px;
    top: 349px;
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    letter-spacing: 1.5px;
    color: #36383A;
`;

export const Author = styled.span`
    position: absolute;
    width: 100px;
    height: 19px;
    left: 20px;
    top: 414px;
    font-family: SFProDisplay;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.670588px;
    color: #FF6978;
`

export const BookDescription = styled.div`
    position: absolute;
    width: 335px;
    height: 275px;
    left: 20px;
    top: 460px;
    font-family: SFProText;
    font-size: 14px;
    line-height: 25px;
    letter-spacing: 0.2px;
    color: rgba(49, 49, 49, 0.6);
`;

export const OptionsContainer = styled.ul`
    position: absolute;
    width: 335px;
    height: 56px;
    left: 20px;
    top: 703px;

    background: #FFFFFF;
    box-shadow: 3px 3px 23px rgba(107, 103, 70, 0.125901);
    border-radius: 2px;
`


export const Read = styled.li`
    position: absolute;
    height: 17px;
    left: 10%;
    right: 0%;
    top: calc(50% - 17px/2 + 0.5px);

    font-family: SF Pro Display;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;

    letter-spacing: 1px;

    color: #3F4043;
    svg{
        position: absolute;
        left: -6%;
        right:0%;
        top: 3%;
        bottom: 0%;
        
    }

`

export const Share = styled.li`
    position: absolute;
    height: 17px;
    left: 80%;
    right: 1.52%;
    top: calc(50% - 17px/2 + 0.5px);

    font-family: SF Pro Display;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */
    letter-spacing: 1px;
    color: #3F4043;
    svg{
        position: absolute;
        left: -30%;
        right:0%;
        top: 3%;
        bottom: 0%;
    }

`

export const Listen = styled.li`
    position: absolute;
    height: 17px;
    left: 45%;
    right: 1.41%;
    top: calc(50% - 17px/2 + 0.5px);
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 1px;
    color: #3F4043;


    svg{
        position: absolute;
        left: -10%;
        right:0%;
        top: 3%;
        bottom: 0%;
    }
`