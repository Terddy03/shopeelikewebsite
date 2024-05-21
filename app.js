let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', () => {
    if (body.classList.contains('active')) {
        body.classList.remove('active');
    } else {
        body.classList.add('active');
    }
});
closeShopping.addEventListener('click', () => {
    body.classList.remove('active');
});

let products = [
    {
        id: 1,
        name: 'REVUELTO',
        image: 'https://prestigemodelcars.com/cdn/shop/files/LAMBO058SE6_cc9241e1-1fa6-4304-9b1b-2a8c9f6bbdfd.png?v=1712663183',
        price: '$650,000'
    },
    {
        id: 2,
        name: 'REVUELTO',
        image: 'https://medialamborghini-meride-tv.akamaized.net/meride/lamborghini/video/images/folder1/1252/vlcsnap-2023-03-17-16h18m30s840.jpg',
        price: '$608,358'
    },
    {
        id: 3,
        name: 'REVUELTO',
        image: 'https://teamcardelight.com/wp-content/uploads/2023/12/image-111.png',
        price: '$700,000'
    },
    {
        id: 4,
        name: 'REVUELTO',
        image: 'https://onecms-res.cloudinary.com/image/upload/s--_vylEAGT--/c_crop,h_688,w_1224,x_173,y_311/c_fill,g_auto,h_676,w_1200/f_auto,q_auto/v1/mediacorp/cna/image/2023/10/10/hero-revuelto_lamborghini_high-performance_electrified_vehicle.jpg?itok=Zasizs5X',
        price: '$640,000'
    },
    {
        id: 5,
        name: 'REVUELTO',
        image: 'https://images.carandbike.com/cms/articles/2023/7/3208373/lamborghini_revuelto_65729481bc.jpeg',
        price: '$620,000'
    },
    {
        id: 6,
        name: 'REVUELTO',
        image: 'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/revuelto/2023/11_06_refresh/over/revuelto_over_01_m.jpg',
        price: '$600,000'
    },
    {
        id: 7,
        name: 'Huracán STO',
        image: 'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/huracan/sto/og/huracan_sto_og.jpg',
        price: '$249,865'
    },
    {
        id: 8,
        name: 'Huracán STO',
        image: 'https://www.cnet.com/a/img/resize/43129586dc3acc5cdf6c8186eac58bc2fb374c9d/hub/2021/09/21/68026905-634c-4418-b943-115a1796734a/ogi1-lamborghini-huracan-sto-015.jpg?auto=webp&fit=crop&height=675&width=1200',
        price: '$240,000'
    },
   
    {
        id: 9,
        name: 'Huracán STO',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlTGD1C20ZLW08aMBHxDcSD_ZV2q8zxlkhNzu4QGVCqA&s',
        price: '$250,000'
    },
    {
        id: 10,
        name: 'Huracán EVO spyder',
        image: 'https://www.thedrive.com/content/2021/09/IMG_2919-1.jpg?quality=85',
        price: '$250,000'
    },
    {
        id: 11,
        name: 'Huracán EVO spyder',
        image: 'https://static.independent.co.uk/2022/09/30/11/Image.jpeg',
        price: '$240,000'
    },
    {
        id: 12,
        name: 'Huracán EVO spyder',
        image: 'https://i.pinimg.com/564x/9f/d7/e2/9fd7e2f82739ae069861588f668c6a58.jpg',
        price: '$230,000'
    },
    {
        id: 13,
        name: 'Huracán Sterrato',
        image: 'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/huracan/sterrato/hero/huracan_sterrato_hero_01.jpg',
        price: '	$254,100'
    },
    {
        id: 14,
        name: 'Huracán Sterrato',
        image: 'https://www.motortrend.com/uploads/2023/05/2023-Lamborghini-Huraca%CC%81n-Sterrato-in-action-1-scaled.jpg',
        price: '	$270,000'
    },
    {
        id: 15,
        name: 'Huracán Sterrato',
        image: 'https://www.topgear.com/sites/default/files/2023/05/1%20Lamborghini%20Huracan%20Sterrato.jpg',
        price: '	$240,100'
    },
    {
        id: 16,
        name: 'Huracán Performante',
        image: 'https://images4.alphacoders.com/119/1198219.jpg',
        price: '	$254,100'
    },
    {
        id: 17,
        name: 'Huracán Performante',
        image: 'https://e0.pxfuel.com/wallpapers/911/1013/desktop-wallpaper-lamborghini-huracan-performante-front-view-evening-exterior-purple-huracan-huracan-tuning-supercar-italian-sports-cars-lamborghini.jpg',
        price: '	$210,100'
    },
    {
        id: 18,
        name: 'Huracán Performante',
        image: 'https://images4.alphacoders.com/941/thumb-1920-941531.jpg',
        price: '	$240,000'
    },
    {
        id: 19,
        name: 'Huracán Tecnica',
        image: 'https://media.drive.com.au/obj/tx_rs:fit:1920:1080,q:50,w:1920/driveau/upload/cms/uploads/Y1y30oWJROuk3B8v1mOT',
        price: '$250,000'
    },
    {
        id: 20,
        name: 'Huracán Tecnica',
        image: 'https://car-images.bauersecure.com/wp-images/4799/ht_030.jpg',
        price: '$250,000'
    },
    {
        id: 21,
        name: 'Huracán Tecnica',
        image: 'https://e0.pxfuel.com/wallpapers/911/1013/desktop-wallpaper-lamborghini-huracan-performante-front-view-evening-exterior-purple-huracan-huracan-tuning-supercar-italian-sports-cars-lamborghini.jpg',
        price: '$240,000'
    },
    {
        id: 22,
        name: 'Huracán LP 640-4 EVO Coupe',
        image: 'https://images.clickdealer.co.uk/vehicles/2597/2597792/large1/49166331.jpg',
        price: '$250,000'
    },
    {
        id: 23,
        name: 'Huracán LP 640-4 EVO Coupe',
        image: 'https://www.marshallgoldman.com/imagetag/1546/2/l/Used-2020-Lamborghini-Huracan-LP-640-4-EVO-Spyder-1627452655.jpg',
        price: '$275,000'
    },
    {
        id: 24,
        name: 'Huracán LP 640-4 EVO Coupe',
        image: 'https://www.ilusso.com/imagetag/878/main/l/Used-2020-Lamborghini-Huracan-LP-640-4-EVO-1667335249.jpg',
        price: '$240,000'
    },
    {
        id: 25,
        name: 'Huracán evo rwd spyder',
        image: 'https://news.dupontregistry.com/wp-content/uploads/2022/02/huracan-evo-rwd-spyder-3.jpg',
        price: '$300,000'
    },
    {
        id: 26,
        name: 'Huracán evo rwd spyder',
        image: 'https://www.marshallgoldman.com/imagetag/1546/2/l/Used-2020-Lamborghini-Huracan-LP-640-4-EVO-Spyder-1627452655.jpg',
        price: '$275,000'
    },
    {
        id: 27,
        name: 'Huracán evo rwd spyder',
        image: 'https://www.ilusso.com/imagetag/878/main/l/Used-2020-Lamborghini-Huracan-LP-640-4-EVO-1667335249.jpg',
        price: '$240,000'
    },
    
    
];


