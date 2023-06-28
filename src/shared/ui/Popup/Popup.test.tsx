import { render } from "@testing-library/react";

import { Popup } from "./Popup";

describe("shared/ui/Popup", () => {
  it("should render without props", () => {
    const { container } = render(<Popup>content</Popup>);

    expect(container.firstChild).toBeInTheDocument();
    expect(container.firstChild).toHaveClass("popup");
  });
});
