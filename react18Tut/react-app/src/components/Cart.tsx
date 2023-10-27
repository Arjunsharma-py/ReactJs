interface Props {
  cartItems: string[];
  onClear: () => void;
  onRemove: () => void;
}

const Cart = ({ cartItems, onClear, onRemove }: Props) => {
  return (
    <>
      <div>Cart Items</div>
      <ul>
        {cartItems.map((items) => (
          <li key={items}>{items}</li>
        ))}
      </ul>
      <button className="btn btn-danger" onClick={onRemove}>
        Remove Item
      </button>
      <button className="btn btn-warning" onClick={onClear}>
        Clear
      </button>
    </>
  );
};

export default Cart;
