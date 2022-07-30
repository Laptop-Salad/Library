let bookArr = [];
let formHidden = false;

function toggleForm() {
    let elem = document.getElementById("bookFormContainer");

    if (formHidden) {
        elem.style.display = "block";
        formHidden = false;

    } else {
        elem.style.display = "none";
        formHidden = true;
    }
}

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function deleteBook(elem) {
    let parent = elem.parentNode.id
    bookArr.splice(parent, 1);
    elem.remove();
    console.log(bookArr);
}

function addBook() {
    const form = document.getElementById("bookForm");

    const title = form.elements["title"].value;
    const author = form.elements["author"].value;
    const pages = form.elements["pages"].value;
    const hasRead = form.elements["hasRead"].checked;

    // Add book to array
    bookArr.push(new Book(title, author, pages, hasRead));

    // Get area to place new book
    const bookArea = document.getElementById("bookArea");

    // Create and add book container
    const container = document.createElement("div");
    container.setAttribute("id", bookArr.lentgth-1);
    container.classList.add("book");

    bookArea.appendChild(container);

    const deleteBtn = document.createElement("img");
    container.setAttribute("onclick", "deleteBook(this)");
    deleteBtn.src = "assets/delete.png";
    deleteBtn.classList.add("delete-button");
    container.appendChild(deleteBtn);

    // Create and add text
    const text = document.createElement("p");
    text.innerText = title + " by " + author + " (" + pages + " pages)";
    container.appendChild(text);

    // Create and add hasRead checbox
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.checked = hasRead;
    container.appendChild(checkBox);

    form.reset();
    toggleForm();
    return false;
}