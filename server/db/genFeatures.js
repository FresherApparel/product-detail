const fs = require('fs');
const faker = require('faker');

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

      const data = `${id}, ${prod_id}, ${feature}, ${value}\n`;

      numFeats--;

      if (prod_id === 100000 && numFeats === 1) {
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

generateFeatures(writeFeatures, 'utf-8', () => {
  writeFeatures.end();
  console.timeEnd('Features');
});

