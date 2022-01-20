import React from "react";
import { Link } from "react-router-dom";
import Directory from "../../components/directory/directory.component";
import './homepage.styles.scss'

const HomePage=() => (
    <div className="homepage">
     <Link to="/shop">SHOP</Link>
       <Directory />
    </div>
);

export default HomePage;