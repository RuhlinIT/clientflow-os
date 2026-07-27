export const workQueue = [
  {
    title: "Review tasks due today across active client work.",
    context: "Tasks",
    status: "Now",
    to: "/tasks",
  },
  {
    title: "Follow up on accounts waiting for a response.",
    context: "Clients",
    status: "Now",
    to: "/clients",
  },
  {
    title: "Clear blocked work before adding anything new.",
    context: "Tasks",
    status: "Next",
    to: "/tasks",
  },
  {
    title: "Finalize workflow defaults for intake and delivery.",
    context: "Settings",
    status: "Later",
    to: "/settings",
  },
];

export const nextActions = [
  {
    label: "Open Tasks",
    description: "Clear overdue or blocked work first.",
    to: "/tasks",
  },
  {
    label: "Open Clients",
    description: "Review accounts that need follow-up.",
    to: "/clients",
  },
  {
    label: "Open Settings",
    description: "Finish baseline workflow configuration.",
    to: "/settings",
  },
];

export const summarySnapshot = [
  {
    label: "Clients needing attention",
    value: "4",
    note: "Accounts with stalled communication or pending follow-up.",
  },
  {
    label: "Tasks due today",
    value: "6",
    note: "Immediate work that should move before anything new.",
  },
  {
    label: "Blocked items",
    value: "2",
    note: "Work waiting on approval, input, or dependency clearance.",
  },
];

export const environment = [
  { label: "Shell", value: "Stable" },
  { label: "Routing", value: "Stable" },
  { label: "Workflow model", value: "In progress" },
];