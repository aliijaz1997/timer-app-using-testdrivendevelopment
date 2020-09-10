import React from 'react';
import { shallow } from 'enzyme';
import App from './App';


describe("App", () => {
  let component: any;
  beforeEach(() => component = shallow(<App />));
  it("It should render ", () => {
    expect(component.find("div").length).toBeGreaterThanOrEqual(1);
  })

  it ("It should have buttons", () => {
    expect(component.find("button").length).toEqual(3)
  })
  // it ("It should have buttons", () => {
  //   expect(component.find("start").length).toBeGreaterThanOrEqual(1);
  // })
})