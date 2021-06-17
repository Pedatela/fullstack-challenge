import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'


import { Container, Search, WelcomeText, WelcomeName, Icon, Image, ImageContainer, BookName, BookAuthor } from './styles';

// API
import BookApi from '../../api/Book';

function Books() {

    const [books, setBooks] = useState([]);
    const [showLoadMore, setShowLoadMore] = useState([]);


    useEffect(() => {
        BookApi.getAll(5, 0)
            .then(({ data }) => {
                setBooks(data.data.rows)
            }).catch(err => console.log(err))
    }, [])

    const loadMore = () => {
        BookApi.getAll(5, books.length)
            .then(({ data }) => {
                if (data.data.rows.length == 0) {
                    toast.success('No more Books')
                    setShowLoadMore(false)
                } else {
                    setBooks([...books, ...data.data.rows])
                }
            }).catch(err => console.log(err))
    }
    return (
        <>
            <Container>
                <Search placeholder="Search book" />
                <WelcomeText>Hi,
                    <WelcomeName> Mehmed Al Fatih <Icon>👋</Icon></WelcomeName>
                </WelcomeText>
            </Container>
            <ImageContainer>
                {books.map((book, index) => (
                    <Link key={index} to={`/book/${book.id}`}>
                        <Image src={`data:image/jpeg;base64,${book.image}`} alt={"bookCover"} />
                        <BookName>{book.name}</BookName>
                        <br></br>
                        <BookAuthor>by {book.author}</BookAuthor>
                    </Link>
                ))}
                {showLoadMore && <button onClick={loadMore}>Load More ...</button>}
            </ImageContainer>
        </>

    );
}

export default Books;