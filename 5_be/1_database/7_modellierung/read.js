import { connect } from "./connect.js";
import { Event } from "./models/Event.js";
import "./models/Organizer.js"; // Organizer muss importiert werden

async function main() {
  await connect();
  // const organizer = await Organizer.findOne().populate("events");
  // console.log({ organizer });

  const events = await Event.find().populate("organizerId");
  console.log({ events });
}

main().then(() => process.exit(0));
