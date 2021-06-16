import React from 'react';
import bookCover from '../../assets/teste.png';


import { Container, ImageContainer, BookTitle, Author, BookDescription, OptionsContainer, Read, Listen, Share } from './styles';

function BookDetail() {
    return (
        <Container>
            <ImageContainer>

                <img src={bookCover} alt={"bookCover"} />
            </ImageContainer>

            <div>
                <BookTitle>Hooked : How to Build Habid-Forming Products</BookTitle>
                <Author>Nir Eyal</Author>
                <BookDescription>
                    <p>How do successful companies create products people can’t put down?</p>
                    <p>Why do some products capture widespread attention while others flop?</p>
                    <p>Why do some products capture widespread attention while others flop?</p>
                    <p>Why do some products capture widespread attention while others flop?</p>
                </BookDescription>
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