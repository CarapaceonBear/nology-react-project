import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NavBar from "./NavBar";

beforeEach(() => {
    render(<NavBar/>);
})

describe("should render all elements", () => {
    
    it("should render the searchbox", () => {
        const searchbox = screen.getByRole("textbox");
        expect(searchbox).toBeInTheDocument();
    })
    it("should render the checkboxes", () => {
        const checkboxes = screen.getAllByRole("checkbox");
        checkboxes.forEach((element) => {
            expect(element).toBeInTheDocument();
        })
    })
    
})

describe("should respond to user input", () => {

    it("should allow typing in the search box", () => {
        const searchbox = screen.getByRole("textbox");
        userEvent.click(searchbox);
        // expect(searchbox).toHaveFocus();
        userEvent.type("hello");
        const findSearch = screen.getByText("hello")
        expect(findSearch).toBeInTheDocument();
    })
})