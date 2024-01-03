function getProducts() {
    var productList = [{ "id": 1, "title": "iPhone 9", "description": "An apple mobile which is nothing like apple", "price": 549, "discountPercentage": 12.96, "rating": 4.69, "stock": 94, "brand": "Apple", "category": "smartphones", "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/1/1.jpg", "https://i.dummyjson.com/data/products/1/2.jpg", "https://i.dummyjson.com/data/products/1/3.jpg", "https://i.dummyjson.com/data/products/1/4.jpg", "https://i.dummyjson.com/data/products/1/thumbnail.jpg"] }, { "id": 2, "title": "iPhone X", "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...", "price": 899, "discountPercentage": 17.94, "rating": 4.44, "stock": 34, "brand": "Apple", "category": "smartphones", "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/2/1.jpg", "https://i.dummyjson.com/data/products/2/2.jpg", "https://i.dummyjson.com/data/products/2/3.jpg", "https://i.dummyjson.com/data/products/2/thumbnail.jpg"] }, { "id": 3, "title": "Samsung Universe 9", "description": "Samsung's new variant which goes beyond Galaxy to the Universe", "price": 1249, "discountPercentage": 15.46, "rating": 4.09, "stock": 36, "brand": "Samsung", "category": "smartphones", "thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/3/1.jpg"] }, { "id": 4, "title": "OPPOF19", "description": "OPPO F19 is officially announced on April 2021.", "price": 280, "discountPercentage": 17.91, "rating": 4.3, "stock": 123, "brand": "OPPO", "category": "smartphones", "thumbnail": "https://i.dummyjson.com/data/products/4/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/4/1.jpg", "https://i.dummyjson.com/data/products/4/2.jpg", "https://i.dummyjson.com/data/products/4/3.jpg", "https://i.dummyjson.com/data/products/4/4.jpg", "https://i.dummyjson.com/data/products/4/thumbnail.jpg"] }, { "id": 5, "title": "Huawei P30", "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.", "price": 499, "discountPercentage": 10.58, "rating": 4.09, "stock": 32, "brand": "Huawei", "category": "smartphones", "thumbnail": "https://i.dummyjson.com/data/products/5/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/5/1.jpg", "https://i.dummyjson.com/data/products/5/2.jpg", "https://i.dummyjson.com/data/products/5/3.jpg"] }, { "id": 6, "title": "MacBook Pro", "description": "MacBook Pro 2021 with mini-LED display may launch between September, November", "price": 1749, "discountPercentage": 11.02, "rating": 4.57, "stock": 83, "brand": "Apple", "category": "laptops", "thumbnail": "https://i.dummyjson.com/data/products/6/thumbnail.png", "images": ["https://i.dummyjson.com/data/products/6/1.png", "https://i.dummyjson.com/data/products/6/2.jpg", "https://i.dummyjson.com/data/products/6/3.png", "https://i.dummyjson.com/data/products/6/4.jpg"] }, { "id": 7, "title": "Samsung Galaxy Book", "description": "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched", "price": 1499, "discountPercentage": 4.15, "rating": 4.25, "stock": 50, "brand": "Samsung", "category": "laptops", "thumbnail": "https://i.dummyjson.com/data/products/7/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/7/1.jpg", "https://i.dummyjson.com/data/products/7/2.jpg", "https://i.dummyjson.com/data/products/7/3.jpg", "https://i.dummyjson.com/data/products/7/thumbnail.jpg"] }, { "id": 8, "title": "Microsoft Surface Laptop 4", "description": "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.", "price": 1499, "discountPercentage": 10.23, "rating": 4.43, "stock": 68, "brand": "Microsoft Surface", "category": "laptops", "thumbnail": "https://i.dummyjson.com/data/products/8/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/8/1.jpg", "https://i.dummyjson.com/data/products/8/2.jpg", "https://i.dummyjson.com/data/products/8/3.jpg", "https://i.dummyjson.com/data/products/8/4.jpg", "https://i.dummyjson.com/data/products/8/thumbnail.jpg"] }, { "id": 9, "title": "Infinix INBOOK", "description": "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty", "price": 1099, "discountPercentage": 11.83, "rating": 4.54, "stock": 96, "brand": "Infinix", "category": "laptops", "thumbnail": "https://i.dummyjson.com/data/products/9/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/9/1.jpg", "https://i.dummyjson.com/data/products/9/2.png", "https://i.dummyjson.com/data/products/9/3.png", "https://i.dummyjson.com/data/products/9/4.jpg", "https://i.dummyjson.com/data/products/9/thumbnail.jpg"] }, { "id": 10, "title": "HP Pavilion 15-DK1056WM", "description": "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10", "price": 1099, "discountPercentage": 6.18, "rating": 4.43, "stock": 89, "brand": "HP Pavilion", "category": "laptops", "thumbnail": "https://i.dummyjson.com/data/products/10/thumbnail.jpeg", "images": ["https://i.dummyjson.com/data/products/10/1.jpg", "https://i.dummyjson.com/data/products/10/2.jpg", "https://i.dummyjson.com/data/products/10/3.jpg", "https://i.dummyjson.com/data/products/10/thumbnail.jpeg"] }, { "id": 11, "title": "perfume Oil", "description": "Mega Discount, Impression of Acqua Di Gio by GiorgioArmani concentrated attar perfume Oil", "price": 13, "discountPercentage": 8.4, "rating": 4.26, "stock": 65, "brand": "Impression of Acqua Di Gio", "category": "fragrances", "thumbnail": "https://i.dummyjson.com/data/products/11/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/11/1.jpg", "https://i.dummyjson.com/data/products/11/2.jpg", "https://i.dummyjson.com/data/products/11/3.jpg", "https://i.dummyjson.com/data/products/11/thumbnail.jpg"] }, { "id": 12, "title": "Brown Perfume", "description": "Royal_Mirage Sport Brown Perfume for Men & Women - 120ml", "price": 40, "discountPercentage": 15.66, "rating": 4, "stock": 52, "brand": "Royal_Mirage", "category": "fragrances", "thumbnail": "https://i.dummyjson.com/data/products/12/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/12/1.jpg", "https://i.dummyjson.com/data/products/12/2.jpg", "https://i.dummyjson.com/data/products/12/3.png", "https://i.dummyjson.com/data/products/12/4.jpg", "https://i.dummyjson.com/data/products/12/thumbnail.jpg"] }, { "id": 13, "title": "Fog Scent Xpressio Perfume", "description": "Product details of Best Fog Scent Xpressio Perfume 100ml For Men cool long lasting perfumes for Men", "price": 13, "discountPercentage": 8.14, "rating": 4.59, "stock": 61, "brand": "Fog Scent Xpressio", "category": "fragrances", "thumbnail": "https://i.dummyjson.com/data/products/13/thumbnail.webp", "images": ["https://i.dummyjson.com/data/products/13/1.jpg", "https://i.dummyjson.com/data/products/13/2.png", "https://i.dummyjson.com/data/products/13/3.jpg", "https://i.dummyjson.com/data/products/13/4.jpg", "https://i.dummyjson.com/data/products/13/thumbnail.webp"] }, { "id": 14, "title": "Non-Alcoholic Concentrated Perfume Oil", "description": "Original Al Munakh® by Mahal Al Musk | Our Impression of Climate | 6ml Non-Alcoholic Concentrated Perfume Oil", "price": 120, "discountPercentage": 15.6, "rating": 4.21, "stock": 114, "brand": "Al Munakh", "category": "fragrances", "thumbnail": "https://i.dummyjson.com/data/products/14/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/14/1.jpg", "https://i.dummyjson.com/data/products/14/2.jpg", "https://i.dummyjson.com/data/products/14/3.jpg", "https://i.dummyjson.com/data/products/14/thumbnail.jpg"] }, { "id": 15, "title": "Eau De Perfume Spray", "description": "Genuine  Al-Rehab spray perfume from UAE/Saudi Arabia/Yemen High Quality", "price": 30, "discountPercentage": 10.99, "rating": 4.7, "stock": 105, "brand": "Lord - Al-Rehab", "category": "fragrances", "thumbnail": "https://i.dummyjson.com/data/products/15/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/15/1.jpg", "https://i.dummyjson.com/data/products/15/2.jpg", "https://i.dummyjson.com/data/products/15/3.jpg", "https://i.dummyjson.com/data/products/15/4.jpg", "https://i.dummyjson.com/data/products/15/thumbnail.jpg"] }, { "id": 16, "title": "Hyaluronic Acid Serum", "description": "L'OrÃ©al Paris introduces Hyaluron Expert Replumping Serum formulated with 1.5% Hyaluronic Acid", "price": 19, "discountPercentage": 13.31, "rating": 4.83, "stock": 110, "brand": "L'Oreal Paris", "category": "skincare", "thumbnail": "https://i.dummyjson.com/data/products/16/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/16/1.png", "https://i.dummyjson.com/data/products/16/2.webp", "https://i.dummyjson.com/data/products/16/3.jpg", "https://i.dummyjson.com/data/products/16/4.jpg", "https://i.dummyjson.com/data/products/16/thumbnail.jpg"] }, { "id": 17, "title": "Tree Oil 30ml", "description": "Tea tree oil contains a number of compounds, including terpinen-4-ol, that have been shown to kill certain bacteria,", "price": 12, "discountPercentage": 4.09, "rating": 4.52, "stock": 78, "brand": "Hemani Tea", "category": "skincare", "thumbnail": "https://i.dummyjson.com/data/products/17/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/17/1.jpg", "https://i.dummyjson.com/data/products/17/2.jpg", "https://i.dummyjson.com/data/products/17/3.jpg", "https://i.dummyjson.com/data/products/17/thumbnail.jpg"] }, { "id": 18, "title": "Oil Free Moisturizer 100ml", "description": "Dermive Oil Free Moisturizer with SPF 20 is specifically formulated with ceramides, hyaluronic acid & sunscreen.", "price": 40, "discountPercentage": 13.1, "rating": 4.56, "stock": 88, "brand": "Dermive", "category": "skincare", "thumbnail": "https://i.dummyjson.com/data/products/18/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/18/1.jpg", "https://i.dummyjson.com/data/products/18/2.jpg", "https://i.dummyjson.com/data/products/18/3.jpg", "https://i.dummyjson.com/data/products/18/4.jpg", "https://i.dummyjson.com/data/products/18/thumbnail.jpg"] }, { "id": 19, "title": "Skin Beauty Serum.", "description": "Product name: rorec collagen hyaluronic acid white face serum riceNet weight: 15 m", "price": 46, "discountPercentage": 10.68, "rating": 4.42, "stock": 54, "brand": "ROREC White Rice", "category": "skincare", "thumbnail": "https://i.dummyjson.com/data/products/19/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/19/1.jpg", "https://i.dummyjson.com/data/products/19/2.jpg", "https://i.dummyjson.com/data/products/19/3.png", "https://i.dummyjson.com/data/products/19/thumbnail.jpg"] }, { "id": 20, "title": "Freckle Treatment Cream- 15gm", "description": "Fair & Clear is Pakistan's only pure Freckle cream which helpsfade Freckles, Darkspots and pigments. Mercury level is 0%, so there are no side effects.", "price": 70, "discountPercentage": 16.99, "rating": 4.06, "stock": 140, "brand": "Fair & Clear", "category": "skincare", "thumbnail": "https://i.dummyjson.com/data/products/20/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/20/1.jpg", "https://i.dummyjson.com/data/products/20/2.jpg", "https://i.dummyjson.com/data/products/20/3.jpg", "https://i.dummyjson.com/data/products/20/4.jpg", "https://i.dummyjson.com/data/products/20/thumbnail.jpg"] }, { "id": 21, "title": "- Daal Masoor 500 grams", "description": "Fine quality Branded Product Keep in a cool and dry place", "price": 20, "discountPercentage": 4.81, "rating": 4.44, "stock": 133, "brand": "Saaf & Khaas", "category": "groceries", "thumbnail": "https://i.dummyjson.com/data/products/21/thumbnail.png", "images": ["https://i.dummyjson.com/data/products/21/1.png", "https://i.dummyjson.com/data/products/21/2.jpg", "https://i.dummyjson.com/data/products/21/3.jpg"] }, { "id": 22, "title": "Elbow Macaroni - 400 gm", "description": "Product details of Bake Parlor Big Elbow Macaroni - 400 gm", "price": 14, "discountPercentage": 15.58, "rating": 4.57, "stock": 146, "brand": "Bake Parlor Big", "category": "groceries", "thumbnail": "https://i.dummyjson.com/data/products/22/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/22/1.jpg", "https://i.dummyjson.com/data/products/22/2.jpg", "https://i.dummyjson.com/data/products/22/3.jpg"] }, { "id": 23, "title": "Orange Essence Food Flavou", "description": "Specifications of Orange Essence Food Flavour For Cakes and Baking Food Item", "price": 14, "discountPercentage": 8.04, "rating": 4.85, "stock": 26, "brand": "Baking Food Items", "category": "groceries", "thumbnail": "https://i.dummyjson.com/data/products/23/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/23/1.jpg", "https://i.dummyjson.com/data/products/23/2.jpg", "https://i.dummyjson.com/data/products/23/3.jpg", "https://i.dummyjson.com/data/products/23/4.jpg", "https://i.dummyjson.com/data/products/23/thumbnail.jpg"] }, { "id": 24, "title": "cereals muesli fruit nuts", "description": "original fauji cereal muesli 250gm box pack original fauji cereals muesli fruit nuts flakes breakfast cereal break fast faujicereals cerels cerel foji fouji", "price": 46, "discountPercentage": 16.8, "rating": 4.94, "stock": 113, "brand": "fauji", "category": "groceries", "thumbnail": "https://i.dummyjson.com/data/products/24/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/24/1.jpg", "https://i.dummyjson.com/data/products/24/2.jpg", "https://i.dummyjson.com/data/products/24/3.jpg", "https://i.dummyjson.com/data/products/24/4.jpg", "https://i.dummyjson.com/data/products/24/thumbnail.jpg"] }, { "id": 25, "title": "Gulab Powder 50 Gram", "description": "Dry Rose Flower Powder Gulab Powder 50 Gram • Treats Wounds", "price": 70, "discountPercentage": 13.58, "rating": 4.87, "stock": 47, "brand": "Dry Rose", "category": "groceries", "thumbnail": "https://i.dummyjson.com/data/products/25/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/25/1.png", "https://i.dummyjson.com/data/products/25/2.jpg", "https://i.dummyjson.com/data/products/25/3.png", "https://i.dummyjson.com/data/products/25/4.jpg", "https://i.dummyjson.com/data/products/25/thumbnail.jpg"] }, { "id": 26, "title": "Plant Hanger For Home", "description": "Boho Decor Plant Hanger For Home Wall Decoration Macrame Wall Hanging Shelf", "price": 41, "discountPercentage": 17.86, "rating": 4.08, "stock": 131, "brand": "Boho Decor", "category": "home-decoration", "thumbnail": "https://i.dummyjson.com/data/products/26/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/26/1.jpg", "https://i.dummyjson.com/data/products/26/2.jpg", "https://i.dummyjson.com/data/products/26/3.jpg", "https://i.dummyjson.com/data/products/26/4.jpg", "https://i.dummyjson.com/data/products/26/5.jpg", "https://i.dummyjson.com/data/products/26/thumbnail.jpg"] }, { "id": 27, "title": "Flying Wooden Bird", "description": "Package Include 6 Birds with Adhesive Tape Shape: 3D Shaped Wooden Birds Material: Wooden MDF, Laminated 3.5mm", "price": 51, "discountPercentage": 15.58, "rating": 4.41, "stock": 17, "brand": "Flying Wooden", "category": "home-decoration", "thumbnail": "https://i.dummyjson.com/data/products/27/thumbnail.webp", "images": ["https://i.dummyjson.com/data/products/27/1.jpg", "https://i.dummyjson.com/data/products/27/2.jpg", "https://i.dummyjson.com/data/products/27/3.jpg", "https://i.dummyjson.com/data/products/27/4.jpg", "https://i.dummyjson.com/data/products/27/thumbnail.webp"] }, { "id": 28, "title": "3D Embellishment Art Lamp", "description": "3D led lamp sticker Wall sticker 3d wall art light on/off button  cell operated (included)", "price": 20, "discountPercentage": 16.49, "rating": 4.82, "stock": 54, "brand": "LED Lights", "category": "home-decoration", "thumbnail": "https://i.dummyjson.com/data/products/28/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/28/1.jpg", "https://i.dummyjson.com/data/products/28/2.jpg", "https://i.dummyjson.com/data/products/28/3.png", "https://i.dummyjson.com/data/products/28/4.jpg", "https://i.dummyjson.com/data/products/28/thumbnail.jpg"] }, { "id": 29, "title": "Handcraft Chinese style", "description": "Handcraft Chinese style art luxury palace hotel villa mansion home decor ceramic vase with brass fruit plate", "price": 60, "discountPercentage": 15.34, "rating": 4.44, "stock": 7, "brand": "luxury palace", "category": "home-decoration", "thumbnail": "https://i.dummyjson.com/data/products/29/thumbnail.webp", "images": ["https://i.dummyjson.com/data/products/29/1.jpg", "https://i.dummyjson.com/data/products/29/2.jpg", "https://i.dummyjson.com/data/products/29/3.webp", "https://i.dummyjson.com/data/products/29/4.webp", "https://i.dummyjson.com/data/products/29/thumbnail.webp"] }, { "id": 30, "title": "Key Holder", "description": "Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality", "price": 30, "discountPercentage": 2.92, "rating": 4.92, "stock": 54, "brand": "Golden", "category": "home-decoration", "thumbnail": "https://i.dummyjson.com/data/products/30/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/30/1.jpg", "https://i.dummyjson.com/data/products/30/2.jpg", "https://i.dummyjson.com/data/products/30/3.jpg", "https://i.dummyjson.com/data/products/30/thumbnail.jpg"] }];
    return productList;
}
function getDataFromStorage() {
    var data = localStorage.getItem("productList");
    data = JSON.parse(data);
    return data;
}


