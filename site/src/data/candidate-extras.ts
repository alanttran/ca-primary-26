import type { Candidate } from '../types/ballot-types';

/** Campaign sites and optional remote headshots merged onto base race data at build time. */
export const CANDIDATE_EXTRAS: Partial<Record<string, Pick<Candidate, 'campaignUrl' | 'headshotUrl'>>> = {
  becerra: { campaignUrl: 'https://www.xavierbecerra2026.com/' },
  porter: { campaignUrl: 'https://katieporter.com/' },
  mahan: { campaignUrl: 'https://www.mahanforcalifornia.com/' },
  steyer: { campaignUrl: 'https://www.tomsteyer.com/' },
  hilton: { campaignUrl: 'https://stevehiltonforgovernor.com/' },
  bianco: { campaignUrl: 'https://biancoforgovernor.com/' },
  ma: { campaignUrl: 'https://fionama.com/' },
  fryday: { campaignUrl: 'https://joshfryday.com/' },
  tubbs: { campaignUrl: 'https://michaeltubbsforca.com/' },
  kellman: {
    campaignUrl: 'https://www.janellekellman.com/',
    /** Official campaign site image (Imgix); square-cropped portrait. */
    headshotUrl:
      'https://run.imgix.net/09ca5134-c7fc-4933-861a-f14ccf41176c/b98f906d-474e-4647-b91f-ea1abf9dac88/b98f906d-474e-4647-b91f-ea1abf9dac88.jpeg?ixlib=js-3.8.0&bri=0&con=0&sat=0&high=0&shad=0&usm=0&rect=190%2C0%2C966%2C966&auto=compress%2Cformat&fit=max&w=384&q=85',
  },
  romero: { campaignUrl: 'https://gloriaromero.com/' },
  jones: { campaignUrl: 'https://www.electbrianjones.com/' },
  weber: { campaignUrl: 'https://drshirleyweber.com/' },
  wagner: { campaignUrl: 'https://www.wagnerforcalifornia.com/' },
  cohen: { campaignUrl: 'https://www.maliacohenforca.com/' },
  morgan: {
    campaignUrl: 'https://www.herbmorgan.com/',
    /** Wix-hosted campaign headshot (outdoor portrait). */
    headshotUrl:
      'https://static.wixstatic.com/media/b29e09_9b7ced4a2c004a53b4f05357b426c53c~mv2.jpg/v1/fill/w_473,h_796,fp_0.57_0.28,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Herb%20W_%20Morgan%20III%20%20Headshot_outside.jpg',
  },
  adams: {
    campaignUrl: 'https://www.meghann4ca.com/',
    /** Squarespace CDN portrait from campaign site. */
    headshotUrl:
      'https://images.squarespace-cdn.com/content/68519e03e6c94771f7fad93e/37d1605f-4988-4151-aa14-e3cb55c4fced/Profile+Pic+of+Meghann.jpg?format=750w',
  },
  kounalakis: { campaignUrl: 'https://eleniforca.com/' },
  caballero: { campaignUrl: 'https://www.annaforcalifornia.com/' },
  vazquez: {
    campaignUrl: 'https://vazquez4treasurer.com/',
    headshotUrl:
      'https://lh3.googleusercontent.com/-jBi_0JyiWG2MX336W5o3qBqPdPQt29tqevfHZOkS-HnEDR6lMhqegW6KlmnSCL83JT5nU-iWNH0T4MAHVaYyC-RlggWw2xuEA=w713',
  },
  hawks: {
    campaignUrl: 'https://hawksforus.com/',
    headshotUrl: 'https://hawksforus.com/assets/jennifer-hawks-DMG9nxL2.png',
  },
  bonta: { campaignUrl: 'https://robbonta.com/' },
  gates: {
    campaignUrl: 'https://www.gates4ag.com/',
    /** GoDaddy site builder asset (me2.png). */
    headshotUrl: 'https://irp.cdn-website.com/81d43f61/dms3rep/multi/me2.png',
  },
  mikels: {
    campaignUrl: 'https://www.marjoriemikels4justice.com/',
    headshotUrl:
      'https://i0.wp.com/marjoriemikels4justice.com/wp-content/uploads/2026/01/IMG_5150-1.jpg?resize=1152%2C1536&ssl=1',
  },
  allen: { campaignUrl: 'https://www.benallenca.com/' },
  bradford: { campaignUrl: 'https://www.bradfordforcalifornia.com/' },
  kim: { campaignUrl: 'https://www.janekim.org/' },
  wolff: {
    campaignUrl: 'https://patrickwolff.com/',
    headshotUrl:
      'https://images.squarespace-cdn.com/content/v1/68878d1befcef14db0f4f33f/ea2854db-6e55-45ef-ad59-b27262c24df3/Rectangle+146.png',
  },
  howell: {
    campaignUrl: 'https://www.electroberthowell.org/',
    headshotUrl: 'https://www.electroberthowell.org/assets/robert-portrait-C2-__P6-.png',
  },
  farren: {
    campaignUrl: 'https://merrittfarrenca.com/',
    headshotUrl: 'https://www.merrittfarrenca.com/images/merritt-farren.jpg',
  },
  umberg: { campaignUrl: 'https://www.tomumberg.com/' },
  petterson: {
    campaignUrl: 'https://codyforequalization.com/',
    headshotUrl: 'https://codyforequalization.com/assets/images/image56.jpg?v=47b6f6ef',
  },
  arias: {
    campaignUrl: 'https://www.votemartinarias.com/',
    headshotUrl:
      'https://run.imgix.net/280ee4cc-046d-44f1-87f2-9e3ff9b65ce7/13483614-8ba2-4c1d-b465-45ae6e8c0a04/2eaf6115-c733-4564-af5c-a034818a340f.webp?ixlib=js-3.8.0&bri=0&con=0&sat=0&high=0&shad=0&usm=0&rect=0%2C363%2C3074%2C3400&auto=compress%2Cformat&fit=fillmax&w=2048&q=75',
  },
  bilodeau: {
    campaignUrl: 'https://bilodeauforboe.com/',
    headshotUrl: 'https://bilodeauforboe.com/Denis_Bilodeau_1.jpg',
  },
  osborne: {
    campaignUrl: 'https://lp.org/candidate/gardner-c-osborne/',
    /** LP candidate page Open Graph image. */
    headshotUrl: 'https://lp.org/wp-content/uploads/Gardner_Osborne-scaled.jpg',
  },
  peters: { campaignUrl: 'https://www.scottpeters.com/' },
  arnous: {
    campaignUrl: 'https://www.timforsandiego.com/',
    headshotUrl:
      'https://static.wixstatic.com/media/d05541_5437ab1ff4c7465fb632e1edbaf305cd~mv2.jpeg/v1/crop/x_360,y_788,w_2590,h_3244/fill/w_920,h_1400,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/d05541_5437ab1ff4c7465fb632e1edbaf305cd~mv2.jpeg',
  },
  mitra: {
    campaignUrl: 'https://www.sparkymitra.com/',
    headshotUrl:
      'https://static.wixstatic.com/media/9756f7_cc58d05e47a244289dc4831349cc2ed0~mv2.png/v1/crop/x_0,y_827,w_684,h_709/fill/w_534,h_554,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/9756f7_cc58d05e47a244289dc4831349cc2ed0~mv2.png',
  },
  huntington: {
    campaignUrl: 'https://sandiego50.com/',
    /** WordPress media via Jetpack CDN. */
    headshotUrl:
      'https://i0.wp.com/sandiego50.com/wp-content/uploads/2026/02/IMG_7251.jpg?fit=800%2C800&ssl=1',
  },
  elliott: { campaignUrl: 'https://maraelliott.com/' },
  'bruce-lane': {
    campaignUrl: 'https://www.kristiebrucelane.com/',
    headshotUrl: 'https://www.kristiebrucelane.com/wp-content/uploads/2021/05/kristie-1-1.jpg',
  },
  musgrove: {
    campaignUrl: 'https://musgrove4senate.com/',
    headshotUrl:
      'https://musgrove4senate.com/wp-content/uploads/Untitled-design-1-copy-scaled.png',
  },
  ward: { campaignUrl: 'https://voteforward.com/' },
  salguero: {
    campaignUrl: 'https://www.antonioforassembly.com/',
    headshotUrl:
      'https://images.squarespace-cdn.com/content/v1/6975d4299470ca05e68844be/37f41549-92c0-44f9-a182-43f28843b48c/Antonio+Salguero+-+Candidate+Photo+1.jpg?format=750w',
  },
  barrera: {
    campaignUrl: 'https://www.barreraforedu.com/',
    headshotUrl:
      'https://images.squarespace-cdn.com/content/v1/67b0f232273eb817e2f7a289/7d6f111a-19b1-488f-a3cc-7a4cebfb1bce/Portrait-24-Edit_pp.jpeg?format=750w',
  },
  muratsuchi: { campaignUrl: 'https://www.alforcaliforniaschools.com/' },
  newman: {
    campaignUrl: 'https://www.newmanforspi.com/',
    headshotUrl: 'https://newmanforspi.com/wp-content/uploads/2025/04/jn24-18_53083249803_o1920.jpg',
  },
  henderson: {
    campaignUrl: 'https://www.hendersonforcasuperintendent.org/',
    /** Campaign Partner CDN portrait (not in first-paint HTML). */
    headshotUrl: 'https://content.campaignpartner.net/images/139030/IMG_8194.jpg',
  },
  lara: {
    campaignUrl: 'https://frank4caschools.com/',
    headshotUrl:
      'https://static1.squarespace.com/static/68519d413d2669211cea5496/t/68cc597a6644160c0a532761/1758222714877/F82A1096.jpg?format=750w',
  },
  mattammal: {
    campaignUrl: 'https://gusforca.com/',
    /** Wix media; square crop from campaign photo. */
    headshotUrl:
      'https://static.wixstatic.com/media/d17653_e7c4b13782654cfca6b5bfd526995715~mv2.jpg/v1/crop/x_200,y_0,w_800,h_800/fill/w_384,h_384,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Gus-Mattammal.jpg',
  },
  shaw: {
    campaignUrl: 'https://shawforca.com/',
    headshotUrl: 'https://shawforca.com/og.png',
  },
  'cohen-larry': {
    campaignUrl: 'https://www.larry-cohen.com/',
    headshotUrl:
      'https://images.squarespace-cdn.com/content/v1/66db8b0331f574422eef5271/d1044bef-8a60-4a64-ba95-d38f03686cac/IMG_8955.JPG',
  },
  anderson: { campaignUrl: 'https://www.electjoelanderson.com/' },
  nakawatase: {
    campaignUrl: 'https://shirleyforsandiego.com/',
    headshotUrl:
      'https://shirleyforsandiego.com/wp-content/uploads/2026/04/shirley_cutouttrans-topaz-upscale-1.7x-face-denoise-sharpen_bright-683x1024.png',
  },
  roy: {
    campaignUrl: 'https://www.victorroy2026.com/',
    headshotUrl:
      'https://images.squarespace-cdn.com/content/v1/698951d49cf53c1dbfc1f8fe/148de732-d30c-48d3-8ef4-54b7947865e2/IMG_7839.jpg',
  },
  lee: { campaignUrl: 'https://www.kentleeforsd.com/' },
  powell: {
    campaignUrl: 'https://markpowellforcitycouncil.com/',
    headshotUrl:
      'https://images.squarespace-cdn.com/content/v1/6937013f3fc3b3574a6596d7/93097820-ded6-4e20-9a23-80d592e7fb48/Campaign+Photo.jpg?format=750w',
  },
  prior: {
    campaignUrl: 'https://tracypriorforjudge.com/',
    headshotUrl:
      'https://img1.wsimg.com/isteam/ip/c20f0cad-318c-42bb-8b0c-00ddf5a12d3a/Prior_Tracy46fx.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:800,cg:true',
  },
  /** San Diego Superior Court judicial primaries — campaign sites (June 2026). */
  boucek: {
    campaignUrl: 'https://www.boucekforjudge.com/',
    /** Wix portrait asset from campaign site. */
    headshotUrl:
      'https://static.wixstatic.com/media/09c456_6b0352e989944897aee54a87c0c69f81~mv2.png/v1/fill/w_384,h_384,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Leah-Boucek.png',
  },
  cleesattle: {
    campaignUrl: 'https://www.jodiforjudge.com/',
    headshotUrl:
      'https://images.squarespace-cdn.com/content/v1/655296e0df73bc3d971c9184/ea11a9af-2d06-4a16-ad21-50c0d3582951/About+Jodi.jpg',
  },
  noakes: {
    campaignUrl: 'https://adamforjudge2026.com/',
    headshotUrl: 'https://adamforjudge2026.com/wp-content/uploads/2026/02/Headshot-2022.jpg',
  },
  ramirez: {
    campaignUrl: 'https://tiaramirezforjudge.com/',
    /** Official campaign portrait JPEG from tiaramirezforjudge.com. */
    headshotUrl: 'https://tiaramirezforjudge.com/tia-main-photo.jpeg',
  },
  dambrogi: {
    campaignUrl: 'https://dambrogiforjudge.com/',
    headshotUrl: 'https://dambrogiforjudge.com/wp-content/uploads/2026/02/Image-11.jpg',
  },
  gallo: {
    /** Law practice site used in lieu of a separate judge microsite (May 2026). */
    campaignUrl: 'https://davidgallolaw.com/',
    /** Law firm Open Graph portrait. */
    headshotUrl: 'https://davidgallolaw.com/wp-content/uploads/2024/10/gallo2.jpg',
  },
  hauf: {
    campaignUrl: 'https://www.lauriehauf4judge.com/',
    headshotUrl:
      'https://static.wixstatic.com/media/f5fb35_610c014263db4a3a8272e0266d48a007~mv2.png/v1/crop/x_599,y_0,w_1394,h_2000/fill/w_678,h_973,fp_0.50_0.50,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/laurie_hauf_judge.png',
  },
  kiley: { campaignUrl: 'https://www.kevinkiley.com/' },
  ho: {
    campaignUrl: 'https://www.thienhoca.com/',
    headshotUrl:
      'https://run.imgix.net/eaa25bfc-99cf-41c4-a5ed-99ead52f388c/a413af45-79f1-4dcc-9463-81d2fc3afc82/a413af45-79f1-4dcc-9463-81d2fc3afc82.png?ixlib=js-3.8.0&rect=0%2C0%2C1080%2C1080&w=384&q=85',
  },
  pan: { campaignUrl: 'https://www.drpanforcongress.com/' },
  tomlinson: {
    campaignUrl: 'https://www.lbtforcongress.com/',
    headshotUrl:
      'https://run.imgix.net/332da686-f5e1-4020-bf1e-f9c299399394/35b37102-77a3-4c9d-adff-b9186d2ac8bf/35b37102-77a3-4c9d-adff-b9186d2ac8bf.png?ixlib=js-3.8.0&rect=0%2C0%2C3000%2C3000&w=384&q=85',
  },
  niello: {
    campaignUrl: 'https://www.rogerniello.com/',
    headshotUrl: 'https://rogerniello.com/wp-content/uploads/Roger-Niello-Portrait2.jpg',
  },
  frame: {
    campaignUrl: 'https://www.seanframe.com/',
    headshotUrl:
      'https://images.squarespace-cdn.com/content/v1/647b72c7c764774e007801a6/d3f05cfc-d342-4065-926c-5fb4158a3bd3/Sean-Frame-Portraits-%2883%29.jpg?format=750w',
  },
  patterson: { campaignUrl: 'https://ad05.asmrc.org/' },
  parker: {
    campaignUrl: 'https://www.nevaparkerforassembly.com/',
    headshotUrl:
      'https://static.wixstatic.com/media/3fa230_d7d05e0889ba419293c5ef7ba28f9471~mv2.jpg/v1/fill/w_750,h_750,al_c,q_85,usm_0.66_1.00_0.01/3fa230_d7d05e0889ba419293c5ef7ba28f9471~mv2.jpg',
  },
  bass: {
    campaignUrl: 'https://www.bassforjudge.com/',
    headshotUrl: 'https://content.campaignpartner.net/images/151190/Bass_LE_Choices_Website_Bannerv3.png',
  },
  esparza: {
    campaignUrl: 'https://nelsonesparza.com/',
    headshotUrl:
      'https://static.wixstatic.com/media/a37828_aa74f7389a4b4847bb6b2d4fe37f3a87~mv2.jpg/v1/fill/w_750,h_750,al_c,q_85/a37828_aa74f7389a4b4847bb6b2d4fe37f3a87~mv2.jpg',
  },
  dixson: {
    headshotUrl:
      'https://content.app-sources.com/s/530765346606659851/uploads/Judge_Images/DIXSON2026-30_web4_cropped-1980926.jpg?format=webp',
  },
  'garbolino-mojica': {
    headshotUrl:
      'https://i0.wp.com/www.zocalopublicsquare.org/wp-content/uploads/2017/02/Gayle-Garbolino-Mojica-by-Beth-Baugher-e1487381040827.jpg?fit=800%2C800&ssl=1',
  },
  /** LA County / 91501 ballot — campaign sites and headshots (June 2026). */
  gipson: { campaignUrl: 'https://www.mikegipson.com/' },
  friedman: { campaignUrl: 'https://friedman.house.gov/' },
  schultz: { campaignUrl: 'https://www.votenickschultz.com/' },
  menjivar: { campaignUrl: 'https://www.carolinemenjivar.com/' },
  'la-carra': { campaignUrl: 'https://www.robertolacarra.com/' },
  luna: { campaignUrl: 'https://www.robertluna4sheriff.com/' },
  'villaraigosa-sheriff': { campaignUrl: 'https://www.alexvillanueva.com/' },
  white: { campaignUrl: 'https://www.andrewhiteforsheriff.com/' },
  prang: { campaignUrl: 'https://jeffreyprang.com/' },
  adamus: { campaignUrl: 'http://adamusforla.com/' },
  newland: { campaignUrl: 'https://www.robnewlandforassessor.com/' },
  valbuena: { campaignUrl: 'http://www.talforjudge.com/' },
  'irene-lee': { campaignUrl: 'https://www.ireneleeforjudge.com/' },
  ghobadi: { campaignUrl: 'https://mariaghobadi4judge.com/' },
  forer: { campaignUrl: 'https://benforer4judge.com/' },
  walgren: { campaignUrl: 'https://www.walgrenforjudge.com/' },
  bayne: { campaignUrl: 'https://electbayneforjudge.com/' },
  marin: { campaignUrl: 'https://www.gloriamarinforjudge.com/' },
  dibble: { campaignUrl: 'http://www.dibbleforjudge.com/' },
};
