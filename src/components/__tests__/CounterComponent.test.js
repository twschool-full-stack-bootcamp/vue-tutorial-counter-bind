/* eslint-disable no-undef */
import { shallowMount } from "@vue/test-utils";

import CounterComponent from "../CounterComponent.vue";

describe("test Counter Component", () => {

  test("should component has count props", () => {
    const wrapper = shallowMount(CounterComponent, {
      propsData: {
        count: 6
      }
    });
    expect(wrapper.find(".counter").text()).toBe("6");
  });
});
