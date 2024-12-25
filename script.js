// 商品データ
const products = [
    {
        name: "ストレス解消グッズA",
        image: "https://via.placeholder.com/200", // 画像URLを差し替えてください
        price: "2,000円",
        description: "この商品はストレス解消に役立つ便利なアイテムです！",
    },
    {
        name: "ストレス解消グッズB",
        image: "https://via.placeholder.com/200",
        price: "3,500円",
        description: "持ち運びに便利なコンパクトサイズのアイテムです。",
    },
    {
        name: "ストレス解消グッズC",
        image: "https://via.placeholder.com/200",
        price: "4,000円",
        description: "デスクワーク中のリラックスに最適です。",
    },
    {
        name: "ストレス解消グッズD",
        image: "https://via.placeholder.com/200",
        price: "5,000円",
        description: "デスクワーク中のリラックスに最適です。",
    },
    {
        name: "ストレス解消グッズE",
        image: "https://via.placeholder.com/200",
        price: "5,000円",
        description: "デスクワーク中のリラックスに最適です。",
    },
    {
        name: "ストレス解消グッズF",
        image: "https://via.placeholder.com/200",
        price: "5,000円",
        description: "デスクワーク中のリラックスに最適です。",
    },
    {
        name: "ストレス解消グッズG",
        image: "https://via.placeholder.com/200",
        price: "5,000円",
        description: "デスクワーク中のリラックスに最適です。",
    },
    {
        name: "ストレス解消グッズH",
        image: "https://via.placeholder.com/200",
        price: "5,000円",
        description: "デスクワーク中のリラックスに最適です。",
    },
    {
        name: "ストレス解消グッズI",
        image: "https://via.placeholder.com/200",
        price: "5,000円",
        description: "デスクワーク中のリラックスに最適です。",
    },

    {
        name: "ストレス解消グッズJ",
        image: "https://via.placeholder.com/200",
        price: "5,000円",
        description: "デスクワーク中のリラックスに最適です。",
    },


];

// HTML要素を取得
const productList = document.querySelector(".product-list"); // クラス名で取得
const productDetails = document.getElementById("product-details");


// 商品リストを表示
products.forEach((product, index) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product");
    productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.price}</p>
    `;
    productCard.addEventListener("click", () => showDetails(index));
    productList.appendChild(productCard);
});

// 商品詳細を表示
function showDetails(index) {
    const product = products[index];
    productDetails.innerHTML = `
        <h2>${product.name}</h2>
        <img src="${product.image}" alt="${product.name}">
        <p><strong>価格:</strong> ${product.price}</p>
        <p>${product.description}</p>
    `;
}
