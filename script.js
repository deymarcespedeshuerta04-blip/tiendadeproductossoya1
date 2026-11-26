// ==========================================================================
// 1. CATÁLOGO DE PRODUCTOS A BASE DE SOYA (PRECIOS EN Bs + BENEFICIOS + RECETAS)
// ==========================================================================
const products = [
    {
        id: 1,
        name: "Leche de Soya Tradicional (1L)",
        category: "leches",
        price: 10.00,
        image: "LECHE DE SOYA.jfif",
        description: "Bebida vegetal pura de soya seleccionada, artesanal y libre de lactosa.",
        tag: "Bestseller",
        benefits: [
            "Aporta 9g de proteína vegetal completa por vaso.",
            "100% libre de lactosa y colesterol, facilita una digestión ligera.",
            "Rica en isoflavonas naturales que cuidan la salud cardiovascular."
        ],
        detailedBenefit: "Ideal para reemplazar la leche de vaca en desayunos y batidos. Fortalece la masa muscular, protege el corazón y evita la pesadez estomacal.",
        recipe: {
            yield: "1 Litro",
            prepTime: "25 min (+ remojo)",
            ingredients: [
                "150 g de soya en grano seleccionada",
                "1,2 L de agua purificada",
                "1 rama de canela o vainilla al gusto"
            ],
            steps: [
                "Remoja los granos en agua limpia por 8 horas y enjuágalos bien.",
                "Licúa la soya hidratada con el agua purificada y cuela con tela fina.",
                "Hierve a fuego bajo por 15 minutos sin dejar de remover, deja enfriar y refrigera."
            ]
        }
    },
    {
        id: 2,
        name: "Hamburguesa de Soya Artesanal",
        category: "derivados",
        price: 22.00,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeBTwVe46KANuJzMnPkUI-_w6OoSIH-KUTnjmREgaeCg&s=10",
        description: "Medallones de soya texturizada sazonados con hierbas naturales, altos en proteína.",
        tag: "Especial",
        benefits: [
            "Alto contenido proteico vegetal equivalente a la carne.",
            "Cero grasas trans y bajo aporte calórico.",
            "Fuente natural de hierro, calcio y fibra dietética."
        ],
        detailedBenefit: "Alternativa nutritiva y saciante para almuerzos saludables. Ayuda a mantener niveles estables de energía sin colesterol ni grasas saturadas.",
        recipe: {
            yield: "4 Medallones",
            prepTime: "30 min",
            ingredients: [
                "200 g de soya texturizada hidratada y escurrida",
                "1/2 taza de harina de avena o pan rallado integral",
                "1/2 cebolla picada, 1 diente de ajo, perejil y comino al gusto"
            ],
            steps: [
                "Hidrata la soya texturizada en agua tibia por 15 minutos y escúrrela bien.",
                "Mezcla con la cebolla, ajo, especias y avena hasta lograr una masa firme.",
                "Forma los medallones y cocina a la plancha 4 minutos por lado hasta dorar."
            ]
        }
    },
    {
        id: 3,
        name: "Soya Tostada Crujiente (250g)",
        category: "bocadillos",
        price: 12.00,
        image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?auto=format&fit=crop&w=600&q=80",
        description: "Granos enteros de soya seleccionados y tostados artesanalmente sin frituras.",
        tag: "Nuevo",
        benefits: [
            "Gran aporte de fibra insoluble que mejora el tránsito intestinal.",
            "Snack energético con ácidos grasos esenciales Omega-3 y Omega-6.",
            "Genera saciedad prolongada ideal para controlar el apetito."
        ],
        detailedBenefit: "Merienda crujiente y saludable para cualquier hora del día. Aporta minerales esenciales como magnesio, potasio y fósforo.",
        recipe: {
            yield: "250 gramos",
            prepTime: "35 min (+ remojo)",
            ingredients: [
                "250 g de grano entero de soya seleccionado",
                "1 pizca de sal mineral o cúrcuma natural",
                "1 cucharadita de aceite de oliva (opcional)"
            ],
            steps: [
                "Remoja los granos de soya durante 6 horas, escurre y seca con un paño limpio.",
                "Extiende en una bandeja o sartén amplia a fuego medio-bajo.",
                "Tuesta removiendo constantemente por 25 minutos hasta que estén dorados y crocantes."
            ]
        }
    },
    {
        id: 4,
        name: "Galletas de Soya Artesanales",
        category: "bocadillos",
        price: 14.00,
        image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=600&q=80",
        description: "Galletas horneadas con harina integral de soya y okara fresca, bajas en azúcar.",
        tag: "Artesanal",
        benefits: [
            "Elaboradas con fibra integral de soya (okara) de alta digestibilidad.",
            "Aportan energía sostenida sin picos bruscos de glucosa.",
            "Ricas en vitaminas del complejo B y antioxidantes naturales."
        ],
        detailedBenefit: "Acompañamiento perfecto para el café o té. Nutren el organismo con fibra prebiótica que favorece la flora intestinal.",
        recipe: {
            yield: "12 Galletas",
            prepTime: "25 min",
            ingredients: [
                "1 taza de pulpa de soya fresca (okara) prensada",
                "1 taza de harina integral + 1/2 taza de avena",
                "3 cucharadas de miel o panela, 1 cucharadita de esencia de vainilla"
            ],
            steps: [
                "Integra la okara con la harina, avena, endulzante y vainilla hasta formar masa.",
                "Moldea discos delgados y colócalos sobre una bandeja engrasada.",
                "Hornea a 180 °C durante 15 a 18 minutos hasta que los bordes estén dorados."
            ]
        }
    },
    {
        id: 5,
        name: "Tofu Artesanal de Soya (400g)",
        category: "derivados",
        price: 18.00,
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80",
        description: "Queso vegetal fresco de soya de textura firme, coagulado naturalmente día a día.",
        tag: "Fresco",
        benefits: [
            "Fuente concentrada de proteína vegetal de fácil absorción.",
            "Rico en calcio y magnesio para fortalecer huesos y articulaciones.",
            "Versátil, bajo en sodio y libre de conservantes artificiales."
        ],
        detailedBenefit: "Alimento estrella de la nutrición vegetal. Absorbe el sabor de tus condimentos favoritos y aporta todos los aminoácidos esenciales.",
        recipe: {
            yield: "400 gramos",
            prepTime: "45 min",
            ingredients: [
                "2 L de leche de soya pura recién hervida (sin azúcar)",
                "4 cucharadas de jugo de limón natural o nigari diluido en agua tibia"
            ],
            steps: [
                "Calienta la leche de soya a 80 °C, apaga el fuego y añade el coagulante moviendo suave.",
                "Tapa y deja reposar 15 minutos hasta que se separe el cuajo del suero.",
                "Vierte en un molde forrado con tela fina y prensa por 30 minutos para darle firmeza."
            ]
        }
    }
];