function CreateHeader() {
    var mainDiv = document.querySelector("#mainDiv");

    var header = document.createElement("div");
    header.setAttribute("style", "width:100%; height:80px;position:sticky;top:0;z-index:4");
    header.id = "headDiv"
    header.setAttribute("class", "bg-dark d-flex justify-content-between");

    var logoDiv = document.createElement("div");
    logoDiv.setAttribute("id", "logo");
    logoDiv.setAttribute("class", "d-flex justify-content-center align-items-center");
    logoDiv.setAttribute("style", "width:20%;height:70px;");

    var imgElement = document.createElement("img");
    imgElement.setAttribute("src", "logo1.png");
    imgElement.setAttribute("style", " height:60px;filter:invert(1);");
    logoDiv.appendChild(imgElement);

    var searchDiv = document.createElement("div");
    searchDiv.setAttribute("style", "width:50%; height:70px;");
    searchDiv.setAttribute("class", "d-flex justify-content-center align-items-center");

    var searchInput = document.createElement("input");
    searchInput.setAttribute("type", "text");
    searchInput.setAttribute("placeholder", "Search product");
    searchInput.setAttribute("id", "SearchInput");
    searchInput.setAttribute("style", "width:70%;height:40px;");
    searchDiv.addEventListener("keyup", () => {
        SearchProduct();
    })
    searchDiv.appendChild(searchInput);

    var menuDiv = document.createElement("div");
    menuDiv.setAttribute("id", "menuDiv");
    menuDiv.setAttribute("style", "width:20%; height:70px;");
    menuDiv.setAttribute("class", "d-flex justify-content-around align-items-center");
    var loginStatus = isloggedIn();
    if (loginStatus) {
        var viewCart = document.createElement("span");
        viewCart.innerHTML = "View Cart";
        viewCart.setAttribute("style", "color:white; cursor:pointer");
        viewCart.id = "vc";
        var mainDiv = document.querySelector("#mainDiv");
        viewCart.addEventListener("click", () => {
            emptyCartList();
            var container = document.querySelector("#cart-container");
            container.innerHTML = "";
            var currentUser = sessionStorage.getItem("currentUser");
            var cartList = JSON.parse(localStorage.getItem("cartList"));
            var cartListItems = cartList.find((obj) => {
                return obj.email == currentUser;
            });
            var cartItemsList = cartListItems.cartItems;

            // emptyCartList(cartItemsList);
            var newContainer = document.createElement("div");
            newContainer.setAttribute("id", "new-container");
            newContainer.setAttribute("style", "width:100%;display:flex;");

            var leftColoum = document.createElement("div");
            leftColoum.setAttribute("style", "width:60%;");
            leftColoum.setAttribute("id", "leftColoum")
            leftColoum.setAttribute("class", "container-fluid col-md-8")

            var rightColoum = document.createElement("div");
            rightColoum.setAttribute("style", "width:40%;");
            rightColoum.setAttribute("id", "rightColoum")


            var table = document.createElement("table");
            table.setAttribute("class", "border")
            table.setAttribute("style", "width:100%;text-align:center;")
            var thead = document.createElement("thead");
            thead.setAttribute("style", "height:30px;")
            var tr = document.createElement("tr");
            tr.setAttribute("style", "border:2px solid;");
            var sNo = document.createElement("th");
            sNo.innerHTML = "Sr. No."
            tr.append(sNo);

            var img = document.createElement("th");
            img.innerHTML = "Product Image";
            tr.appendChild(img);

            var productName = document.createElement("th");
            productName.innerHTML = "Product Name"
            tr.append(productName);
            var Price = document.createElement("th");
            Price.innerHTML = "Price"
            tr.append(Price);
            var Quality = document.createElement("th");
            Quality.innerHTML = "Quantity"
            tr.append(Quality);
            var Total = document.createElement("th");
            Total.innerHTML = "Total"
            tr.append(Total);

            var tbody = document.createElement("tbody");
            tbody.setAttribute("style", "text-align:center;")
            tbody.setAttribute("class", "border")
            for (var index in cartItemsList) {
                let tr = document.createElement("tr");
                tr.setAttribute("style", "border:1px solid;")
                let sNo = document.createElement("td");
                sNo.setAttribute("style", "")
                sNo.innerHTML = index * 1 + 1 + ".";
                tr.appendChild(sNo);

                let image = document.createElement("img");
                image.setAttribute("style", "width:100px;height:100px;")
                image.setAttribute("src", cartItemsList[index].thumbnail);
                // image.innerHTML = cartItemsList[index].thumbnail;
                tr.appendChild(image);

                let title = document.createElement("td");
                title.setAttribute("style", "text-align:start;")
                title.innerHTML = cartItemsList[index].title;
                tr.appendChild(title);


                let Price = document.createElement("td");
                Price.innerHTML = cartItemsList[index].price;
                tr.appendChild(Price);

                let qty = document.createElement("td");
                qty.innerHTML = "<input onchange='updateQty(" + cartItemsList[index].id + "," + index + ")' style='width:50px' id='qtyChange" + index + "' type='number' max='20' min='1' value='" + getQuantity(index) + "'/>";

                tr.appendChild(qty);

                let total = document.createElement("td");
                total.id = "total" + index;
                // total.innerHTML = ""+cartItemsList[index].price;
                total.innerText = cartItemsList[index].price;
                tr.appendChild(total);


                tbody.appendChild(tr);
            }
            thead.appendChild(tr);
            table.appendChild(thead);
            table.appendChild(tbody);
            leftColoum.appendChild(table);
            newContainer.appendChild(leftColoum);

            var h1 = document.createElement("h1");
            h1.innerText = "Order Details";
            h1.setAttribute("class", "text-center");
            var hr = document.createElement("hr");

            var totalItems = document.createElement("p");
            totalItems.setAttribute("style", "margin-left:20px;")
            totalItems.innerHTML = "Total Items : " + cartItemsList.length;

            var totalBillAmount = document.createElement("p");
            totalBillAmount.setAttribute("style", "margin-left:20px;")
            totalBillAmount.setAttribute("id", "totalBillLabel");
            totalBillAmount.innerHTML = "Total Bill : " + getBillAmount();

            var checkoutButton = document.createElement("button");
            checkoutButton.id = "checkBtn"
            checkoutButton.setAttribute("style", "margin-left:20px;width:90%;font-weight:bold;");
            checkoutButton.innerText = "Checkout";
            checkoutButton.addEventListener("click", () => {
                document.getElementById("checkBtn").style.backgroundColor = "red";
                form();
            });
            checkoutButton.setAttribute("class", "btn btn-success");
            rightColoum.appendChild(h1);
            rightColoum.appendChild(hr);
            rightColoum.appendChild(totalItems);
            rightColoum.appendChild(totalBillAmount);
            rightColoum.appendChild(checkoutButton);

            newContainer.appendChild(rightColoum);
            mainDiv.appendChild(newContainer);

            document.getElementById("vc").innerHTML = "HOME";
            document.getElementById("vc").id = "home";
            let event = document.getElementById("home");
            event.addEventListener("click", () => {
                eventAction();
            })
            // viewCartEvent(1);
        });
        var signOut = document.createElement("span");
        signOut.innerText = "Sign Out";
        signOut.setAttribute("style", "color:white; cursor:pointer");
        signOut.addEventListener("click", () => {
            signOutPage();
        });
        menuDiv.appendChild(viewCart);
        menuDiv.appendChild(signOut);
    }
    else {
        var signInOptions = document.createElement("span");
        signInOptions.innerText = "Sign in";
        signInOptions.setAttribute("style", "color:white; cursor:pointer");
        signInOptions.addEventListener("click", () => {
            singIn();
        });

        var signUpOptions = document.createElement("span");
        signUpOptions.innerText = "Sign up";
        signUpOptions.setAttribute("style", "color:white; cursor:pointer");

        //Singn Up button for new account
        signUpOptions.addEventListener("click", () => {
            signUp();
        });
        menuDiv.appendChild(signInOptions);
        menuDiv.appendChild(signUpOptions);
    }
    header.appendChild(logoDiv);
    header.appendChild(searchDiv);
    header.appendChild(menuDiv);
    mainDiv.appendChild(header);

    var data = getDataFromStorage();
    // createCart(data);
}

