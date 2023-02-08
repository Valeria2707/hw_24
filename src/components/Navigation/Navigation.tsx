import Link from '../Links/Links';
import './Navigation.css';

const Navigation = () =>{
    return(
        <nav className='navigation'>
            <Link text='link 1'/>
            <Link text='link 2'/>
            <Link text='link 3'/>
            <Link text='link 4'/>
        </nav>
    );
}

export default Navigation;