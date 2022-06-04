const menu = () => {
    const lst = document.createElement('ul');
    const item1 = document.createElement('li');
    item1.innerHTML = 'fish cakes.';
    const item2 = document.createElement('li');
    item2.innerHTML = 'fish cakes and mayo.';
    const item3 = document.createElement('li');
    item3.innerHTML = 'fish cakes and ketchup.';
    lst.appendChild(item1);
    lst.appendChild(item2);
    lst.appendChild(item3);
    return lst;
}

export {menu};