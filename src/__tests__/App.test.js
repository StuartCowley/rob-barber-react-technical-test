import { render, screen } from '@testing-library/react';
import App from '../components/App';

describe("app", () => {
const { asFragment } = render(<App />)

it("renders correctly", () => {
   expect(asFragment()).toMatchSnapshot();
});

});