let listCards = [];

function initApp() {
    products.forEach((product, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="${product.image.startsWith('http') ? product.image : 'image/' + product.image}">
            <div class="title">${product.name}</div>
            <div class="price">${product.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Buy Now</button>`;
        list.appendChild(newDiv);
    });
}
initApp();

function addToCard(key) {
    if (listCards[key] == null) {
        // Copy product from list to list card
        listCards[key] = { ...products[key], quantity: 1 };
    } else {
        listCards[key].quantity++;
        listCards[key].price = listCards[key].quantity * products[key].price;
    }
    reloadCard();
}

function reloadCard() {
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;

    listCards.forEach((item, key) => {
        if (item != null) {
            totalPrice += item.price;
            count += item.quantity;
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="${item.image.startsWith('http') ? item.image : 'image/' + item.image}"/></div>
                <div>${item.name}</div>
                <div>${item.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${item.quantity - 1})">-</button>
                    <div class="count">${item.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${item.quantity + 1})">+</button>
                </div>`;
            listCard.appendChild(newDiv);
        }
    });

    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}

function changeQuantity(key, newQuantity) {
    if (newQuantity == 0) {
        delete listCards[key];
    } else {
        listCards[key].quantity = newQuantity;
        listCards[key].price = newQuantity * products[key].price;
    }
    reloadCard();
}

// Pagination

const productsPerPage = 6;
let currentPage = 1;
let totalPages;
const pageNumberInput = document.getElementById('pageNumberInput'); // Define pageNumberInput variable

function calculateTotalPages() {
    totalPages = Math.ceil(products.length / productsPerPage);
}

function showProducts() {
    const products = document.querySelectorAll('.list .item');
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;

    products.forEach((product, index) => {
        if (index >= startIndex && index < endIndex) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });

    const prevPageButton = document.getElementById('prevPage');
    prevPageButton.disabled = currentPage === 1;

    const nextPageButton = document.getElementById('nextPage');
    nextPageButton.disabled = endIndex >= products.length;

    const pageNumberElement = document.getElementById('pageNumber');
    pageNumberElement.innerText = `Page ${currentPage}`;
}

function goToPage() {
    const pageNumber = parseInt(pageNumberInput.value);
    if (pageNumber >= 1 && pageNumber <= totalPages) {
        currentPage = pageNumber;
        showProducts();
    } else {
        alert('Invalid page number');
    }
}

document.getElementById('goToPage').addEventListener('click', goToPage);
pageNumberInput.addEventListener('keydown', handleKeyDown);
document.getElementById('nextPage').addEventListener('click', () => {
    if (currentPage < totalPages) {
        currentPage++;
        showProducts();
    }
});

document.getElementById('prevPage').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        showProducts();
    }
});

function handleKeyDown(event) {
    if (event.key === "Enter") {
        goToPage();
    }
}

initApp();
calculateTotalPages();
showProducts();