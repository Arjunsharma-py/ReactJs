import categories from "../Categories";

interface Props {
  onSelectCategory: (category: string) => void;
}

const FilterDisplayItems = ({ onSelectCategory }: Props) => {
  return (
    <select
      className="form-select"
      onChange={(event) => onSelectCategory(event.target.value)}
    >
      <option value="">All Categories</option>
      {categories.map((e) => (
        <option key={e} value={e}>
          {e}
        </option>
      ))}
    </select>
  );
};

export default FilterDisplayItems;
