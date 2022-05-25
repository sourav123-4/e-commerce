import React from 'react';
import '../Styles/Header.css';
import logo from '../images/logo.jpg';
import { Button, Input } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getLimitProducts } from '../Reducer/Actions';
function Header() {
  const [limit,setLimit] = React.useState();
  const [search,setSearch] = React.useState("");
  const state = useSelector( state => state.data.limitproducts)
  const dispatch = useDispatch();

  // React.useEffect( () => {
  //   dispatch(getLimitProducts(limit));
  // },[]);
  
  return (
    
    <div className = 'app-header'>
      <div className = 'logo-div'>
        <Link to="/"><img src={logo} alt="logo" width="150px" height="100px"/></Link>
        <h2>My Ecommerce</h2>
      </div>
      <div className='search-div'>
        <Input  placeholder='search...' size = 'huge' onChange = { e => setSearch(e.target.value) }/>
        <Input  placeholder = 'limit...' size = 'small' onChange = {e => setLimit(e.target.value) } style = {{ width:"100px" }}/>
        <Button content = 'search' />
      </div>
      <Button content = 'Login' />
      {/* {
        state[0] && state.map((item)=>{
          return <h1>{item.id}</h1>
        })
      } */}
    </div>
  )
};

export default Header;