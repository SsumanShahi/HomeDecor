import { Carasoul } from ".";

export default {
  title: "Components/Carasoul",
  component: Carasoul,
  argTypes: {
    property1: {
      options: ["slider-component3", "slider-component4", "slider-component1", "slider-component2"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "slider-component3",
    className: {},
    sofaRemovebgClassName: {},
    eeeRemovebgClassName: {},
    couchClassName: {},
  },
};
