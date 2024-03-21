var parentContainer = document.querySelector(".main-container");

var oldlength = 0;

function startevent(somedata) {
    var currentChild = Array.from(parentContainer.children);

    var add = 0;
    var remove = 0;
    var update = 0;
    somedata.forEach((somedata) => {
        var existingchild = currentChild.find((data) => {
            return data.id == somedata.id;
        })
        console.log(existingchild);
        if (existingchild) {
            console.log(existingchild.id);
            if (somedata.id == existingchild.id) {
                currentChild.children[0].innerHTML = "updated node";
                currentChild.children[1].innerHTML = somedata.batch;
                currentChild.children[2].innerHTML = somedata.class;
            }
        }
        else {
            add++;
            var main = document.createElement("div");
            var a = document.createElement("p");
            var b = document.createElement("p");
            var c = document.createElement("p");
            a.innerHTML = somedata.id;
            b.innerHTML = somedata.batch;
            c.innerHTML = somedata.class;

            main.appendChild(a);
            main.appendChild(b);
            main.appendChild(c);
            parentContainer.appendChild(main);
        }
    });
    remove++;
    currentChild.forEach((data) => {
        parentContainer.removeChild(data);
    })

}

setInterval(() => {
    let mydata = [];
    const rdm = Math.floor(Math.random() * 2);
    console.log(rdm);
    for (i = 0; i < rdm; i++) {

        mydata.push({
            "id": rdm,
            "name": "Block no." + i,
            "batch": "engineering",
            "class": "fifth"
        });
    }
    startevent(mydata)
}, 1000)