// const mediaQuery = window.matchMedia('(min-width: 700px)')
// if (mediaQuery.matches) {
//   alert('Media Query Matched!');
//   var cart =  document.getElementById("cart-container");
//   cart.setAttribute("style","flex-direction: column;");
//   document.getElementById("mainDiv").style.backgroundColor  = "red";
// }
// function media(x){
//     if(x.matches){
//       var cart =  document.getElementById("cart-container");
//         cart.setAttribute("style","flex-direction: column;");
//         window.alert("hi");
//     }
//     else{
//         var cart =  document.getElementById("cart-container");
//         cart.setAttribute("style","flex-direction: row;");
//     }
// }
// var a = window.matchMedia("(min-width: 700px)")
// media(a);

function createCart(data) {
    var mainDiv = document.querySelector("#mainDiv");
    var cartContainer = document.createElement("div");
    cartContainer.setAttribute("style", "flex-direction:row;")
    cartContainer.setAttribute("class", "container-fluid mt-5 p-2 d-flex flex-wrap justify-content-around");
    cartContainer.setAttribute("style", " row-gap:10px;");
    cartContainer.setAttribute("id", "cart-container");
    let index = 0 * 1;
    for (let product of data) {
        index++;
        let cartDiv = document.createElement("div");
        cartDiv.setAttribute("id", "cartDiv")
        cartDiv.setAttribute("style", "width:30%; height:550px; background-color: white; box-shadow : 10px 10px 10px grey");
        cartDiv.setAttribute("class", " d-flex flex-column justify-content-center align-center");
        let productImg = document.createElement("img");
        productImg.setAttribute("src", product.thumbnail);
        productImg.setAttribute("style", "width:100%; height:300px;");
        cartDiv.appendChild(productImg);

        let brand = document.createElement("h2");
        brand.setAttribute("style", "color:red;text-align:center;")
        brand.innerHTML = "<h3 style='color:black;display:inline;'>Brand :-</h3> " + product.brand;
        cartDiv.appendChild(brand);

        let title = document.createElement("h3");
        title.setAttribute("class", "text-center")
        title.innerHTML = product.title;
        cartDiv.appendChild(title);

        let price = document.createElement("p");
        price.setAttribute("style", "font-size:20px;display:inline;")
        price.setAttribute("class", "text-center text-danger");
        price.innerHTML = "Price : <del>" + product.price + "</del> Rs.";
        cartDiv.appendChild(price);

        let originalPrice = document.createElement("h3");
        originalPrice.setAttribute("style", "text-align:center;display:inline;font-size:20px;")
        let discount = product.price * product.discountPercentage / 100;
        originalPrice.innerHTML = "Final Price Rs. <h3 style='color:green;display:inline'> " + (product.price - discount.toFixed(1)) + "</h3>";

        cartDiv.appendChild(originalPrice);

        let addToCart = document.createElement("button");
        addToCart.setAttribute("class", "text-center ");
        addToCart.setAttribute("style", "width: 80%; height: 40px; background-color: gold; border: none; margin: auto")
        addToCart.innerHTML = "Add to Cart";
        addToCart.id = "addtocart" + index;
        addToCart.addEventListener("mouseover", () => {
            addToCart.style.backgroundColor = "lightgreen";
            console.log(addToCart.id)
        });
        addToCart.addEventListener("mouseout", () => {
            addToCart.style.backgroundColor = "gold";
        });
        addToCart.addEventListener("click", () => {
            if (isloggedIn()) {
                addToCartData(product);
            }
            else {
                window.alert("Sign in first...")
            }
        });
        cartDiv.appendChild(addToCart);
        cartContainer.appendChild(cartDiv);
    }
    mainDiv.appendChild(cartContainer);
}

