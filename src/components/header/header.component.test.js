import React from "react";
import { render } from "@testing-library/react";
import Header from "./header.component";

describe("Root component", () => {
  it("should be in the document", () => {
    const { getByText } = render(<Header name="Testapp" />);
    expect(getByText(/Testapp is mounted!/i)).toBeInTheDocument();
  });
});
