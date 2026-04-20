<script>
    const products = {
        grocery: [
    {name:"Rice", price:50, img:"rice.jpg"},
    {name:"Sugar", price:40, img:"sugar.jpg"}
    ]
    stationery: [
    {name:"Notebook", price:50},
    {name:"Pen", price:10}
    ],
    gift: [
    {name:"Teddy", price:200},
    {name:"Gift Box", price:150}
    ]
};

    function showCategory(category){
        document.getElementById("categoryProducts").style.display = "block";

    document.getElementById("categoryTitle").innerText=category.toUpperCase();

    let list=document.getElementById("productList");
    list.innerHTML="";

  products[category].forEach(item=>{
        let div=document.createElement("div");
    div.className="card";
    div.innerHTML=`
    <h3>${item.name}</h3>
    <p>₹${item.price}</p>
    <button onclick="addToCart('${item.name}',${item.price})">Add to Cart</button>
    `;
    list.appendChild(div);
  });
}
</script>