function signUp() {
    var mainDiv = document.getElementById("mainDiv");
    mainDiv.innerHTML = "";
    var loginpage = document.createElement("div");
    loginpage.setAttribute("id", "loginpage")
    var h1 = document.createElement("h1");
    h1.setAttribute("style", "text-align:center;")
    h1.innerHTML = "Sing-up Page";
    loginpage.setAttribute("style", "display:flex;flex-direction:column;box-shadow:5px 5px 8px 8px grey; padding:20px; width:40%; height: auto;  position:absolute; top:50%; left:50%; transform: translate(-50%,-50%)");
    // mainDiv.setAttribute("style", "width: 100%; height: 100vh;");
    var email = document.createElement("input");
    var password = document.createElement("input");
    email.setAttribute("class", "form-control");
    password.setAttribute("class", "form-control mt-3");
    email.id = "email";
    password.setAttribute("id", "password-sign-up");
    email.placeholder = "Enter email";
    password.placeholder = "password";
    email.type = "email";
    password.type = "password";

    var emailSpan = document.createElement("span");
    emailSpan.id = "emailerror";
    emailSpan.setAttribute("style", "color:red;")

    var signUpbutton = document.createElement("button");
    signUpbutton.setAttribute("class", "mt-3 btn btn-success")
    signUpbutton.innerHTML = "Sign Up";
    signUpbutton.addEventListener("click", () => {
        signUpButtonEvent();
        validationemail();
    });

    var back = document.createElement("button");
    back.innerHTML = "Exit";
    back.setAttribute("class", "ml-5 mb-3");
    back.setAttribute("class", "mt-3 btn btn-danger");

    back.addEventListener("click", () => {
        // viewCartContainer.innerHTML = "";
        document.getElementById("mainDiv").innerHTML = "";
        CreateHeader();
        createCart(getProducts());
    });

    loginpage.appendChild(h1);
    loginpage.appendChild(email);
    loginpage.appendChild(emailSpan);
    loginpage.appendChild(password);
    loginpage.appendChild(signUpbutton);
    loginpage.appendChild(back);
    mainDiv.appendChild(loginpage);
}

