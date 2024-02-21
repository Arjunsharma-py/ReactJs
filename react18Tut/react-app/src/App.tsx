// import { useReducer } from "react";
import "./App.css";
// import LoginStatus from "./components/state-management/LoginStatus";
// import TaskList from "./components/state-management/tasks/TaskList";
// import taskReducer from "./components/state-management/tasks/taskReducer";
import NavBar from "./components/state-management/NavBar";
// import TaskContext from "./components/state-management/tasks/taskContext";
import HomePage from "./components/state-management/HomePage";
// import authReducer from "./components/state-management/reducers/authReducer";
// import AuthContext from "./components/state-management/contexts/authContext";
import Counter from "./components/state-management/counter/Counter";
import { TaskProvider } from "./components/state-management/tasks";
// import PostList from "./components/ReactQuery/PostList";
// import Test from "./components/ReactQuery/Test";
// import { useEffect, useRef, useState } from "react";
// import { Form } from "./components/Form";
// import ProductList from "./components/ProductList";
// import axios, { AxiosError, CanceledError } from "axios";
// import { CanceledError } from "./services/api-client";
// import userService, { User } from "./services/user-service";
// import useUsers from "./hooks/useUsers";
// import ToDoList from "./components/ReactQuery/ToDoList";
// import TodoForm from "./components/ReactQuery/TodoForm";

// import { Alert } from "./components/Alert";
// import Buttons from "./components/Buttons";
// import ListGroup from "./components/ListGroup";
// import Navbar from "./components/Navbar";
// import Cart from "./components/Cart";
// import ExpandableText from "./components/ExpandableText";

// const connect = () => console.log("Connecting");
// const disconnect = () => console.log("disconnecting");

