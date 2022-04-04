// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { server } from './mocks/server';

// init API mocking before tests
beforeAll(() => server.listen());

// reset req handlers
afterEach(() => server.resetHandlers());

// cleanup
afterAll(() => server.close());
