function randomName() {
  const names = [
    "George",
    "Rosa",
    "Alexander",
    "Amelia",
    "Winston",
    "Cleopatra",
    "Abraham",
    "Marilyn",
    "Nelson",
    "Leonardo",
    "Joan",
    "Albert",
    "Marie",
    "Martin",
    "Elizabeth",
    "Thomas",
    "Florence",
    "William",
    "Mahatma",
    "Genghis",
  ];

  const colors = [
    "Green",
    "Yellow",
    "Red",
    "Orange",
    "Blue",
    "Purple",
    "Violet",
    "Gold",
    "White",
    "Turquoise",
    "Teal",
    "Coral",
    "Magenta",
    "Maroon",
    "Lavender",
    "Navy",
    "Olive",
    "Plum",
    "Salmon",
    "Tan",
    "Peach",
    "Sky blue",
    "Mint green",
    "Rose",
    "Lilac",
    "Mustard",
    "Orchid",
    "Slate gray",
  ];
  const name = names[Math.floor(Math.random() * names.length)];
  const color = colors[Math.floor(Math.random() * colors.length)];
  return name + color;
}
export {randomName};