function singIn() {
    var mainDiv = document.getElementById("mainDiv");
    mainDiv.innerHTML = "";
    var loginpage = document.createElement("div");
    loginpage.setAttribute("id", "loginpage");
    var h1 = document.createElement("h1");
    h1.setAttribute("style", "text-align:center;")
    h1.innerHTML = "Sign-in Page";
    loginpage.setAttribute("style", "display:flex;flex-direction:column;box-shadow:5px 5px 8px 8px grey; padding:20px; width:40%; height: auto;  position:absolute; top:50%; left:50%; transform: translate(-50%,-50%)");
    // mainDiv.setAttribute("style", "width: 100%; height: 100vh;");
    var email = document.createElement("input");
    var password = document.createElement("input");
    email.setAttribute("class", "form-control");
    password.setAttribute("class", "form-control mt-3");
    email.setAttribute("id", "email");
    // email.id = "email";
    password.setAttribute("id", "password-sign-in");
    email.placeholder = "Enter email";
    password.placeholder = "password";

    var emailSpan = document.createElement("span");
    emailSpan.id = "emailerror";
    emailSpan.setAttribute("style", "color:red;")


    var signInbutton = document.createElement("button");
    signInbutton.setAttribute("class", "mt-3 btn btn-success")
    signInbutton.innerHTML = "Sign in";
    signInbutton.addEventListener("click", () => {
        signInButtonEvent();
    });
    signInbutton.addEventListener("click", () => {
        validationemail();
    })
    var back = document.createElement("button");
    back.innerHTML = "Exit";
    back.setAttribute("class", "ml-5 mb-3");
    back.setAttribute("class", "mt-3 btn btn-danger");

    back.addEventListener("click", () => {
        // viewCartContainer.innerHTML = "";
        document.getElementById("mainDiv").innerHTML = "";
        CreateHeader();
        createCart(getProducts());
    });

    loginpage.appendChild(h1);
    loginpage.appendChild(email);
    loginpage.appendChild(emailSpan);
    loginpage.appendChild(password);
    loginpage.appendChild(signInbutton);
    loginpage.appendChild(back);
    mainDiv.appendChild(loginpage);
}

