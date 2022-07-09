const imgContainer = document.querySelector(".images")

// data for all image div
const imgData = [
    {
        id: 1,
        loc: '<img src="img/2.jpg" alt="img"/>'
    },
    {
        id: 2,
        loc: '<img src="img/3.jpg" alt="img"/>'
    },
    {
        id: 3,
        loc: '<img src="img/1.jpg" alt="img"/>'
    },
    {
        id: 4,
        loc: '<img src="img/4.jpg" alt="img"/>'
    },
    {
        id: 5,
        loc: '<img src="img/5.jpg" alt="img"/>'
    },
    {
        id: 6,
        loc: '<img src="img/6.jpg" alt="img"/>'
    }
]

// create empty array for ids 
let ids = []

// loop through the image data and create necessary html element
for (let x = 0; x < imgData.length; x++) {
    let nImg = [imgData[Math.floor(Math.random() * imgData.length)]]

    ids.push(x)

    nImg.map(items => {
        let holdImg = createElements("div", {"class":"holdImg", "id":items.id})

        let flipper = createElements("div", {"class":"flipInner", "id":items.id})
        
        let front = createElements("div", {"class":"front", "id":x,"onClick":"imgBtn(this)"})
        
        let back = createElements("div", {"class":"img", "id": items.id})
        back.innerHTML = items.loc

        // append all 
        flipper.appendChild(front)
        flipper.appendChild(back)
        holdImg.appendChild(flipper)

        imgContainer.appendChild(holdImg)
    })
}

// if the image is clicked flip 
const flipInner = document.querySelectorAll(".flipInner")
function imgBtn(id) {
    let clickId = id.getAttribute("id")
    ids.filter(ids => {
        if (clickId == ids) {
            flipInner[ids].classList.add("flip")
            const flipped = document.querySelectorAll(".flip")
            checkImg(flipped)
        }
    })
}

// function to create element and setAttribute 
function  createElements(ele, attrs) {
    let elem = document.createElement(ele)
    for (const key in attrs) {
        elem.setAttribute(key, attrs[key])
    }
    return elem
}

// function to check if the image flipped are identical
function checkImg(gFlip) {
    if (gFlip.length == 2) {
        const imgC= document.querySelectorAll(".holdImg")
        for (let x = 0; x < imgC.length; x++) {
            imgC[x].style.pointerEvents = "none"
        }
        const fCard = gFlip[0].getAttribute("id"),
        sCard = gFlip[1].getAttribute("id"),
        openGame = document.querySelector(".openGame"),
        winAnnounce = document.querySelector(".winAnnounce"),
        wonOrNot = document.querySelector(".wonOrNot")
        countDown = document.querySelector(".restartGame span")
        
        
        if (fCard === sCard) {
            setTimeout(() => {
                openGame.style.display = "none"
                wonOrNot.innerHTML = "congrats you won!";
                winAnnounce.style.display = "block"
                let num = 3
                let rNum = setInterval(() => {
                    if (num <= 0) {
                        clearInterval(rNum)
                        location.href = "index.html"
                    }
                    countDown.innerHTML = num
                    num--
                }, 1000);
            }, 1500);
        } else {
            setTimeout(() => {
                openGame.style.display = "none"
                wonOrNot.innerHTML = "oops try again!";
                winAnnounce.style.display = "block"
                let num = 3
                let rNum = setInterval(() => {
                    if (num <= 0) {
                        clearInterval(rNum)
                        location.href = "index.html"
                    }
                    countDown.innerHTML = num
                    num--
                }, 1000);
            }, 1500);
        }
    }
}

// Copyright 2022 21base

