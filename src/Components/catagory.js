import React,{ useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductCategoryFetch } from '../Redux/Actions/productActions';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Grid, Image } from 'semantic-ui-react';

const Categories = (props) => {
    const params = useParams();
    const categories = useSelector(state => state.product.categories);
    const dispatch = useDispatch();

    useEffect(() => {
    dispatch(getProductCategoryFetch(params.category))
    }, [params.category]);

    return (
        <div className='category-page'>
            <Grid>
                {(categories && categories[0]) && categories?.filter((item)=>{
                    if(item.title.toLowerCase().includes(props.search.toLowerCase()) 
                    ) {
                        return item;
                    }
                }).map((product)=>{
                    return (
                    <Grid.Column width={3}>
                        <div className='items'>
                        <Link to={`/${product.id}`}>
                            <Image src={product.image} size='small' style={{height:"150px"}}/>
                        </Link>
                        <p>{product.title.substring(0,20) + "..."}</p>
                        </div>
                    </Grid.Column>
                    )
                })} 
            </Grid>
        </div>
    )
}

export default Categories;