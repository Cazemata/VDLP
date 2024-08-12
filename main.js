import content from './content.json' with { type: "json" }
import category from './categories.json' with { type: "json" }

window.main = new class {
    constructor() {
        this.initMenu()
        document.querySelector("#search").addEventListener("keyup", () => this.mySearch())
        document.querySelector(".card-row").innerHTML = this.getData().map((item, index) => this.getCardHtml(item, index)).join("")
    }

    getData() {
        return content.map((object) => {
            const matched = category.find((element) => element.CategoryId === object.CategoryId)
            return { ...object, ...matched }
        })
    }

    getCardHtml(item, index) {
        return `
            <div class="card">
            <div class="img" style="background-image:${item.Image};"></div>
            <div class="content">
                <div class="card-title">${item.Title}</div>
                <div class="author">${item.Author}</div>
                <div class="desc"><p>${item.Desc}</p></div>
                <div class="end h2">
                    <div class="btn-link">
                    Get Started
                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.7656 17.0573L17.8489 9.97396M17.8489 9.97396L10.7656 2.89062M17.8489 9.97396H2.22394" stroke="#BD0000" stroke-linecap="round"/>
                    </svg>
                    </div>      
                </div>
            </div>
        </div>
        `
    }

    initMenu() {
        let menu = document.querySelector("#menu")
        let btns = Array.from(menu.querySelectorAll(".item"))

        btns.map(btn => {
            btn.addEventListener("click", () => {
                btns.map(b => b.classList.remove("active"))
                btn.classList.add("active")
            })
        })
    }

    mySearch() {
        let sub_items = [".card-title", ".author", ".desc"]
        let src_text = document.querySelector("#search").value.toLowerCase()
        let results = []
        // console.log(src_text)
        Array.from(document.querySelectorAll(".card")).map(card => {
            let content = card.querySelector(".content")
            let found = false
            sub_items.map(sub_item => {
                let text = content.querySelector(sub_item).innerText.toLowerCase()
                if (text.includes(src_text) && !found) {
                    results.push(card)
                    found = true
                }
            })
            card.style.display = "none"
        })
        results.map(item => item.style.display = "block")
        return results
    }
}