import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import HomePage from "../HomePage.vue";

describe("HomePage", () => {
  it("renders properly", () => {
    const wrapper = mount(HomePage, { props: { msg: "Test Successful"}});
    expect(wrapper.text()).toContain("Test Successful");
  });
});
