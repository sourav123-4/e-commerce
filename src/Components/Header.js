import React from 'react';
import '../Styles/Header.css';
import logo from '../images/logo.jpg';
import { Button, Input, Dropdown } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getLimitProducts,getCategoryProducts } from '../Redux/Actions/productActions';

function Header() {
  const [limit,setLimit] = React.useState();
  const [search,setSearch] = React.useState("");
  const state = useSelector( state => state.product.catergorydata);
  const user = useSelector(state => state.user.users);
  const dispatch = useDispatch();
  const [click,setClick]= React.useState(false);

  
  const options = [
    { key: 1, text: 'electronics', value: "electronics" },
    { key: 2, text: 'jewelery', value: "jewelery"  },
    { key: 3, text: "men's clothing", value: "men's clothing" },
    { key: 4, text: "women's clothing", value: "women's clothing"},
  ]
  const [item, setItem] = React.useState();
  const [category,setCategory]=React.useState();
  console.log(category);
  console.log("user",user);
  const handleChange = (e, {value})=>{
    setCategory(value)   
  }
  React.useEffect(() => {
    setItem(localStorage.getItem("details"));
  },[])

  React.useEffect(()=>{
    if(click){
      localStorage.removeItem("details");
    }
  })

  React.useEffect( () => {
    dispatch(getCategoryProducts(category));
  },[category]);
  console.log(item);
  console.log(click)
  return (
    
    <div className = 'app-header'>
      <div className = 'logo-div'>
        <Link to="/"><img src={logo} alt="logo" width="150px" height="100px"/></Link>
        <h2>My Ecommerce</h2>
      </div>
      <div className='search-div'>
        <Dropdown
          onChange={handleChange}
          options={ options }
          placeholder='All'
          selection
          value={category}
        />
        <Input  placeholder='search...' size = 'huge' onChange = { e => setSearch(e.target.value) }/>
        {/* <Input  placeholder = 'limit...' size = 'small' onChange = {e => setLimit(e.target.value) } style = {{ width:"100px" }}/> */}
        <Button content = 'search' />
      </div>
      {item? 
        <Button content = 'LogOut' onClick={() => setClick(true)}/> :
        <Link to="/login" ><Button content = 'Login' /></Link>
      }
      {
        item?
         <Link to="/mycart"><Button primary content = 'MY Cart'/></Link> : null
      }
    </div>
  )
};

export default Header;