import React, { useState } from 'react';
import { toast } from 'react-toastify'
import { AiOutlineHome, AiOutlinePlus, AiOutlineUser } from "react-icons/ai";
import { Link } from 'react-router-dom'



import {
    Container, Title, LabelName, InputName, LabelAuthor, InputAuthor,
    LabelDescription, InputDescription, AddButton, LabelCover, InputCover,
    Navigation, Home, HomeIcon, NewBookContainer, NewBookIcon, Profile, ProfileIcon
} from './styles';

import BookApi from '../../api/Book';

function NewBook() {

    const [form, setForm] = useState({
        name: '',
        image: '',
        author: '',
        description: ''
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        let { data } = await BookApi.create(form)
        setForm({ name: '', image: '', author: '', description: '' })
        toast.success(data.message)
    }

    const convertFile = (event) => {
        let file = event.target.files[0]
        let fileReader = new FileReader()
        fileReader.onload = (e) => {
            let binary = ''
            let bytes = new Uint8Array(e.target.result)
            let len = bytes.byteLength
            for (let i = 0; i < len; i++) {
                binary += String.fromCharCode(bytes[i])
            }
            setForm({ ...form, image: window.btoa(binary) })
        }
        fileReader.readAsArrayBuffer(file)
    }

    return (
        <Container>
            <Title>Add a new book</Title>
            <form onSubmit={handleSubmit} >
                <LabelName>
                    Name:
                </LabelName>
                <InputName value={form.name} required type="text" onChange={(event) => setForm({ ...form, name: event.target.value })} />

                <LabelAuthor>
                    Author:
                </LabelAuthor>
                <InputAuthor vvalue={form.author} required type="text" onChange={(event) => setForm({ ...form, author: event.target.value })} />
                <LabelDescription>
                    Description:
                </LabelDescription>
                <InputDescription value={form.description} required type="text" onChange={(event) => setForm({ ...form, description: event.target.value })} />
                <LabelCover>
                    Cover:
                </LabelCover>
                <InputCover required type="file" onChange={convertFile} />
                <AddButton>Add new Book</AddButton>
            </form>

            <Navigation>
                <Link to={`/books`}>
                    <Home>
                        <HomeIcon><AiOutlineHome /></HomeIcon>
                        <p>Home</p>
                    </Home>
                </Link>
                <Link to={`/new/book`}>
                    <NewBookContainer>
                        <NewBookIcon><AiOutlinePlus /></NewBookIcon>
                        <p>Add Book</p>
                    </NewBookContainer>
                </Link>
                <Profile>
                    <ProfileIcon><AiOutlineUser /></ProfileIcon>
                    <p>Profile</p>
                </Profile>
            </Navigation>

        </Container >
    );
}

export default NewBook;