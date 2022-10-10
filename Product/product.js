let container = document.querySelector(".container");

fetch("product.json")
  .then((response) => response.json())
  .then((l) => {
    let x = l.Products;
    x.forEach((Product) => {
      container.innerHTML += `
      <section class="pContainer"> 
      <div class="imageContainer">
      <img class="pImages" src=${Product.productImg}>
      </div>
      <div class="cContent">
      <h1 class="pGroup">${Product.productGroup}</h1>
      <h2 class="pName">${Product.productId}</h2>
      <p class="pDisc">${Product.productDescription}</p>
      <p class="pPricing">${Product.productCost} | <img class="pRating" src="/Product/images/rateicons.webp"> </p>
      <p class="pButton">MORE INFORMATION</p>
      </div>
      </section>
      `;
    });
  });

// let headers = document.querySelector(".headers");
