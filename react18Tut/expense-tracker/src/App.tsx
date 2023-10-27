import "./App.css";
import DisplayItems from "./components/DisplayItems";
import FilterDisplayItems from "./components/FilterDisplayItems";
import InputForm from "./components/InputForm";
import { useState } from "react";
import Navbar from "./components/Navbar";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [items, setItems] = useState([
    { id: 1, desc: "hello", amount: 756, ctg: "Groceries" },
    { id: 2, desc: "hello", amount: 566, ctg: "Utilities" },
    { id: 3, desc: "hello", amount: 566, ctg: "Groceries" },
    { id: 4, desc: "hello", amount: 656, ctg: "Groceries" },
  ]);

  const visibleItems = selectedCategory
    ? items.filter((e) => e.ctg === selectedCategory)
    : items;

  return (
    <>
      <Navbar total={items.length} />
      <InputForm
        onAdd={(data) => {
          setItems([...items, { ...data, id: items.length + 1 }]);
        }}
      />
      <div className="mt-3">
        <FilterDisplayItems
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <DisplayItems
        items={visibleItems}
        onDelete={(id) => {
          setItems(items.filter((i) => i.id !== id));
        }}
      />
    </>
  );
};

export default App;
