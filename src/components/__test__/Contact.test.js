import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom";

test("Should load Contact Us Component", () => {
    //Render the UI component on the jsDOM screen:
    render(<Contact />);

    //Querying some elements from the component
    const heading = screen.getByRole("heading");

    //Assertion:
    expect(heading).toBeInTheDocument();
})

test("Should load button inside Contact Us", () => {
    //Render the UI component on the jsDOM screen:
    render(<Contact />);

    //Querying button from the component
    const button = screen.getByRole("button");
    // const button = screen.getByText("button");
    // console.log(button);

    //Assertion: Expect the button to be in the document
    expect(button).toBeInTheDocument();
})

test("Should load 'name' input box inside Contact Us", () => {
    //Render the UI component on the jsDOM screen:
    render(<Contact />);

    //Querying input box with placeholder = name
    const inputBox = screen.getByPlaceholderText("name");

    //Assertion:
    expect(inputBox).toBeInTheDocument();
})

test("Should load 2 input boxes inside Contact Us", () => {
    //Render the UI component on the jsDOM screen:
    render(<Contact />);

    //Querying 2 input boxes:
    const inputBoxes = screen.getAllByRole("textbox");
    // console.log(inputBoxes);

    //Assertion: Expect the length of the array to be 2 since there are 2 input boxes
    expect(inputBoxes.length).toBe(2);
    // expect(inputBoxes[0]).toBeInTheDocument();
})