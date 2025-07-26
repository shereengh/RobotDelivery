type Robot = {
  name: string;
  battery: number;
  toys: number;
};

type Kid = {
  name: string;
  wishlist: number;
  location: string;
  delivered?: boolean; // Indicates if delivery was completed
};

// Robots
const robot1: Robot = { name: "RoboMax", battery: 50, toys: 10 };
const robot2: Robot = { name: "Tinker", battery: 20, toys: 3 };
const robot3: Robot = { name: "Spark", battery: 15, toys: 5 };

// Kids
const kidsSample: Kid[] = [
  { name: "Alice", wishlist: 4, location: "Jabriya" },
  { name: "Bob", wishlist: 2, location: "Hiteen" },
  { name: "Charlie", wishlist: 0, location: "Kifan" },
  { name: "Diana", wishlist: 3, location: "Salmiya" },
  { name: "Eli", wishlist: 1, location: "Sabah AlSalem" },
];

// Check if a robot can deliver (requires at least 5 battery)
function canDeliver(robot: Robot): boolean {
  return robot.battery >= 5;
}

// Deliver to a single kid
function deliverToKid(robot: Robot, kid: Kid): boolean {
  if (!canDeliver(robot)) {
    console.log(`${robot.name} doesn't have enough battery to deliver.`);
    return false;
  }
  if (robot.toys < kid.wishlist) {
    console.log(
      `${robot.name} doesn't have enough toys to deliver to ${kid.name}.`
    );
    return false;
  }

  robot.battery -= 5;
  robot.toys -= kid.wishlist;
  kid.delivered = true;

  console.log(`${robot.name} delivered ${kid.wishlist} toys to ${kid.name}.`);
  return true;
}

// Deliver to all kids until robot runs out of battery or toys
function deliverToAllKids(robot: Robot, kids: Kid[]) {
  for (const kid of kids) {
    if (!kid.delivered && kid.wishlist > 0) {
      const success = deliverToKid(robot, kid);
      if (!success) break;
    }
  }
}

// Get list of kids still waiting for delivery
function getWaitingKids(kids: Kid[]): Kid[] {
  return kids.filter((kid) => !kid.delivered && kid.wishlist > 0);
}

// Get total number of toys needed by all kids
function getTotalToysNeeded(kids: Kid[]): number {
  return kids.reduce((sum, kid) => sum + kid.wishlist, 0);
}

// Deliver to kids in a specific location
function deliverByLocation(robot: Robot, kids: Kid[], location: string) {
  const localKids = kids.filter((k) => k.location === location && !k.delivered);
  for (const kid of localKids) {
    if (!deliverToKid(robot, kid)) break;
  }
}

console.log("\n Delivering to all kids using RoboMax:");
deliverToAllKids(robot1, kidsSample);

console.log("\n Kids who didn't receive toys:");
console.log(getWaitingKids(kidsSample));

console.log("\n Total number of toys needed:");
console.log(getTotalToysNeeded(kidsSample), "toys");

console.log("\n Delivering by location (Tinker delivers to Hiteen):");
deliverByLocation(robot2, kidsSample, "Hiteen");
