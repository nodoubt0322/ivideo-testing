// ========================================
// Global State & Configuration
// ========================================
const API_URL = "http://210.209.13.182:8000/api/products/wifi?country=japan";
const IMAGE_BASE_URL = "http://210.209.13.182:8000";

let productsData = [];
let currentFilter = "all";
let currentSort = "default";

// ========================================
// DOM Elements
// ========================================
const elements = {
  navToggle: document.getElementById("navToggle"),
  navMenu: document.getElementById("navMenu"),
  productsGrid: document.getElementById("productsGrid"),
  loadingState: document.getElementById("loadingState"),
  errorState: document.getElementById("errorState"),
  filterButtons: document.querySelectorAll(".filter-btn"),
  sortSelect: document.getElementById("sortSelect"),
  backToTop: document.getElementById("backToTop"),
};

// ========================================
// Initialization
// ========================================
document.addEventListener("DOMContentLoaded", () => {
  initializeApp();
});

async function initializeApp() {
  setupEventListeners();
  await fetchProducts();
  initScrollAnimations();
}

// ========================================
// Event Listeners Setup
// ========================================
function setupEventListeners() {
  // Mobile navigation toggle
  elements.navToggle?.addEventListener("click", toggleMobileMenu);

  // Close mobile menu when clicking nav links
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      elements.navMenu?.classList.remove("active");
    });
  });

  // Filter buttons
  elements.filterButtons.forEach((btn) => {
    btn.addEventListener("click", handleFilterClick);
  });

  // Sort select
  elements.sortSelect?.addEventListener("change", handleSortChange);

  // Back to top button
  elements.backToTop?.addEventListener("click", scrollToTop);
  window.addEventListener("scroll", handleScroll);

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", handleAnchorClick);
  });
}

// ========================================
// Mobile Menu
// ========================================
function toggleMobileMenu() {
  elements.navMenu?.classList.toggle("active");
}

// ========================================
// API Integration
// ========================================
async function fetchProducts() {
  try {
    showLoading();

    // Try fetching from API
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (data.success && Array.isArray(data.data)) {
      productsData = data.data;
      hideLoading();
      renderProducts(productsData);
    } else {
      throw new Error("Invalid data format");
    }
  } catch (error) {
    console.error("Error fetching products:", error);

    // Check if it's a CORS error
    if (
      error.message.includes("CORS") ||
      error.message.includes("NetworkError") ||
      window.location.protocol === "file:"
    ) {
      console.log("CORS error detected or running from file://. Using fallback sample data.");
      useFallbackData();
    } else {
      showError();
    }
  }
}

