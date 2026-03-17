export default function Header(){
    return (
        <div className="header">
            <img className="images" src="https://imgs.search.brave.com/qVj2xl42Z-kIBoM5db3aB0qQfUau5PjSGnV-4jGgR5Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvNzEx/ODQzMS5qcGc" height="50px" width="80px" />

            <div className="options" >
                <button>Men</button>
                <button>Women</button>
                <button>Kids</button>
                <button>Home and Living</button>
                <button>Beauty</button>
                <button>Studio</button>
            </div>
            
            <input className="searchBar" type="text" placeholder="Search for products, brands and more"/>

            <div className="profile">
                <button>Profile</button>
                <button>Wishlist</button>
                <button>Bag</button>
            </div>

        </div>
    );
}

// export default Header;  //* also can write at decaring function