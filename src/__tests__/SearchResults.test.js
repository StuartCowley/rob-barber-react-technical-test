import { render, screen } from "@testing-library/react";
import SearchResults from "../components/SearchResults";

describe("search results", () => {
    const { asFragment } = render(<SearchResults />)

    it("search results renders correctly", () => {
        expect(asFragment()).toMatchSnapshot();
    });

    it("should display images in component", () => {
     expect(img).toHaveAttribute('spaceImage')
    })

});