// Fallback sample data (actual data from API)
function useFallbackData() {
  productsData = [
    {
      id: "50969",
      stock_type_id: "3",
      title: "【特價下殺】日本WiFi機UQ WiMAX 5G高速上網吃到飽</br>",
      image: "/img_flash/50969.png",
      per_day: "154.00",
      per_month: "1699",
      list_month: "3800",
      per_14days: "888",
      disp_order: "1",
    },
    {
      id: "49588",
      stock_type_id: "3",
      title: "🎁雙12年終慶🎁日本WiFi機 Softbank </br>304ZT 4G LTE上網 高速吃到飽",
      image: "/img_flash/49588.png",
      per_day: "110.00",
      per_month: "1265",
      list_month: "3200",
      per_14days: "759",
      disp_order: "2",
    },
    {
      id: "50348",
      stock_type_id: "3",
      title: "【租借方案】日本原裝卡 Softbank 4G LTE上網 高速吃到飽",
      image: "/img_flash/50348.jpg",
      per_day: "104.00",
      per_month: null,
      list_month: null,
      per_14days: null,
      disp_order: "5",
    },
    {
      id: "50592",
      stock_type_id: "3",
      title: "🎁雙12年終慶🎁日本WiFi機 Softbank </br>602HW 4G LTE上網 高速吃到飽",
      image: "/img_flash/50592.jpg",
      per_day: "110.00",
      per_month: "1265",
      list_month: "3200",
      per_14days: "759",
      disp_order: "6",
    },
    {
      id: "50415",
      stock_type_id: "3",
      title: "日本WiFi機 Softbank</br> iV501 4G LTE上網 100GB/月</br>",
      image: "/img_flash/50415.jpg",
      per_day: ".00",
      per_month: "1150",
      list_month: "2300",
      per_14days: null,
      disp_order: "7",
    },
    {
      id: "50416",
      stock_type_id: "3",
      title: "【租借方案】日本原裝卡 Softbank 4G LTE上網 100GB/月</br>",
      image: "/img_flash/50416.jpg",
      per_day: ".00",
      per_month: "1026",
      list_month: "2200",
      per_14days: null,
      disp_order: "8",
    },
    {
      id: "50501",
      stock_type_id: "3",
      title: "日本WiFi機 Softbank</br> iV501 4G LTE上網 (50GB/月)</br>",
      image: "/img_flash/50501.jpg",
      per_day: ".00",
      per_month: "963",
      list_month: "1800",
      per_14days: null,
      disp_order: "9",
    },
    {
      id: "50502",
      stock_type_id: "3",
      title: "【租借方案】日本原裝卡 Softbank 4G LTE上網 (50GB/月)</br>",
      image: "/img_flash/50502.jpg",
      per_day: ".00",
      per_month: "858",
      list_month: "1590",
      per_14days: null,
      disp_order: "10",
    },
    {
      id: "51042",
      stock_type_id: "3",
      title: "【人氣口碑】日本WiFi機4G LTE上網 (60GB/30日)[可加購流量]",
      image: "/img_flash/51042.jpg",
      per_day: ".00",
      per_month: "1035",
      list_month: "1390",
      per_14days: null,
      disp_order: "11",
    },
    {
      id: "51085",
      stock_type_id: "3",
      title: "日本WiFi機 Softbank</br> iV501 4G LTE上網 高速吃到飽</br>",
      image: "/img_flash/50415.jpg",
      per_day: ".00",
      per_month: "1499",
      list_month: "3200",
      per_14days: "1049",
      disp_order: "12",
    },
    {
      id: "50421",
      stock_type_id: "3",
      title: "【租借方案】日本原裝卡 Softbank 4G LTE上網 高速吃到飽",
      image: "/img_flash/50421.jpg",
      per_day: ".00",
      per_month: "1379",
      list_month: "3100",
      per_14days: null,
      disp_order: "13",
    },
  ];

  console.log(`Loaded ${productsData.length} products from fallback data`);
  hideLoading();
  renderProducts(productsData);
}

