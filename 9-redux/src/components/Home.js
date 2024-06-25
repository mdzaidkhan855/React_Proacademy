import React from 'react';

function Home(props){
    return(
        <div>
            {/* <div>
                CartCount: <span>{props.data.length}</span>
            </div> */}
           <div>
            <img src='https://www.google.co.in/url?sa=i&url=https%3A%2F%2Fwww.flaticon.com%2Ffree-icon%2Fshopping-cart_1413908&psig=AOvVaw0y4rPIjRaQ4j1FgLylGr20&ust=1719279902108000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIC3m_KO84YDFQAAAAAdAAAAABAE'/> 
           </div>
            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://www.fdfproject.com/wp-content/uploads/2018/12/iphone-png.png" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button 
                    onClick={
                        ()=>{props.addToCartHandler({pice:1000,name:'i phone 11'})}
                        }>
                        Add To Cart</button>
                    <button 
                    onClick={
                        ()=>{props.removeToCartHandler()}
                        }>
                        Remove from Cart</button>    
                </div>
            </div>
        </div>
    )
}

export default Home