import css from '../styles/Header.module.css'
import Image from 'next/image';
import   logo from '../assets/Logo.png';
import {UilShoppingBag,UilReceipt} from '@iconscout/react-unicons';
import { useStore } from '../store/store';
import { useEffect, useState } from 'react';
import Link from 'next/Link';
export default function Header() {
   //state in terminal
   const [Order,setOrder]=useState("");

   useEffect(()=>{
      setOrder(localStorage.getItem("order"));
   },[]);
   const items=useStore((state)=>state.cart.pizzas.length)
   return(
    <div className={css.header}>
    {/*logo side*/}
    <div className={css.logo} >
         <Image src={logo} alt="" width={50} height={50} />
         <span>Foodieee</span>
    </div>
    {/*menu side */}
    <ul className={css.menu}>
      <li><Link href='../'>Home</Link></li>
      <li><Link href='../'>Menu</Link></li>
      <li><Link href='../'>Contact</Link> </li>
    </ul>
    
    {/*right-side */}

    <div className={css.rightside}>
    <Link href= '/cart'>
       <div className={css.cart}>
        <UilShoppingBag size={35} color="#2E2E2E" />
        <div className={css.badge}>
           {items}
        </div>
       </div>
       </Link>

       {Order && (
         <Link href={`/order/${Order}`}>
            <div className={css.cart}>
               <UilReceipt size={35} color='#2E2E2E'/>
               {Order !="" && <div className={css.badge}>1</div>}
            </div>
         </Link>
       )}
    </div>
    </div>
   )
};