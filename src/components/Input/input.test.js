/* global it, expect, document */
import React from 'react';
import ReactDOM from 'react-dom';
import TestRenderer from 'react-test-renderer';
import Input from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Input />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Handles the placeholder prop correctly', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Input placeholder="new placeholder" />, div);
  expect(div.getElementsByTagName('input')[0].getAttribute('placeholder')).toBe('new placeholder');
});

it('renders the input correctly with default props', () => {
  const TextInputComponent = TestRenderer.create(<Input />).toJSON();
  expect(TextInputComponent).toMatchSnapshot();
});
