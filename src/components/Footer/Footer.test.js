import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer", () => {
  it("Renderizar correctamente el texto en Footer", () => {
    render(<Footer />);
    expect(screen.getByText("ATLAS TECH | 2022")).toBeInTheDocument();
  });
});
