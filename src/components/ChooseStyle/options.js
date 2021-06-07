// function that imports all necessary images
function importAll(r) {
  let images = {};
  r.keys().map((item) => {
    return (images[item.replace("./", "")] = r(item));
  });
  return images;
}

// imports all the images from the aldridge folder in assets/images
const aldridge = importAll(
  require.context("../../assets/images/aldridge", false, /.(png|jpe?g|svg)$/)
);

// imports all the images from the ashford folder in assets/images
const ashford = importAll(
  require.context("../../assets/images/ashford", false, /.(png|jpe?g|svg)$/)
);

// imports all the images from the broadway folder in assets/images
const broadway = importAll(
  require.context("../../assets/images/broadway", false, /.(png|jpe?g|svg)$/)
);

// imports all the images from the cambridge folder in assets/images
const cambridge = importAll(
  require.context("../../assets/images/cambridge", false, /.(png|jpe?g|svg)$/)
);

// imports all the images from the cambridge folder in assets/images
const canterbury = importAll(
  require.context("../../assets/images/canterbury", false, /.(png|jpe?g|svg)$/)
);

// imports all the images from the elland folder in assets/images
const elland = importAll(
  require.context("../../assets/images/elland", false, /.(png|jpe?g|svg)$/)
);

// imports all the images from the euroline folder in assets/images
const euroline = importAll(
  require.context("../../assets/images/euroline", false, /.(png|jpe?g|svg)$/)
);

// imports all the images from the euroline folder in assets/images
const gothic = importAll(
  require.context("../../assets/images/gothic", false, /.(png|jpe?g|svg)$/)
);

// imports all the images from the euroline folder in assets/images
const integra = importAll(
  require.context("../../assets/images/integra", false, /.(png|jpe?g|svg)$/)
);

// imports all the images from the euroline folder in assets/images
const knebworth = importAll(
  require.context("../../assets/images/knebworth", false, /.(png|jpe?g|svg)$/)
);

// imports all the images from the euroline folder in assets/images
const lazio = importAll(
  require.context("../../assets/images/lazio", false, /.(png|jpe?g|svg)$/)
);

// imports all the images from the euroline folder in assets/images
const lincoln = importAll(
  require.context("../../assets/images/lincoln", false, /.(png|jpe?g|svg)$/)
);

// imports all the images from the euroline folder in assets/images
const milano = importAll(
  require.context("../../assets/images/milano", false, /.(png|jpe?g|svg)$/)
);

// imports all the images from the euroline folder in assets/images
const molise = importAll(
  require.context("../../assets/images/molise", false, /.(png|jpe?g|svg)$/)
);

// imports all the images from the euroline folder in assets/images
const newport = importAll(
  require.context("../../assets/images/newport", false, /.(png|jpe?g|svg)$/)
);

// imports all the images from the euroline folder in assets/images
const oxford = importAll(
  require.context("../../assets/images/oxford", false, /.(png|jpe?g|svg)$/)
);

// imports all the images from the euroline folder in assets/images
const palermo = importAll(
  require.context("../../assets/images/palermo", false, /.(png|jpe?g|svg)$/)
);

// imports all the images from the euroline folder in assets/images
const pisa = importAll(
  require.context("../../assets/images/pisa", false, /.(png|jpe?g|svg)$/)
);

// imports all the images from the euroline folder in assets/images
const richmond = importAll(
  require.context("../../assets/images/richmond", false, /.(png|jpe?g|svg)$/)
);

// imports all the images from the euroline folder in assets/images
const segreto = importAll(
  require.context("../../assets/images/segreto", false, /.(png|jpe?g|svg)$/)
);

// imports all the images from the euroline folder in assets/images
const shaker = importAll(
  require.context("../../assets/images/shaker", false, /.(png|jpe?g|svg)$/)
);

// imports all the images from the euroline folder in assets/images
const surrey = importAll(
  require.context("../../assets/images/surrey", false, /.(png|jpe?g|svg)$/)
);

// imports all the images from the euroline folder in assets/images
const tullymore = importAll(
  require.context("../../assets/images/tullymore", false, /.(png|jpe?g|svg)$/)
);

// imports all the images from the euroline folder in assets/images
const tuscany = importAll(
  require.context("../../assets/images/tuscany", false, /.(png|jpe?g|svg)$/)
);

// imports all the images from the euroline folder in assets/images
const venice = importAll(
  require.context("../../assets/images/venice", false, /.(png|jpe?g|svg)$/)
);

// imports all the images from the euroline folder in assets/images
const verona = importAll(
  require.context("../../assets/images/verona", false, /.(png|jpe?g|svg)$/)
);

// imports all the images from the euroline folder in assets/images
const warwick = importAll(
  require.context("../../assets/images/warwick", false, /.(png|jpe?g|svg)$/)
);

// imports all the images from the euroline folder in assets/images
const westbury = importAll(
  require.context("../../assets/images/westbury", false, /.(png|jpe?g|svg)$/)
);

// imports all the images from the euroline folder in assets/images
const york = importAll(
  require.context("../../assets/images/york", false, /.(png|jpe?g|svg)$/)
);

