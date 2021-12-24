import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Skeleton } from "antd";
import productsActions from "../redux/products/productsActions";

const ProductList = () => {
    const dispatch = useDispatch();
    const {loading, data, error} = useSelector((state) => state.products);

    useEffect(()=>{
        dispatch(productsActions.getProducts())
    },[])

    if (loading || !data.length) return <Skeleton />;

    if (error) return <div>Something went wrong!!!</div>

    if (data.length) {
        return <div>{data.map((item) => <div key={item.id}>{item.title}</div>)}</div>
    }
}

export default ProductList;