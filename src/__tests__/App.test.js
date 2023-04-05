import { render, screen } from '@testing-library/react';
import App from '../components/App';

describe("app", () => {
 it("renders app component correctly", () => {
    render(<App />);
 })
});