interface expenses {
  id: number;
  desc: string;
  amount: number;
  ctg: string;
}

interface Props {
  items: expenses[];
  onDelete: (id: number) => void;
}

const DisplayItems = ({ items, onDelete }: Props) => {
  if (items.length === 0) return null;

  return (
    <>
      <table className="table table-bordered mt-4">
        <thead className="table-dark">
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {items.map((i) => (
            <tr key={i.id}>
              <td>{i.desc}</td>
              <td>{i.amount}</td>
              <td>{i.ctg}</td>
              <td>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => onDelete(i.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            <td>
              ${items.reduce((acc, item) => item.amount + acc, 0).toFixed(2)}
            </td>
            <td></td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};

export default DisplayItems;
