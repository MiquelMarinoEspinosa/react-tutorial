export default function Fruit({ name, price, emoji }) {
  return (
    <li key={name}>
      {emoji} {name} ${price}
    </li>
  );
}
