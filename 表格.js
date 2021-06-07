let add = document.querySelector(".add");
let _table = document.querySelector("table")
let del = document.querySelector(".del")
let sort = document.querySelector(".sort")
let allSelect = document.querySelector(".allSelect")
let reverse = document.querySelector(".reverse")
let up = document.querySelector(".up")
let dn = document.querySelector(".dn")
let numUp = document.querySelector(".num-up")
let numDn = document.querySelector(".num-dn")
let i = 0;
let info_len = info.length;

//添加
add.addEventListener("click", function () {
    if (i < info_len) {
        //添加行
        let _tr = document.createElement("tr");
        _table.appendChild(_tr);

        //添加序列号
        let _td = document.createElement("td");

        _td.innerHTML = String(i + 1).padStart(2, 0);

        _tr.appendChild(_td);

        //添加姓名
        let _name = document.createElement("td");
        _name.innerHTML = info[i].name;
        _tr.appendChild(_name);

        //添加年龄
        let _age = document.createElement("td");
        _age.innerHTML = info[i].age;
        _tr.appendChild(_age);

        //添加操作
        let _del = document.createElement("td");
        _del.innerHTML = ('<button style="cursor: pointer; ">删除</button>');
        _tr.appendChild(_del);
        _del.onclick = function () {
            let tips = confirm("确定要删除吗")
            if (tips) {
                this.parentNode.parentNode.removeChild(this.parentNode);
            }
        }

        //添加选择
        let _check = document.createElement("td");
        _check.innerHTML = ('<input type="checkbox" name="" id="">');
        _tr.appendChild(_check);
        i++

    } else {
        alert("暂无访客信息")
    }
})

//删除
del.addEventListener("click", function () {
    let check = document.querySelectorAll("input");
    let Tr = document.querySelectorAll("tr");
    let tips = confirm("确定要删除吗")
    if (tips) {
        for (let i = 1; i <= Tr.length; i++) {
            if (check[i - 1].checked == true) {
                Tr[i].outerHTML = ""

            }
        }
    }
})

//排序
sort.addEventListener("click", function () {
    //将第一行排除在外的所有tr标签
    let trList = document.querySelectorAll("tr:not(:first-child)");

    // info.sort(function (a, b) {
    //     return a.age - b.age
    // })

    //将nodelist转化成array
    // let trArr = [];
    // trList.forEach(function (item) {
    //     trArr.push(item);
    // })
    //es6拓展运算符 trList->trArr
    let trArr = [...trList];

    //使用sort方法排序 根据年龄
    trArr.sort(function (a, b) {
        return a.children[2].innerText - b.children[2].innerText
    })

    trArr.forEach(function (item) {
        _table.appendChild(item)
    })
})

up.addEventListener("click", function () {
    let trList = document.querySelectorAll("tr:not(:first-child)");
    // info.sort(function (a, b) {
    //     return a.age - b.age
    // })

    let trArr = [...trList];

    trArr.sort(function (a, b) {
        return a.children[2].innerText - b.children[2].innerText
    })

    trArr.forEach(function (item) {
        _table.appendChild(item)
    })
})

dn.addEventListener("click", function () {
    let trList = document.querySelectorAll("tr:not(:first-child)");
    // info.sort(function (a, b) {
    //     return a.age - b.age
    // })

    let trArr = [...trList];

    trArr.sort(function (a, b) {
        return b.children[2].innerText - a.children[2].innerText
    })

    trArr.forEach(function (item) {
        _table.appendChild(item)
    })
})



//全选
allSelect.addEventListener("click", function () {

    let check = document.querySelectorAll("input");

    for (let i = 0; i < check.length; i++) {
        check[i].checked = true
    }
})

//反选
reverse.addEventListener("click", function () {

    let check = document.querySelectorAll("input");

    for (let i = 0; i < check.length; i++) {
        if (check[i].checked) {
            check[i].checked = false
        } else {
            check[i].checked = true
        }

    }
})

//序号排序
numUp.addEventListener("click", function () {
    let trList = document.querySelectorAll("tr:not(:first-child)");


    let trArr = [...trList];

    trArr.sort(function (a, b) {
        return a.children[0].innerText - b.children[0].innerText
    })

    trArr.forEach(function (item) {
        _table.appendChild(item)
    })
})

numDn.addEventListener("click", function () {
    let trList = document.querySelectorAll("tr:not(:first-child)");


    let trArr = [...trList];

    trArr.sort(function (a, b) {
        return b.children[0].innerText - a.children[0].innerText
    })

    trArr.forEach(function (item) {
        _table.appendChild(item)
    })
})