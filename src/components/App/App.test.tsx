import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Given an App component ", () => {
  describe("When it's instantiated", () => {
    test("It should show 'Create a sloth' inside a heading", () => {
      const title = "Create a sloth";
      render(<App />);

      const headingTitle = screen.getByRole("heading", { name: title });

      expect(headingTitle).toBeInTheDocument();
    });
  });
});
