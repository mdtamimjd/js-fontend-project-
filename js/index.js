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