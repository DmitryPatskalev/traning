import css from './style.module.css'
import Header from "./Header";
import Navbar from "./Navbar";
import Article from "./Article";

export default function RouteTraning(){
    return <div className={css.body}>
    <div className={css.header}>
        <Header/>
    </div>
        <div className={css.navbar}>
            <Navbar/>
        </div>
        <div className={css.article}>
            <Article/>
        </div>
    </div>
}