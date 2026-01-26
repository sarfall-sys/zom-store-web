const RECENT_KEY = "recent_products";
const MAX_ITEMS = 5;

export const getRecentProducts = () => {
    const data = localStorage.getItem(RECENT_KEY);
    if (!data) {
        return [];
    }
    try {
        return JSON.parse(data);
    } catch (error) {
        console.error("Failed to parse recent products from localStorage. Returning empty array and clearing corrupted data:", error);
        localStorage.removeItem(RECENT_KEY);
        return [];
    }
};

export const addRecentProduct = (product) => {

    let recents = getRecentProducts();

    // Remove duplicates (by id)
    recents = recents.filter(p => p?.id && product?.id && p.id !== product.id);
    // Add to beginning
    recents.unshift(product);

    // Limit size
    if (recents.length > MAX_ITEMS) {
        recents = recents.slice(0, MAX_ITEMS);
    }

    try {
        localStorage.setItem(RECENT_KEY, JSON.stringify(recents));
    } catch (error) {
        console.error("Failed to save recent products to localStorage:", error);
    }
};

export const clearRecentProducts = () => {
    localStorage.removeItem(RECENT_KEY);
}
try {
    localStorage.setItem(RECENT_KEY, JSON.stringify(recents));
} catch (error) {
    console.error("Failed to save recent products to localStorage:", error);
}
