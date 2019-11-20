import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import pretty from "pretty";
import Hello from "./hello";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});
describe("Component test",() => {
    it("renders with or without a name", () => {
      act(() => {
        render(<Hello />, container);
      });
      expect(container.textContent).toBe("Hey, stranger");
    
      act(() => {
        render(<Hello name="Jenny" />, container);
      });
      expect(container.textContent).toBe("Hello, Jenny!");
    
      act(() => {
        render(<Hello name="Margaret" />, container);
      });
      expect(container.textContent).toBe("Hello, Margaret!");
    });
});

//describe.only
describe("Component HELLO snapshot test",() => {

  it("should render a greeting", () => {
    act(() => {
      render(<Hello />, container);
    });
  
    expect(
      pretty(container.innerHTML)
    ).toMatchSnapshot(); 
  
    act(() => {
      render(<Hello name="JennyZZZZ" />, container);
    });
  
    expect(
      pretty(container.innerHTML)
    ).toMatchSnapshot(); 
  
    
  });
});