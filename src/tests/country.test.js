import React from "react";
import { shallow, mount, render } from "enzyme";
import App from "../components/App";

// describe what we are testing
describe("Dashboard", () => {
  // make our assertion and what we expect to happen
  it("should render without throwing an error", () => {
    expect(
      shallow(<App />)
        .find("form-inline")
        .exists()
    ).toBe(true);
  });

  it("renders a input", () => {
    expect(shallow(<App />).find(".searchBox").length).toEqual(1);
  });
  it("renders a searh button", () => {
    expect(shallow(<App />).find(".btnSearch").length).toEqual(1);
  });
});

/*it("renders header message", () => {
  const { getByText } = render(<App />);
  expect(getByText("Countries Of The World")).toBeInTheDocument();
});*/
