import {render, screen} from "@testing-library/react";
import Card from "./Card";

const testCard = {name:"Buzz", image_url:"https://images.punkapi.com/v2/keg.png", tagline:"A Real Bitter Experience"};

beforeEach(() => {
    render(<Card beer={testCard}/>);
})

describe("should render all elements", () => {

    it("should render beer name", () => {
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
    })
    it("should render image", () => {
        const image = screen.getByRole("img");
        expect(image).toBeInTheDocument();
    })
    it("should render tagline", () => {
        const tagline = screen.getByText("A Real Bitter Experience")
        expect(tagline).toBeInTheDocument();
    })
    it("should render button", () => {
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
    })

})