function render() {
    const webContent = document.getElementById("content");

    const webHeader = document.createElement("div");
    webHeader.setAttribute("class", "header");

    const headerTitle = document.createElement("h1");
    headerTitle.textContent = "This is the Restaurant Header";

    webHeader.appendChild(headerTitle);

    const webSidebar = document.createElement("div");
    webSidebar.setAttribute("class", "sidebar");

    const sidebarList = document.createElement("ul");
    sidebarList.setAttribute("class", "sidebar");

    const listItemOne = document.createElement("li");
    listItemOne.textContent = "Stuff";
    const listItemTwo = document.createElement("li");
    listItemTwo.textContent = "More Stuff";
    const listItemThree = document.createElement("li");
    listItemThree.textContent = "Even More Stuff";

    sidebarList.appendChild(listItemOne);
    sidebarList.appendChild(listItemTwo);
    sidebarList.appendChild(listItemThree);

    webContent.appendChild(webHeader);
    webContent.appendChild(sidebarList);

    return {
        webContent
    }
}

document.body.appendChild(render());