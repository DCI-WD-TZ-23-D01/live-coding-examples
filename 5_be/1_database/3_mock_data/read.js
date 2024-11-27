import { connect } from "./connect.js";
import { SpeciesDiscovery } from "./models/SpeciesDiscovery.js";

// main function => Hauptaufgabe des Scripts
async function main() {
  await connect();
  {
    const result = await SpeciesDiscovery.find({
      kind: "flamingo",
    }).countDocuments();
    console.log("Amount of flamingos:", result);
  }
  {
    const result = await SpeciesDiscovery.find({
      discoveredAt: {
        $lt: new Date(2024, 3, 10),
      },
    }).countDocuments();
    console.log("Discovered before 2024-04-10:", result);
  }
  {
    const result = await SpeciesDiscovery.find({
      discoveredAt: {
        $lt: new Date("2024-05-01"),
        $gt: new Date("2024-03-31"),
      },
    }).countDocuments();
    console.log("Discovered 2024-04:", result);
  }
  {
    const result = await SpeciesDiscovery.find({
      kind: {
        $regex: /f$/, // Regex Suche möglich
      },
    }).countDocuments();
    console.log("Discovered with f:", result);
  }
}

main()
  .then(() => process.exit(0))
  .catch(console.error);
