const List = [ // Our list.
    "Another",
    "Javascript",
    "Tutorial"
];

let count = 0; // Current count.

List.forEach(Item => { // For each statement.
    console.log("[" + count + "] => " + Item); // Format output.
});

if (count == List.length) { // If the last item then.
    console.log("\nWe have listed a total of " + count + " names.");
}