// ==========================================================================
// 2. ESTADO GLOBAL & REFERENCIAS DOM
// ==========================================================================
let cart = JSON.parse(localStorage.getItem('raiz_cart')) || [];
let storePhone = localStorage.getItem('raiz_phone') || '59176312731';

const productsContainer = document.getElementById('productsContainer');
const productBenefitsDetailContainer = document.getElementById('productBenefitsDetailContainer');
const recipesContainer = document.getElementById('recipesContainer');
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');
const cartBadge = document.getElementById('cartBadge');
const cartItemsContainer = document.getElementById('cartItemsContainer');
const cartSubtotal = document.getElementById('cartSubtotal');
const cartTotal = document.getElementById('cartTotal');
const checkoutModal = document.getElementById('checkoutModal');
const configModal = document.getElementById('configModal');
const mobileMenu = document.getElementById('mobileMenu');
const toast = document.getElementById('toast');

// ==========================================================================
// 3. INICIALIZACIÓN & EVENT LISTENERS
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
    renderAllCatalogViews('todos');
    updateCartUI();
    document.getElementById('year').textContent = new Date().getFullYear();

    // Carrito y Modales
    document.getElementById('openCartBtn').addEventListener('click', openCart);
    document.getElementById('closeCartBtn').addEventListener('click', closeCart);
    cartOverlay.addEventListener('click', closeCart);

    document.getElementById('checkoutBtn').addEventListener('click', openCheckout);
    document.getElementById('closeCheckoutBtn').addEventListener('click', closeCheckout);
    document.getElementById('checkoutForm').addEventListener('submit', handleCheckoutSubmit);

    document.getElementById('openConfigBtn').addEventListener('click', openConfig);
    document.getElementById('closeConfigBtn').addEventListener('click', closeConfig);
    document.getElementById('saveConfigBtn').addEventListener('click', saveConfig);

    // Menú Móvil
    document.getElementById('menuToggle').addEventListener('click', toggleMobileMenu);
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    // Delegación de eventos para Agregar al Carrito (Catálogo y Recetas)
    document.addEventListener('click', (e) => {
        const btn = e.target.closest('.btn-add-cart');
        if (btn) {
            const id = Number(btn.dataset.id);
            addToCart(id);
        }
    });

    // Delegación de eventos en Carrito (+, -, Eliminar)
    cartItemsContainer.addEventListener('click', (e) => {
        const btn = e.target.closest('[data-action]');
        if (!btn) return;
        const id = Number(btn.dataset.id);
        const action = btn.dataset.action;

        if (action === 'increase') updateQuantity(id, 1);
        if (action === 'decrease') updateQuantity(id, -1);
        if (action === 'remove') removeFromCart(id);
    });

    // Filtros sincronizados entre Catálogo, Beneficios y Recetas
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const category = e.currentTarget.dataset.category;
            syncCategoryButtons(category);
            renderAllCatalogViews(category);
        });
    });
});

