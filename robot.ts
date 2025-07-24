interface rob {
  rname: string;
  battery: number;
  toys: number;
}
interface kids {
  kidName: string;
  wishlist: number;
  location: string;
}

const rob1: rob = {
  rname: "Robmax",
  battery: 50,
  toys: 10,
};

const rob2: rob = {
  rname: "Tanker",
  battery: 20,
  toys: 3,
};

const rob3: rob = {
  rname: "Spark",
  battery: 15,
  toys: 5,
};
const kids: kids[] = [
  {
    kidName: "Alice",
    wishlist: 4,
    location: "Jabriya",
  },
  {
    kidName: "Bob",
    wishlist: 2,
    location: "Hiteen",
  },
  {
    kidName: "Charlie",
    wishlist: 0,
    location: "Kifan",
  },
  {
    kidName: "Diana",
    wishlist: 3,
    location: "Salmiya",
  },
  {
    kidName: "Eli",
    wishlist: 1,
    location: "Sabah AlSalem",
  },
];
function canTheRobotDeliver(rob: rob) {
  if (rob.battery <= 5) {
    return "the robot can't deliver";
  } else {
    rob.battery = Math.floor(rob.battery / rob.toys);
  }

  return rob.battery;
}

console.log(canTheRobotDeliver(rob2));

function deliverToys(robToys: rob, kidWishlist: kids) {
  robToys.toys = robToys.toys - kidWishlist.wishlist;
  console.log(
    `${robToys.rname} deliver ${kidWishlist.wishlist} toys to ${kidWishlist.kidName}`
  );
  return robToys;
}
console.log(deliverToys(rob1, kids[0]));
function deliverToAllKids(robot: rob, kidsList: kids[]): number {
  for (const kid of kidsList) {
    if (kid.wishlist === 0) {
      console.log(`${kid.kidName} has nothing in their wishlist.`);
      continue;
    }

    if (robot.toys >= kid.wishlist) {
      console.log(
        `${robot.rname} delivered ${kid.wishlist} toys to ${kid.kidName}.`
      );
      robot.toys -= kid.wishlist;
      kid.wishlist = 0;
    } else {
      console.log(
        `${robot.rname} delivered ${robot.toys} toys to ${kid.kidName}, ${
          kid.wishlist - robot.toys
        } still needed.`
      );
      kid.wishlist -= robot.toys;
      robot.toys = 0;
      break;
    }
  }

  let totalLeftInWishlists = 0;
  for (const kid of kidsList) {
    totalLeftInWishlists += kid.wishlist;
  }

  console.log(`${robot.rname} has ${robot.toys} toys left.`);
  console.log(`Toys still needed in wishlists: `);
  return totalLeftInWishlists;
}

function TotalToys(kidToys: kids[]): number {
  console.log("Total toys are :");
  return kidToys.reduce((sum, kid) => sum + kid.wishlist, 0);
}

console.log(TotalToys(kids));

function deliverBasedOnLocation(
  rob: rob,
  kid: kids[],
  location: string
): number {
  const kidsInLocation = kid.filter((k) => k.location === location);
  const tlist = kidsInLocation.reduce((sum, k) => sum + k.wishlist, 0);
  for (const k of kidsInLocation) {
    if (k.wishlist === 0) {
      console.log(`${k.kidName} dont want any toys`);
    } else {
      console.log(`${rob.rname} delivered :`);
      rob.toys -= k.wishlist;
      k.wishlist = 0;
    }
  }

  return tlist;
}

console.log(deliverBasedOnLocation(rob1, kids, "Sabah AlSalem"));
