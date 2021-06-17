import React, { useEffect, useState } from 'react';

import { Container, ImageContainer, BookTitle, Author, BookDescription, OptionsContainer, Read, Listen, Share } from './styles';

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
                <img src={`data:image/jpeg;base64,${book.image}`} alt={"bookCover"} />
            </ImageContainer>

            <div>
                <BookTitle>{book.name}</BookTitle>
                <Author>{book.author}</Author>
                <BookDescription>{book.description}</BookDescription>
            </div>

            <OptionsContainer>
                <Read>Read</Read>
                <Listen>Listen</Listen>
                <Share>Share</Share>
            </OptionsContainer>
        </Container>
    );;
}

export default BookDetail;