function syncCategoryButtons(category) {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.category === category);
    });
}

function renderAllCatalogViews(category) {
    const filtered = category === 'todos'
        ? products
        : products.filter(p => p.category === category);

    renderProducts(filtered);
    renderBenefitsGuide(filtered);
    renderRecipes(filtered);
}

// ==========================================================================
// 4. RENDERIZADO DE PRODUCTOS, BENEFICIOS & RECETAS
// ==========================================================================
function renderProducts(items) {
    productsContainer.innerHTML = '';

    if (items.length === 0) {
        productsContainer.innerHTML = `
            <div class="empty-catalog">
                <p>No hay productos disponibles en esta categoría por el momento.</p>
            </div>
        `;
        return;
    }

    items.forEach(prod => {
        const benefitsHtml = prod.benefits
            .map(b => `<li>${b}</li>`)
            .join('');

        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-img-wrapper">
                <img src="${prod.image}" alt="${prod.name}" loading="lazy">
                <span class="product-badge">${prod.tag}</span>
            </div>
            <div class="product-body">
                <h3 class="product-title">${prod.name}</h3>
                <p class="product-desc">${prod.description}</p>
                <div class="product-benefits-box">
                    <div class="product-benefits-title">🌿 Beneficios clave</div>
                    <ul class="product-benefits-list">
                        ${benefitsHtml}
                    </ul>
                </div>
                <div class="product-footer">
                    <span class="product-price">Bs ${prod.price.toFixed(2)}</span>
                    <button type="button" class="btn-add-cart" data-id="${prod.id}">
                        + Agregar
                    </button>
                </div>
            </div>
        `;
        productsContainer.appendChild(card);
    });
}

function renderBenefitsGuide(items) {
    if (!productBenefitsDetailContainer) return;
    productBenefitsDetailContainer.innerHTML = '';

    items.forEach(prod => {
        const benefitsList = prod.benefits
            .map(b => `<li>${b}</li>`)
            .join('');

        const guideCard = document.createElement('div');
        guideCard.className = 'soy-guide-card';
        guideCard.innerHTML = `
            <div class="soy-guide-card-header">
                <h4>${prod.name}</h4>
                <span class="soy-guide-price">Bs ${prod.price.toFixed(2)}</span>
            </div>
            <p>${prod.detailedBenefit}</p>
            <ul class="product-benefits-list">
                ${benefitsList}
            </ul>
        `;
        productBenefitsDetailContainer.appendChild(guideCard);
    });
}

function renderRecipes(items) {
    if (!recipesContainer) return;
    recipesContainer.innerHTML = '';

    if (items.length === 0) {
        recipesContainer.innerHTML = `
            <div class="empty-catalog">
                <p>No hay recetas disponibles en esta categoría por el momento.</p>
            </div>
        `;
        return;
    }

    items.forEach(prod => {
        if (!prod.recipe) return;

        const ingredientsHtml = prod.recipe.ingredients
            .map(ing => `<li>${ing}</li>`)
            .join('');

        const stepsHtml = prod.recipe.steps
            .map((step, index) => `<li><strong>Paso ${index + 1}:</strong> ${step}</li>`)
            .join('');

        const recipeCard = document.createElement('article');
        recipeCard.className = 'recipe-card';
        recipeCard.innerHTML = `
            <div class="recipe-card-header">
                <img src="${prod.image}" alt="${prod.name}" class="recipe-thumb" loading="lazy">
                <div>
                    <h3 class="recipe-card-title">${prod.name}</h3>
                    <div class="recipe-meta">
                        <span class="recipe-pill">⏱ ${prod.recipe.prepTime}</span>
                        <span class="recipe-pill">🍽 Rinde: ${prod.recipe.yield}</span>
                    </div>
                </div>
            </div>
            <div class="recipe-card-body">
                <div>
                    <div class="recipe-block-title">Ingredientes</div>
                    <ul class="recipe-ingredients-list">
                        ${ingredientsHtml}
                    </ul>
                </div>
                <div>
                    <div class="recipe-block-title">Preparación</div>
                    <ol class="recipe-steps-list">
                        ${stepsHtml}
                    </ol>
                </div>
            </div>
            <div class="recipe-card-footer">
                <span class="product-price">Bs ${prod.price.toFixed(2)}</span>
                <button type="button" class="btn-add-cart" data-id="${prod.id}">
                    + Pedir Producto
                </button>
            </div>
        `;
        recipesContainer.appendChild(recipeCard);
    });
}

// ==========================================================================
// 5. LÓGICA DEL CARRITO
// ==========================================================================
function addToCart(id) {
    const prod = products.find(p => p.id === id);
    if (!prod) return;

    const existing = cart.find(item => item.id === id);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ ...prod, quantity: 1 });
    }

    saveCart();
    updateCartUI();
    showToast(`¡${prod.name} agregado al carrito!`);
}

function updateQuantity(id, change) {
    const item = cart.find(i => i.id === id);
    if (!item) return;

    item.quantity += change;
    if (item.quantity <= 0) {
        cart = cart.filter(i => i.id !== id);
    }

    saveCart();
    updateCartUI();
}

function removeFromCart(id) {
    cart = cart.filter(i => i.id !== id);
    saveCart();
    updateCartUI();
}

function saveCart() {
    localStorage.setItem('raiz_cart', JSON.stringify(cart));
}

function updateCartUI() {
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartBadge.textContent = totalCount;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="cart-empty">
                <div class="cart-empty-icon">🛒</div>
                <p>Tu carrito está vacío</p>
            </div>
        `;
        cartSubtotal.textContent = 'Bs 0.00';
        cartTotal.textContent = 'Bs 0.00';
        return;
    }

    cartItemsContainer.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const currentProd = products.find(p => p.id === item.id);
        const unitPrice = currentProd ? currentProd.price : item.price;
        const sub = unitPrice * item.quantity;
        total += sub;

        const itemEl = document.createElement('div');
        itemEl.className = 'cart-item';
        itemEl.innerHTML = `
            <img src="${item.image}" class="cart-item-img" alt="${item.name}">
            <div class="cart-item-details">
                <div class="cart-item-title">${item.name}</div>
                <div class="cart-item-price">Bs ${unitPrice.toFixed(2)}</div>
                <div class="cart-item-actions">
                    <button type="button" class="qty-btn" data-action="decrease" data-id="${item.id}">-</button>
                    <span class="qty-val">${item.quantity}</span>
                    <button type="button" class="qty-btn" data-action="increase" data-id="${item.id}">+</button>
                    <button type="button" class="remove-item" data-action="remove" data-id="${item.id}">Eliminar</button>
                </div>
            </div>
        `;
        cartItemsContainer.appendChild(itemEl);
    });

    cartSubtotal.textContent = `Bs ${total.toFixed(2)}`;
    cartTotal.textContent = `Bs ${total.toFixed(2)}`;
}