function signUpButtonEvent() {
    var email = document.querySelector("#email").value;
    var password = document.querySelector("#password-sign-up").value;
    // window.alert(email+" "+password);
    if (isUserExist(email)) {
        window.alert("user already exist")
    } else {
        if (validationemail() && passwordStatus()) {
            var userList = JSON.parse(localStorage.getItem("userList"));
            var user = { email: email, password: password };
            userList.push(user);
            localStorage.setItem("userList", JSON.stringify(userList));
            alert("Sign-up Successfully")
            var mainDiv = document.querySelector("#mainDiv");
            mainDiv.innerHTML = "";
            CreateHeader();
            createCart(JSON.parse(localStorage.getItem("productList")));
        }
        else {
            alert("Password length must be more than 5")
        }
    }
}

function signInButtonEvent() {
    var email = document.querySelector("#email").value;
    var password = document.querySelector("#password-sign-in").value;
    isActive(email, password);
}

function isUserExist(email) {
    var userList = localStorage.getItem("userList");
    userList = JSON.parse(userList);
    var user = userList.find((user) => { return user.email == email });
    return !!user;
}

function isActive(email, password) {
    var userList = localStorage.getItem("userList");
    userList = JSON.parse(userList);
    var user = userList.find((user) => { return user.email == email && user.password == password });
    if (user) {
        sessionStorage.setItem("isActive", "true");
        sessionStorage.setItem("currentUser", user.email);
        document.querySelector("#mainDiv").innerHTML = "";
        CreateHeader();
        createCart(JSON.parse(localStorage.getItem("productList")));
        window.alert("Sign-in Successfully");
    }
    else
        window.alert("Sign in Failed...");
}

