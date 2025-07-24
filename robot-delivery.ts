interface Robot {
    name: string;
    battery: number;
    toys: number;
}

interface Kid {
    name: string;
    wishlist: number;
    location: string;
}

//create a robot that can deliver packages to kids
const robot1 = { name: "RoboMax", battery: 50, toys: 10 };
const robot2 = { name: "Tinker", battery: 20, toys: 3 };
const robot3 = { name: "Spark", battery: 15, toys: 5 };
//create a kid that can receive packages
const kidsSample = [
    { name: "Alice", wishlist: 4, location: "Jabriya" },
    { name: "Bob", wishlist: 2, location: "Hiteen"},
    { name: "Charlie", wishlist: 0, location: "Kifan"},
    { name: "Diana", wishlist: 3, location: "Salmiya" },
    { name: "Eli", wishlist: 1, location: "Sabah AlSalem"},
  ];
//can robot deliver packages to kids? (delivery requires 5 batteries)
function canDeliverToKids(robot: Robot, kids: Kid[]) {
    return robot.battery >= 5 * kids.length;
}
console.log(canDeliverToKids(robot1, kidsSample));
console.log(canDeliverToKids(robot2, kidsSample));
console.log(canDeliverToKids(robot3, kidsSample));
//deliver toys
function deliverToKids(robot: Robot, kids: Kid[]) {
    if (canDeliverToKids(robot, kids)) {
        robot.battery -= 5 * kids.length;
        robot.toys -= kids.reduce((total: number, kid: Kid) => total + kid.wishlist, 0);
    }
}
deliverToKids(robot1, kidsSample);
console.log(robot1);
//deliver to all kids 
function chargeRobot(robot: Robot, battery: number) {
    robot.battery += battery;
    console.log("Robot charged");
}
function deliverToAllKids(robot: Robot, kids: Kid[]) {
    if (canDeliverToKids(robot, kids)) {
        robot.battery -= 5 * kids.length;
        robot.toys -= kids.reduce((total: number, kid: Kid) => total + kid.wishlist, 0);
    } else {
        chargeRobot(robot, 5 * kids.length);
    }
}
deliverToAllKids(robot1, kidsSample);
console.log(robot1);
deliverToAllKids(robot2, kidsSample);
console.log(robot2);
deliverToAllKids(robot3, kidsSample);
console.log(robot3);
//Get waiting kids
function getWaitingKids(kids: Kid[]) {
    return kids.filter((kid: Kid) => kid.wishlist > 0);
}
console.log(getWaitingKids(kidsSample));
//Get total toys needed for everyone
function getTotalToysNeeded(kids: Kid[]) {
    return kids.reduce((total: number, kid: Kid) => total + kid.wishlist, 0);
}
console.log(getTotalToysNeeded(kidsSample));
//Deliver based on location
function deliverToLocation(robot: Robot, kids: Kid[], location: string) {
    const kidsAtLocation = kids.filter((kid: Kid) => kid.location === location);
    deliverToKids(robot, kidsAtLocation);
}
deliverToLocation(robot1, kidsSample, "Jabriya");
console.log(robot1);
deliverToLocation(robot2, kidsSample, "Hiteen");
console.log(robot2);