// ==========================================================================
// 6. SIDEBAR, MODALES & MENÚ MÓVIL
// ==========================================================================
function openCart() {
    cartSidebar.classList.add('active');
    cartOverlay.classList.add('active');
}

function closeCart() {
    cartSidebar.classList.remove('active');
    cartOverlay.classList.remove('active');
}

function openCheckout() {
    if (cart.length === 0) {
        showToast("El carrito está vacío.");
        return;
    }
    checkoutModal.classList.add('active');
}

function closeCheckout() {
    checkoutModal.classList.remove('active');
}

function openConfig() {
    document.getElementById('storePhoneInput').value = storePhone;
    configModal.classList.add('active');
}

function closeConfig() {
    configModal.classList.remove('active');
}

function saveConfig() {
    const val = document.getElementById('storePhoneInput').value.trim();
    if (val) {
        storePhone = val.replace(/\+/g, '');
        localStorage.setItem('raiz_phone', storePhone);
        showToast("Número de WhatsApp guardado.");
        closeConfig();
    }
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('active');
}

function closeMobileMenu() {
    mobileMenu.classList.remove('active');
}

// ==========================================================================
// 7. CHECKOUT WHATSAPP & NOTIFICACIONES
// ==========================================================================
function handleCheckoutSubmit(e) {
    e.preventDefault();
    const name = document.getElementById('custName').value.trim();
    const phone = document.getElementById('custPhone').value.trim();
    const address = document.getElementById('custAddress').value.trim();
    const payment = document.getElementById('custPayment').value;
    const notes = document.getElementById('custNotes').value.trim();
    
    let total = 0;
    const lines = cart.map(item => {
        const currentProd = products.find(p => p.id === item.id);
        const unitPrice = currentProd ? currentProd.price : item.price;
        const sub = unitPrice * item.quantity;
        total += sub;
        return `• ${item.quantity}x ${item.name} = Bs ${sub.toFixed(2)}`;
    });

    let msg = `🌱 *NUEVO PEDIDO DE PRODUCTOS DE SOYA - RAIZ* 🌱\n\n`;
    msg += `👤 *Cliente:* ${name}\n`;
    msg += `📞 *Teléfono:* ${phone}\n`;
    msg += `📍 *Dirección:* ${address}\n`;
    msg += `💳 *Método de Pago:* ${payment}\n`;
    if (notes) msg += `📝 *Notas:* ${notes}\n`;
    msg += `\n🛒 *DETALLE DEL PEDIDO:*\n`;
    msg += `------------------------------------\n`;
    msg += lines.join('\n') + `\n`;
    msg += `------------------------------------\n`;
    msg += `💵 *TOTAL A PAGAR:* Bs ${total.toFixed(2)}\n\n`;
    msg += `Por favor envíenme los datos para realizar el pago por *${payment}*. ¡Gracias!`;

    const url = `https://wa.me/${storePhone}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');

    cart = [];
    saveCart();
    updateCartUI();
    closeCheckout();
    closeCart();
    showToast("Redirigiendo a WhatsApp...");
}

function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ==========================================================================
// 8. COLOCACIÓN DE IMAGEN QR POR CÓDIGO (VS CODE) -> WHATSAPP 76312731
// ==========================================================================
const DEFAULT_QR_WHATSAPP = '59176312731';

// Configuración de la imagen QR colocada programáticamente desde código en VS Code
const QR_CODE_CONFIG = {
    imageSrc: 'qr1.jpg',
    altText: 'Código QR Estático Oficial - Raiz Nutrición Vegetal',
    cssClass: 'qr-generated-img'
};

function getTargetQrPhone() {
    const saved = (localStorage.getItem('raiz_phone') || '').replace(/\D/g, '');
    if (saved && saved !== '59164530039') {
        return saved.startsWith('591') ? saved : `591${saved}`;
    }
    return DEFAULT_QR_WHATSAPP;
}

function getCartTotalAmount() {
    return cart.reduce((sum, item) => {
        const currentProd = products.find(p => p.id === item.id);
        const unitPrice = currentProd ? currentProd.price : item.price;
        return sum + (unitPrice * item.quantity);
    }, 0);
}

function getCartSummaryText() {
    if (cart.length === 0) return 'Pedido Raiz - Productos de Soya';
    return cart.map(item => {
        const currentProd = products.find(p => p.id === item.id);
        const unitPrice = currentProd ? currentProd.price : item.price;
        return `${item.quantity}x ${item.name} (Bs ${(unitPrice * item.quantity).toFixed(2)})`;
    }).join(', ');
}

/**
 * Coloca e inyecta la imagen del QR por código dentro del contenedor indicado.
 * Puedes cambiar QR_CODE_CONFIG.imageSrc si agregas otra imagen en img/.
 */
function mountQrImageByCode(containerElement, customClass = QR_CODE_CONFIG.cssClass) {
    if (!containerElement) return null;

    containerElement.innerHTML = '';
    const imgEl = document.createElement('img');
    imgEl.src = QR_CODE_CONFIG.imageSrc;
    imgEl.alt = QR_CODE_CONFIG.altText;
    imgEl.className = customClass;
    imgEl.dataset.qrSource = 'code-injected';

    imgEl.onerror = () => {
        showToast("Verifica que 'img/qr1.jpg' exista dentro de la carpeta img/");
    };

    containerElement.appendChild(imgEl);
    return imgEl;
}

function renderStaticQrCode() {
    const total = getCartTotalAmount();
    const formattedTotal = total.toFixed(2);
    const conceptInput = document.getElementById('qrConceptInput');
    const qrMountEl = document.getElementById('qrImageMount');
    const amountBadge = document.getElementById('qrAmountDisplay');
    const payloadText = document.getElementById('qrPayloadText');

    if (conceptInput) {
        conceptInput.value = getCartSummaryText();
    }

    mountQrImageByCode(qrMountEl, 'qr-generated-img');

    if (amountBadge) amountBadge.textContent = `Total del carrito: Bs ${formattedTotal}`;
    if (payloadText) payloadText.textContent = `QR Estático de Pago (${QR_CODE_CONFIG.imageSrc}) • Escanea con tu app bancaria`;
}

function openQrPaymentModal() {
    const modal = document.getElementById('qrPaymentModal');
    if (!modal) return;
    modal.classList.add('active');
    renderStaticQrCode();
}

function closeQrPaymentModal() {
    const modal = document.getElementById('qrPaymentModal');
    if (modal) modal.classList.remove('active');
}

function syncCheckoutStaticQr() {
    const paymentSelect = document.getElementById('custPayment');
    const qrBox = document.getElementById('checkoutStaticQrBox');
    const qrMount = document.getElementById('checkoutQrMount');
    const qrTotalLabel = document.getElementById('checkoutQrTotalLabel');
    if (!paymentSelect || !qrBox) return;

    const isQrSelected = paymentSelect.value.toLowerCase().includes('qr');
    qrBox.classList.toggle('hidden', !isQrSelected);

    if (isQrSelected) {
        const total = getCartTotalAmount().toFixed(2);
        if (qrTotalLabel) qrTotalLabel.textContent = `Monto a transferir: Bs ${total}`;
        mountQrImageByCode(qrMount, 'checkout-qr-img');
    }
}

function sendQrOrderToWhatsapp() {
    const total = getCartTotalAmount().toFixed(2);
    const concept = getCartSummaryText();
    const customer = (document.getElementById('qrCustomerNameInput')?.value || 'Cliente').trim();
    const targetPhone = getTargetQrPhone();

    let msg = `🔳 *PAGO CON QR ESTÁTICO - RAIZ NUTRICIÓN VEGETAL* 🔳\n\n`;
    msg += `👤 *Cliente:* ${customer}\n`;
    msg += `💵 *Total del Pedido:* Bs ${total}\n`;
    msg += `🛒 *Detalle:* ${concept}\n`;
    msg += `📲 *WhatsApp Destino:* +${targetPhone}\n\n`;
    msg += `Realicé el pago escaneando el *QR Estático* de Raiz por *Bs ${total}* y adjunto mi comprobante.`;

    const url = `https://wa.me/${targetPhone}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
    showToast("Abriendo WhatsApp 76312731...");
}

