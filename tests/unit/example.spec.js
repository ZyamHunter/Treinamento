import { shallowMount } from "@vue/test-utils";
import Test from "../../src/components/testComponent.vue";

describe("Test Component", () => {
  it("find button", () => {
    const wrapper = shallowMount(Test).find("button");
    expect(wrapper.exists()).toBe(true);
  });
  it("Is vue Instance", () => {
    const wrapper = shallowMount(Test);
    expect(wrapper.isVueInstance()).toBe(true);
  });
});
