import { useState, useEffect } from 'react';
import { brandService } from '../services/brandService';

const useBrands = () => {
    const [brands, setBrands] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    //Fetch brands from API
    const fetchBrands = async () => {
        setLoading(true); //Start loading indicator
        setError(null); //Clear any previous errors

        try {
            //call service to fecth all brands from api
            const response = await brandService.getBrands();
            setBrands(response.data);

        } catch (err) {
            setError(err);

        } finally {
            // Always stop loading indicator, whether success or error

            setLoading(false);
        }
    }

    const fetchBrand = async () => {
        setLoading(true)
        setError(null)

        try {
            const response = await brandService.getBrand(id);
            setBrands(response.data);
        } catch (err) {
            setError(err)
        } finally {
            // Always stop loading indicator, whether success or error
            setLoading(false);
        }

    }
    const createBrand = async (brandData) => {
        setLoading(true);
        setError(null);

        try {
            //Call service
            const response = await brandService.createBrand(brandData);
            //Refresh the brad list
            await fetchBrands();

            //return the created brand data
            return response.data;
        } catch (err) {
            // Store error message

            setError(err)
            // Re-throw error so calling component can handle it
            throw err;

        } finally {

            setLoading(false);
        }
    }

    const updateBrand = async (id, brandData) => {

        setLoading(true);
        setError(null);
        try {
            //Call service
            const response = brandService.updateBrand(id, brandData);
            //refresh brand list
            await fetchBrands();
            return response.data;

        } catch (err) {
            setError(err)
            throw err;

        } finally {
            setLoading(false);
        }
    }

    const deleteBrand = async (id) => {

        setLoading(true);
        setError(null);
        try {
            const response = brandService.deleteBrand(id);
            //refresh
            fetchBrands();

        } catch (err) {
            setError(err)
            throw err;

        } finally {
            setLoading(false);
        }
    }

    // useEffect runs once when component mounts (empty dependency array [])

    useEffect(() => {
        fetchBrands();
    }, []);// Empty array means this runs only once on mount

    return {
        brands,
        loading,
        error,
        fetchBrands,
        fetchBrand,
        createBrand,
        updateBrand,
        deleteBrand
    }
}

