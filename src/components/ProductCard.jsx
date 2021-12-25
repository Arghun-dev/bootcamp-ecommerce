import { Card, Button } from 'antd';
import { useDispatch } from 'react-redux';
import actionTypes from '../redux/actionTypes';
import './ProductCard.scss';

const { Meta } = Card;

const ProductCard = ({ item }) => {
    const dispatch = useDispatch();
    return (
        <div className='root'>
            <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="product-image" src={item.image} width='100' height='280' />}
                actions={[
                    <Button type='primary' 
                    onClick={() => dispatch({ type: actionTypes.ADD_TO_BASKET, payload: item })}>Add to Cart</Button>,
                ]}
            >
                <Meta title={item.title} />
            </Card>
        </div>
        
    )
}

export default ProductCard;