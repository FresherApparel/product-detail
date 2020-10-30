const fs = require('fs');
const faker = require('faker');

const categories = [
  'Jacket',
  'Pants',
  'Kicks',
  'Dress Shoes',
  'Basketball Shoes',
  'Slacks',
  'Socks',
  'Dress',
  'Heels',
  'Shorts',
  'Skirt',
  'Romper',
  'Cap',
  'Coat',
  'Suit',
  'Backpack',
  'Tank Top',
  'Trousers',
  'Shirt',
  'Hat',
  'Hoodie',
  'Sunglasses',
  'Sweater',
  'Sweatpants',
  'Shoes',
  'Boots',
];
const length = categories.length - 1;

const writeProducts = fs.createWriteStream('products.csv');
writeProducts.write('id, name, slogan, description, category, default_price\n', 'utf8');

const idPrices = {};

const generateProducts = (writer, encoding, cb) => {
  console.time('Products');
  let i = 100000;
  let id = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      const name = '"' + faker.random.word() + ' ' + faker.random.word() + '"';
      const slogan = '"' + faker.random.word() + ' ' + faker.random.word() + ' ' + faker.random.word() + '"';
      const description = '"' + faker.random.word() + ' ' + faker.random.word() + ' ' + faker.random.word() + ' ' + faker.random.word() + '"';
      const idx = Math.floor(Math.random() * (length));
      const category = categories[idx];
      const default_price = Math.floor(Math.random() * (999 - 40) + 40);
      const data = `${id},${name},${slogan},${description},${category},${default_price}\n`;

      if (!(id in idPrices)) {
        idPrices[id] = default_price;
      }

      if (i === 0) {
        writer.write(data, encoding, cb);
      } else {
        // see if we should continue, or wait
        // don't pass the callb ack, because we're not done yet.
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      // had to stop early!
      // write some more once it drains
      writer.once('drain', write);
    }
  }
  write();
};

/* ############################################################################ */

const Feats = {
  Fabric: [
    'Canvas',
    '100% Cotton',
    '99% Cotton 1% Elastic',
    '95% Cotton',
    'Cashmere',
    'Silk',
    'Cool Fit',
    '80% Cotton',
    'FullControlSkin',
    'Wool',
    'Velvet',
  ],
  Buttons: [
    'Brass',
    'Blue Resin',
    'Ivory',
    'White Resin',
    'Black Resin',
  ],
  Lenses: ['Ultrasheen'],
  UVProtection: ['null'],
  Frames: ['LightCompose'],
  Cut: ['Skinny', 'Loose', 'Striaght', 'Straight'],
  Sole: ['Rubber'],
  Material: [
    'FullControlSkin',
    'Armor Weave',
    'Control Support Bridge',
    'FullControl Skin',
    'FullSupport Hybrid Compound',
    'Rubber Mesh',
  ],
  MidSole: ['ControlSupport Arch Bridge'],
  Stitching: ['Double Stitch', 'Cross Stitch'],
  FairTradeCertified: ['null'],
  NonGMO: ['null'],
  Frame: ['AllLight Composition Resin', 'DuraResin'],
  SustainablySourced: ['null'],
  FiveYearWarranty: ['null'],
  SatisfactionGuaranteed: ['null'],
  Lens: [
    'Ultrasheen Gold',
    'Ultrasheen Silver',
    'Ultrasheen Basic',
    '100% UV Protective',
  ],
  LifetimeGuarantee: ['null'],
  GreenLeafCertified: ['null'],
};

const writeFeatures = fs.createWriteStream('features.csv');
writeFeatures.write('id, prod_id, feature, value\n', 'utf8');

const generateFeatures = (writer, encoding, cb) => {
  console.time('Features');
  let id = 0;
  let prod_id = 0;
  function write() {
    let ok = true;
    let numFeats = 0;
    while ((prod_id < 100000 || numFeats > 0) && ok) {
      id++;
      if (numFeats === 0) {
        numFeats = Math.floor(Math.random() * (6 - 1) + 1);
        prod_id++;
      }

      const keys = Object.keys(Feats);
      const index = Math.floor(Math.random() * keys.length);
      const feature = keys[index];
      let value;

      if (Feats[feature].length > 1) {
        const idx = Math.floor(Math.random() * Feats[feature].length);
        value = Feats[feature][idx];
      } else {
        value = Feats[feature][0];
      }

      const data = `${id},${prod_id},${feature},${value}\n`;

      numFeats--;

      if (prod_id === 100000 && numFeats === 0) {
        writer.write(data, encoding, cb);
      } else {
        ok = writer.write(data, encoding);
      }
    }
    if (prod_id < 100000) {
      writer.once('drain', write);
    }
  }
  write();
};

