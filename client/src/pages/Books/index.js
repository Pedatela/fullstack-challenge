import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { AiOutlineHome, AiOutlinePlus, AiOutlineUser } from "react-icons/ai";

import {
    Container, Search, WelcomeText, WelcomeName,
    Icon, Image, ImageContainer, BookName, BookAuthor,
    LoadMore, Navigation, Home, HomeIcon, NewBook, NewBookIcon, Profile, ProfileIcon
} from './styles';

// API
import BookApi from '../../api/Book';

function Books() {

    const [books, setBooks] = useState([]);
    const [search, setSearch] = useState('');
    const [showLoadMore, setShowLoadMore] = useState([]);


    useEffect(() => {
        BookApi.getAll(5, 0, null)
            .then(({ data }) => {
                setBooks(data.data.rows)
            }).catch(err => console.log(err))
    }, [])


    const searchFunc = (value) => {
        setSearch(value)
        BookApi.getAll(5, 0, value)
            .then(({ data }) => {
                if (data.data.rows.length === 0) {
                    setBooks([])
                    setShowLoadMore(false)
                } else {
                    setBooks([...data.data.rows])
                    setShowLoadMore(true)
                }
            }).catch(err => console.log(err))
    }


    const loadMore = () => {
        BookApi.getAll(5, books.length, search)
            .then(({ data }) => {
                if (data.data.rows.length === 0) {
                    setShowLoadMore(false)
                } else {
                    setBooks([...books, ...data.data.rows])
                }
            }).catch(err => console.log(err))
    }

    return (
        <>
            <Container>
                <Search onChange={(event) => searchFunc(event.target.value)} placeholder="Search book" />
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
                <LoadMore disabled={!showLoadMore} onClick={loadMore}>Load More ...</LoadMore>

            </ImageContainer>
            <Navigation>
                <Link to={`/books`}>
                    <Home>
                        <HomeIcon><AiOutlineHome /></HomeIcon>
                        <p>Home</p>
                    </Home>
                </Link>

                <Link to={`/new/book`}>
                    <NewBook>
                        <NewBookIcon><AiOutlinePlus /></NewBookIcon>
                        <p>Add Book</p>
                    </NewBook>
                </Link>
                <Profile>
                    <ProfileIcon><AiOutlineUser /></ProfileIcon>
                    <p>Profile</p>
                </Profile>
            </Navigation>
        </>

    );
}

export default Books;