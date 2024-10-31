
import assamtea from '../assets/AssamTea.png';
import mashroom from '../assets/products/Mashroom.png';
import spices from '../assets/products/Spices.png';
import handicraft from '../assets/products/Handicraft.png';
import furniture from '../assets/products/furniture.png';
import honey from '../assets/products/Honey.png';
import textile from '../assets/products/Textile.png';


import greentea from '../assets/greentea.png';
import purpletea from '../assets/pinktea.png';
import whitetea from '../assets/whitetea.png';
import blacktea from '../assets/blacktea.png';
import hearbalTea from '../assets/products/HearbalTea.png';
import flavouredtea from '../assets/products/Flavouredtea.png';

import turmeric from '../assets/products/Turmeric.png';
import redchilli from '../assets/products/Redchili.png';
import ginger from '../assets/products/Ginger.png';
import cuminpowder from '../assets/products/CuminPowder.png';
import cinnamonpowder from '../assets/products/CinnamonPowder.png';
import blackpepper from '../assets/products/BlackPepper.png';
import peppercorns from '../assets/products/Peppercorns.png';
import mustardseed from '../assets/products/MustardSeed.png';

import woodenhandicrafts from '../assets/products/WoodenHandicrafts.png';
import bamboohandicrafts from '../assets/products/BambooHandicrafts.png';
import stonehandicrafts from '../assets/products/StoneHandicrafts.png';

import designerbed from '../assets/products/DesignerBed.png';
import designercupboard from '../assets/products/DesignerCupboard.png';
import designertable from '../assets/products/DesignerTable.png';
import designerdoor from '../assets/products/DesignerDoor.png';

import wildforesthoney from '../assets/products/WildForestHoney.png';
import multiflowerhoney from '../assets/products/MultiFlowerHoney.png';
import lycheehoney from '../assets/products/LycheeHoney.png';
import jamunrawhoney from '../assets/products/JamunRawHoney.png';
import eucalyptusrawhoney from '../assets/products/EucalyptusRawHoney.png';

import oystermushroom from '../assets/products/OysterMushroom.png';
import shiitakemushroom from '../assets/products/ShiitakeMushroom.png';
import morelmushroom from '../assets/products/MorelMushroom.png';
import kingoystermushroom from '../assets/products/KingOysterMushroom.png';
import mushroompowder from '../assets/products/MushroomPowder.png';
import mushroomchocolate from '../assets/products/MushroomChocolate.png';
import mushroompapadam from '../assets/products/MushroomPapadam.png';

import jeans from '../assets/products/Jeans.png';
import shirt from '../assets/products/Shirt.png';
import tshirt from '../assets/products/T-shirt.png';
import formalpants from '../assets/products/FormalPants.png';
import causepants from '../assets/products/Causepants.png';
import bedsheet from '../assets/products/Bedsheet.png';
import blankets from '../assets/products/Blankets.png';

