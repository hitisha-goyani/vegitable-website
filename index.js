

    // Funzionalità ricerca
    function filterProducts(searchText) {
        const filtered = products.filter(product => {
            const searchContent = searchText.toLowerCase();
            return (
                product.name.toLowerCase().includes(searchContent) ||
                product.description.toLowerCase().includes(searchContent)
            );
        });
        
        renderProducts(filtered);
    }

    function renderProducts(productsToShow) {
        const productsContainer = document.getElementById('products');
        productsContainer.innerHTML = productsToShow.length ? 
            productsToShow.map(product => `
                <div class="product-card">
                    <img src="${product.image}" class="product-image">
                    <h3>${product.name}</h3>
                    <p class="product-price">$${product.price.toFixed(2)}</p>
                    <p>${product.description}</p>
                    <button onclick="Cart.addItem(${JSON.stringify(product).replace(/"/g, '&quot;')}" 
                        style="margin-top: 10px; padding: 8px 15px; background-color: #3498db; color: white; border: none; border-radius: 4px; cursor: pointer;">
                        more
                    </button>
                </div>
            `).join('') : 
            '<div class="no-results">Nessun prodotto trovato per "${document.getElementById('searchInput').value}"</div>';
    }

    // Event listener per la ricerca
    document.getElementById('searchInput').addEventListener('input', function(e) {
        filterProducts(e.target.value);
    });

    // Modifica la funzione DOMContentLoaded
    document.addEventListener('DOMContentLoaded', () => {
        filterProducts(''); // Mostra tutti i prodotti inizialmente
        // ... resto del codice esistente
    });




function triggerSearch() {
        const searchText = document.getElementById('searchInput').value;
        filterProducts(searchText);
    }

    
    document.getElementById('searchInput').addEventListener('keypress', function(e) {
        if(e.key === 'Enter') {
            triggerSearch();
        }
    });

    // Modifica la funzione esistente
    function filterProducts(searchText) {
        const searchContent = searchText.toLowerCase().trim();
        const filtered = products.filter(product => {
            return (
                product.name.toLowerCase().includes(searchContent) ||
                product.description.toLowerCase().includes(searchContent) ||
                product.price.toString().includes(searchContent)
            );
        });
        
        renderProducts(filtered);
        
        // Animazione feedback
        if(searchContent && filtered.length === 0) {
            document.getElementById('searchInput').classList.add('search-error');
            setTimeout(() => {
                document.getElementById('searchInput').classList.remove('search-error');
            }, 1000);
        }
    }

    
    .search-error {
        animation: shake 0.5s;
        border-color: #e74c3c !important;
    }

    @keyframes shake {
        0% { transform: translateX(0); }
        25% { transform: translateX(5px); }
        50% { transform: translateX(-5px); }
        75% { transform: translateX(5px); }
        100% { transform: translateX(0); }
    }


    