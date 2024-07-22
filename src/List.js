import ListItem from "./ListItem";
function List() {
  return (
    <div>
      <ul className="List list-group h-100">
        <ListItem caption="sa" />
        <ListItem caption="as" />
        <ListItem caption="mrb" />
      </ul>
    </div>
  );
}

export default List;