function isloggedIn() {
    return sessionStorage.getItem("isActive");
}

function signOutPage() {
    sessionStorage.clear();
    document.querySelector("#mainDiv").innerHTML = "";
    CreateHeader();
    createCart(getProducts());
    window.alert("Sign-out successfully")
}

function addToCartData(product) {
    var currentUser = sessionStorage.getItem("currentUser");
    var cartList = JSON.parse(localStorage.getItem("cartList"));
    let currentUserCartItems = cartList.find((obj) => { return obj.email == currentUser });
    if (currentUserCartItems) {
        var currentUserItemList = currentUserCartItems.cartItems;
        var productObj = currentUserItemList.find((obj) => { return obj.id == product.id });
        console.log(productObj);
        if (productObj)
            window.alert("Product is already added into cart");
        else {
            var index = cartList.findIndex((obj) => { return obj.email == currentUser });
            product.qty = 1;
            currentUserCartItems.cartItems.push(product);
            cartList.splice(index, 1);
            cartList.push(currentUserCartItems);
            localStorage.setItem("cartList", JSON.stringify(cartList));
            window.alert("Product added successfully...");
        }
    }
    else {
        var obj = { email: currentUser, cartItems: [] };
        product.qty = 1;
        obj.cartItems.push(product);
        cartList.push(obj);
        localStorage.setItem("cartList", JSON.stringify(cartList));
        window.alert("Prduct successfully added");
    }
}

function updateQty(productId, index) {

    var qty = document.getElementById("qtyChange" + index).value;
    var total = document.getElementById("total" + index);
    var currentUser = sessionStorage.getItem("currentUser");
    var cartList = JSON.parse(localStorage.getItem("cartList"));
    var currentUserItemList = cartList.find((obj) => {
        return obj.email == currentUser;
    });
    var cartItems = currentUserItemList.cartItems;
    var productIndex = cartItems.findIndex((obj) => {
        return productId == obj.id;
    });
    var product = cartItems[productIndex];
    product.qty = qty;

    cartItems.splice(productIndex, 1);
    cartItems.splice(productIndex, 0, product);

    currentUserItemList.cartItems = cartItems;


    var currentUserCartListIndex = cartList.findIndex((obj) => { return obj.email == currentUser });
    cartList.splice(currentUserCartListIndex, 1);
    cartList.splice(currentUserCartListIndex, 0, currentUserItemList);
    localStorage.setItem("cartList", JSON.stringify(cartList));
    total.innerText = "" + (product.price * 1 * qty);

    var totalBillLabel = document.querySelector("#totalBillLabel");
    totalBillLabel.innerHTML = "<p>Total Bill : " + getBillAmount() + "</p>";
}

function getBillAmount() {
    var currentUser = sessionStorage.getItem("currentUser");
    var cartList = JSON.parse(localStorage.getItem("cartList"));
    var currentUserCartList = cartList.find((obj) => { return obj.email == currentUser });
    var cartItems = currentUserCartList.cartItems;
    var totalBill = 0;
    for (var product of cartItems) {
        totalBill = totalBill + product.price * 1 * product.qty * 1;
    }
    return totalBill;
}

function eventAction() {
    document.querySelector("#mainDiv").innerHTML = "";
    CreateHeader();
    createCart(getProducts());
}

function SearchProduct() {
    let searchInput = document.querySelector("#SearchInput").value;
    var productList = JSON.parse(localStorage.getItem("productList"));
    var filter = productList.filter((obj) => {
        return obj.title.toUpperCase().includes(searchInput.toUpperCase());
    });
    var cartList = document.querySelector("#cart-container");
    cartList.remove();
    if (filter.length == 0) {
        createCart(productList);
    }
    else {
        createCart(filter);
    }
}

