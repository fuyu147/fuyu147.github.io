async function loadTemplates() {
    const res = await fetch("template.html");
    const html = await res.text();

    // Create a temporary document to extract templates
    const tmp = document.createElement("div");
    tmp.innerHTML = html;

    // Move template elements into this document
    for (const tmpl of tmp.querySelectorAll("template")) {
        document.body.appendChild(tmpl);
    }
}

loadTemplates().then(() => {
    const container = document.getElementById("container");

    // Use template
    const card = document.getElementById("card").content.cloneNode(true);
    container.appendChild(card);
});
