import {render, screen} from "@testing-library/react";
import PopOut from "./PopOut";

const testCard = {
    name:"Buzz",
    image_url:"https://images.punkapi.com/v2/keg.png",
    tagline:"A Real Bitter Experience",
    first_brewed:"09/2007",
    description:"A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.",
    abv:"4.5",
    ph:"4.4",
    food_pairing:["Spicy chicken tikka masala", "Grilled chicken quesadilla", "Caramel toffee cake"]
}

beforeEach(() => {
    render(<PopOut beer={testCard}/>)
})

describe("should render all elements", () => {
    
    it("should render header elements", () => {
        const headings = screen.getAllByRole("heading");
        headings.forEach((element) => {
            expect(element).toBeInTheDocument();
        })
    })
    it("should render the image", () => {
        const image = screen.getByRole("img");
        expect(image).toBeInTheDocument();
    })
    it("should render text elements", () => {
        const description = screen.getByText("A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.");
        const pairings = screen.getByText("Spicy chicken tikka masala; Grilled chicken quesadilla; Caramel toffee cake");
        expect(description).toBeInTheDocument();
        expect(pairings).toBeInTheDocument();
    })

})

// on CardList

// it("should disappear on button-press", () => {
//     const cross = screen.getByTestId("cross-icon");
//     const description = screen.getByText("A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.");
//     const image = screen.getByRole("img");
//     userEvent.click(cross);
//     expect(description).not.toBeInTheDocument();
//     expect(image).not.toBeInTheDocument();
// })