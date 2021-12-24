import { PageHeader } from 'antd';
import { useSelector } from 'react-redux';

const Header = () => {
    const products = useSelector((state) => state.products);
    return <PageHeader
        className="site-page-header"
        title="E Commerce"/>
}

export default Header;