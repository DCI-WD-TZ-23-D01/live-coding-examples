import { model, Schema } from "mongoose";

// Erstellen ein Blueprint
const SpeciesDiscoverySchema = new Schema({
  kind: {
    type: String,
    required: true,
  },
  discoveredAt: {
    type: Date,
    required: true,
  },
  note: String,
});

// Fabrik-Muster/Schnittstelle zur Collection
export const SpeciesDiscovery = model(
  "species-discovery", // Name der Collection in MongoDB
  SpeciesDiscoverySchema // Blueprint der Modelle
);

// const s1 = new SpeciesDiscovery() // Instanz der Klasse/Modell von der Collection
