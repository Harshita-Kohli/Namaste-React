import { BrowserRouter } from "react-router-dom";
import Body from "../Body";
import MOCK_DATA from "../mocks/resListMock.json";
import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils"
import "@testing-library/jest-dom";

//making a mock fetch function:
global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
})
it("Should search res list for burger search input", async () => { //The callback function will be async since we are awaiting something inside it
    //render the body:
    //act() returns a promise so we need to make it as await
    await act(async () => { //this async function holds the code that renders the Body
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        );
    })
    //initially, there should be 20 cards:
    const resCardsBeforeSearch = screen.getAllByTestId("resCard");

    expect(resCardsBeforeSearch.length).toBe(20);
    // query: find the search button from screen:
    const searchButton = screen.getByRole("button", { name: "Search" });

    //assertion: expect the search button to be present in the document:
    expect(searchButton).toBeInTheDocument();

    //query the search input box:
    const searchInput = screen.getByTestId("searchInput");

    //-------simulate the typing in the input box:
    fireEvent.change(searchInput, { //first param = search input box, 2nd param = object specifying the e.target.value
        target: { value: "burger" }
    });

    //-------simulate the clicking of the search button in JSDOM:
    fireEvent.click(searchButton);

    //query the res cards from screen
    const resCards = screen.getAllByTestId("resCard");

    //assertion: we expect to have 4 restaurant cards filtered out:
    expect(resCards.length).toBe(2);
})

it("Should provide the top-rated restaurants upon clicking the button", async () => {
    //render the body component:
    //act() returns a promise so we need to make it as await
    await act(async () => {
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        );
    })
    
    //initially, we should have 20 resCards
    const resCardsAll = screen.getAllByTestId("resCard");
    console.log(resCardsAll.length);
    expect(resCardsAll.length).toBe(20);
    //query the top-rated button:
    const topButton = screen.getByRole("button",{name: "Top Rated Restaurants"});
    // simulate the clicking on the button:
    fireEvent.click(topButton);
    //assertion: expect the resCards to be 12 now:
    const filteredResCards = screen.getAllByTestId("resCard");
    console.log(filteredResCards.length);
    expect(filteredResCards.length).toBe(17);
})
