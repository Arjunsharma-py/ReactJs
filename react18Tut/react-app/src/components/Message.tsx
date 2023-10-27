let count = 0;

export const Message = () => {
  console.log(count);
  count++;
  console.log(count);
  return <div>Message {count}</div>;
};
