import { FurnitureHover } from ".";

export default {
  title: "Components/FurnitureHover",
  component: FurnitureHover,
  argTypes: {
    property1: {
      options: ["variant-2", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "variant-2",
    className: {},
    homeDefaultDivClassName: {},
  },
};
