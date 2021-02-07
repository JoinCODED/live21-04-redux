/**
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * DO NOT MODIFY THIS FILE
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */

import { render, fireEvent, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "./App";
import reducer from "./store/reducer";
import { createStore } from "redux";

const store = createStore(reducer);

describe("the app", () => {
  let container = null;

  beforeEach(() => {
    const renderedApp = render(
      <>
        <Provider store={store}>
          <App />
        </Provider>
      </>
    );

    container = renderedApp.container;
  });

  it("renders correctly", () => {
    expect(container).toMatchSnapshot();
  });

  it("allows viewing an animal cage by clicking on it", () => {
    fireEvent.click(screen.queryByText("🦍"));

    expect(container).toMatchSnapshot();
  });

  it("allows going back to the zoo after viewing a cage", () => {
    fireEvent.click(screen.queryByText("🦍"));

    expect(screen.queryByText("Back to Zoo")).toBeInTheDocument();
    fireEvent.click(screen.queryByText("Back to Zoo"));

    expect(screen.queryByText("Back to Zoo")).not.toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it("allows adding a new animal", () => {
    fireEvent.click(screen.queryByText("➕"));

    expect(screen.queryByText("Back to Zoo")).toBeInTheDocument();
    expect(screen.queryByText("Add Animal")).toBeInTheDocument();

    const nameInput = screen.getByPlaceholderText("Duck");
    const emojiInput = screen.getByPlaceholderText("🦆");

    fireEvent.change(nameInput, { target: { value: "Laila" } });
    fireEvent.change(emojiInput, { target: { value: "🐥" } });

    fireEvent.click(screen.queryByText("Add Animal"));

    expect(screen.queryByText("Back to Zoo")).not.toBeInTheDocument();
    expect(screen.queryByText("Add Animal")).not.toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it("allows cancelling adding a new animal", () => {
    fireEvent.click(screen.queryByText("➕"));

    expect(screen.queryByText("Back to Zoo")).toBeInTheDocument();
    expect(screen.queryByText("Add Animal")).toBeInTheDocument();

    const nameInput = screen.getByPlaceholderText("Duck");
    const emojiInput = screen.getByPlaceholderText("🦆");

    fireEvent.change(nameInput, { target: { value: "Khaled" } });
    fireEvent.change(emojiInput, { target: { value: "🥬" } });

    fireEvent.click(screen.queryByText("Back to Zoo"));

    expect(screen.queryByText("Back to Zoo")).not.toBeInTheDocument();
    expect(screen.queryByText("Add Animal")).not.toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});
