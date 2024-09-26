// buy now btn click
function productBtn(img,title,price){
    getId("show-title").innerText = `Title: ${title}`;
    getId("show-img").setAttribute("src",img)
    getId("show-price").innerText = `Price: ${price} ৳`
    getId("payment").classList.remove("hidden");
}
// paymant close btn
getId("closePayment-btn").onclick = ()=>{
    getId("payment").classList.add("hidden");
}

// payment form order btn click
getId("payment-btn-order").addEventListener("click",()=>{
    let fuName = getValue("full-name")
    let conNum = getValue("contact-number")
    let paymentABtn = getValue("payment-account-btn")
    let transitionId = getValue("transition-btn")
    let spm = getValue("select-payment-method");
    let dateNow = (new Date()).toLocaleString();


    // product details
    let title = getId("show-title").innerText;
    let price = getId("show-price").innerText;

    let div = document.createElement("div");
    div.classList.add(
        "p-2",
        "border",
        "rounded-lg",
        "space-y-3"
    );
    div.innerHTML = `
        <h2 class="font-semibold text-2xl text-zinc-300">Title: ${title}</h2>
        <span class="flex justify-between items-center">
        <p class="font-medium text-lg text-zinc-500">price: ${price}</p>
        <p class="font-light text-lg text-zinc-400">Date: ${dateNow}</p>
        </span>
        <div>
            <h2 class="text-center font-medium text-2xl">Order information</h2>
            <p class="font-bold text-xl text-zinc-400">User Name: ${fuName}</p>
            <p class="font-bold text-xl text-zinc-400">Contact Number: ${conNum}</p>
            <p class="font-bold text-xl text-zinc-400">Payment Method: ${spm}</p>
        </div>
    `;
    let showPandinglist = getId("all-order-list");
    showPandinglist.insertBefore(div,showPandinglist.childNodes[0])


    // value is none
    getId("full-name").value = "";
    getId("contact-number").value = "";
    getId("payment-account-btn").value = "";
    getId("transition-btn").value = "";
    getId("select-payment-method").value = "";

    // hide the payment section
    addHide("payment")
    getId("modal-section").classList.remove("hidden")
    getId("modal-section").classList.add("flex")
})

// modal close btn
getId("modal-close").onclick = ()=>{
    getId("modal-section").classList.add("hidden");
    getId("modal-section").classList.remove("flex");
}