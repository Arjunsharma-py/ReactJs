interface Props {
  items: number;
}

const Cart = ({ items }: Props) => {
  return (
    <>
      <div>Cart items: {items}</div>
    </>
  );
};

export default Cart;
