// Sample Robots
const robot1 = { name: "RoboMax", battery: 50, toys: 10 };
const robot2 = { name: "Tinker", battery: 20, toys: 3 };
const robot3 = { name: "Spark", battery: 2, toys: 5 };

const myRobot: Robot[] = [robot1, robot2, robot3];

// Sample Kids
const kidsSample: Kids[] = [
  { name: "Alice", wishlist: 4, location: "Jabriya" },
  { name: "Bob", wishlist: 2, location: "Hiteen" },
  { name: "Charlie", wishlist: 0, location: "Kifan" },
  { name: "Diana", wishlist: 3, location: "Salmiya" },
  { name: "Eli", wishlist: 1, location: "Sabah AlSalem" },
];

interface Robot {
  name: string;
  battery: number;
  toys: number;
}

interface Kids {
  name: string;
  wishlist: number;
  location: string;
}

function createRobot(name: string, battery: number, toys: number): Robot {
  const createdRobot: Robot = {
    name,
    battery,
    toys,
  };
  return createdRobot;
}

function createKids(name: string, wishlist: number, location: string): Kids {
  const createdKid: Kids = {
    name: name,
    wishlist: wishlist,
    location: location,
  };
  return createdKid;
}

function canRobotDeliver(robot: Robot): boolean {
  if (robot.battery >= 5) {
    return true;
  }
  return false;
}

function deliverToys(robot: Robot, kids: Kids) {
  //function* + toys
  //   if (robot.battery >= 5) {
  //     //Can Deliver
  //     robot.battery = robot.battery - 5;
  //     kids.wishlist = kids.wishlist - robot.toys;
  //   }
  if (canRobotDeliver(robot)) {
    robot.battery = robot.battery - 5;
    kids.wishlist = kids.wishlist - robot.toys;
    console.log(
      `Order has been delivered!, please check the updated wishlist ${kids.wishlist} `
    );
  } else {
    console.log(`Please recharge ${robot.name} 🥹`);
  }
}
//console.log(deliverToys(robot1, kidsSample[0]));

function deliverToAllKids(robot: Robot, kids: Kids[]) {
  console.log(robot);
  console.log(kids);
  if (robot.battery < kids.length * 5) {
    console.log(`Please recharge ${robot.name} 🥹`);
  } else {
    let iHaveWishList = kids.filter((kid) => kid.wishlist > 0);
    if (iHaveWishList) {
      robot.battery = robot.battery - kids.length * 5;
      iHaveWishList.map((kid) => (kid.wishlist = kid.wishlist - robot.toys));
    }
    console.log(iHaveWishList);
    console.log(kids);
  }

  //   console.log(robot);
  //   if (robot.battery >= kids.length * 5) {
  //     //Can Deliver-> check WishList
  //     robot.battery = robot.battery - kids.length * 5;
  //     kids.map((kid) => (kid.wishlist = kid.wishlist - robot.toys));
  //     console.log(robot);
  //     console.log(kids);
  //   } else {
  //     console.log(`Please recharge ${robot.name} 🥹`);
  //   }
}
deliverToAllKids(robot1, kidsSample);

function getWaitingKids(kids: Kids[]): Kids[] {
  return kids.filter((kid) => kid.wishlist != 0);
}

function getTotalToys(robot: Robot): number {
  return robot.toys;
}
function getTotalAllToys(robot: Robot[]): number {
  let total = 0;
  robot.forEach((robot) => (total = total + robot.toys));
  return total;
}

function getTotalToysStillNeeded(kids: Kids[]): number {
  let total = 0;
  kids
    .filter((kid) => kid.wishlist != 0)
    .forEach((kid) => (total = total + kid.wishlist));
  return total;
}

function deliverBasedOnLocation(robot: Robot, kids: Kids[], location: string) {
  //Capacity
  const iFound = kids.find((kid) => kid.location === location);
  if (iFound) {
    deliverToys(robot, iFound);
    console.log(`Toys Deliverd to ${iFound.name}`);
  } else {
    console.log(`Please check andre-enter the location ${location}`);
  }
}
console.log(deliverBasedOnLocation(robot3, kidsSample, "Jabriya"));
