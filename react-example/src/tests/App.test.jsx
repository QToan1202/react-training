import { render, screen } from "@testing-library/react";
import Button from "../components/Button";
import { describe, it, expect } from "vitest";
import '@testing-library/jest-dom'

describe("App", () => {
  it("renders button", async () => {
    render(<Button title="hello" />);
    const button = await screen.findByRole("button");

    expect(button).toMatchSnapshot()
    expect(button).not.toBeNull();
    expect(button).not.toBeDisabled();
    expect(button).toHaveTextContent("hello");
    expect(button).toBeInTheDocument()
  });
});
