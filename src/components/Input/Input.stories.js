import React from "react";
import Input from "./Input";

export default {
  title: "Form/Input",
  component: Input,
};

export const Small = () => (
  <Input size="small" placeholder="Small Size"></Input>
);

export const Meduim = () => (
  <Input size="medium" placeholder="Meduim Size"></Input>
);

export const Larg = () => <Input size="larg" placeholder="Larg Size"></Input>;
