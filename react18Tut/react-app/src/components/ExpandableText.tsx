import { useState } from "react";

interface Props {
  children: string;
  maxChars?: number;
}

const ExpandableText = ({ children, maxChars = 100 }: Props) => {
  const [isExpanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(!isExpanded);
  };

  if (children.length <= maxChars) return <div>{children}</div>;

  const text = isExpanded ? children : children.substring(0, maxChars);
  return (
    <>
      <div>{text}...</div>
      <button onClick={handleExpand}>{isExpanded ? "Less" : "More"}</button>
    </>
  );
};

export default ExpandableText;