document.addEventListener('DOMContentLoaded', () => {
    const openQrCartBtn = document.getElementById('openQrFromCartBtn');
    if (openQrCartBtn) {
        openQrCartBtn.addEventListener('click', openQrPaymentModal);
    }

    const sendQrWaBtn = document.getElementById('sendQrWhatsappBtn');
    if (sendQrWaBtn) {
        sendQrWaBtn.addEventListener('click', sendQrOrderToWhatsapp);
    }

    const closeQrModalBtn = document.getElementById('closeQrModalBtn');
    if (closeQrModalBtn) {
        closeQrModalBtn.addEventListener('click', closeQrPaymentModal);
    }

    const custPaymentSelect = document.getElementById('custPayment');
    if (custPaymentSelect) {
        custPaymentSelect.addEventListener('change', syncCheckoutStaticQr);
    }

    const checkoutTriggerBtn = document.getElementById('checkoutBtn');
    if (checkoutTriggerBtn) {
        checkoutTriggerBtn.addEventListener('click', syncCheckoutStaticQr);
    }

    // Colocación inicial de la imagen QR por código al cargar el DOM
    mountQrImageByCode(document.getElementById('qrImageMount'), 'qr-generated-img');
    mountQrImageByCode(document.getElementById('checkoutQrMount'), 'checkout-qr-img');
});

