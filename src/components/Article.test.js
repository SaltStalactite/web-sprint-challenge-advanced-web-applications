import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import MutationObserver from 'mutationobserver-shim';

import Article from './Article';

const dummyData = {
    headline: 'headline',
    author: 'author',
    summary: 'summary',
    body: 'body'
}

const noAuthorData = {
    headline: 'headline',
    author: null,
    summary: 'summary',
    body: 'body'
}

test('renders component without errors', () => {
    render(<Article article={dummyData} />)
});

test('renders headline, author from the article when passed in through props', () => {
    render(<Article article={dummyData} />)
    const headline = screen.queryByText(/headline/)
    const author = screen.queryByText(/author/)
    const summary = screen.queryByText(/summary/)
    const body = screen.queryByText(/body/)
    expect(headline).toBeInTheDocument()
    expect(author).toBeInTheDocument()
    expect(summary).toBeInTheDocument()
    expect(body).toBeInTheDocument()
});

test('renders "Associated Press" when no author is given', () => {
    render(<Article article={noAuthorData} />)
    const noAuthor = screen.queryByText(/Associated Press/)
    expect(noAuthor).toBeInTheDocument()
});

test('executes handleDelete when the delete button is pressed', () => {
    const handleDelete = jest.fn()
    render(<Article article={dummyData} handleDelete={handleDelete} />)
    const button = screen.queryByTestId('deleteButton')
    userEvent.click(button)
    expect(handleDelete).toBeCalled()

});

//Task List:
//1. Complete all above tests. Create test article data when needed.