/* ############################################################################ */

const writeStyles = fs.createWriteStream('sytles.csv');
writeStyles.write('id, prod_id, name, original_price, sale_price, defalut\n');

const styles = [
  'Forest Green & Black',
  'Desert Brown & Tan',
  'Ocean Blue & Grey',
  'Digital Red & Black',
  'Sky Blue & White',
  'Dark Grey & Black',
  'Black Lenses & Black Frame',
  'Black Lenses & Gold Frame',
  'Gold Lenses & Black Frame',
  'Gold Lenses & Gold Frame',
  'Black',
  'Grey',
  'Goldenrod',
  'Maroon',
  'Chartreuse',
  'White',
  'Olive Green',
  'Tan',
  'Red',
  'Pinstripe',
  'Khaki',
  'Plaid',
  'White & White',
  'White & Red',
  'White & Blue',
  'White Sole',
  'Black Sole',
  'Tan Sole',
  'Red Sole',
  'Yellow Sole',
  'Zebra Stripe',
  'Oreo',
  'Red Supply',
  'Pink',
  'Green',
  'Butter',
  'Reality',
  'Space',
  'Time',
  'Power',
  'Mind',
  'Soul',
  'Lime',
  'Cyan',
  'Lavendar',
  'Olive',
  'Gold',
  'Ivory',
  'Turquoise',
  'Orchid',
  'Azure',
  'Salmon',
  'Violet',
  'Magenta',
  'Silver',
  'Sky Blue',
  'Teal',
  'Fuchsia',
  'Mint Green',
  'Plum',
  'Blue',
  'Yellow',
  'Orange',
  'Purple',
  'Indigo',
];

let totalStyles = 0;

const generateStyles = (writer, encoding, cb) => {
  console.time('Styles');
  let id = 0;
  let prod_id = 0;
  function write() {
    let ok = true;
    let numStyles = 0;
    while ((prod_id < 100000 || numStyles > 0) && ok) {
      id++;
      totalStyles++;
      if (numStyles === 0) {
        numStyles = Math.floor(Math.random() * (4 - 1) + 1);
        prod_id++;
      }

      const idx = Math.floor(Math.random() * styles.length);
      const name = styles[idx];
      const original_price = idPrices[prod_id];
      let sale_price = Math.floor(Math.random() * (11 - 1) + 1);
      if (sale_price > 6) {
        sale_price = Math.floor(original_price * .25);
      } else {
        sale_price = 0;
      }
      const defalut = 0;

      const data = `${id},${prod_id},${name},${original_price},${sale_price},${defalut}\n`;

      numStyles--;

      if (prod_id === 100000 && numStyles === 0) {
        writer.write(data, encoding, cb);
      } else {
        ok = writer.write(data, encoding);
      }
    }
    if (prod_id < 100000) {
      writer.once('drain', write);
    }
  }
  write();
};

const writePhotos = fs.createWriteStream('photos.csv');
writePhotos.write('id, style_id, url, thumbnail_url\n', 'utf8');

const generatePhotos = (writer, encoding, cb) => {
  console.time('Photos');
  let id = 0;
  let style_id = 0;
  function write() {
    let ok = true;
    let numPhotos  = 0;
    while ((style_id < totalStyles || numPhotos > 0) && ok) {
      id++;
      if (numPhotos === 0) {
        numPhotos = Math.floor(Math.random() * (7 - 1) + 1);
        style_id++;
      }
      const url = faker.image.imageUrl();
      const thumbnail_url = faker.image.imageUrl();
      const data = `${id},${style_id},${url},${thumbnail_url}\n`;
      numPhotos--;

      if (style_id === totalStyles && numPhotos === 0) {
        writer.write(data, encoding, cb);
      } else {
        ok = writer.write(data, encoding);
      }
    }
    if (style_id < totalStyles) {
      writer.once('drain', write);
    }
  }
  write();
};

generateProducts(writeProducts, 'utf-8', () => {
  writeProducts.end();
  console.timeEnd('Products');
  generateFeatures(writeFeatures, 'utf-8', () => {
    writeFeatures.end();
    console.timeEnd('Features');
    generateStyles(writeStyles, 'utf-8', () => {
      writeStyles.end();
      console.timeEnd('Styles');
      generatePhotos(writePhotos, 'utf-8', () => {
        writePhotos.end();
        console.timeEnd('Photos');
      })
    });
  });
});