function App() {
  // const { users, error, loading, setUsers, setError } = useUsers();

  // const deleteUser = (user: User) => {
  //   const originalUsers = [...users];
  //   setUsers(users.filter((u) => u.id !== user.id));

  //   userService.delete(user.id).catch((err) => {
  //     setError(err.message);
  //     setUsers(originalUsers);
  //   });
  // };

  // const addUser = () => {
  //   const originalUsers = [...users];
  //   const newUser = { id: 0, name: "Mosh" };
  //   setUsers([newUser, ...users]);

  //   userService
  //     .create(newUser)
  //     .then(({ data: savedUsers }) => setUsers([savedUsers, ...users]))
  //     .catch((err) => {
  //       setError(err.message);
  //       setUsers(originalUsers);
  //     });
  // };

  // const updateUser = (user: User) => {
  //   const originalUsers = [...users];
  //   const updatedUser = { ...user, name: user.name + "!" };
  //   setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));

  //   userService.modify(updatedUser).catch((err) => {
  //     setError(err.message);
  //     setUsers(originalUsers);
  //   });
  // };

  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     try {
  //       //get -> promise -> res/err
  //       const res = await axios.get<User[]>(
  //         "https://jsonplaceholder.typicode.com/users"
  //       );
  //       setUsers(res.data);
  //     } catch (err) {
  //       setError((err as AxiosError).message);
  //     }
  //   };

  //   fetchUsers();
  // }, []);

  // return (
  //   <>
  //     <p className="text-danger">{error}</p>
  //     {loading && <div className="spinner-border"></div>}
  //     <button className="btn btn-primary mb-3" onClick={addUser}>
  //       Add
  //     </button>
  //     <ul className="list-group">
  //       {users.map((user) => (
  //         <li
  //           className="list-group-item d-flex justify-content-between"
  //           key={user.id}
  //         >
  //           {user.name}
  //           <div>
  //             <button
  //               className="btn btn-outline-secondary mx-2"
  //               onClick={() => updateUser(user)}
  //             >
  //               Update
  //             </button>
  //             <button
  //               className="btn btn-outline-danger"
  //               onClick={() => deleteUser(user)}
  //             >
  //               Delete
  //             </button>
  //           </div>
  //         </li>
  //       ))}
  //     </ul>
  //   </>
  // );

  // useEffect(() => {
  //   connect();

  //   return () => disconnect();
  // });

  // return <div></div>;

  // Tutorial for useEffect Hook

  // const ref = useRef<HTMLInputElement>(null);
  // useEffect(() => {
  //   if (ref.current) ref.current.focus();
  // });
  // document.title = "my Effect hook";

  // const [category, setCategory] = useState("");

  // return (
  //   <div>
  //     <ProductList category={category} />
  //     <select
  //       className="form-select"
  //       onChange={(event) => setCategory(event.target.value)}
  //     >
  //       <option value=""></option>
  //       <option value="Clothing">Clothing</option>
  //       <option value="Household">Household</option>
  //     </select>
  //     {/* <input ref={ref} type="text" className="form-control" /> */}
  //   </div>
  // );

  // return <Form></Form>;

  // const item = ["Hi", "Hey", "Hello"];

  // const [alertVisible, setAlertVisibilty] = useState(false);

  // const [cartItems, setCartItems] = useState(["product1", "product2"]);

  // const [game, setGame] = useState({
  //   name: "Spicy Pepproni",
  //   toppings: ["cheese"],
  // });

  // const [cart, setCart] = useState({
  //   discount: 0.1,
  //   items: [
  //     { id: 1, title: "product 1", quantity: 1 },
  //     { id: 2, title: "product 2", quantity: 1 },
  //   ],
  // });

  // const handlegame = () => {
  //   setGame({ ...game, toppings: [...game.toppings, "Mashroom"] });

  //   // setGame({ ...game, player: { ...game.player, name: "Bob" } });
  // };

  // const handleCart = () => {
  //   setCart({
  //     ...cart,
  //     items: cart.items.map((i) =>
  //       i.id === 1 ? { ...i, quantity: i.quantity + 1 } : i
  //     ),
  //   });
  // };

  // return (
  //   <>
  //     <Navbar cartItemsCount={cartItems.length} />
  //     <Cart
  //       cartItems={cartItems}
  //       onClear={() => setCartItems([])}
  //       onRemove={() => {
  //         setCartItems([...cartItems]);
  //         console.log(cartItems);
  //       }}
  //     />
  //     <ListGroup heading="Types of Greetings" items={item} />

  //     <button
  //       className="m-2 btn btn-secondary"
  //       onClick={() => setCartItems([...cartItems])}
  //     >
  //       Add product
  //     </button>

  //     {alertVisible && (
  //       <Alert onClose={() => setAlertVisibilty(false)}>
  //         <h2>Holy Smokes</h2>
  //         <span>You clicked!</span>
  //       </Alert>
  //     )}
  //     <Buttons color="danger" onClick={() => setAlertVisibilty(true)}>
  //       Click it🤪
  //     </Buttons>
  //     <h2>Id: {game.name}</h2>
  //     <h3>Name: {game.toppings.map((t) => " ," + t)}</h3>
  //     <button className="btn btn-primary" onClick={handlegame}>
  //       change
  //     </button>
  //     <div>
  //       {cart.items.map((i) => (
  //         <h2>
  //           Items id: {i.id}, Item name: {i.title} Item quantity: {i.quantity}
  //         </h2>
  //       ))}
  //     </div>
  //     <h3>discount: {cart.discount}</h3>
  //     <button className="btn btn-primary" onClick={handleCart}>
  //       increase
  //     </button>
  //     <ExpandableText maxChars={20}>
  //       Lorem ipsum dolor sit amet consectetur adipisicing elit. At
  //       exercitationem laborum modi rerum eveniet odit quisquam, quis dolores
  //       praesentium mollitia natus tenetur officia! Voluptate, ad delectus
  //       dolores repellendus eveniet, corrupti repellat cupiditate debitis non,
  //       doloremque consequatur? Saepe quisquam cumque corporis vel officia non
  //       ea esse facere fugit sint voluptatum nobis animi officiis alias
  //       doloribus perspiciatis quis nostrum quod commodi nam, praesentium, est
  //       facilis ex? Tenetur aliquid distinctio esse alias fugiat aut iusto
  //       aspernatur qui velit praesentium, magni non! Laborum amet temporibus
  //       reiciendis aperiam doloribus deserunt voluptatum saepe fugit, natus
  //       praesentium pariatur velit repudiandae iure sequi earum quis quo
  //       laboriosam necessitatibus.
  //     </ExpandableText>
  //   </>
  // );

  //  ___________          Part-2               ___________

  // const [tasks, taskDispatch] = useReducer(taskReducer, []);
  // const [user, authDispatch] = useReducer(authReducer, "");

  return (
    // <TodoForm />
    // <ToDoList />
    // <PostList />
    // <Test />
    // <TaskList />
    // <LoginStatus />
    // <AuthContext.Provider value={{ user, dispatch: authDispatch }}>
    // <AuthProvider>
    <TaskProvider>
      <Counter />
      <NavBar />
      <HomePage />
    </TaskProvider>
    // </AuthProvider>
    // </AuthContext.Provider>
  );
}

export default App;
