import { render, screen } from "@testing-library/react";
import Search from "../components/Search";

describe("search", () => {
   const { asFragment } = render(<Search />)
   
   it("renders correctly", () => {
      expect(asFragment()).toMatchSnapshot();
   });
   
   });