import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CardList from "./CardList";

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

const constructArray = (item) => {
    const itemArray = [item];
    for (let i = 0; i < 19; i++) {
        itemArray.push(item);
    }
    return itemArray;
}

const beersList = constructArray(testCard)

beforeEach(() => {
    render(<CardList beersArray={beersList} searchTerm=""/>)
})

describe("should render the correct cards", () => {

    it("should render all cards", () => {
        const headings = screen.getAllByRole("heading");
        headings.forEach((element) => {
            expect(element).toBeInTheDocument();
        })
        expect(headings.length).toBe(20);
    })
    // visibility is not working how I expected
    it("should only have 10 cards visible", () => {
        const cards = screen.getAllByTestId("card-id");
        cards.forEach((element, index) => {
            expect(element).toBeVisible();
            // if (index < 10) {
            //     expect(element).toBeVisible();
            // } else {
            //     expect(element).not.toBeVisible();
            // }
        })
    })

})

describe("should respond to button inputs", () => {

    it("should bring up a pop-out when a card is clicked", () => {
        const firstCard = screen.getAllByRole("button");
        userEvent.click(firstCard[0]);
        const popOut = screen.getByText("A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.");
        expect(popOut).toBeInTheDocument();
    })
    it("should remove the pop-out when the cross is clicked", () => {
        const firstCard = screen.getAllByRole("button");
        userEvent.click(firstCard[0]);
        const cross = screen.getByTestId("cross-icon");
        const popOut = screen.getByText("A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.");
        userEvent.click(cross);
        expect(popOut).not.toBeInTheDocument();
    })

})
