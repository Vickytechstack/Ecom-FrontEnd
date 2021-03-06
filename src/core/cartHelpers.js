export const addItem = (item, next) => {
    let cart = [];
    if (typeof window !== "undefined") {
        if (localStorage.getItem('cart')) {
            cart = JSON.parse(localStorage.getItem("cart"))
        }
        cart.push({
            ...item,
            count: 1
        })

        //remove duplicates
        //build an array from new Set and turn it back into array using Array.from
        //so that later we can re-map it
        //new Set will only allow unique values in it
        //so pass the id of  each object/product 
        //If loop tries to add the same value again it will get ignored
        //with the array of ids  we got an when first map() was used
        //run map() on it again and return the actual product from the cart

        cart = Array.from(new Set(cart.map((p) => (p._id)))).map(id => {
            return cart.find(p => p._id === id);
        });
        localStorage.setItem('cart', JSON.stringify(cart))
        next();
    }
};



export const itemTotal = () => {
    if (typeof window !== 'undefined') {
        if (localStorage.getItem('cart')) {
            return JSON.parse(localStorage.getItem("cart")).length;
        }
    }
    return 0;
};

export const getCart = () => {
    if (typeof window !== 'undefined') {
        if (localStorage.getItem('cart')) {
            return JSON.parse(localStorage.getItem("cart")).length;
        }
    }
    return [];
};

export const updateItem = (productId, count) => {
    let cart = []
    if (typeof window !== "undefined") {
        if (localStorage.getItem("cart")) {
            cart = JSON.parse(localStorage.getItem('cart'))
        }

        cart.map((product, i) => {
            if (product._id === productId) {
                cart[i].count = count
            }
        })
        localStorage.setItem("cart", JSON.stringify(cart));
    }
};