import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Skeleton } from "antd";
import productsActions from "../redux/products/productsActions";
import ProductCard from './ProductCard';

const ProductList = () => {
    const dispatch = useDispatch();
    const {loading, data, error} = useSelector((store) => store.productsReducer);

    useEffect(()=>{
        dispatch(productsActions.getProducts())
    },[])

    if (loading || !data.length) return <Skeleton />;

    if (error) return <div>Something went wrong!!!</div>

    if (data.length) {
        return <div>{data.map((item) => <ProductCard item={item} />)}</div>
    }
}

export default ProductList;