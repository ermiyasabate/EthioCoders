const donuts = ["jelly donut", "chocolate donut", "glazed donut"];

for (let i = 0; i < donuts.length; i++) {
    donuts[i] += " hole";
    donuts[i] = donuts[i].toUpperCase();
}

console.log(donuts)