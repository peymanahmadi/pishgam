import Card from "../../shared/components/FormElements/Card";
import ThingItem from "./ThingItem";
import styles from "./ThingsList.module.scss";

const ThingsList = (props) => {
  if (props.items.length === 0) {
    return (
      <Card>
        <h2>No things found!</h2>
      </Card>
    );
  }
  return (
    <ul className={styles.container}>
      {props.items.map((item) => (
        <ThingItem
          key={item.id}
          id={item.id}
          title={item.name}
          value={item.value}
        />
      ))}
    </ul>
  );
};

export default ThingsList;
