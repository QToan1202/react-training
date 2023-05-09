import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  it("renders button", () => {
    render(<App />);
    const button = screen.getAllByRole("button");
    expect(button).toBeInTheDocument();
  });
});
