import React, { useEffect } from "react";
import { motion } from "framer-motion";

function AboutTest() {
        useEffect(() => {
          window.scrollTo(0, 0);
        }, [])
  return (
    <div class="banner-about">
        <div class="content-about">
            <h1>Welcome to Lun Dev</h1>
            <div class="des">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa temporibus maiores quam expedita, ad voluptate tempora perspiciatis illum rerum quasi doloremque commodi nostrum tenetur eum dolor reiciendis, nam vero illo maxime aliquam nobis suscipit dolores sequi. Earum error velit explicabo commodi. Facere deserunt ad dicta similique! Alias sequi illo dignissimos!
            </div>
            <button class="subcribe">Subcribe now</button>
            <div class="statis">
                <div class="item">
                    <p>Subcribes</p>
                    <p>5.000</p>
                </div>
                <div class="item">
                    <p>Views</p>
                    <p>200K</p>
                </div>
                <div class="item">
                    <p>Likes</p>
                    <p>9.800</p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default AboutTest;
