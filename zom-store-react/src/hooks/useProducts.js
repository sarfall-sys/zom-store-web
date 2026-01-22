
import {CatalogContext } from "../context/CatalogContext";
import {useContext } from "react";


export const useProducts = () => {

    return useContext(CatalogContext);
}   