const options = [
  {
    name: "High Gloss White",
    images: [
      {
        name: "Ashford",
        src: ashford["ashford-high-gloss-white.jpg"].default,
      },
      {
        name: "Cambridge",
        src: cambridge["Cambridge High Gloss White.jpg"].default,
      },
      {
        name: "Canterbury",
        src: canterbury["canterbury high gloss white.jpg"].default,
      },
      {
        name: "Lazio",
        src: lazio["Lazio high-gloss-white.jpg"].default,
      },
      {
        name: "Lincoln",
        src: lincoln["Lincoln HIgh Gloss White.jpg"].default,
      },
      {
        name: "Milano",
        src: milano["milano high gloss white.jpg"].default,
      },
      {
        name: "Molise",
        src: molise["Molise venice_high_gloss_white.png"].default,
      },
      {
        name: "Palermo",
        src: palermo["palermo high gloss white.jpg"].default,
      },
      {
        name: "Pisa",
        src: pisa["pisa high gloss white.jpg"].default,
      },
      {
        name: "Richmond",
        src: richmond["Richmond High Gloss White.jpg"].default,
      },
      {
        name: "Tuscany",
        src: tuscany["tuscany high gloss white.jpg"].default,
      },
      {
        name: "Venice",
        src: venice["venice high gloss white.jpg"].default,
      },
      {
        name: "Verona",
        src: verona["verona high gloss white.jpg"].default,
      },
      {
        name: "York",
        src: york["york high gloss white.jpg"].default,
      },
    ],
  },
  {
    name: "High Gloss Cream",
    images: [
      {
        name: "Ashford",
        src: ashford["ashford-high-gloss-cream.jpg"].default,
      },
      {
        name: "Cambridge",
        src: cambridge["Cambridge High-Gloss-Cream.jpg"].default,
      },
      {
        name: "Canterbury",
        src: canterbury["canterbury high gloss cream.jpg"].default,
      },
      {
        name: "Lazio",
        src: lazio["Lazio high-gloss-cream.jpg"].default,
      },
      {
        name: "Lincoln",
        src: lincoln["Lincoln High Gloss Cream.jpg"].default,
      },
      {
        name: "Milano",
        src: milano["milano high gloss cream.jpg"].default,
      },
      {
        name: "Molise",
        src: molise["Molise venice_high_gloss_cream.png"].default,
      },
      {
        name: "Palermo",
        src: palermo["palermo high gloss cream.jpg"].default,
      },
      {
        name: "Pisa",
        src: pisa["pisa high gloss cream.jpg"].default,
      },
      {
        name: "Richmond",
        src: richmond["Richmond High Gloss Cream.jpg"].default,
      },
      {
        name: "Tuscany",
        src: tuscany["tuscany high gloss cream.jpg"].default,
      },
      {
        name: "Venice",
        src: venice["venice high gloss cream.jpg"].default,
      },
      {
        name: "Verona",
        src: verona["verona high gloss cream.jpg"].default,
      },
      {
        name: "York",
        src: york["york high gloss cream.jpg"].default,
      },
    ],
  },
  {
    name: "High Gloss Light Grey",
    images: [
      {
        name: "Ashford",
        src: ashford["ashford-high-gloss-light-grey.jpg"].default,
      },
      {
        name: "Cambridge",
        src: cambridge["Cambridge High Gloss Light Grey.jpg"].default,
      },
      {
        name: "Canterbury",
        src: canterbury["Canterbury High Gloss Light Grey.jpg"].default,
      },
      {
        name: "Lazio",
        src: lazio["Lazio High Gloss Light Grey.jpg"].default,
      },
      {
        name: "Milano",
        src: milano["Milano High Gloss Light Grey.jpg"].default,
      },
      {
        name: "Molise",
        src: molise["Molise venice_high_gloss_light_grey.png"].default,
      },
      {
        name: "Palermo",
        src: palermo["Palermo High Gloss Light Grey.jpg"].default,
      },
      {
        name: "Pisa",
        src: pisa["Pisa High Gloss Light Grey.jpg"].default,
      },
      {
        name: "Richmond",
        src: richmond["Richmond High Gloss Light Grey.jpg"].default,
      },
      {
        name: "Tuscany",
        src: tuscany["Tuscany High Gloss Light Grey.jpg"].default,
      },
      {
        name: "Venice",
        src: venice["Venice High Gloss Light Grey.jpg"].default,
      },
      {
        name: "Verona",
        src: verona["Verona High Gloss Light Grey.jpg"].default,
      },
      {
        name: "York",
        src: york["York High Gloss Light Grey.jpg"].default,
      },
    ],
  },
  {
    name: "High Gloss Dust Grey",
    images: [
      {
        name: "Ashford",
        src: ashford["ashford-high-gloss-dust-grey.jpg"].default,
      },
      {
        name: "Cambridge",
        src: cambridge["Cambridge High Gloss Dust Grey.jpg"].default,
      },
      {
        name: "Canterbury",
        src: canterbury["Canterbury High Gloss Dust Grey.jpg"].default,
      },
      {
        name: "Lazio",
        src: lazio["Lazio High Gloss Dust Grey.jpg"].default,
      },
      {
        name: "Lincoln",
        src: lincoln["Lincoln High Gloss Dust Grey.jpg"].default,
      },
      {
        name: "Milano",
        src: milano["Milano High Gloss Dust Greyjpg.jpg"].default,
      },
      {
        name: "Molise",
        src: molise["Molise venice_high_gloss_dust_grey.png"].default,
      },
      {
        name: "Palermo",
        src: palermo["Palermo High Gloss Dust Grey.jpg"].default,
      },
      {
        name: "Pisa",
        src: pisa["Pisa High Gloss Dust Greypg.jpg"].default,
      },
      {
        name: "Richmond",
        src: richmond["Richmond High Gloss Dust Grey.jpg"].default,
      },
      {
        name: "Tuscany",
        src: tuscany["Tuscany High Gloss Dust Grey.jpg"].default,
      },
      {
        name: "Venice",
        src: venice["Venice High Gloss Dust Grey.jpg"].default,
      },
      {
        name: "Verona",
        src: verona["Verona High Gloss Dust Grey.jpg"].default,
      },
      {
        name: "York",
        src: york["York High Gloss Dust Grey.jpg"].default,
      },
    ],
  },
  {
    name: "High Gloss Cashmere",
    images: [
      {
        name: "Ashford",
        src: ashford["ashford-high-gloss-cashmere.png"].default,
      },
      {
        name: "Cambridge",
        src: cambridge["cambridge high_gloss_cashmere.png"].default,
      },
      {
        name: "Canterbury",
        src: canterbury["canterbury high gloss cashmere.png"].default,
      },
      {
        name: "Lazio",
        src: lazio["Lazio high_gloss_cashmere.png"].default,
      },
      {
        name: "Lincoln",
        src: lincoln["lincoln high gloss cashmere.png"].default,
      },
      {
        name: "Milano",
        src: milano["Milano High Gloss Cashmere.png"].default,
      },
      {
        name: "Molise",
        src: molise["Molise venice_high_gloss_cashmere.png"].default,
      },
      {
        name: "Palermo",
        src: palermo["palermo high gloss cashmere.png"].default,
      },
      {
        name: "Pisa",
        src: pisa["pisa high gloss cashmere.png"].default,
      },
      {
        name: "Richmond",
        src: richmond["richmond high gloss cashmere.png"].default,
      },
      {
        name: "Tuscany",
        src: tuscany["tuscany high gloss cashmere.png"].default,
      },
      {
        name: "Venice",
        src: venice["venice high gloss cashmere.png"].default,
      },
      {
        name: "Verona",
        src: verona["verona high gloss cashmere.png"].default,
      },
      {
        name: "York",
        src: york["york high gloss cashmere.png"].default,
      },
    ],
  },
  {
    name: "Porcelain White",
    images: [
      {
        name: "Aldridge",
        src: aldridge["aldridge-porcelain-white.jpg"].default,
      },
      {
        name: "Ashford",
        src: ashford["ashford-porcelain.jpg"].default,
      },
      {
        name: "Broadway",
        src: broadway["broadway-porcelain.jpg"].default,
      },
      {
        name: "Cambridge",
        src: cambridge["Cambridge Porcelain.jpg"].default,
      },
      {
        name: "Canterbury",
        src: canterbury["Canterbury Porcelain.jpg"].default,
      },
      {
        name: "Elland",
        src: elland["Elland Porcelain White.jpg"].default,
      },
      {
        name: "Euroline",
        src: euroline["Euroline Porcelain white.jpg"].default,
      },
      {
        name: "Gothic",
        src: gothic["Gothic Porcelain.jpg"].default,
      },
      {
        name: "Integra",
        src: integra["Integra Porcelain-White.jpg"].default,
      },
      {
        name: "Knebworth",
        src: knebworth["Knebworth Porcelain.jpg"].default,
      },
      {
        name: "Lazio",
        src: lazio["Lazio porcelain-white.jpg"].default,
      },
      {
        name: "Lincoln",
        src: lincoln["Lincoln Porcelain.jpg"].default,
      },
      {
        name: "Milano",
        src: milano["Milano Porcelain.jpg"].default,
      },
      {
        name: "Molise",
        src: molise["Molise venice_porcelain_white.png"].default,
      },
      {
        name: "Newport",
        src: newport["Newport Porcelain.jpg"].default,
      },
      {
        name: "Oxford",
        src: oxford["Oxford Porcelain.jpg"].default,
      },
      {
        name: "Palermo",
        src: palermo["Palermo Porcelain.jpg"].default,
      },
      {
        name: "Pisa",
        src: pisa["Pisa Porcelain.jpg"].default,
      },
      {
        name: "Richmond",
        src: richmond["Richmond Porcelain White.jpg"].default,
      },
      {
        name: "Segreto",
        src: segreto["segreto porcelain white.png"].default,
      },
      {
        name: "Shaker",
        src: shaker["Shaker Porcelain.jpg"].default,
      },
      {
        name: "Surrey",
        src: surrey["Surrey Porcelian.jpg"].default,
      },
      {
        name: "Tullymore",
        src: tullymore["TULLYMORE Porcelain.jpg"].default,
      },
      {
        name: "Tuscany",
        src: tuscany["Tuscany Porcelain.jpg"].default,
      },
      {
        name: "Venice",
        src: venice["Venice Porcelain.jpg"].default,
      },
      {
        name: "Verona",
        src: verona["Verona Porcelain.jpg"].default,
      },
      {
        name: "Warwick",
        src: warwick["Warwick Porcelain.jpg"].default,
      },
      {
        name: "Westbury",
        src: westbury["Westbury Porcelain.jpg"].default,
      },
      {
        name: "York",
        src: york["York Porcelain.jpg"].default,
      },
    ],
  },
  {
    name: "Satin White",
    images: [
      {
        name: "Aldridge",
        src: aldridge["aldridge-satin-white.jpg"].default,
      },
      {
        name: "Ashford",
        src: ashford["ashford-satin-white.jpg"].default,
      },
      {
        name: "Broadway",
        src: broadway["broadway-satin-white.jpg"].default,
      },
      {
        name: "Cambridge",
        src: cambridge["cambridge satin-white.jpg"].default,
      },
      {
        name: "Canterbury",
        src: canterbury["canterbury satin-white.jpg"].default,
      },
      {
        name: "Elland",
        src: elland["Elland Satin White.jpg"].default,
      },
      {
        name: "Euroline",
        src: euroline["Euroline Satin white.jpg"].default,
      },
      {
        name: "Gothic",
        src: gothic["gothic satin-white.jpg"].default,
      },
      {
        name: "Integra",
        src: integra["Integra Satin-White.jpg"].default,
      },
      {
        name: "Knebworth",
        src: knebworth["Knebworth Satin White.jpg"].default,
      },
      {
        name: "Lazio",
        src: lazio["Lazio satin-white.jpg"].default,
      },
      {
        name: "Lincoln",
        src: lincoln["Lincoln satin-white.jpg"].default,
      },
      {
        name: "Milano",
        src: milano["milano satin-white.jpg"].default,
      },
      {
        name: "Molise",
        src: molise["Molise venice_satin_white.png"].default,
      },
      {
        name: "Newport",
        src: newport["newport satin-white.jpg"].default,
      },
      {
        name: "Palermo",
        src: palermo["palermo satin-white.jpg"].default,
      },
      {
        name: "Pisa",
        src: pisa["pisa satin-white.jpg"].default,
      },
      {
        name: "Richmond",
        src: richmond["Richmond Satin White.jpg"].default,
      },
      {
        name: "Segreto",
        src: segreto["segreto satin white.png"].default,
      },
      {
        name: "Shaker",
        src: shaker["shaker satin white.jpg"].default,
      },
      {
        name: "Surrey",
        src: surrey["surrey satin white.jpg"].default,
      },
      {
        name: "Tullymore",
        src: tullymore["TULLYMORE Satin White.jpg"].default,
      },
      {
        name: "Tuscany",
        src: tuscany["tuscany satin white.jpg"].default,
      },
      {
        name: "Venice",
        src: venice["venice satin white.jpg"].default,
      },
      {
        name: "Verona",
        src: verona["verona satin white.jpg"].default,
      },
      {
        name: "Warwick",
        src: warwick["warwick satin white.jpg"].default,
      },
      {
        name: "Westbury",
        src: westbury["westbury satin white.jpg"].default,
      },
      {
        name: "York",
        src: york["york satin white.jpg"].default,
      },
    ],
  },
  {
    name: "Super White Ash",
    images: [
      {
        name: "Aldridge",
        src: aldridge["aldridge-super-white-ash.png"].default,
      },
      {
        name: "Ashford",
        src: ashford["ashford-super-white-ash.png"].default,
      },
      {
        name: "Broadway",
        src: broadway["broadway-super-white-ash.png"].default,
      },
      {
        name: "Cambridge",
        src: cambridge["Cambridge Super White Ash.png"].default,
      },
      {
        name: "Canterbury",
        src: canterbury["Canterbury Super White Ash.png"].default,
      },
      {
        name: "Elland",
        src: elland["Elland Super White Ash.png"].default,
      },
      {
        name: "Gothic",
        src: gothic["Gothic Super White_Ash.png"].default,
      },
      {
        name: "Integra",
        src: integra["Integra Super White Ash.png"].default,
      },
      {
        name: "Knebworth",
        src: knebworth["Knebworth Super White Ash.png"].default,
      },
      {
        name: "Lazio",
        src: lazio["Lazio Super White Ash.png"].default,
      },
      {
        name: "Lincoln",
        src: lincoln["Lincoln Super White Ash.png"].default,
      },
      {
        name: "Milano",
        src: milano["Milano Super White Ash.png"].default,
      },
      {
        name: "Molise",
        src: molise["Molise venice_super_white_ash.png"].default,
      },
      {
        name: "Newport",
        src: newport["Newport Super White Ash.png"].default,
      },
      {
        name: "Oxford",
        src: oxford["Oxford Super White Ash.png"].default,
      },
      {
        name: "Palermo",
        src: palermo["Palermo Super White Ash.png"].default,
      },
      {
        name: "Pisa",
        src: pisa["Pisa Super White Ash.png"].default,
      },
      {
        name: "Richmond",
        src: richmond["Richmond Super White Ash.png"].default,
      },
      {
        name: "Segreto",
        src: segreto["Segreto Super White Ash.png"].default,
      },
      {
        name: "Shaker",
        src: shaker["Shaker Super White Ash.png"].default,
      },
      {
        name: "Surrey",
        src: surrey["Surrey Super White Ash.png"].default,
      },
      {
        name: "Tullymore",
        src: tullymore["Tullymore Super White Ash.png"].default,
      },
      {
        name: "Tuscany",
        src: tuscany["Tuscany Super White Ash.png"].default,
      },
      {
        name: "Venice",
        src: venice["Venice Super White Ash.png"].default,
      },
      {
        name: "Verona",
        src: verona["Verona Super White Ash.png"].default,
      },
      {
        name: "Warwick",
        src: warwick["Warwick Super White Ash.png"].default,
      },
      {
        name: "Westbury",
        src: westbury["Westbury Super White Ash.png"].default,
      },
      {
        name: "York",
        src: york["York Super White Ash.png"].default,
      },
    ],
  },
  {
    name: "Alabaster",
    images: [
      {
        name: "Aldridge",
        src: aldridge["aldridge-alabaster.jpg"].default,
      },
      {
        name: "Ashford",
        src: ashford["ashford-alabaster.jpg"].default,
      },
      {
        name: "Broadway",
        src: broadway["broadway-alabaster.jpg"].default,
      },
      {
        name: "Cambridge",
        src: cambridge["cambridge alabaster.jpg"].default,
      },
      {
        name: "Canterbury",
        src: canterbury["canterbury alabaster.jpg"].default,
      },
      {
        name: "Elland",
        src: elland["Elland Alabaster.jpg"].default,
      },
      {
        name: "Euroline",
        src: euroline["euroline alabaster.jpg"].default,
      },
      {
        name: "Gothic",
        src: gothic["gothic Alabaster.jpg"].default,
      },
      {
        name: "Integra",
        src: integra["Integra Alabaster.jpg"].default,
      },
      {
        name: "Knebworth",
        src: knebworth["Knebworth Alabaster.jpg"].default,
      },
      {
        name: "Lazio",
        src: lazio["Lazio alabaster.jpg"].default,
      },
      {
        name: "Lincoln",
        src: lincoln["lincoln alabaster.jpg"].default,
      },
      {
        name: "Milano",
        src: milano["milano alabaster.jpg"].default,
      },
      {
        name: "Molise",
        src: molise["Molise venice_alabaster.png"].default,
      },
      {
        name: "Newport",
        src: newport["newport alabaster.jpg"].default,
      },
      {
        name: "Oxford",
        src: oxford["oxford alabaster.jpg"].default,
      },
      {
        name: "Palermo",
        src: palermo["palermo alabaster.jpg"].default,
      },
      {
        name: "Pisa",
        src: pisa["pisa alabaster.jpg"].default,
      },
      {
        name: "Richmond",
        src: richmond["Richmond Alabaster.jpg"].default,
      },
      {
        name: "Segreto",
        src: segreto["segreto alabaster.png"].default,
      },
      {
        name: "Shaker",
        src: shaker["shaker alabaster.jpg"].default,
      },
      {
        name: "Surrey",
        src: surrey["surrey alabaster.jpg"].default,
      },
      {
        name: "Tullymore",
        src: tullymore["TULLYMORE Alabaster.jpg"].default,
      },
      {
        name: "Tuscany",
        src: tuscany["tuscany alabaster.jpg"].default,
      },
      {
        name: "Venice",
        src: venice["venice alabaster.jpg"].default,
      },
      {
        name: "Verona",
        src: verona["verona alabaster.jpg"].default,
      },
      {
        name: "Warwick",
        src: warwick["warwick alabaster.jpg"].default,
      },
      {
        name: "Westbury",
        src: westbury["westbury alabaster.jpg"].default,
      },
      {
        name: "York",
        src: york["york alabaster.jpg"].default,
      },
    ],
  },
  {
    name: "Ivory",
    images: [
      {
        name: "Aldridge",
        src: aldridge["aldridge-ivory.jpg"].default,
      },
      {
        name: "Ashford",
        src: ashford["ashford-ivory.jpg"].default,
      },
      {
        name: "Broadway",
        src: broadway["broadway-ivory.jpg"].default,
      },
      {
        name: "Cambridge",
        src: cambridge["cambridge Ivory.jpg"].default,
      },
      {
        name: "Canterbury",
        src: canterbury["canterbury ivory.jpg"].default,
      },
      {
        name: "Elland",
        src: elland["Elland Ivory.jpg"].default,
      },
      {
        name: "Euroline",
        src: euroline["euroline Ivory.jpg"].default,
      },
      {
        name: "Gothic",
        src: gothic["gothic Ivory.jpg"].default,
      },
      {
        name: "Integra",
        src: integra["Integra Ivory.jpg"].default,
      },
      {
        name: "Knebworth",
        src: knebworth["Knebworth Ivory.jpg"].default,
      },
      {
        name: "Lazio",
        src: lazio["Lazio ivory.jpg"].default,
      },
      {
        name: "Lincoln",
        src: lincoln["Lincoln Ivory.jpg"].default,
      },
      {
        name: "Milano",
        src: milano["milano ivory.jpg"].default,
      },
      {
        name: "Molise",
        src: molise["Molise venice_ivory.png"].default,
      },
      {
        name: "Newport",
        src: newport["newport ivory.jpg"].default,
      },
      {
        name: "Oxford",
        src: oxford["oxford ivory.jpg"].default,
      },
      {
        name: "Palermo",
        src: palermo["palermo ivory.jpg"].default,
      },
      {
        name: "Pisa",
        src: pisa["pisa ivory.jpg"].default,
      },
      {
        name: "Richmond",
        src: richmond["Richmond Ivory.jpg"].default,
      },
      {
        name: "Segreto",
        src: segreto["segreto ivory.png"].default,
      },
      {
        name: "Shaker",
        src: shaker["shaker ivory.jpg"].default,
      },
      {
        name: "Surrey",
        src: surrey["surrey ivory.jpg"].default,
      },
      {
        name: "Tullymore",
        src: tullymore["TULLYMORE Ivory.jpg"].default,
      },
      {
        name: "Tuscany",
        src: tuscany["tuscany ivory.jpg"].default,
      },
      {
        name: "Venice",
        src: venice["venice ivory.jpg"].default,
      },
      {
        name: "Verona",
        src: verona["verona ivory.jpg"].default,
      },
      {
        name: "Warwick",
        src: warwick["warwick ivory.jpg"].default,
      },
      {
        name: "Westbury",
        src: westbury["westbury Ivory.jpg"].default,
      },
      {
        name: "York",
        src: york["york ivory.jpg"].default,
      },
    ],
  },
  {
    name: "Vanilla",
    images: [
      {
        name: "Ashford",
        src: ashford["ashford-vanilla.jpg"].default,
      },
      {
        name: "Broadway",
        src: broadway["broadway-vanilla.jpg"].default,
      },
      {
        name: "Cambridge",
        src: cambridge["cambridge vanilla.jpg"].default,
      },
      {
        name: "Canterbury",
        src: canterbury["canterbury vanilla.jpg"].default,
      },
      {
        name: "Elland",
        src: elland["Elland Vanilla.jpg"].default,
      },
      {
        name: "Euroline",
        src: euroline["Euroline vanilla.jpg"].default,
      },
      {
        name: "Gothic",
        src: gothic["gothic vanilla.jpg"].default,
      },
      {
        name: "Integra",
        src: integra["Integra Vanilla.jpg"].default,
      },
      {
        name: "Knebworth",
        src: knebworth["Knebworth Vanilla.jpg"].default,
      },
      {
        name: "Lazio",
        src: lazio["Lazio vanilla.jpg"].default,
      },
      {
        name: "Lincoln",
        src: lincoln["Lincoln vanilla.jpg"].default,
      },
      {
        name: "Milano",
        src: milano["milano vanilla.jpg"].default,
      },
      {
        name: "Molise",
        src: molise["Molise venice_vanilla.png"].default,
      },
      {
        name: "Newport",
        src: newport["newport vanilla.jpg"].default,
      },
      {
        name: "Oxford",
        src: oxford["oxford vanilla.jpg"].default,
      },
      {
        name: "Palermo",
        src: palermo["palermo vanilla.jpg"].default,
      },
      {
        name: "Pisa",
        src: pisa["Pisa Vanilla.jpg"].default,
      },
      {
        name: "Richmond",
        src: richmond["Richmond Vanilla.jpg"].default,
      },
      {
        name: "Segreto",
        src: segreto["segreto vanilla.png"].default,
      },
      {
        name: "Shaker",
        src: shaker["shaker vanilla.jpg"].default,
      },
      {
        name: "Surrey",
        src: surrey["surrey vanilla.jpg"].default,
      },
      {
        name: "Tullymore",
        src: tullymore["TULLYMORE Vanilla.jpg"].default,
      },
      {
        name: "Tuscany",
        src: tuscany["tuscany vanilla.jpg"].default,
      },
      {
        name: "Venice",
        src: venice["venice vanilla.jpg"].default,
      },
      {
        name: "Verona",
        src: verona["verona vanilla.jpg"].default,
      },
      {
        name: "Warwick",
        src: warwick["warwick vanilla.jpg"].default,
      },
      {
        name: "Westbury",
        src: westbury["westbury vanilla.jpg"].default,
      },
      {
        name: "York",
        src: york["york vanilla.jpg"].default,
      },
    ],
  },
  {
    name: "Opengrain White",
    images: [
      {
        name: "Aldridge",
        src: aldridge["aldridge-opengrain-white.png"].default,
      },
      {
        name: "Ashford",
        src: ashford["ashford-opengrain-white.png"].default,
      },
      {
        name: "Broadway",
        src: broadway["broadway-opengrain-white.png"].default,
      },
      {
        name: "Cambridge",
        src: cambridge["Cambridge Opengrain White.png"].default,
      },
      {
        name: "Canterbury",
        src: canterbury["Canterbury Opengrain White.png"].default,
      },
      {
        name: "Elland",
        src: elland["Elland Opengrain White.png"].default,
      },
      {
        name: "Euroline",
        src: euroline["Euroline Opengrain White.png"].default,
      },
      {
        name: "Gothic",
        src: gothic["Gothic Opengrain White.png"].default,
      },
      {
        name: "Integra",
        src: integra["Integra Opengrain White.png"].default,
      },
      {
        name: "Knebworth",
        src: knebworth["Knebworth Opengrain White.png"].default,
      },
      {
        name: "Lazio",
        src: lazio["Lazio Opengrain White.png"].default,
      },
      {
        name: "Lincoln",
        src: lincoln["Lincoln Opengrain White.png"].default,
      },
      {
        name: "Milano",
        src: milano["Milano Opengrain White.png"].default,
      },
      {
        name: "Molise",
        src: molise["Molise venice_opengrain_white.png"].default,
      },
      {
        name: "Newport",
        src: newport["Newport Opengrain White.png"].default,
      },
      {
        name: "Oxford",
        src: oxford["Oxford Opengrain White.png"].default,
      },
      {
        name: "Palermo",
        src: palermo["Palermo Opengrain White.png"].default,
      },
      {
        name: "Pisa",
        src: pisa["Pisa Opengrain White.png"].default,
      },
      {
        name: "Richmond",
        src: richmond["Richmond Opengrain White.png"].default,
      },
      {
        name: "Segreto",
        src: segreto["Segreto Opengrain White.png"].default,
      },
      {
        name: "Shaker",
        src: shaker["Shaker Opengrain White.png"].default,
      },
      {
        name: "Surrey",
        src: surrey["Surrey Opengrain White.png"].default,
      },
      {
        name: "Tullymore",
        src: tullymore["Tullymore Opengrain White.png"].default,
      },
      {
        name: "Tuscany",
        src: tuscany["Tuscany Opengrain White.png"].default,
      },
      {
        name: "Venice",
        src: venice["Venice Opengrain White.png"].default,
      },
      {
        name: "Verona",
        src: verona["Verona Opengrain White.png"].default,
      },
      {
        name: "Warwick",
        src: warwick["Warwick Opengrain White.png"].default,
      },
      {
        name: "Westbury",
        src: westbury["Westbury Opengrain White.png"].default,
      },
      {
        name: "York",
        src: york["York Opengrain White.png"].default,
      },
    ],
  },
  {
    name: "Oakgrain Cream",
    images: [
      {
        name: "Ashford",
        src: ashford["ashford-oakgrain-cream.png"].default,
      },
      {
        name: "Broadway",
        src: broadway["broadway-oakgrain-cream.png"].default,
      },
      {
        name: "Cambridge",
        src: cambridge["Cambridge Oakgrain Cream.png"].default,
      },
      {
        name: "Canterbury",
        src: canterbury["Canterbury Oakgrain Cream.png"].default,
      },
      {
        name: "Elland",
        src: elland["Elland Oakgrain Cream.png"].default,
      },
      {
        name: "Euroline",
        src: euroline["Euroline Oakgrain Cream.png"].default,
      },
      {
        name: "Gothic",
        src: gothic["Gothic Oakgrain Cream.png"].default,
      },
      {
        name: "Integra",
        src: integra["Integra Oakgrain Cream.png"].default,
      },
      {
        name: "Knebworth",
        src: knebworth["Knebworth Oakgrain Cream.png"].default,
      },
      {
        name: "Lazio",
        src: lazio["Lazio Oakgrain Cream.png"].default,
      },
      {
        name: "Lincoln",
        src: lincoln["Lincoln Oakgrain Cream.png"].default,
      },
      {
        name: "Milano",
        src: milano["Milano Oakgrain Cream.png"].default,
      },
      {
        name: "Molise",
        src: molise["Molise venice_oakgrain_cream.png"].default,
      },
      {
        name: "Newport",
        src: newport["Newport Oakgrain Cream.png"].default,
      },
      {
        name: "Oxford",
        src: oxford["Oxford Oakgrain Cream.png"].default,
      },
      {
        name: "Palermo",
        src: palermo["Palermo Oakgrain Cream.png"].default,
      },
      {
        name: "Pisa",
        src: pisa["Pisa Oakgrain Cream.png"].default,
      },
      {
        name: "Richmond",
        src: richmond["Richmond Oakgrain Cream.png"].default,
      },
      {
        name: "Segreto",
        src: segreto["Segreto Oakgrain Cream.png"].default,
      },
      {
        name: "Shaker",
        src: shaker["Shaker Oakgrain Cream.png"].default,
      },
      {
        name: "Surrey",
        src: surrey["Surrey Oakgrain Cream.png"].default,
      },
      {
        name: "Tullymore",
        src: tullymore["Tullymore Oakgrain Cream.png"].default,
      },
      {
        name: "Tuscany",
        src: tuscany["Tuscany Oakgrain Cream.png"].default,
      },
      {
        name: "Venice",
        src: venice["Venice Oakgrain Cream.png"].default,
      },
      {
        name: "Verona",
        src: verona["Verona Oakgrain Cream.png"].default,
      },
      {
        name: "Warwick",
        src: warwick["Warwick Oakgrain Cream.png"].default,
      },
      {
        name: "Westbury",
        src: westbury["Westbury Oakgrain Cream.png"].default,
      },
      {
        name: "York",
        src: york["York Oakgrain Cream.png"].default,
      },
    ],
  },
  {
    name: "Oakgrain Mussel",
    images: [
      {
        name: "Aldridge",
        src: aldridge["aldridge-oakgrain-mussel.png"].default,
      },
      {
        name: "Ashford",
        src: ashford["ashford-oakgrain-mussel.png"].default,
      },
      {
        name: "Broadway",
        src: broadway["broadway-oakgrain-mussel.png"].default,
      },
      {
        name: "Cambridge",
        src: cambridge["Cambridge Oakgrain Mussel.png"].default,
      },
      {
        name: "Canterbury",
        src: canterbury["Canterbury Oakgrain Mussel.png"].default,
      },
      {
        name: "Elland",
        src: elland["Elland Oakgrain Mussel.png"].default,
      },
      {
        name: "Euroline",
        src: euroline["Euroline Oakgrain Mussel.png"].default,
      },
      {
        name: "Gothic",
        src: gothic["Gothic Oakgrain Mussel.png"].default,
      },
      {
        name: "Integra",
        src: integra["Integra Oakgrain Mussel.png"].default,
      },
      {
        name: "Knebworth",
        src: knebworth["Knebworth Oakgrain Mussel.png"].default,
      },
      {
        name: "Lazio",
        src: lazio["Lazio Oakgrain Mussel.png"].default,
      },
      {
        name: "Lincoln",
        src: lincoln["Lincoln Oakgrain Mussel.png"].default,
      },
      {
        name: "Milano",
        src: milano["Milano Oakgrain Mussel.png"].default,
      },
      {
        name: "Molise",
        src: molise["Molise venice_oakgrain_mussel.png"].default,
      },
      {
        name: "Newport",
        src: newport["Newport Oakgrain Mussel.png"].default,
      },
      {
        name: "Oxford",
        src: oxford["Oxford Oakgrain Mussel.png"].default,
      },
      {
        name: "Palermo",
        src: palermo["Palermo Oakgrain Mussel.png"].default,
      },
      {
        name: "Pisa",
        src: pisa["Pisa Oakgrain Mussel.png"].default,
      },
      {
        name: "Richmond",
        src: richmond["Richmond Oakgrain Mussel.png"].default,
      },
      {
        name: "Segreto",
        src: segreto["Segreto Oakgrain Mussel.png"].default,
      },
      {
        name: "Shaker",
        src: shaker["Shaker Oakgrain Mussel.png"].default,
      },
      {
        name: "Surrey",
        src: surrey["Surrey Oakgrain Mussel.png"].default,
      },
      {
        name: "Tullymore",
        src: tullymore["Tullymore Oakgrain Mussel.png"].default,
      },
      {
        name: "Tuscany",
        src: tuscany["Tuscany Oakgrain Mussel.png"].default,
      },
      {
        name: "Venice",
        src: venice["Venice Oakgrain Mussel.png"].default,
      },
      {
        name: "Verona",
        src: verona["Verona Oakgrain Mussel.png"].default,
      },
      {
        name: "Warwick",
        src: warwick["Warwick Oakgrain Mussel.png"].default,
      },
      {
        name: "Westbury",
        src: westbury["Westbury Oakgrain Mussel.png"].default,
      },
      {
        name: "York",
        src: york["York Oakgrain Mussel.png"].default,
      },
    ],
  },
  {
    name: "Oakgrain Cashmere",
    images: [
      {
        name: "Aldridge",
        src: aldridge["aldridge-oakgrain-cashmere.png"].default,
      },
      {
        name: "Ashford",
        src: ashford["ashford-oakgrain-cashmere.png"].default,
      },
      {
        name: "Broadway",
        src: broadway["broadway-oakgrain-cashmere.png"].default,
      },
      {
        name: "Cambridge",
        src: cambridge["Cambridge Oakgrain Cashmere.png"].default,
      },
      {
        name: "Canterbury",
        src: canterbury["Canterbury Oakgrain Cashmere.png"].default,
      },
      {
        name: "Euroline",
        src: euroline["Euroline Oakgrain Cashmere.png"].default,
      },
      {
        name: "Gothic",
        src: gothic["Gothic Oakgrain Cashmere.png"].default,
      },
      {
        name: "Integra",
        src: integra["Integra Oakgrain Cashmere.png"].default,
      },
      {
        name: "Knebworth",
        src: knebworth["Knebworth Oakgrain Cashmere.png"].default,
      },
      {
        name: "Lazio",
        src: lazio["Lazio Oakgrain Cashmere.png"].default,
      },
      {
        name: "Lincoln",
        src: lincoln["Lincoln Oakgrain Cashmere.png"].default,
      },
      {
        name: "Milano",
        src: milano["Milano Oakgrain Cashmere.png"].default,
      },
      {
        name: "Molise",
        src: molise["Molise venice_oakgrain_cashmere.png"].default,
      },
      {
        name: "Newport",
        src: newport["Newport Oakgrain Cashmere.png"].default,
      },
      {
        name: "Oxford",
        src: oxford["Oxford Oakgrain Cashmere.png"].default,
      },
      {
        name: "Palermo",
        src: palermo["Palermo Oakgrain Cashmere.png"].default,
      },
      {
        name: "Pisa",
        src: pisa["Pisa Oakgrain Cashmere.png"].default,
      },
      {
        name: "Richmond",
        src: richmond["Richmond Oakgrain Cashmere.png"].default,
      },
      {
        name: "Segreto",
        src: segreto["Segreto Oakgrain Cashmere.png"].default,
      },
      {
        name: "Shaker",
        src: shaker["Shaker Oakgrain Cashmere.png"].default,
      },
      {
        name: "Surrey",
        src: surrey["Surrey Oakgrain Cashmere.png"].default,
      },
      {
        name: "Tullymore",
        src: tullymore["Tullymore Oakgrain Cashmere.png"].default,
      },
      {
        name: "Tuscany",
        src: tuscany["Tuscany Oakgrain Cashmere.png"].default,
      },
      {
        name: "Venice",
        src: venice["Venice Oakgrain Cashmere.png"].default,
      },
      {
        name: "Verona",
        src: verona["Verona Oakgrain Cashmere.png"].default,
      },
      {
        name: "Warwick",
        src: warwick["Warwick Oakgrain Cashmere.png"].default,
      },
      {
        name: "Westbury",
        src: westbury["Westbury Oakgrain Cashmere.png"].default,
      },
      {
        name: "York",
        src: york["York Oakgrain Cashmere.png"].default,
      },
    ],
  },
  {
    name: "Oakgrain Grey",
    images: [
      {
        name: "Aldridge",
        src: aldridge["aldridge-oakgrain-grey.png"].default,
      },
      {
        name: "Ashford",
        src: ashford["ashford-oakgrain-grey.png"].default,
      },
      {
        name: "Broadway",
        src: broadway["broadway-oakgrain-grey.png"].default,
      },
      {
        name: "Cambridge",
        src: cambridge["Cambridge Oakgrain Grey.png"].default,
      },
      {
        name: "Canterbury",
        src: canterbury["Canterbury Oakgrain Grey.png"].default,
      },
      {
        name: "Elland",
        src: elland["Elland Oakgrain Grey.png"].default,
      },
      {
        name: "Euroline",
        src: euroline["Euroline Oakgrain Grey.png"].default,
      },
      {
        name: "Gothic",
        src: gothic["Gothic Oakgrain Grey.png"].default,
      },
      {
        name: "Integra",
        src: integra["Integra Oakgrain Grey.png"].default,
      },
      {
        name: "Knebworth",
        src: knebworth["Knebworth Oakgrain Grey.png"].default,
      },
      {
        name: "Lazio",
        src: lazio["Lazio Oakgrain Grey.png"].default,
      },
      {
        name: "Lincoln",
        src: lincoln["Lincoln Oakgrain Grey.png"].default,
      },
      {
        name: "Milano",
        src: milano["Milano Oakgrain Grey.png"].default,
      },
      {
        name: "Molise",
        src: molise["Molise venice_oakgrain_grey.png"].default,
      },
      {
        name: "Newport",
        src: newport["Newport Oakgrain Grey.png"].default,
      },
      {
        name: "Oxford",
        src: oxford["Oxford Oakgrain Grey.png"].default,
      },
      {
        name: "Palermo",
        src: palermo["Palermo Oakgrain Grey.png"].default,
      },
      {
        name: "Pisa",
        src: pisa["Pisa Oakgrain Grey.png"].default,
      },
      {
        name: "Richmond",
        src: richmond["Richmond Oakgrain Grey.png"].default,
      },
      {
        name: "Segreto",
        src: segreto["Segreto Oakgrain Grey.png"].default,
      },
      {
        name: "Shaker",
        src: shaker["Shaker Oakgrain Grey.png"].default,
      },
      {
        name: "Surrey",
        src: surrey["Surrey Oakgrain Grey.png"].default,
      },
      {
        name: "Tullymore",
        src: tullymore["Tullymore Oakgrain Grey.png"].default,
      },
      {
        name: "Tuscany",
        src: tuscany["Tuscany Oakgrain Grey.png"].default,
      },
      {
        name: "Venice",
        src: venice["Venice Oakgrain Grey.png"].default,
      },
      {
        name: "Verona",
        src: verona["Verona Oakgrain Grey.png"].default,
      },
      {
        name: "Warwick",
        src: warwick["Warwick Oakgrain Grey.png"].default,
      },
      {
        name: "Westbury",
        src: westbury["Westbury Oakgrain Grey.png"].default,
      },
      {
        name: "York",
        src: york["York Oakgrain Grey.png"].default,
      },
    ],
  },
  {
    name: "Matt Mussel",
    images: [
      {
        name: "Aldridge",
        src: aldridge["aldridge-matt-mussel.jpg"].default,
      },
      {
        name: "Ashford",
        src: ashford["ashford-matt-mussel.jpg"].default,
      },
      {
        name: "Broadway",
        src: broadway["broadway-matt-mussel.jpg"].default,
      },
      {
        name: "Cambridge",
        src: cambridge["Cambridge Matt Mussel.jpg"].default,
      },
      {
        name: "Canterbury",
        src: canterbury["Canterbury Matt Mussel.jpg"].default,
      },
      {
        name: "Elland",
        src: elland["Elland Matt Mussel.jpg"].default,
      },
      {
        name: "Euroline",
        src: euroline["Euroline Matt Mussel.jpg"].default,
      },
      {
        name: "Gothic",
        src: gothic["Gothic Matt Mussel.jpg"].default,
      },
      {
        name: "Integra",
        src: integra["Integra Matt-Mussel.jpg"].default,
      },
      {
        name: "Knebworth",
        src: knebworth["Knebworth Matt Mussel.jpg"].default,
      },
      {
        name: "Lazio",
        src: lazio["Lazio matt-mussel.jpg"].default,
      },
      {
        name: "Lincoln",
        src: lincoln["Lincoln Matt Mussel.jpg"].default,
      },
      {
        name: "Milano",
        src: milano["Milano Matt Mussel.jpg"].default,
      },
      {
        name: "Molise",
        src: molise["Molise venice_matt_mussel.png"].default,
      },
      {
        name: "Newport",
        src: newport["Newport Matt Mussel.jpg"].default,
      },
      {
        name: "Oxford",
        src: oxford["Oxford Matt Mussel.jpg"].default,
      },
      {
        name: "Palermo",
        src: palermo["Palermo Matt Mussel.jpg"].default,
      },
      {
        name: "Pisa",
        src: pisa["Pisa Matt Mussel.jpg"].default,
      },
      {
        name: "Richmond",
        src: richmond["Richmond Matt Mussel.jpg"].default,
      },
      {
        name: "Segreto",
        src: segreto["segreto matt mussel.png"].default,
      },
      {
        name: "Shaker",
        src: shaker["Shaker Matt Mussel.jpg"].default,
      },
      {
        name: "Surrey",
        src: surrey["Surrey Matt Mussel.jpg"].default,
      },
      {
        name: "Tullymore",
        src: tullymore["TULLYMORE Matt Mussel.jpg"].default,
      },
      {
        name: "Tuscany",
        src: tuscany["Tuscany Matt Mussel.jpg"].default,
      },
      {
        name: "Venice",
        src: venice["Venice Matt Mussel.jpg"].default,
      },
      {
        name: "Verona",
        src: verona["Verona Matt Mussel.jpg"].default,
      },
      {
        name: "Warwick",
        src: warwick["Warwick Matt Mussel.jpg"].default,
      },
      {
        name: "Westbury",
        src: westbury["Westbury Matt Mussel.jpg"].default,
      },
      {
        name: "York",
        src: york["York Matt Mussel.jpg"].default,
      },
    ],
  },
  {
    name: "Matt Pebble",
    images: [
      {
        name: "Aldridge",
        src: aldridge["aldridge-matt-pebble.png"].default,
      },
      {
        name: "Ashford",
        src: ashford["ashford-matt-pebble.png"].default,
      },
      {
        name: "Broadway",
        src: broadway["broadway-matt-pebble.png"].default,
      },
      {
        name: "Cambridge",
        src: cambridge["cambridge matt_pebble.png"].default,
      },
      {
        name: "Canterbury",
        src: canterbury["canterbury matt_pebble.png"].default,
      },
      {
        name: "Elland",
        src: elland["Elland Matt_pebble.png"].default,
      },
      {
        name: "Euroline",
        src: euroline["euroline matt_pebble.png"].default,
      },
      {
        name: "Gothic",
        src: gothic["gothic Matt_pebble.png"].default,
      },
      {
        name: "Integra",
        src: integra["Integra Matt_pebble.png"].default,
      },
      {
        name: "Knebworth",
        src: knebworth["Knebworth matt_pebble.png"].default,
      },
      {
        name: "Lazio",
        src: lazio["Lazio matt_pebble.png"].default,
      },
      {
        name: "Lincoln",
        src: lincoln["lincoln matt pebble.png"].default,
      },
      {
        name: "Milano",
        src: milano["milano matt pebble.png"].default,
      },
      {
        name: "Molise",
        src: molise["Molise venice_matt_pebble.png"].default,
      },
      {
        name: "Newport",
        src: newport["newport matt pebble.png"].default,
      },
      {
        name: "Oxford",
        src: oxford["oxford matt pebble.png"].default,
      },
      {
        name: "Palermo",
        src: palermo["palermo matt pebble.png"].default,
      },
      {
        name: "Pisa",
        src: pisa["pisa matt pebble.png"].default,
      },
      {
        name: "Richmond",
        src: richmond["richmond matt pebble.png"].default,
      },
      {
        name: "Segreto",
        src: segreto["segreto matt pebble.png"].default,
      },
      {
        name: "Shaker",
        src: shaker["shaker matt pebble.png"].default,
      },
      {
        name: "Surrey",
        src: surrey["surrey matt pebble.png"].default,
      },
      {
        name: "Tullymore",
        src: tullymore["tullymore matt pebble.png"].default,
      },
      {
        name: "Tuscany",
        src: tuscany["tuscany matt pebble.png"].default,
      },
      {
        name: "Venice",
        src: venice["venice matt pebble.png"].default,
      },
      {
        name: "Verona",
        src: verona["verona matt pebble.png"].default,
      },
      {
        name: "Warwick",
        src: warwick["warwick matt pebble.png"].default,
      },
      {
        name: "Westbury",
        src: westbury["westbury matt pebble.png"].default,
      },
      {
        name: "York",
        src: york["york matt pebble.png"].default,
      },
    ],
  },
  {
    name: "Matt Cashmere",
    images: [
      {
        name: "Aldridge",
        src: aldridge["aldridge-matt-cashmere.jpg"].default,
      },
      {
        name: "Aldridge",
        src: aldridge["aldridge-matt-cashmere.jpg"].default,
      },
      {
        name: "Broadway",
        src: broadway["broadway-matt-cashmere.jpg"].default,
      },
      {
        name: "Cambridge",
        src: cambridge["Cambridge Matt-Cashmere.jpg"].default,
      },
      {
        name: "Elland",
        src: elland["Elland Matt Cashmere.jpg"].default,
      },
      {
        name: "Euroline",
        src: euroline["Euroline Matt-Cashmere.jpg"].default,
      },
      {
        name: "Gothic",
        src: gothic["Gothic Matt-Cashmere.jpg"].default,
      },
      {
        name: "Integra",
        src: integra["Integra Matt-Cashmere.jpg"].default,
      },
      {
        name: "Knebworth",
        src: knebworth["Knebworth Matt-Cashmere.jpg"].default,
      },
      {
        name: "Lazio",
        src: lazio["Lazio matt-cashmere.jpg"].default,
      },
      {
        name: "Lincoln",
        src: lincoln["Lincoln Matt Cashmere.jpg"].default,
      },
      {
        name: "Milano",
        src: milano["Milano Matt-Cashmere.jpg"].default,
      },
      {
        name: "Molise",
        src: molise["Molise venice_matt_cashmere.png"].default,
      },
      {
        name: "Newport",
        src: newport["Newport Matt-Cashmere.jpg"].default,
      },
      {
        name: "Oxford",
        src: oxford["Oxford Matt-Cashmere.jpg"].default,
      },
      {
        name: "Palermo",
        src: palermo["Palermo Matt-Cashmere.jpg"].default,
      },
      {
        name: "Pisa",
        src: pisa["Pisa Matt-Cashmere.jpg"].default,
      },
      {
        name: "Richmond",
        src: richmond["Richmond Matt Cashmere.jpg"].default,
      },
      {
        name: "Segreto",
        src: segreto["segreto matt cashmere.png"].default,
      },
      {
        name: "Shaker",
        src: shaker["Shaker Matt Cashmere.jpg"].default,
      },
      {
        name: "Surrey",
        src: surrey["Surrey Matt Cashmere.jpg"].default,
      },
      {
        name: "Tullymore",
        src: tullymore["Tullymore Matt Cashmere.jpg"].default,
      },
      {
        name: "Tuscany",
        src: tuscany["Tuscany Matt Cashmere.jpg"].default,
      },
      {
        name: "Venice",
        src: venice["Venice Matt Cashmere.jpg"].default,
      },
      {
        name: "Verona",
        src: verona["Verona Matt Cashmere.jpg"].default,
      },
      {
        name: "Warwick",
        src: warwick["Warwick Matt Cashmere.jpg"].default,
      },
      {
        name: "Westbury",
        src: westbury["Westbury Matt Cashmere.jpg"].default,
      },
      {
        name: "York",
        src: york["York Matt Cashmere.jpg"].default,
      },
    ],
  },
  {
    name: "Matt Dove Grey",
    images: [
      {
        name: "Aldridge",
        src: aldridge["aldridge-matt-dove-grey.jpg"].default,
      },
      {
        name: "Ashford",
        src: ashford["ashford-matt-dove-grey.jpg"].default,
      },
      {
        name: "Broadway",
        src: broadway["broadway-matt-dove-grey.jpg"].default,
      },
      {
        name: "Cambridge",
        src: cambridge["Cambridge Matt-Dove-Grey.jpg"].default,
      },
      {
        name: "Canterbury",
        src: canterbury["Canterbury Matt-Dove-Grey.jpg"].default,
      },
      {
        name: "Elland",
        src: elland["Elland Matt Dove Grey.jpg"].default,
      },
      {
        name: "Euroline",
        src: euroline["Euroline Matt-Dove-Grey.jpg"].default,
      },
      {
        name: "Gothic",
        src: gothic["Gothic Matt-Dove-Grey.jpg"].default,
      },
      {
        name: "Integra",
        src: integra["Integra Matt-Dove-Grey.jpg"].default,
      },
      {
        name: "Knebworth",
        src: knebworth["Knebworth Matt-Dove-Grey.jpg"].default,
      },
      {
        name: "Lazio",
        src: lazio["Lazio matt-dove-grey.jpg"].default,
      },
      {
        name: "Lincoln",
        src: lincoln["Lincoln Matt-Dove-Grey.jpg"].default,
      },
      {
        name: "Milano",
        src: milano["Milano Matt-Dove-Grey.jpg"].default,
      },
      {
        name: "Molise",
        src: molise["Molise venice_matt_dove_grey.png"].default,
      },
      {
        name: "Newport",
        src: newport["Newport Matt-Dove-Grey.jpg"].default,
      },
      {
        name: "Oxford",
        src: oxford["Oxford Matt-Dove-Grey.jpg"].default,
      },
      {
        name: "Palermo",
        src: palermo["Palermo Matt-Dove-Grey.jpg"].default,
      },
      {
        name: "Pisa",
        src: pisa["Pisa Matt-Dove-Grey.jpg"].default,
      },
      {
        name: "Richmond",
        src: richmond["Richmond Matt Dove Grey.jpg"].default,
      },
      {
        name: "Segreto",
        src: segreto["segreto matt dove grey.png"].default,
      },
      {
        name: "Shaker",
        src: shaker["Shaker Matt Dove Grey.jpg"].default,
      },
      {
        name: "Surrey",
        src: surrey["Surrey Matt Dove Grey.jpg"].default,
      },
      {
        name: "Tullymore",
        src: tullymore["Tullymore Matt Dove Grey.jpg"].default,
      },
      {
        name: "Tuscany",
        src: tuscany["Tuscany Matt Dove Grey.jpg"].default,
      },
      {
        name: "Venice",
        src: venice["Venice Matt Dove Grey.jpg"].default,
      },
      {
        name: "Verona",
        src: verona["Verona Matt Dove Grey.jpg"].default,
      },
      {
        name: "Warwick",
        src: warwick["Warwick Matt Dove Grey.jpg"].default,
      },
      {
        name: "Westbury",
        src: westbury["Westbury Matt Dove Grey.jpg"].default,
      },
      {
        name: "York",
        src: york["York Matt Dove Grey.jpg"].default,
      },
    ],
  },
  {
    name: "Matt Dust Grey",
    images: [
      {
        name: "Aldridge",
        src: aldridge["aldridge-matt-dust-grey.jpg"].default,
      },
      {
        name: "Ashford",
        src: ashford["ashford-matt-dust-grey.jpg"].default,
      },
      {
        name: "Broadway",
        src: broadway["broadway-matt-dust-grey.jpg"].default,
      },
      {
        name: "Cambridge",
        src: cambridge["Cambridge Matt Dust Grey.jpg"].default,
      },
      {
        name: "Canterbury",
        src: canterbury["Canterbury Matt Dust Grey.jpg"].default,
      },
      {
        name: "Elland",
        src: elland["Elland Matt Dust Grey.jpg"].default,
      },
      {
        name: "Euroline",
        src: euroline["Euroline Matt Dust Grey.jpg"].default,
      },
      {
        name: "Gothic",
        src: gothic["Gothic Matt Dust Grey.jpg"].default,
      },
      {
        name: "Integra",
        src: integra["Integra Matt Dust Grey.jpg"].default,
      },
      {
        name: "Knebworth",
        src: knebworth["Knebworth Matt Dust Grey.jpg"].default,
      },
      {
        name: "Lazio",
        src: lazio["Lazio Matt Dust Grey.jpg"].default,
      },
      {
        name: "Lincoln",
        src: lincoln["Lincoln Matt Dust Grey.jpg"].default,
      },
      {
        name: "Milano",
        src: milano["Milano Matt Dust Grey.jpg"].default,
      },
      {
        name: "Molise",
        src: molise["Molise venice_matt_dust_grey.png"].default,
      },
      {
        name: "Newport",
        src: newport["Newport Matt Dust Grey.jpg"].default,
      },
      {
        name: "Oxford",
        src: oxford["Oxford Matt Dust Grey.jpg"].default,
      },
      {
        name: "Palermo",
        src: palermo["Palermo Matt Dust Grey.jpg"].default,
      },
      {
        name: "Pisa",
        src: pisa["Pisa Matt Dust Grey.jpg"].default,
      },
      {
        name: "Richmond",
        src: richmond["Richmond Matt Dust Grey.jpg"].default,
      },
      {
        name: "Segreto",
        src: segreto["segreto matt dust grey.png"].default,
      },
      {
        name: "Shaker",
        src: shaker["Shaker Matt Dust Grey.jpg"].default,
      },
      {
        name: "Surrey",
        src: surrey["Surrey Matt Dust Grey.jpg"].default,
      },
      {
        name: "Tullymore",
        src: tullymore["Tullymore Matt Dust Grey.jpg"].default,
      },
      {
        name: "Tuscany",
        src: tuscany["Tuscany Matt Dust Grey.jpg"].default,
      },
      {
        name: "Venice",
        src: venice["Venice Matt Dust Grey.jpg"].default,
      },
      {
        name: "Verona",
        src: verona["Verona Matt Dust Grey.jpg"].default,
      },
      {
        name: "Warwick",
        src: warwick["Warwick Matt Dust Grey.jpg"].default,
      },
      {
        name: "Westbury",
        src: westbury["Westbury Matt Dust Grey.jpg"].default,
      },
      {
        name: "York",
        src: york["York Matt Dust Grey.jpg"].default,
      },
    ],
  },
  {
    name: "Matt Dakkar",
    images: [
      {
        name: "Aldridge",
        src: aldridge["aldridge-matt-dakkar.jpg"].default,
      },
      {
        name: "Ashford",
        src: ashford["ashford-matt-dakkar.jpg"].default,
      },
      {
        name: "Broadway",
        src: broadway["broadway-matt-dakkar.jpg"].default,
      },
      {
        name: "Cambridge",
        src: cambridge["Cambridge Matt Dakkar.jpg"].default,
      },
      {
        name: "Canterbury",
        src: canterbury["Canterbury Matt Dakkar.jpg"].default,
      },
      {
        name: "Elland",
        src: elland["Elland Matt Dakkar.jpg"].default,
      },
      {
        name: "Euroline",
        src: euroline["Euroline Matt Dakkar.jpg"].default,
      },
      {
        name: "Gothic",
        src: gothic["Gothic Matt Dakkar.jpg"].default,
      },
      {
        name: "Integra",
        src: integra["Integra Matt-Dakkar.jpg"].default,
      },
      {
        name: "Knebworth",
        src: knebworth["Knebworth Matt Dakkar.jpg"].default,
      },
      {
        name: "Lazio",
        src: lazio["Lazio matt-dakkar.jpg"].default,
      },
      {
        name: "Lincoln",
        src: lincoln["Lincoln Matt Dakkar.jpg"].default,
      },
      {
        name: "Milano",
        src: milano["Milano Matt Dakkar.jpg"].default,
      },
      {
        name: "Molise",
        src: molise["Molise venice_matt_dakkar.png"].default,
      },
      {
        name: "Newport",
        src: newport["Newport Matt Dakkar.jpg"].default,
      },
      {
        name: "Oxford",
        src: oxford["Oxford Matt Dakkar.jpg"].default,
      },
      {
        name: "Palermo",
        src: palermo["Palermo Matt Dakkar.jpg"].default,
      },
      {
        name: "Pisa",
        src: pisa["Pisa Matt Dakkar.jpg"].default,
      },
      {
        name: "Richmond",
        src: richmond["Richmond Matt Dakkar.jpg"].default,
      },
      {
        name: "Segreto",
        src: segreto["segreto matt dakkar.png"].default,
      },
      {
        name: "Shaker",
        src: shaker["Shaker Matt Dakkar.jpg"].default,
      },
      {
        name: "Surrey",
        src: surrey["Surrey Matt Dakkar.jpg"].default,
      },
      {
        name: "Tullymore",
        src: tullymore["TULLYMORE Matt Dakkar.jpg"].default,
      },
      {
        name: "Tuscany",
        src: tuscany["Tuscany Matt Dakar.jpg"].default,
      },
      {
        name: "Venice",
        src: venice["Venice Matt Dakkar.jpg"].default,
      },
      {
        name: "Verona",
        src: verona["Verona Matt Dakkar.jpg"].default,
      },
      {
        name: "Warwick",
        src: warwick["Warwick Matt Dakkar.jpg"].default,
      },
      {
        name: "Westbury",
        src: westbury["Westbury Matt Dakkar.jpg"].default,
      },
      {
        name: "York",
        src: york["York Matt Dakkar.jpg"].default,
      },
    ],
  },
  {
    name: "Matt Taupe",
    images: [
      {
        name: "Aldridge",
        src: aldridge["aldridge-matt-taupe.png"].default,
      },
      {
        name: "Ashford",
        src: ashford["ashford-matt-taupe.png"].default,
      },
      {
        name: "Broadway",
        src: broadway["broadway-matt-taupe.png"].default,
      },
      {
        name: "Cambridge",
        src: cambridge["cambridge matt_taupe.png"].default,
      },
      {
        name: "Canterbury",
        src: canterbury["canterbury matt_taupe.png"].default,
      },
      {
        name: "Elland",
        src: elland["Elland Matt_taupe.png"].default,
      },
      {
        name: "Euroline",
        src: euroline["euroline matt taupe.png"].default,
      },
      {
        name: "Gothic",
        src: gothic["gothic Matt_taupe.png"].default,
      },
      {
        name: "Integra",
        src: integra["Integra Matt_taupe.png"].default,
      },
      {
        name: "Knebworth",
        src: knebworth["Knebworth matt_taupe.png"].default,
      },
      {
        name: "Lazio",
        src: lazio["Lazio matt_taupe.png"].default,
      },
      {
        name: "Lincoln",
        src: lincoln["lincoln matt taupe.png"].default,
      },
      {
        name: "Milano",
        src: milano["milano matt taupe.png"].default,
      },
      {
        name: "Molise",
        src: molise["Molise venice_matt_taupe.png"].default,
      },
      {
        name: "Newport",
        src: newport["newport matt taupe.png"].default,
      },
      {
        name: "Oxford",
        src: oxford["oxford matt taupe.png"].default,
      },
      {
        name: "Palermo",
        src: palermo["palermo matt taupe.png"].default,
      },
      {
        name: "Pisa",
        src: pisa["pisa matt taupe.png"].default,
      },
      {
        name: "Richmond",
        src: richmond["richmond matt taupe.png"].default,
      },
      {
        name: "Segreto",
        src: segreto["segreto matt taupe.png"].default,
      },
      {
        name: "Shaker",
        src: shaker["shaker matt taupe.png"].default,
      },
      {
        name: "Surrey",
        src: surrey["surrey matt taupe.png"].default,
      },
      {
        name: "Tullymore",
        src: tullymore["tullymore matt taupe.png"].default,
      },
      {
        name: "Tuscany",
        src: tuscany["tuscany matt taupe.png"].default,
      },
      {
        name: "Venice",
        src: venice["venice matt taupe.png"].default,
      },
      {
        name: "Verona",
        src: verona["verona matt taupe.png"].default,
      },
      {
        name: "Warwick",
        src: warwick["warwick matt taupe.png"].default,
      },
      {
        name: "Westbury",
        src: westbury["westbury matt taupe.png"].default,
      },
      {
        name: "York",
        src: york["york matt taupe.png"].default,
      },
    ],
  },
  {
    name: "Matt Stone Grey",
    images: [
      {
        name: "Aldridge",
        src: aldridge["aldridge-matt-stone-grey.jpg"].default,
      },
      {
        name: "Ashford",
        src: ashford["ashford-matt-stone-grey.jpg"].default,
      },
      {
        name: "Broadway",
        src: broadway["broadway-matt-stone.jpg"].default,
      },
      {
        name: "Cambridge",
        src: cambridge["Cambridge Matt Stone.jpg"].default,
      },
      {
        name: "Canterbury",
        src: canterbury["Canterbury Matt Stone Grey.jpg"].default,
      },
      {
        name: "Elland",
        src: elland["Elland Matt Stone Grey.jpg"].default,
      },
      {
        name: "Euroline",
        src: euroline["Euroline Matt Stone Grey.jpg"].default,
      },
      {
        name: "Gothic",
        src: gothic["Gothic Matt Stone Grey.jpg"].default,
      },
      {
        name: "Integra",
        src: integra["Integra Matt-Stone-Grey.jpg"].default,
      },
      {
        name: "Knebworth",
        src: knebworth["Knebworth Matt Stone Grey.jpg"].default,
      },
      {
        name: "Lazio",
        src: lazio["Lazio matt-stone-grey.jpg"].default,
      },
      {
        name: "Lincoln",
        src: lincoln["Lincoln Matt Stone.jpg"].default,
      },
      {
        name: "Milano",
        src: milano["Milano Matt Stone Grey.jpg"].default,
      },
      {
        name: "Molise",
        src: molise["Molise venice_matt_stone_grey.png"].default,
      },
      {
        name: "Newport",
        src: newport["Newport Matt Stone Grey.jpg"].default,
      },
      {
        name: "Oxford",
        src: oxford["Oxford Matt Stone Grey.jpg"].default,
      },
      {
        name: "Palermo",
        src: palermo["Palermo Matt Stone Grey.jpg"].default,
      },
      {
        name: "Pisa",
        src: pisa["Pisa Matt Stone Grey.jpg"].default,
      },
      {
        name: "Richmond",
        src: richmond["Richmond Matt Stone Grey.jpg"].default,
      },
      {
        name: "Segreto",
        src: segreto["segreto matt stone grey.png"].default,
      },
      {
        name: "Shaker",
        src: shaker["Shaker Matt Stone.jpg"].default,
      },
      {
        name: "Surrey",
        src: surrey["Surrey Matt Stone Grey.jpg"].default,
      },
      {
        name: "Tullymore",
        src: tullymore["TULLYMORE Matt Stone Grey.jpg"].default,
      },
      {
        name: "Tuscany",
        src: tuscany["Tuscany Matt Stone Grey.jpg"].default,
      },
      {
        name: "Venice",
        src: venice["Venice Matt Stone Grey.jpg"].default,
      },
      {
        name: "Verona",
        src: verona["Verona Matt Stone Grey.jpg"].default,
      },
      {
        name: "Warwick",
        src: warwick["Warwick Matt Stone Grey.jpg"].default,
      },
      {
        name: "Westbury",
        src: westbury["Westbury Matt Grey Stone.jpg"].default,
      },
      {
        name: "York",
        src: york["York Matt Grey Stone.jpg"].default,
      },
    ],
  },
  {
    name: "Matt Denim",
    images: [
      {
        name: "Aldridge",
        src: aldridge["aldridge-matt-denim.jpg"].default,
      },
      {
        name: "Ashford",
        src: ashford["ashford-matt-denim.jpg"].default,
      },
      {
        name: "Broadway",
        src: broadway["broadway-matt-denim.jpg"].default,
      },
      {
        name: "Cambridge",
        src: cambridge["cambridge matt-denim.jpg"].default,
      },
      {
        name: "Elland",
        src: elland["Elland Matt Denim.jpg"].default,
      },
      {
        name: "Euroline",
        src: euroline["euroline matt-denim.jpg"].default,
      },
      {
        name: "Gothic",
        src: gothic["gothic matt-denim.jpg"].default,
      },
      {
        name: "Gothic",
        src: integra["Integra matt-denim.jpg"].default,
      },
      {
        name: "Knebworth",
        src: knebworth["Knebworth matt-denim.jpg"].default,
      },
      {
        name: "Lazio",
        src: lazio["Lazio matt-denim.jpg"].default,
      },
      {
        name: "Lincoln",
        src: lincoln["Lincoln matt denim.jpg"].default,
      },
      {
        name: "Milano",
        src: milano["milano matt-denim.jpg"].default,
      },
      {
        name: "Molise",
        src: molise["Molise venice_matt_denim.png"].default,
      },
      {
        name: "Newport",
        src: newport["newport matt-denim.jpg"].default,
      },
      {
        name: "Oxford",
        src: oxford["oxford matt-denim.jpg"].default,
      },
      {
        name: "Palermo",
        src: palermo["palermo matt-denim.jpg"].default,
      },
      {
        name: "Pisa",
        src: pisa["pisa matt-denim.jpg"].default,
      },
      {
        name: "Richmond",
        src: richmond["Richmond Matt Denim.jpg"].default,
      },
      {
        name: "Segreto",
        src: segreto["segreto matt denim.png"].default,
      },
      {
        name: "Shaker",
        src: shaker["shaker matt denim.jpg"].default,
      },
      {
        name: "Surrey",
        src: surrey["surrey matt denim.jpg"].default,
      },
      {
        name: "Tullymore",
        src: tullymore["tullymore matt denim.jpg"].default,
      },
      {
        name: "Tuscany",
        src: tuscany["tuscany matt denim.jpg"].default,
      },
      {
        name: "Venice",
        src: venice["venice matt denim.jpg"].default,
      },
      {
        name: "Verona",
        src: verona["verona matt denim.jpg"].default,
      },
      {
        name: "Warwick",
        src: warwick["warwick matt denim.jpg"].default,
      },
      {
        name: "Westbury",
        src: westbury["westbury matt denim.jpg"].default,
      },
      {
        name: "York",
        src: york["york matt denim.jpg"].default,
      },
    ],
  },
  {
    name: "Matt Indigo Blue",
    images: [
      {
        name: "Aldridge",
        src: aldridge["aldridge-matt-indigo-blue.jpg"].default,
      },
      {
        name: "Ashford",
        src: ashford["ashford-matt-indigo-blue.jpg"].default,
      },
      {
        name: "Broadway",
        src: broadway["broadway-matt-indigo-blue.jpg"].default,
      },
      {
        name: "Cambridge",
        src: cambridge["Cambridge Matt Indigo Blue.jpg"].default,
      },
      {
        name: "Canterbury",
        src: canterbury["Canterbury Matt Indigo Blue.jpg"].default,
      },
      {
        name: "Elland",
        src: elland["Elland Matt Indigo Blue.jpg"].default,
      },
      {
        name: "Euroline",
        src: euroline["Euroline Matt Indigo Blue.jpg"].default,
      },
      {
        name: "Gothic",
        src: gothic["Gothic Matt Indigo Blue.jpg"].default,
      },
      {
        name: "Integra",
        src: integra["Integra Matt Indigo Blue.jpg"].default,
      },
      {
        name: "Knebworth",
        src: knebworth["Knebworth Matt Indigo Blue.jpg"].default,
      },
      {
        name: "Lazio",
        src: lazio["Lazio Matt Indigo Blue.jpg"].default,
      },
      {
        name: "Lincoln",
        src: lincoln["Lincoln Matt Indigo Blue.jpg"].default,
      },
      {
        name: "Milano",
        src: milano["Milano Matt Indigo Blue.jpg"].default,
      },
      {
        name: "Molise",
        src: molise["Molise venice_matt_indigo_blue.png"].default,
      },
      {
        name: "Newport",
        src: newport["Newport Matt Indigo Blue.jpg"].default,
      },
      {
        name: "Oxford",
        src: oxford["Oxford Matt Indigo Blue.jpg"].default,
      },
      {
        name: "Palermo",
        src: palermo["Palermo Matt Indigo Blue.jpg"].default,
      },
      {
        name: "Pisa",
        src: pisa["Pisa Matt Indigo Blue.jpg"].default,
      },
      {
        name: "Richmond",
        src: richmond["Richmond Matt Indigo Blue.jpg"].default,
      },
      {
        name: "Segreto",
        src: segreto["segreto matt indigo blue.png"].default,
      },
      {
        name: "Shaker",
        src: shaker["Shaker Matt Indigo Blue.jpg"].default,
      },
      {
        name: "Surrey",
        src: surrey["Surrey Matt Indigo Blue.jpg"].default,
      },
      {
        name: "Tullymore",
        src: tullymore["Tullymore Matt Indigo Blue.jpg"].default,
      },
      {
        name: "Tuscany",
        src: tuscany["Tuscany Matt Indigo Blue.jpg"].default,
      },
      {
        name: "Venice",
        src: venice["Venice Matt Indigo Blue.jpg"].default,
      },
      {
        name: "Verona",
        src: verona["Verona Matt Indigo Blue.jpg"].default,
      },
      {
        name: "Warwick",
        src: warwick["Warwick Matt Indigo Blue.jpg"].default,
      },
      {
        name: "Westbury",
        src: westbury["Westbury Matt Indigo Blue.jpg"].default,
      },
      {
        name: "York",
        src: york["York Matt Indigo Blue.jpg"].default,
      },
    ],
  },
  {
    name: "Matt Kombu Green",
    images: [
      {
        name: "Aldridge",
        src: aldridge["aldridge-matt-kombu-green.png"].default,
      },
      {
        name: "Ashford",
        src: ashford["ashford-matt-kombu-green.png"].default,
      },
      {
        name: "Broadway",
        src: broadway["broadway-matt-kombu-green.png"].default,
      },
      {
        name: "Cambridge",
        src: cambridge["cambridge matt_kombu_green.png"].default,
      },
      {
        name: "Canterbury",
        src: canterbury["canterbury matt_kombu_green.png"].default,
      },
      {
        name: "Elland",
        src: elland["Elland Matt_kombu_green.png"].default,
      },
      {
        name: "Euroline",
        src: euroline["euroline matt kombu_green.png"].default,
      },
      {
        name: "Gothic",
        src: gothic["gothic Matt_kombu_green.png"].default,
      },
      {
        name: "Integra",
        src: integra["Integra Matt_kombu_green.png"].default,
      },
      {
        name: "Knebworth",
        src: knebworth["Knebworth matt_kombu_green.png"].default,
      },
      {
        name: "Lazio",
        src: lazio["Lazio matt_kombu_green.png"].default,
      },
      {
        name: "Lincoln",
        src: lincoln["lincoln matt kombu green.png"].default,
      },
      {
        name: "Milano",
        src: milano["milano matt kombu green.png"].default,
      },
      {
        name: "Molise",
        src: molise["Molise venice_matt_kombu_green.png"].default,
      },
      {
        name: "Newport",
        src: newport["newport matt kombu green.png"].default,
      },
      {
        name: "Oxford",
        src: oxford["oxford matt kombu green.png"].default,
      },
      {
        name: "Palermo",
        src: palermo["palermo matt kombu green.png"].default,
      },
      {
        name: "Pisa",
        src: pisa["pisa matt kombu green.png"].default,
      },
      {
        name: "Richmond",
        src: richmond["richmond matt kombu green.png"].default,
      },
      {
        name: "Shaker",
        src: shaker["shaker matt kombu green.png"].default,
      },
      {
        name: "Surrey",
        src: surrey["surrey matt kombu green.png"].default,
      },
      {
        name: "Tullymore",
        src: tullymore["tullymore matt kombu green.png"].default,
      },
      {
        name: "Tuscany",
        src: tuscany["tuscany matt kombu green.png"].default,
      },
      {
        name: "Venice",
        src: venice["venice matt kombu green.png"].default,
      },
      {
        name: "Verona",
        src: verona["verona matt kombu green.png"].default,
      },
      {
        name: "Warwick",
        src: warwick["warwick matt kombu green.png"].default,
      },
      {
        name: "Westbury",
        src: westbury["westbury matt kombu green.png"].default,
      },
      {
        name: "York",
        src: york["york matt kombu green.png"].default,
      },
    ],
  },
  {
    name: "Matt Graphite",
    images: [
      {
        name: "Aldridge",
        src: aldridge["aldridge-matt-graphite.jpg"].default,
      },
      {
        name: "Ashford",
        src: ashford["ashford-matt-graphite.jpg"].default,
      },
      {
        name: "Broadway",
        src: broadway["broadway-matt-graphite.jpg"].default,
      },
      {
        name: "Cambridge",
        src: cambridge["Cambridge Matt Graphite.jpg"].default,
      },
      {
        name: "Canterbury",
        src: canterbury["Canterbury Matt-Graphite.jpg"].default,
      },
      {
        name: "Elland",
        src: elland["Elland Matt Graphite.jpg"].default,
      },
      {
        name: "Euroline",
        src: euroline["Euroline Matt-Graphite.jpg"].default,
      },
      {
        name: "Gothic",
        src: gothic["Gothic Matt-Graphite.jpg"].default,
      },
      {
        name: "Integra",
        src: integra["Integra Matt-Graphite.jpg"].default,
      },
      {
        name: "Knebworth",
        src: knebworth["Knebworth Matt-Graphite.jpg"].default,
      },
      {
        name: "Lazio",
        src: lazio["Lazio matt-graphite.jpg"].default,
      },
      {
        name: "Lincoln",
        src: lincoln["Lincoln Matt-Graphite.jpg"].default,
      },
      {
        name: "Milano",
        src: milano["Milano Matt-Graphite.jpg"].default,
      },
      {
        name: "Molise",
        src: molise["Molise venice_matt_graphite.png"].default,
      },
      {
        name: "Newport",
        src: newport["Newport Matt-Graphite.jpg"].default,
      },
      {
        name: "Oxford",
        src: oxford["Oxford Matt-Graphite.jpg"].default,
      },
      {
        name: "Palermo",
        src: palermo["Palermo Matt-Graphite.jpg"].default,
      },
      {
        name: "Pisa",
        src: pisa["Pisa Matt-Graphite.jpg"].default,
      },
      {
        name: "Richmond",
        src: richmond["Richmond Matt Graphite.jpg"].default,
      },
      {
        name: "Segreto",
        src: segreto["segreto matt graphite.png"].default,
      },
      {
        name: "Shaker",
        src: shaker["Shaker Matt Graphite.jpg"].default,
      },
      {
        name: "Surrey",
        src: surrey["Surrey Matt Graphite.jpg"].default,
      },
      {
        name: "Tullymore",
        src: tullymore["Tullymore Matt Graphite.jpg"].default,
      },
      {
        name: "Tuscany",
        src: tuscany["Tuscany Matt Graphite.jpg"].default,
      },
      {
        name: "Venice",
        src: venice["Venice Matt Graphite.jpg"].default,
      },
      {
        name: "Verona",
        src: verona["Verona Matt Graphite.jpg"].default,
      },
      {
        name: "Warwick",
        src: warwick["Warwick Matt Graphite.jpg"].default,
      },
      {
        name: "Westbury",
        src: westbury["Westbury Matt Graphite.jpg"].default,
      },
      {
        name: "York",
        src: york["York Matt Graphite.jpg"].default,
      },
    ],
  },
  {
    name: "Matt Black",
    images: [
      {
        name: "Aldridge",
        src: aldridge["aldridge-matt-black.png"].default,
      },
      {
        name: "Ashford",
        src: ashford["ashford-matt-black.png"].default,
      },
      {
        name: "Broadway",
        src: broadway["broadway-matt-black.png"].default,
      },
      {
        name: "Cambridge",
        src: cambridge["cambridge matt_black.png"].default,
      },
      {
        name: "Canterbury",
        src: canterbury["canterbury matt_black.png"].default,
      },
      {
        name: "Elland",
        src: elland["Elland Matt_black.png"].default,
      },
      {
        name: "Euroline",
        src: euroline["euroline Matt black.png"].default,
      },
      {
        name: "Gothic",
        src: gothic["gothic Matt_black.png"].default,
      },
      {
        name: "Integra",
        src: integra["Integra Matt_black.png"].default,
      },
      {
        name: "Knebworth",
        src: knebworth["Knebworth matt_black.png"].default,
      },
      {
        name: "Lazio",
        src: lazio["Lazio matt_black.png"].default,
      },
      {
        name: "Lincoln",
        src: lincoln["lincoln matt black.png"].default,
      },
      {
        name: "Milano",
        src: milano["milano matt black.png"].default,
      },
      {
        name: "Molise",
        src: molise["Molise venice_matt_black.png"].default,
      },
      {
        name: "Newport",
        src: newport["newport matt black.png"].default,
      },
      {
        name: "Oxford",
        src: oxford["oxford matt black.png"].default,
      },
      {
        name: "Palermo",
        src: palermo["palermo matt black.png"].default,
      },
      {
        name: "Pisa",
        src: pisa["pisa matt black.png"].default,
      },
      {
        name: "Richmond",
        src: richmond["richmond matt black.png"].default,
      },
      {
        name: "Segreto",
        src: segreto["segreto matt black.png"].default,
      },
      {
        name: "Shaker",
        src: shaker["shaker matt black.png"].default,
      },
      {
        name: "Surrey",
        src: surrey["surrey matt black.png"].default,
      },
      {
        name: "Tullymore",
        src: tullymore["tullymore matt black.png"].default,
      },
      {
        name: "Tuscany",
        src: tuscany["tuscany matt black.png"].default,
      },
      {
        name: "Venice",
        src: venice["venice matt black.png"].default,
      },
      {
        name: "Verona",
        src: verona["verona matt black.png"].default,
      },
      {
        name: "Warwick",
        src: warwick["warwick matt black.png"].default,
      },
      {
        name: "Westbury",
        src: westbury["westbury matt black.png"].default,
      },
      {
        name: "York",
        src: york["york matt black.png"].default,
      },
    ],
  },
  {
    name: "London Concrete",
    images: [
      {
        name: "Aldridge",
        src: aldridge["aldridge-london-concrete.png"].default,
      },
      {
        name: "Ashford",
        src: ashford["ashford-london-concrete.png"].default,
      },
      {
        name: "Broadway",
        src: broadway["broadway-london-concrete.png"].default,
      },
      {
        name: "Cambridge",
        src: cambridge["Cambridge London Concrete.png"].default,
      },
      {
        name: "Canterbury",
        src: canterbury["Canterbury London Concrete.png"].default,
      },
      {
        name: "Elland",
        src: elland["Elland London Concrete.png"].default,
      },
      {
        name: "Euroline",
        src: euroline["Euroline London Concrete.png"].default,
      },
      {
        name: "Gothic",
        src: gothic["Gothic London Concrete.png"].default,
      },
      {
        name: "Integra",
        src: integra["Integra London Concrete.png"].default,
      },
      {
        name: "Knebworth",
        src: knebworth["Knebworth London Concrete.png"].default,
      },
      {
        name: "Lazio",
        src: lazio["Lazio London Concrete.png"].default,
      },
      {
        name: "Lincoln",
        src: lincoln["Lincoln London Concrete.png"].default,
      },
      {
        name: "Milano",
        src: milano["Milano London Concrete.png"].default,
      },
      {
        name: "Molise",
        src: molise["Molise venice_london_concrete.png"].default,
      },
      {
        name: "Newport",
        src: newport["Newport London Concrete.png"].default,
      },
      {
        name: "Oxford",
        src: oxford["Oxford London Concrete.png"].default,
      },
      {
        name: "Palermo",
        src: palermo["Palermo London Concrete.png"].default,
      },
      {
        name: "Pisa",
        src: pisa["Pisa London Concrete.png"].default,
      },
      {
        name: "Richmond",
        src: richmond["Richmond London Concrete.png"].default,
      },
      {
        name: "Segreto",
        src: segreto["segreto london_concrete.png"].default,
      },
      {
        name: "Shaker",
        src: shaker["Shaker London Concrete.png"].default,
      },
      {
        name: "Surrey",
        src: surrey["Surrey London Concrete.png"].default,
      },
      {
        name: "Tullymore",
        src: tullymore["Tullymore London Concrete.png"].default,
      },
      {
        name: "Tuscany",
        src: tuscany["Tuscany London Concrete.png"].default,
      },
      {
        name: "Venice",
        src: venice["Venice London Concrete.png"].default,
      },
      {
        name: "Verona",
        src: verona["Verona London Concrete.png"].default,
      },
      {
        name: "Warwick",
        src: warwick["Warwick London Concrete.png"].default,
      },
      {
        name: "Westbury",
        src: westbury["Westbury London Concrete.png"].default,
      },
      {
        name: "York",
        src: york["York London Concrete.png"].default,
      },
    ],
  },
  {
    name: "Moldau Acacia",
    images: [
      {
        name: "Aldridge",
        src: aldridge["aldridge-moldau-acacia.png"].default,
      },
      {
        name: "Ashford",
        src: ashford["ashford-moldau-acacia.png"].default,
      },
      {
        name: "Broadway",
        src: broadway["broadway-moldau-acacia.png"].default,
      },
      {
        name: "Cambridge",
        src: cambridge["Cambridge Moldau Acacia.png"].default,
      },
      {
        name: "Canterbury",
        src: canterbury["Canterbury Moldau Acacia.png"].default,
      },
      {
        name: "Elland",
        src: elland["Elland Moldau Acacia.png"].default,
      },
      {
        name: "Euroline",
        src: euroline["Euroline Moldau Acacia.png"].default,
      },
      {
        name: "Gothic",
        src: gothic["Gothic Moldau Acacia.png"].default,
      },
      {
        name: "Integra",
        src: integra["Integra Moldau Acacia.png"].default,
      },
      {
        name: "Knebworth",
        src: knebworth["Knebworth Moldau Acacia.png"].default,
      },
      {
        name: "Lazio",
        src: lazio["Lazio Moldau Acacia.png"].default,
      },
      {
        name: "Lincoln",
        src: lincoln["Lincoln Moldau Acacia.png"].default,
      },
      {
        name: "Milano",
        src: milano["Milano Moldau Acacia.png"].default,
      },
      {
        name: "Molise",
        src: molise["Molise venice_moldau_acacia.png"].default,
      },
      {
        name: "Newport",
        src: newport["Newport Moldau Acacia.png"].default,
      },
      {
        name: "Oxford",
        src: oxford["Oxford Moldau Acacia.png"].default,
      },
      {
        name: "Palermo",
        src: palermo["Palermo Moldau Acacia.png"].default,
      },
      {
        name: "Pisa",
        src: pisa["Pisa Moldau Acacia.png"].default,
      },
      {
        name: "Richmond",
        src: richmond["Richmond Moldau Acacia.png"].default,
      },
      {
        name: "Segreto",
        src: segreto["Segreto Moldau Acacia.png"].default,
      },
      {
        name: "Shaker",
        src: shaker["Shaker Moldau Acacia.png"].default,
      },
      {
        name: "Surrey",
        src: surrey["Surrey Moldau Acacia.png"].default,
      },
      {
        name: "Tullymore",
        src: tullymore["Tullymore Moldau Acacia.png"].default,
      },
      {
        name: "Tuscany",
        src: tuscany["Tuscany Moldau Acacia.png"].default,
      },
      {
        name: "Venice",
        src: venice["Venice Moldau Acacia.png"].default,
      },
      {
        name: "Verona",
        src: verona["Verona Moldau Acacia.png"].default,
      },
      {
        name: "Warwick",
        src: warwick["Warwick Moldau Acacia.png"].default,
      },
      {
        name: "Westbury",
        src: westbury["Westbury Moldau Acacia.png"].default,
      },
      {
        name: "York",
        src: york["York Moldau Acacia.png"].default,
      },
    ],
  },
  {
    name: "Canadian Maple",
    images: [
      {
        name: "Aldridge",
        src: aldridge["aldridge-canadian-maple.png"].default,
      },
      {
        name: "Ashford",
        src: ashford["ashford-canadian-maple.png"].default,
      },
      {
        name: "Broadway",
        src: broadway["broadway-canadian-maple.png"].default,
      },
      {
        name: "Cambridge",
        src: cambridge["Cambridge Canadian Maple.png"].default,
      },
      {
        name: "Canterbury",
        src: canterbury["Canterbury Canadian Maple.png"].default,
      },
      {
        name: "Elland",
        src: elland["Elland Canadian Maple.png"].default,
      },
      {
        name: "Euroline",
        src: euroline["Euroline Canadian Maple.png"].default,
      },
      {
        name: "Gothic",
        src: gothic["Gothic Canadian Maple.png"].default,
      },
      {
        name: "Integra",
        src: integra["Integra Canadian Maple.png"].default,
      },
      {
        name: "Knebworth",
        src: knebworth["Knebworth Canadian Maple.png"].default,
      },
      {
        name: "Lazio",
        src: lazio["Lazio Canadian Maple.png"].default,
      },
      {
        name: "Lincoln",
        src: lincoln["Lincoln Canadian Maple.png"].default,
      },
      {
        name: "Milano",
        src: milano["Milano Canadian Maple.png"].default,
      },
      {
        name: "Molise",
        src: molise["Molise venice_canadian_maple.png"].default,
      },
      {
        name: "Newport",
        src: newport["Newport Canadian Maple.png"].default,
      },
      {
        name: "Oxford",
        src: oxford["Oxford Canadian Maple.png"].default,
      },
      {
        name: "Palermo",
        src: palermo["Palermo Canadian Maple.png"].default,
      },
      {
        name: "Pisa",
        src: pisa["Pisa Canadian Maple.png"].default,
      },
      {
        name: "Richmond",
        src: richmond["Richmond Canadian Maple.png"].default,
      },
      {
        name: "Segreto",
        src: segreto["segreto canadian maple.png"].default,
      },
      {
        name: "Shaker",
        src: shaker["Shaker Canadian Maple.png"].default,
      },
      {
        name: "Surrey",
        src: surrey["Surrey Canadian Maple.png"].default,
      },
      {
        name: "Tullymore",
        src: tullymore["Tullymore Canadian Maple.png"].default,
      },
      {
        name: "Tuscany",
        src: tuscany["Tuscany Canadian Maple.png"].default,
      },
      {
        name: "Venice",
        src: venice["Venice Canadian Maple.png"].default,
      },
      {
        name: "Verona",
        src: verona["Verona Canadian Maple.png"].default,
      },
      {
        name: "Warwick",
        src: warwick["Warwick Canadian Maple.png"].default,
      },
      {
        name: "Westbury",
        src: westbury["Westbury Canadian Maple.png"].default,
      },
      {
        name: "York",
        src: york["York Canadian Maple.png"].default,
      },
    ],
  },
  {
    name: "Halifax White Oak",
    images: [
      {
        name: "Aldridge",
        src: aldridge["aldridge-halifax-oak-white.png"].default,
      },
      {
        name: "Ashford",
        src: ashford["ashford-halifax-oak-white.png"].default,
      },
      {
        name: "Broadway",
        src: broadway["broadway-halifax-oak-white.png"].default,
      },
      {
        name: "Cambridge",
        src: cambridge["cambridge halifax_oak_white.png"].default,
      },
      {
        name: "Canterbury",
        src: canterbury["canterbury Halifax_oak_white.png"].default,
      },
      {
        name: "Elland",
        src: elland["Elland Halifax Oak white.png"].default,
      },
      {
        name: "Euroline",
        src: euroline["euroline halifax_oak_white.png"].default,
      },
      {
        name: "Gothic",
        src: gothic["gothic Halifax_oak_white.png"].default,
      },
      {
        name: "Integra",
        src: integra["integra halifax_oak_white.png"].default,
      },
      {
        name: "Knebworth",
        src: knebworth["Knebworth halifax_oak_white.png"].default,
      },
      {
        name: "Lazio",
        src: lazio["Lazio halifax oak white.png"].default,
      },
      {
        name: "Lincoln",
        src: lincoln["lincoln halifax oak white.png"].default,
      },
      {
        name: "Milano",
        src: milano["milano halifax oak white.png"].default,
      },
      {
        name: "Molise",
        src: molise["Molise venice_halifax_oak_white.png"].default,
      },
      {
        name: "Newport",
        src: newport["newport halifax oak white.png"].default,
      },
      {
        name: "Oxford",
        src: oxford["oxford halifax oak white.png"].default,
      },
      {
        name: "Palermo",
        src: palermo["palermo halifax oak white.png"].default,
      },
      {
        name: "Pisa",
        src: pisa["pisa halifax oak white.png"].default,
      },
      {
        name: "Richmond",
        src: richmond["richmond halifax oak white.png"].default,
      },
      {
        name: "Segreto",
        src: segreto["segreto halifax oak white.png"].default,
      },
      {
        name: "Shaker",
        src: shaker["shaker halifax oak white.png"].default,
      },
      {
        name: "Surrey",
        src: surrey["surrey halifax oak white.png"].default,
      },
      {
        name: "Tullymore",
        src: tullymore["tullymore halifax oak white.png"].default,
      },
      {
        name: "Tuscany",
        src: tuscany["tuscany halifax oak white.png"].default,
      },
      {
        name: "Venice",
        src: venice["venice halifax oak white.png"].default,
      },
      {
        name: "Verona",
        src: verona["verona halifax oak white.png"].default,
      },
      {
        name: "Warwick",
        src: warwick["warwick halifax oak white.png"].default,
      },
      {
        name: "Westbury",
        src: westbury["westbury halifax oak white.png"].default,
      },
      {
        name: "York",
        src: york["york halifax oak white.png"].default,
      },
    ],
  },
  {
    name: "Halifax Natural Oak",
    images: [
      {
        name: "Aldridge",
        src: aldridge["aldridge-halifax-oak-natural.png"].default,
      },
      {
        name: "Ashford",
        src: ashford["ashford-halifax-oak-natural.png"].default,
      },
      {
        name: "Broadway",
        src: broadway["broadway-halifax-oak-natural.png"].default,
      },
      {
        name: "Cambridge",
        src: cambridge["cambridge halifax_oak_natural.png"].default,
      },
      {
        name: "Canterbury",
        src: canterbury["Canterbury Halifax_oak_natural.png"].default,
      },
      {
        name: "Elland",
        src: elland["Elland Halifax Oak natural.png"].default,
      },
      {
        name: "Euroline",
        src: euroline["euroline halifax_oak_natural.png"].default,
      },
      {
        name: "Gothic",
        src: gothic["gothic Halifax_oak_natural.png"].default,
      },
      {
        name: "Integra",
        src: integra["integra halifax_oak_natural.png"].default,
      },
      {
        name: "Knebworth",
        src: knebworth["Knebworth halifax_oak_natural.png"].default,
      },
      {
        name: "Lazio",
        src: lazio["Lazio halifax oak natural.png"].default,
      },
      {
        name: "Lincoln",
        src: lincoln["lincoln halifax oak natural.png"].default,
      },
      {
        name: "Milano",
        src: milano["milano halifax oak natural.png"].default,
      },
      {
        name: "Molise",
        src: molise["Molise venice_halifax_oak_natural.png"].default,
      },
      {
        name: "Newport",
        src: newport["newport halifax oak natural.png"].default,
      },
      {
        name: "Oxford",
        src: oxford["oxford halifax oak natural.png"].default,
      },
      {
        name: "Palermo",
        src: palermo["palermo halifax oak natural.png"].default,
      },
      {
        name: "Pisa",
        src: pisa["pisa halifax oak natural.png"].default,
      },
      {
        name: "Richmond",
        src: richmond["richmond halifax oak natural.png"].default,
      },
      {
        name: "Segreto",
        src: segreto["segreto halifax oak natural.png"].default,
      },
      {
        name: "Shaker",
        src: shaker["shaker halifax oak natural.png"].default,
      },
      {
        name: "Surrey",
        src: surrey["surrey halifax oak natural.png"].default,
      },
      {
        name: "Tullymore",
        src: tullymore["tullymore halifax oak natural.png"].default,
      },
      {
        name: "Tuscany",
        src: tuscany["tuscany halifax oak natural.png"].default,
      },
      {
        name: "Venice",
        src: venice["venice halifax oak natural.png"].default,
      },
      {
        name: "Verona",
        src: verona["verona halifax oak natural.png"].default,
      },
      {
        name: "Warwick",
        src: warwick["warwick halifax oak natural.png"].default,
      },
      {
        name: "Westbury",
        src: westbury["westbury halifax oak natural.png"].default,
      },
      {
        name: "York",
        src: york["york halifax oak natural.png"].default,
      },
    ],
  },
  {
    name: "Lissa Oak",
    images: [
      {
        name: "Aldridge",
        src: aldridge["aldridge-lissa-oak.png"].default,
      },
      {
        name: "Ashford",
        src: ashford["ashford-lissa-oak.png"].default,
      },
      {
        name: "Broadway",
        src: broadway["broadway-lissa-oak.png"].default,
      },
      {
        name: "Cambridge",
        src: cambridge["Cambridge Lissa Oak.png"].default,
      },
      {
        name: "Canterbury",
        src: canterbury["Canterbury Lissa Oak.png"].default,
      },
      {
        name: "Elland",
        src: elland["Elland Lissa Oak.png"].default,
      },
      {
        name: "Euroline",
        src: euroline["Euroline Lissa Oak.png"].default,
      },
      {
        name: "Gothic",
        src: gothic["Gothic Lissa Oak.png"].default,
      },
      {
        name: "Integra",
        src: integra["Integra Lissa Oak.png"].default,
      },
      {
        name: "Knebworth",
        src: knebworth["Knebworth Lissa Oak.png"].default,
      },
      {
        name: "Lazio",
        src: lazio["Lazio Lissa Oak.png"].default,
      },
      {
        name: "Lincoln",
        src: lincoln["Lincoln Lissa Oak.png"].default,
      },
      {
        name: "Milano",
        src: milano["Milano Lissa Oak.png"].default,
      },
      {
        name: "Molise",
        src: molise["Molise venice_lissa_oak.png"].default,
      },
      {
        name: "Newport",
        src: newport["Newport Lissa Oak.png"].default,
      },
      {
        name: "Oxford",
        src: oxford["Oxford Lissa Oak.png"].default,
      },
      {
        name: "Palermo",
        src: palermo["Palermo Lissa Oak.png"].default,
      },
      {
        name: "Pisa",
        src: pisa["Pisa Lissa Oak.png"].default,
      },
      {
        name: "Richmond",
        src: richmond["Richmond Lissa Oak.png"].default,
      },
      {
        name: "Segreto",
        src: segreto["Segreto Lissa Oak.png"].default,
      },
      {
        name: "Shaker",
        src: shaker["Shaker Lissa Oak.png"].default,
      },
      {
        name: "Surrey",
        src: surrey["Surrey Lissa Oak.png"].default,
      },
      {
        name: "Tullymore",
        src: tullymore["Tullymore Lissa Oak.png"].default,
      },
      {
        name: "Tuscany",
        src: tuscany["Tuscany Lissa Oak.png"].default,
      },
      {
        name: "Venice",
        src: venice["Venice Lissa Oak.png"].default,
      },
      {
        name: "Verona",
        src: verona["Verona Lissa Oak.png"].default,
      },
      {
        name: "Warwick",
        src: warwick["Warwick Lissa Oak.png"].default,
      },
      {
        name: "Westbury",
        src: westbury["Westbury Lissa Oak.png"].default,
      },
      {
        name: "York",
        src: york["York Lissa Oak.png"].default,
      },
    ],
  },
  {
    name: "Paintable",
    images: [
      {
        name: "Aldridge",
        src: aldridge["aldridge-paintable.jpg"].default,
      },
      {
        name: "Ashford",
        src: ashford["ashford-paintable-vinyl.jpg"].default,
      },
      {
        name: "Broadway",
        src: broadway["broadway-paintable.jpg"].default,
      },
      {
        name: "Cambridge",
        src: cambridge["Cambridge Paintable.jpg"].default,
      },
      {
        name: "Canterbury",
        src: canterbury["Canterbury Paintable.jpg"].default,
      },
      {
        name: "Elland",
        src: elland["Elland Paintable.jpg"].default,
      },
      {
        name: "Euroline",
        src: euroline["Euroline Paintable.jpg"].default,
      },
      {
        name: "Gothic",
        src: gothic["Gothic Paintable.jpg"].default,
      },
      {
        name: "Integra",
        src: integra["Integra Paintable.jpg"].default,
      },
      {
        name: "Knebworth",
        src: knebworth["Knebworth Paintable.jpg"].default,
      },
      {
        name: "Lazio",
        src: lazio["Lazio paintable.jpg"].default,
      },
      {
        name: "Lincoln",
        src: lincoln["Lincoln Paintable.jpg"].default,
      },
      {
        name: "Milano",
        src: milano["Milano Paintable.jpg"].default,
      },
      {
        name: "Molise",
        src: molise["Molise venice_paintable.png"].default,
      },
      {
        name: "Newport",
        src: newport["Newport Paintable.jpg"].default,
      },
      {
        name: "Oxford",
        src: oxford["Oxford Paintable.jpg"].default,
      },
      {
        name: "Palermo",
        src: palermo["Palermo Paintable.jpg"].default,
      },
      {
        name: "Pisa",
        src: pisa["Pisa Paintable.jpg"].default,
      },
      {
        name: "Richmond",
        src: richmond["Richmond Paintable.jpg"].default,
      },
      {
        name: "Segreto",
        src: segreto["segreto paintable.png"].default,
      },
      {
        name: "Shaker",
        src: shaker["Shaker Paintable.jpg"].default,
      },
      {
        name: "Surrey",
        src: surrey["Surrey Paintable.jpg"].default,
      },
      {
        name: "Tullymore",
        src: tullymore["Tullymore Paintable.jpg"].default,
      },
      {
        name: "Tuscany",
        src: tuscany["Tuscany Paintable.jpg"].default,
      },
      {
        name: "Venice",
        src: venice["Venice Paintable.jpg"].default,
      },
      {
        name: "Verona",
        src: verona["Verona Paintable.jpg"].default,
      },
      {
        name: "Warwick",
        src: warwick["Warwick Paintable.jpg"].default,
      },
      {
        name: "Westbury",
        src: westbury["Westbury Paintable.jpg"].default,
      },
      {
        name: "York",
        src: york["York Paintable.jpg"].default,
      },
    ],
  },
];

module.exports = options;
