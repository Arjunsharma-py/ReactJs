import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useState } from "react";

interface Props {
  onLike: () => void;
}

export const Like = ({ onLike }: Props) => {
  const [status, setStatus] = useState(false);

  const toggle = () => {
    setStatus(!status);
    onLike();
  };

  return (
    <>
      {status ? (
        <AiFillHeart color="red" onClick={toggle} />
      ) : (
        <AiOutlineHeart onClick={toggle} />
      )}
    </>
  );
};
