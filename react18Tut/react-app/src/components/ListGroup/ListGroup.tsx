import style from "./ListGroup.module.css";
import styled from "styled-components";
import { Like } from "../Like";

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  padding: 5px 0;
`;

interface Props {
  heading: String;
  items: string[];
}

interface ListItemProps {
  active: string;
}

function ListGroup({ heading, items }: Props) {
  return (
    <>
      <h1>{heading}</h1>
      <List className={[style["list-group"], style["container"]].join(" ")}>
        {items.map((item) => (
          <ListItem key={item}>
            {item}
            <Like onLike={() => console.log("Clicked")} />
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ListGroup;
