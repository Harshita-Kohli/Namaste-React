import { fireEvent, render, screen } from "@testing-library/react"
import Header from "../Header";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../redux/appStore";
import { BrowserRouter } from "react-router-dom";

it("Should render the Header with Login Button", () => {
    //render header onto JSDOM screen:
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>);
    //Query the login button:
    const loginButton = screen.getByRole("button", { name: "Login" });
    // const loginButton = screen.getByText("Login");
    //Assertion:
    expect(loginButton).toBeInTheDocument();
})

it("Should render the Header with Cart - 0", () => {
    //render header onto JSDOM screen:
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>);
    //Query the Cart Items string:
    const cartItems = screen.getByText("Cart - 0");
    //Assertion:
    expect(cartItems).toBeInTheDocument();
})

it("Should render the Header with Cart", () => {
    //render header onto JSDOM screen:
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>);
    //Query the Cart using regular expression, since we just want to match the Cart pattern in the Header:
    const cart = screen.getByText(/Cart/); //we can use a regex to find the pattern 'Cart' in Header
    //Assertion:
    expect(cart).toBeInTheDocument();
})

it("Should change Login to Logout on click", () => {
    //render header onto JSDOM screen:
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>);
    //Query the Login Button from the screen:
    const loginButton = screen.getByRole("button", { name: "Login" });
    //we fire a click event in the jsdom screen to simulate the click behaviour on loginButton
    fireEvent.click(loginButton);
    //Query the Logout Button from the screen:
    const logoutButton = screen.getByRole("button", { name: "Logout" });
    //Assertion: I expect logout Button to be present in the document!
    expect(logoutButton).toBeInTheDocument();
})

it("Should change Logout to Login on click", () => {
    //Render:
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>)
    //Query:
    const loginButtonBefore = screen.getByRole("button", { name: "Login" });
    //we fire a click event in the jsdom screen to simulate the click behaviour on loginButton
    fireEvent.click(loginButtonBefore);
    const logoutButton = screen.getByRole("button", { name: "Logout" });
    fireEvent.click(logoutButton);//simulating click on Logout button
    const loginButtonAfter = screen.getByRole("button", { name: "Login" });

    //Assertion:
    expect(loginButtonAfter).toBeInTheDocument();
})
