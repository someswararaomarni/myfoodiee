import Image from 'next/image';
import css from '../styles/Services.module.css';
import s1 from '../assets/s1.png';
import s2 from '../assets/s2.png';
import s3 from '../assets/s3.png';
export default function Services() {
    return(
        <>
            <div className={css.heading}>
               <span>WHAT WE SERVE</span>
               <span>Your Favourite</span>
               <span>Delivery Partner</span>
            </div>

            {/*Features */}
            <div className={css.services}>
                    <div className={css.feature}>
                        <div className={css.ImageWrapper}>
                           <Image src={s1} alt="" objectFit='cover' layout='intrinsic' />
                        </div>
                        <span>Easy to Order</span>
                        <span>You are only few steps away.</span>
                    </div>
                    <div className={css.feature}>
                    <div className={css.ImageWrapper}>
                           <Image src={s2} alt="" objectFit='cover' layout='intrinsic' />
                        </div>
                        <span>Easy to Order</span>
                        <span>Delivery On Time. Faster Sometimes!</span>
                    </div>
                    <div className={css.feature}>
                    <div className={css.ImageWrapper}>
                           <Image src={s3} alt="" objectFit='cover' layout='intrinsic' />
                        </div>
                        <span>Easy to Order</span>
                        <span>We Ensure Quality.</span>
                    </div>
                        
                   
                
                
            </div>

            
            </>
    )
};