let mas = [
    {
        name: "tuz",
        soni: 5,
        soni2: 5,
        son: 0
    },
    {
        name: "olma",
        soni: 5,
        soni2: 5,
        son: 0
    },
    {
        name: "nok",
        soni: 5,
        soni2: 5,
        son: 0
    },
    {
        name: "qovun",
        soni: 5,
        soni2: 5,
        son: 0
    },
    {
        name: "tarvuz",
        soni: 5,
        soni2: 5,
        son: 0
    },
    {
        name: "o'rik",
        soni: 5,
        soni2: 5,
        son: 0
    },
    {
        name: "shoptoli",
        soni: 5,
        soni2: 5,
        son: 0
    },
    {
        name: "olcha",
        soni: 5,
        soni2: 5,
        son: 0
    },
    {
        name: "mango",
        soni: 5,
        soni2: 5,
        son: 0
    },
    

]
let row = $(".row")
let index2 = 0

function bos(index) {
    index2 = index
    if (mas[index].soni > 0) {
        mas[index].son++
        mas[index].soni--
    } else {
        alert("Buncha mahsulot ololmaysiz")
    }
    chiz()
}

function bos1(index) {
    index2 = index
    if (mas[index].son > 0) {
        mas[index].son--
    }
    if (mas[index].soni < mas[index].soni2) {
        mas[index].soni++
    } else {
        alert("Buncha mahsulot ololmaysiz")
    }
    chiz()
}

function sot() {
    mas.map((item, index) => {
        if (item.son != 0) {
            item.son = 0
        }
    })
    alert("Xaridingiz uchun raxmat")
    chiz()

}

function chiz() {
    row.html("")

    mas.map((item, index) => {
        let col = `
        <div class="col-4">
            <div class="card text-center">
                <h1>${item.name}</h1>
                <h2>Miqdori: ${item.soni}</h2>
                <div class="d-flex justify-content-center">
                    <button class='btn btn-danger' onclick="bos1(${index})">-</button>
                    <h2>${item.son}</h2>
                    <button class='btn btn-success' onclick="bos(${index})">+</button>
                </div>
            </div>
        </div>
        `
        row.append(col)
    })
}
chiz()