// ==========================================================================
// 9. EMPRESAS DE PRODUCTOS DE SOYA Y UBICACIÓN EN SANTA CRUZ
// ==========================================================================
const santaCruzSoyCompanies = [
    {
        name: "Industrias Oleaginosas S.A. (IOL S.A. / IOLSA)",
        zone: "sc-sierra",
        zoneLabel: "Santa Cruz de la Sierra",
        products: "Aceite crudo y refinado de soya, torta/harina de soya, lecitina de soya.",
        location: "Parque Industrial PI-19, Zona Este, Santa Cruz de la Sierra."
    },
    {
        name: "Industria de Aceite S.A. (IASA / FINO)",
        zone: "sc-sierra",
        zoneLabel: "Santa Cruz de la Sierra",
        products: "Aceites y derivados oleaginosos / soya.",
        location: "Carretera al Norte Km 6 ½, Santa Cruz de la Sierra."
    },
    {
        name: "Cargill Bolivia S.A.",
        zone: "sc-sierra",
        zoneLabel: "Santa Cruz de la Sierra",
        products: "Aceite de soya en bruto/desgomado, torta de soya pelletizada, granos y silos.",
        location: "Av. Las Américas / Calle Andrés Manso N.º 248–250 (Zona Sur), Santa Cruz de la Sierra; y Silo Tres Cruces."
    },
    {
        name: "Gravetal Bolivia S.A.",
        zone: "norte-montero",
        zoneLabel: "Santa Cruz / Pailón",
        products: "Aceite crudo de soya desgomado, harina y torta de soya.",
        location: "Calle René Moreno N.º 258 (Centro, Santa Cruz de la Sierra) y planta en Pailón, Santa Cruz."
    },
    {
        name: "Sociedad Agroindustrial Nutrioil S.A.",
        zone: "sc-sierra",
        zoneLabel: "Santa Cruz de la Sierra",
        products: "Aceite crudo de soya desgomado, torta/harina de soya, cascarilla de soya.",
        location: "Calle Córdoba N.º 20 Este, Santa Cruz de la Sierra."
    },
    {
        name: "Soya Cruz S.R.L.",
        zone: "sc-sierra",
        zoneLabel: "Santa Cruz de la Sierra",
        products: "Molienda y procesamiento de soya.",
        location: "Calle Riberalta esq. Puerto Suárez s/n, Zona Parque Industrial, Santa Cruz de la Sierra."
    },
    {
        name: "NutriGranos",
        zone: "sc-sierra",
        zoneLabel: "Santa Cruz de la Sierra",
        products: "Harina integral de soya extrusada, soya en grano.",
        location: "Km 7 ½ Carretera al Norte, Santa Cruz de la Sierra."
    },
    {
        name: "Agrotram S.R.L. (Agro Transformación & Mercadeo)",
        zone: "norte-montero",
        zoneLabel: "Montero, Santa Cruz",
        products: "Procesamiento de grano de soya y derivados agroindustriales.",
        location: "Parque Industrial de Montero (carretera de integración bioceánica), Montero, Santa Cruz."
    },
    {
        name: "EEPS (Empresa Estratégica de Producción de Semillas)",
        zone: "norte-montero",
        zoneLabel: "Montero, Santa Cruz",
        products: "Semillas y producción vinculada a soya.",
        location: "Av. Chiquitania s/n entre carreteras a Okinawa y Saavedra, Parque Agroindustrial, Montero, Santa Cruz."
    }
];

function renderSantaCruzSoyCompanies(zoneFilter = 'todas') {
    const container = document.getElementById('scCompaniesContainer');
    if (!container) return;

    const list = zoneFilter === 'todas'
        ? santaCruzSoyCompanies
        : santaCruzSoyCompanies.filter(c => c.zone === zoneFilter);

    container.innerHTML = list.map(c => `
        <article class="sc-company-card">
            <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:8px;">
                <h3 class="sc-company-name">${c.name}</h3>
                <span class="recipe-pill">${c.zoneLabel}</span>
            </div>
            <p class="sc-company-products"><strong>Productos de soya:</strong> ${c.products}</p>
            <p class="sc-company-location"><strong>Ubicación:</strong> ${c.location}</p>
        </article>
    `).join('');
}

document.addEventListener('DOMContentLoaded', () => {
    renderSantaCruzSoyCompanies('todas');
    document.querySelectorAll('.sc-filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const zone = e.currentTarget.dataset.scZone;
            document.querySelectorAll('.sc-filter-btn').forEach(b => {
                b.classList.toggle('active', b.dataset.scZone === zone);
            });
            renderSantaCruzSoyCompanies(zone);
        });
    });
});
