import { Group } from ".";

export default {
  title: "Components/Group",
  component: Group,
  argTypes: {
    property1: {
      options: ["cardviewbox", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "cardviewbox",
    className: {},
    epsonXgaClassName: {},
    hasProduct: true,
    NRPClassName: {},
    productClassName: {},
  },
};
