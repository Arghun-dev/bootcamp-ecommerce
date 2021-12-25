import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Skeleton, Row, Col } from "antd";
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
        return (
            <Row gutter={[0, 32]}>
                {data.map((item) => 
                    <Col xs={24} md={12} lg={6} style={{ display: 'flex', justifyContent: 'center' }}>
                        <ProductCard item={item} />
                    </Col>
                )}
            </Row>
    )
    }
}

export default ProductList;