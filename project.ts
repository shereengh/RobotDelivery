// Sample Robots

type Robot = {
  name: string;
  battery: number;
  toys: number;
};

const robot1: Robot = { name: "RoboMax", battery: 50, toys: 10 };
const robot2: Robot = { name: "Tinker", battery: 20, toys: 3 };
const robot3: Robot = { name: "Spark", battery: 15, toys: 5 };

type Kid = {
  name: string;
  wishlist: number;
  location: string;
};

// Sample Kids
const kidsSample: Kid[] = [
  { name: "Alice", wishlist: 4, location: "Jabriya" },
  { name: "Bob", wishlist: 2, location: "Hiteen" },
  { name: "Charlie", wishlist: 0, location: "Kifan" },
  { name: "Diana", wishlist: 3, location: "Salmiya" },
  { name: "Eli", wishlist: 1, location: "Sabah AlSalem" },
];

//create kid

function createKid(name: string, wishlist: number, location: string) {
  return {
    name: name,
    wishlist: wishlist,
    location: location,
  };
}

//create robot

function createRobot(name: string, battery: number, toys: number) {
  return {
    name: name,
    battery: battery,
    toys: toys,
  };
}

//can robot deliver?

function canDeliver(robot: Robot) {
  if (robot.battery >= 5) {
    return `${robot.name} is ready to deliver!`;
  } else {
    return `Sorry kids, ${robot.name} ran outta batteries. be patient or cry about it, spoiled brats.`;
  }
}

//Deliver toys (to a single kid)

function deliverToys(
  robot: Robot,
  kids: Kid[],
  name: string,
  wantsToys: number
) {
  let foundKid = kids.find((kid) => {
    return kid.name === name;
  });

  if (robot.toys >= wantsToys && foundKid && robot.battery >= 5) {
    robot.battery -= 5;
    robot.toys -= wantsToys;
    foundKid.wishlist -= wantsToys;
    console.log(
      `${robot.name} status after delivery: battery = ${robot.battery} toys = ${robot.toys}`
    );
    console.log(
      `${foundKid?.name} status after receivin delivery: wishlist = ${foundKid?.wishlist}`
    );
  } else {
    return "Sorry kid. Ur askin for too much. maybe wait for a restock or cry urself to sleep idk.";
  }
}
// deliverToys(robot1, kidsSample, "Alice", 3);

//Delvier toys (to all kids)

function deliverToAllKids(robot: Robot, kids: Kid[], wantsToys: number) {
  kids.forEach((kid) => {
    if (
      robot.battery >= 5 &&
      robot.toys >= wantsToys &&
      kid.wishlist >= wantsToys
    ) {
      robot.battery -= 5;
      robot.toys -= wantsToys;
      kid.wishlist -= wantsToys;
      console.log(
        `${robot.name} status after deliver: battery = ${robot.battery}, toys = ${robot.toys}`
      );
      console.log(
        `${kid.name} status after receivin deliver: wishlist = ${kid.wishlist}`
      );
    } else {
      console.log(`i hate u ${kid.name}.`);
    }
  });
}

// deliverToAllKids(robot1, kidsSample, 5);

//Get waiting kids

function getWaitingKids(kids: Kid[]): Kid[] {
  return kids.filter((kid) => kid.wishlist !== 0);
}

// console.log(getWaitingKids(kidsSample));

//Get total toys needed for everyone

function totalToysNeeded(kids: Kid[]) {
  return kids.reduce((acc, curr) => {
    return acc + curr.wishlist;
  }, 0);
}

// console.log(totalToysNeeded(kidsSample));

//Deliver based on location

function deliverBasedOnLoc(kids: Kid[], location: string) {
  let foundKid = kids.find((kid) => {
    return kid.location === location;
  });

  if (foundKid) {
    deliverToys(robot1, kidsSample, foundKid?.name, 3);
  }
}

deliverBasedOnLoc(kidsSample, "Jabriya");
