import MyMessage from "./component//Message/index.js";


export default function (val) {
    const oBtn = document.querySelector(`${val}`);
    console.log(111)
    oBtn.addEventListener("click", () => {
        MyMessage({
            content: "success",
            showClose: true,
            type: "primary"
        })
    })
}