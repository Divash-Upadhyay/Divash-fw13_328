
    let url="https://www.themealdb.com/api/json/v1/1/categories.php";
    let maindiv=document.getElementById("appnd");

    let cartData=JSON.parse(localStorage.getItem("cartItem"))||[];

    document.getElementById("cart").textContent=cartData.length;


    async function dishes(){
        let response= await fetch(url);

        let data=await response.json();

        let dt=data.categories;

    //    console.log(data)
    show(dt);
    }

    dishes();


    function show(food){
        food.forEach(function (dt){
            let div=document.createElement("div");
            div.style.display="inline-block"
            div.style.marginRight="30px"
            div.style.marginLeft="10px"
            div.style.border="1px solid teal"
            // div.style.Color="teal"


            let img=document.createElement("img");
            img.src=dt.strCategoryThumb;

            let name=document.createElement("div");
            name.innerHTML=dt.strCategory;

            let price=document.createElement("h4");
            price.textContent= Math.floor(Math.random() *(500 - 100)+100);

            let cart=document.createElement("button")
            cart.textContent="addtoCart";
            cart.addEventListener("click", function(){
                let imgL=img.src;
                let nameL=name.innerHTML;
                let priceL=price.textContent;

                let cartItem={
                    name:nameL,
                    img:imgL,
                    price:priceL,
                    // count:col,
                }

                addtoCart(cartItem);
            });

            var hr=document.createElement("hr");


            div.append(img,name,price,cart,hr);
            maindiv.append(div);
        })

    }

    function addtoCart(cartItem){
        cartData.push(cartItem)

        localStorage.setItem("cartItem", JSON.stringify(cartData));
        window.location.reload();
    }
