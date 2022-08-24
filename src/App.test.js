import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App title", () => {
  it("Renderiza correctamente el titulo Tienda", () => {
    render(<App />);
    expect(screen.getByText("Tienda")).toBeInTheDocument();
  });
});

describe("App category name", () => {
  it("Renderiza correctamente los nombres de las categorias", () => {
    render(<App />);
    expect(screen.getByText("CPU")).toBeInTheDocument();
    expect(screen.getByText("GPU")).toBeInTheDocument();
    expect(screen.getByText("MOTHER")).toBeInTheDocument();
    expect(screen.getByText("RAM")).toBeInTheDocument();
    expect(screen.getByText("PSU")).toBeInTheDocument();
  });
});
