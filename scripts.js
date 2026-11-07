
// Homepage: Add current date and time to the footer
function addLoadMessage() {
    var footer = document.querySelector("footer");
    var newParagraph = document.createElement("p");
    var currentDate = new Date();

    var message = document.createTextNode(
        "Page loaded on: " + currentDate
    );

    newParagraph.appendChild(message);
    footer.appendChild(newParagraph);
}


// Projects page: Show or hide project descriptions
function toggleDescription(projectId) {
    var description = document.getElementById(projectId);

    if (description.style.display === "none") {
        description.style.display = "block";
    } else {
        description.style.display = "none";
    }
}


// Contact page: Validate the name and email fields
function validateContactForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    if (name === "" || email === "") {
        alert("Please fill out all required fields.");
        return false;
    } else {
        return true;
    }
}


// CV page: Change blockquote style when mouse moves over it
var quote = document.getElementById("cvQuote");

if (quote !== null) {

    quote.addEventListener("mouseover", function() {
        quote.style.backgroundColor = "#eee8f7";
        quote.style.fontStyle = "italic";
    });

    quote.addEventListener("mouseout", function() {
        quote.style.backgroundColor = "";
        quote.style.fontStyle = "";
    });

}
