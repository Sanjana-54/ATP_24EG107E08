//i. product.js - Product catalog 
                          

// Product database (simulated)
                          
const products = [
    { id: 1, name: 'Laptop', price: 50000, stock: 10, category: 'electronics' },
    { id: 2, name: 'Phone', price: 30000, stock: 15, category: 'electronics' },
    { id: 3, name: 'Headphones', price: 2000, stock: 25, category: 'accessories' },
    { id: 4, name: 'Mouse', price: 500, stock: 50, category: 'accessories' },
    { id: 5, name: 'Keyboard', price: 1500, stock: 30, category: 'accessories' }
    ];
                         
    // TODO: Implement these functions
                          
    export function getProductById(id) {
      // Find and return product by ID
        return products.find((prod)=>prod.id===id);
        }
                          
    export function getAllProducts() {
      // Return all products
         return products;

        }
                          
    export function getProductsByCategory(category) {
        // Filter products by category
        return products.filter(function(prod){
            return prod.category===category;
        })
        };
                          
    export function searchProducts(query) {
        // Search products by name (case-insensitive)
        return products.filter((prod)=>prod.name.toLowerCase().includes(query.toLowerCase())
            )
       };
                          
    export function checkStock(productId, quantity) {
        // Check if product has enough stock
        const prod=products.find(p=>p.id===productId);
        if(!prod){
            return false;
        }
        return prod.stock>=quantity;
    }
                          
    export function reduceStock(productId, quantity) {
        //using find() here to get the product id
     const find_prod=products.find((prod)=>prod.id===productId)
     if(!find_prod){
        return "Product doesn't exist";
     }
        // to check if enough stock is available
    if(find_prod.stock>=quantity){
        // Reduce product stock after purchase
        find_prod.stock=find_prod.stock-quantity;
        return true;
     }
     else{
        return "Stock insufficient";
     }
    }