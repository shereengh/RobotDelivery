type Robot = {
name: string;
battery: number;
toys: number;
};

type Kid = {
name: string;
wishlist: number;
location: string;
};

const robot1: Robot = { name: "RoboMax", battery: 50, toys: 10 };
const robot2: Robot = { name: "Tinker", battery: 20, toys: 3 };
const robot3: Robot = { name: "Spark", battery: 15, toys: 5 };

const kidsSample: Kid[] = [
{ name: "Alice", wishlist: 4, location: "Jabriya" },
{ name: "Bob", wishlist: 2, location: "Hiteen" },
{ name: "Charlie", wishlist: 0, location: "Kifan" },
{ name: "Diana", wishlist: 3, location: "Salmiya" },
{ name: "Eli", wishlist: 1, location: "Sabah AlSalem" },
];

function canDeliver(robot: Robot): boolean {
return robot.battery >= 5 && robot.toys > 0;
}

function deliverToys(robot: Robot, kids: Kid[]): void {
for (const kid of kids) {
if (!canDeliver(robot)) break;
if (kid.wishlist > 0) {
const toysToGive = Math.min(robot.toys, kid.wishlist);
robot.toys -= toysToGive;
kid.wishlist -= toysToGive;
robot.battery -= 5;
}
}
}
function getWaitingKids(kids: Kid[]): Kid[] {
return kids.filter((kid) => kid.wishlist > 0);
}
function getTotalToysNeeded(kids: Kid[]): number {
return kids.reduce((sum, kid) => sum + kid.wishlist, 0);
}

function deliverByLocation(robot: Robot, kids: Kid[], location: string): void {
const localKids = kids.filter((kid) => kid.location === location);
deliverToys(robot, localKids);
}

```

```
