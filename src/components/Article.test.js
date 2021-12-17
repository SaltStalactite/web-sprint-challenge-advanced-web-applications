import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import MutationObserver from 'mutationobserver-shim';

import Article from './Article';

const dummyData = {
    headline: 'test',
    author: 'test',
    summary: 'test',
    body: 'test'
}

test('renders component without errors', () => {
    render(<Article article={dummyData} />)
});

// test('renders headline, author from the article when passed in through props', ()=> {
// });

// test('renders "Associated Press" when no author is given', ()=> {
// });

// test('executes handleDelete when the delete button is pressed', ()=> {
// });

//Task List:
//1. Complete all above tests. Create test article data when needed.