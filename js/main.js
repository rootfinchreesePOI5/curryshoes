let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.nav-bar');
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ' ]').classList.add('active')
            })
        }
    })
}



menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}




var items = [
    { img: 'images/1.jpg', name: 'Curry Shoes 1', price: '150$' , code: 'a2b3c' },
    { img: 'images/2.jpg', name: 'Curry Shoes 2', price: '180$' , code: 'a2b4c' },
    { img: 'images/3.jpg', name: 'Curry Shoes 3', price: '120$' , code: 'a2b5c'},
    { img: 'images/4.jpg', name: 'Curry Shoes 4', price: '140$' , code: 'a2b6c' },
    { img: 'images/5.jpg', name: 'Curry Shoes 5', price: '130$' , code: 'a2b7c' },
    { img: 'images/6.jpg', name: 'Curry Shoes 6', price: '110$' , code: 'a2b8c' },
    { img: 'images/7.jpg', name: 'Curry Shoes 7', price: '160$' , code: 'a2b9c' },
    { img: 'images/8.jpg', name: 'Curry Shoes 8', price: '170$' , code: 'a2c3c' },
    { img: 'images/9.jpg', name: 'Curry Shoes 9', price: '140$' , code: 'a2d3c' },
    { img: 'images/10.jpg', name: 'Curry Shoes 10', price: '150$' , code: 'd4e5f' },
    { img: 'images/11.jpg', name: 'Curry Shoes 11', price: '155$' , code: 'd4e6f' },
    { img: 'images/12.jpg', name: 'Curry Shoes 12', price: '145$' ,  code: 'd4e7f' },
    { img: 'images/13.jpg', name: 'Curry Shoes 13', price: '135$'  , code: 'd4e8f'},
    { img: 'images/14.jpg', name: 'Curry Shoes 14', price: '125$' , code: 'd4e9f' },
    { img: 'images/15.jpg', name: 'Curry Shoes 15', price: '160$', code: 'd4f5f' },
    { img: 'images/16.jpg', name: 'Curry Shoes 16', price: '170$', code: 'd4g5f' },
    { img: 'images/17.jpg', name: 'Curry Shoes 17', price: '180$', code: 'd4h5f' },
    { img: 'images/18.jpg', name: 'Curry Shoes 18', price: '190$', code: 'd4i5f' },
    { img: 'images/19.jpg', name: 'Curry Shoes 19', price: '200$', code: 'd4j5f' },
    { img: 'images/20.jpg', name: 'Curry Shoes 20', price: '210$' , code: 'd45f'}
];
// Function to populate items in the container
function populateItems() {
    const container = document.getElementById('items-container');
    container.innerHTML = items.map((item) =>{
        return `
        <div class="content">
            <img src="${item.img}">
            <div class="category">
                <h5>${item.name}</h5>
                <p>${item.price}</p>
            </div>
            <a href="select.html?name=${encodeURIComponent(item.name)}&price=${encodeURIComponent(item.price)}&img=${encodeURIComponent(item.img)}">
                <button class="btn" id="btn">Buy</button>
            </a>
        </div> `;
    }).join('');
}

// Populate items
populateItems();