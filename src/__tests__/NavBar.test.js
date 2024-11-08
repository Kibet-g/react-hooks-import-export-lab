import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import NavBar from "../components/NavBar"; // Correct import path

test("it renders without crashing", () => {
  // Renders the NavBar component without throwing any errors
  render(<NavBar />);
});
