getId("Create-product-btn").addEventListener("click",(event)=>{
    event.preventDefault();
    let img = getValue("img-url");
    let productTitle = getValue("product-title");
    let productPrice = getValue("product-price");
    if(img.length < 1 || productTitle.length < 4 || isNaN(productPrice)){
        alert("Please enter a valid product details.");
        return
    }
    let productAdd = document.createElement("div");
    productAdd.classList.add(
        "hover:bg-zinc-800","p-3","rounded-lg", "shadow-lg", "shadow-green-500", "space-y-2", "w-full"
    )
    productAdd.innerHTML = `
    <h3 class="font-semibold text-xl text-zinc-200">Product title: ${productTitle}</h3>
    <p class="font-medium text-lg text-zinc-200">Price:<span class="font-bold">${productPrice}</span></p>
    `;
    let addPrant = getId("admin-product-list-show");
    addPrant.insertBefore(productAdd,addPrant.childNodes[0])

    // add product user sell list
    let sellProductCard = document.createElement("div");
    sellProductCard.classList.add(
        "w-full",
        "flex",
        "flex-col",
        "gap-4",
        "bg-zinc-700",
        "p-3",
        "pb-4",
        "rounded-lg"
    );
    sellProductCard.innerHTML = `
    <div id="sell-product-img" class="p-2 hover:bg-zinc-600 rounded-lg border"><img src="${img}" alt="Image" class="rounded-lg shadow shadow-white"></div>
                    <h2 class="font-semibold text-2xl text-zinc-200 line-clamp-3">${productTitle}</h2>
                    <p class="font-medium text-lg text-zinc-200">Price: ${productPrice}TK</p>
                    <div class="flex justify-between items-center">
                        <button class="py-2 px-5 bg-orange-400 rounded-lg text-black font-medium text-lg">Add to card</button>
                        <button class="py-2 px-5 bg-green-400 rounded-lg text-black font-medium text-lg">Buy now</button>
                    </div>
    `;
    let sellProductShow = getId("sell-product-show");
    sellProductShow.insertBefore(sellProductCard,sellProductShow.childNodes[0]);
    console.log("Done")

    // input value black
    getId("img-url").value = "";
    getId("product-title").value = "";
    getId("product-price").value = "";

    // dainamic id num update
})