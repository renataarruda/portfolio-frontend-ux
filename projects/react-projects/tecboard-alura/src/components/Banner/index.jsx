import banner from '../../assets/banner.png';
import './banner-form.styles.css';

export function Banner(){
    return(
        <section className='banner'>
              <img src={banner} alt="Banner Elas em Tech" />
            </section>
    )
}