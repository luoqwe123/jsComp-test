import MyMessage from "./component/Message/index.js";


export default function (val) {
    const oBtn = document.querySelector(`${val}`);
    oBtn.addEventListener("click", () => {
        MyMessage({
            content: "success",
            showClose: true,
            type: "primary"
        })
    })
}