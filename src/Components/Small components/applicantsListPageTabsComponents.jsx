import { Tabs } from "react-simple-tabs-component";

const ListTab = () => {
  return (
    <>
      <h2>This is tab one</h2>
    </>
  );
};

const GridTab = () => {
  return (
    <>
      <h2>This is tab two</h2>
    </>
  );
};

const tabs = [
  {
    label: "Tabone",
    Component: ListTab,
  },
  {
    label: "Tabone",
    Component: GridTab,
    backgroundColor: "red",
  },
];

export default function SwitchComponent() {
  return (
    <>
      <Tabs tabs={tabs} orientation="vertical" />
    </>
  );
}
