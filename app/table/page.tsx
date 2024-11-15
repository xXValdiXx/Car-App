type Car = {
  id: string;
  model: string;
  color: string;
  owner: string;
  year: number;
  services: string[];
};

export default async function Page() {
  const data = await fetch('https://api-nomxiko2oa-uc.a.run.app/cars')
  const coches = await data.json()

  console.log(coches);
  return (
    <ul>
      {coches.map((coche: Car) => (
        <li key={coche.id}>
          <p><strong>Model:</strong> {coche.model}</p>
          <p><strong>Color:</strong> {coche.color}</p>
          <p><strong>Owner:</strong> {coche.owner}</p>
          <p><strong>Year:</strong> {coche.year}</p>
          <p><strong>Services:</strong> {coche.services}</p>
        </li>
      ))}
    </ul>
  )
}
