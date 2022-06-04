const header = () => {
    const header = document.createElement('div');
    header.classList.add('header');
    const title = document.createElement('h1');
    title.innerHTML = "Welcome to the Restaurant.";
    const blurb = document.createElement('p');
    blurb.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";
    header.appendChild(title);
    header.appendChild(blurb);
    return header;
};

export {header};