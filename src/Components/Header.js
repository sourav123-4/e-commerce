import React from 'react';
import '../Styles/Header.css';
import logo from '../images/logo.jpg';
import { Button, Input, Dropdown } from 'semantic-ui-react';
import { Link, useNavigate } from 'react-router-dom';
function Header(props) {
  const navigate = useNavigate();
  const options = [
    { key: 1, text: 'electronics', value: "electronics" },
    { key: 2, text: 'jewelery', value: "jewelery"  },
    { key: 3, text: "men's clothing", value: "men's clothing" },
    { key: 4, text: "women's clothing", value: "women's clothing"},
  ];
  const [category,setCategory]=React.useState();
 
  const handleChange = (e, {value})=>{
    setCategory(value) ;
    navigate(`/category/${value}`);
  };
  const getItem = JSON.parse(localStorage.getItem("details"));

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
        <Input  placeholder='search...' size = 'huge' onChange = { e => props.setSearch(e.target.value) }/>
        <Button content = 'search'  />
        <Input onChange={(e)=>{props.setMin(e.target.value)}}  placeholder="min" style={{width:"50px"}}/>
        <Input onChange={(e)=>{props.setMax(e.target.value)}} placeholder="max" style={{width:"50px",marginLeft:"2px"}}/>
      </div>
      {
        getItem?.email?
          <><Button content="logout" onClick={()=>{
            localStorage.clear();
            navigate("/")
          }}/>
          <Link to="/mycart"><Button content="mycart"/></Link>
          </>
            :
          <Link to="/login"><Button content="logIn"/></Link>
      }
    </div>
  )
};

export default Header;