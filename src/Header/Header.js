import './Header.css'

export default function Header(){
    return(
        <div className='container'>
            <h1 > <a href='#'> KASUKA </a> </h1>
            <nav> 
                <ul>
                    <li  > <a href="#" className='activeLI'> خانه </a>   </li>
                    <li > <a href="#" >  درباره ی ما  </a></li>
                    <li > <a href="#" > خدمات  </a>  </li>
                    <li > <a href="#" >نمونه کار   </a>   </li>
                    <li > <a href="#"  >تیم   </a>  </li>
                    <li > <a href="#" >  لیست کشویی  </a></li>
                    <li > <a href="#" >  تماس با ما  </a>  </li>
                </ul>
            </nav>
            <button>  شروع  </button>
        </div>
    );
}