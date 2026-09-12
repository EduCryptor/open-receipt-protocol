const items = [
  ["Whole milk", 3.46],
  ["Bananas", 1.37],
  ["Laundry detergent", 14.97],
  ["Motor oil", 27.48],
  ["Toothpaste", 4.96],
];

const money = value => `$${value.toFixed(2)}`;
const total = items.reduce((sum, [, price]) => sum + price, 0);

document.querySelector("#basket").innerHTML = items
  .map(([name, price]) => `<tr><td>${name}</td><td>${money(price)}</td></tr>`)
  .join("");
document.querySelector("#total").textContent = money(total);

document.querySelector("#send").addEventListener("click", () => {
  const token = document.querySelector("#token").value.trim();
  const status = document.querySelector("#status");

  if (!/^https:\/\/[^/]+\/r\/[A-Za-z0-9_-]+$/.test(token)) {
    status.textContent = "Delivery failed: this is not a valid demonstration token.";
    return;
  }

  const lines = [
    "DEMO GROCERY",
    new Date().toLocaleString(),
    "",
    ...items.map(([name, price]) => `${name.padEnd(24)} ${money(price).padStart(7)}`),
    "",
    `${"TOTAL".padEnd(24)} ${money(total).padStart(7)}`,
  ];

  document.querySelector("#receipt").textContent = lines.join("\n");
  status.textContent = "Receipt delivered to the simulated destination.";
});
