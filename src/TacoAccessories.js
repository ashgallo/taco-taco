import React from 'react';
import { Segment, Image } from 'semantic-ui-react';
import tacosaurus from './assets/tacosaurus.jpg';
import nachosaurus from './assets/nachosaurus.jpg';
import tacotruck from './assets/tacotruck.jpg';
import tacotrain from './assets/tacotrain.jpg';
import hat from './assets/hat.jpg';
import shirt from './assets/shirt.jpg';
import socks from './assets/socks.jpg';
import costume from './assets/costume.jpg';


const TacoAccessories = () => (
  <div>
    <Segment>
      <Image.Group size='small'>
        <Image 
          src={tacosaurus}
          href='https://www.amazon.com/Barbuzzo-TACOsaurus-Rex-Taco-Holder/dp/B07BP8HZVS/ref=sr_1_22_sspa?ie=UTF8&qid=1539820640&sr=8-22-spons&keywords=taco+accessories&psc=1'
          target='_blank'
        />
        <Image 
          src={nachosaurus}
          href='https://www.amazon.com/Barbuzzo-NACHOsaurus-Dip-Snack-Dish/dp/B07BPBWRM1/ref=sr_1_34_sspa?ie=UTF8&qid=1539822272&sr=8-34-spons&keywords=taco+food+supplies&psc=1'
          target='_blank'
        />
        <Image 
          src={tacotruck}
          href='https://www.amazon.com/Fred-TACO-TRUCK-Taco-Holder/dp/B00JDRDIO6/ref=sr_1_27?ie=UTF8&qid=1539821917&sr=8-27&keywords=taco+accessories'
          target='_blank'
        />
        <Image 
          src={tacotrain}
          href='https://www.amazon.com/dp/B07H3N9D84/ref=sxbs_sxwds-stvpv2_3?pf_rd_m=ATVPDKIKX0DER&pf_rd_p=6375e697-f226-4dbd-a63a-5ec697811ee1&pd_rd_wg=O35Ks&pf_rd_r=MA9KF7QAMEG72CK0DV7G&pf_rd_s=desktop-sx-bottom-slot&pf_rd_t=301&pd_rd_i=B07H3N9D84&pd_rd_w=J2u0l&pf_rd_i=guacamole+holder&pd_rd_r=946df4e1-ac36-4fad-80ef-75147a5e14ee&ie=UTF8&qid=1539822395&sr=3'
          target='_blank'
        />
      </Image.Group>
      <Image.Group size='small'>
        <Image 
          src={hat}
          href='https://www.amazon.com/Amscan-Awesome-Taco-Accessories-Yellow/dp/B06XG2KCCG/ref=sr_1_4?ie=UTF8&qid=1539821420&sr=8-4&keywords=taco+accessories'
          target='_blank'
        />
        <Image 
          src={shirt}
          href='https://www.amazon.com/Womens-Fitness-Funny-Humorous-Ladies/dp/B01N9XY7SV/ref=sr_1_9?ie=UTF8&qid=1539821420&sr=8-9&keywords=taco+accessories'
          target='_blank'
        />
        <Image 
          src={socks}
          href='https://www.amazon.com/Socksmith-Womens-Novelty-Socks-Tacos/dp/B017WNYZRG/ref=sr_1_13?ie=UTF8&qid=1539821420&sr=8-13&keywords=taco+accessories'
          target='_blank'
        />
        <Image 
          src={costume}
          href='https://www.amazon.com/Spooktacular-Creations-Costume-Adult-Standard/dp/B07H45665F/ref=sr_1_2?ie=UTF8&qid=1539822049&sr=8-2&keywords=taco+costume'
          target='_blank'
        />
      </Image.Group>
    </Segment>
  </div>
)

export default TacoAccessories;