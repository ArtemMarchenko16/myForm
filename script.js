let products = [
    { name: "Batteries Duracell", price: "1.55 $", description: "Size - AAA Quantity in packing piece - 4 Country of origin of goods - Belgium Brand registration country - Belgium Warranty - 14 days", id: 999 },
    { name: "Microphone 2E Gaming Kodama Kit Black", price: "64.99 $", description: "Purpose - Vocal, For computer View - Kits Connectors - 3.5 mm mini-jack Type - Condenser Directionality - Unidirectional Sensitivity - 36 dB +/- 2 dB Weight - 307 Frequency range - 18 - 21000 Hz Cord length - 2.9 m Power - USB Dimensions - 410 x 120 x 290 mm Resistance - 200 Ohm Accessories - USB microphone, adjustable stand, table clamp, USB cable, removable pop filter (diameter 13 cm),anti-vibration microphone shock absorber mount, removable foam filter for microphone Black color Country of origin of goods - China Brand registration country - Ukraine Warranty - 12 months", id: 998 },
    { name: "Instant coffee Jacobs Monarch 500 g", price: "11.99 $", description: "Type of coffee - Instant Weight - 500 g Type of coffee-sublimated Coffee Packaging Foil Bag Quantity in packing, piece - 1Shelf life - 24 months Taste characteristic - With sourness Brand registration country - Ukraine Country of manufacture - Ukraine", id: 997 },
    { name: "Gas hob Kemper piezo 1900 W", price: "70.94 $", description: "Type - Tiles Fuel consumption - 138 gh Temperature controller - Yes Fuel - Gas Color - Silver Number of burners - 1 Dimensions - 34 x 29 x 12.5 cm Features - Piezo ignition Weight - 2.2 kg Power - 1900 W Type of connection - collet Compatible tank - Kemper 577  Country of origin of goods - Italy Package dimensions - 13 x 36 x 31 c Brand registration country - Italy Warranty - 36 months", id: 996 }
];

console.log(products[0]);
console.log(products[1]);
console.log(products[2]);
console.log(products[3]);



let settingsTable = document.getElementById("products-table-body");
for (let product in products) {
    let row = settingsTable.insertRow(); //створення рядк(нового)
    let nameCell = row.insertCell(); //створення нової клітини(ячейки)
    nameCell.innerText = products[product]["name"]; //додаємо текст з назвою продукта
    let price = row.insertCell();
    price.innerText = products[product]["price"];
}