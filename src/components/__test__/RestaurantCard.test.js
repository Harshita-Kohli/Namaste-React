import RestaurantCard from "../RestaurantCard";
import { render, screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/resCardMock.json";
import { withPromotedLabel } from "../RestaurantCard";
import "@testing-library/jest-dom";

it("Should render the RestaurantCard component with props data", () => {
    //render the <RestaurantCard/> onto jsdom screen
    render(<RestaurantCard resData={MOCK_DATA} />);

    //query the name of the restaurant from what was rendered on the screen
    const name = screen.getByText("EatFit");
    // console.log(name);
    //assert:
    expect(name).toBeInTheDocument();
})

it("Should render the RestaurantCard component with promoted label", () => {
    //HOMEWORK:
    //call withPromotedLabel() to get the enhanced component with 'promoted' label:
    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

    //render the PromotedRestaurantCard on the screen
    render(<RestaurantCardPromoted resData={MOCK_DATA} />);

    //query the promoted text from the screen:
    const name = screen.getByText("Promoted");

    //assert:
    expect(name).toBeInTheDocument();
})