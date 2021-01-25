import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="social-icons">
                <Link to='/' target='_blank' className='facebook'>
                    <i className="fa fa-facebook"></i>
                </Link>
                <Link to='/' target='_blank' className='instagram'>
                    <i className="fa fa-instagram"></i>
                </Link>
                <Link to='/' target='_blank' className='youtube'>
                    <i className="fa fa-youtube"></i>
                </Link>
                <Link to='/' target='_blank' className='twitter'>
                    <i className="fa fa-twitter"></i>
                </Link>
            </div>
            <div className="copyright">
                CopyRight &#169;
            </div>
        </footer>
    )
}

export default Footer
