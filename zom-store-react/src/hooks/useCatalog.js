import { use } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

export function useCatalog(){

    const {slug} = useParams();
    const [searchParams] = useSearchParams();
    const searchQuery = searchParams.get("q") || "";
    //Call useProduct hook
    const {
        catalog,
        loading,
        error,
        filters,
        setFilters,
        brands,
        loadCatalogBySlugs,
        clearCatalog
    } = useProducts();
}