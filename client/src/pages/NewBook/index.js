import React, { useState } from 'react';
import { toast } from 'react-toastify'


import { Container, Title, LabelName, InputName, LabelAuthor, InputAuthor, LabelDescription, InputDescription, AddButton, LabelCover, InputCover } from './styles';

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
        let { data } = await BookApi.create(form).catch(err => toast.error(err))
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
                <InputName required type="text" onChange={(event) => setForm({ ...form, name: event.target.value })} />

                <LabelAuthor>
                    Author:
                </LabelAuthor>
                <InputAuthor required type="text" onChange={(event) => setForm({ ...form, author: event.target.value })} />
                <LabelDescription>
                    Description:
                </LabelDescription>
                <InputDescription required type="text" onChange={(event) => setForm({ ...form, description: event.target.value })} />
                <LabelCover>
                    Cover:
                </LabelCover>
                <InputCover required type="file" onChange={convertFile} />
                <AddButton>Add new Book</AddButton>
            </form>

        </Container >
    );
}

export default NewBook;