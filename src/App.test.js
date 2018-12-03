import React from "react";
import { shallow } from "enzyme";
import axios from "axios";
import App from "./App";

jest.mock("axios");

it("fetches posts", done => {
  const response = {
    data: [{ id: 1 }, { id: 2 }, { id: 3 }]
  };
  axios.get.mockResolvedValueOnce(response);
  const wrapper = shallow(<App />);

  setImmediate(() => {
    expect(wrapper.state().posts).toEqual([{ id: 1 }, { id: 2 }, { id: 3 }]);
    done();
  });
});
