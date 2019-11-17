/* global it, expect, document */
import React from 'react';
import ReactDOM from 'react-dom';
import TestRenderer from 'react-test-renderer';
import ActionButton from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ActionButton />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Handles the label prop correctly', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ActionButton label="new label" />, div);
  expect(div.textContent).toBe('new label');
});

it('renders the action button correctly with default props', () => {
  const TextInputComponent = TestRenderer.create(<ActionButton />).toJSON();
  expect(TextInputComponent).toMatchSnapshot();
});
