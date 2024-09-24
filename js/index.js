addHide("admin")
// addHide("user")
addHide("payment")

getId("admin-btn").addEventListener("click",()=>{
    addHide("user")
    addHide("payment")
    showAndHide("admin")
})
getId("user-btn").addEventListener("click",()=>{
    addHide("admin")
    addHide("payment")
    showAndHide("user")
})

// admin btn
addHide("order")
getId("order-btn").addEventListener("click",()=>{
    addHide("admin-product-create-and-show")
    getId("order").classList.remove("hidden")
})
getId("product-btn").addEventListener("click",()=>{
    addHide("order")
    getId("admin-product-create-and-show").classList.remove("hidden")
})