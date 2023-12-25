export function createMarcup (arr) {
       return arr.map(({id,img,name,category,size,popularity})=>`
    <h2 class="cards-title">Popular products</h2>
    <div class="cards-box">
        <ul class="cards-list">
            <li class ="cards-item">
                <div class="photo-card">
                        <img class = "cards__image" src="${img}" alt="${name}" loading="lazy" />
                     
                </div> 
                <div class="info">
                        <h3 class="info-title">${name}</h3>      
                        <p class="info-text">
                            Category:<span class="info-span">${category}</span>
                        </p>
                        <wraper class="info-wraper">
                            <p class="info-text">
                                Size:<span class="info-span">${size}</span>
                            </p>
                            <p class="info-text">
                                Popularity:<span class="info-span">${popularity}</span>
                            </p>
                        </wraper>
                   </div>
                   <button class="btn-popular-products" type="button">
                    <svg class="btn-icon-svg" width="12" height="12">
                    <use href="./img/icons.svg#shopping-cart-icon"></use>
                </svg></button>
                   <button class="btn-popular-products-ok" type="button">
                    <svg class="btn-icon-svg-check" width="12" height="12">
                        <use href="./img/icons.svg#check-mark-icon"></use>
                    </svg>
                   </button>
    
                   </li>    
        </ul>
    
    </div>
    `).join("")
}