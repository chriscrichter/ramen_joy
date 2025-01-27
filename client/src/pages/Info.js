import React from 'react';
import "../style/Info.css";

const Info = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-xs-12">
          <h2 className="title">What is Ramen?</h2>
          <p className="text">Ramen is a Japanese noodle soup, with a combination of a rich flavoured broth, one of a variety of types of noodle and a selection of meats or vegetables, often topped with a boiled egg. In Japan ramen is considered a fast food, with many small restaurants and street vendors offering a warming bowl of this delicious soup.
          <br/> 
          -- Kikkoman Trading</p>
        </div>
        <div className="col-lg-6 col-xs-12">
          <h2 className="title">1O Fun Ramen Facts</h2>
          <ul className="facts">
            <li>1. Some people eat instant ramen noodles uncooked.</li>
            <li>2. The first noodles ever consumed in space were instant ramen noodles.</li>
            <li>3. You only need $150 only to survive on ramen for a year.</li>
            <li>4. There's a whole museum in Yokohama, Japan dedicated to Cup Noodles.</li>
            <li>5. ‘Ra-men’ is just the Japanese pronunciation of ‘Lo-Mein’- the same name in Chinese.</li>
            <li>6. On average, a packet of ramen contains 51 meters of noodles.</li>
            <li>7. Instant ramen is the best-selling item at the Rikers Island jail.</li>
            <li>8. In Japan, there are at least 22 different styles or Ramen.</li>
            <li>9. According to one survey, the Japanese consider ramen their best invention.</li>
            <li>10. Ramen was considered to be a luxury food when it was first released to the public.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Info;
