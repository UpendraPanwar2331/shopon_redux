import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div>
            <div class="row" style={{ backgroundColor: '#172337'}}>
                <div class="col-sm-3 mb-3 mb-sm-0">
                    <div>
                        <div class="card-body" style={{ backgroundColor: '#172337', color: 'white' }}>
                            <h5 class="card-title">ABOUT</h5>
                            <p class="card-text">About us</p>
                            <p class="card-text">Contact us</p>
                            <p class="card-text">Carriers</p>

                            <Link href="#" style={{ textDecoration: 'none', color: 'yellow', fontFamily: 'Arial' }}>Become a Seller</Link>
                        </div>
                    </div>
                </div>
                <div class="col-sm-3">
                    <div>
                        <div class="card-body" style={{ backgroundColor: '#172337', color: 'white' }}>
                            <h5 class="card-title">HELP</h5>
                            <p class="card-text">Payment</p>
                            <p class="card-text">Shipping</p>
                            <p class="card-text">Cancellation & Return</p>
                            <Link href="#" style={{ textDecoration: 'none', color: 'yellow', fontFamily: 'Arial' }}>Advertise</Link>
                        </div>
                    </div>
                </div>

                <div class="col-sm-3">
                    <div>
                        <div style={{ backgroundColor: '#172337', color: 'white' }}>
                            <h5 class="card-title">CUSTOMER POLICY</h5>
                            <p class="card-text">Return Policy</p>
                            <p class="card-text">Terms Of Use</p>
                            <p class="card-text">Security</p>

                            <Link href="#" style={{ textDecoration: 'none', color: 'yellow', fontFamily: 'Arial' }} >Gift cards</Link>
                        </div>
                    </div>
                </div>

                <div class="col-sm-3">
                    <div>
                        <div  style={{ backgroundColor: '#172337', color: 'white' }}>
                            <h5 class="card-title">Mail us</h5>
                            <p class="card-text">ShopOn Internet Private Limited,

Buildings Alyssa, Begonia &

Clove Embassy Tech Village,

Outer Ring Road, Devarabeesanahalli Village,

Bengaluru, 560103,

Karnataka, India</p>
                            <Link href="#" style={{ textDecoration: 'none', color: 'yellow', fontFamily: 'Arial' }}>Go somewhere</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
