interface Props {
  cartItemsCount: number;
}

const Navbar = ({ cartItemsCount }: Props) => {
  return (
    <>
      <div style={{ backgroundColor: "#2ea38b" }}>Navbar: {cartItemsCount}</div>
    </>
  );
};

export default Navbar;
