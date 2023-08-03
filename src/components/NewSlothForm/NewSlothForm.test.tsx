import { render, screen } from "@testing-library/react";
import NewSlothForm from "./NewSlothForm";

describe("Given a NewSlothForm component", () => {
  describe("When it receives text input", () => {
    test("Then it should render the textbox field'", () => {
      render(<NewSlothForm />);

      const inputField = screen.getByRole("textbox", { name: /name/i });

      expect(inputField).toBeInTheDocument();
    });
  });

  describe("When it receives URL input", () => {
    test("Then it should render the url textbox field'", () => {
      render(<NewSlothForm />);

      const inputField = screen.getByRole("textbox", { name: /Picture URL/i });

      expect(inputField).toBeInTheDocument();
    });
  });

  describe("When it receives numbers of fingers inside input", () => {
    test("Then it should render the number of fingers inside the textbox field'", () => {
      render(<NewSlothForm />);

      const inputField = screen.getByRole("spinbutton", { name: /fingers/i });

      expect(inputField).toBeInTheDocument();
    });
  });
});
