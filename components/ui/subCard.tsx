import Image from 'next/image';
import { InfiniteSlider } from './infinite-slider';

const SubCard = () => {
  return (
    <InfiniteSlider durationOnHover={75} gap={24} className="overflow-hidden">
      <div>
      <Image
        src='/1.png'
        alt='Dean blunt - Black Metal 2'
        className='aspect-square w-[120px] rounded-[4px]'
        width={120}
        height={120}
      />
      <span><p>Diaby Ibrahim</p>
      <p>Camayenne</p></span>
      </div>
  <div>
        <Image
            src='/2.png'
            alt='Kanye West - My Beautiful Dark Twisted Fantasy'
            className='aspect-square w-[120px] rounded-[4px]'
            width={120}
            height={120}
        />
        <span><p>Sekou Keita</p>
        <p>Kaloum</p></span>
  </div>
      <div>
      <Image
        src='/4.png'
        alt='Yung Lean - Stardust'
        className='aspect-square w-[120px] rounded-[4px]'
        width={120}
        height={120}
      />
        <span><p>Sallou Diallo</p>
        <p>Matam</p></span>
      </div>
    <div>
        <Image
            src='/3.png'
            alt='Yung Lean - Stranger'
            className='aspect-square w-[120px] rounded-[4px]'
            width={120}
            height={100}
        />
        <span><p>Saran Sanoh</p>
        <p>Matoto</p></span>
    </div>
    
    </InfiniteSlider>
  );
}

export default SubCard;