// ========================================
// Product Rendering
// ========================================
function renderProducts(products) {
  if (!elements.productsGrid) return;

  if (products.length === 0) {
    elements.productsGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 4rem;">
                <span class="material-icons" style="font-size: 64px; color: var(--color-gray-400); margin-bottom: 1rem;">inbox</span>
                <h3 style="color: var(--color-gray-600);">沒有符合條件的產品</h3>
            </div>
        `;
    return;
  }

  elements.productsGrid.innerHTML = products
    .map((product) => createProductCard(product))
    .join("");

  // Add stagger animation
  animateProductCards();
}

function createProductCard(product) {
  const title = cleanTitle(product.title);
  const isSpecial =
    title.includes("特價") || title.includes("雙11") || title.includes("雙12");
  const isUnlimited = title.includes("吃到飽");
  const hasMonthly = product.per_month && parseFloat(product.per_month) > 0;
  const hasDaily = product.per_day && parseFloat(product.per_day) > 0;
  const has14Days = product.per_14days && parseFloat(product.per_14days) > 0;

  // Determine product features
  const features = [];
  if (isUnlimited) {
    features.push({ icon: "all_inclusive", text: "無限流量" });
  } else if (title.includes("100GB")) {
    features.push({ icon: "data_usage", text: "100GB" });
  } else if (title.includes("60GB")) {
    features.push({ icon: "data_usage", text: "60GB" });
  } else if (title.includes("50GB")) {
    features.push({ icon: "data_usage", text: "50GB" });
  }

  if (title.includes("5G")) {
    features.push({ icon: "5g", text: "5G網路" });
  } else if (title.includes("4G")) {
    features.push({ icon: "4g_mobiledata", text: "4G網路" });
  }

  if (title.includes("Softbank")) {
    features.push({ icon: "router", text: "Softbank" });
  } else if (title.includes("WiMAX")) {
    features.push({ icon: "router", text: "WiMAX" });
  }

  return `
        <div class="product-card" data-product-id="${product.id}">
            ${isSpecial ? '<div class="product-badge">特價</div>' : ""}
            
            <img 
                src="${IMAGE_BASE_URL}${product.image}" 
                alt="${title}"
                class="product-image"
                onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22%3E%3Crect fill=%22%23f0f0f0%22 width=%22200%22 height=%22200%22/%3E%3Ctext fill=%22%23999%22 x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22%3EiVideo%3C/text%3E%3C/svg%3E'"
            />
            
            <h3 class="product-title">${title}</h3>
            
            ${
              features.length > 0
                ? `
                <div class="product-features">
                    ${features
                      .map(
                        (f) => `
                        <span class="feature-tag">
                            <span class="material-icons" style="font-size: 14px;">${f.icon}</span>
                            ${f.text}
                        </span>
                    `
                      )
                      .join("")}
                </div>
            `
                : ""
            }
            
            <div class="product-pricing">
                ${
                  hasDaily
                    ? `
                    <div class="pricing-row">
                        <span class="pricing-label">日租</span>
                        <span class="pricing-value highlighted">NT$ ${formatPrice(
                          product.per_day
                        )}</span>
                    </div>
                `
                    : ""
                }
                
                ${
                  hasMonthly
                    ? `
                    <div class="pricing-row">
                        <span class="pricing-label">月租</span>
                        <span class="pricing-value">NT$ ${formatPrice(
                          product.per_month
                        )}</span>
                    </div>
                `
                    : ""
                }
                
                ${
                  has14Days
                    ? `
                    <div class="pricing-row">
                        <span class="pricing-label">14日</span>
                        <span class="pricing-value">NT$ ${formatPrice(
                          product.per_14days
                        )}</span>
                    </div>
                `
                    : ""
                }
            </div>
            
            <div class="product-actions">
                <button class="btn-rent" onclick="handleRentClick('${
                  product.id
                }')">
                    <span class="material-icons">shopping_cart</span>
                    立即租借
                </button>
                <button class="btn-details" onclick="handleDetailsClick('${
                  product.id
                }')">
                    查看詳情
                </button>
            </div>
        </div>
    `;
}

// ========================================
// Utility Functions
// ========================================
function cleanTitle(title) {
  return title
    .replace(/<\/br>/g, " ")
    .replace(/<br>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function formatPrice(price) {
  const numPrice = parseFloat(price);
  if (isNaN(numPrice) || numPrice === 0) return "-";
  return numPrice.toLocaleString("zh-TW");
}

function animateProductCards() {
  const cards = document.querySelectorAll(".product-card");
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.style.animation = `fadeInUp 0.5s ease-out forwards`;
    }, index * 50);
  });
}

// ========================================
// Filter & Sort
// ========================================
function handleFilterClick(event) {
  const button = event.currentTarget;
  const filter = button.dataset.filter;

  // Update active state
  elements.filterButtons.forEach((btn) => btn.classList.remove("active"));
  button.classList.add("active");

  currentFilter = filter;
  applyFiltersAndSort();
}

function handleSortChange(event) {
  currentSort = event.target.value;
  applyFiltersAndSort();
}

function applyFiltersAndSort() {
  let filtered = [...productsData];

  // Apply filter
  if (currentFilter === "unlimited") {
    filtered = filtered.filter((p) => {
      const title = cleanTitle(p.title);
      return title.includes("吃到飽");
    });
  } else if (currentFilter === "limited") {
    filtered = filtered.filter((p) => {
      const title = cleanTitle(p.title);
      return (
        !title.includes("吃到飽") &&
        (title.includes("GB") || title.includes("日"))
      );
    });
  }

  // Apply sort
  if (currentSort === "price-asc") {
    filtered.sort((a, b) => {
      const priceA = getLowestPrice(a);
      const priceB = getLowestPrice(b);
      return priceA - priceB;
    });
  } else if (currentSort === "price-desc") {
    filtered.sort((a, b) => {
      const priceA = getLowestPrice(a);
      const priceB = getLowestPrice(b);
      return priceB - priceA;
    });
  } else if (currentSort === "popular") {
    filtered.sort((a, b) => {
      const orderA = parseInt(a.disp_order) || 999;
      const orderB = parseInt(b.disp_order) || 999;
      return orderA - orderB;
    });
  }

  renderProducts(filtered);
}

function getLowestPrice(product) {
  const prices = [
    parseFloat(product.per_day) || Infinity,
    parseFloat(product.per_month) || Infinity,
    parseFloat(product.per_14days) || Infinity,
  ];
  return Math.min(...prices);
}

// ========================================
// Product Actions
// ========================================
function handleRentClick(productId) {
  const product = productsData.find((p) => p.id === productId);
  if (!product) return;

  // In a real application, this would open a rental modal or redirect to rental page
  alert(`即將前往租借：${cleanTitle(product.title)}`);
  console.log("Rent product:", product);
}

function handleDetailsClick(productId) {
  const product = productsData.find((p) => p.id === productId);
  if (!product) return;

  // In a real application, this would show product details
  alert(`查看詳情：${cleanTitle(product.title)}`);
  console.log("View details:", product);
}

// ========================================
// UI State Management
// ========================================
function showLoading() {
  elements.loadingState.style.display = "block";
  elements.errorState.style.display = "none";
  elements.productsGrid.style.display = "none";
}

function hideLoading() {
  elements.loadingState.style.display = "none";
  elements.errorState.style.display = "none";
  elements.productsGrid.style.display = "grid";
}

function showError() {
  elements.loadingState.style.display = "none";
  elements.errorState.style.display = "flex";
  elements.productsGrid.style.display = "none";
}

// ========================================
// Scroll Interactions
// ========================================
function handleScroll() {
  // Back to top button visibility
  if (window.pageYOffset > 300) {
    elements.backToTop?.classList.add("visible");
  } else {
    elements.backToTop?.classList.remove("visible");
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function handleAnchorClick(event) {
  event.preventDefault();
  const targetId = event.currentTarget.getAttribute("href");
  const targetElement = document.querySelector(targetId);

  if (targetElement) {
    const offsetTop = targetElement.offsetTop - 72; // Navbar height
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  }
}

// ========================================
// Scroll Animations
// ========================================
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Observe sections
  document.querySelectorAll(".section-header, .feature-card").forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
    observer.observe(el);
  });
}

// ========================================
// Error Handling
// ========================================
window.addEventListener("error", (event) => {
  console.error("Global error:", event.error);
});

window.addEventListener("unhandledrejection", (event) => {
  console.error("Unhandled promise rejection:", event.reason);
});

// ========================================
// Performance Optimization
// ========================================
// Debounce function for resize events
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Handle window resize
window.addEventListener(
  "resize",
  debounce(() => {
    // Close mobile menu on resize to desktop
    if (window.innerWidth >= 960) {
      elements.navMenu?.classList.remove("active");
    }
  }, 250)
);

// ========================================
// Export for debugging (optional)
// ========================================
if (typeof window !== "undefined") {
  window.iVideoApp = {
    productsData,
    fetchProducts,
    applyFiltersAndSort,
    currentFilter,
    currentSort,
  };
}
