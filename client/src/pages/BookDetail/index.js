import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'


import {
    Container, ImageContainer, Icon, Cover, OvalImage, Oval2Image, PinkImage, LittleImage, BlueImage, BookTitle, Author,
    BookDescription, OptionsContainer,
    Read, Listen, Share
} from './styles';

import { AiOutlineArrowLeft } from "react-icons/ai";
import { CgReadme } from "react-icons/cg";
import { FiHeadphones } from "react-icons/fi";
import { IoShareOutline } from "react-icons/io5";




import Oval from '../../assets/Oval.png'
import Oval2 from '../../assets/Oval2.png'
import pinkOval from '../../assets/pinkOval.png'
import littleOval from '../../assets/littleOval.png'
import blueOval from '../../assets/blueOval.png'



// API
import BookApi from '../../api/Book';

function BookDetail({ match: router }) {

    const [book, setBook] = useState({});


    useEffect(() => {
        BookApi.getOne(router.params.id)
            .then(({ data }) => {
                setBook(data.data)
            }).catch(err => console.log(err))
    }, [router.params.id])



    return (
        <Container>
            <ImageContainer>
                <Link to={`/books`}>
                    <Icon><AiOutlineArrowLeft /></Icon>
                </Link>
                <OvalImage src={Oval}></OvalImage>
                <Oval2Image src={Oval2}></Oval2Image>
                <PinkImage src={pinkOval}></PinkImage>
                <LittleImage src={littleOval}></LittleImage>
                <BlueImage src={blueOval}></BlueImage>
                <Cover src={`data:image/jpeg;base64,${book.image}`} alt={"bookCover"} />
            </ImageContainer>

            <div>
                <BookTitle>{book.name}</BookTitle>
                <Author>{book.author}</Author>
                <BookDescription>{book.description}</BookDescription>
            </div>

            <OptionsContainer>
                <Read>
                    <CgReadme />
                    Read
                </Read>
                <Listen>
                    <FiHeadphones />
                    Listen
                </Listen>
                <Share>
                    <IoShareOutline />
                    Share
                </Share>
            </OptionsContainer>
        </Container>
    );;
}

export default BookDetail;