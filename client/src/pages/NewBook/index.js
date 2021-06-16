import React from 'react';

import { Container, Title, LabelName, InputName, LabelAuthor, InputAuthor, LabelDescription, InputDescription, AddButton, LabelCover, InputCover } from './styles';

function NewBook() {
    return (
        <Container>
            <Title>Add a new book</Title>
            <form >
                <LabelName>
                    Name:
                </LabelName>
                <InputName type="text" />

                <LabelAuthor>
                    Author:
                </LabelAuthor>
                <InputAuthor type="text" />
                <LabelDescription>
                    Description:
                </LabelDescription>
                <InputDescription type="text" />
                <LabelCover>
                    Cover:
                </LabelCover>
                <InputCover type="file" />
                <AddButton>Add new Book</AddButton>
            </form>

        </Container >
    );
}

export default NewBook;