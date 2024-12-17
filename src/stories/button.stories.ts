import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../uiverse/components";
import Preview from "./preview";

const meta: Meta = {
  title: "uiverse/Button",
  component: Button,
  decorators: Preview.decorators,
  parameters: {
    layout: "centered",
    design: {
      type: "figma",
      url: "https://www.figma.com/file/eHvxf9SAJx2BZ57z13txpN/Material-UI-for-Figma-(and-MUI-X)-(Community)?node-id=6594%3A974380",
    },
    deepControls: { enabled: true },
  },
  tags: ["autodocs"],
  argTypes: {
    "buttonProps.variant": {
      name: "Variant",
      control: "select",
      options: ["contained", "outlined", "text"],
    },
    "buttonProps.color": {
      name: "Color",
      control: "select",
      options: ["primary", "secondary", "error", "warning", "info", "success", "inherit"],
    },
    "buttonProps.size": {
      name: "Size",
      control: "select",
      options: ["large", "medium", "small"],
    },
    children: {
      control: { type: "text" },
      defaultValue: "Test button",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryButton: Story = {
  name: "Button",
  args: {
    buttonProps: {
      variant: "contained",
      color: "primary",
      size: "large",
    },
    children: "Test button",
  },
};

export const OutlinedButton: Story = {
  name: "Outlined Button",
  args: {
    buttonProps: {
      variant: "outlined",
      color: "primary",
      size: "large",
    },
    children: "Test button1",
  },
};