// Main products with descriptions
export const mainProducts = {
    tea: {
      id: 1,
      name: 'ASSAM TEA',
      description: 'Naturally grown in the lush landscapes of Assam, we carefully select only the finest tea leaves to bring you the best of both worlds. Our range includes rich, dark, and robust tea leaves as well as light green and pale golden varieties, each offering its own unique flavor and aroma. Whether you prefer a bold, full-bodied brew or a more delicate, refreshing cup, we have a diverse selection of flavors to cater to every tea lover\'s taste.',
      imageUrl: assamtea,
    },
    spices: {
      id: 2,
      name: 'SPICES',
      description: 'Our spices collection is a vibrant array of flavors that enhances any dish with aromatic richness and zest. Sourced from the finest farms, each spice is carefully selected to ensure the highest quality and freshness. From everyday essentials like turmeric and cumin to exotic blends, our spices are perfect for both culinary enthusiasts and professional chefs. Explore the world of spices and elevate your cooking with these natural ingredients that bring warmth and depth to your meals.',
      imageUrl: spices,
    },
    handicrafts: {
      id: 3,
      name: 'HANDICRAFTS',
      description: 'Our collection of handicrafts showcases the rich cultural heritage and craftsmanship of artisans. Each piece is thoughtfully made using traditional techniques and natural materials, ensuring that every item is unique and of the highest quality. From wooden creations to intricately woven bamboo products, our handicrafts add a touch of authenticity and elegance to any space.',
      imageUrl: handicraft,
    },
    furniture: {
      id: 4,
      name: 'FURNITURE',
      description: 'Our furniture collection combines style, functionality, and quality craftsmanship to enhance any living space. Each piece is designed with a modern aesthetic while prioritizing comfort and practicality, making them perfect for both contemporary and traditional homes. With a focus on durable materials and innovative designs, our furniture transforms your house into a welcoming and stylish sanctuary.',
      imageUrl: furniture,
    },
    honey: {
      id: 5,
      name: 'HONEY',
      description: 'Our premium honey collection features a range of natural, raw honeys sourced from pristine environments, ensuring exceptional quality and flavor. Each type of honey is uniquely characterized by the flora from which the bees gather nectar, providing not only delicious sweetness but also numerous health benefits. Indulge in the richness of nature with our carefully selected honeys, perfect for sweetening your favorite dishes or enjoyed on their own.',
      imageUrl: honey,
    },
    mushroom: {
      id: 6,
      name: 'MUSHROOM',
      description: 'Our gourmet mushroom collection showcases a variety of flavorful and nutritious mushrooms, each offering unique culinary benefits. These versatile fungi are not only a great source of vitamins and minerals but also add rich textures and tastes to dishes. Explore our selection for a delightful addition to your cooking, whether fresh or in innovative products like mushroom powder and snacks.',
      imageUrl: mashroom,
    },
    textile: {
      id: 7,
      name: 'TEXTILE',
      description: 'Our textile collection features a diverse range of high-quality fabrics designed to suit various needs and styles. From casual wear to home essentials, each product is crafted with care, ensuring comfort, durability, and a touch of elegance. Explore our selection to find everything from fashionable clothing to cozy bedding that enhances your lifestyle.',
      imageUrl: textile,
    },
  };
  
  // Sub-products for each main product category
  export const subProducts = {
    tea: [
      { id: 101, name: 'Black Tea', description: 'Our Black Tea offers a robust, full-bodied experience that energizes with every sip. We provide various cuts, such as Bop, Bop Small, BP, PF, PD, and DUSK, each offering a unique strength and character. This tea is perfect for those who enjoy a deep, rich flavor profile, whether plain or with milk and sugar.', imageUrl: blacktea },
      { id: 102, name: 'Green Tea', description: 'Our Green Tea is carefully handpicked to retain its natural freshness and vibrant color. Known for its smooth, delicate taste, it’s also rich in antioxidants, providing a refreshing, health-boosting experience in every cup. Ideal for a calming, revitalizing brew.', imageUrl: greentea },
      { id: 103, name: 'White Tea', description: 'White Tea is a rare delicacy, harvested from the youngest tea leaves and buds. With its light, floral notes and minimal processing, it offers a subtle, refreshing flavor. This tea is valued for its delicate taste and high antioxidant content, providing a gentle and soothing brew.', imageUrl: whitetea },
      { id: 104, name: 'Purple Tea', description: 'Purple Tea is a unique and exotic variety, cultivated in specific regions for its rare color and distinctive taste. It contains powerful antioxidants and has a slightly earthy, mild flavor with a hint of sweetness. This tea is enjoyed both for its health benefits and its exceptional appearance.', imageUrl: purpletea },
      { id: 105, name: 'Herbal Tea', description: 'Our Herbal Tea selection includes a blend of naturally caffeine-free herbs, flowers, and botanicals. Each blend offers a distinct taste and is crafted to relax, rejuvenate, or energize. Herbal teas are perfect for a warm, soothing beverage at any time of day.', imageUrl: hearbalTea },
      { id: 106, name: 'Flavored Tea', description: 'Flavored Tea combines traditional tea leaves with natural flavors like fruits, spices, and floral essences. Each blend is crafted to provide a unique, aromatic experience, perfect for those seeking a flavorful twist on classic tea varieties.', imageUrl: flavouredtea },
    ],
    spices: [
      { id: 201, name: 'Turmeric', description: 'Our turmeric powder is made from pure, carefully selected turmeric roots, ground to a fine texture to retain its color and flavor. This powder adds vibrant color and a warm, earthy taste to culinary creations, as well as providing a host of health benefits.', imageUrl: turmeric },
      { id: 202, name: 'Red Chilli', description: 'Our red chili powder is finely ground from quality chilies, delivering a consistent level of spiciness and rich red color. Ideal for adding heat and flavor, this powder is versatile and enhances a range of dishes, from curries to marinades.', imageUrl: redchilli},
      { id: 203, name: 'Ginger', description: 'Ginger is a warm, spicy root known for its distinctive flavor and health benefits. It’s used in both savory and sweet recipes, providing a touch of heat and a subtle zest. Fresh and aromatic, our ginger is perfect for adding depth to culinary creations.', imageUrl: ginger },
      { id: 204, name: 'Cumin Powder', description: 'Cumin powder is made from roasted cumin seeds, ground for a rich, earthy flavor with warm, aromatic notes. It’s essential in many spice blends and adds a distinctive taste to soups, stews, and curries, enhancing both aroma and depth.', imageUrl: cuminpowder },
      { id: 205, name: 'Cinnamon Powder', description: 'Our cinnamon powder is ground from premium cinnamon bark, providing a sweet and warm aroma. This spice is commonly used in baking and desserts, as well as savory dishes, and is known for its comforting flavor and health benefits.', imageUrl: cinnamonpowder },
      { id: 206, name: 'Black Pepper', description: 'Black pepper is a classic spice with a sharp, robust flavor. Handpicked and sun-dried, our black pepper adds a piquant, aromatic heat to dishes. It’s versatile and widely used, whether as whole peppercorns or ground for seasoning.', imageUrl: blackpepper },
      { id: 207, name: 'Peppercorns', description: 'Our peppercorns are carefully selected for their full flavor and quality. Perfect for grinding fresh over dishes, they add a sharp, complex heat that enhances both simple and elaborate recipes. Whole peppercorns are also essential in spice mixes and brines.', imageUrl: peppercorns },
      { id: 208, name: 'Mustard Seed', description: 'Mustard seeds have a sharp, tangy flavor and are widely used in pickling, cooking, and spice blends. When ground or added whole, they bring depth and warmth to dishes, with a distinct flavor that’s slightly nutty and peppery.', imageUrl: mustardseed },
    ],
    handicrafts: [
      { id: 301, name: 'Wooden Handicrafts', description: 'Our wooden handicrafts are meticulously crafted from premium hardwoods, offering a blend of durability and aesthetic appeal. Each piece reflects the skill of artisans who transform raw wood into beautiful items, ranging from decorative sculptures to functional furniture. These eco-friendly products bring warmth and character to your home or office.', imageUrl: woodenhandicrafts },
      { id: 302, name: 'Bamboo Handicrafts', description: 'Bamboo handicrafts represent sustainability and creativity, made from one of natures most versatile materials. Our collection includes everything from intricately woven baskets to stylish furniture. Lightweight yet sturdy, these products are not only functional but also add an organic touch to any decor, celebrating the artistry of skilled artisans.', imageUrl: bamboohandicrafts },
      { id: 303, name: 'Stone Handicrafts', description: 'Our stone handicrafts are a testament to timeless elegance and durability. Carved from natural stone, each item showcases intricate designs and craftsmanship. From decorative pieces to functional items, these unique stone creations add a sense of sophistication and a connection to nature, making them perfect for enhancing your living spaces.', imageUrl: stonehandicrafts },
    ],
    furniture: [
      { id: 401, name: 'Designer Bed', description: 'Experience luxurious comfort with our designer beds, meticulously crafted to transform your bedroom into a serene sanctuary. Available in various styles and finishes, these beds not only provide ultimate relaxation but also add a touch of elegance to your space.', imageUrl: designerbed },
      { id: 402, name: 'Designer Cupboard', description: 'Our designer cupboards blend functionality with artistic flair, offering ample storage while enhancing your interior decor. With customizable options and unique designs, these cupboards keep your belongings organized while making a stylish statement in any room.', imageUrl: designercupboard },
      { id: 403, name: 'Designer Table', description: 'The designer tables in our collection serve as functional art pieces, perfect for dining, working, or entertaining. Crafted with high-quality materials, these tables combine practicality and aesthetic appeal, making them ideal for both casual and formal settings.', imageUrl: designertable },
      { id: 404, name: 'Designer Door', description: 'Elevate your entryways with our stunning designer doors, engineered for security and style. Each door features distinctive designs and premium materials, ensuring that your entrance makes a lasting impression while complementing your overall decor.', imageUrl: designerdoor },
    ],
    honey: [
      { id: 501, name: 'Wild Forest Honey', description: 'Harvested from the untouched forests, our wild forest honey boasts a rich, bold flavor and a dark amber hue. This honey is packed with antioxidants and nutrients, making it a delightful addition to teas or drizzled over fresh fruits.', imageUrl: wildforesthoney },
      { id: 502, name: 'Multi Flower Honey', description: 'Our multi-flower raw honey is a harmonious blend of nectar from various blossoms, resulting in a light, floral taste. It’s perfect for everyday use, enhancing the flavor of teas, smoothies, or yogurt while providing natural energy and wellness benefits.', imageUrl: multiflowerhoney },
      { id: 503, name: 'Lychee Honey', description: 'Sourced from lychee blossoms, this exquisite honey has a sweet, fruity flavor with subtle floral notes. Ideal for sweetening beverages or as a topping for desserts, lychee raw honey is not only delicious but also rich in vitamins and minerals.', imageUrl: lycheehoney },
      { id: 504, name: 'Jamun Raw Honey', description: 'Gathered from the blossoms of the jamun tree, our jamun raw honey has a unique taste with a hint of spice. This dark honey is known for its medicinal properties and is often used in traditional remedies, making it a healthy choice for your diet.', imageUrl: jamunrawhoney },
      { id: 505, name: 'Eucalyptus Raw Honey', description: 'Infused with the distinct aroma and flavor of eucalyptus, this raw honey offers a soothing taste that is perfect for teas and herbal remedies. Renowned for its potential health benefits, eucalyptus raw honey is a great way to support your immune system while enjoying a delicious treat.', imageUrl: eucalyptusrawhoney },
    ],
    mushroom: [
      { id: 601, name: 'Oyster Mushroom', description: 'Known for their delicate flavor and velvety texture, oyster mushrooms are perfect for sautés, stir-fries, or soups. Rich in antioxidants, they are low in calories yet packed with nutrients, making them a healthy addition to any meal.', imageUrl: oystermushroom },
      { id: 602, name: 'Shiitake Mushroom', description: 'Shiitake mushrooms bring a robust, umami flavor to your dishes. These mushrooms are commonly used in Asian cuisine and are known for their potential health benefits, including immune support and cardiovascular health.', imageUrl: shiitakemushroom},
      { id: 603, name: 'Morel Mushroom', description: 'Morel mushrooms are a delicacy with a distinctive honeycomb appearance and earthy flavor. Highly sought after for gourmet dishes, they pair beautifully with cream sauces or can be simply sautéed to enhance their unique taste.', imageUrl: morelmushroom },
      { id: 604, name: 'King Oyster Mushroom', description: 'With their meaty texture and mild flavor, king oyster mushrooms are a versatile ingredient that can be grilled, roasted, or used as a meat substitute in various recipes. They are also rich in fiber and essential nutrients, making them a nutritious choice.', imageUrl: kingoystermushroom },
      { id: 605, name: 'Mushroom Powder', description: 'Our mushroom powder is made from a blend of dried mushrooms, offering a concentrated source of flavor and nutrition. Its perfect for enhancing soups, stews, sauces, or smoothies with the rich essence of mushrooms.', imageUrl: mushroompowder },
      { id: 606, name: 'Mushroom Chocolate', description: 'Indulge in the unique combination of rich chocolate infused with the earthy flavors of mushrooms. This innovative treat not only satisfies your sweet tooth but also provides the health benefits of mushrooms in a delicious way.', imageUrl: mushroomchocolate },
      { id: 607, name: 'Mushroom Papadam', description: 'Mushroom papadam is a delightful twist on the traditional Indian snack, incorporating the flavors of mushrooms into crispy lentil wafers. These can be enjoyed as a snack or served alongside your favorite dishes for added texture and taste.', imageUrl:mushroompapadam},
    ],
    textile: [
      { id: 701, name: 'Jeans', description: 'Our jeans combine style and comfort, featuring various fits and washes to suit every occasion. Crafted from premium denim, they offer durability and a perfect fit, making them a wardrobe staple for any fashion enthusiast.', imageUrl: jeans },
      { id: 702, name: 'Shirt', description: 'Our shirts are designed for versatility, ideal for both casual and formal occasions. Made from breathable fabrics, they provide comfort while ensuring you look sharp and put-together, whether at work or social gatherings.', imageUrl: shirt },
      { id: 703, name: 'T-shirt', description: 'The classic t-shirt is a timeless wardrobe essential. Soft, stylish, and available in various colors and designs, our t-shirts offer both comfort and a fashionable touch to your everyday outfits.', imageUrl: tshirt },
      { id: 704, name: 'Formal Pants', description: 'Elevate your wardrobe with our formal pants, crafted for a tailored fit and sophisticated look. Perfect for the office or formal events, these pants combine elegance with comfort, ensuring you feel confident all day long.', imageUrl: formalpants},
      { id: 705, name: 'Casual pants', description: 'Our casual pants are designed for comfort without sacrificing style. Ideal for relaxed outings or lounging at home, they come in various styles and materials to match your laid-back lifestyle.', imageUrl: causepants },
      { id: 706, name: 'Bedsheet', description: 'Enhance your bedroom with our luxurious bedsheets, made from soft, breathable fabrics for a cozy night sleep. Available in a variety of patterns and colors, they add a touch of elegance to your bedding ensemble.', imageUrl: bedsheet },
      { id: 707, name: 'Blankets', description: 'Our blankets are perfect for snuggling up on chilly evenings. Crafted from high-quality materials, they offer warmth and comfort while adding a stylish layer to your home decor. Ideal for use on the bed or sofa, these blankets are a must-have for any household.', imageUrl: blankets },
    ],
  };
  