function form() {
    var container = document.getElementById("new-container");
    container.innerHTML = "";
    container.setAttribute("style", "width:100%;display-flex;justify-content:center;align-items:center;")

    var payment = document.createElement("div");
    payment.id = "form"
    payment.setAttribute("class", "container d-flex flex-column text-center p-3 border");
    payment.setAttribute("style", "box-shadow: 4px 4px 7px 4px gray;top:50%;left:50%;transform:translate(-50%,-50%);")
    payment.setAttribute("style", "width : 70%; height: 70%")

    var heading = document.createElement("h1");
    heading.setAttribute("class", "mb-4");
    heading.innerHTML = "For Payment";

    var name = document.createElement("input");
    name.setAttribute("id", "name");
    name.setAttribute("type", "name");
    name.placeholder = "Enter Name";
    name.setAttribute("class", " ml-5 p-3");
    name.setAttribute("style", "width: 80%; height: 40px; outline: none;")
    var nameerror = document.createElement("small");
    nameerror.setAttribute("class", "mb-5 text-danger")
    nameerror.setAttribute("id", "firstname");
    name.addEventListener("keyup", () => {
        validationfname();
    })

    var email = document.createElement("input");
    email.setAttribute("type", "email");
    email.setAttribute("id", "email");
    email.setAttribute("class", " ml-5 p-3");
    email.setAttribute("style", "width: 80%; height: 40px; outline: none;");
    email.placeholder = "Email address";
    var emailerror = document.createElement("small");
    emailerror.setAttribute("id", "emailerror");
    emailerror.setAttribute("class", "mb-5 text-danger");
    email.addEventListener("keyup", () => {
        validationemail();
    })

    var phone = document.createElement("input");
    // phone.setAttribute("type", "number");
    phone.setAttribute("id", "phone");
    phone.setAttribute("class", "ml-5 p-3")
    phone.setAttribute("style", "width: 80%; height: 40px; outline: none;");
    phone.placeholder = "Phone number";
    var phoneerror = document.createElement("small");
    phoneerror.setAttribute("class", "mb-5 text-danger");
    phoneerror.setAttribute("id", "phoneerror");
    phone.addEventListener("keyup", () => {
        validationphone();
    })

    let div = document.createElement("div");
    let labelforPrice = document.createElement("label");
    labelforPrice.setAttribute("style", "display:inline;font-size:25px;font-weight:500;")
    labelforPrice.innerHTML = "Total Bill Rs. "
    var amount = document.createElement("input");
    amount.setAttribute("class", "ml-5 mb-4 p-3 disabled");
    // amount.id = "totalAmount";
    amount.disabled = "true";
    amount.setAttribute("style", "width: 20%; height: 40px; outline: none;display-inline");
    amount.setAttribute("value", "" + getBillAmount());

    var buttons = document.createElement("div");
    var proceedTopay = document.createElement("button");
    proceedTopay.setAttribute("class", "m-3 mb-3");
    proceedTopay.innerHTML = "Proceed To Pay";
    proceedTopay.setAttribute("style", "width: 150px; height: 40px;background-color:green;border:none;color:white");
    proceedTopay.addEventListener("click", () => {
        return validation();
    })

    var back = document.createElement("button");
    back.innerHTML = "Exit";
    back.setAttribute("class", "m-3 mb-3");
    back.setAttribute("style", "width: 150px; height: 40px; background-color:red;border:none;color:white");

    back.addEventListener("click", () => {
        // viewCartContainer.innerHTML = "";
        document.getElementById("mainDiv").innerHTML = "";
        CreateHeader();
        createCart(getProducts());
    })

    buttons.appendChild(proceedTopay);
    buttons.appendChild(back);
    payment.appendChild(heading);
    payment.appendChild(name);
    payment.appendChild(nameerror);
    payment.appendChild(email);
    payment.appendChild(emailerror);
    payment.appendChild(phone);
    payment.appendChild(phoneerror);
    payment.appendChild(div);
    div.appendChild(labelforPrice);
    div.appendChild(amount);
    payment.appendChild(buttons);
    container.appendChild(payment);
}

function validationfname() {
    var status = true;
    var fname = document.getElementById("name").value;
    var fnameerror = document.getElementById("firstname");
    if (fname.length == 0) {
        status = false;
        fnameerror.innerHTML = "name is required";
    } else if (!isNaN(fname)) {
        status = false;
        fnameerror.innerHTML = "name must be character";
    } else {
        status = true;
        fnameerror.innerHTML = "";
    }
    return status;
}

function validationemail() {
    let status = true;
    var email = document.getElementById("email").value;
    var emailError = document.getElementById("emailerror");
    if (email.length == 0) {
        status = false;
        emailError.innerHTML = "Email id is required";
    }
    else {
        let atTheRateIndex = email.indexOf("@");
        if (atTheRateIndex == -1) {
            status = false;
            emailError.innerHTML = "Invalid email (@ not present)";
            return status;
        }
        let lastIndexOfAtTheRate = email.lastIndexOf("@");
        if (atTheRateIndex != lastIndexOfAtTheRate) {
            status = false;
            emailError.innerHTML = "Invalid email ( 2 @ present)";
            return status;
        }

        let stringAfterAtTheRate = email.substring(atTheRateIndex);
        let dotIndex = stringAfterAtTheRate.lastIndexOf(".");
        if (dotIndex == -1) {
            status = false;
            emailError.innerHTML = "Invalid email ( . not present)";
            return status;
        }

        let domainString = stringAfterAtTheRate.substring(dotIndex);
        if (!(domainString == ".in" || domainString == ".com")) {
            status = false;
            emailError.innerHTML = "Invalid email ( .in or .com not present)";
            return status;
        }

        if (email.charAt(0) == '@') {
            status = false;
            emailError.innerHTML = "Invalid email ( starting with @)";
            return status;
        }

        emailError.innerHTML = "";
    }
    return status;
}

function validationphone() {
    var phoneobj = document.getElementById("phone").value;
    var phonerror = document.getElementById("phoneerror");
    let status = true;
    if (isNaN(phoneobj)) {
        status = false;
        phonerror.innerHTML = "Only number allow";
    } else if (phoneobj.length != 10) {
        status = false;
        phonerror.innerHTML = "number must be 10 digit";
    } else {
        status = true;
        phonerror.innerHTML = "";
    }
    return status;
}

function validation() {
    var fnamestatus = validationfname();
    var emailstatus = validationemail();
    var phonestatus = validationphone();
    if (fnamestatus && emailstatus && phonestatus) {
        document.querySelector("#mainDiv").innerHTML = "";
        window.alert("Payment Successfully");
        CreateHeader();
        createCart(getProducts());
        return true;
    }
    return false;
}

function getQuantity(index) {
    var currentUser = sessionStorage.getItem("currentUser");
    var cartList = JSON.parse(localStorage.getItem("cartList"));

    var currentusercartList = cartList.find((obj) => { return obj.email == currentUser });

    var qty = currentusercartList.cartItems[index].qty;

    return qty;
}

function passwordStatus() {
    var pass = document.getElementById("password-sign-up").value;
    // let status = true;
    if (pass.length <= 5)
        return false;
    else
        return true
}

function emptyCartList() {
    var vc = document.getElementById("vc");
    var cart = document.getElementById("cart-container");
    if (vc.id == 'vc') {
        cart.innerHTML = "product not added";
        // alert("error")
    }
}

