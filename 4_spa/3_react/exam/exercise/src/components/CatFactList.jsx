import { CatFactCard } from "./CatFactCard";

export function CatFactList(props) {
  const catList = props.items; // das Attribut ist der prop, der übergeben wird
  return (
    <ul>
      {catList.map((fact) => {
        return (
          <CatFactCard
            key={fact._id}
            text={fact.text}
            user={fact.user}
            createdAt={fact.createdAt}
          />
        );
      })}
    </ul>
  );
}

// export default CatFactList;
