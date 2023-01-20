import React from "react";
import Task from "./Task";

export default {
  title: "Form/Task",
  component: Task,
};

const Template = (args) => <Task {...args} />;

export const Default = Template.bind({});
Default.args = {
  task: {
    id: "1",
    title: "test task",
    state: "Task_inbox",
  },
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args.task,
    state: "Task_pinned",
  },
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Default.args.task,
    state: "Task_Archived",
  },
};
