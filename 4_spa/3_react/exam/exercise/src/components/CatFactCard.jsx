export function CatFactCard({ text, createdAt, user }) {
  return (
    <li>
      <div>
        <h2>{text}</h2>
        <h4>{user}</h4>
        <p>{createdAt}</p>
      </div>
    </li>
  );
}
