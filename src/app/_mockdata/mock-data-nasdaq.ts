import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {

  let users = [
      {
        id: 11,
        firstName: "Christopher",
        lastName: "Koch",
        role: "B5",
        email: "ckochXlazypug.net",
        userName: "ckoch",
        password: "test",
        token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJsYXp5cHVnLm5ldCIsImlhdCI6MTUzNjE4NzUwMSwiZXhwIjoxNTY3NzIzNTAxLCJhdWQiOiJ3d3cubGF6eXB1Zy5uZXQiLCJzdWIiOiJja29jaEBsYXp5cHVnLm5ldCIsImZpcnN0TmFtZSI6IkNocmlzdG9waGVyIiwiTGFzdE5hbWUiOiJLb2NoIiwiZW1haWwiOiJja29jaEBsYXp5cHVnLm5ldCIsInJvbGUiOiJCNSIsImlkIjoiMTEifQ.UcIStKvZdYqWKho1I1tVta8zNLQD7KpP4n8l93wStEI"
      },
      {
        id: 12,
        firstName: "Rebecca",
        lastName: "Koch",
        role: "B4",
        email: "rkoch@lazypug.net",
        userName: "rkoch",
        password: "test2",
        token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJsYXp5cHVnLm5ldCIsImlhdCI6MTUzNjE4NzUwMSwiZXhwIjoxNTY3NzIzNTAxLCJhdWQiOiJ3d3cubGF6eXB1Zy5uZXQiLCJzdWIiOiJya29jaEBsYXp5cHVnLm5ldCIsImZpcnN0TmFtZSI6IlJlYmVjY2EiLCJMYXN0TmFtZSI6IktvY2giLCJlbWFpbCI6InJrb2NoQGxhenlwdWcubmV0Iiwicm9sZSI6IkI0IiwiaWQiOiIxMiJ9.baXMibtXAEUbbm1Nf4VP0yefFovR2-QHpRqzLQO7CtM"
      },
      {
        id: 13,
        firstName: "Henry",
        lastName: "Koch",
        role: "B2",
        email: "hkoch@lazypug.net",
        userName: "hkoch",
        password: "test3",
        token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJsYXp5cHVnLm5ldCIsImlhdCI6MTUzNjE4NzUwMSwiZXhwIjoxNTY3NzIzNTAxLCJhdWQiOiJ3d3cubGF6eXB1Zy5uZXQiLCJzdWIiOiJoa29jaEBsYXp5cHVnLm5ldCIsImZpcnN0TmFtZSI6IkhlbnJ5IiwiTGFzdE5hbWUiOiJLb2NoIiwiZW1haWwiOiJoa29jaEBsYXp5cHVnLm5ldCIsInJvbGUiOiJCMiIsImlkIjoiMTMifQ.Y6g9h4knKoawHmQEqT9A0UGOwYr4fKENyJ1O3MP6H5g"
      }
  ];

  let watching = [
    {
      id:3,
      symbol: "MSFT"
    },
    {
      id:4,
      symbol: "GOOGL"
    }
  ];

    let nasdaq = [
       {
    "Symbol": "PIH",
    "Name": "1347 Property Insurance Holdings, Inc."
  },
  {
    "Symbol": "PIHPP",
    "Name": "1347 Property Insurance Holdings, Inc."
  },
  {
    "Symbol": "TURN",
    "Name": "180 Degree Capital Corp."
  },
  {
    "Symbol": "FLWS",
    "Name": "1-800 FLOWERS.COM, Inc."
  },
  {
    "Symbol": "FCCY",
    "Name": "1st Constitution Bancorp (NJ)"
  },
  {
    "Symbol": "SRCE",
    "Name": "1st Source Corporation"
  },
  {
    "Symbol": "VNET",
    "Name": "21Vianet Group, Inc."
  },
  {
    "Symbol": "TWOU",
    "Name": "2U, Inc."
  },
  {
    "Symbol": "TPNL",
    "Name": "3PEA International, Inc."
  },
  {
    "Symbol": "JOBS",
    "Name": "51job, Inc."
  },
  {
    "Symbol": "EGHT",
    "Name": "8x8 Inc"
  },
  {
    "Symbol": "AVHI",
    "Name": "A V Homes, Inc."
  },
  {
    "Symbol": "AAON",
    "Name": "AAON, Inc."
  },
  {
    "Symbol": "ABEO",
    "Name": "Abeona Therapeutics Inc."
  },
  {
    "Symbol": "ABEOW",
    "Name": "Abeona Therapeutics Inc."
  },
  {
    "Symbol": "ABIL",
    "Name": "Ability Inc."
  },
  {
    "Symbol": "ABMD",
    "Name": "ABIOMED, Inc."
  },
  {
    "Symbol": "AXAS",
    "Name": "Abraxas Petroleum Corporation"
  },
  {
    "Symbol": "ACIU",
    "Name": "AC Immune SA"
  },
  {
    "Symbol": "ACIA",
    "Name": "Acacia Communications, Inc."
  },
  {
    "Symbol": "ACTG",
    "Name": "Acacia Research Corporation"
  },
  {
    "Symbol": "ACHC",
    "Name": "Acadia Healthcare Company, Inc."
  },
  {
    "Symbol": "ACAD",
    "Name": "ACADIA Pharmaceuticals Inc."
  },
  {
    "Symbol": "ACST",
    "Name": "Acasti Pharma, Inc."
  },
  {
    "Symbol": "AXDX",
    "Name": "Accelerate Diagnostics, Inc."
  },
  {
    "Symbol": "XLRN",
    "Name": "Acceleron Pharma Inc."
  },
  {
    "Symbol": "ANCX",
    "Name": "Access National Corporation"
  },
  {
    "Symbol": "ARAY",
    "Name": "Accuray Incorporated"
  },
  {
    "Symbol": "ACRX",
    "Name": "AcelRx Pharmaceuticals, Inc."
  },
  {
    "Symbol": "ACER",
    "Name": "Acer Therapeutics Inc."
  },
  {
    "Symbol": "ACET",
    "Name": "Aceto Corporation"
  },
  {
    "Symbol": "AKAO",
    "Name": "Achaogen, Inc."
  },
  {
    "Symbol": "ACHV",
    "Name": "Achieve Life Sciences, Inc."
  },
  {
    "Symbol": "ACHN",
    "Name": "Achillion Pharmaceuticals, Inc."
  },
  {
    "Symbol": "ACIW",
    "Name": "ACI Worldwide, Inc."
  },
  {
    "Symbol": "ACRS",
    "Name": "Aclaris Therapeutics, Inc."
  },
  {
    "Symbol": "ACMR",
    "Name": "ACM Research, Inc."
  },
  {
    "Symbol": "ACNB",
    "Name": "ACNB Corporation"
  },
  {
    "Symbol": "ACOR",
    "Name": "Acorda Therapeutics, Inc."
  },
  {
    "Symbol": "ATVI",
    "Name": "Activision Blizzard, Inc"
  },
  {
    "Symbol": "ACXM",
    "Name": "Acxiom Corporation"
  },
  {
    "Symbol": "ADMS",
    "Name": "Adamas Pharmaceuticals, Inc."
  },
  {
    "Symbol": "ADMP",
    "Name": "Adamis Pharmaceuticals Corporation"
  },
  {
    "Symbol": "ADAP",
    "Name": "Adaptimmune Therapeutics plc"
  },
  {
    "Symbol": "ADUS",
    "Name": "Addus HomeCare Corporation"
  },
  {
    "Symbol": "AEY",
    "Name": "ADDvantage Technologies Group, Inc."
  },
  {
    "Symbol": "IOTS",
    "Name": "Adesto Technologies Corporation"
  },
  {
    "Symbol": "ADIL",
    "Name": "Adial Pharmaceuticals, Inc"
  },
  {
    "Symbol": "ADILW",
    "Name": "Adial Pharmaceuticals, Inc"
  },
  {
    "Symbol": "ADMA",
    "Name": "ADMA Biologics Inc"
  },
  {
    "Symbol": "ADBE",
    "Name": "Adobe Systems Incorporated"
  },
  {
    "Symbol": "ADOM",
    "Name": "ADOMANI, Inc."
  },
  {
    "Symbol": "ADTN",
    "Name": "ADTRAN, Inc."
  },
  {
    "Symbol": "ADRO",
    "Name": "Aduro Biotech, Inc."
  },
  {
    "Symbol": "ADES",
    "Name": "Advanced Emissions Solutions, Inc."
  },
  {
    "Symbol": "AEIS",
    "Name": "Advanced Energy Industries, Inc."
  },
  {
    "Symbol": "AMD",
    "Name": "Advanced Micro Devices, Inc."
  },
  {
    "Symbol": "ADXS",
    "Name": "Advaxis, Inc."
  },
  {
    "Symbol": "ADXSW",
    "Name": "Advaxis, Inc."
  },
  {
    "Symbol": "ADVM",
    "Name": "Adverum Biotechnologies, Inc."
  },
  {
    "Symbol": "DWMC",
    "Name": "AdvisorShares Dorsey Wright Micro-Cap ETF"
  },
  {
    "Symbol": "DWSH",
    "Name": "AdvisorShares Dorsey Wright Short ETF"
  },
  {
    "Symbol": "ACT",
    "Name": "AdvisorShares Vice ETF"
  },
  {
    "Symbol": "AEGN",
    "Name": "Aegion Corp"
  },
  {
    "Symbol": "AGLE",
    "Name": "Aeglea BioTherapeutics, Inc."
  },
  {
    "Symbol": "AEHR",
    "Name": "Aehr Test Systems"
  },
  {
    "Symbol": "AMTX",
    "Name": "Aemetis, Inc"
  },
  {
    "Symbol": "AERI",
    "Name": "Aerie Pharmaceuticals, Inc."
  },
  {
    "Symbol": "AVAV",
    "Name": "AeroVironment, Inc."
  },
  {
    "Symbol": "ARPO",
    "Name": "Aerpio Pharmaceuticals, Inc."
  },
  {
    "Symbol": "AEZS",
    "Name": "AEterna Zentaris Inc."
  },
  {
    "Symbol": "AEMD",
    "Name": "Aethlon Medical, Inc."
  },
  {
    "Symbol": "GNMX",
    "Name": "Aevi Genomic Medicine, Inc."
  },
  {
    "Symbol": "AFMD",
    "Name": "Affimed N.V."
  },
  {
    "Symbol": "AGEN",
    "Name": "Agenus Inc."
  },
  {
    "Symbol": "AGRX",
    "Name": "Agile Therapeutics, Inc."
  },
  {
    "Symbol": "AGYS",
    "Name": "Agilysys, Inc."
  },
  {
    "Symbol": "AGIO",
    "Name": "Agios Pharmaceuticals, Inc."
  },
  {
    "Symbol": "AGMH",
    "Name": "AGM Group Holdings Inc."
  },
  {
    "Symbol": "AGNC",
    "Name": "AGNC Investment Corp."
  },
  {
    "Symbol": "AGNCB",
    "Name": "AGNC Investment Corp."
  },
  {
    "Symbol": "AGNCN",
    "Name": "AGNC Investment Corp."
  },
  {
    "Symbol": "AGFS",
    "Name": "AgroFresh Solutions, Inc."
  },
  {
    "Symbol": "AGFSW",
    "Name": "AgroFresh Solutions, Inc."
  },
  {
    "Symbol": "ALRN",
    "Name": "Aileron Therapeutics, Inc."
  },
  {
    "Symbol": "AIMT",
    "Name": "Aimmune Therapeutics, Inc."
  },
  {
    "Symbol": "AIRT",
    "Name": "Air T, Inc."
  },
  {
    "Symbol": "ATSG",
    "Name": "Air Transport Services Group, Inc"
  },
  {
    "Symbol": "AIRG",
    "Name": "Airgain, Inc."
  },
  {
    "Symbol": "AMCN",
    "Name": "AirMedia Group Inc"
  },
  {
    "Symbol": "AKAM",
    "Name": "Akamai Technologies, Inc."
  },
  {
    "Symbol": "AKTX",
    "Name": "Akari Therapeutics Plc"
  },
  {
    "Symbol": "AKCA",
    "Name": "Akcea Therapeutics, Inc."
  },
  {
    "Symbol": "AKBA",
    "Name": "Akebia Therapeutics, Inc."
  },
  {
    "Symbol": "AKER",
    "Name": "Akers Biosciences Inc"
  },
  {
    "Symbol": "AKRX",
    "Name": "Akorn, Inc."
  },
  {
    "Symbol": "AKTS",
    "Name": "Akoustis Technologies, Inc."
  },
  {
    "Symbol": "ALRM",
    "Name": "Alarm.com Holdings, Inc."
  },
  {
    "Symbol": "ALSK",
    "Name": "Alaska Communications Systems Group, Inc."
  },
  {
    "Symbol": "ALBO",
    "Name": "Albireo Pharma, Inc."
  },
  {
    "Symbol": "ABDC",
    "Name": "Alcentra Capital Corp."
  },
  {
    "Symbol": "ALDR",
    "Name": "Alder BioPharmaceuticals, Inc."
  },
  {
    "Symbol": "ALDX",
    "Name": "Aldeyra Therapeutics, Inc."
  },
  {
    "Symbol": "ALXN",
    "Name": "Alexion Pharmaceuticals, Inc."
  },
  {
    "Symbol": "ALCO",
    "Name": "Alico, Inc."
  },
  {
    "Symbol": "ALGN",
    "Name": "Align Technology, Inc."
  },
  {
    "Symbol": "ALIM",
    "Name": "Alimera Sciences, Inc."
  },
  {
    "Symbol": "ALJJ",
    "Name": "ALJ Regional Holdings, Inc."
  },
  {
    "Symbol": "ALKS",
    "Name": "Alkermes plc"
  },
  {
    "Symbol": "ALLK",
    "Name": "Allakos Inc."
  },
  {
    "Symbol": "ABTX",
    "Name": "Allegiance Bancshares, Inc."
  },
  {
    "Symbol": "ALGT",
    "Name": "Allegiant Travel Company"
  },
  {
    "Symbol": "ALGR",
    "Name": "Allegro Merger Corp."
  },
  {
    "Symbol": "ALGRR",
    "Name": "Allegro Merger Corp."
  },
  {
    "Symbol": "ALGRU",
    "Name": "Allegro Merger Corp."
  },
  {
    "Symbol": "ALGRW",
    "Name": "Allegro Merger Corp."
  },
  {
    "Symbol": "ALNA",
    "Name": "Allena Pharmaceuticals, Inc."
  },
  {
    "Symbol": "AMMA",
    "Name": "Alliance MMA, Inc."
  },
  {
    "Symbol": "ARLP",
    "Name": "Alliance Resource Partners, L.P."
  },
  {
    "Symbol": "AHPI",
    "Name": "Allied Healthcare Products, Inc."
  },
  {
    "Symbol": "AMOT",
    "Name": "Allied Motion Technologies, Inc."
  },
  {
    "Symbol": "ALQA",
    "Name": "Alliqua BioMedical, Inc."
  },
  {
    "Symbol": "ALLT",
    "Name": "Allot Communications Ltd."
  },
  {
    "Symbol": "MDRX",
    "Name": "Allscripts Healthcare Solutions, Inc."
  },
  {
    "Symbol": "ALNY",
    "Name": "Alnylam Pharmaceuticals, Inc."
  },
  {
    "Symbol": "AOSL",
    "Name": "Alpha and Omega Semiconductor Limited"
  },
  {
    "Symbol": "GOOG",
    "Name": "Alphabet Inc."
  },
  {
    "Symbol": "GOOGL",
    "Name": "Alphabet Inc."
  },
  {
    "Symbol": "SMCP",
    "Name": "AlphaMark Actively Managed Small Cap ETF"
  },
  {
    "Symbol": "ATEC",
    "Name": "Alphatec Holdings, Inc."
  },
  {
    "Symbol": "ALPN",
    "Name": "Alpine Immune Sciences, Inc."
  },
  {
    "Symbol": "SWIN",
    "Name": "ALPS/Dorsey Wright Sector Momentum ETF"
  },
  {
    "Symbol": "AMR",
    "Name": "Alta Mesa Resources, Inc."
  },
  {
    "Symbol": "AMRWW",
    "Name": "Alta Mesa Resources, Inc."
  },
  {
    "Symbol": "AABA",
    "Name": "Altaba Inc."
  },
  {
    "Symbol": "ALTR",
    "Name": "Altair Engineering Inc."
  },
  {
    "Symbol": "ALT",
    "Name": "Altimmune, Inc."
  },
  {
    "Symbol": "ASPS",
    "Name": "Altisource Portfolio Solutions S.A."
  },
  {
    "Symbol": "AIMC",
    "Name": "Altra Industrial Motion Corp."
  },
  {
    "Symbol": "AMAG",
    "Name": "AMAG Pharmaceuticals, Inc."
  },
  {
    "Symbol": "AMAL",
    "Name": "Amalgamated Bank"
  },
  {
    "Symbol": "AMRN",
    "Name": "Amarin Corporation plc"
  },
  {
    "Symbol": "AMRK",
    "Name": "A-Mark Precious Metals, Inc."
  },
  {
    "Symbol": "AMZN",
    "Name": "Amazon.com, Inc."
  },
  {
    "Symbol": "AMBC",
    "Name": "Ambac Financial Group, Inc."
  },
  {
    "Symbol": "AMBCW",
    "Name": "Ambac Financial Group, Inc."
  },
  {
    "Symbol": "AMBA",
    "Name": "Ambarella, Inc."
  },
  {
    "Symbol": "AMCX",
    "Name": "AMC Networks Inc."
  },
  {
    "Symbol": "DOX",
    "Name": "Amdocs Limited"
  },
  {
    "Symbol": "AMDA",
    "Name": "Amedica Corporation"
  },
  {
    "Symbol": "AMED",
    "Name": "Amedisys Inc"
  },
  {
    "Symbol": "UHAL",
    "Name": "Amerco"
  },
  {
    "Symbol": "AMRH",
    "Name": "Ameri Holdings, Inc."
  },
  {
    "Symbol": "AMRHW",
    "Name": "Ameri Holdings, Inc."
  },
  {
    "Symbol": "ATAX",
    "Name": "America First Multifamily Investors, L.P."
  },
  {
    "Symbol": "AMOV",
    "Name": "America Movil, S.A.B. de C.V."
  },
  {
    "Symbol": "AAL",
    "Name": "American Airlines Group, Inc."
  },
  {
    "Symbol": "AETI",
    "Name": "American Electric Technologies, Inc."
  },
  {
    "Symbol": "AFIN",
    "Name": "American Finance Trust, Inc."
  },
  {
    "Symbol": "AMNB",
    "Name": "American National Bankshares, Inc."
  },
  {
    "Symbol": "ANAT",
    "Name": "American National Insurance Company"
  },
  {
    "Symbol": "AOBC",
    "Name": "American Outdoor Brands Corporation"
  },
  {
    "Symbol": "APEI",
    "Name": "American Public Education, Inc."
  },
  {
    "Symbol": "ARII",
    "Name": "American Railcar Industries, Inc."
  },
  {
    "Symbol": "AMRB",
    "Name": "American River Bankshares"
  },
  {
    "Symbol": "AMSWA",
    "Name": "American Software, Inc."
  },
  {
    "Symbol": "AMSC",
    "Name": "American Superconductor Corporation"
  },
  {
    "Symbol": "AMWD",
    "Name": "American Woodmark Corporation"
  },
  {
    "Symbol": "CRMT",
    "Name": "America&#39;s Car-Mart, Inc."
  },
  {
    "Symbol": "ABCB",
    "Name": "Ameris Bancorp"
  },
  {
    "Symbol": "AMSF",
    "Name": "AMERISAFE, Inc."
  },
  {
    "Symbol": "ASRV",
    "Name": "AmeriServ Financial Inc."
  },
  {
    "Symbol": "ASRVP",
    "Name": "AmeriServ Financial Inc."
  },
  {
    "Symbol": "ATLO",
    "Name": "Ames National Corporation"
  },
  {
    "Symbol": "AMGN",
    "Name": "Amgen Inc."
  },
  {
    "Symbol": "FOLD",
    "Name": "Amicus Therapeutics, Inc."
  },
  {
    "Symbol": "AMKR",
    "Name": "Amkor Technology, Inc."
  },
  {
    "Symbol": "AMPH",
    "Name": "Amphastar Pharmaceuticals, Inc."
  },
  {
    "Symbol": "IBUY",
    "Name": "Amplify Online Retail ETF"
  },
  {
    "Symbol": "ASYS",
    "Name": "Amtech Systems, Inc."
  },
  {
    "Symbol": "AFSI",
    "Name": "AmTrust Financial Services, Inc."
  },
  {
    "Symbol": "AMRS",
    "Name": "Amyris, Inc."
  },
  {
    "Symbol": "ADI",
    "Name": "Analog Devices, Inc."
  },
  {
    "Symbol": "ANAB",
    "Name": "AnaptysBio, Inc."
  },
  {
    "Symbol": "AVXL",
    "Name": "Anavex Life Sciences Corp."
  },
  {
    "Symbol": "ANCB",
    "Name": "Anchor Bancorp"
  },
  {
    "Symbol": "ANGI",
    "Name": "ANGI Homeservices Inc."
  },
  {
    "Symbol": "ANGO",
    "Name": "AngioDynamics, Inc."
  },
  {
    "Symbol": "ANIP",
    "Name": "ANI Pharmaceuticals, Inc."
  },
  {
    "Symbol": "ANIK",
    "Name": "Anika Therapeutics Inc."
  },
  {
    "Symbol": "ANSS",
    "Name": "ANSYS, Inc."
  },
  {
    "Symbol": "ATRS",
    "Name": "Antares Pharma, Inc."
  },
  {
    "Symbol": "APLS",
    "Name": "Apellis Pharmaceuticals, Inc."
  },
  {
    "Symbol": "APOG",
    "Name": "Apogee Enterprises, Inc."
  },
  {
    "Symbol": "APEN",
    "Name": "Apollo Endosurgery, Inc."
  },
  {
    "Symbol": "AINV",
    "Name": "Apollo Investment Corporation"
  },
  {
    "Symbol": "AMEH",
    "Name": "Apollo Medical Holdings, Inc."
  },
  {
    "Symbol": "APPF",
    "Name": "AppFolio, Inc."
  },
  {
    "Symbol": "APPN",
    "Name": "Appian Corporation"
  },
  {
    "Symbol": "AAPL",
    "Name": "Apple Inc."
  },
  {
    "Symbol": "ARCI",
    "Name": "Appliance Recycling Centers of America, Inc."
  },
  {
    "Symbol": "APDN",
    "Name": "Applied DNA Sciences Inc"
  },
  {
    "Symbol": "APDNW",
    "Name": "Applied DNA Sciences Inc"
  },
  {
    "Symbol": "AGTC",
    "Name": "Applied Genetic Technologies Corporation"
  },
  {
    "Symbol": "AMAT",
    "Name": "Applied Materials, Inc."
  },
  {
    "Symbol": "AAOI",
    "Name": "Applied Optoelectronics, Inc."
  },
  {
    "Symbol": "AREX",
    "Name": "Approach Resources Inc."
  },
  {
    "Symbol": "APTI",
    "Name": "Apptio, Inc."
  },
  {
    "Symbol": "APRI",
    "Name": "Apricus Biosciences, Inc."
  },
  {
    "Symbol": "APVO",
    "Name": "Aptevo Therapeutics Inc."
  },
  {
    "Symbol": "APTX",
    "Name": "Aptinyx Inc."
  },
  {
    "Symbol": "APTO",
    "Name": "Aptose Biosciences, Inc."
  },
  {
    "Symbol": "AQMS",
    "Name": "Aqua Metals, Inc."
  },
  {
    "Symbol": "AQB",
    "Name": "AquaBounty Technologies, Inc."
  },
  {
    "Symbol": "AQST",
    "Name": "Aquestive Therapeutics, Inc."
  },
  {
    "Symbol": "AQXP",
    "Name": "Aquinox Pharmaceuticals, Inc."
  },
  {
    "Symbol": "ARDM",
    "Name": "Aradigm Corporation"
  },
  {
    "Symbol": "PETX",
    "Name": "Aratana Therapeutics, Inc."
  },
  {
    "Symbol": "ABUS",
    "Name": "Arbutus Biopharma Corporation"
  },
  {
    "Symbol": "ARCW",
    "Name": "ARC Group Worldwide, Inc."
  },
  {
    "Symbol": "ABIO",
    "Name": "ARCA biopharma, Inc."
  },
  {
    "Symbol": "RKDA",
    "Name": "Arcadia Biosciences, Inc."
  },
  {
    "Symbol": "ARCB",
    "Name": "ArcBest Corporation"
  },
  {
    "Symbol": "ACGL",
    "Name": "Arch Capital Group Ltd."
  },
  {
    "Symbol": "ACGLO",
    "Name": "Arch Capital Group Ltd."
  },
  {
    "Symbol": "ACGLP",
    "Name": "Arch Capital Group Ltd."
  },
  {
    "Symbol": "FUV",
    "Name": "Arcimoto, Inc."
  },
  {
    "Symbol": "ARCT",
    "Name": "Arcturus Therapeutics Ltd."
  },
  {
    "Symbol": "ARDX",
    "Name": "Ardelyx, Inc."
  },
  {
    "Symbol": "ARNA",
    "Name": "Arena Pharmaceuticals, Inc."
  },
  {
    "Symbol": "ARCC",
    "Name": "Ares Capital Corporation"
  },
  {
    "Symbol": "ARGX",
    "Name": "argenx SE"
  },
  {
    "Symbol": "ARDS",
    "Name": "Aridis Pharmaceuticals Inc."
  },
  {
    "Symbol": "ARKR",
    "Name": "Ark Restaurants Corp."
  },
  {
    "Symbol": "ARTX",
    "Name": "Arotech Corporation"
  },
  {
    "Symbol": "ARQL",
    "Name": "ArQule, Inc."
  },
  {
    "Symbol": "ARRY",
    "Name": "Array BioPharma Inc."
  },
  {
    "Symbol": "ARRS",
    "Name": "ARRIS International plc"
  },
  {
    "Symbol": "DWCR",
    "Name": "Arrow DWA Country Rotation ETF"
  },
  {
    "Symbol": "DWAT",
    "Name": "Arrow DWA Tactical ETF"
  },
  {
    "Symbol": "AROW",
    "Name": "Arrow Financial Corporation"
  },
  {
    "Symbol": "ARWR",
    "Name": "Arrowhead Pharmaceuticals, Inc."
  },
  {
    "Symbol": "ASNS",
    "Name": "Arsanis, Inc."
  },
  {
    "Symbol": "ARTNA",
    "Name": "Artesian Resources Corporation"
  },
  {
    "Symbol": "ARTW",
    "Name": "Art&#39;s-Way Manufacturing Co., Inc."
  },
  {
    "Symbol": "ASNA",
    "Name": "Ascena Retail Group, Inc."
  },
  {
    "Symbol": "ASND",
    "Name": "Ascendis Pharma A/S"
  },
  {
    "Symbol": "ASCMA",
    "Name": "Ascent Capital Group, Inc."
  },
  {
    "Symbol": "APWC",
    "Name": "Asia Pacific Wire & Cable Corporation Limited"
  },
  {
    "Symbol": "ASLN",
    "Name": "ASLAN Pharmaceuticals Limited"
  },
  {
    "Symbol": "ASML",
    "Name": "ASML Holding N.V."
  },
  {
    "Symbol": "ASPU",
    "Name": "Aspen Group Inc."
  },
  {
    "Symbol": "AZPN",
    "Name": "Aspen Technology, Inc."
  },
  {
    "Symbol": "ASMB",
    "Name": "Assembly Biosciences, Inc."
  },
  {
    "Symbol": "ASRT",
    "Name": "Assertio Therapeutics, Inc."
  },
  {
    "Symbol": "ASFI",
    "Name": "Asta Funding, Inc."
  },
  {
    "Symbol": "ASTE",
    "Name": "Astec Industries, Inc."
  },
  {
    "Symbol": "ATRO",
    "Name": "Astronics Corporation"
  },
  {
    "Symbol": "ALOT",
    "Name": "AstroNova, Inc."
  },
  {
    "Symbol": "ASTC",
    "Name": "Astrotech Corporation"
  },
  {
    "Symbol": "ASUR",
    "Name": "Asure Software Inc"
  },
  {
    "Symbol": "ASV",
    "Name": "ASV Holdings, Inc."
  },
  {
    "Symbol": "ATAI",
    "Name": "ATA Inc."
  },
  {
    "Symbol": "ATRA",
    "Name": "Atara Biotherapeutics, Inc."
  },
  {
    "Symbol": "ATHN",
    "Name": "athenahealth, Inc."
  },
  {
    "Symbol": "ATNX",
    "Name": "Athenex, Inc."
  },
  {
    "Symbol": "ATHX",
    "Name": "Athersys, Inc."
  },
  {
    "Symbol": "AAME",
    "Name": "Atlantic American Corporation"
  },
  {
    "Symbol": "ACBI",
    "Name": "Atlantic Capital Bancshares, Inc."
  },
  {
    "Symbol": "AY",
    "Name": "Atlantica Yield plc"
  },
  {
    "Symbol": "ATLC",
    "Name": "Atlanticus Holdings Corporation"
  },
  {
    "Symbol": "AAWW",
    "Name": "Atlas Air Worldwide Holdings"
  },
  {
    "Symbol": "AFH",
    "Name": "Atlas Financial Holdings, Inc."
  },
  {
    "Symbol": "AFHBL",
    "Name": "Atlas Financial Holdings, Inc."
  },
  {
    "Symbol": "TEAM",
    "Name": "Atlassian Corporation Plc"
  },
  {
    "Symbol": "ATNI",
    "Name": "ATN International, Inc."
  },
  {
    "Symbol": "ATOM",
    "Name": "Atomera Incorporated"
  },
  {
    "Symbol": "ATOS",
    "Name": "Atossa Genetics Inc."
  },
  {
    "Symbol": "ATRC",
    "Name": "AtriCure, Inc."
  },
  {
    "Symbol": "ATRI",
    "Name": "Atrion Corporation"
  },
  {
    "Symbol": "ATIS",
    "Name": "Attis Industries Inc."
  },
  {
    "Symbol": "ATISW",
    "Name": "Attis Industries Inc."
  },
  {
    "Symbol": "ATTU",
    "Name": "Attunity Ltd."
  },
  {
    "Symbol": "LIFE",
    "Name": "aTyr Pharma, Inc."
  },
  {
    "Symbol": "AUBN",
    "Name": "Auburn National Bancorporation, Inc."
  },
  {
    "Symbol": "BOLD",
    "Name": "Audentes Therapeutics, Inc."
  },
  {
    "Symbol": "AUDC",
    "Name": "AudioCodes Ltd."
  },
  {
    "Symbol": "AEYE",
    "Name": "AudioEye, Inc."
  },
  {
    "Symbol": "AUPH",
    "Name": "Aurinia Pharmaceuticals Inc"
  },
  {
    "Symbol": "EARS",
    "Name": "Auris Medical Holding AG"
  },
  {
    "Symbol": "JG",
    "Name": "Aurora Mobile Limited"
  },
  {
    "Symbol": "ADSK",
    "Name": "Autodesk, Inc."
  },
  {
    "Symbol": "AUTL",
    "Name": "Autolus Therapeutics plc"
  },
  {
    "Symbol": "ADP",
    "Name": "Automatic Data Processing, Inc."
  },
  {
    "Symbol": "AUTO",
    "Name": "AutoWeb, Inc."
  },
  {
    "Symbol": "AVDL",
    "Name": "Avadel Pharmaceuticals plc"
  },
  {
    "Symbol": "ATXI",
    "Name": "Avenue Therapeutics, Inc."
  },
  {
    "Symbol": "AVEO",
    "Name": "AVEO Pharmaceuticals, Inc."
  },
  {
    "Symbol": "AVNW",
    "Name": "Aviat Networks, Inc."
  },
  {
    "Symbol": "CDMO",
    "Name": "Avid Bioservices, Inc."
  },
  {
    "Symbol": "CDMOP",
    "Name": "Avid Bioservices, Inc."
  },
  {
    "Symbol": "AVID",
    "Name": "Avid Technology, Inc."
  },
  {
    "Symbol": "AVGR",
    "Name": "Avinger, Inc."
  },
  {
    "Symbol": "CAR",
    "Name": "Avis Budget Group, Inc."
  },
  {
    "Symbol": "AHPA",
    "Name": "Avista Healthcare Public Acquisition Corp."
  },
  {
    "Symbol": "AHPAU",
    "Name": "Avista Healthcare Public Acquisition Corp."
  },
  {
    "Symbol": "AHPAW",
    "Name": "Avista Healthcare Public Acquisition Corp."
  },
  {
    "Symbol": "AVT",
    "Name": "Avnet, Inc."
  },
  {
    "Symbol": "AVRO",
    "Name": "AVROBIO, Inc."
  },
  {
    "Symbol": "AWRE",
    "Name": "Aware, Inc."
  },
  {
    "Symbol": "ACLS",
    "Name": "Axcelis Technologies, Inc."
  },
  {
    "Symbol": "AXGN",
    "Name": "AxoGen, Inc."
  },
  {
    "Symbol": "AAXN",
    "Name": "Axon Enterprise, Inc."
  },
  {
    "Symbol": "AXON",
    "Name": "Axovant Sciences Ltd."
  },
  {
    "Symbol": "AXSM",
    "Name": "Axsome Therapeutics, Inc."
  },
  {
    "Symbol": "AXTI",
    "Name": "AXT Inc"
  },
  {
    "Symbol": "AYTU",
    "Name": "Aytu BioScience, Inc."
  },
  {
    "Symbol": "AZRX",
    "Name": "AzurRx BioPharma, Inc."
  },
  {
    "Symbol": "BCOM",
    "Name": "B Communications Ltd."
  },
  {
    "Symbol": "RILY",
    "Name": "B. Riley Financial, Inc."
  },
  {
    "Symbol": "RILYG",
    "Name": "B. Riley Financial, Inc."
  },
  {
    "Symbol": "RILYH",
    "Name": "B. Riley Financial, Inc."
  },
  {
    "Symbol": "RILYL",
    "Name": "B. Riley Financial, Inc."
  },
  {
    "Symbol": "RILYZ",
    "Name": "B. Riley Financial, Inc."
  },
  {
    "Symbol": "BOSC",
    "Name": "B.O.S. Better Online Solutions"
  },
  {
    "Symbol": "BIDU",
    "Name": "Baidu, Inc."
  },
  {
    "Symbol": "BCPC",
    "Name": "Balchem Corporation"
  },
  {
    "Symbol": "BLDP",
    "Name": "Ballard Power Systems, Inc."
  },
  {
    "Symbol": "BANF",
    "Name": "BancFirst Corporation"
  },
  {
    "Symbol": "BANFP",
    "Name": "BancFirst Corporation"
  },
  {
    "Symbol": "BCTF",
    "Name": "Bancorp 34, Inc."
  },
  {
    "Symbol": "BAND",
    "Name": "Bandwidth Inc."
  },
  {
    "Symbol": "BOCH",
    "Name": "Bank of Commerce Holdings (CA)"
  },
  {
    "Symbol": "BMRC",
    "Name": "Bank of Marin Bancorp"
  },
  {
    "Symbol": "BMLP",
    "Name": "Bank Of Montreal"
  },
  {
    "Symbol": "BKSC",
    "Name": "Bank of South Carolina Corp."
  },
  {
    "Symbol": "BOTJ",
    "Name": "Bank of the James Financial Group, Inc."
  },
  {
    "Symbol": "OZK",
    "Name": "Bank OZK"
  },
  {
    "Symbol": "BFIN",
    "Name": "BankFinancial Corporation"
  },
  {
    "Symbol": "BWFG",
    "Name": "Bankwell Financial Group, Inc."
  },
  {
    "Symbol": "BANR",
    "Name": "Banner Corporation"
  },
  {
    "Symbol": "BZUN",
    "Name": "Baozun Inc."
  },
  {
    "Symbol": "DFVL",
    "Name": "Barclays PLC"
  },
  {
    "Symbol": "DFVS",
    "Name": "Barclays PLC"
  },
  {
    "Symbol": "DLBL",
    "Name": "Barclays PLC"
  },
  {
    "Symbol": "DLBS",
    "Name": "Barclays PLC"
  },
  {
    "Symbol": "DTUL",
    "Name": "Barclays PLC"
  },
  {
    "Symbol": "DTUS",
    "Name": "Barclays PLC"
  },
  {
    "Symbol": "DTYL",
    "Name": "Barclays PLC"
  },
  {
    "Symbol": "DTYS",
    "Name": "Barclays PLC"
  },
  {
    "Symbol": "FLAT",
    "Name": "Barclays PLC"
  },
  {
    "Symbol": "STPP",
    "Name": "Barclays PLC"
  },
  {
    "Symbol": "TAPR",
    "Name": "Barclays PLC"
  },
  {
    "Symbol": "BHAC",
    "Name": "Barington/Hilco Acquisition Corp."
  },
  {
    "Symbol": "BHACR",
    "Name": "Barington/Hilco Acquisition Corp."
  },
  {
    "Symbol": "BHACU",
    "Name": "Barington/Hilco Acquisition Corp."
  },
  {
    "Symbol": "BHACW",
    "Name": "Barington/Hilco Acquisition Corp."
  },
  {
    "Symbol": "BBSI",
    "Name": "Barrett Business Services, Inc."
  },
  {
    "Symbol": "BSET",
    "Name": "Bassett Furniture Industries, Incorporated"
  },
  {
    "Symbol": "ZTEST",
    "Name": "BATS BZX Exchange"
  },
  {
    "Symbol": "BCML",
    "Name": "BayCom Corp"
  },
  {
    "Symbol": "BCBP",
    "Name": "BCB Bancorp, Inc. (NJ)"
  },
  {
    "Symbol": "BECN",
    "Name": "Beacon Roofing Supply, Inc."
  },
  {
    "Symbol": "BBGI",
    "Name": "Beasley Broadcast Group, Inc."
  },
  {
    "Symbol": "BBBY",
    "Name": "Bed Bath & Beyond Inc."
  },
  {
    "Symbol": "BGNE",
    "Name": "BeiGene, Ltd."
  },
  {
    "Symbol": "BELFA",
    "Name": "Bel Fuse Inc."
  },
  {
    "Symbol": "BELFB",
    "Name": "Bel Fuse Inc."
  },
  {
    "Symbol": "BLPH",
    "Name": "Bellerophon Therapeutics, Inc."
  },
  {
    "Symbol": "BLCM",
    "Name": "Bellicum Pharmaceuticals, Inc."
  },
  {
    "Symbol": "BNCL",
    "Name": "Beneficial Bancorp, Inc."
  },
  {
    "Symbol": "BNFT",
    "Name": "Benefitfocus, Inc."
  },
  {
    "Symbol": "BNTC",
    "Name": "Benitec Biopharma Limited"
  },
  {
    "Symbol": "BNTCW",
    "Name": "Benitec Biopharma Limited"
  },
  {
    "Symbol": "BRY",
    "Name": "Berry Petroleum Corporation"
  },
  {
    "Symbol": "BYSI",
    "Name": "BeyondSpring, Inc."
  },
  {
    "Symbol": "BGCP",
    "Name": "BGC Partners, Inc."
  },
  {
    "Symbol": "BGFV",
    "Name": "Big 5 Sporting Goods Corporation"
  },
  {
    "Symbol": "BRPA",
    "Name": "Big Rock Partners Acquisition Corp."
  },
  {
    "Symbol": "BRPAR",
    "Name": "Big Rock Partners Acquisition Corp."
  },
  {
    "Symbol": "BRPAU",
    "Name": "Big Rock Partners Acquisition Corp."
  },
  {
    "Symbol": "BRPAW",
    "Name": "Big Rock Partners Acquisition Corp."
  },
  {
    "Symbol": "BILI",
    "Name": "Bilibili Inc."
  },
  {
    "Symbol": "BASI",
    "Name": "Bioanalytical Systems, Inc."
  },
  {
    "Symbol": "ORPN",
    "Name": "Bioblast Pharma Ltd."
  },
  {
    "Symbol": "BIOC",
    "Name": "Biocept, Inc."
  },
  {
    "Symbol": "BCRX",
    "Name": "BioCryst Pharmaceuticals, Inc."
  },
  {
    "Symbol": "BDSI",
    "Name": "BioDelivery Sciences International, Inc."
  },
  {
    "Symbol": "BFRA",
    "Name": "Biofrontera AG"
  },
  {
    "Symbol": "BIIB",
    "Name": "Biogen Inc."
  },
  {
    "Symbol": "BHTG",
    "Name": "BioHiTech Global, Inc."
  },
  {
    "Symbol": "BKYI",
    "Name": "BIO-key International, Inc."
  },
  {
    "Symbol": "BIOL",
    "Name": "Biolase, Inc."
  },
  {
    "Symbol": "BLFS",
    "Name": "BioLife Solutions, Inc."
  },
  {
    "Symbol": "BLRX",
    "Name": "BioLineRx Ltd."
  },
  {
    "Symbol": "BMRN",
    "Name": "BioMarin Pharmaceutical Inc."
  },
  {
    "Symbol": "BMRA",
    "Name": "Biomerica, Inc."
  },
  {
    "Symbol": "BNGO",
    "Name": "Bionano Genomics, Inc."
  },
  {
    "Symbol": "BNGOU",
    "Name": "Bionano Genomics, Inc."
  },
  {
    "Symbol": "BVXV",
    "Name": "BiondVax Pharmaceuticals Ltd."
  },
  {
    "Symbol": "BVXVW",
    "Name": "BiondVax Pharmaceuticals Ltd."
  },
  {
    "Symbol": "BPTH",
    "Name": "Bio-Path Holdings, Inc."
  },
  {
    "Symbol": "BIOS",
    "Name": "BioScrip, Inc."
  },
  {
    "Symbol": "BSTC",
    "Name": "BioSpecifics Technologies Corp"
  },
  {
    "Symbol": "BSPM",
    "Name": "Biostar Pharmaceuticals, Inc."
  },
  {
    "Symbol": "TECH",
    "Name": "Bio-Techne Corp"
  },
  {
    "Symbol": "BEAT",
    "Name": "BioTelemetry, Inc."
  },
  {
    "Symbol": "BTAI",
    "Name": "BioXcel Therapeutics, Inc."
  },
  {
    "Symbol": "BCAC",
    "Name": "Bison Capital Acquisition Corp."
  },
  {
    "Symbol": "BCACR",
    "Name": "Bison Capital Acquisition Corp."
  },
  {
    "Symbol": "BCACU",
    "Name": "Bison Capital Acquisition Corp."
  },
  {
    "Symbol": "BCACW",
    "Name": "Bison Capital Acquisition Corp."
  },
  {
    "Symbol": "BJRI",
    "Name": "BJ&#39;s Restaurants, Inc."
  },
  {
    "Symbol": "BBOX",
    "Name": "Black Box Corporation"
  },
  {
    "Symbol": "BRAC",
    "Name": "Black Ridge Acquisition Corp."
  },
  {
    "Symbol": "BRACR",
    "Name": "Black Ridge Acquisition Corp."
  },
  {
    "Symbol": "BRACU",
    "Name": "Black Ridge Acquisition Corp."
  },
  {
    "Symbol": "BRACW",
    "Name": "Black Ridge Acquisition Corp."
  },
  {
    "Symbol": "BLKB",
    "Name": "Blackbaud, Inc."
  },
  {
    "Symbol": "BL",
    "Name": "BlackLine, Inc."
  },
  {
    "Symbol": "BKCC",
    "Name": "BlackRock Capital Investment Corporation"
  },
  {
    "Symbol": "TCPC",
    "Name": "BlackRock TCP Capital Corp."
  },
  {
    "Symbol": "BLNK",
    "Name": "Blink Charging Co."
  },
  {
    "Symbol": "BLNKW",
    "Name": "Blink Charging Co."
  },
  {
    "Symbol": "BLMN",
    "Name": "Bloomin&#39; Brands, Inc."
  },
  {
    "Symbol": "BCOR",
    "Name": "Blucora, Inc."
  },
  {
    "Symbol": "BLBD",
    "Name": "Blue Bird Corporation"
  },
  {
    "Symbol": "BHBK",
    "Name": "Blue Hills Bancorp, Inc."
  },
  {
    "Symbol": "BLUE",
    "Name": "bluebird bio, Inc."
  },
  {
    "Symbol": "BKEP",
    "Name": "Blueknight Energy Partners L.P., L.L.C."
  },
  {
    "Symbol": "BKEPP",
    "Name": "Blueknight Energy Partners L.P., L.L.C."
  },
  {
    "Symbol": "BPMC",
    "Name": "Blueprint Medicines Corporation"
  },
  {
    "Symbol": "ITEQ",
    "Name": "BlueStar Israel Technology ETF"
  },
  {
    "Symbol": "BMCH",
    "Name": "BMC Stock Holdings, Inc."
  },
  {
    "Symbol": "BOFI",
    "Name": "BofI Holding, Inc."
  },
  {
    "Symbol": "BOFIL",
    "Name": "BofI Holding, Inc."
  },
  {
    "Symbol": "WIFI",
    "Name": "Boingo Wireless, Inc."
  },
  {
    "Symbol": "BOJA",
    "Name": "Bojangles&#39;, Inc."
  },
  {
    "Symbol": "BOKF",
    "Name": "BOK Financial Corporation"
  },
  {
    "Symbol": "BOKFL",
    "Name": "BOK Financial Corporation"
  },
  {
    "Symbol": "BNSO",
    "Name": "Bonso Electronics International, Inc."
  },
  {
    "Symbol": "BKNG",
    "Name": "Booking Holdings Inc."
  },
  {
    "Symbol": "BRQS",
    "Name": "Borqs Technologies, Inc."
  },
  {
    "Symbol": "BOMN",
    "Name": "Boston Omaha Corporation"
  },
  {
    "Symbol": "BPFH",
    "Name": "Boston Private Financial Holdings, Inc."
  },
  {
    "Symbol": "BPFHW",
    "Name": "Boston Private Financial Holdings, Inc."
  },
  {
    "Symbol": "EPAY",
    "Name": "Bottomline Technologies, Inc."
  },
  {
    "Symbol": "BOXL",
    "Name": "Boxlight Corporation"
  },
  {
    "Symbol": "BCLI",
    "Name": "Brainstorm Cell Therapeutics Inc."
  },
  {
    "Symbol": "BVNSC",
    "Name": "Brandes Investment Trust"
  },
  {
    "Symbol": "BDGE",
    "Name": "Bridge Bancorp, Inc."
  },
  {
    "Symbol": "BLIN",
    "Name": "Bridgeline Digital, Inc."
  },
  {
    "Symbol": "BWB",
    "Name": "Bridgewater Bancshares, Inc."
  },
  {
    "Symbol": "BRID",
    "Name": "Bridgford Foods Corporation"
  },
  {
    "Symbol": "BCOV",
    "Name": "Brightcove Inc."
  },
  {
    "Symbol": "BHF",
    "Name": "Brighthouse Financial, Inc."
  },
  {
    "Symbol": "AVGO",
    "Name": "Broadcom Inc."
  },
  {
    "Symbol": "BVSN",
    "Name": "BroadVision, Inc."
  },
  {
    "Symbol": "BYFC",
    "Name": "Broadway Financial Corporation"
  },
  {
    "Symbol": "BWEN",
    "Name": "Broadwind Energy, Inc."
  },
  {
    "Symbol": "BPY",
    "Name": "Brookfield Property Partners L.P."
  },
  {
    "Symbol": "BPR",
    "Name": "Brookfield Property REIT Inc."
  },
  {
    "Symbol": "BPRAP",
    "Name": "Brookfield Property REIT Inc."
  },
  {
    "Symbol": "BRKL",
    "Name": "Brookline Bancorp, Inc."
  },
  {
    "Symbol": "BRKS",
    "Name": "Brooks Automation, Inc."
  },
  {
    "Symbol": "BRKR",
    "Name": "Bruker Corporation"
  },
  {
    "Symbol": "BMTC",
    "Name": "Bryn Mawr Bank Corporation"
  },
  {
    "Symbol": "BLMT",
    "Name": "BSB Bancorp, Inc."
  },
  {
    "Symbol": "BSQR",
    "Name": "BSQUARE Corporation"
  },
  {
    "Symbol": "BLDR",
    "Name": "Builders FirstSource, Inc."
  },
  {
    "Symbol": "BFST",
    "Name": "Business First Bancshares, Inc."
  },
  {
    "Symbol": "CFFI",
    "Name": "C&F Financial Corporation"
  },
  {
    "Symbol": "CHRW",
    "Name": "C.H. Robinson Worldwide, Inc."
  },
  {
    "Symbol": "CA",
    "Name": "CA Inc."
  },
  {
    "Symbol": "CCMP",
    "Name": "Cabot Microelectronics Corporation"
  },
  {
    "Symbol": "CDNS",
    "Name": "Cadence Design Systems, Inc."
  },
  {
    "Symbol": "CDZI",
    "Name": "Cadiz, Inc."
  },
  {
    "Symbol": "CZR",
    "Name": "Caesars Entertainment Corporation"
  },
  {
    "Symbol": "CSTE",
    "Name": "Caesarstone Ltd."
  },
  {
    "Symbol": "PRSS",
    "Name": "CafePress Inc."
  },
  {
    "Symbol": "CLBS",
    "Name": "Caladrius Biosciences, Inc."
  },
  {
    "Symbol": "CHY",
    "Name": "Calamos Convertible and High Income Fund"
  },
  {
    "Symbol": "CHI",
    "Name": "Calamos Convertible Opportunities and Income Fund"
  },
  {
    "Symbol": "CCD",
    "Name": "Calamos Dynamic Convertible & Income Fund"
  },
  {
    "Symbol": "CHW",
    "Name": "Calamos Global Dynamic Income Fund"
  },
  {
    "Symbol": "CGO",
    "Name": "Calamos Global Total Return Fund"
  },
  {
    "Symbol": "CSQ",
    "Name": "Calamos Strategic Total Return Fund"
  },
  {
    "Symbol": "CAMP",
    "Name": "CalAmp Corp."
  },
  {
    "Symbol": "CVGW",
    "Name": "Calavo Growers, Inc."
  },
  {
    "Symbol": "CALA",
    "Name": "Calithera Biosciences, Inc."
  },
  {
    "Symbol": "CALM",
    "Name": "Cal-Maine Foods, Inc."
  },
  {
    "Symbol": "CLMT",
    "Name": "Calumet Specialty Products Partners, L.P."
  },
  {
    "Symbol": "CRUSC",
    "Name": "Calvert Management Series"
  },
  {
    "Symbol": "CLXT",
    "Name": "Calyxt, Inc."
  },
  {
    "Symbol": "ABCD",
    "Name": "Cambium Learning Group, Inc."
  },
  {
    "Symbol": "CATC",
    "Name": "Cambridge Bancorp"
  },
  {
    "Symbol": "CAC",
    "Name": "Camden National Corporation"
  },
  {
    "Symbol": "CAMT",
    "Name": "Camtek Ltd."
  },
  {
    "Symbol": "CSIQ",
    "Name": "Canadian Solar Inc."
  },
  {
    "Symbol": "CGIX",
    "Name": "Cancer Genetics, Inc."
  },
  {
    "Symbol": "CPHC",
    "Name": "Canterbury Park Holding Corporation"
  },
  {
    "Symbol": "CCBG",
    "Name": "Capital City Bank Group"
  },
  {
    "Symbol": "CPLP",
    "Name": "Capital Product Partners L.P."
  },
  {
    "Symbol": "CSWC",
    "Name": "Capital Southwest Corporation"
  },
  {
    "Symbol": "CSWCL",
    "Name": "Capital Southwest Corporation"
  },
  {
    "Symbol": "CPTA",
    "Name": "Capitala Finance Corp."
  },
  {
    "Symbol": "CPTAG",
    "Name": "Capitala Finance Corp."
  },
  {
    "Symbol": "CPTAL",
    "Name": "Capitala Finance Corp."
  },
  {
    "Symbol": "CFFN",
    "Name": "Capitol Federal Financial, Inc."
  },
  {
    "Symbol": "CAPR",
    "Name": "Capricor Therapeutics, Inc."
  },
  {
    "Symbol": "CSTR",
    "Name": "CapStar Financial Holdings, Inc."
  },
  {
    "Symbol": "CPST",
    "Name": "Capstone Turbine Corporation"
  },
  {
    "Symbol": "CARA",
    "Name": "Cara Therapeutics, Inc."
  },
  {
    "Symbol": "CBLK",
    "Name": "Carbon Black, Inc."
  },
  {
    "Symbol": "CARB",
    "Name": "Carbonite, Inc."
  },
  {
    "Symbol": "CSII",
    "Name": "Cardiovascular Systems, Inc."
  },
  {
    "Symbol": "CDLX",
    "Name": "Cardlytics, Inc."
  },
  {
    "Symbol": "CATM",
    "Name": "Cardtronics plc"
  },
  {
    "Symbol": "CDNA",
    "Name": "CareDx, Inc."
  },
  {
    "Symbol": "CECO",
    "Name": "Career Education Corporation"
  },
  {
    "Symbol": "CTRE",
    "Name": "CareTrust REIT, Inc."
  },
  {
    "Symbol": "CARG",
    "Name": "CarGurus, Inc."
  },
  {
    "Symbol": "CARO",
    "Name": "Carolina Financial Corporation"
  },
  {
    "Symbol": "CART",
    "Name": "Carolina Trust BancShares, Inc."
  },
  {
    "Symbol": "CRZO",
    "Name": "Carrizo Oil & Gas, Inc."
  },
  {
    "Symbol": "TAST",
    "Name": "Carrols Restaurant Group, Inc."
  },
  {
    "Symbol": "CARV",
    "Name": "Carver Bancorp, Inc."
  },
  {
    "Symbol": "CASM",
    "Name": "CAS Medical Systems, Inc."
  },
  {
    "Symbol": "CASA",
    "Name": "Casa Systems, Inc."
  },
  {
    "Symbol": "CWST",
    "Name": "Casella Waste Systems, Inc."
  },
  {
    "Symbol": "CASY",
    "Name": "Caseys General Stores, Inc."
  },
  {
    "Symbol": "CASI",
    "Name": "CASI Pharmaceuticals, Inc."
  },
  {
    "Symbol": "CASS",
    "Name": "Cass Information Systems, Inc"
  },
  {
    "Symbol": "CATB",
    "Name": "Catabasis Pharmaceuticals, Inc."
  },
  {
    "Symbol": "CBIO",
    "Name": "Catalyst Biosciences, Inc."
  },
  {
    "Symbol": "CPRX",
    "Name": "Catalyst Pharmaceuticals, Inc."
  },
  {
    "Symbol": "CATS",
    "Name": "Catasys, Inc."
  },
  {
    "Symbol": "CATY",
    "Name": "Cathay General Bancorp"
  },
  {
    "Symbol": "CATYW",
    "Name": "Cathay General Bancorp"
  },
  {
    "Symbol": "CGVIC",
    "Name": "Causeway ETMF Trust"
  },
  {
    "Symbol": "CIVEC",
    "Name": "Causeway ETMF Trust"
  },
  {
    "Symbol": "CVCO",
    "Name": "Cavco Industries, Inc."
  },
  {
    "Symbol": "CBFV",
    "Name": "CB Financial Services, Inc."
  },
  {
    "Symbol": "CBAK",
    "Name": "CBAK Energy Technology, Inc."
  },
  {
    "Symbol": "CBOE",
    "Name": "Cboe Global Markets, Inc."
  },
  {
    "Symbol": "CBTX",
    "Name": "CBTX, Inc."
  },
  {
    "Symbol": "CDK",
    "Name": "CDK Global, Inc."
  },
  {
    "Symbol": "CDTI",
    "Name": "CDTI Advanced Materials, Inc."
  },
  {
    "Symbol": "CDW",
    "Name": "CDW Corporation"
  },
  {
    "Symbol": "CECE",
    "Name": "CECO Environmental Corp."
  },
  {
    "Symbol": "CELC",
    "Name": "Celcuity Inc."
  },
  {
    "Symbol": "CELG",
    "Name": "Celgene Corporation"
  },
  {
    "Symbol": "CELGZ",
    "Name": "Celgene Corporation"
  },
  {
    "Symbol": "CLDX",
    "Name": "Celldex Therapeutics, Inc."
  },
  {
    "Symbol": "APOP",
    "Name": "Cellect Biotechnology Ltd."
  },
  {
    "Symbol": "APOPW",
    "Name": "Cellect Biotechnology Ltd."
  },
  {
    "Symbol": "CLRB",
    "Name": "Cellectar Biosciences, Inc."
  },
  {
    "Symbol": "CLRBW",
    "Name": "Cellectar Biosciences, Inc."
  },
  {
    "Symbol": "CLRBZ",
    "Name": "Cellectar Biosciences, Inc."
  },
  {
    "Symbol": "CLLS",
    "Name": "Cellectis S.A."
  },
  {
    "Symbol": "CBMG",
    "Name": "Cellular Biomedicine Group, Inc."
  },
  {
    "Symbol": "CLSN",
    "Name": "Celsion Corporation"
  },
  {
    "Symbol": "CELH",
    "Name": "Celsius Holdings, Inc."
  },
  {
    "Symbol": "CYAD",
    "Name": "Celyad SA"
  },
  {
    "Symbol": "CETX",
    "Name": "Cemtrex Inc."
  },
  {
    "Symbol": "CETXP",
    "Name": "Cemtrex Inc."
  },
  {
    "Symbol": "CETXW",
    "Name": "Cemtrex Inc."
  },
  {
    "Symbol": "CDEV",
    "Name": "Centennial Resource Development, Inc."
  },
  {
    "Symbol": "CSFL",
    "Name": "CenterState Bank Corporation"
  },
  {
    "Symbol": "CETV",
    "Name": "Central European Media Enterprises Ltd."
  },
  {
    "Symbol": "CFBK",
    "Name": "Central Federal Corporation"
  },
  {
    "Symbol": "CENT",
    "Name": "Central Garden & Pet Company"
  },
  {
    "Symbol": "CENTA",
    "Name": "Central Garden & Pet Company"
  },
  {
    "Symbol": "CVCY",
    "Name": "Central Valley Community Bancorp"
  },
  {
    "Symbol": "CENX",
    "Name": "Century Aluminum Company"
  },
  {
    "Symbol": "CNBKA",
    "Name": "Century Bancorp, Inc."
  },
  {
    "Symbol": "CNTY",
    "Name": "Century Casinos, Inc."
  },
  {
    "Symbol": "CRNT",
    "Name": "Ceragon Networks Ltd."
  },
  {
    "Symbol": "CERC",
    "Name": "Cerecor Inc."
  },
  {
    "Symbol": "CERCW",
    "Name": "Cerecor Inc."
  },
  {
    "Symbol": "CERN",
    "Name": "Cerner Corporation"
  },
  {
    "Symbol": "CERS",
    "Name": "Cerus Corporation"
  },
  {
    "Symbol": "KOOL",
    "Name": "Cesca Therapeutics Inc."
  },
  {
    "Symbol": "CEVA",
    "Name": "CEVA, Inc."
  },
  {
    "Symbol": "CSBR",
    "Name": "Champions Oncology, Inc."
  },
  {
    "Symbol": "CYOU",
    "Name": "Changyou.com Limited"
  },
  {
    "Symbol": "BURG",
    "Name": "Chanticleer Holdings, Inc."
  },
  {
    "Symbol": "CTHR",
    "Name": "Charles & Colvard Ltd."
  },
  {
    "Symbol": "GTLS",
    "Name": "Chart Industries, Inc."
  },
  {
    "Symbol": "CHTR",
    "Name": "Charter Communications, Inc."
  },
  {
    "Symbol": "CHKP",
    "Name": "Check Point Software Technologies Ltd."
  },
  {
    "Symbol": "CHEK",
    "Name": "Check-Cap Ltd."
  },
  {
    "Symbol": "CHEKW",
    "Name": "Check-Cap Ltd."
  },
  {
    "Symbol": "CHEKZ",
    "Name": "Check-Cap Ltd."
  },
  {
    "Symbol": "CKPT",
    "Name": "Checkpoint Therapeutics, Inc."
  },
  {
    "Symbol": "CEMI",
    "Name": "Chembio Diagnostics, Inc."
  },
  {
    "Symbol": "CHFC",
    "Name": "Chemical Financial Corporation"
  },
  {
    "Symbol": "CCXI",
    "Name": "ChemoCentryx, Inc."
  },
  {
    "Symbol": "CHMG",
    "Name": "Chemung Financial Corp"
  },
  {
    "Symbol": "CHKE",
    "Name": "Cherokee Inc."
  },
  {
    "Symbol": "CHFS",
    "Name": "CHF Solutions, Inc."
  },
  {
    "Symbol": "CHMA",
    "Name": "Chiasma, Inc."
  },
  {
    "Symbol": "CSSE",
    "Name": "Chicken Soup for the Soul Entertainment, Inc."
  },
  {
    "Symbol": "CSSEP",
    "Name": "Chicken Soup for the Soul Entertainment, Inc."
  },
  {
    "Symbol": "PLCE",
    "Name": "Children&#39;s Place, Inc. (The)"
  },
  {
    "Symbol": "CMRX",
    "Name": "Chimerix, Inc."
  },
  {
    "Symbol": "CADC",
    "Name": "China Advanced Construction Materials Group, Inc."
  },
  {
    "Symbol": "CAAS",
    "Name": "China Automotive Systems, Inc."
  },
  {
    "Symbol": "CBPO",
    "Name": "China Biologic Products Holdings, Inc."
  },
  {
    "Symbol": "CCCL",
    "Name": "China Ceramics Co., Ltd."
  },
  {
    "Symbol": "GLG",
    "Name": "China Commercial Credit, Inc."
  },
  {
    "Symbol": "CCRC",
    "Name": "China Customer Relations Centers, Inc."
  },
  {
    "Symbol": "JRJC",
    "Name": "China Finance Online Co. Limited"
  },
  {
    "Symbol": "HGSH",
    "Name": "China HGS Real Estate, Inc."
  },
  {
    "Symbol": "CIFS",
    "Name": "China Internet Nationwide Financial Services Inc."
  },
  {
    "Symbol": "CJJD",
    "Name": "China Jo-Jo Drugstores, Inc."
  },
  {
    "Symbol": "CLDC",
    "Name": "China Lending Corporation"
  },
  {
    "Symbol": "CHNR",
    "Name": "China Natural Resources, Inc."
  },
  {
    "Symbol": "CREG",
    "Name": "China Recycling Energy Corporation"
  },
  {
    "Symbol": "CNTF",
    "Name": "China TechFaith Wireless Communication Technology Limited"
  },
  {
    "Symbol": "CXDC",
    "Name": "China XD Plastics Company Limited"
  },
  {
    "Symbol": "CCIH",
    "Name": "ChinaCache International Holdings Ltd."
  },
  {
    "Symbol": "CNET",
    "Name": "ChinaNet Online Holdings, Inc."
  },
  {
    "Symbol": "IMOS",
    "Name": "ChipMOS TECHNOLOGIES INC."
  },
  {
    "Symbol": "CDXC",
    "Name": "ChromaDex Corporation"
  },
  {
    "Symbol": "CHSCL",
    "Name": "CHS Inc"
  },
  {
    "Symbol": "CHSCM",
    "Name": "CHS Inc"
  },
  {
    "Symbol": "CHSCN",
    "Name": "CHS Inc"
  },
  {
    "Symbol": "CHSCO",
    "Name": "CHS Inc"
  },
  {
    "Symbol": "CHSCP",
    "Name": "CHS Inc"
  },
  {
    "Symbol": "CHDN",
    "Name": "Churchill Downs, Incorporated"
  },
  {
    "Symbol": "CHUY",
    "Name": "Chuy&#39;s Holdings, Inc."
  },
  {
    "Symbol": "CDTX",
    "Name": "Cidara Therapeutics, Inc."
  },
  {
    "Symbol": "CMCT",
    "Name": "CIM Commercial Trust Corporation"
  },
  {
    "Symbol": "CMCTP",
    "Name": "CIM Commercial Trust Corporation"
  },
  {
    "Symbol": "CMPR",
    "Name": "Cimpress N.V"
  },
  {
    "Symbol": "CINF",
    "Name": "Cincinnati Financial Corporation"
  },
  {
    "Symbol": "CIDM",
    "Name": "Cinedigm Corp"
  },
  {
    "Symbol": "CTAS",
    "Name": "Cintas Corporation"
  },
  {
    "Symbol": "CRUS",
    "Name": "Cirrus Logic, Inc."
  },
  {
    "Symbol": "CSCO",
    "Name": "Cisco Systems, Inc."
  },
  {
    "Symbol": "CTRN",
    "Name": "Citi Trends, Inc."
  },
  {
    "Symbol": "CTXR",
    "Name": "Citius Pharmaceuticals, Inc."
  },
  {
    "Symbol": "CTXRW",
    "Name": "Citius Pharmaceuticals, Inc."
  },
  {
    "Symbol": "CZNC",
    "Name": "Citizens & Northern Corp"
  },
  {
    "Symbol": "CZWI",
    "Name": "Citizens Community Bancorp, Inc."
  },
  {
    "Symbol": "CZFC",
    "Name": "Citizens First Corporation"
  },
  {
    "Symbol": "CIZN",
    "Name": "Citizens Holding Company"
  },
  {
    "Symbol": "CTXS",
    "Name": "Citrix Systems, Inc."
  },
  {
    "Symbol": "CHCO",
    "Name": "City Holding Company"
  },
  {
    "Symbol": "CIVB",
    "Name": "Civista Bancshares, Inc."
  },
  {
    "Symbol": "CIVBP",
    "Name": "Civista Bancshares, Inc."
  },
  {
    "Symbol": "CLAR",
    "Name": "Clarus Corporation"
  },
  {
    "Symbol": "CLNE",
    "Name": "Clean Energy Fuels Corp."
  },
  {
    "Symbol": "CACG",
    "Name": "ClearBridge All Cap Growth ETF"
  },
  {
    "Symbol": "YLDE",
    "Name": "ClearBridge Dividend Strategy ESG ETF"
  },
  {
    "Symbol": "LRGE",
    "Name": "ClearBridge Large Cap Growth ESG ETF"
  },
  {
    "Symbol": "CLFD",
    "Name": "Clearfield, Inc."
  },
  {
    "Symbol": "CLRO",
    "Name": "ClearOne, Inc."
  },
  {
    "Symbol": "CLSD",
    "Name": "Clearside Biomedical, Inc."
  },
  {
    "Symbol": "CLIR",
    "Name": "ClearSign Combustion Corporation"
  },
  {
    "Symbol": "CLIRW",
    "Name": "ClearSign Combustion Corporation"
  },
  {
    "Symbol": "CMTA",
    "Name": "Clementia Pharmaceuticals Inc."
  },
  {
    "Symbol": "CBLI",
    "Name": "Cleveland BioLabs, Inc."
  },
  {
    "Symbol": "CLVS",
    "Name": "Clovis Oncology, Inc."
  },
  {
    "Symbol": "CLPS",
    "Name": "CLPS Incorporation"
  },
  {
    "Symbol": "CMFN",
    "Name": "CM Finance Inc"
  },
  {
    "Symbol": "CMFNL",
    "Name": "CM Finance Inc"
  },
  {
    "Symbol": "CMSS",
    "Name": "CM Seven Star Acquisition Corporation"
  },
  {
    "Symbol": "CMSSR",
    "Name": "CM Seven Star Acquisition Corporation"
  },
  {
    "Symbol": "CMSSU",
    "Name": "CM Seven Star Acquisition Corporation"
  },
  {
    "Symbol": "CMSSW",
    "Name": "CM Seven Star Acquisition Corporation"
  },
  {
    "Symbol": "CME",
    "Name": "CME Group Inc."
  },
  {
    "Symbol": "CCNE",
    "Name": "CNB Financial Corporation"
  },
  {
    "Symbol": "CCB",
    "Name": "Coastal Financial Corporation"
  },
  {
    "Symbol": "CWAY",
    "Name": "Coastway Bancorp, Inc."
  },
  {
    "Symbol": "COBZ",
    "Name": "CoBiz Financial Inc."
  },
  {
    "Symbol": "COKE",
    "Name": "Coca-Cola Bottling Co. Consolidated"
  },
  {
    "Symbol": "COCP",
    "Name": "Cocrystal Pharma, Inc."
  },
  {
    "Symbol": "CODA",
    "Name": "Coda Octopus Group, Inc."
  },
  {
    "Symbol": "CDXS",
    "Name": "Codexis, Inc."
  },
  {
    "Symbol": "CODX",
    "Name": "Co-Diagnostics, Inc."
  },
  {
    "Symbol": "CVLY",
    "Name": "Codorus Valley Bancorp, Inc"
  },
  {
    "Symbol": "JVA",
    "Name": "Coffee Holding Co., Inc."
  },
  {
    "Symbol": "CCOI",
    "Name": "Cogent Communications Holdings, Inc."
  },
  {
    "Symbol": "CGNX",
    "Name": "Cognex Corporation"
  },
  {
    "Symbol": "CTSH",
    "Name": "Cognizant Technology Solutions Corporation"
  },
  {
    "Symbol": "CWBR",
    "Name": "CohBar, Inc."
  },
  {
    "Symbol": "COHR",
    "Name": "Coherent, Inc."
  },
  {
    "Symbol": "CHRS",
    "Name": "Coherus BioSciences, Inc."
  },
  {
    "Symbol": "COHU",
    "Name": "Cohu, Inc."
  },
  {
    "Symbol": "CLCT",
    "Name": "Collectors Universe, Inc."
  },
  {
    "Symbol": "COLL",
    "Name": "Collegium Pharmaceutical, Inc."
  },
  {
    "Symbol": "CIGI",
    "Name": "Colliers International Group Inc."
  },
  {
    "Symbol": "CLGN",
    "Name": "CollPlant Holdings, Ltd."
  },
  {
    "Symbol": "CBAN",
    "Name": "Colony Bankcorp, Inc."
  },
  {
    "Symbol": "COLB",
    "Name": "Columbia Banking System, Inc."
  },
  {
    "Symbol": "CLBK",
    "Name": "Columbia Financial, Inc."
  },
  {
    "Symbol": "COLM",
    "Name": "Columbia Sportswear Company"
  },
  {
    "Symbol": "CMCO",
    "Name": "Columbus McKinnon Corporation"
  },
  {
    "Symbol": "CMCSA",
    "Name": "Comcast Corporation"
  },
  {
    "Symbol": "CCNI",
    "Name": "Command Center, Inc."
  },
  {
    "Symbol": "CBSH",
    "Name": "Commerce Bancshares, Inc."
  },
  {
    "Symbol": "CBSHP",
    "Name": "Commerce Bancshares, Inc."
  },
  {
    "Symbol": "CVGI",
    "Name": "Commercial Vehicle Group, Inc."
  },
  {
    "Symbol": "COMM",
    "Name": "CommScope Holding Company, Inc."
  },
  {
    "Symbol": "JCS",
    "Name": "Communications Systems, Inc."
  },
  {
    "Symbol": "ESXB",
    "Name": "Community Bankers Trust Corporation."
  },
  {
    "Symbol": "CFBI",
    "Name": "Community First Bancshares, Inc."
  },
  {
    "Symbol": "CYHHZ",
    "Name": "Community Health Systems, Inc."
  },
  {
    "Symbol": "CTBI",
    "Name": "Community Trust Bancorp, Inc."
  },
  {
    "Symbol": "CWBC",
    "Name": "Community West Bancshares"
  },
  {
    "Symbol": "CVLT",
    "Name": "Commvault Systems, Inc."
  },
  {
    "Symbol": "CGEN",
    "Name": "Compugen Ltd."
  },
  {
    "Symbol": "CPSI",
    "Name": "Computer Programs and Systems, Inc."
  },
  {
    "Symbol": "CTG",
    "Name": "Computer Task Group, Incorporated"
  },
  {
    "Symbol": "SCOR",
    "Name": "comScore, Inc."
  },
  {
    "Symbol": "CHCI",
    "Name": "Comstock Holding Companies, Inc."
  },
  {
    "Symbol": "CMTL",
    "Name": "Comtech Telecommunications Corp."
  },
  {
    "Symbol": "CNAT",
    "Name": "Conatus Pharmaceuticals Inc."
  },
  {
    "Symbol": "CNCE",
    "Name": "Concert Pharmaceuticals, Inc."
  },
  {
    "Symbol": "CDOR",
    "Name": "Condor Hospitality Trust, Inc."
  },
  {
    "Symbol": "CFMS",
    "Name": "ConforMIS, Inc."
  },
  {
    "Symbol": "CNFR",
    "Name": "Conifer Holdings, Inc."
  },
  {
    "Symbol": "CNMD",
    "Name": "CONMED Corporation"
  },
  {
    "Symbol": "CTWS",
    "Name": "Connecticut Water Service, Inc."
  },
  {
    "Symbol": "CNOB",
    "Name": "ConnectOne Bancorp, Inc."
  },
  {
    "Symbol": "CONN",
    "Name": "Conn&#39;s, Inc."
  },
  {
    "Symbol": "CNSL",
    "Name": "Consolidated Communications Holdings, Inc."
  },
  {
    "Symbol": "CWCO",
    "Name": "Consolidated Water Co. Ltd."
  },
  {
    "Symbol": "CNAC",
    "Name": "Constellation Alpha Capital Corp."
  },
  {
    "Symbol": "CNACR",
    "Name": "Constellation Alpha Capital Corp."
  },
  {
    "Symbol": "CNACU",
    "Name": "Constellation Alpha Capital Corp."
  },
  {
    "Symbol": "CNACW",
    "Name": "Constellation Alpha Capital Corp."
  },
  {
    "Symbol": "CNST",
    "Name": "Constellation Pharmaceuticals, Inc."
  },
  {
    "Symbol": "ROAD",
    "Name": "Construction Partners, Inc."
  },
  {
    "Symbol": "CPSS",
    "Name": "Consumer Portfolio Services, Inc."
  },
  {
    "Symbol": "CFRX",
    "Name": "ContraFect Corporation"
  },
  {
    "Symbol": "CTRV",
    "Name": "ContraVir Pharmaceuticals Inc."
  },
  {
    "Symbol": "CTRL",
    "Name": "Control4 Corporation"
  },
  {
    "Symbol": "CVON",
    "Name": "ConvergeOne Holdings, Inc."
  },
  {
    "Symbol": "AWSM",
    "Name": "Cool Holdings Inc."
  },
  {
    "Symbol": "CPRT",
    "Name": "Copart, Inc."
  },
  {
    "Symbol": "CRBP",
    "Name": "Corbus Pharmaceuticals Holdings, Inc."
  },
  {
    "Symbol": "CORT",
    "Name": "Corcept Therapeutics Incorporated"
  },
  {
    "Symbol": "CORE",
    "Name": "Core-Mark Holding Company, Inc."
  },
  {
    "Symbol": "CORI",
    "Name": "Corium International, Inc."
  },
  {
    "Symbol": "CSOD",
    "Name": "Cornerstone OnDemand, Inc."
  },
  {
    "Symbol": "CORV",
    "Name": "Correvio Pharma Corp."
  },
  {
    "Symbol": "CRVL",
    "Name": "CorVel Corp."
  },
  {
    "Symbol": "CRVS",
    "Name": "Corvus Pharmaceuticals, Inc."
  },
  {
    "Symbol": "CSGP",
    "Name": "CoStar Group, Inc."
  },
  {
    "Symbol": "COST",
    "Name": "Costco Wholesale Corporation"
  },
  {
    "Symbol": "CPAH",
    "Name": "CounterPath Corporation"
  },
  {
    "Symbol": "ICBK",
    "Name": "County Bancorp, Inc."
  },
  {
    "Symbol": "COUP",
    "Name": "Coupa Software Incorporated"
  },
  {
    "Symbol": "CVTI",
    "Name": "Covenant Transportation Group, Inc."
  },
  {
    "Symbol": "COWN",
    "Name": "Cowen Inc."
  },
  {
    "Symbol": "COWNL",
    "Name": "Cowen Inc."
  },
  {
    "Symbol": "COWNZ",
    "Name": "Cowen Inc."
  },
  {
    "Symbol": "PMTS",
    "Name": "CPI Card Group Inc."
  },
  {
    "Symbol": "CPSH",
    "Name": "CPS Technologies Corp."
  },
  {
    "Symbol": "CRAI",
    "Name": "CRA International,Inc."
  },
  {
    "Symbol": "CBRL",
    "Name": "Cracker Barrel Old Country Store, Inc."
  },
  {
    "Symbol": "BREW",
    "Name": "Craft Brew Alliance, Inc."
  },
  {
    "Symbol": "CRAY",
    "Name": "Cray Inc"
  },
  {
    "Symbol": "CACC",
    "Name": "Credit Acceptance Corporation"
  },
  {
    "Symbol": "DGLD",
    "Name": "Credit Suisse AG"
  },
  {
    "Symbol": "DSLV",
    "Name": "Credit Suisse AG"
  },
  {
    "Symbol": "GLDI",
    "Name": "Credit Suisse AG"
  },
  {
    "Symbol": "SLVO",
    "Name": "Credit Suisse AG"
  },
  {
    "Symbol": "TVIX",
    "Name": "Credit Suisse AG"
  },
  {
    "Symbol": "UGLD",
    "Name": "Credit Suisse AG"
  },
  {
    "Symbol": "USLV",
    "Name": "Credit Suisse AG"
  },
  {
    "Symbol": "USOI",
    "Name": "Credit Suisse AG"
  },
  {
    "Symbol": "VIIX",
    "Name": "Credit Suisse AG"
  },
  {
    "Symbol": "ZIV",
    "Name": "Credit Suisse AG"
  },
  {
    "Symbol": "CREE",
    "Name": "Cree, Inc."
  },
  {
    "Symbol": "CRESY",
    "Name": "Cresud S.A.C.I.F. y A."
  },
  {
    "Symbol": "CRNX",
    "Name": "Crinetics Pharmaceuticals, Inc."
  },
  {
    "Symbol": "CRSP",
    "Name": "CRISPR Therapeutics AG"
  },
  {
    "Symbol": "CRTO",
    "Name": "Criteo S.A."
  },
  {
    "Symbol": "CROX",
    "Name": "Crocs, Inc."
  },
  {
    "Symbol": "CRON",
    "Name": "Cronos Group Inc."
  },
  {
    "Symbol": "CCRN",
    "Name": "Cross Country Healthcare, Inc."
  },
  {
    "Symbol": "CRWS",
    "Name": "Crown Crafts, Inc."
  },
  {
    "Symbol": "CYRX",
    "Name": "CryoPort, Inc."
  },
  {
    "Symbol": "CYRXW",
    "Name": "CryoPort, Inc."
  },
  {
    "Symbol": "CSGS",
    "Name": "CSG Systems International, Inc."
  },
  {
    "Symbol": "CCLP",
    "Name": "CSI Compressco LP"
  },
  {
    "Symbol": "CSPI",
    "Name": "CSP Inc."
  },
  {
    "Symbol": "CSWI",
    "Name": "CSW Industrials, Inc."
  },
  {
    "Symbol": "CSX",
    "Name": "CSX Corporation"
  },
  {
    "Symbol": "CTIC",
    "Name": "CTI BioPharma Corp."
  },
  {
    "Symbol": "CTIB",
    "Name": "CTI Industries Corporation"
  },
  {
    "Symbol": "CTRP",
    "Name": "Ctrip.com International, Ltd."
  },
  {
    "Symbol": "CUE",
    "Name": "Cue Biopharma, Inc."
  },
  {
    "Symbol": "CUI",
    "Name": "CUI Global, Inc."
  },
  {
    "Symbol": "CPIX",
    "Name": "Cumberland Pharmaceuticals Inc."
  },
  {
    "Symbol": "CMLS",
    "Name": "Cumulus Media Inc."
  },
  {
    "Symbol": "CRIS",
    "Name": "Curis, Inc."
  },
  {
    "Symbol": "CUTR",
    "Name": "Cutera, Inc."
  },
  {
    "Symbol": "CVBF",
    "Name": "CVB Financial Corporation"
  },
  {
    "Symbol": "CVV",
    "Name": "CVD Equipment Corporation"
  },
  {
    "Symbol": "CYAN",
    "Name": "Cyanotech Corporation"
  },
  {
    "Symbol": "CYBR",
    "Name": "CyberArk Software Ltd."
  },
  {
    "Symbol": "CYBE",
    "Name": "CyberOptics Corporation"
  },
  {
    "Symbol": "CYCC",
    "Name": "Cyclacel Pharmaceuticals, Inc."
  },
  {
    "Symbol": "CYCCP",
    "Name": "Cyclacel Pharmaceuticals, Inc."
  },
  {
    "Symbol": "CBAY",
    "Name": "CymaBay Therapeutics Inc."
  },
  {
    "Symbol": "CY",
    "Name": "Cypress Semiconductor Corporation"
  },
  {
    "Symbol": "CYRN",
    "Name": "CYREN Ltd."
  },
  {
    "Symbol": "CONE",
    "Name": "CyrusOne Inc"
  },
  {
    "Symbol": "CYTK",
    "Name": "Cytokinetics, Incorporated"
  },
  {
    "Symbol": "CTMX",
    "Name": "CytomX Therapeutics, Inc."
  },
  {
    "Symbol": "CYTX",
    "Name": "Cytori Therapeutics Inc."
  },
  {
    "Symbol": "CYTXW",
    "Name": "Cytori Therapeutics Inc."
  },
  {
    "Symbol": "CYTXZ",
    "Name": "Cytori Therapeutics Inc."
  },
  {
    "Symbol": "CTSO",
    "Name": "Cytosorbents Corporation"
  },
  {
    "Symbol": "CYTR",
    "Name": "CytRx Corporation"
  },
  {
    "Symbol": "DJCO",
    "Name": "Daily Journal Corp. (S.C.)"
  },
  {
    "Symbol": "DAKT",
    "Name": "Daktronics, Inc."
  },
  {
    "Symbol": "DARE",
    "Name": "Dare Bioscience, Inc."
  },
  {
    "Symbol": "DRIO",
    "Name": "DarioHealth Corp."
  },
  {
    "Symbol": "DRIOW",
    "Name": "DarioHealth Corp."
  },
  {
    "Symbol": "DZSI",
    "Name": "DASAN Zhone Solutions, Inc."
  },
  {
    "Symbol": "DSKE",
    "Name": "Daseke, Inc."
  },
  {
    "Symbol": "DSKEW",
    "Name": "Daseke, Inc."
  },
  {
    "Symbol": "DAIO",
    "Name": "Data I/O Corporation"
  },
  {
    "Symbol": "DWCH",
    "Name": "Datawatch Corporation"
  },
  {
    "Symbol": "PLAY",
    "Name": "Dave & Buster&#39;s Entertainment, Inc."
  },
  {
    "Symbol": "DTEA",
    "Name": "DAVIDsTEA Inc."
  },
  {
    "Symbol": "DFNL",
    "Name": "Davis Select Financial ETF"
  },
  {
    "Symbol": "DINT",
    "Name": "Davis Select International ETF"
  },
  {
    "Symbol": "DUSA",
    "Name": "Davis Select U.S. Equity ETF"
  },
  {
    "Symbol": "DWLD",
    "Name": "Davis Select Worldwide ETF"
  },
  {
    "Symbol": "DWSN",
    "Name": "Dawson Geophysical Company"
  },
  {
    "Symbol": "DBVT",
    "Name": "DBV Technologies S.A."
  },
  {
    "Symbol": "DCPH",
    "Name": "Deciphera Pharmaceuticals, Inc."
  },
  {
    "Symbol": "DFRG",
    "Name": "Del Frisco&#39;s Restaurant Group, Inc."
  },
  {
    "Symbol": "TACO",
    "Name": "Del Taco Restaurants, Inc."
  },
  {
    "Symbol": "TACOW",
    "Name": "Del Taco Restaurants, Inc."
  },
  {
    "Symbol": "DMPI",
    "Name": "DelMar Pharmaceuticals, Inc."
  },
  {
    "Symbol": "DELT",
    "Name": "Delta Technology Holdings Limited"
  },
  {
    "Symbol": "DNLI",
    "Name": "Denali Therapeutics Inc."
  },
  {
    "Symbol": "DENN",
    "Name": "Denny&#39;s Corporation"
  },
  {
    "Symbol": "XRAY",
    "Name": "DENTSPLY SIRONA Inc."
  },
  {
    "Symbol": "DERM",
    "Name": "Dermira, Inc."
  },
  {
    "Symbol": "DEST",
    "Name": "Destination Maternity Corporation"
  },
  {
    "Symbol": "DXLG",
    "Name": "Destination XL Group, Inc."
  },
  {
    "Symbol": "DSWL",
    "Name": "Deswell Industries, Inc."
  },
  {
    "Symbol": "DTRM",
    "Name": "Determine, Inc."
  },
  {
    "Symbol": "DXCM",
    "Name": "DexCom, Inc."
  },
  {
    "Symbol": "DFBH",
    "Name": "DFB Healthcare Acquisitions Corp."
  },
  {
    "Symbol": "DFBHU",
    "Name": "DFB Healthcare Acquisitions Corp."
  },
  {
    "Symbol": "DFBHW",
    "Name": "DFB Healthcare Acquisitions Corp."
  },
  {
    "Symbol": "DHXM",
    "Name": "DHX Media Ltd."
  },
  {
    "Symbol": "DHIL",
    "Name": "Diamond Hill Investment Group, Inc."
  },
  {
    "Symbol": "FANG",
    "Name": "Diamondback Energy, Inc."
  },
  {
    "Symbol": "DCIX",
    "Name": "Diana Containerships Inc."
  },
  {
    "Symbol": "DRNA",
    "Name": "Dicerna Pharmaceuticals, Inc."
  },
  {
    "Symbol": "DFBG",
    "Name": "Differential Brands Group Inc."
  },
  {
    "Symbol": "DFFN",
    "Name": "Diffusion Pharmaceuticals Inc."
  },
  {
    "Symbol": "DGII",
    "Name": "Digi International Inc."
  },
  {
    "Symbol": "DMRC",
    "Name": "Digimarc Corporation"
  },
  {
    "Symbol": "DRAD",
    "Name": "Digirad Corporation"
  },
  {
    "Symbol": "DGLY",
    "Name": "Digital Ally, Inc."
  },
  {
    "Symbol": "APPS",
    "Name": "Digital Turbine, Inc."
  },
  {
    "Symbol": "DCOM",
    "Name": "Dime Community Bancshares, Inc."
  },
  {
    "Symbol": "DIOD",
    "Name": "Diodes Incorporated"
  },
  {
    "Symbol": "DISCA",
    "Name": "Discovery, Inc."
  },
  {
    "Symbol": "DISCB",
    "Name": "Discovery, Inc."
  },
  {
    "Symbol": "DISCK",
    "Name": "Discovery, Inc."
  },
  {
    "Symbol": "DISH",
    "Name": "DISH Network Corporation"
  },
  {
    "Symbol": "DVCR",
    "Name": "Diversicare Healthcare Services Inc."
  },
  {
    "Symbol": "SAUC",
    "Name": "Diversified Restaurant Holdings, Inc."
  },
  {
    "Symbol": "DLHC",
    "Name": "DLH Holdings Corp."
  },
  {
    "Symbol": "BOOM",
    "Name": "DMC Global Inc."
  },
  {
    "Symbol": "DNBF",
    "Name": "DNB Financial Corp"
  },
  {
    "Symbol": "DOCU",
    "Name": "DocuSign, Inc."
  },
  {
    "Symbol": "DOGZ",
    "Name": "Dogness (International) Corporation"
  },
  {
    "Symbol": "DLTR",
    "Name": "Dollar Tree, Inc."
  },
  {
    "Symbol": "DLPN",
    "Name": "Dolphin Entertainment, Inc."
  },
  {
    "Symbol": "DLPNW",
    "Name": "Dolphin Entertainment, Inc."
  },
  {
    "Symbol": "DOMO",
    "Name": "Domo, Inc."
  },
  {
    "Symbol": "DGICA",
    "Name": "Donegal Group, Inc."
  },
  {
    "Symbol": "DGICB",
    "Name": "Donegal Group, Inc."
  },
  {
    "Symbol": "DMLP",
    "Name": "Dorchester Minerals, L.P."
  },
  {
    "Symbol": "DORM",
    "Name": "Dorman Products, Inc."
  },
  {
    "Symbol": "DOVA",
    "Name": "Dova Pharmaceuticals, Inc."
  },
  {
    "Symbol": "LYL",
    "Name": "Dragon Victory International Limited"
  },
  {
    "Symbol": "DOTA",
    "Name": "Draper Oakwood Technology Acquisition, Inc."
  },
  {
    "Symbol": "DOTAR",
    "Name": "Draper Oakwood Technology Acquisition, Inc."
  },
  {
    "Symbol": "DOTAU",
    "Name": "Draper Oakwood Technology Acquisition, Inc."
  },
  {
    "Symbol": "DOTAW",
    "Name": "Draper Oakwood Technology Acquisition, Inc."
  },
  {
    "Symbol": "DBX",
    "Name": "Dropbox, Inc."
  },
  {
    "Symbol": "DCAR",
    "Name": "DropCar, Inc."
  },
  {
    "Symbol": "DRYS",
    "Name": "DryShips Inc."
  },
  {
    "Symbol": "DSPG",
    "Name": "DSP Group, Inc."
  },
  {
    "Symbol": "DLTH",
    "Name": "Duluth Holdings Inc."
  },
  {
    "Symbol": "DNKN",
    "Name": "Dunkin&#39; Brands Group, Inc."
  },
  {
    "Symbol": "DRRX",
    "Name": "DURECT Corporation"
  },
  {
    "Symbol": "DXPE",
    "Name": "DXP Enterprises, Inc."
  },
  {
    "Symbol": "DYSL",
    "Name": "Dynasil Corporation of America"
  },
  {
    "Symbol": "DYNT",
    "Name": "Dynatronics Corporation"
  },
  {
    "Symbol": "DVAX",
    "Name": "Dynavax Technologies Corporation"
  },
  {
    "Symbol": "ETFC",
    "Name": "E*TRADE Financial Corporation"
  },
  {
    "Symbol": "SSP",
    "Name": "E.W. Scripps Company (The)"
  },
  {
    "Symbol": "EBMT",
    "Name": "Eagle Bancorp Montana, Inc."
  },
  {
    "Symbol": "EGBN",
    "Name": "Eagle Bancorp, Inc."
  },
  {
    "Symbol": "EGLE",
    "Name": "Eagle Bulk Shipping Inc."
  },
  {
    "Symbol": "EFBI",
    "Name": "Eagle Financial Bancorp, Inc."
  },
  {
    "Symbol": "EGRX",
    "Name": "Eagle Pharmaceuticals, Inc."
  },
  {
    "Symbol": "EWBC",
    "Name": "East West Bancorp, Inc."
  },
  {
    "Symbol": "EACQ",
    "Name": "Easterly Acquisition Corp."
  },
  {
    "Symbol": "EACQU",
    "Name": "Easterly Acquisition Corp."
  },
  {
    "Symbol": "EACQW",
    "Name": "Easterly Acquisition Corp."
  },
  {
    "Symbol": "EML",
    "Name": "Eastern Company (The)"
  },
  {
    "Symbol": "EAST",
    "Name": "Eastside Distilling, Inc."
  },
  {
    "Symbol": "EASTW",
    "Name": "Eastside Distilling, Inc."
  },
  {
    "Symbol": "EVGBC",
    "Name": "Eaton Vance NextShares Trust"
  },
  {
    "Symbol": "EVSTC",
    "Name": "Eaton Vance NextShares Trust"
  },
  {
    "Symbol": "EVFTC",
    "Name": "Eaton Vance NextShares Trust II"
  },
  {
    "Symbol": "EVLMC",
    "Name": "Eaton Vance NextShares Trust II"
  },
  {
    "Symbol": "OKDCC",
    "Name": "Eaton Vance NextShares Trust II"
  },
  {
    "Symbol": "EBAY",
    "Name": "eBay Inc."
  },
  {
    "Symbol": "EBAYL",
    "Name": "eBay Inc."
  },
  {
    "Symbol": "EBIX",
    "Name": "Ebix, Inc."
  },
  {
    "Symbol": "ELON",
    "Name": "Echelon Corporation"
  },
  {
    "Symbol": "ECHO",
    "Name": "Echo Global Logistics, Inc."
  },
  {
    "Symbol": "SATS",
    "Name": "EchoStar Corporation"
  },
  {
    "Symbol": "EEI",
    "Name": "Ecology and Environment, Inc."
  },
  {
    "Symbol": "ESES",
    "Name": "Eco-Stim Energy Solutions, Inc."
  },
  {
    "Symbol": "EDAP",
    "Name": "EDAP TMS S.A."
  },
  {
    "Symbol": "EDGE",
    "Name": "Edge Therapeutics, Inc."
  },
  {
    "Symbol": "EDGW",
    "Name": "Edgewater Technology, Inc."
  },
  {
    "Symbol": "EDIT",
    "Name": "Editas Medicine, Inc."
  },
  {
    "Symbol": "EDUC",
    "Name": "Educational Development Corporation"
  },
  {
    "Symbol": "EGAN",
    "Name": "eGain Corporation"
  },
  {
    "Symbol": "EGLT",
    "Name": "Egalet Corporation"
  },
  {
    "Symbol": "EHTH",
    "Name": "eHealth, Inc."
  },
  {
    "Symbol": "EIDX",
    "Name": "Eidos Therapeutics, Inc."
  },
  {
    "Symbol": "EIGR",
    "Name": "Eiger BioPharmaceuticals, Inc."
  },
  {
    "Symbol": "EKSO",
    "Name": "Ekso Bionics Holdings, Inc."
  },
  {
    "Symbol": "LOCO",
    "Name": "El Pollo Loco Holdings, Inc."
  },
  {
    "Symbol": "EMITF",
    "Name": "Elbit Imaging Ltd."
  },
  {
    "Symbol": "ESLT",
    "Name": "Elbit Systems Ltd."
  },
  {
    "Symbol": "ERI",
    "Name": "Eldorado Resorts, Inc."
  },
  {
    "Symbol": "SOLO",
    "Name": "Electrameccanica Vehicles Corp. Ltd."
  },
  {
    "Symbol": "SOLOW",
    "Name": "Electrameccanica Vehicles Corp. Ltd."
  },
  {
    "Symbol": "ESIO",
    "Name": "Electro Scientific Industries, Inc."
  },
  {
    "Symbol": "ECOR",
    "Name": "electroCore, Inc."
  },
  {
    "Symbol": "EA",
    "Name": "Electronic Arts Inc."
  },
  {
    "Symbol": "EFII",
    "Name": "Electronics for Imaging, Inc."
  },
  {
    "Symbol": "ELSE",
    "Name": "Electro-Sensors, Inc."
  },
  {
    "Symbol": "ESBK",
    "Name": "Elmira Savings Bank NY (The)"
  },
  {
    "Symbol": "ELOX",
    "Name": "Eloxx Pharmaceuticals, Inc."
  },
  {
    "Symbol": "ELTK",
    "Name": "Eltek Ltd."
  },
  {
    "Symbol": "EMCI",
    "Name": "EMC Insurance Group Inc."
  },
  {
    "Symbol": "EMCF",
    "Name": "Emclaire Financial Corp"
  },
  {
    "Symbol": "EMKR",
    "Name": "EMCORE Corporation"
  },
  {
    "Symbol": "EMMS",
    "Name": "Emmis Communications Corporation"
  },
  {
    "Symbol": "NYNY",
    "Name": "Empire Resorts, Inc."
  },
  {
    "Symbol": "ENTA",
    "Name": "Enanta Pharmaceuticals, Inc."
  },
  {
    "Symbol": "ECPG",
    "Name": "Encore Capital Group Inc"
  },
  {
    "Symbol": "WIRE",
    "Name": "Encore Wire Corporation"
  },
  {
    "Symbol": "ENDP",
    "Name": "Endo International plc"
  },
  {
    "Symbol": "ECYT",
    "Name": "Endocyte, Inc."
  },
  {
    "Symbol": "ELGX",
    "Name": "Endologix, Inc."
  },
  {
    "Symbol": "NDRA",
    "Name": "ENDRA Life Sciences Inc."
  },
  {
    "Symbol": "NDRAW",
    "Name": "ENDRA Life Sciences Inc."
  },
  {
    "Symbol": "EIGI",
    "Name": "Endurance International Group Holdings, Inc."
  },
  {
    "Symbol": "WATT",
    "Name": "Energous Corporation"
  },
  {
    "Symbol": "EFOI",
    "Name": "Energy Focus, Inc."
  },
  {
    "Symbol": "ERII",
    "Name": "Energy Recovery, Inc."
  },
  {
    "Symbol": "EGC",
    "Name": "Energy XXI Gulf Coast, Inc."
  },
  {
    "Symbol": "ENG",
    "Name": "ENGlobal Corporation"
  },
  {
    "Symbol": "ENPH",
    "Name": "Enphase Energy, Inc."
  },
  {
    "Symbol": "ESGR",
    "Name": "Enstar Group Limited"
  },
  {
    "Symbol": "ESGRP",
    "Name": "Enstar Group Limited"
  },
  {
    "Symbol": "ENFC",
    "Name": "Entegra Financial Corp."
  },
  {
    "Symbol": "ENTG",
    "Name": "Entegris, Inc."
  },
  {
    "Symbol": "ENTX",
    "Name": "Entera Bio Ltd."
  },
  {
    "Symbol": "ENTXW",
    "Name": "Entera Bio Ltd."
  },
  {
    "Symbol": "EBTC",
    "Name": "Enterprise Bancorp Inc"
  },
  {
    "Symbol": "EFSC",
    "Name": "Enterprise Financial Services Corporation"
  },
  {
    "Symbol": "EPZM",
    "Name": "Epizyme, Inc."
  },
  {
    "Symbol": "PLUS",
    "Name": "ePlus inc."
  },
  {
    "Symbol": "EQIX",
    "Name": "Equinix, Inc."
  },
  {
    "Symbol": "EQBK",
    "Name": "Equity Bancshares, Inc."
  },
  {
    "Symbol": "ERIC",
    "Name": "Ericsson"
  },
  {
    "Symbol": "ERIE",
    "Name": "Erie Indemnity Company"
  },
  {
    "Symbol": "ERYP",
    "Name": "Erytech Pharma S.A."
  },
  {
    "Symbol": "ESCA",
    "Name": "Escalade, Incorporated"
  },
  {
    "Symbol": "ESPR",
    "Name": "Esperion Therapeutics, Inc."
  },
  {
    "Symbol": "ESQ",
    "Name": "Esquire Financial Holdings, Inc."
  },
  {
    "Symbol": "ESSA",
    "Name": "ESSA Bancorp, Inc."
  },
  {
    "Symbol": "EPIX",
    "Name": "ESSA Pharma Inc."
  },
  {
    "Symbol": "ESND",
    "Name": "Essendant Inc."
  },
  {
    "Symbol": "ESTA",
    "Name": "Establishment Labs Holdings Inc."
  },
  {
    "Symbol": "ESTR",
    "Name": "Estre Ambiental, Inc."
  },
  {
    "Symbol": "ESTRW",
    "Name": "Estre Ambiental, Inc."
  },
  {
    "Symbol": "VBND",
    "Name": "ETF Series Solutions Trust Vident Core U.S. Bond Strategy Fund"
  },
  {
    "Symbol": "VUSE",
    "Name": "ETF Series Solutions Trust Vident Core US Equity ETF"
  },
  {
    "Symbol": "VIDI",
    "Name": "ETF Series Solutions Trust Vident International Equity Fund"
  },
  {
    "Symbol": "ETSY",
    "Name": "Etsy, Inc."
  },
  {
    "Symbol": "CLWT",
    "Name": "Euro Tech Holdings Company Limited"
  },
  {
    "Symbol": "EDRY",
    "Name": "EuroDry Ltd."
  },
  {
    "Symbol": "EEFT",
    "Name": "Euronet Worldwide, Inc."
  },
  {
    "Symbol": "ESEA",
    "Name": "Euroseas Ltd."
  },
  {
    "Symbol": "EVLO",
    "Name": "Evelo Biosciences, Inc."
  },
  {
    "Symbol": "EVBG",
    "Name": "Everbridge, Inc."
  },
  {
    "Symbol": "EVK",
    "Name": "Ever-Glory International Group, Inc."
  },
  {
    "Symbol": "EVER",
    "Name": "EverQuote, Inc."
  },
  {
    "Symbol": "MRAM",
    "Name": "Everspin Technologies, Inc."
  },
  {
    "Symbol": "EVLV",
    "Name": "EVINE Live Inc."
  },
  {
    "Symbol": "EVOP",
    "Name": "EVO Payments, Inc."
  },
  {
    "Symbol": "EVFM",
    "Name": "Evofem Biosciences, Inc."
  },
  {
    "Symbol": "EVGN",
    "Name": "Evogene Ltd."
  },
  {
    "Symbol": "EVOK",
    "Name": "Evoke Pharma, Inc."
  },
  {
    "Symbol": "EOLS",
    "Name": "Evolus, Inc."
  },
  {
    "Symbol": "EVOL",
    "Name": "Evolving Systems, Inc."
  },
  {
    "Symbol": "EXAS",
    "Name": "Exact Sciences Corporation"
  },
  {
    "Symbol": "FLAG",
    "Name": "Exchange Traded Concepts Trust FLAG-Forensic Accounting Long-S"
  },
  {
    "Symbol": "ROBO",
    "Name": "Exchange Traded Concepts Trust ROBO Global Robotics and Automa"
  },
  {
    "Symbol": "XELA",
    "Name": "Exela Technologies, Inc."
  },
  {
    "Symbol": "EXEL",
    "Name": "Exelixis, Inc."
  },
  {
    "Symbol": "EXFO",
    "Name": "EXFO Inc"
  },
  {
    "Symbol": "EXLS",
    "Name": "ExlService Holdings, Inc."
  },
  {
    "Symbol": "EXPI",
    "Name": "eXp World Holdings, Inc."
  },
  {
    "Symbol": "EXPE",
    "Name": "Expedia Group, Inc."
  },
  {
    "Symbol": "EXPD",
    "Name": "Expeditors International of Washington, Inc."
  },
  {
    "Symbol": "EXPO",
    "Name": "Exponent, Inc."
  },
  {
    "Symbol": "ESRX",
    "Name": "Express Scripts Holding Company"
  },
  {
    "Symbol": "STAY",
    "Name": "Extended Stay America, Inc."
  },
  {
    "Symbol": "XOG",
    "Name": "Extraction Oil & Gas, Inc."
  },
  {
    "Symbol": "EXTR",
    "Name": "Extreme Networks, Inc."
  },
  {
    "Symbol": "EYEG",
    "Name": "Eyegate Pharmaceuticals, Inc."
  },
  {
    "Symbol": "EYEGW",
    "Name": "Eyegate Pharmaceuticals, Inc."
  },
  {
    "Symbol": "EYEN",
    "Name": "Eyenovia, Inc."
  },
  {
    "Symbol": "EYPT",
    "Name": "EyePoint Pharmaceuticals, Inc."
  },
  {
    "Symbol": "EZPW",
    "Name": "EZCORP, Inc."
  },
  {
    "Symbol": "FFIV",
    "Name": "F5 Networks, Inc."
  },
  {
    "Symbol": "FB",
    "Name": "Facebook, Inc."
  },
  {
    "Symbol": "FLMN",
    "Name": "Falcon Minerals Corporation"
  },
  {
    "Symbol": "FLMNW",
    "Name": "Falcon Minerals Corporation"
  },
  {
    "Symbol": "DAVE",
    "Name": "Famous Dave&#39;s of America, Inc."
  },
  {
    "Symbol": "FANH",
    "Name": "Fanhua Inc."
  },
  {
    "Symbol": "FARM",
    "Name": "Farmer Brothers Company"
  },
  {
    "Symbol": "FMAO",
    "Name": "Farmers & Merchants Bancorp, Inc."
  },
  {
    "Symbol": "FMNB",
    "Name": "Farmers National Banc Corp."
  },
  {
    "Symbol": "FAMI",
    "Name": "FARMMI, INC."
  },
  {
    "Symbol": "FARO",
    "Name": "FARO Technologies, Inc."
  },
  {
    "Symbol": "FAST",
    "Name": "Fastenal Company"
  },
  {
    "Symbol": "FAT",
    "Name": "FAT Brands Inc."
  },
  {
    "Symbol": "FATE",
    "Name": "Fate Therapeutics, Inc."
  },
  {
    "Symbol": "FBSS",
    "Name": "Fauquier Bankshares, Inc."
  },
  {
    "Symbol": "FSAC",
    "Name": "Federal Street Acquisition Corp."
  },
  {
    "Symbol": "FSACU",
    "Name": "Federal Street Acquisition Corp."
  },
  {
    "Symbol": "FSACW",
    "Name": "Federal Street Acquisition Corp."
  },
  {
    "Symbol": "FNHC",
    "Name": "FedNat Holding Company"
  },
  {
    "Symbol": "FENC",
    "Name": "Fennec Pharmaceuticals Inc."
  },
  {
    "Symbol": "GSM",
    "Name": "Ferroglobe PLC"
  },
  {
    "Symbol": "FFBW",
    "Name": "FFBW, Inc."
  },
  {
    "Symbol": "FCSC",
    "Name": "Fibrocell Science Inc."
  },
  {
    "Symbol": "FGEN",
    "Name": "FibroGen, Inc"
  },
  {
    "Symbol": "FDBC",
    "Name": "Fidelity D & D Bancorp, Inc."
  },
  {
    "Symbol": "ONEQ",
    "Name": "Fidelity Nasdaq Composite Index Tracking Stock"
  },
  {
    "Symbol": "LION",
    "Name": "Fidelity Southern Corporation"
  },
  {
    "Symbol": "FDUS",
    "Name": "Fidus Investment Corporation"
  },
  {
    "Symbol": "FDUSL",
    "Name": "Fidus Investment Corporation"
  },
  {
    "Symbol": "FRGI",
    "Name": "Fiesta Restaurant Group, Inc."
  },
  {
    "Symbol": "FITB",
    "Name": "Fifth Third Bancorp"
  },
  {
    "Symbol": "FITBI",
    "Name": "Fifth Third Bancorp"
  },
  {
    "Symbol": "FISI",
    "Name": "Financial Institutions, Inc."
  },
  {
    "Symbol": "FNSR",
    "Name": "Finisar Corporation"
  },
  {
    "Symbol": "FNJN",
    "Name": "Finjan Holdings, Inc."
  },
  {
    "Symbol": "FEYE",
    "Name": "FireEye, Inc."
  },
  {
    "Symbol": "FBNC",
    "Name": "First Bancorp"
  },
  {
    "Symbol": "FNLC",
    "Name": "First Bancorp, Inc (ME)"
  },
  {
    "Symbol": "FRBA",
    "Name": "First Bank"
  },
  {
    "Symbol": "BUSE",
    "Name": "First Busey Corporation"
  },
  {
    "Symbol": "FBIZ",
    "Name": "First Business Financial Services, Inc."
  },
  {
    "Symbol": "FCAP",
    "Name": "First Capital, Inc."
  },
  {
    "Symbol": "FCFS",
    "Name": "First Cash, Inc."
  },
  {
    "Symbol": "FCBP",
    "Name": "First Choice Bancorp"
  },
  {
    "Symbol": "FCNCA",
    "Name": "First Citizens BancShares, Inc."
  },
  {
    "Symbol": "FCBC",
    "Name": "First Community Bancshares, Inc."
  },
  {
    "Symbol": "FCCO",
    "Name": "First Community Corporation"
  },
  {
    "Symbol": "FBNK",
    "Name": "First Connecticut Bancorp, Inc."
  },
  {
    "Symbol": "FDEF",
    "Name": "First Defiance Financial Corp."
  },
  {
    "Symbol": "FFBC",
    "Name": "First Financial Bancorp."
  },
  {
    "Symbol": "FFBCW",
    "Name": "First Financial Bancorp."
  },
  {
    "Symbol": "FFIN",
    "Name": "First Financial Bankshares, Inc."
  },
  {
    "Symbol": "THFF",
    "Name": "First Financial Corporation Indiana"
  },
  {
    "Symbol": "FFNW",
    "Name": "First Financial Northwest, Inc."
  },
  {
    "Symbol": "FFWM",
    "Name": "First Foundation Inc."
  },
  {
    "Symbol": "FGBI",
    "Name": "First Guaranty Bancshares, Inc."
  },
  {
    "Symbol": "FHB",
    "Name": "First Hawaiian, Inc."
  },
  {
    "Symbol": "INBK",
    "Name": "First Internet Bancorp"
  },
  {
    "Symbol": "INBKL",
    "Name": "First Internet Bancorp"
  },
  {
    "Symbol": "FIBK",
    "Name": "First Interstate BancSystem, Inc."
  },
  {
    "Symbol": "FRME",
    "Name": "First Merchants Corporation"
  },
  {
    "Symbol": "FMBH",
    "Name": "First Mid-Illinois Bancshares, Inc."
  },
  {
    "Symbol": "FMBI",
    "Name": "First Midwest Bancorp, Inc."
  },
  {
    "Symbol": "FNWB",
    "Name": "First Northwest Bancorp"
  },
  {
    "Symbol": "FSFG",
    "Name": "First Savings Financial Group, Inc."
  },
  {
    "Symbol": "FSLR",
    "Name": "First Solar, Inc."
  },
  {
    "Symbol": "FAAR",
    "Name": "First Trust Alternative Absolute Return Strategy ETF"
  },
  {
    "Symbol": "FPA",
    "Name": "First Trust Asia Pacific Ex-Japan AlphaDEX Fund"
  },
  {
    "Symbol": "BICK",
    "Name": "First Trust BICK Index Fund"
  },
  {
    "Symbol": "FBZ",
    "Name": "First Trust Brazil AlphaDEX Fund"
  },
  {
    "Symbol": "FTHI",
    "Name": "First Trust BuyWrite Income ETF"
  },
  {
    "Symbol": "FCAL",
    "Name": "First Trust California Municipal High income ETF"
  },
  {
    "Symbol": "FCAN",
    "Name": "First Trust Canada AlphaDEX Fund"
  },
  {
    "Symbol": "FTCS",
    "Name": "First Trust Capital Strength ETF"
  },
  {
    "Symbol": "FCEF",
    "Name": "First Trust CEF Income Opportunity ETF"
  },
  {
    "Symbol": "FCA",
    "Name": "First Trust China AlphaDEX Fund"
  },
  {
    "Symbol": "SKYY",
    "Name": "First Trust Cloud Computing ETF"
  },
  {
    "Symbol": "RNDM",
    "Name": "First Trust Developed International Equity Select ETF"
  },
  {
    "Symbol": "FDT",
    "Name": "First Trust Developed Markets Ex-US AlphaDEX Fund"
  },
  {
    "Symbol": "FDTS",
    "Name": "First Trust Developed Markets ex-US Small Cap AlphaDEX Fund"
  },
  {
    "Symbol": "FVC",
    "Name": "First Trust Dorsey Wright Dynamic Focus 5 ETF"
  },
  {
    "Symbol": "FV",
    "Name": "First Trust Dorsey Wright Focus 5 ETF"
  },
  {
    "Symbol": "IFV",
    "Name": "First Trust Dorsey Wright International Focus 5 ETF"
  },
  {
    "Symbol": "DWPP",
    "Name": "First Trust Dorsey Wright People&#39;s Portfolio ETF"
  },
  {
    "Symbol": "DALI",
    "Name": "First Trust DorseyWright DALI 1 ETF"
  },
  {
    "Symbol": "FEM",
    "Name": "First Trust Emerging Markets AlphaDEX Fund"
  },
  {
    "Symbol": "RNEM",
    "Name": "First Trust Emerging Markets Equity Select ETF"
  },
  {
    "Symbol": "FEMB",
    "Name": "First Trust Emerging Markets Local Currency Bond ETF"
  },
  {
    "Symbol": "FEMS",
    "Name": "First Trust Emerging Markets Small Cap AlphaDEX Fund"
  },
  {
    "Symbol": "FTSM",
    "Name": "First Trust Enhanced Short Maturity ETF"
  },
  {
    "Symbol": "FEP",
    "Name": "First Trust Europe AlphaDEX Fund"
  },
  {
    "Symbol": "FEUZ",
    "Name": "First Trust Eurozone AlphaDEX ETF"
  },
  {
    "Symbol": "FGM",
    "Name": "First Trust Germany AlphaDEX Fund"
  },
  {
    "Symbol": "FTGC",
    "Name": "First Trust Global Tactical Commodity Strategy Fund"
  },
  {
    "Symbol": "FTLB",
    "Name": "First Trust Hedged BuyWrite Income ETF"
  },
  {
    "Symbol": "HYLS",
    "Name": "First Trust High Yield Long/Short ETF"
  },
  {
    "Symbol": "FHK",
    "Name": "First Trust Hong Kong AlphaDEX Fund"
  },
  {
    "Symbol": "NFTY",
    "Name": "First Trust India Nifty 50 Equal Weight ETF"
  },
  {
    "Symbol": "FTAG",
    "Name": "First Trust Indxx Global Agriculture ETF"
  },
  {
    "Symbol": "FTRI",
    "Name": "First Trust Indxx Global Natural Resources Income ETF"
  },
  {
    "Symbol": "LEGR",
    "Name": "First Trust Indxx Innovative Transaction & Process ETF"
  },
  {
    "Symbol": "FPXI",
    "Name": "First Trust International IPO ETF"
  },
  {
    "Symbol": "FJP",
    "Name": "First Trust Japan AlphaDEX Fund"
  },
  {
    "Symbol": "FEX",
    "Name": "First Trust Large Cap Core AlphaDEX Fund"
  },
  {
    "Symbol": "FTC",
    "Name": "First Trust Large Cap Growth AlphaDEX Fund"
  },
  {
    "Symbol": "RNLC",
    "Name": "First Trust Large Cap US Equity Select ETF"
  },
  {
    "Symbol": "FTA",
    "Name": "First Trust Large Cap Value AlphaDEX Fund"
  },
  {
    "Symbol": "FLN",
    "Name": "First Trust Latin America AlphaDEX Fund"
  },
  {
    "Symbol": "LMBS",
    "Name": "First Trust Low Duration Opportunities ETF"
  },
  {
    "Symbol": "FMB",
    "Name": "First Trust Managed Municipal ETF"
  },
  {
    "Symbol": "FMK",
    "Name": "First Trust Mega Cap AlphaDEX Fund"
  },
  {
    "Symbol": "FNX",
    "Name": "First Trust Mid Cap Core AlphaDEX Fund"
  },
  {
    "Symbol": "FNY",
    "Name": "First Trust Mid Cap Growth AlphaDEX Fund"
  },
  {
    "Symbol": "RNMC",
    "Name": "First Trust Mid Cap US Equity Select ETF"
  },
  {
    "Symbol": "FNK",
    "Name": "First Trust Mid Cap Value AlphaDEX Fund"
  },
  {
    "Symbol": "FAD",
    "Name": "First Trust Multi Cap Growth AlphaDEX Fund"
  },
  {
    "Symbol": "FAB",
    "Name": "First Trust Multi Cap Value AlphaDEX Fund"
  },
  {
    "Symbol": "MDIV",
    "Name": "First Trust Multi-Asset Diversified Income Index Fund"
  },
  {
    "Symbol": "MCEF",
    "Name": "First Trust Municipal CEF Income Opportunity ETF"
  },
  {
    "Symbol": "FMHI",
    "Name": "First Trust Municipal High Income ETF"
  },
  {
    "Symbol": "QABA",
    "Name": "First Trust NASDAQ ABA Community Bank Index Fund"
  },
  {
    "Symbol": "ROBT",
    "Name": "First Trust Nasdaq Artificial Intelligence and Robotics ETF"
  },
  {
    "Symbol": "FTXO",
    "Name": "First Trust Nasdaq Bank ETF"
  },
  {
    "Symbol": "QCLN",
    "Name": "First Trust NASDAQ Clean Edge Green Energy Index Fund"
  },
  {
    "Symbol": "GRID",
    "Name": "First Trust NASDAQ Clean Edge Smart Grid Infrastructure Index"
  },
  {
    "Symbol": "CIBR",
    "Name": "First Trust NASDAQ Cybersecurity ETF"
  },
  {
    "Symbol": "FTXG",
    "Name": "First Trust Nasdaq Food & Beverage ETF"
  },
  {
    "Symbol": "CARZ",
    "Name": "First Trust NASDAQ Global Auto Index Fund"
  },
  {
    "Symbol": "FTXN",
    "Name": "First Trust Nasdaq Oil & Gas ETF"
  },
  {
    "Symbol": "FTXH",
    "Name": "First Trust Nasdaq Pharmaceuticals ETF"
  },
  {
    "Symbol": "FTXD",
    "Name": "First Trust Nasdaq Retail ETF"
  },
  {
    "Symbol": "FTXL",
    "Name": "First Trust Nasdaq Semiconductor ETF"
  },
  {
    "Symbol": "FONE",
    "Name": "First Trust NASDAQ Smartphone Index Fund"
  },
  {
    "Symbol": "TDIV",
    "Name": "First Trust NASDAQ Technology Dividend Index Fund"
  },
  {
    "Symbol": "FTXR",
    "Name": "First Trust Nasdaq Transportation ETF"
  },
  {
    "Symbol": "QQEW",
    "Name": "First Trust NASDAQ-100 Equal Weighted Index Fund"
  },
  {
    "Symbol": "QQXT",
    "Name": "First Trust NASDAQ-100 Ex-Technology Sector Index Fund"
  },
  {
    "Symbol": "QTEC",
    "Name": "First Trust NASDAQ-100- Technology Index Fund"
  },
  {
    "Symbol": "AIRR",
    "Name": "First Trust RBA American Industrial Renaissance ETF"
  },
  {
    "Symbol": "RDVY",
    "Name": "First Trust Rising Dividend Achievers ETF"
  },
  {
    "Symbol": "RFAP",
    "Name": "First Trust RiverFront Dynamic Asia Pacific ETF"
  },
  {
    "Symbol": "RFDI",
    "Name": "First Trust RiverFront Dynamic Developed International ETF"
  },
  {
    "Symbol": "RFEM",
    "Name": "First Trust RiverFront Dynamic Emerging Markets ETF"
  },
  {
    "Symbol": "RFEU",
    "Name": "First Trust RiverFront Dynamic Europe ETF"
  },
  {
    "Symbol": "FID",
    "Name": "First Trust S&P International Dividend Aristocrats ETF"
  },
  {
    "Symbol": "FTSL",
    "Name": "First Trust Senior Loan Fund ETF"
  },
  {
    "Symbol": "FYX",
    "Name": "First Trust Small Cap Core AlphaDEX Fund"
  },
  {
    "Symbol": "FYC",
    "Name": "First Trust Small Cap Growth AlphaDEX Fund"
  },
  {
    "Symbol": "RNSC",
    "Name": "First Trust Small Cap US Equity Select ETF"
  },
  {
    "Symbol": "FYT",
    "Name": "First Trust Small Cap Value AlphaDEX Fund"
  },
  {
    "Symbol": "SDVY",
    "Name": "First Trust SMID Cap Rising Dividend Achievers ETF"
  },
  {
    "Symbol": "FKO",
    "Name": "First Trust South Korea AlphaDEX Fund"
  },
  {
    "Symbol": "FCVT",
    "Name": "First Trust SSI Strategic Convertible Securities ETF"
  },
  {
    "Symbol": "FDIV",
    "Name": "First Trust Strategic Income ETF"
  },
  {
    "Symbol": "FSZ",
    "Name": "First Trust Switzerland AlphaDEX Fund"
  },
  {
    "Symbol": "FIXD",
    "Name": "First Trust TCW Opportunistic Fixed Income ETF"
  },
  {
    "Symbol": "TUSA",
    "Name": "First Trust Total US Market AlphaDEX ETF"
  },
  {
    "Symbol": "FKU",
    "Name": "First Trust United Kingdom AlphaDEX Fund"
  },
  {
    "Symbol": "RNDV",
    "Name": "First Trust US Equity Dividend Select ETF"
  },
  {
    "Symbol": "FUNC",
    "Name": "First United Corporation"
  },
  {
    "Symbol": "FUSB",
    "Name": "First US Bancshares, Inc."
  },
  {
    "Symbol": "MYFW",
    "Name": "First Western Financial, Inc."
  },
  {
    "Symbol": "SVVC",
    "Name": "Firsthand Technology Value Fund, Inc."
  },
  {
    "Symbol": "FSV",
    "Name": "FirstService Corporation"
  },
  {
    "Symbol": "FISV",
    "Name": "Fiserv, Inc."
  },
  {
    "Symbol": "FIVE",
    "Name": "Five Below, Inc."
  },
  {
    "Symbol": "FPRX",
    "Name": "Five Prime Therapeutics, Inc."
  },
  {
    "Symbol": "FVE",
    "Name": "Five Star Senior Living Inc."
  },
  {
    "Symbol": "FIVN",
    "Name": "Five9, Inc."
  },
  {
    "Symbol": "FLEX",
    "Name": "Flex Ltd."
  },
  {
    "Symbol": "FLKS",
    "Name": "Flex Pharma, Inc."
  },
  {
    "Symbol": "FLXN",
    "Name": "Flexion Therapeutics, Inc."
  },
  {
    "Symbol": "SKOR",
    "Name": "FlexShares Credit-Scored US Corporate Bond Index Fund"
  },
  {
    "Symbol": "LKOR",
    "Name": "FlexShares Credit-Scored US Long Corporate Bond Index Fund"
  },
  {
    "Symbol": "MBSD",
    "Name": "FlexShares Disciplined Duration MBS Index Fund"
  },
  {
    "Symbol": "ASET",
    "Name": "FlexShares Real Assets Allocation Index Fund"
  },
  {
    "Symbol": "ESGG",
    "Name": "FlexShares STOXX Global ESG Impact Index Fund"
  },
  {
    "Symbol": "ESG",
    "Name": "FlexShares STOXX US ESG Impact Index Fund"
  },
  {
    "Symbol": "QLC",
    "Name": "FlexShares US Quality Large Cap Index Fund"
  },
  {
    "Symbol": "FPAY",
    "Name": "FlexShopper, Inc."
  },
  {
    "Symbol": "FLXS",
    "Name": "Flexsteel Industries, Inc."
  },
  {
    "Symbol": "FLIR",
    "Name": "FLIR Systems, Inc."
  },
  {
    "Symbol": "FLNT",
    "Name": "Fluent, Inc."
  },
  {
    "Symbol": "FLDM",
    "Name": "Fluidigm Corporation"
  },
  {
    "Symbol": "FFIC",
    "Name": "Flushing Financial Corporation"
  },
  {
    "Symbol": "FNCB",
    "Name": "FNCB Bancorp Inc."
  },
  {
    "Symbol": "FOMX",
    "Name": "Foamix Pharmaceuticals Ltd."
  },
  {
    "Symbol": "FOCS",
    "Name": "Focus Financial Partners Inc."
  },
  {
    "Symbol": "FONR",
    "Name": "Fonar Corporation"
  },
  {
    "Symbol": "FSCT",
    "Name": "ForeScout Technologies, Inc."
  },
  {
    "Symbol": "FRSX",
    "Name": "Foresight Autonomous Holdings Ltd."
  },
  {
    "Symbol": "FORM",
    "Name": "FormFactor, Inc."
  },
  {
    "Symbol": "FORTY",
    "Name": "Formula Systems (1985) Ltd."
  },
  {
    "Symbol": "FORR",
    "Name": "Forrester Research, Inc."
  },
  {
    "Symbol": "FRTA",
    "Name": "Forterra, Inc."
  },
  {
    "Symbol": "FTNT",
    "Name": "Fortinet, Inc."
  },
  {
    "Symbol": "FBIO",
    "Name": "Fortress Biotech, Inc."
  },
  {
    "Symbol": "FBIOP",
    "Name": "Fortress Biotech, Inc."
  },
  {
    "Symbol": "FTSV",
    "Name": "Forty Seven, Inc."
  },
  {
    "Symbol": "FMCIU",
    "Name": "Forum Merger II Corporation"
  },
  {
    "Symbol": "FWRD",
    "Name": "Forward Air Corporation"
  },
  {
    "Symbol": "FORD",
    "Name": "Forward Industries, Inc."
  },
  {
    "Symbol": "FWP",
    "Name": "Forward Pharma A/S"
  },
  {
    "Symbol": "FOSL",
    "Name": "Fossil Group, Inc."
  },
  {
    "Symbol": "FOXF",
    "Name": "Fox Factory Holding Corp."
  },
  {
    "Symbol": "FRAN",
    "Name": "Francesca&#39;s Holdings Corporation"
  },
  {
    "Symbol": "FELE",
    "Name": "Franklin Electric Co., Inc."
  },
  {
    "Symbol": "FRED",
    "Name": "Fred&#39;s, Inc."
  },
  {
    "Symbol": "RAIL",
    "Name": "Freightcar America, Inc."
  },
  {
    "Symbol": "FEIM",
    "Name": "Frequency Electronics, Inc."
  },
  {
    "Symbol": "FRPT",
    "Name": "Freshpet, Inc."
  },
  {
    "Symbol": "FTEO",
    "Name": "FRONTEO, Inc."
  },
  {
    "Symbol": "FTR",
    "Name": "Frontier Communications Corporation"
  },
  {
    "Symbol": "FRPH",
    "Name": "FRP Holdings, Inc."
  },
  {
    "Symbol": "FSBW",
    "Name": "FS Bancorp, Inc."
  },
  {
    "Symbol": "FSBC",
    "Name": "FSB Bancorp, Inc."
  },
  {
    "Symbol": "FTD",
    "Name": "FTD Companies, Inc."
  },
  {
    "Symbol": "FTEK",
    "Name": "Fuel Tech, Inc."
  },
  {
    "Symbol": "FCEL",
    "Name": "FuelCell Energy, Inc."
  },
  {
    "Symbol": "FLGT",
    "Name": "Fulgent Genetics, Inc."
  },
  {
    "Symbol": "FORK",
    "Name": "Fuling Global Inc."
  },
  {
    "Symbol": "FLL",
    "Name": "Full House Resorts, Inc."
  },
  {
    "Symbol": "FULT",
    "Name": "Fulton Financial Corporation"
  },
  {
    "Symbol": "FNKO",
    "Name": "Funko, Inc."
  },
  {
    "Symbol": "FSNN",
    "Name": "Fusion Connect, Inc."
  },
  {
    "Symbol": "FTFT",
    "Name": "Future FinTech Group Inc."
  },
  {
    "Symbol": "FFHL",
    "Name": "Fuwei Films (Holdings) Co., Ltd."
  },
  {
    "Symbol": "WILC",
    "Name": "G. Willi-Food International,  Ltd."
  },
  {
    "Symbol": "GTHX",
    "Name": "G1 Therapeutics, Inc."
  },
  {
    "Symbol": "FOANC",
    "Name": "Gabelli NextShares Trust"
  },
  {
    "Symbol": "GRBIC",
    "Name": "Gabelli NextShares Trust"
  },
  {
    "Symbol": "MOGLC",
    "Name": "Gabelli NextShares Trust"
  },
  {
    "Symbol": "PETZC",
    "Name": "Gabelli NextShares Trust"
  },
  {
    "Symbol": "GAIA",
    "Name": "Gaia, Inc."
  },
  {
    "Symbol": "GLPG",
    "Name": "Galapagos NV"
  },
  {
    "Symbol": "GALT",
    "Name": "Galectin Therapeutics Inc."
  },
  {
    "Symbol": "GLMD",
    "Name": "Galmed Pharmaceuticals Ltd."
  },
  {
    "Symbol": "GLPI",
    "Name": "Gaming and Leisure Properties, Inc."
  },
  {
    "Symbol": "GPIC",
    "Name": "Gaming Partners International Corporation"
  },
  {
    "Symbol": "GRMN",
    "Name": "Garmin Ltd."
  },
  {
    "Symbol": "GARS",
    "Name": "Garrison Capital Inc."
  },
  {
    "Symbol": "GLIBA",
    "Name": "GCI Liberty, Inc."
  },
  {
    "Symbol": "GLIBP",
    "Name": "GCI Liberty, Inc."
  },
  {
    "Symbol": "GDS",
    "Name": "GDS Holdings Limited"
  },
  {
    "Symbol": "GEMP",
    "Name": "Gemphire Therapeutics Inc."
  },
  {
    "Symbol": "GENC",
    "Name": "Gencor Industries Inc."
  },
  {
    "Symbol": "GFN",
    "Name": "General Finance Corporation"
  },
  {
    "Symbol": "GFNCP",
    "Name": "General Finance Corporation"
  },
  {
    "Symbol": "GFNSL",
    "Name": "General Finance Corporation"
  },
  {
    "Symbol": "GENE",
    "Name": "Genetic Technologies Ltd"
  },
  {
    "Symbol": "GNUS",
    "Name": "Genius Brands International, Inc."
  },
  {
    "Symbol": "GNMK",
    "Name": "GenMark Diagnostics, Inc."
  },
  {
    "Symbol": "GNCA",
    "Name": "Genocea Biosciences, Inc."
  },
  {
    "Symbol": "GHDX",
    "Name": "Genomic Health, Inc."
  },
  {
    "Symbol": "GNPX",
    "Name": "Genprex, Inc."
  },
  {
    "Symbol": "GNTX",
    "Name": "Gentex Corporation"
  },
  {
    "Symbol": "THRM",
    "Name": "Gentherm Inc"
  },
  {
    "Symbol": "GEOS",
    "Name": "Geospace Technologies Corporation"
  },
  {
    "Symbol": "GABC",
    "Name": "German American Bancorp, Inc."
  },
  {
    "Symbol": "GERN",
    "Name": "Geron Corporation"
  },
  {
    "Symbol": "GEVO",
    "Name": "Gevo, Inc."
  },
  {
    "Symbol": "ROCK",
    "Name": "Gibraltar Industries, Inc."
  },
  {
    "Symbol": "GIGM",
    "Name": "GigaMedia Limited"
  },
  {
    "Symbol": "GIII",
    "Name": "G-III Apparel Group, LTD."
  },
  {
    "Symbol": "GILT",
    "Name": "Gilat Satellite Networks Ltd."
  },
  {
    "Symbol": "GILD",
    "Name": "Gilead Sciences, Inc."
  },
  {
    "Symbol": "GBCI",
    "Name": "Glacier Bancorp, Inc."
  },
  {
    "Symbol": "GLAD",
    "Name": "Gladstone Capital Corporation"
  },
  {
    "Symbol": "GLADN",
    "Name": "Gladstone Capital Corporation"
  },
  {
    "Symbol": "GOOD",
    "Name": "Gladstone Commercial Corporation"
  },
  {
    "Symbol": "GOODM",
    "Name": "Gladstone Commercial Corporation"
  },
  {
    "Symbol": "GOODO",
    "Name": "Gladstone Commercial Corporation"
  },
  {
    "Symbol": "GOODP",
    "Name": "Gladstone Commercial Corporation"
  },
  {
    "Symbol": "GAIN",
    "Name": "Gladstone Investment Corporation"
  },
  {
    "Symbol": "GAINL",
    "Name": "Gladstone Investment Corporation"
  },
  {
    "Symbol": "GAINM",
    "Name": "Gladstone Investment Corporation"
  },
  {
    "Symbol": "LAND",
    "Name": "Gladstone Land Corporation"
  },
  {
    "Symbol": "LANDP",
    "Name": "Gladstone Land Corporation"
  },
  {
    "Symbol": "GLBZ",
    "Name": "Glen Burnie Bancorp"
  },
  {
    "Symbol": "GBT",
    "Name": "Global Blood Therapeutics, Inc."
  },
  {
    "Symbol": "ENT",
    "Name": "Global Eagle Entertainment Inc."
  },
  {
    "Symbol": "GBLI",
    "Name": "Global Indemnity Limited"
  },
  {
    "Symbol": "GBLIL",
    "Name": "Global Indemnity Limited"
  },
  {
    "Symbol": "GBLIZ",
    "Name": "Global Indemnity Limited"
  },
  {
    "Symbol": "SELF",
    "Name": "Global Self Storage, Inc."
  },
  {
    "Symbol": "GWRS",
    "Name": "Global Water Resources, Inc."
  },
  {
    "Symbol": "DRIV",
    "Name": "Global X Autonomous & Electric Vehicles ETF"
  },
  {
    "Symbol": "KRMA",
    "Name": "Global X Conscious Companies ETF"
  },
  {
    "Symbol": "FINX",
    "Name": "Global X FinTech ETF"
  },
  {
    "Symbol": "AIQ",
    "Name": "Global X Future Analytics Tech ETF"
  },
  {
    "Symbol": "BFIT",
    "Name": "Global X Health & Wellness Thematic ETF"
  },
  {
    "Symbol": "SNSR",
    "Name": "Global X Internet of Things ETF"
  },
  {
    "Symbol": "LNGR",
    "Name": "Global X Longevity Thematic ETF"
  },
  {
    "Symbol": "MILN",
    "Name": "Global X Millennials Thematic ETF"
  },
  {
    "Symbol": "EFAS",
    "Name": "Global X MSCI SuperDividend EAFE ETF"
  },
  {
    "Symbol": "QQQC",
    "Name": "Global X NASDAQ China Technology ETF"
  },
  {
    "Symbol": "BOTZ",
    "Name": "Global X Robotics & Artificial Intelligence ETF"
  },
  {
    "Symbol": "CATH",
    "Name": "Global X S&P 500 Catholic Values ETF"
  },
  {
    "Symbol": "SOCL",
    "Name": "Global X Social Media ETF"
  },
  {
    "Symbol": "ALTY",
    "Name": "Global X SuperDividend Alternatives ETF"
  },
  {
    "Symbol": "SRET",
    "Name": "Global X SuperDividend REIT ETF"
  },
  {
    "Symbol": "YLCO",
    "Name": "Global X Yieldco Index ETF"
  },
  {
    "Symbol": "GLBS",
    "Name": "Globus Maritime Limited"
  },
  {
    "Symbol": "GLUU",
    "Name": "Glu Mobile Inc."
  },
  {
    "Symbol": "GLYC",
    "Name": "GlycoMimetics, Inc."
  },
  {
    "Symbol": "GOGO",
    "Name": "Gogo Inc."
  },
  {
    "Symbol": "GLNG",
    "Name": "Golar LNG Limited"
  },
  {
    "Symbol": "GMLP",
    "Name": "Golar LNG Partners LP"
  },
  {
    "Symbol": "GMLPP",
    "Name": "Golar LNG Partners LP"
  },
  {
    "Symbol": "DNJR",
    "Name": "GOLDEN BULL LIMITED"
  },
  {
    "Symbol": "GDEN",
    "Name": "Golden Entertainment, Inc."
  },
  {
    "Symbol": "GOGL",
    "Name": "Golden Ocean Group Limited"
  },
  {
    "Symbol": "GBDC",
    "Name": "Golub Capital BDC, Inc."
  },
  {
    "Symbol": "GTIM",
    "Name": "Good Times Restaurants Inc."
  },
  {
    "Symbol": "GSHD",
    "Name": "Goosehead Insurance, Inc."
  },
  {
    "Symbol": "GPRO",
    "Name": "GoPro, Inc."
  },
  {
    "Symbol": "GPAQ",
    "Name": "Gordon Pointe Acquisition Corp."
  },
  {
    "Symbol": "GPAQU",
    "Name": "Gordon Pointe Acquisition Corp."
  },
  {
    "Symbol": "GPAQW",
    "Name": "Gordon Pointe Acquisition Corp."
  },
  {
    "Symbol": "GSHT",
    "Name": "Gores Holdings II, Inc."
  },
  {
    "Symbol": "GSHTU",
    "Name": "Gores Holdings II, Inc."
  },
  {
    "Symbol": "GSHTW",
    "Name": "Gores Holdings II, Inc."
  },
  {
    "Symbol": "GOV",
    "Name": "Government Properties Income Trust"
  },
  {
    "Symbol": "GOVNI",
    "Name": "Government Properties Income Trust"
  },
  {
    "Symbol": "LOPE",
    "Name": "Grand Canyon Education, Inc."
  },
  {
    "Symbol": "GRVY",
    "Name": "GRAVITY Co., Ltd."
  },
  {
    "Symbol": "GECC",
    "Name": "Great Elm Capital Corp."
  },
  {
    "Symbol": "GECCL",
    "Name": "Great Elm Capital Corp."
  },
  {
    "Symbol": "GECCM",
    "Name": "Great Elm Capital Corp."
  },
  {
    "Symbol": "GEC",
    "Name": "Great Elm Capital Group, Inc."
  },
  {
    "Symbol": "GLDD",
    "Name": "Great Lakes Dredge & Dock Corporation"
  },
  {
    "Symbol": "GSBC",
    "Name": "Great Southern Bancorp, Inc."
  },
  {
    "Symbol": "GNBC",
    "Name": "Green Bancorp, Inc."
  },
  {
    "Symbol": "GRBK",
    "Name": "Green Brick Partners, Inc."
  },
  {
    "Symbol": "GPP",
    "Name": "Green Plains Partners LP"
  },
  {
    "Symbol": "GPRE",
    "Name": "Green Plains, Inc."
  },
  {
    "Symbol": "GCBC",
    "Name": "Greene County Bancorp, Inc."
  },
  {
    "Symbol": "GLAC",
    "Name": "Greenland Acquisition Corporation"
  },
  {
    "Symbol": "GLACR",
    "Name": "Greenland Acquisition Corporation"
  },
  {
    "Symbol": "GLACU",
    "Name": "Greenland Acquisition Corporation"
  },
  {
    "Symbol": "GLACW",
    "Name": "Greenland Acquisition Corporation"
  },
  {
    "Symbol": "GLRE",
    "Name": "Greenlight Reinsurance, Ltd."
  },
  {
    "Symbol": "GRNQ",
    "Name": "Greenpro Capital Corp."
  },
  {
    "Symbol": "GSKY",
    "Name": "GreenSky, Inc."
  },
  {
    "Symbol": "GSUM",
    "Name": "Gridsum Holding Inc."
  },
  {
    "Symbol": "GRIF",
    "Name": "Griffin Industrial Realty, Inc."
  },
  {
    "Symbol": "GRFS",
    "Name": "Grifols, S.A."
  },
  {
    "Symbol": "GRIN",
    "Name": "Grindrod Shipping Holdings Ltd."
  },
  {
    "Symbol": "GRPN",
    "Name": "Groupon, Inc."
  },
  {
    "Symbol": "OMAB",
    "Name": "Grupo Aeroportuario del Centro Norte S.A.B. de C.V."
  },
  {
    "Symbol": "GGAL",
    "Name": "Grupo Financiero Galicia S.A."
  },
  {
    "Symbol": "GVP",
    "Name": "GSE Systems, Inc."
  },
  {
    "Symbol": "GSIT",
    "Name": "GSI Technology, Inc."
  },
  {
    "Symbol": "GSVC",
    "Name": "GSV Capital Corp"
  },
  {
    "Symbol": "GTXI",
    "Name": "GTx, Inc."
  },
  {
    "Symbol": "GTYH",
    "Name": "GTY Technology Holdings, Inc."
  },
  {
    "Symbol": "GTYHU",
    "Name": "GTY Technology Holdings, Inc."
  },
  {
    "Symbol": "GTYHW",
    "Name": "GTY Technology Holdings, Inc."
  },
  {
    "Symbol": "GBNK",
    "Name": "Guaranty Bancorp"
  },
  {
    "Symbol": "GNTY",
    "Name": "Guaranty Bancshares, Inc."
  },
  {
    "Symbol": "GFED",
    "Name": "Guaranty Federal Bancshares, Inc."
  },
  {
    "Symbol": "GIFI",
    "Name": "Gulf Island Fabrication, Inc."
  },
  {
    "Symbol": "GURE",
    "Name": "Gulf Resources, Inc."
  },
  {
    "Symbol": "GPOR",
    "Name": "Gulfport Energy Corporation"
  },
  {
    "Symbol": "GWPH",
    "Name": "GW Pharmaceuticals Plc"
  },
  {
    "Symbol": "GWGH",
    "Name": "GWG Holdings, Inc"
  },
  {
    "Symbol": "GYRO",
    "Name": "Gyrodyne , LLC"
  },
  {
    "Symbol": "HEES",
    "Name": "H&E Equipment Services, Inc."
  },
  {
    "Symbol": "HLG",
    "Name": "Hailiang Education Group Inc."
  },
  {
    "Symbol": "HNRG",
    "Name": "Hallador Energy Company"
  },
  {
    "Symbol": "HALL",
    "Name": "Hallmark Financial Services, Inc."
  },
  {
    "Symbol": "HALO",
    "Name": "Halozyme Therapeutics, Inc."
  },
  {
    "Symbol": "HBK",
    "Name": "Hamilton Bancorp, Inc."
  },
  {
    "Symbol": "HLNE",
    "Name": "Hamilton Lane Incorporated"
  },
  {
    "Symbol": "HJLI",
    "Name": "Hancock Jaffe Laboratories, Inc."
  },
  {
    "Symbol": "HJLIW",
    "Name": "Hancock Jaffe Laboratories, Inc."
  },
  {
    "Symbol": "HWC",
    "Name": "Hancock Whitney Corporation"
  },
  {
    "Symbol": "HWCPL",
    "Name": "Hancock Whitney Corporation"
  },
  {
    "Symbol": "HAFC",
    "Name": "Hanmi Financial Corporation"
  },
  {
    "Symbol": "HQCL",
    "Name": "Hanwha Q CELLS Co., Ltd."
  },
  {
    "Symbol": "HONE",
    "Name": "HarborOne Bancorp, Inc."
  },
  {
    "Symbol": "HLIT",
    "Name": "Harmonic Inc."
  },
  {
    "Symbol": "HFGIC",
    "Name": "Hartford Funds NextShares Trust"
  },
  {
    "Symbol": "HBIO",
    "Name": "Harvard Bioscience, Inc."
  },
  {
    "Symbol": "HCAP",
    "Name": "Harvest Capital Credit Corporation"
  },
  {
    "Symbol": "HCAPZ",
    "Name": "Harvest Capital Credit Corporation"
  },
  {
    "Symbol": "HAS",
    "Name": "Hasbro, Inc."
  },
  {
    "Symbol": "HA",
    "Name": "Hawaiian Holdings, Inc."
  },
  {
    "Symbol": "HWKN",
    "Name": "Hawkins, Inc."
  },
  {
    "Symbol": "HWBK",
    "Name": "Hawthorn Bancshares, Inc."
  },
  {
    "Symbol": "HYAC",
    "Name": "Haymaker Acquisition Corp."
  },
  {
    "Symbol": "HYACU",
    "Name": "Haymaker Acquisition Corp."
  },
  {
    "Symbol": "HYACW",
    "Name": "Haymaker Acquisition Corp."
  },
  {
    "Symbol": "HAYN",
    "Name": "Haynes International, Inc."
  },
  {
    "Symbol": "HDS",
    "Name": "HD Supply Holdings, Inc."
  },
  {
    "Symbol": "HIIQ",
    "Name": "Health Insurance Innovations, Inc."
  },
  {
    "Symbol": "HCSG",
    "Name": "Healthcare Services Group, Inc."
  },
  {
    "Symbol": "HQY",
    "Name": "HealthEquity, Inc."
  },
  {
    "Symbol": "HSTM",
    "Name": "HealthStream, Inc."
  },
  {
    "Symbol": "HTLD",
    "Name": "Heartland Express, Inc."
  },
  {
    "Symbol": "HTLF",
    "Name": "Heartland Financial USA, Inc."
  },
  {
    "Symbol": "HTBX",
    "Name": "Heat Biologics, Inc."
  },
  {
    "Symbol": "HEBT",
    "Name": "Hebron Technology Co., Ltd."
  },
  {
    "Symbol": "HSII",
    "Name": "Heidrick & Struggles International, Inc."
  },
  {
    "Symbol": "HELE",
    "Name": "Helen of Troy Limited"
  },
  {
    "Symbol": "HMNY",
    "Name": "Helios and Matheson Analytics Inc"
  },
  {
    "Symbol": "HSDT",
    "Name": "Helius Medical Technologies, Inc."
  },
  {
    "Symbol": "HMTV",
    "Name": "Hemisphere Media Group, Inc."
  },
  {
    "Symbol": "HNNA",
    "Name": "Hennessy Advisors, Inc."
  },
  {
    "Symbol": "HSIC",
    "Name": "Henry Schein, Inc."
  },
  {
    "Symbol": "HTBK",
    "Name": "Heritage Commerce Corp"
  },
  {
    "Symbol": "HFWA",
    "Name": "Heritage Financial Corporation"
  },
  {
    "Symbol": "HCCI",
    "Name": "Heritage-Crystal Clean, Inc."
  },
  {
    "Symbol": "MLHR",
    "Name": "Herman Miller, Inc."
  },
  {
    "Symbol": "HRTX",
    "Name": "Heron Therapeutics, Inc."
  },
  {
    "Symbol": "HSKA",
    "Name": "Heska Corporation"
  },
  {
    "Symbol": "HX",
    "Name": "Hexindai Inc."
  },
  {
    "Symbol": "HFFG",
    "Name": "HF Foods Group Inc."
  },
  {
    "Symbol": "HIBB",
    "Name": "Hibbett Sports, Inc."
  },
  {
    "Symbol": "SNLN",
    "Name": "Highland/iBoxx Senior Loan ETF"
  },
  {
    "Symbol": "HPJ",
    "Name": "Highpower International Inc"
  },
  {
    "Symbol": "HIHO",
    "Name": "Highway Holdings Limited"
  },
  {
    "Symbol": "HIMX",
    "Name": "Himax Technologies, Inc."
  },
  {
    "Symbol": "HIFS",
    "Name": "Hingham Institution for Savings"
  },
  {
    "Symbol": "HSGX",
    "Name": "Histogenics Corporation"
  },
  {
    "Symbol": "HCCH",
    "Name": "HL Acquisitions Corp."
  },
  {
    "Symbol": "HCCHR",
    "Name": "HL Acquisitions Corp."
  },
  {
    "Symbol": "HCCHU",
    "Name": "HL Acquisitions Corp."
  },
  {
    "Symbol": "HCCHW",
    "Name": "HL Acquisitions Corp."
  },
  {
    "Symbol": "HMNF",
    "Name": "HMN Financial, Inc."
  },
  {
    "Symbol": "HMSY",
    "Name": "HMS Holdings Corp"
  },
  {
    "Symbol": "HOLI",
    "Name": "Hollysys Automation Technologies, Ltd."
  },
  {
    "Symbol": "HOLX",
    "Name": "Hologic, Inc."
  },
  {
    "Symbol": "HBCP",
    "Name": "Home Bancorp, Inc."
  },
  {
    "Symbol": "HOMB",
    "Name": "Home BancShares, Inc."
  },
  {
    "Symbol": "HFBL",
    "Name": "Home Federal Bancorp, Inc. of Louisiana"
  },
  {
    "Symbol": "HMST",
    "Name": "HomeStreet, Inc."
  },
  {
    "Symbol": "HMTA",
    "Name": "HomeTown Bankshares Corporation"
  },
  {
    "Symbol": "HTBI",
    "Name": "HomeTrust Bancshares, Inc."
  },
  {
    "Symbol": "FIXX",
    "Name": "Homology Medicines, Inc."
  },
  {
    "Symbol": "HOFT",
    "Name": "Hooker Furniture Corporation"
  },
  {
    "Symbol": "HOPE",
    "Name": "Hope Bancorp, Inc."
  },
  {
    "Symbol": "HFBC",
    "Name": "HopFed Bancorp, Inc."
  },
  {
    "Symbol": "HBNC",
    "Name": "Horizon Bancorp, Inc."
  },
  {
    "Symbol": "HZNP",
    "Name": "Horizon Pharma plc"
  },
  {
    "Symbol": "HRZN",
    "Name": "Horizon Technology Finance Corporation"
  },
  {
    "Symbol": "DAX",
    "Name": "Horizons DAX Germany ETF"
  },
  {
    "Symbol": "QYLD",
    "Name": "Horizons NASDAQ-100 Covered Call ETF"
  },
  {
    "Symbol": "HDP",
    "Name": "Hortonworks, Inc."
  },
  {
    "Symbol": "HPT",
    "Name": "Hospitality Properties Trust"
  },
  {
    "Symbol": "TWNK",
    "Name": "Hostess Brands, Inc."
  },
  {
    "Symbol": "TWNKW",
    "Name": "Hostess Brands, Inc."
  },
  {
    "Symbol": "HMHC",
    "Name": "Houghton Mifflin Harcourt Company"
  },
  {
    "Symbol": "HWCC",
    "Name": "Houston Wire & Cable Company"
  },
  {
    "Symbol": "HOVNP",
    "Name": "Hovnanian Enterprises Inc"
  },
  {
    "Symbol": "HBMD",
    "Name": "Howard Bancorp, Inc."
  },
  {
    "Symbol": "HTGM",
    "Name": "HTG Molecular Diagnostics, Inc."
  },
  {
    "Symbol": "HTHT",
    "Name": "Huazhu Group Limited"
  },
  {
    "Symbol": "HUBG",
    "Name": "Hub Group, Inc."
  },
  {
    "Symbol": "HSON",
    "Name": "Hudson Global, Inc."
  },
  {
    "Symbol": "HDSN",
    "Name": "Hudson Technologies, Inc."
  },
  {
    "Symbol": "HUNT",
    "Name": "Hunter Maritime Acquisition Corp."
  },
  {
    "Symbol": "HUNTU",
    "Name": "Hunter Maritime Acquisition Corp."
  },
  {
    "Symbol": "HUNTW",
    "Name": "Hunter Maritime Acquisition Corp."
  },
  {
    "Symbol": "HBAN",
    "Name": "Huntington Bancshares Incorporated"
  },
  {
    "Symbol": "HBANN",
    "Name": "Huntington Bancshares Incorporated"
  },
  {
    "Symbol": "HBANO",
    "Name": "Huntington Bancshares Incorporated"
  },
  {
    "Symbol": "HURC",
    "Name": "Hurco Companies, Inc."
  },
  {
    "Symbol": "HURN",
    "Name": "Huron Consulting Group Inc."
  },
  {
    "Symbol": "HCM",
    "Name": "Hutchison China MediTech Limited"
  },
  {
    "Symbol": "HBP",
    "Name": "Huttig Building Products, Inc."
  },
  {
    "Symbol": "HVBC",
    "Name": "HV Bancorp, Inc."
  },
  {
    "Symbol": "HYGS",
    "Name": "Hydrogenics Corporation"
  },
  {
    "Symbol": "HYRE",
    "Name": "HyreCar Inc."
  },
  {
    "Symbol": "IDSY",
    "Name": "I.D. Systems, Inc."
  },
  {
    "Symbol": "IIIV",
    "Name": "i3 Verticals, Inc."
  },
  {
    "Symbol": "IAC",
    "Name": "IAC/InterActiveCorp"
  },
  {
    "Symbol": "IAM",
    "Name": "I-AM Capital Acquisition Company"
  },
  {
    "Symbol": "IAMXR",
    "Name": "I-AM Capital Acquisition Company"
  },
  {
    "Symbol": "IAMXW",
    "Name": "I-AM Capital Acquisition Company"
  },
  {
    "Symbol": "IBKC",
    "Name": "IBERIABANK Corporation"
  },
  {
    "Symbol": "IBKCO",
    "Name": "IBERIABANK Corporation"
  },
  {
    "Symbol": "IBKCP",
    "Name": "IBERIABANK Corporation"
  },
  {
    "Symbol": "ICAD",
    "Name": "icad inc."
  },
  {
    "Symbol": "IEP",
    "Name": "Icahn Enterprises L.P."
  },
  {
    "Symbol": "ICCH",
    "Name": "ICC Holdings, Inc."
  },
  {
    "Symbol": "ICFI",
    "Name": "ICF International, Inc."
  },
  {
    "Symbol": "ICHR",
    "Name": "Ichor Holdings"
  },
  {
    "Symbol": "ICLK",
    "Name": "iClick Interactive Asia Group Limited"
  },
  {
    "Symbol": "ICLR",
    "Name": "ICON plc"
  },
  {
    "Symbol": "ICON",
    "Name": "Iconix Brand Group, Inc."
  },
  {
    "Symbol": "ICUI",
    "Name": "ICU Medical, Inc."
  },
  {
    "Symbol": "IPWR",
    "Name": "Ideal Power Inc."
  },
  {
    "Symbol": "INVE",
    "Name": "Identiv, Inc."
  },
  {
    "Symbol": "IDRA",
    "Name": "Idera Pharmaceuticals, Inc."
  },
  {
    "Symbol": "IDXX",
    "Name": "IDEXX Laboratories, Inc."
  },
  {
    "Symbol": "IESC",
    "Name": "IES Holdings, Inc."
  },
  {
    "Symbol": "IROQ",
    "Name": "IF Bancorp, Inc."
  },
  {
    "Symbol": "IFMK",
    "Name": "iFresh Inc."
  },
  {
    "Symbol": "INFO",
    "Name": "IHS Markit Ltd."
  },
  {
    "Symbol": "IIVI",
    "Name": "II-VI Incorporated"
  },
  {
    "Symbol": "KANG",
    "Name": "iKang Healthcare Group, Inc."
  },
  {
    "Symbol": "IKNX",
    "Name": "Ikonics Corporation"
  },
  {
    "Symbol": "ILMN",
    "Name": "Illumina, Inc."
  },
  {
    "Symbol": "ISNS",
    "Name": "Image Sensing Systems, Inc."
  },
  {
    "Symbol": "IMMR",
    "Name": "Immersion Corporation"
  },
  {
    "Symbol": "ICCC",
    "Name": "ImmuCell Corporation"
  },
  {
    "Symbol": "IMDZ",
    "Name": "Immune Design Corp."
  },
  {
    "Symbol": "IMGN",
    "Name": "ImmunoGen, Inc."
  },
  {
    "Symbol": "IMMU",
    "Name": "Immunomedics, Inc."
  },
  {
    "Symbol": "IMRN",
    "Name": "Immuron Limited"
  },
  {
    "Symbol": "IMRNW",
    "Name": "Immuron Limited"
  },
  {
    "Symbol": "IMMP",
    "Name": "Immutep Limited"
  },
  {
    "Symbol": "IMPV",
    "Name": "Imperva, Inc."
  },
  {
    "Symbol": "PI",
    "Name": "Impinj, Inc."
  },
  {
    "Symbol": "IMMY",
    "Name": "Imprimis Pharmaceuticals, Inc."
  },
  {
    "Symbol": "IMV",
    "Name": "IMV Inc."
  },
  {
    "Symbol": "INCY",
    "Name": "Incyte Corporation"
  },
  {
    "Symbol": "INDB",
    "Name": "Independent Bank Corp."
  },
  {
    "Symbol": "IBCP",
    "Name": "Independent Bank Corporation"
  },
  {
    "Symbol": "IBTX",
    "Name": "Independent Bank Group, Inc"
  },
  {
    "Symbol": "INDU",
    "Name": "Industrea Acquisition Corp."
  },
  {
    "Symbol": "INDUU",
    "Name": "Industrea Acquisition Corp."
  },
  {
    "Symbol": "INDUW",
    "Name": "Industrea Acquisition Corp."
  },
  {
    "Symbol": "ILPT",
    "Name": "Industrial Logistics Properties Trust"
  },
  {
    "Symbol": "IDSA",
    "Name": "Industrial Services of America, Inc."
  },
  {
    "Symbol": "INFN",
    "Name": "Infinera Corporation"
  },
  {
    "Symbol": "INFI",
    "Name": "Infinity Pharmaceuticals, Inc."
  },
  {
    "Symbol": "IFRX",
    "Name": "InflaRx N.V."
  },
  {
    "Symbol": "III",
    "Name": "Information Services Group, Inc."
  },
  {
    "Symbol": "IEA",
    "Name": "Infrastructure and Energy Alternatives, Inc."
  },
  {
    "Symbol": "IEAWW",
    "Name": "Infrastructure and Energy Alternatives, Inc."
  },
  {
    "Symbol": "IMKTA",
    "Name": "Ingles Markets, Incorporated"
  },
  {
    "Symbol": "INWK",
    "Name": "InnerWorkings, Inc."
  },
  {
    "Symbol": "INOD",
    "Name": "Innodata Inc."
  },
  {
    "Symbol": "IPHS",
    "Name": "Innophos Holdings, Inc."
  },
  {
    "Symbol": "IOSP",
    "Name": "Innospec Inc."
  },
  {
    "Symbol": "INNT",
    "Name": "Innovate Biopharmaceuticals, Inc."
  },
  {
    "Symbol": "ISSC",
    "Name": "Innovative Solutions and Support, Inc."
  },
  {
    "Symbol": "INVA",
    "Name": "Innoviva, Inc."
  },
  {
    "Symbol": "INGN",
    "Name": "Inogen, Inc"
  },
  {
    "Symbol": "INOV",
    "Name": "Inovalon Holdings, Inc."
  },
  {
    "Symbol": "INO",
    "Name": "Inovio Pharmaceuticals, Inc."
  },
  {
    "Symbol": "INPX",
    "Name": "Inpixon"
  },
  {
    "Symbol": "INSG",
    "Name": "Inseego Corp."
  },
  {
    "Symbol": "NSIT",
    "Name": "Insight Enterprises, Inc."
  },
  {
    "Symbol": "ISIG",
    "Name": "Insignia Systems, Inc."
  },
  {
    "Symbol": "INSM",
    "Name": "Insmed, Inc."
  },
  {
    "Symbol": "INSE",
    "Name": "Inspired Entertainment, Inc."
  },
  {
    "Symbol": "IIIN",
    "Name": "Insteel Industries, Inc."
  },
  {
    "Symbol": "PODD",
    "Name": "Insulet Corporation"
  },
  {
    "Symbol": "INSY",
    "Name": "Insys Therapeutics, Inc."
  },
  {
    "Symbol": "NTEC",
    "Name": "Intec Pharma Ltd."
  },
  {
    "Symbol": "IART",
    "Name": "Integra LifeSciences Holdings Corporation"
  },
  {
    "Symbol": "IDTI",
    "Name": "Integrated Device Technology, Inc."
  },
  {
    "Symbol": "IMTE",
    "Name": "Integrated Media Technology Limited"
  },
  {
    "Symbol": "INTC",
    "Name": "Intel Corporation"
  },
  {
    "Symbol": "NTLA",
    "Name": "Intellia Therapeutics, Inc."
  },
  {
    "Symbol": "IPCI",
    "Name": "Intellipharmaceutics International Inc."
  },
  {
    "Symbol": "IPAR",
    "Name": "Inter Parfums, Inc."
  },
  {
    "Symbol": "IBKR",
    "Name": "Interactive Brokers Group, Inc."
  },
  {
    "Symbol": "ICPT",
    "Name": "Intercept Pharmaceuticals, Inc."
  },
  {
    "Symbol": "IDCC",
    "Name": "InterDigital, Inc."
  },
  {
    "Symbol": "TILE",
    "Name": "Interface, Inc."
  },
  {
    "Symbol": "LINK",
    "Name": "Interlink Electronics, Inc."
  },
  {
    "Symbol": "IMI",
    "Name": "Intermolecular, Inc."
  },
  {
    "Symbol": "INAP",
    "Name": "Internap Corporation"
  },
  {
    "Symbol": "IBOC",
    "Name": "International Bancshares Corporation"
  },
  {
    "Symbol": "IMXI",
    "Name": "International Money Express, Inc."
  },
  {
    "Symbol": "IMXIW",
    "Name": "International Money Express, Inc."
  },
  {
    "Symbol": "ISCA",
    "Name": "International Speedway Corporation"
  },
  {
    "Symbol": "IGLD",
    "Name": "Internet Gold Golden Lines Ltd."
  },
  {
    "Symbol": "IIJI",
    "Name": "Internet Initiative Japan, Inc."
  },
  {
    "Symbol": "IDXG",
    "Name": "Interpace Diagnostics Group, Inc."
  },
  {
    "Symbol": "XENT",
    "Name": "Intersect ENT, Inc."
  },
  {
    "Symbol": "INTX",
    "Name": "Intersections, Inc."
  },
  {
    "Symbol": "IVAC",
    "Name": "Intevac, Inc."
  },
  {
    "Symbol": "INTL",
    "Name": "INTL FCStone Inc."
  },
  {
    "Symbol": "ITCI",
    "Name": "Intra-Cellular Therapies Inc."
  },
  {
    "Symbol": "IIN",
    "Name": "IntriCon Corporation"
  },
  {
    "Symbol": "INTU",
    "Name": "Intuit Inc."
  },
  {
    "Symbol": "ISRG",
    "Name": "Intuitive Surgical, Inc."
  },
  {
    "Symbol": "PLW",
    "Name": "Invesco 1-30 Laddered Treasury ETF"
  },
  {
    "Symbol": "ADRA",
    "Name": "Invesco BLDRS Asia 50 ADR Index Fund"
  },
  {
    "Symbol": "ADRD",
    "Name": "Invesco BLDRS Developed Markets 100 ADR Index Fund"
  },
  {
    "Symbol": "ADRE",
    "Name": "Invesco BLDRS Emerging Markets 50 ADR Index Fund"
  },
  {
    "Symbol": "ADRU",
    "Name": "Invesco BLDRS Europe Select ADR Index Fund"
  },
  {
    "Symbol": "PKW",
    "Name": "Invesco BuyBack Achievers ETF"
  },
  {
    "Symbol": "PFM",
    "Name": "Invesco Dividend Achievers ETF"
  },
  {
    "Symbol": "PYZ",
    "Name": "Invesco DWA Basic Materials Momentum ETF"
  },
  {
    "Symbol": "PEZ",
    "Name": "Invesco DWA Consumer Cyclicals Momentum ETF"
  },
  {
    "Symbol": "PSL",
    "Name": "Invesco DWA Consumer Staples Momentum ETF"
  },
  {
    "Symbol": "PIZ",
    "Name": "Invesco DWA Developed Markets Momentum ETF"
  },
  {
    "Symbol": "PIE",
    "Name": "Invesco DWA Emerging Markets Momentum ETF"
  },
  {
    "Symbol": "PXI",
    "Name": "Invesco DWA Energy Momentum ETF"
  },
  {
    "Symbol": "PFI",
    "Name": "Invesco DWA Financial Momentum ETF"
  },
  {
    "Symbol": "PTH",
    "Name": "Invesco DWA Healthcare Momentum ETF"
  },
  {
    "Symbol": "PRN",
    "Name": "Invesco DWA Industrials Momentum ETF"
  },
  {
    "Symbol": "DWLV",
    "Name": "Invesco DWA Momentum & Low Volatility Rotation ETF"
  },
  {
    "Symbol": "PDP",
    "Name": "Invesco DWA Momentum ETF"
  },
  {
    "Symbol": "DWAQ",
    "Name": "Invesco DWA NASDAQ Momentum ETF"
  },
  {
    "Symbol": "DWAS",
    "Name": "Invesco DWA SmallCap Momentum ETF"
  },
  {
    "Symbol": "DWIN",
    "Name": "Invesco DWA Tactical Multi-Asset Income ETF"
  },
  {
    "Symbol": "DWTR",
    "Name": "Invesco DWA Tactical Sector Rotation ETF"
  },
  {
    "Symbol": "PTF",
    "Name": "Invesco DWA Technology Momentum ETF"
  },
  {
    "Symbol": "PUI",
    "Name": "Invesco DWA Utilities Momentum ETF"
  },
  {
    "Symbol": "IDLB",
    "Name": "Invesco FTSE International Low Beta Equal Weight ETF"
  },
  {
    "Symbol": "PRFZ",
    "Name": "Invesco FTSE RAFI US 1500 Small-Mid ETF"
  },
  {
    "Symbol": "PAGG",
    "Name": "Invesco Global Agriculture ETF"
  },
  {
    "Symbol": "PSAU",
    "Name": "Invesco Global Gold and Precious Metals ETF"
  },
  {
    "Symbol": "PIO",
    "Name": "Invesco Global Water ETF"
  },
  {
    "Symbol": "PGJ",
    "Name": "Invesco Golden Dragon China ETF"
  },
  {
    "Symbol": "PEY",
    "Name": "Invesco High Yield Equity Dividend Achievers ETF"
  },
  {
    "Symbol": "IPKW",
    "Name": "Invesco International BuyBack Achievers ETF"
  },
  {
    "Symbol": "PID",
    "Name": "Invesco International Dividend Achievers ETF"
  },
  {
    "Symbol": "KBWB",
    "Name": "Invesco KBW Bank ETF"
  },
  {
    "Symbol": "KBWD",
    "Name": "Invesco KBW High Dividend Yield Financial ETF"
  },
  {
    "Symbol": "KBWY",
    "Name": "Invesco KBW Premium Yield Equity REIT ETF"
  },
  {
    "Symbol": "KBWP",
    "Name": "Invesco KBW Property & Casualty Insurance ETF"
  },
  {
    "Symbol": "KBWR",
    "Name": "Invesco KBW Regional Banking ETF"
  },
  {
    "Symbol": "LDRI",
    "Name": "Invesco LadderRite 0-5 Year Corporate Bond ETF"
  },
  {
    "Symbol": "LALT",
    "Name": "Invesco Multi-Strategy Alternative ETF"
  },
  {
    "Symbol": "PNQI",
    "Name": "Invesco Nasdaq Internet ETF"
  },
  {
    "Symbol": "PDBC",
    "Name": "Invesco Optimum Yield Diversified Commodity Strategy No K-1 ET"
  },
  {
    "Symbol": "QQQ",
    "Name": "Invesco QQQ Trust, Series 1"
  },
  {
    "Symbol": "USLB",
    "Name": "Invesco Russell 1000 Low Beta Equal Weight ETF"
  },
  {
    "Symbol": "PSCD",
    "Name": "Invesco S&P SmallCap Consumer Discretionary ETF"
  },
  {
    "Symbol": "PSCC",
    "Name": "Invesco S&P SmallCap Consumer Staples ETF"
  },
  {
    "Symbol": "PSCE",
    "Name": "Invesco S&P SmallCap Energy ETF"
  },
  {
    "Symbol": "PSCF",
    "Name": "Invesco S&P SmallCap Financials ETF"
  },
  {
    "Symbol": "PSCH",
    "Name": "Invesco S&P SmallCap Health Care ETF"
  },
  {
    "Symbol": "PSCI",
    "Name": "Invesco S&P SmallCap Industrials ETF"
  },
  {
    "Symbol": "PSCT",
    "Name": "Invesco S&P SmallCap Information Technology ETF"
  },
  {
    "Symbol": "PSCM",
    "Name": "Invesco S&P SmallCap Materials ETF"
  },
  {
    "Symbol": "PSCU",
    "Name": "Invesco S&P SmallCap Utilities ETF"
  },
  {
    "Symbol": "VRIG",
    "Name": "Invesco Variable Rate Investment Grade ETF"
  },
  {
    "Symbol": "PHO",
    "Name": "Invesco Water Resources ETF"
  },
  {
    "Symbol": "ISTR",
    "Name": "Investar Holding Corporation"
  },
  {
    "Symbol": "ISBC",
    "Name": "Investors Bancorp, Inc."
  },
  {
    "Symbol": "ITIC",
    "Name": "Investors Title Company"
  },
  {
    "Symbol": "NVIV",
    "Name": "InVivo Therapeutics Holdings Corp."
  },
  {
    "Symbol": "IVTY",
    "Name": "Invuity, Inc."
  },
  {
    "Symbol": "IONS",
    "Name": "Ionis Pharmaceuticals, Inc."
  },
  {
    "Symbol": "IOVA",
    "Name": "Iovance Biotherapeutics, Inc."
  },
  {
    "Symbol": "IPAS",
    "Name": "iPass Inc."
  },
  {
    "Symbol": "IPGP",
    "Name": "IPG Photonics Corporation"
  },
  {
    "Symbol": "IPIC",
    "Name": "iPic Entertainment Inc."
  },
  {
    "Symbol": "CLRG",
    "Name": "IQ Chaikin U.S. Large Cap ETF"
  },
  {
    "Symbol": "CSML",
    "Name": "IQ Chaikin U.S. Small Cap ETF"
  },
  {
    "Symbol": "IQ",
    "Name": "iQIYI, Inc."
  },
  {
    "Symbol": "IRMD",
    "Name": "iRadimed Corporation"
  },
  {
    "Symbol": "IRTC",
    "Name": "iRhythm Technologies, Inc."
  },
  {
    "Symbol": "IRIX",
    "Name": "IRIDEX Corporation"
  },
  {
    "Symbol": "IRDM",
    "Name": "Iridium Communications Inc"
  },
  {
    "Symbol": "IRDMB",
    "Name": "Iridium Communications Inc"
  },
  {
    "Symbol": "IRBT",
    "Name": "iRobot Corporation"
  },
  {
    "Symbol": "IRWD",
    "Name": "Ironwood Pharmaceuticals, Inc."
  },
  {
    "Symbol": "IRCP",
    "Name": "IRSA Propiedades Comerciales S.A."
  },
  {
    "Symbol": "PMPT",
    "Name": "iSectors Post-MPT Growth ETF"
  },
  {
    "Symbol": "SLQD",
    "Name": "iShares 0-5 Year Investment Grade Corporate Bond ETF"
  },
  {
    "Symbol": "ISHG",
    "Name": "iShares 1-3 Year International Treasury Bond ETF"
  },
  {
    "Symbol": "SHY",
    "Name": "iShares 1-3 Year Treasury Bond ETF"
  },
  {
    "Symbol": "TLT",
    "Name": "iShares 20+ Year Treasury Bond ETF"
  },
  {
    "Symbol": "IEI",
    "Name": "iShares 3-7 Year Treasury Bond ETF"
  },
  {
    "Symbol": "IEF",
    "Name": "iShares 7-10 Year Treasury Bond ETF"
  },
  {
    "Symbol": "AIA",
    "Name": "iShares Asia 50 ETF"
  },
  {
    "Symbol": "USIG",
    "Name": "iShares Broad USD Investment Grade Corporate Bond ETF"
  },
  {
    "Symbol": "COMT",
    "Name": "iShares Commodities Select Strategy ETF"
  },
  {
    "Symbol": "ISTB",
    "Name": "iShares Core 1-5 Year USD Bond ETF"
  },
  {
    "Symbol": "IXUS",
    "Name": "iShares Core MSCI Total International Stock ETF"
  },
  {
    "Symbol": "IUSG",
    "Name": "iShares Core S&P U.S. Growth ETF"
  },
  {
    "Symbol": "IUSV",
    "Name": "iShares Core S&P U.S. Value ETF"
  },
  {
    "Symbol": "IUSB",
    "Name": "iShares Core Total USD Bond Market ETF"
  },
  {
    "Symbol": "HEWG",
    "Name": "iShares Currency Hedged MSCI Germany ETF"
  },
  {
    "Symbol": "SUSB",
    "Name": "iShares ESG 1-5 Year USD Corporate Bond ETF"
  },
  {
    "Symbol": "SUSC",
    "Name": "iShares ESG USD Corporate Bond ETF"
  },
  {
    "Symbol": "XT",
    "Name": "iShares Exponential Technologies ETF"
  },
  {
    "Symbol": "FALN",
    "Name": "iShares Fallen Angels USD Bond ETF"
  },
  {
    "Symbol": "IFEU",
    "Name": "iShares FTSE EPRA/NAREIT Europe Index Fund"
  },
  {
    "Symbol": "IFGL",
    "Name": "iShares FTSE EPRA/NAREIT Global Real Estate ex-U.S. Index Fund"
  },
  {
    "Symbol": "IGF",
    "Name": "iShares Global Infrastructure ETF"
  },
  {
    "Symbol": "GNMA",
    "Name": "iShares GNMA Bond ETF"
  },
  {
    "Symbol": "HYXE",
    "Name": "iShares iBoxx $ High Yield ex Oil & Gas Corporate Bond ETF"
  },
  {
    "Symbol": "IGIB",
    "Name": "iShares Intermediate-Term Corporate Bond ETF"
  },
  {
    "Symbol": "IGOV",
    "Name": "iShares International Treasury Bond ETF"
  },
  {
    "Symbol": "EMB",
    "Name": "iShares J.P. Morgan USD Emerging Markets Bond ETF"
  },
  {
    "Symbol": "MBB",
    "Name": "iShares MBS ETF"
  },
  {
    "Symbol": "JKI",
    "Name": "iShares Morningstar Mid-Cap ETF"
  },
  {
    "Symbol": "ACWX",
    "Name": "iShares MSCI ACWI ex US Index Fund"
  },
  {
    "Symbol": "ACWI",
    "Name": "iShares MSCI ACWI Index Fund"
  },
  {
    "Symbol": "AAXJ",
    "Name": "iShares MSCI All Country Asia ex Japan Index Fund"
  },
  {
    "Symbol": "EWZS",
    "Name": "iShares MSCI Brazil Small-Cap ETF"
  },
  {
    "Symbol": "MCHI",
    "Name": "iShares MSCI China ETF"
  },
  {
    "Symbol": "ESGD",
    "Name": "iShares MSCI EAFE ESG Optimized ETF"
  },
  {
    "Symbol": "SCZ",
    "Name": "iShares MSCI EAFE Small-Cap ETF"
  },
  {
    "Symbol": "ESGE",
    "Name": "iShares MSCI EM ESG Optimized ETF"
  },
  {
    "Symbol": "EEMA",
    "Name": "iShares MSCI Emerging Markets Asia ETF"
  },
  {
    "Symbol": "EMXC",
    "Name": "iShares MSCI Emerging Markets ex China ETF"
  },
  {
    "Symbol": "EUFN",
    "Name": "iShares MSCI Europe Financials Sector Index Fund"
  },
  {
    "Symbol": "IEUS",
    "Name": "iShares MSCI Europe Small-Cap ETF"
  },
  {
    "Symbol": "RING",
    "Name": "iShares MSCI Global Gold Miners ETF"
  },
  {
    "Symbol": "MPCT",
    "Name": "iShares MSCI Global Impact ETF"
  },
  {
    "Symbol": "ENZL",
    "Name": "iShares MSCI New Zealand ETF"
  },
  {
    "Symbol": "QAT",
    "Name": "iShares MSCI Qatar ETF"
  },
  {
    "Symbol": "TUR",
    "Name": "iShares MSCI Turkey ETF"
  },
  {
    "Symbol": "UAE",
    "Name": "iShares MSCI UAE ETF"
  },
  {
    "Symbol": "ESGU",
    "Name": "iShares MSCI USA ESG Optimized ETF"
  },
  {
    "Symbol": "IBB",
    "Name": "iShares Nasdaq Biotechnology Index Fund"
  },
  {
    "Symbol": "SOXX",
    "Name": "iShares PHLX SOX Semiconductor Sector Index Fund"
  },
  {
    "Symbol": "AMCA",
    "Name": "iShares Russell 1000 Pure U.S. Revenue ETF"
  },
  {
    "Symbol": "EMIF",
    "Name": "iShares S&P Emerging Markets Infrastructure Index Fund"
  },
  {
    "Symbol": "ICLN",
    "Name": "iShares S&P Global Clean Energy Index Fund"
  },
  {
    "Symbol": "WOOD",
    "Name": "iShares S&P Global Timber & Forestry Index Fund"
  },
  {
    "Symbol": "INDY",
    "Name": "iShares S&P India Nifty 50 Index Fund"
  },
  {
    "Symbol": "IJT",
    "Name": "iShares S&P Small-Cap 600 Growth ETF"
  },
  {
    "Symbol": "DVY",
    "Name": "iShares Select Dividend ETF"
  },
  {
    "Symbol": "SHV",
    "Name": "iShares Short Treasury Bond ETF"
  },
  {
    "Symbol": "IGSB",
    "Name": "iShares Short-Term Corporate Bond ETF"
  },
  {
    "Symbol": "PFF",
    "Name": "iShares U.S. Preferred Stock ETF"
  },
  {
    "Symbol": "ISRL",
    "Name": "Isramco, Inc."
  },
  {
    "Symbol": "ITI",
    "Name": "Iteris, Inc."
  },
  {
    "Symbol": "ITRM",
    "Name": "Iterum Therapeutics plc"
  },
  {
    "Symbol": "ITRI",
    "Name": "Itron, Inc."
  },
  {
    "Symbol": "ITRN",
    "Name": "Ituran Location and Control Ltd."
  },
  {
    "Symbol": "ITUS",
    "Name": "ITUS Corporation"
  },
  {
    "Symbol": "IVENC",
    "Name": "Ivy NextShares"
  },
  {
    "Symbol": "IVFGC",
    "Name": "Ivy NextShares"
  },
  {
    "Symbol": "IVFVC",
    "Name": "Ivy NextShares"
  },
  {
    "Symbol": "IZEA",
    "Name": "IZEA Worldwide, Inc."
  },
  {
    "Symbol": "JJSF",
    "Name": "J & J Snack Foods Corp."
  },
  {
    "Symbol": "MAYS",
    "Name": "J. W. Mays, Inc."
  },
  {
    "Symbol": "JBHT",
    "Name": "J.B. Hunt Transport Services, Inc."
  },
  {
    "Symbol": "JCOM",
    "Name": "j2 Global, Inc."
  },
  {
    "Symbol": "JKHY",
    "Name": "Jack Henry & Associates, Inc."
  },
  {
    "Symbol": "JACK",
    "Name": "Jack In The Box Inc."
  },
  {
    "Symbol": "JAGX",
    "Name": "Jaguar Health, Inc."
  },
  {
    "Symbol": "JAKK",
    "Name": "JAKKS Pacific, Inc."
  },
  {
    "Symbol": "JMBA",
    "Name": "Jamba, Inc."
  },
  {
    "Symbol": "JRVR",
    "Name": "James River Group Holdings, Ltd."
  },
  {
    "Symbol": "JSML",
    "Name": "Janus Henderson Small Cap Growth Alpha ETF"
  },
  {
    "Symbol": "JSMD",
    "Name": "Janus Henderson Small/Mid Cap Growth Alpha ETF"
  },
  {
    "Symbol": "JASN",
    "Name": "Jason Industries, Inc."
  },
  {
    "Symbol": "JASNW",
    "Name": "Jason Industries, Inc."
  },
  {
    "Symbol": "JAZZ",
    "Name": "Jazz Pharmaceuticals plc"
  },
  {
    "Symbol": "JD",
    "Name": "JD.com, Inc."
  },
  {
    "Symbol": "JSYN",
    "Name": "Jensyn Acquistion Corp."
  },
  {
    "Symbol": "JSYNR",
    "Name": "Jensyn Acquistion Corp."
  },
  {
    "Symbol": "JSYNU",
    "Name": "Jensyn Acquistion Corp."
  },
  {
    "Symbol": "JSYNW",
    "Name": "Jensyn Acquistion Corp."
  },
  {
    "Symbol": "JRSH",
    "Name": "Jerash Holdings (US), Inc."
  },
  {
    "Symbol": "JBLU",
    "Name": "JetBlue Airways Corporation"
  },
  {
    "Symbol": "JTPY",
    "Name": "JetPay Corporation"
  },
  {
    "Symbol": "JCTCF",
    "Name": "Jewett-Cameron Trading Company"
  },
  {
    "Symbol": "JMU",
    "Name": "JMU Limited"
  },
  {
    "Symbol": "JBSS",
    "Name": "John B. Sanfilippo & Son, Inc."
  },
  {
    "Symbol": "JOUT",
    "Name": "Johnson Outdoors Inc."
  },
  {
    "Symbol": "JNCE",
    "Name": "Jounce Therapeutics, Inc."
  },
  {
    "Symbol": "KTWO",
    "Name": "K2M Group Holdings, Inc."
  },
  {
    "Symbol": "KALU",
    "Name": "Kaiser Aluminum Corporation"
  },
  {
    "Symbol": "KALA",
    "Name": "Kala Pharmaceuticals, Inc."
  },
  {
    "Symbol": "KALV",
    "Name": "KalVista Pharmaceuticals, Inc."
  },
  {
    "Symbol": "KMDA",
    "Name": "Kamada Ltd."
  },
  {
    "Symbol": "KNDI",
    "Name": "Kandi Technologies Group, Inc."
  },
  {
    "Symbol": "KPTI",
    "Name": "Karyopharm Therapeutics Inc."
  },
  {
    "Symbol": "KAAC",
    "Name": "Kayne Anderson Acquisition Corp."
  },
  {
    "Symbol": "KAACU",
    "Name": "Kayne Anderson Acquisition Corp."
  },
  {
    "Symbol": "KAACW",
    "Name": "Kayne Anderson Acquisition Corp."
  },
  {
    "Symbol": "KZIA",
    "Name": "Kazia Therapeutics Limited"
  },
  {
    "Symbol": "KBLM",
    "Name": "KBL Merger Corp. IV"
  },
  {
    "Symbol": "KBLMR",
    "Name": "KBL Merger Corp. IV"
  },
  {
    "Symbol": "KBLMU",
    "Name": "KBL Merger Corp. IV"
  },
  {
    "Symbol": "KBLMW",
    "Name": "KBL Merger Corp. IV"
  },
  {
    "Symbol": "KBSF",
    "Name": "KBS Fashion Group Limited"
  },
  {
    "Symbol": "KCAP",
    "Name": "KCAP Financial, Inc."
  },
  {
    "Symbol": "KCAPL",
    "Name": "KCAP Financial, Inc."
  },
  {
    "Symbol": "KRNY",
    "Name": "Kearny Financial"
  },
  {
    "Symbol": "KELYA",
    "Name": "Kelly Services, Inc."
  },
  {
    "Symbol": "KELYB",
    "Name": "Kelly Services, Inc."
  },
  {
    "Symbol": "KMPH",
    "Name": "KemPharm, Inc."
  },
  {
    "Symbol": "KFFB",
    "Name": "Kentucky First Federal Bancorp"
  },
  {
    "Symbol": "KERX",
    "Name": "Keryx Biopharmaceuticals, Inc."
  },
  {
    "Symbol": "KEQU",
    "Name": "Kewaunee Scientific Corporation"
  },
  {
    "Symbol": "KTCC",
    "Name": "Key Tronic Corporation"
  },
  {
    "Symbol": "KZR",
    "Name": "Kezar Life Sciences, Inc."
  },
  {
    "Symbol": "KFRC",
    "Name": "Kforce, Inc."
  },
  {
    "Symbol": "KE",
    "Name": "Kimball Electronics, Inc."
  },
  {
    "Symbol": "KBAL",
    "Name": "Kimball International, Inc."
  },
  {
    "Symbol": "KIN",
    "Name": "Kindred Biosciences, Inc."
  },
  {
    "Symbol": "KGJI",
    "Name": "Kingold Jewelry Inc."
  },
  {
    "Symbol": "KINS",
    "Name": "Kingstone Companies, Inc"
  },
  {
    "Symbol": "KONE",
    "Name": "Kingtone Wirelessinfo Solution Holding Ltd"
  },
  {
    "Symbol": "KNSA",
    "Name": "Kiniksa Pharmaceuticals, Ltd."
  },
  {
    "Symbol": "KNSL",
    "Name": "Kinsale Capital Group, Inc."
  },
  {
    "Symbol": "KIRK",
    "Name": "Kirkland&#39;s, Inc."
  },
  {
    "Symbol": "KTOV",
    "Name": "Kitov Pharma Ltd."
  },
  {
    "Symbol": "KTOVW",
    "Name": "Kitov Pharma Ltd."
  },
  {
    "Symbol": "KLAC",
    "Name": "KLA-Tencor Corporation"
  },
  {
    "Symbol": "KLXEV",
    "Name": "KLX ENERGY SERVICES HOLDINGS, INC."
  },
  {
    "Symbol": "KLXI",
    "Name": "KLX Inc."
  },
  {
    "Symbol": "KLXIV",
    "Name": "KLX Inc."
  },
  {
    "Symbol": "KONA",
    "Name": "Kona Grill, Inc."
  },
  {
    "Symbol": "KOPN",
    "Name": "Kopin Corporation"
  },
  {
    "Symbol": "KRNT",
    "Name": "Kornit Digital Ltd."
  },
  {
    "Symbol": "KOSS",
    "Name": "Koss Corporation"
  },
  {
    "Symbol": "KWEB",
    "Name": "KraneShares Trust KraneShares CSI China Internet ETF"
  },
  {
    "Symbol": "KTOS",
    "Name": "Kratos Defense & Security Solutions, Inc."
  },
  {
    "Symbol": "KRYS",
    "Name": "Krystal Biotech, Inc."
  },
  {
    "Symbol": "KLIC",
    "Name": "Kulicke and Soffa Industries, Inc."
  },
  {
    "Symbol": "KURA",
    "Name": "Kura Oncology, Inc."
  },
  {
    "Symbol": "KVHI",
    "Name": "KVH Industries, Inc."
  },
  {
    "Symbol": "FSTR",
    "Name": "L.B. Foster Company"
  },
  {
    "Symbol": "LJPC",
    "Name": "La Jolla Pharmaceutical Company"
  },
  {
    "Symbol": "LSBK",
    "Name": "Lake Shore Bancorp, Inc."
  },
  {
    "Symbol": "LBAI",
    "Name": "Lakeland Bancorp, Inc."
  },
  {
    "Symbol": "LKFN",
    "Name": "Lakeland Financial Corporation"
  },
  {
    "Symbol": "LAKE",
    "Name": "Lakeland Industries, Inc."
  },
  {
    "Symbol": "LRCX",
    "Name": "Lam Research Corporation"
  },
  {
    "Symbol": "LAMR",
    "Name": "Lamar Advertising Company"
  },
  {
    "Symbol": "LANC",
    "Name": "Lancaster Colony Corporation"
  },
  {
    "Symbol": "LCA",
    "Name": "Landcadia Holdings, Inc."
  },
  {
    "Symbol": "LCAHU",
    "Name": "Landcadia Holdings, Inc."
  },
  {
    "Symbol": "LCAHW",
    "Name": "Landcadia Holdings, Inc."
  },
  {
    "Symbol": "LNDC",
    "Name": "Landec Corporation"
  },
  {
    "Symbol": "LARK",
    "Name": "Landmark Bancorp Inc."
  },
  {
    "Symbol": "LMRK",
    "Name": "Landmark Infrastructure Partners LP"
  },
  {
    "Symbol": "LMRKN",
    "Name": "Landmark Infrastructure Partners LP"
  },
  {
    "Symbol": "LMRKO",
    "Name": "Landmark Infrastructure Partners LP"
  },
  {
    "Symbol": "LMRKP",
    "Name": "Landmark Infrastructure Partners LP"
  },
  {
    "Symbol": "LE",
    "Name": "Lands&#39; End, Inc."
  },
  {
    "Symbol": "LSTR",
    "Name": "Landstar System, Inc."
  },
  {
    "Symbol": "LNTH",
    "Name": "Lantheus Holdings, Inc."
  },
  {
    "Symbol": "LTRX",
    "Name": "Lantronix, Inc."
  },
  {
    "Symbol": "LSCC",
    "Name": "Lattice Semiconductor Corporation"
  },
  {
    "Symbol": "LAUR",
    "Name": "Laureate Education, Inc."
  },
  {
    "Symbol": "LAWS",
    "Name": "Lawson Products, Inc."
  },
  {
    "Symbol": "LAZY",
    "Name": "Lazydays Holdings, Inc."
  },
  {
    "Symbol": "LCNB",
    "Name": "LCNB Corporation"
  },
  {
    "Symbol": "LPTX",
    "Name": "LEAP THERAPEUTICS, INC."
  },
  {
    "Symbol": "LGCY",
    "Name": "Legacy Reserves LP"
  },
  {
    "Symbol": "LGCYO",
    "Name": "Legacy Reserves LP"
  },
  {
    "Symbol": "LGCYP",
    "Name": "Legacy Reserves LP"
  },
  {
    "Symbol": "LTXB",
    "Name": "LegacyTexas Financial Group, Inc."
  },
  {
    "Symbol": "DDBI",
    "Name": "Legg Mason Developed EX-US Diversified Core ETF"
  },
  {
    "Symbol": "EDBI",
    "Name": "Legg Mason Emerging Markets Diversified Core ETF"
  },
  {
    "Symbol": "INFR",
    "Name": "Legg Mason Global Infrastructure ETF"
  },
  {
    "Symbol": "LVHD",
    "Name": "Legg Mason Low Volatility High Dividend ETF"
  },
  {
    "Symbol": "SQLV",
    "Name": "Legg Mason Small-Cap Quality Value ETF"
  },
  {
    "Symbol": "UDBI",
    "Name": "Legg Mason US Diversified Core ETF"
  },
  {
    "Symbol": "LACQ",
    "Name": "Leisure Acquisition Corp."
  },
  {
    "Symbol": "LACQU",
    "Name": "Leisure Acquisition Corp."
  },
  {
    "Symbol": "LACQW",
    "Name": "Leisure Acquisition Corp."
  },
  {
    "Symbol": "LMAT",
    "Name": "LeMaitre Vascular, Inc."
  },
  {
    "Symbol": "TREE",
    "Name": "LendingTree, Inc."
  },
  {
    "Symbol": "LEVL",
    "Name": "Level One Bancorp, Inc."
  },
  {
    "Symbol": "LXRX",
    "Name": "Lexicon Pharmaceuticals, Inc."
  },
  {
    "Symbol": "LX",
    "Name": "LexinFintech Holdings Ltd."
  },
  {
    "Symbol": "LFAC",
    "Name": "LF Capital Acquistion Corp."
  },
  {
    "Symbol": "LFACU",
    "Name": "LF Capital Acquistion Corp."
  },
  {
    "Symbol": "LFACW",
    "Name": "LF Capital Acquistion Corp."
  },
  {
    "Symbol": "LGIH",
    "Name": "LGI Homes, Inc."
  },
  {
    "Symbol": "LHCG",
    "Name": "LHC Group"
  },
  {
    "Symbol": "LLIT",
    "Name": "Lianluo Smart Limited"
  },
  {
    "Symbol": "LBRDA",
    "Name": "Liberty Broadband Corporation"
  },
  {
    "Symbol": "LBRDK",
    "Name": "Liberty Broadband Corporation"
  },
  {
    "Symbol": "LEXEA",
    "Name": "Liberty Expedia Holdings, Inc."
  },
  {
    "Symbol": "LEXEB",
    "Name": "Liberty Expedia Holdings, Inc."
  },
  {
    "Symbol": "LBTYA",
    "Name": "Liberty Global plc"
  },
  {
    "Symbol": "LBTYB",
    "Name": "Liberty Global plc"
  },
  {
    "Symbol": "LBTYK",
    "Name": "Liberty Global plc"
  },
  {
    "Symbol": "LILA",
    "Name": "Liberty Latin America Ltd."
  },
  {
    "Symbol": "LILAK",
    "Name": "Liberty Latin America Ltd."
  },
  {
    "Symbol": "BATRA",
    "Name": "Liberty Media Corporation"
  },
  {
    "Symbol": "BATRK",
    "Name": "Liberty Media Corporation"
  },
  {
    "Symbol": "FWONA",
    "Name": "Liberty Media Corporation"
  },
  {
    "Symbol": "FWONK",
    "Name": "Liberty Media Corporation"
  },
  {
    "Symbol": "LSXMA",
    "Name": "Liberty Media Corporation"
  },
  {
    "Symbol": "LSXMB",
    "Name": "Liberty Media Corporation"
  },
  {
    "Symbol": "LSXMK",
    "Name": "Liberty Media Corporation"
  },
  {
    "Symbol": "LTRPA",
    "Name": "Liberty TripAdvisor Holdings, Inc."
  },
  {
    "Symbol": "LTRPB",
    "Name": "Liberty TripAdvisor Holdings, Inc."
  },
  {
    "Symbol": "LPNT",
    "Name": "LifePoint Health, Inc."
  },
  {
    "Symbol": "LCUT",
    "Name": "Lifetime Brands, Inc."
  },
  {
    "Symbol": "LFVN",
    "Name": "Lifevantage Corporation"
  },
  {
    "Symbol": "LWAY",
    "Name": "Lifeway Foods, Inc."
  },
  {
    "Symbol": "LGND",
    "Name": "Ligand Pharmaceuticals Incorporated"
  },
  {
    "Symbol": "LTBR",
    "Name": "Lightbridge Corporation"
  },
  {
    "Symbol": "LPTH",
    "Name": "LightPath Technologies, Inc."
  },
  {
    "Symbol": "LLEX",
    "Name": "Lilis Energy, Inc."
  },
  {
    "Symbol": "LMB",
    "Name": "Limbach Holdings, Inc."
  },
  {
    "Symbol": "LLNW",
    "Name": "Limelight Networks, Inc."
  },
  {
    "Symbol": "LMST",
    "Name": "Limestone Bancorp, Inc."
  },
  {
    "Symbol": "LMNR",
    "Name": "Limoneira Co"
  },
  {
    "Symbol": "LINC",
    "Name": "Lincoln Educational Services Corporation"
  },
  {
    "Symbol": "LECO",
    "Name": "Lincoln Electric Holdings, Inc."
  },
  {
    "Symbol": "LIND",
    "Name": "Lindblad Expeditions Holdings Inc."
  },
  {
    "Symbol": "LINDW",
    "Name": "Lindblad Expeditions Holdings Inc."
  },
  {
    "Symbol": "LPCN",
    "Name": "Lipocine Inc."
  },
  {
    "Symbol": "YVR",
    "Name": "Liquid Media Group Ltd."
  },
  {
    "Symbol": "LQDA",
    "Name": "Liquidia Technologies, Inc."
  },
  {
    "Symbol": "LQDT",
    "Name": "Liquidity Services, Inc."
  },
  {
    "Symbol": "LFUS",
    "Name": "Littelfuse, Inc."
  },
  {
    "Symbol": "LIVN",
    "Name": "LivaNova PLC"
  },
  {
    "Symbol": "LOB",
    "Name": "Live Oak Bancshares, Inc."
  },
  {
    "Symbol": "LIVE",
    "Name": "Live Ventures Incorporated"
  },
  {
    "Symbol": "LPSN",
    "Name": "LivePerson, Inc."
  },
  {
    "Symbol": "LIVX",
    "Name": "LiveXLive Media, Inc."
  },
  {
    "Symbol": "LKQ",
    "Name": "LKQ Corporation"
  },
  {
    "Symbol": "LMFA",
    "Name": "LM Funding America, Inc."
  },
  {
    "Symbol": "LMFAW",
    "Name": "LM Funding America, Inc."
  },
  {
    "Symbol": "LOGI",
    "Name": "Logitech International S.A."
  },
  {
    "Symbol": "LOGM",
    "Name": "LogMein, Inc."
  },
  {
    "Symbol": "CNCR",
    "Name": "Loncar Cancer Immunotherapy ETF"
  },
  {
    "Symbol": "CHNA",
    "Name": "Loncar China BioPharma ETF"
  },
  {
    "Symbol": "LONE",
    "Name": "Lonestar Resources US Inc."
  },
  {
    "Symbol": "LOACU",
    "Name": "Longevity Acquisition Corporation"
  },
  {
    "Symbol": "LOOP",
    "Name": "Loop Industries, Inc."
  },
  {
    "Symbol": "LORL",
    "Name": "Loral Space and Communications, Inc."
  },
  {
    "Symbol": "LOXO",
    "Name": "Loxo Oncology, Inc."
  },
  {
    "Symbol": "LPLA",
    "Name": "LPL Financial Holdings Inc."
  },
  {
    "Symbol": "LRAD",
    "Name": "LRAD Corporation"
  },
  {
    "Symbol": "LYTS",
    "Name": "LSI Industries Inc."
  },
  {
    "Symbol": "LULU",
    "Name": "lululemon athletica inc."
  },
  {
    "Symbol": "LITE",
    "Name": "Lumentum Holdings Inc."
  },
  {
    "Symbol": "LMNX",
    "Name": "Luminex Corporation"
  },
  {
    "Symbol": "LUNA",
    "Name": "Luna Innovations Incorporated"
  },
  {
    "Symbol": "LBC",
    "Name": "Luther Burbank Corporation"
  },
  {
    "Symbol": "MBTF",
    "Name": "M B T Financial Corp"
  },
  {
    "Symbol": "MCBC",
    "Name": "Macatawa Bank Corporation"
  },
  {
    "Symbol": "MFNC",
    "Name": "Mackinac Financial Corporation"
  },
  {
    "Symbol": "MTSI",
    "Name": "MACOM Technology Solutions Holdings, Inc."
  },
  {
    "Symbol": "MGNX",
    "Name": "MacroGenics, Inc."
  },
  {
    "Symbol": "MDGL",
    "Name": "Madrigal Pharmaceuticals, Inc."
  },
  {
    "Symbol": "MAGS",
    "Name": "Magal Security Systems Ltd."
  },
  {
    "Symbol": "MGLN",
    "Name": "Magellan Health, Inc."
  },
  {
    "Symbol": "MGTA",
    "Name": "Magenta Therapeutics, Inc."
  },
  {
    "Symbol": "MGIC",
    "Name": "Magic Software Enterprises Ltd."
  },
  {
    "Symbol": "CALL",
    "Name": "magicJack VocalTec Ltd"
  },
  {
    "Symbol": "MNGA",
    "Name": "MagneGas Corporation"
  },
  {
    "Symbol": "MGYR",
    "Name": "Magyar Bancorp, Inc."
  },
  {
    "Symbol": "MHLD",
    "Name": "Maiden Holdings, Ltd."
  },
  {
    "Symbol": "MMYT",
    "Name": "MakeMyTrip Limited"
  },
  {
    "Symbol": "MBUU",
    "Name": "Malibu Boats, Inc."
  },
  {
    "Symbol": "MLVF",
    "Name": "Malvern Bancorp, Inc."
  },
  {
    "Symbol": "MAMS",
    "Name": "MAM Software Group, Inc."
  },
  {
    "Symbol": "TUSK",
    "Name": "Mammoth Energy Services, Inc."
  },
  {
    "Symbol": "RPIBC",
    "Name": "Managed Portfolio Series"
  },
  {
    "Symbol": "MANH",
    "Name": "Manhattan Associates, Inc."
  },
  {
    "Symbol": "LOAN",
    "Name": "Manhattan Bridge Capital, Inc"
  },
  {
    "Symbol": "MNTX",
    "Name": "Manitex International, Inc."
  },
  {
    "Symbol": "MTEX",
    "Name": "Mannatech, Incorporated"
  },
  {
    "Symbol": "MNKD",
    "Name": "MannKind Corporation"
  },
  {
    "Symbol": "MANT",
    "Name": "ManTech International Corporation"
  },
  {
    "Symbol": "MARA",
    "Name": "Marathon Patent Group, Inc."
  },
  {
    "Symbol": "MCHX",
    "Name": "Marchex, Inc."
  },
  {
    "Symbol": "MRIN",
    "Name": "Marin Software Incorporated"
  },
  {
    "Symbol": "MARPS",
    "Name": "Marine Petroleum Trust"
  },
  {
    "Symbol": "MRNS",
    "Name": "Marinus Pharmaceuticals, Inc."
  },
  {
    "Symbol": "MKTX",
    "Name": "MarketAxess Holdings, Inc."
  },
  {
    "Symbol": "MRLN",
    "Name": "Marlin Business Services Corp."
  },
  {
    "Symbol": "MAR",
    "Name": "Marriott International"
  },
  {
    "Symbol": "MBII",
    "Name": "Marrone Bio Innovations, Inc."
  },
  {
    "Symbol": "MRTN",
    "Name": "Marten Transport, Ltd."
  },
  {
    "Symbol": "MMLP",
    "Name": "Martin Midstream Partners L.P."
  },
  {
    "Symbol": "MRVL",
    "Name": "Marvell Technology Group Ltd."
  },
  {
    "Symbol": "MASI",
    "Name": "Masimo Corporation"
  },
  {
    "Symbol": "MTCH",
    "Name": "Match Group, Inc."
  },
  {
    "Symbol": "MTLS",
    "Name": "Materialise NV"
  },
  {
    "Symbol": "MPAC",
    "Name": "Matlin & Partners Acquisition Corporation"
  },
  {
    "Symbol": "MPACU",
    "Name": "Matlin & Partners Acquisition Corporation"
  },
  {
    "Symbol": "MPACW",
    "Name": "Matlin & Partners Acquisition Corporation"
  },
  {
    "Symbol": "MTRX",
    "Name": "Matrix Service Company"
  },
  {
    "Symbol": "MAT",
    "Name": "Mattel, Inc."
  },
  {
    "Symbol": "MATW",
    "Name": "Matthews International Corporation"
  },
  {
    "Symbol": "MXIM",
    "Name": "Maxim Integrated Products, Inc."
  },
  {
    "Symbol": "MXWL",
    "Name": "Maxwell Technologies, Inc."
  },
  {
    "Symbol": "MZOR",
    "Name": "Mazor Robotics Ltd."
  },
  {
    "Symbol": "MBFI",
    "Name": "MB Financial Inc."
  },
  {
    "Symbol": "MBFIO",
    "Name": "MB Financial Inc."
  },
  {
    "Symbol": "MCFT",
    "Name": "MCBC Holdings, Inc."
  },
  {
    "Symbol": "MGRC",
    "Name": "McGrath RentCorp"
  },
  {
    "Symbol": "MDCA",
    "Name": "MDC Partners Inc."
  },
  {
    "Symbol": "MFIN",
    "Name": "Medallion Financial Corp."
  },
  {
    "Symbol": "MFINL",
    "Name": "Medallion Financial Corp."
  },
  {
    "Symbol": "MTBC",
    "Name": "Medical Transcription Billing, Corp."
  },
  {
    "Symbol": "MTBCP",
    "Name": "Medical Transcription Billing, Corp."
  },
  {
    "Symbol": "MNOV",
    "Name": "MediciNova, Inc."
  },
  {
    "Symbol": "MDSO",
    "Name": "Medidata Solutions, Inc."
  },
  {
    "Symbol": "MDGS",
    "Name": "Medigus Ltd."
  },
  {
    "Symbol": "MDGSW",
    "Name": "Medigus Ltd."
  },
  {
    "Symbol": "MDWD",
    "Name": "MediWound Ltd."
  },
  {
    "Symbol": "MEDP",
    "Name": "Medpace Holdings, Inc."
  },
  {
    "Symbol": "MEIP",
    "Name": "MEI Pharma, Inc."
  },
  {
    "Symbol": "MGTX",
    "Name": "MeiraGTx Holdings plc"
  },
  {
    "Symbol": "MLCO",
    "Name": "Melco Resorts & Entertainment Limited"
  },
  {
    "Symbol": "MLNT",
    "Name": "Melinta Therapeutics, Inc."
  },
  {
    "Symbol": "MLNX",
    "Name": "Mellanox Technologies, Ltd."
  },
  {
    "Symbol": "MELR",
    "Name": "Melrose Bancorp, Inc."
  },
  {
    "Symbol": "MNLO",
    "Name": "Menlo Therapeutics Inc."
  },
  {
    "Symbol": "MTSL",
    "Name": "MER Telemanagement Solutions Ltd."
  },
  {
    "Symbol": "MELI",
    "Name": "MercadoLibre, Inc."
  },
  {
    "Symbol": "MBNAA",
    "Name": "Mercantil Bank Holding Corporation"
  },
  {
    "Symbol": "MBNAB",
    "Name": "Mercantil Bank Holding Corporation"
  },
  {
    "Symbol": "MBWM",
    "Name": "Mercantile Bank Corporation"
  },
  {
    "Symbol": "MERC",
    "Name": "Mercer International Inc."
  },
  {
    "Symbol": "MBIN",
    "Name": "Merchants Bancorp"
  },
  {
    "Symbol": "MRCY",
    "Name": "Mercury Systems Inc"
  },
  {
    "Symbol": "EBSB",
    "Name": "Meridian Bancorp, Inc."
  },
  {
    "Symbol": "VIVO",
    "Name": "Meridian Bioscience Inc."
  },
  {
    "Symbol": "MRBK",
    "Name": "Meridian Corporation"
  },
  {
    "Symbol": "MMSI",
    "Name": "Merit Medical Systems, Inc."
  },
  {
    "Symbol": "MACK",
    "Name": "Merrimack Pharmaceuticals, Inc."
  },
  {
    "Symbol": "MRSN",
    "Name": "Mersana Therapeutics, Inc."
  },
  {
    "Symbol": "MRUS",
    "Name": "Merus N.V."
  },
  {
    "Symbol": "MESA",
    "Name": "Mesa Air Group, Inc."
  },
  {
    "Symbol": "MLAB",
    "Name": "Mesa Laboratories, Inc."
  },
  {
    "Symbol": "MESO",
    "Name": "Mesoblast Limited"
  },
  {
    "Symbol": "CASH",
    "Name": "Meta Financial Group, Inc."
  },
  {
    "Symbol": "MEOH",
    "Name": "Methanex Corporation"
  },
  {
    "Symbol": "MGEE",
    "Name": "MGE Energy Inc."
  },
  {
    "Symbol": "MGPI",
    "Name": "MGP Ingredients, Inc."
  },
  {
    "Symbol": "MBOT",
    "Name": "Microbot Medical Inc."
  },
  {
    "Symbol": "MCHP",
    "Name": "Microchip Technology Incorporated"
  },
  {
    "Symbol": "MU",
    "Name": "Micron Technology, Inc."
  },
  {
    "Symbol": "MSFT",
    "Name": "Microsoft Corporation"
  },
  {
    "Symbol": "MSTR",
    "Name": "MicroStrategy Incorporated"
  },
  {
    "Symbol": "MVIS",
    "Name": "Microvision, Inc."
  },
  {
    "Symbol": "MICT",
    "Name": "MICT, Inc."
  },
  {
    "Symbol": "MPB",
    "Name": "Mid Penn Bancorp"
  },
  {
    "Symbol": "MTP",
    "Name": "Midatech Pharma PLC"
  },
  {
    "Symbol": "MCEP",
    "Name": "Mid-Con Energy Partners, LP"
  },
  {
    "Symbol": "MBCN",
    "Name": "Middlefield Banc Corp."
  },
  {
    "Symbol": "MSEX",
    "Name": "Middlesex Water Company"
  },
  {
    "Symbol": "MSBI",
    "Name": "Midland States Bancorp, Inc."
  },
  {
    "Symbol": "MSVB",
    "Name": "Mid-Southern Bancorp, Inc."
  },
  {
    "Symbol": "MOFG",
    "Name": "MidWestOne Financial Group, Inc."
  },
  {
    "Symbol": "MIME",
    "Name": "Mimecast Limited"
  },
  {
    "Symbol": "MDXG",
    "Name": "MiMedx Group, Inc"
  },
  {
    "Symbol": "MNDO",
    "Name": "MIND C.T.I. Ltd."
  },
  {
    "Symbol": "MB",
    "Name": "MINDBODY, Inc."
  },
  {
    "Symbol": "NERV",
    "Name": "Minerva Neurosciences, Inc"
  },
  {
    "Symbol": "MGEN",
    "Name": "Miragen Therapeutics, Inc."
  },
  {
    "Symbol": "MRTX",
    "Name": "Mirati Therapeutics, Inc."
  },
  {
    "Symbol": "MSON",
    "Name": "MISONIX, Inc."
  },
  {
    "Symbol": "MIND",
    "Name": "Mitcham Industries, Inc."
  },
  {
    "Symbol": "MINDP",
    "Name": "Mitcham Industries, Inc."
  },
  {
    "Symbol": "MITK",
    "Name": "Mitek Systems, Inc."
  },
  {
    "Symbol": "MITL",
    "Name": "Mitel Networks Corporation"
  },
  {
    "Symbol": "MKSI",
    "Name": "MKS Instruments, Inc."
  },
  {
    "Symbol": "MMAC",
    "Name": "MMA Capital Management, LLC"
  },
  {
    "Symbol": "MINI",
    "Name": "Mobile Mini, Inc."
  },
  {
    "Symbol": "MOBL",
    "Name": "MobileIron, Inc."
  },
  {
    "Symbol": "MMDM",
    "Name": "Modern Media Acquisition Corp."
  },
  {
    "Symbol": "MMDMR",
    "Name": "Modern Media Acquisition Corp."
  },
  {
    "Symbol": "MMDMU",
    "Name": "Modern Media Acquisition Corp."
  },
  {
    "Symbol": "MMDMW",
    "Name": "Modern Media Acquisition Corp."
  },
  {
    "Symbol": "MOGO",
    "Name": "Mogo Finance Technology Inc."
  },
  {
    "Symbol": "MTEM",
    "Name": "Molecular Templates, Inc."
  },
  {
    "Symbol": "MBRX",
    "Name": "Moleculin Biotech, Inc."
  },
  {
    "Symbol": "MNTA",
    "Name": "Momenta Pharmaceuticals, Inc."
  },
  {
    "Symbol": "MOMO",
    "Name": "Momo Inc."
  },
  {
    "Symbol": "MKGI",
    "Name": "Monaker Group, Inc."
  },
  {
    "Symbol": "MCRI",
    "Name": "Monarch Casino & Resort, Inc."
  },
  {
    "Symbol": "MDLZ",
    "Name": "Mondelez International, Inc."
  },
  {
    "Symbol": "MGI",
    "Name": "Moneygram International, Inc."
  },
  {
    "Symbol": "MDB",
    "Name": "MongoDB, Inc."
  },
  {
    "Symbol": "MPWR",
    "Name": "Monolithic Power Systems, Inc."
  },
  {
    "Symbol": "TYPE",
    "Name": "Monotype Imaging Holdings Inc."
  },
  {
    "Symbol": "MNRO",
    "Name": "Monro, Inc."
  },
  {
    "Symbol": "MRCC",
    "Name": "Monroe Capital Corporation"
  },
  {
    "Symbol": "MNST",
    "Name": "Monster Beverage Corporation"
  },
  {
    "Symbol": "MORN",
    "Name": "Morningstar, Inc."
  },
  {
    "Symbol": "MOR",
    "Name": "MorphoSys AG"
  },
  {
    "Symbol": "MOSY",
    "Name": "MoSys, Inc."
  },
  {
    "Symbol": "MTFB",
    "Name": "Motif Bio plc"
  },
  {
    "Symbol": "MTFBW",
    "Name": "Motif Bio plc"
  },
  {
    "Symbol": "MPAA",
    "Name": "Motorcar Parts of America, Inc."
  },
  {
    "Symbol": "MOTS",
    "Name": "Motus GI Holdings, Inc."
  },
  {
    "Symbol": "MPVD",
    "Name": "Mountain Province Diamonds Inc."
  },
  {
    "Symbol": "MOXC",
    "Name": "Moxian, Inc."
  },
  {
    "Symbol": "MSBF",
    "Name": "MSB Financial Corp."
  },
  {
    "Symbol": "MTEC",
    "Name": "MTech Acquisition Corp."
  },
  {
    "Symbol": "MTECU",
    "Name": "MTech Acquisition Corp."
  },
  {
    "Symbol": "MTECW",
    "Name": "MTech Acquisition Corp."
  },
  {
    "Symbol": "MTGE",
    "Name": "MTGE Investment Corp."
  },
  {
    "Symbol": "MTGEP",
    "Name": "MTGE Investment Corp."
  },
  {
    "Symbol": "MTSC",
    "Name": "MTS Systems Corporation"
  },
  {
    "Symbol": "MUDS",
    "Name": "Mudrick Capital Acquisition Corporation"
  },
  {
    "Symbol": "MUDSU",
    "Name": "Mudrick Capital Acquisition Corporation"
  },
  {
    "Symbol": "MUDSW",
    "Name": "Mudrick Capital Acquisition Corporation"
  },
  {
    "Symbol": "LABL",
    "Name": "Multi-Color Corporation"
  },
  {
    "Symbol": "MBIO",
    "Name": "Mustang Bio, Inc."
  },
  {
    "Symbol": "MFSF",
    "Name": "MutualFirst Financial Inc."
  },
  {
    "Symbol": "MVBF",
    "Name": "MVB Financial Corp."
  },
  {
    "Symbol": "MYSZ",
    "Name": "My Size, Inc."
  },
  {
    "Symbol": "MYL",
    "Name": "Mylan N.V."
  },
  {
    "Symbol": "MYND",
    "Name": "MYnd Analytics, Inc."
  },
  {
    "Symbol": "MYNDW",
    "Name": "MYnd Analytics, Inc."
  },
  {
    "Symbol": "MYOK",
    "Name": "MyoKardia, Inc."
  },
  {
    "Symbol": "MYOS",
    "Name": "MYOS RENS Technology Inc."
  },
  {
    "Symbol": "MYRG",
    "Name": "MYR Group, Inc."
  },
  {
    "Symbol": "MYGN",
    "Name": "Myriad Genetics, Inc."
  },
  {
    "Symbol": "NBRV",
    "Name": "Nabriva Therapeutics plc"
  },
  {
    "Symbol": "NAKD",
    "Name": "Naked Brand Group Limited"
  },
  {
    "Symbol": "NNDM",
    "Name": "Nano Dimension Ltd."
  },
  {
    "Symbol": "NANO",
    "Name": "Nanometrics Incorporated"
  },
  {
    "Symbol": "NSTG",
    "Name": "NanoString Technologies, Inc."
  },
  {
    "Symbol": "NAOV",
    "Name": "NanoVibronix, Inc."
  },
  {
    "Symbol": "NH",
    "Name": "NantHealth, Inc."
  },
  {
    "Symbol": "NK",
    "Name": "NantKwest, Inc."
  },
  {
    "Symbol": "NSSC",
    "Name": "NAPCO Security Technologies, Inc."
  },
  {
    "Symbol": "NDAQ",
    "Name": "Nasdaq, Inc."
  },
  {
    "Symbol": "NTRA",
    "Name": "Natera, Inc."
  },
  {
    "Symbol": "NATH",
    "Name": "Nathan&#39;s Famous, Inc."
  },
  {
    "Symbol": "NAUH",
    "Name": "National American University Holdings, Inc."
  },
  {
    "Symbol": "NKSH",
    "Name": "National Bankshares, Inc."
  },
  {
    "Symbol": "FIZZ",
    "Name": "National Beverage Corp."
  },
  {
    "Symbol": "NCMI",
    "Name": "National CineMedia, Inc."
  },
  {
    "Symbol": "NCOM",
    "Name": "National Commerce Corporation"
  },
  {
    "Symbol": "NESR",
    "Name": "National Energy Services Reunited Corp."
  },
  {
    "Symbol": "NESRW",
    "Name": "National Energy Services Reunited Corp."
  },
  {
    "Symbol": "NGHC",
    "Name": "National General Holdings Corp"
  },
  {
    "Symbol": "NGHCN",
    "Name": "National General Holdings Corp"
  },
  {
    "Symbol": "NGHCO",
    "Name": "National General Holdings Corp"
  },
  {
    "Symbol": "NGHCP",
    "Name": "National General Holdings Corp"
  },
  {
    "Symbol": "NGHCZ",
    "Name": "National General Holdings Corp"
  },
  {
    "Symbol": "NHLD",
    "Name": "National Holdings Corporation"
  },
  {
    "Symbol": "NHLDW",
    "Name": "National Holdings Corporation"
  },
  {
    "Symbol": "NATI",
    "Name": "National Instruments Corporation"
  },
  {
    "Symbol": "NRC",
    "Name": "National Research Corporation"
  },
  {
    "Symbol": "NSEC",
    "Name": "National Security Group, Inc."
  },
  {
    "Symbol": "EYE",
    "Name": "National Vision Holdings, Inc."
  },
  {
    "Symbol": "NWLI",
    "Name": "National Western Life Group, Inc."
  },
  {
    "Symbol": "NAII",
    "Name": "Natural Alternatives International, Inc."
  },
  {
    "Symbol": "NHTC",
    "Name": "Natural Health Trends Corp."
  },
  {
    "Symbol": "NATR",
    "Name": "Nature&#39;s Sunshine Products, Inc."
  },
  {
    "Symbol": "BABY",
    "Name": "Natus Medical Incorporated"
  },
  {
    "Symbol": "JSM",
    "Name": "Navient Corporation"
  },
  {
    "Symbol": "NAVI",
    "Name": "Navient Corporation"
  },
  {
    "Symbol": "NBTB",
    "Name": "NBT Bancorp Inc."
  },
  {
    "Symbol": "NCSM",
    "Name": "NCS Multistage Holdings, Inc."
  },
  {
    "Symbol": "NEBU",
    "Name": "Nebula Acquisition Corporation"
  },
  {
    "Symbol": "NEBUU",
    "Name": "Nebula Acquisition Corporation"
  },
  {
    "Symbol": "NEBUW",
    "Name": "Nebula Acquisition Corporation"
  },
  {
    "Symbol": "NKTR",
    "Name": "Nektar Therapeutics"
  },
  {
    "Symbol": "NMRD",
    "Name": "Nemaura Medical Inc."
  },
  {
    "Symbol": "NEOG",
    "Name": "Neogen Corporation"
  },
  {
    "Symbol": "NEO",
    "Name": "NeoGenomics, Inc."
  },
  {
    "Symbol": "NTGN",
    "Name": "Neon Therapeutics, Inc."
  },
  {
    "Symbol": "NEON",
    "Name": "Neonode Inc."
  },
  {
    "Symbol": "NEOS",
    "Name": "Neos Therapeutics, Inc."
  },
  {
    "Symbol": "NVCN",
    "Name": "Neovasc Inc."
  },
  {
    "Symbol": "NEPT",
    "Name": "Neptune Technologies & Bioresources Inc"
  },
  {
    "Symbol": "UEPS",
    "Name": "Net 1 UEPS Technologies, Inc."
  },
  {
    "Symbol": "NETE",
    "Name": "Net Element, Inc."
  },
  {
    "Symbol": "NTAP",
    "Name": "NetApp, Inc."
  },
  {
    "Symbol": "NTES",
    "Name": "NetEase, Inc."
  },
  {
    "Symbol": "NFLX",
    "Name": "Netflix, Inc."
  },
  {
    "Symbol": "NTGR",
    "Name": "NETGEAR, Inc."
  },
  {
    "Symbol": "NLST",
    "Name": "Netlist, Inc."
  },
  {
    "Symbol": "NTCT",
    "Name": "NetScout Systems, Inc."
  },
  {
    "Symbol": "NTWK",
    "Name": "NetSol Technologies Inc."
  },
  {
    "Symbol": "CUR",
    "Name": "Neuralstem, Inc."
  },
  {
    "Symbol": "NBIX",
    "Name": "Neurocrine Biosciences, Inc."
  },
  {
    "Symbol": "NURO",
    "Name": "NeuroMetrix, Inc."
  },
  {
    "Symbol": "NUROW",
    "Name": "NeuroMetrix, Inc."
  },
  {
    "Symbol": "STIM",
    "Name": "Neuronetics, Inc."
  },
  {
    "Symbol": "NTRP",
    "Name": "Neurotrope, Inc."
  },
  {
    "Symbol": "NBEV",
    "Name": "New Age Beverages Corporation"
  },
  {
    "Symbol": "NYMT",
    "Name": "New York Mortgage Trust, Inc."
  },
  {
    "Symbol": "NYMTN",
    "Name": "New York Mortgage Trust, Inc."
  },
  {
    "Symbol": "NYMTO",
    "Name": "New York Mortgage Trust, Inc."
  },
  {
    "Symbol": "NYMTP",
    "Name": "New York Mortgage Trust, Inc."
  },
  {
    "Symbol": "NEWA",
    "Name": "Newater Technology, Inc."
  },
  {
    "Symbol": "NLNK",
    "Name": "NewLink Genetics Corporation"
  },
  {
    "Symbol": "NMRK",
    "Name": "Newmark Group, Inc."
  },
  {
    "Symbol": "NWS",
    "Name": "News Corporation"
  },
  {
    "Symbol": "NWSA",
    "Name": "News Corporation"
  },
  {
    "Symbol": "NEWT",
    "Name": "Newtek Business Services Corp."
  },
  {
    "Symbol": "NEWTI",
    "Name": "Newtek Business Services Corp."
  },
  {
    "Symbol": "NEWTZ",
    "Name": "Newtek Business Services Corp."
  },
  {
    "Symbol": "NXEO",
    "Name": "Nexeo Solutions, Inc."
  },
  {
    "Symbol": "NXEOU",
    "Name": "Nexeo Solutions, Inc."
  },
  {
    "Symbol": "NXEOW",
    "Name": "Nexeo Solutions, Inc."
  },
  {
    "Symbol": "NXST",
    "Name": "Nexstar Media Group, Inc."
  },
  {
    "Symbol": "NEXT",
    "Name": "NextDecade Corporation"
  },
  {
    "Symbol": "NFEC",
    "Name": "NF Energy Saving Corporation"
  },
  {
    "Symbol": "NODK",
    "Name": "NI Holdings, Inc."
  },
  {
    "Symbol": "EGOV",
    "Name": "NIC Inc."
  },
  {
    "Symbol": "NICE",
    "Name": "NICE Ltd"
  },
  {
    "Symbol": "NICK",
    "Name": "Nicholas Financial, Inc."
  },
  {
    "Symbol": "NCBS",
    "Name": "Nicolet Bankshares Inc."
  },
  {
    "Symbol": "NITE",
    "Name": "Nightstar Therapeutics plc"
  },
  {
    "Symbol": "NIHD",
    "Name": "NII Holdings, Inc."
  },
  {
    "Symbol": "LASR",
    "Name": "nLIGHT, Inc."
  },
  {
    "Symbol": "NMIH",
    "Name": "NMI Holdings Inc"
  },
  {
    "Symbol": "NNBR",
    "Name": "NN, Inc."
  },
  {
    "Symbol": "NDLS",
    "Name": "Noodles & Company"
  },
  {
    "Symbol": "NDSN",
    "Name": "Nordson Corporation"
  },
  {
    "Symbol": "NSYS",
    "Name": "Nortech Systems Incorporated"
  },
  {
    "Symbol": "NBN",
    "Name": "Northeast Bancorp"
  },
  {
    "Symbol": "NTIC",
    "Name": "Northern Technologies International Corporation"
  },
  {
    "Symbol": "NTRS",
    "Name": "Northern Trust Corporation"
  },
  {
    "Symbol": "NTRSP",
    "Name": "Northern Trust Corporation"
  },
  {
    "Symbol": "NFBK",
    "Name": "Northfield Bancorp, Inc."
  },
  {
    "Symbol": "NRIM",
    "Name": "Northrim BanCorp Inc"
  },
  {
    "Symbol": "NWBI",
    "Name": "Northwest Bancshares, Inc."
  },
  {
    "Symbol": "NWPX",
    "Name": "Northwest Pipe Company"
  },
  {
    "Symbol": "NCLH",
    "Name": "Norwegian Cruise Line Holdings Ltd."
  },
  {
    "Symbol": "NWFL",
    "Name": "Norwood Financial Corp."
  },
  {
    "Symbol": "NVFY",
    "Name": "Nova Lifestyle, Inc"
  },
  {
    "Symbol": "NVMI",
    "Name": "Nova Measuring Instruments Ltd."
  },
  {
    "Symbol": "NOVN",
    "Name": "Novan, Inc."
  },
  {
    "Symbol": "NOVT",
    "Name": "Novanta Inc."
  },
  {
    "Symbol": "NVAX",
    "Name": "Novavax, Inc."
  },
  {
    "Symbol": "NVLN",
    "Name": "Novelion Therapeutics Inc."
  },
  {
    "Symbol": "NVCR",
    "Name": "NovoCure Limited"
  },
  {
    "Symbol": "NVMM",
    "Name": "Novume Solutions, Inc."
  },
  {
    "Symbol": "NVUS",
    "Name": "Novus Therapeutics, Inc."
  },
  {
    "Symbol": "NUAN",
    "Name": "Nuance Communications, Inc."
  },
  {
    "Symbol": "NCNA",
    "Name": "NuCana plc"
  },
  {
    "Symbol": "NTNX",
    "Name": "Nutanix, Inc."
  },
  {
    "Symbol": "NTRI",
    "Name": "NutriSystem Inc"
  },
  {
    "Symbol": "NUVA",
    "Name": "NuVasive, Inc."
  },
  {
    "Symbol": "NVTR",
    "Name": "Nuvectra Corporation"
  },
  {
    "Symbol": "QQQX",
    "Name": "Nuveen NASDAQ 100 Dynamic Overwrite Fund"
  },
  {
    "Symbol": "NVEE",
    "Name": "NV5 Global, Inc."
  },
  {
    "Symbol": "NVEC",
    "Name": "NVE Corporation"
  },
  {
    "Symbol": "NVDA",
    "Name": "NVIDIA Corporation"
  },
  {
    "Symbol": "NXPI",
    "Name": "NXP Semiconductors N.V."
  },
  {
    "Symbol": "NXTM",
    "Name": "NxStage Medical, Inc."
  },
  {
    "Symbol": "NXTD",
    "Name": "NXT-ID Inc."
  },
  {
    "Symbol": "NXTDW",
    "Name": "NXT-ID Inc."
  },
  {
    "Symbol": "NYMX",
    "Name": "Nymox Pharmaceutical Corporation"
  },
  {
    "Symbol": "OIIM",
    "Name": "O2Micro International Limited"
  },
  {
    "Symbol": "OVLY",
    "Name": "Oak Valley Bancorp (CA)"
  },
  {
    "Symbol": "OCSL",
    "Name": "Oaktree Specialty Lending Corporation"
  },
  {
    "Symbol": "OCSLL",
    "Name": "Oaktree Specialty Lending Corporation"
  },
  {
    "Symbol": "OCSI",
    "Name": "Oaktree Strategic Income Corporation"
  },
  {
    "Symbol": "OASM",
    "Name": "Oasmia Pharmaceutical AB"
  },
  {
    "Symbol": "OBLN",
    "Name": "Obalon Therapeutics, Inc."
  },
  {
    "Symbol": "OBSV",
    "Name": "ObsEva SA"
  },
  {
    "Symbol": "OBCI",
    "Name": "Ocean Bio-Chem, Inc."
  },
  {
    "Symbol": "OPTT",
    "Name": "Ocean Power Technologies, Inc."
  },
  {
    "Symbol": "ORIG",
    "Name": "Ocean Rig UDW Inc."
  },
  {
    "Symbol": "OCFC",
    "Name": "OceanFirst Financial Corp."
  },
  {
    "Symbol": "OCLR",
    "Name": "Oclaro, Inc."
  },
  {
    "Symbol": "OFED",
    "Name": "Oconee Federal Financial Corp."
  },
  {
    "Symbol": "OCUL",
    "Name": "Ocular Therapeutix, Inc."
  },
  {
    "Symbol": "ODT",
    "Name": "Odonate Therapeutics, Inc."
  },
  {
    "Symbol": "OMEX",
    "Name": "Odyssey Marine Exploration, Inc."
  },
  {
    "Symbol": "ODP",
    "Name": "Office Depot, Inc."
  },
  {
    "Symbol": "OFS",
    "Name": "OFS Capital Corporation"
  },
  {
    "Symbol": "OFSSL",
    "Name": "OFS Capital Corporation"
  },
  {
    "Symbol": "OHAI",
    "Name": "OHA Investment Corporation"
  },
  {
    "Symbol": "OVBC",
    "Name": "Ohio Valley Banc Corp."
  },
  {
    "Symbol": "OHRP",
    "Name": "Ohr Pharmaceutical, Inc."
  },
  {
    "Symbol": "OKTA",
    "Name": "Okta, Inc."
  },
  {
    "Symbol": "ODFL",
    "Name": "Old Dominion Freight Line, Inc."
  },
  {
    "Symbol": "OLBK",
    "Name": "Old Line Bancshares, Inc."
  },
  {
    "Symbol": "ONB",
    "Name": "Old National Bancorp"
  },
  {
    "Symbol": "OPOF",
    "Name": "Old Point Financial Corporation"
  },
  {
    "Symbol": "OSBC",
    "Name": "Old Second Bancorp, Inc."
  },
  {
    "Symbol": "OSBCP",
    "Name": "Old Second Bancorp, Inc."
  },
  {
    "Symbol": "OLLI",
    "Name": "Ollie&#39;s Bargain Outlet Holdings, Inc."
  },
  {
    "Symbol": "ZEUS",
    "Name": "Olympic Steel, Inc."
  },
  {
    "Symbol": "OFLX",
    "Name": "Omega Flex, Inc."
  },
  {
    "Symbol": "OMER",
    "Name": "Omeros Corporation"
  },
  {
    "Symbol": "OMCL",
    "Name": "Omnicell, Inc."
  },
  {
    "Symbol": "ON",
    "Name": "ON Semiconductor Corporation"
  },
  {
    "Symbol": "OTIV",
    "Name": "On Track Innovations Ltd"
  },
  {
    "Symbol": "ONS",
    "Name": "Oncobiologics, Inc."
  },
  {
    "Symbol": "ONSIW",
    "Name": "Oncobiologics, Inc."
  },
  {
    "Symbol": "ONCY",
    "Name": "Oncolytics Biotech Inc."
  },
  {
    "Symbol": "OMED",
    "Name": "OncoMed Pharmaceuticals, Inc."
  },
  {
    "Symbol": "ONTX",
    "Name": "Onconova Therapeutics, Inc."
  },
  {
    "Symbol": "ONTXW",
    "Name": "Onconova Therapeutics, Inc."
  },
  {
    "Symbol": "ONCS",
    "Name": "OncoSec Medical Incorporated"
  },
  {
    "Symbol": "OHGI",
    "Name": "One Horizon Group, Inc."
  },
  {
    "Symbol": "OSS",
    "Name": "One Stop Systems, Inc."
  },
  {
    "Symbol": "OSPN",
    "Name": "OneSpan Inc."
  },
  {
    "Symbol": "OPBK",
    "Name": "OP Bancorp"
  },
  {
    "Symbol": "OTEX",
    "Name": "Open Text Corporation"
  },
  {
    "Symbol": "OPRA",
    "Name": "Opera Limited"
  },
  {
    "Symbol": "OPES",
    "Name": "Opes Acquisition Corp."
  },
  {
    "Symbol": "OPESU",
    "Name": "Opes Acquisition Corp."
  },
  {
    "Symbol": "OPESW",
    "Name": "Opes Acquisition Corp."
  },
  {
    "Symbol": "OPGN",
    "Name": "OpGen, Inc."
  },
  {
    "Symbol": "OPGNW",
    "Name": "OpGen, Inc."
  },
  {
    "Symbol": "OPHT",
    "Name": "Ophthotech Corporation"
  },
  {
    "Symbol": "OPNT",
    "Name": "Opiant Pharmaceuticals, Inc."
  },
  {
    "Symbol": "OPK",
    "Name": "Opko Health, Inc."
  },
  {
    "Symbol": "OBAS",
    "Name": "Optibase Ltd."
  },
  {
    "Symbol": "OCC",
    "Name": "Optical Cable Corporation"
  },
  {
    "Symbol": "OPRX",
    "Name": "OptimizeRx Corporation"
  },
  {
    "Symbol": "OPHC",
    "Name": "OptimumBank Holdings, Inc."
  },
  {
    "Symbol": "OPTN",
    "Name": "OptiNose, Inc."
  },
  {
    "Symbol": "OPB",
    "Name": "Opus Bank"
  },
  {
    "Symbol": "ORMP",
    "Name": "Oramed Pharmaceuticals Inc."
  },
  {
    "Symbol": "OSUR",
    "Name": "OraSure Technologies, Inc."
  },
  {
    "Symbol": "ORBC",
    "Name": "ORBCOMM Inc."
  },
  {
    "Symbol": "ORBK",
    "Name": "Orbotech Ltd."
  },
  {
    "Symbol": "ORLY",
    "Name": "O&#39;Reilly Automotive, Inc."
  },
  {
    "Symbol": "ONVO",
    "Name": "Organovo Holdings, Inc."
  },
  {
    "Symbol": "ORGS",
    "Name": "Orgenesis Inc."
  },
  {
    "Symbol": "SEED",
    "Name": "Origin Agritech Limited"
  },
  {
    "Symbol": "OBNK",
    "Name": "Origin Bancorp, Inc."
  },
  {
    "Symbol": "OESX",
    "Name": "Orion Energy Systems, Inc."
  },
  {
    "Symbol": "ORIT",
    "Name": "Oritani Financial Corp."
  },
  {
    "Symbol": "ORRF",
    "Name": "Orrstown Financial Services Inc"
  },
  {
    "Symbol": "OFIX",
    "Name": "Orthofix Medical Inc."
  },
  {
    "Symbol": "KIDS",
    "Name": "OrthoPediatrics Corp."
  },
  {
    "Symbol": "OSIS",
    "Name": "OSI Systems, Inc."
  },
  {
    "Symbol": "OSIR",
    "Name": "Osiris Therapeutics, Inc."
  },
  {
    "Symbol": "OSN",
    "Name": "Ossen Innovation Co., Ltd."
  },
  {
    "Symbol": "OTEL",
    "Name": "Otelco Inc."
  },
  {
    "Symbol": "OTIC",
    "Name": "Otonomy, Inc."
  },
  {
    "Symbol": "OTTW",
    "Name": "Ottawa Bancorp, Inc."
  },
  {
    "Symbol": "OTTR",
    "Name": "Otter Tail Corporation"
  },
  {
    "Symbol": "OVAS",
    "Name": "OvaScience Inc."
  },
  {
    "Symbol": "OSTK",
    "Name": "Overstock.com, Inc."
  },
  {
    "Symbol": "OVID",
    "Name": "Ovid Therapeutics Inc."
  },
  {
    "Symbol": "OXBR",
    "Name": "Oxbridge Re Holdings Limited"
  },
  {
    "Symbol": "OXBRW",
    "Name": "Oxbridge Re Holdings Limited"
  },
  {
    "Symbol": "OXFD",
    "Name": "Oxford Immunotec Global PLC"
  },
  {
    "Symbol": "OXLC",
    "Name": "Oxford Lane Capital Corp."
  },
  {
    "Symbol": "OXLCM",
    "Name": "Oxford Lane Capital Corp."
  },
  {
    "Symbol": "OXLCO",
    "Name": "Oxford Lane Capital Corp."
  },
  {
    "Symbol": "OXSQ",
    "Name": "Oxford Square Capital Corp."
  },
  {
    "Symbol": "OXSQL",
    "Name": "Oxford Square Capital Corp."
  },
  {
    "Symbol": "PFIN",
    "Name": "P & F Industries, Inc."
  },
  {
    "Symbol": "PTSI",
    "Name": "P.A.M. Transportation Services, Inc."
  },
  {
    "Symbol": "PCAR",
    "Name": "PACCAR Inc."
  },
  {
    "Symbol": "VETS",
    "Name": "Pacer Military Times Best Employers ETF"
  },
  {
    "Symbol": "PACB",
    "Name": "Pacific Biosciences of California, Inc."
  },
  {
    "Symbol": "PCB",
    "Name": "Pacific City Financial Corporation"
  },
  {
    "Symbol": "PEIX",
    "Name": "Pacific Ethanol, Inc."
  },
  {
    "Symbol": "PMBC",
    "Name": "Pacific Mercantile Bancorp"
  },
  {
    "Symbol": "PPBI",
    "Name": "Pacific Premier Bancorp Inc"
  },
  {
    "Symbol": "PCRX",
    "Name": "Pacira Pharmaceuticals, Inc."
  },
  {
    "Symbol": "PACW",
    "Name": "PacWest Bancorp"
  },
  {
    "Symbol": "PTIE",
    "Name": "Pain Therapeutics, Inc."
  },
  {
    "Symbol": "PAAS",
    "Name": "Pan American Silver Corp."
  },
  {
    "Symbol": "PANL",
    "Name": "Pangaea Logistics Solutions Ltd."
  },
  {
    "Symbol": "PZZA",
    "Name": "Papa John&#39;s International, Inc."
  },
  {
    "Symbol": "FRSH",
    "Name": "Papa Murphy&#39;s Holdings, Inc."
  },
  {
    "Symbol": "PRTK",
    "Name": "Paratek Pharmaceuticals, Inc."
  },
  {
    "Symbol": "PCYG",
    "Name": "Park City Group, Inc."
  },
  {
    "Symbol": "PKBK",
    "Name": "Parke Bancorp, Inc."
  },
  {
    "Symbol": "PKOH",
    "Name": "Park-Ohio Holdings Corp."
  },
  {
    "Symbol": "PTNR",
    "Name": "Partner Communications Company Ltd."
  },
  {
    "Symbol": "PBHC",
    "Name": "Pathfinder Bancorp, Inc."
  },
  {
    "Symbol": "PATK",
    "Name": "Patrick Industries, Inc."
  },
  {
    "Symbol": "PNBK",
    "Name": "Patriot National Bancorp Inc."
  },
  {
    "Symbol": "PATI",
    "Name": "Patriot Transportation Holding, Inc."
  },
  {
    "Symbol": "PEGI",
    "Name": "Pattern Energy Group Inc."
  },
  {
    "Symbol": "PDCO",
    "Name": "Patterson Companies, Inc."
  },
  {
    "Symbol": "PTEN",
    "Name": "Patterson-UTI Energy, Inc."
  },
  {
    "Symbol": "PAVM",
    "Name": "PAVmed Inc."
  },
  {
    "Symbol": "PAVMW",
    "Name": "PAVmed Inc."
  },
  {
    "Symbol": "PAVMZ",
    "Name": "PAVmed Inc."
  },
  {
    "Symbol": "PAYX",
    "Name": "Paychex, Inc."
  },
  {
    "Symbol": "PCTY",
    "Name": "Paylocity Holding Corporation"
  },
  {
    "Symbol": "PYDS",
    "Name": "Payment Data Systems, Inc."
  },
  {
    "Symbol": "PYPL",
    "Name": "PayPal Holdings, Inc."
  },
  {
    "Symbol": "PBBI",
    "Name": "PB Bancorp, Inc."
  },
  {
    "Symbol": "CNXN",
    "Name": "PC Connection, Inc."
  },
  {
    "Symbol": "PCMI",
    "Name": "PCM, Inc."
  },
  {
    "Symbol": "PCSB",
    "Name": "PCSB Financial Corporation"
  },
  {
    "Symbol": "PCTI",
    "Name": "PC-Tel, Inc."
  },
  {
    "Symbol": "PDCE",
    "Name": "PDC Energy, Inc."
  },
  {
    "Symbol": "PDFS",
    "Name": "PDF Solutions, Inc."
  },
  {
    "Symbol": "PDLI",
    "Name": "PDL BioPharma, Inc."
  },
  {
    "Symbol": "PDLB",
    "Name": "PDL Community Bancorp"
  },
  {
    "Symbol": "PDVW",
    "Name": "pdvWireless, Inc."
  },
  {
    "Symbol": "SKIS",
    "Name": "Peak Resorts, Inc."
  },
  {
    "Symbol": "PGC",
    "Name": "Peapack-Gladstone Financial Corporation"
  },
  {
    "Symbol": "PEGA",
    "Name": "Pegasystems Inc."
  },
  {
    "Symbol": "PENN",
    "Name": "Penn National Gaming, Inc."
  },
  {
    "Symbol": "PVAC",
    "Name": "Penn Virginia Corporation"
  },
  {
    "Symbol": "PFLT",
    "Name": "PennantPark Floating Rate Capital Ltd."
  },
  {
    "Symbol": "PNNT",
    "Name": "PennantPark Investment Corporation"
  },
  {
    "Symbol": "PWOD",
    "Name": "Penns Woods Bancorp, Inc."
  },
  {
    "Symbol": "WRLS",
    "Name": "Pensare Acquisition Corp."
  },
  {
    "Symbol": "WRLSR",
    "Name": "Pensare Acquisition Corp."
  },
  {
    "Symbol": "WRLSU",
    "Name": "Pensare Acquisition Corp."
  },
  {
    "Symbol": "WRLSW",
    "Name": "Pensare Acquisition Corp."
  },
  {
    "Symbol": "PEBO",
    "Name": "Peoples Bancorp Inc."
  },
  {
    "Symbol": "PEBK",
    "Name": "Peoples Bancorp of North Carolina, Inc."
  },
  {
    "Symbol": "PFIS",
    "Name": "Peoples Financial Services Corp."
  },
  {
    "Symbol": "PBCT",
    "Name": "People&#39;s United Financial, Inc."
  },
  {
    "Symbol": "PBCTP",
    "Name": "People&#39;s United Financial, Inc."
  },
  {
    "Symbol": "PUB",
    "Name": "People&#39;s Utah Bancorp"
  },
  {
    "Symbol": "PEP",
    "Name": "Pepsico, Inc."
  },
  {
    "Symbol": "PRCP",
    "Name": "Perceptron, Inc."
  },
  {
    "Symbol": "PRFT",
    "Name": "Perficient, Inc."
  },
  {
    "Symbol": "PFMT",
    "Name": "Performant Financial Corporation"
  },
  {
    "Symbol": "PERI",
    "Name": "Perion Network Ltd"
  },
  {
    "Symbol": "PESI",
    "Name": "Perma-Fix Environmental Services, Inc."
  },
  {
    "Symbol": "PPIH",
    "Name": "Perma-Pipe International Holdings, Inc."
  },
  {
    "Symbol": "PTX",
    "Name": "Pernix Therapeutics Holdings, Inc."
  },
  {
    "Symbol": "PERY",
    "Name": "Perry Ellis International Inc."
  },
  {
    "Symbol": "PGLC",
    "Name": "Pershing Gold Corporation"
  },
  {
    "Symbol": "PETQ",
    "Name": "PetIQ, Inc."
  },
  {
    "Symbol": "PETS",
    "Name": "PetMed Express, Inc."
  },
  {
    "Symbol": "PFSW",
    "Name": "PFSweb, Inc."
  },
  {
    "Symbol": "PGTI",
    "Name": "PGT Innovations, Inc."
  },
  {
    "Symbol": "PHII",
    "Name": "PHI, Inc."
  },
  {
    "Symbol": "PHIIK",
    "Name": "PHI, Inc."
  },
  {
    "Symbol": "PAHC",
    "Name": "Phibro Animal Health Corporation"
  },
  {
    "Symbol": "PLAB",
    "Name": "Photronics, Inc."
  },
  {
    "Symbol": "PICO",
    "Name": "PICO Holdings Inc."
  },
  {
    "Symbol": "PLLL",
    "Name": "Piedmont Lithium Limited"
  },
  {
    "Symbol": "PIRS",
    "Name": "Pieris Pharmaceuticals, Inc."
  },
  {
    "Symbol": "PPC",
    "Name": "Pilgrim&#39;s Pride Corporation"
  },
  {
    "Symbol": "PDD",
    "Name": "Pinduoduo Inc."
  },
  {
    "Symbol": "PME",
    "Name": "Pingtan Marine Enterprise Ltd."
  },
  {
    "Symbol": "PNK",
    "Name": "Pinnacle Entertainment, Inc."
  },
  {
    "Symbol": "PNFP",
    "Name": "Pinnacle Financial Partners, Inc."
  },
  {
    "Symbol": "PPSI",
    "Name": "Pioneer Power Solutions, Inc."
  },
  {
    "Symbol": "PXLW",
    "Name": "Pixelworks, Inc."
  },
  {
    "Symbol": "EAGL",
    "Name": "Platinum Eagle Acquisition Corp."
  },
  {
    "Symbol": "EAGLU",
    "Name": "Platinum Eagle Acquisition Corp."
  },
  {
    "Symbol": "EAGLW",
    "Name": "Platinum Eagle Acquisition Corp."
  },
  {
    "Symbol": "PLYA",
    "Name": "Playa Hotels & Resorts N.V."
  },
  {
    "Symbol": "PLXS",
    "Name": "Plexus Corp."
  },
  {
    "Symbol": "PLUG",
    "Name": "Plug Power, Inc."
  },
  {
    "Symbol": "PLBC",
    "Name": "Plumas Bancorp"
  },
  {
    "Symbol": "PS",
    "Name": "Pluralsight, Inc."
  },
  {
    "Symbol": "PSTI",
    "Name": "Pluristem Therapeutics, Inc."
  },
  {
    "Symbol": "PLXP",
    "Name": "PLx Pharma Inc."
  },
  {
    "Symbol": "PBSK",
    "Name": "Poage Bankshares, Inc."
  },
  {
    "Symbol": "PNTR",
    "Name": "Pointer Telocation Ltd."
  },
  {
    "Symbol": "PCOM",
    "Name": "Points International, Ltd."
  },
  {
    "Symbol": "POLA",
    "Name": "Polar Power, Inc."
  },
  {
    "Symbol": "COOL",
    "Name": "PolarityTE, Inc."
  },
  {
    "Symbol": "POOL",
    "Name": "Pool Corporation"
  },
  {
    "Symbol": "POPE",
    "Name": "Pope Resources"
  },
  {
    "Symbol": "BPOP",
    "Name": "Popular, Inc."
  },
  {
    "Symbol": "BPOPM",
    "Name": "Popular, Inc."
  },
  {
    "Symbol": "BPOPN",
    "Name": "Popular, Inc."
  },
  {
    "Symbol": "PTLA",
    "Name": "Portola Pharmaceuticals, Inc."
  },
  {
    "Symbol": "PBPB",
    "Name": "Potbelly Corporation"
  },
  {
    "Symbol": "PCH",
    "Name": "PotlatchDeltic Corporation"
  },
  {
    "Symbol": "POWL",
    "Name": "Powell Industries, Inc."
  },
  {
    "Symbol": "POWI",
    "Name": "Power Integrations, Inc."
  },
  {
    "Symbol": "PRAA",
    "Name": "PRA Group, Inc."
  },
  {
    "Symbol": "PRAH",
    "Name": "PRA Health Sciences, Inc."
  },
  {
    "Symbol": "PRAN",
    "Name": "Prana Biotechnology Ltd"
  },
  {
    "Symbol": "PRPO",
    "Name": "Precipio, Inc."
  },
  {
    "Symbol": "AIPT",
    "Name": "Precision Therapeutics Inc."
  },
  {
    "Symbol": "PFBC",
    "Name": "Preferred Bank"
  },
  {
    "Symbol": "PLPC",
    "Name": "Preformed Line Products Company"
  },
  {
    "Symbol": "PFBI",
    "Name": "Premier Financial Bancorp, Inc."
  },
  {
    "Symbol": "PINC",
    "Name": "Premier, Inc."
  },
  {
    "Symbol": "LENS",
    "Name": "Presbia PLC"
  },
  {
    "Symbol": "PSDO",
    "Name": "Presidio, Inc."
  },
  {
    "Symbol": "PRGX",
    "Name": "PRGX Global, Inc."
  },
  {
    "Symbol": "PSMT",
    "Name": "PriceSmart, Inc."
  },
  {
    "Symbol": "PNRG",
    "Name": "PrimeEnergy Corporation"
  },
  {
    "Symbol": "PRMW",
    "Name": "Primo Water Corporation"
  },
  {
    "Symbol": "PRIM",
    "Name": "Primoris Services Corporation"
  },
  {
    "Symbol": "PVAL",
    "Name": "Principal Contrarian Value Index ETF"
  },
  {
    "Symbol": "PFG",
    "Name": "Principal Financial Group Inc"
  },
  {
    "Symbol": "BTEC",
    "Name": "Principal Healthcare Innovators Index ETF"
  },
  {
    "Symbol": "PXUS",
    "Name": "Principal International Multi-Factor Index ETF"
  },
  {
    "Symbol": "GENY",
    "Name": "Principal Millennials Index ETF"
  },
  {
    "Symbol": "PSET",
    "Name": "Principal Price Setters Index ETF"
  },
  {
    "Symbol": "PY",
    "Name": "Principal Shareholder Yield Index ETF"
  },
  {
    "Symbol": "PMOM",
    "Name": "Principal Sustainable Momentum Index ETF"
  },
  {
    "Symbol": "USMC",
    "Name": "Principal U.S. Mega-Cap Multi-Factor Index ETF"
  },
  {
    "Symbol": "PSC",
    "Name": "Principal U.S. Small-Cap Multi-Factor Index ETF"
  },
  {
    "Symbol": "PRTH",
    "Name": "Priority Technology Holdings, Inc."
  },
  {
    "Symbol": "PRTHU",
    "Name": "Priority Technology Holdings, Inc."
  },
  {
    "Symbol": "PRTHW",
    "Name": "Priority Technology Holdings, Inc."
  },
  {
    "Symbol": "PDEX",
    "Name": "Pro-Dex, Inc."
  },
  {
    "Symbol": "IPDN",
    "Name": "Professional Diversity Network, Inc."
  },
  {
    "Symbol": "PFIE",
    "Name": "Profire Energy, Inc."
  },
  {
    "Symbol": "PGNX",
    "Name": "Progenics Pharmaceuticals Inc."
  },
  {
    "Symbol": "PRGS",
    "Name": "Progress Software Corporation"
  },
  {
    "Symbol": "PFPT",
    "Name": "Proofpoint, Inc."
  },
  {
    "Symbol": "PRPH",
    "Name": "ProPhase Labs, Inc."
  },
  {
    "Symbol": "PRQR",
    "Name": "ProQR Therapeutics N.V."
  },
  {
    "Symbol": "EQRR",
    "Name": "ProShares Equities for Rising Rates ETF"
  },
  {
    "Symbol": "BIB",
    "Name": "ProShares Ultra Nasdaq Biotechnology"
  },
  {
    "Symbol": "UBIO",
    "Name": "Proshares UltraPro Nasdaq Biotechnology"
  },
  {
    "Symbol": "TQQQ",
    "Name": "ProShares UltraPro QQQ"
  },
  {
    "Symbol": "ZBIO",
    "Name": "ProShares UltraPro Short NASDAQ Biotechnology"
  },
  {
    "Symbol": "SQQQ",
    "Name": "ProShares UltraPro Short QQQ"
  },
  {
    "Symbol": "BIS",
    "Name": "ProShares UltraShort Nasdaq Biotechnology"
  },
  {
    "Symbol": "PSEC",
    "Name": "Prospect Capital Corporation"
  },
  {
    "Symbol": "PTGX",
    "Name": "Protagonist Therapeutics, Inc."
  },
  {
    "Symbol": "PTVCA",
    "Name": "Protective Insurance Corporation"
  },
  {
    "Symbol": "PTVCB",
    "Name": "Protective Insurance Corporation"
  },
  {
    "Symbol": "PRTO",
    "Name": "Proteon Therapeutics, Inc."
  },
  {
    "Symbol": "PTI",
    "Name": "Proteostasis Therapeutics, Inc."
  },
  {
    "Symbol": "PRTA",
    "Name": "Prothena Corporation plc"
  },
  {
    "Symbol": "PRVB",
    "Name": "Provention Bio, Inc."
  },
  {
    "Symbol": "PVBC",
    "Name": "Provident Bancorp, Inc."
  },
  {
    "Symbol": "PROV",
    "Name": "Provident Financial Holdings, Inc."
  },
  {
    "Symbol": "PBIP",
    "Name": "Prudential Bancorp, Inc."
  },
  {
    "Symbol": "PMD",
    "Name": "Psychemedics Corporation"
  },
  {
    "Symbol": "PTC",
    "Name": "PTC Inc."
  },
  {
    "Symbol": "PTCT",
    "Name": "PTC Therapeutics, Inc."
  },
  {
    "Symbol": "PULM",
    "Name": "Pulmatrix, Inc."
  },
  {
    "Symbol": "PLSE",
    "Name": "Pulse Biosciences, Inc"
  },
  {
    "Symbol": "PBYI",
    "Name": "Puma Biotechnology Inc"
  },
  {
    "Symbol": "PACQ",
    "Name": "Pure Acquisition Corp."
  },
  {
    "Symbol": "PACQU",
    "Name": "Pure Acquisition Corp."
  },
  {
    "Symbol": "PACQW",
    "Name": "Pure Acquisition Corp."
  },
  {
    "Symbol": "PCYO",
    "Name": "Pure Cycle Corporation"
  },
  {
    "Symbol": "PRPL",
    "Name": "Purple Innovation, Inc."
  },
  {
    "Symbol": "PRPLW",
    "Name": "Purple Innovation, Inc."
  },
  {
    "Symbol": "PXS",
    "Name": "Pyxis Tankers Inc."
  },
  {
    "Symbol": "QADA",
    "Name": "QAD Inc."
  },
  {
    "Symbol": "QADB",
    "Name": "QAD Inc."
  },
  {
    "Symbol": "QCRH",
    "Name": "QCR Holdings, Inc."
  },
  {
    "Symbol": "QGEN",
    "Name": "Qiagen N.V."
  },
  {
    "Symbol": "QIWI",
    "Name": "QIWI plc"
  },
  {
    "Symbol": "QRVO",
    "Name": "Qorvo, Inc."
  },
  {
    "Symbol": "QCOM",
    "Name": "QUALCOMM Incorporated"
  },
  {
    "Symbol": "QSII",
    "Name": "Quality Systems, Inc."
  },
  {
    "Symbol": "QBAK",
    "Name": "Qualstar Corporation"
  },
  {
    "Symbol": "QLYS",
    "Name": "Qualys, Inc."
  },
  {
    "Symbol": "QTNA",
    "Name": "Quantenna Communications, Inc."
  },
  {
    "Symbol": "QTRX",
    "Name": "Quanterix Corporation"
  },
  {
    "Symbol": "QTRH",
    "Name": "Quarterhill Inc."
  },
  {
    "Symbol": "QRHC",
    "Name": "Quest Resource Holding Corporation."
  },
  {
    "Symbol": "QUIK",
    "Name": "QuickLogic Corporation"
  },
  {
    "Symbol": "QDEL",
    "Name": "Quidel Corporation"
  },
  {
    "Symbol": "QNST",
    "Name": "QuinStreet, Inc."
  },
  {
    "Symbol": "QUMU",
    "Name": "Qumu Corporation"
  },
  {
    "Symbol": "QTNT",
    "Name": "Quotient Limited"
  },
  {
    "Symbol": "QRTEA",
    "Name": "Qurate Retail, Inc."
  },
  {
    "Symbol": "QRTEB",
    "Name": "Qurate Retail, Inc."
  },
  {
    "Symbol": "RRD",
    "Name": "R.R. Donnelley & Sons Company"
  },
  {
    "Symbol": "RCM",
    "Name": "R1 RCM Inc."
  },
  {
    "Symbol": "RARX",
    "Name": "Ra Pharmaceuticals, Inc."
  },
  {
    "Symbol": "RADA",
    "Name": "RADA Electronic Industries Ltd."
  },
  {
    "Symbol": "RDCM",
    "Name": "Radcom Ltd."
  },
  {
    "Symbol": "RSYS",
    "Name": "RadiSys Corporation"
  },
  {
    "Symbol": "RDUS",
    "Name": "Radius Health, Inc."
  },
  {
    "Symbol": "RDNT",
    "Name": "RadNet, Inc."
  },
  {
    "Symbol": "RDWR",
    "Name": "Radware Ltd."
  },
  {
    "Symbol": "METC",
    "Name": "Ramaco Resources, Inc."
  },
  {
    "Symbol": "RMBS",
    "Name": "Rambus, Inc."
  },
  {
    "Symbol": "RAND",
    "Name": "Rand Capital Corporation"
  },
  {
    "Symbol": "GOLD",
    "Name": "Randgold Resources Limited"
  },
  {
    "Symbol": "RNDB",
    "Name": "Randolph Bancorp, Inc."
  },
  {
    "Symbol": "RPD",
    "Name": "Rapid7, Inc."
  },
  {
    "Symbol": "RAVE",
    "Name": "Rave Restaurant Group, Inc."
  },
  {
    "Symbol": "RAVN",
    "Name": "Raven Industries, Inc."
  },
  {
    "Symbol": "RBB",
    "Name": "RBB Bancorp"
  },
  {
    "Symbol": "ROLL",
    "Name": "RBC Bearings Incorporated"
  },
  {
    "Symbol": "RICK",
    "Name": "RCI Hospitality Holdings, Inc."
  },
  {
    "Symbol": "RCMT",
    "Name": "RCM Technologies, Inc."
  },
  {
    "Symbol": "RDI",
    "Name": "Reading International Inc"
  },
  {
    "Symbol": "RDIB",
    "Name": "Reading International Inc"
  },
  {
    "Symbol": "RGSE",
    "Name": "Real Goods Solar, Inc."
  },
  {
    "Symbol": "BCNA",
    "Name": "Reality Shares Nasdaq NexGen Economy China ETF"
  },
  {
    "Symbol": "BLCN",
    "Name": "Reality Shares Nasdaq NextGen Economy ETF"
  },
  {
    "Symbol": "RLM",
    "Name": "Realm Therapeutics plc"
  },
  {
    "Symbol": "RNWK",
    "Name": "RealNetworks, Inc."
  },
  {
    "Symbol": "RP",
    "Name": "RealPage, Inc."
  },
  {
    "Symbol": "RETA",
    "Name": "Reata Pharmaceuticals, Inc."
  },
  {
    "Symbol": "RCON",
    "Name": "Recon Technology, Ltd."
  },
  {
    "Symbol": "REPH",
    "Name": "Recro Pharma, Inc."
  },
  {
    "Symbol": "RRGB",
    "Name": "Red Robin Gourmet Burgers, Inc."
  },
  {
    "Symbol": "RRR",
    "Name": "Red Rock Resorts, Inc."
  },
  {
    "Symbol": "RDVT",
    "Name": "Red Violet, Inc."
  },
  {
    "Symbol": "RDFN",
    "Name": "Redfin Corporation"
  },
  {
    "Symbol": "RDHL",
    "Name": "Redhill Biopharma Ltd."
  },
  {
    "Symbol": "REGN",
    "Name": "Regeneron Pharmaceuticals, Inc."
  },
  {
    "Symbol": "RGNX",
    "Name": "REGENXBIO Inc."
  },
  {
    "Symbol": "RGLS",
    "Name": "Regulus Therapeutics Inc."
  },
  {
    "Symbol": "REIS",
    "Name": "Reis, Inc"
  },
  {
    "Symbol": "RBNC",
    "Name": "Reliant Bancorp, Inc."
  },
  {
    "Symbol": "RELV",
    "Name": "Reliv&#39; International, Inc."
  },
  {
    "Symbol": "MARK",
    "Name": "Remark Holdings, Inc."
  },
  {
    "Symbol": "RNST",
    "Name": "Renasant Corporation"
  },
  {
    "Symbol": "REGI",
    "Name": "Renewable Energy Group, Inc."
  },
  {
    "Symbol": "ABAC",
    "Name": "Renmin Tianli Group, Inc."
  },
  {
    "Symbol": "RCII",
    "Name": "Rent-A-Center Inc."
  },
  {
    "Symbol": "RGEN",
    "Name": "Repligen Corporation"
  },
  {
    "Symbol": "REPL",
    "Name": "Replimune Group, Inc."
  },
  {
    "Symbol": "RBCAA",
    "Name": "Republic Bancorp, Inc."
  },
  {
    "Symbol": "FRBK",
    "Name": "Republic First Bancorp, Inc."
  },
  {
    "Symbol": "REFR",
    "Name": "Research Frontiers Incorporated"
  },
  {
    "Symbol": "RSLS",
    "Name": "ReShape Lifesciences Inc."
  },
  {
    "Symbol": "RESN",
    "Name": "Resonant Inc."
  },
  {
    "Symbol": "RECN",
    "Name": "Resources Connection, Inc."
  },
  {
    "Symbol": "HAIR",
    "Name": "Restoration Robotics, Inc."
  },
  {
    "Symbol": "TORC",
    "Name": "resTORbio, Inc."
  },
  {
    "Symbol": "ROIC",
    "Name": "Retail Opportunity Investments Corp."
  },
  {
    "Symbol": "RETO",
    "Name": "ReTo Eco-Solutions, Inc."
  },
  {
    "Symbol": "RTRX",
    "Name": "Retrophin, Inc."
  },
  {
    "Symbol": "RVNC",
    "Name": "Revance Therapeutics, Inc."
  },
  {
    "Symbol": "RVEN",
    "Name": "Reven Housing REIT, Inc."
  },
  {
    "Symbol": "RVLT",
    "Name": "Revolution Lighting Technologies, Inc."
  },
  {
    "Symbol": "RWLK",
    "Name": "ReWalk Robotics Ltd"
  },
  {
    "Symbol": "RFIL",
    "Name": "RF Industries, Ltd."
  },
  {
    "Symbol": "RGCO",
    "Name": "RGC Resources Inc."
  },
  {
    "Symbol": "RYTM",
    "Name": "Rhythm Pharmaceuticals, Inc."
  },
  {
    "Symbol": "RBBN",
    "Name": "Ribbon Communications Inc."
  },
  {
    "Symbol": "RIBT",
    "Name": "RiceBran Technologies"
  },
  {
    "Symbol": "RIBTW",
    "Name": "RiceBran Technologies"
  },
  {
    "Symbol": "RELL",
    "Name": "Richardson Electronics, Ltd."
  },
  {
    "Symbol": "RIGL",
    "Name": "Rigel Pharmaceuticals, Inc."
  },
  {
    "Symbol": "RNET",
    "Name": "RigNet, Inc."
  },
  {
    "Symbol": "RMNI",
    "Name": "Rimini Street, Inc."
  },
  {
    "Symbol": "RIOT",
    "Name": "Riot Blockchain, Inc"
  },
  {
    "Symbol": "REDU",
    "Name": "RISE Education Cayman Ltd"
  },
  {
    "Symbol": "RTTR",
    "Name": "Ritter Pharmaceuticals, Inc."
  },
  {
    "Symbol": "RVSB",
    "Name": "Riverview Bancorp Inc"
  },
  {
    "Symbol": "RIVE",
    "Name": "Riverview Financial Corporation"
  },
  {
    "Symbol": "RLJE",
    "Name": "RLJ Entertainment, Inc."
  },
  {
    "Symbol": "RMGN",
    "Name": "RMG Networks Holding Corporation"
  },
  {
    "Symbol": "RCKT",
    "Name": "Rocket Pharmaceuticals, Inc."
  },
  {
    "Symbol": "RMTI",
    "Name": "Rockwell Medical, Inc."
  },
  {
    "Symbol": "RCKY",
    "Name": "Rocky Brands, Inc."
  },
  {
    "Symbol": "RMCF",
    "Name": "Rocky Mountain Chocolate Factory, Inc."
  },
  {
    "Symbol": "ROKU",
    "Name": "Roku, Inc."
  },
  {
    "Symbol": "ROSE",
    "Name": "Rosehill Resources Inc."
  },
  {
    "Symbol": "ROSEU",
    "Name": "Rosehill Resources Inc."
  },
  {
    "Symbol": "ROSEW",
    "Name": "Rosehill Resources Inc."
  },
  {
    "Symbol": "ROST",
    "Name": "Ross Stores, Inc."
  },
  {
    "Symbol": "RGLD",
    "Name": "Royal Gold, Inc."
  },
  {
    "Symbol": "RTIX",
    "Name": "RTI Surgical, Inc."
  },
  {
    "Symbol": "RBCN",
    "Name": "Rubicon Technology, Inc."
  },
  {
    "Symbol": "RUBY",
    "Name": "Rubius Therapeutics, Inc."
  },
  {
    "Symbol": "RMBL",
    "Name": "RumbleOn, Inc."
  },
  {
    "Symbol": "RUSHA",
    "Name": "Rush Enterprises, Inc."
  },
  {
    "Symbol": "RUSHB",
    "Name": "Rush Enterprises, Inc."
  },
  {
    "Symbol": "RUTH",
    "Name": "Ruth&#39;s Hospitality Group, Inc."
  },
  {
    "Symbol": "RXII",
    "Name": "RXi Pharmaceuticals Corporation"
  },
  {
    "Symbol": "RXIIW",
    "Name": "RXi Pharmaceuticals Corporation"
  },
  {
    "Symbol": "RYAAY",
    "Name": "Ryanair Holdings plc"
  },
  {
    "Symbol": "STBA",
    "Name": "S&T Bancorp, Inc."
  },
  {
    "Symbol": "SANW",
    "Name": "S&W Seed Company"
  },
  {
    "Symbol": "SCAC",
    "Name": "Saban Capital Acquisition Corp."
  },
  {
    "Symbol": "SCACU",
    "Name": "Saban Capital Acquisition Corp."
  },
  {
    "Symbol": "SCACW",
    "Name": "Saban Capital Acquisition Corp."
  },
  {
    "Symbol": "SBRA",
    "Name": "Sabra Health Care REIT, Inc."
  },
  {
    "Symbol": "SABR",
    "Name": "Sabre Corporation"
  },
  {
    "Symbol": "SAEX",
    "Name": "SAExploration Holdings, Inc."
  },
  {
    "Symbol": "SFET",
    "Name": "Safe-T Group Ltd."
  },
  {
    "Symbol": "SAFT",
    "Name": "Safety Insurance Group, Inc."
  },
  {
    "Symbol": "SGA",
    "Name": "Saga Communications, Inc."
  },
  {
    "Symbol": "SAGE",
    "Name": "Sage Therapeutics, Inc."
  },
  {
    "Symbol": "SAIA",
    "Name": "Saia, Inc."
  },
  {
    "Symbol": "SALM",
    "Name": "Salem Media Group, Inc."
  },
  {
    "Symbol": "SAL",
    "Name": "Salisbury Bancorp, Inc."
  },
  {
    "Symbol": "SAFM",
    "Name": "Sanderson Farms, Inc."
  },
  {
    "Symbol": "SASR",
    "Name": "Sandy Spring Bancorp, Inc."
  },
  {
    "Symbol": "SGMO",
    "Name": "Sangamo Therapeutics, Inc."
  },
  {
    "Symbol": "SANM",
    "Name": "Sanmina Corporation"
  },
  {
    "Symbol": "GCVRZ",
    "Name": "Sanofi"
  },
  {
    "Symbol": "SPNS",
    "Name": "Sapiens International Corporation N.V."
  },
  {
    "Symbol": "SRPT",
    "Name": "Sarepta Therapeutics, Inc."
  },
  {
    "Symbol": "SVRA",
    "Name": "Savara, Inc."
  },
  {
    "Symbol": "SBFG",
    "Name": "SB Financial Group, Inc."
  },
  {
    "Symbol": "SBFGP",
    "Name": "SB Financial Group, Inc."
  },
  {
    "Symbol": "SBBX",
    "Name": "SB One Bancorp"
  },
  {
    "Symbol": "SBAC",
    "Name": "SBA Communications Corporation"
  },
  {
    "Symbol": "SCSC",
    "Name": "ScanSource, Inc."
  },
  {
    "Symbol": "SMIT",
    "Name": "Schmitt Industries, Inc."
  },
  {
    "Symbol": "SCHN",
    "Name": "Schnitzer Steel Industries, Inc."
  },
  {
    "Symbol": "SRRK",
    "Name": "Scholar Rock Holding Corporation"
  },
  {
    "Symbol": "SCHL",
    "Name": "Scholastic Corporation"
  },
  {
    "Symbol": "SGMS",
    "Name": "Scientific Games Corp"
  },
  {
    "Symbol": "SCPH",
    "Name": "scPharmaceuticals Inc."
  },
  {
    "Symbol": "SCYX",
    "Name": "SCYNEXIS, Inc."
  },
  {
    "Symbol": "SEAC",
    "Name": "SeaChange International, Inc."
  },
  {
    "Symbol": "SBCF",
    "Name": "Seacoast Banking Corporation of Florida"
  },
  {
    "Symbol": "STX",
    "Name": "Seagate Technology PLC"
  },
  {
    "Symbol": "SHIP",
    "Name": "Seanergy Maritime Holdings Corp"
  },
  {
    "Symbol": "SHIPW",
    "Name": "Seanergy Maritime Holdings Corp"
  },
  {
    "Symbol": "SHLD",
    "Name": "Sears Holdings Corporation"
  },
  {
    "Symbol": "SHLDW",
    "Name": "Sears Holdings Corporation"
  },
  {
    "Symbol": "SHOS",
    "Name": "Sears Hometown and Outlet Stores, Inc."
  },
  {
    "Symbol": "SPNE",
    "Name": "SeaSpine Holdings Corporation"
  },
  {
    "Symbol": "SGEN",
    "Name": "Seattle Genetics, Inc."
  },
  {
    "Symbol": "EYES",
    "Name": "Second Sight Medical Products, Inc."
  },
  {
    "Symbol": "EYESW",
    "Name": "Second Sight Medical Products, Inc."
  },
  {
    "Symbol": "SECO",
    "Name": "Secoo Holding Limited"
  },
  {
    "Symbol": "SCWX",
    "Name": "SecureWorks Corp."
  },
  {
    "Symbol": "SNFCA",
    "Name": "Security National Financial Corporation"
  },
  {
    "Symbol": "SEIC",
    "Name": "SEI Investments Company"
  },
  {
    "Symbol": "SLCT",
    "Name": "Select Bancorp, Inc."
  },
  {
    "Symbol": "SIR",
    "Name": "Select Income REIT"
  },
  {
    "Symbol": "SIC",
    "Name": "Select Interior Concepts, Inc."
  },
  {
    "Symbol": "SELB",
    "Name": "Selecta Biosciences, Inc."
  },
  {
    "Symbol": "SIGI",
    "Name": "Selective Insurance Group, Inc."
  },
  {
    "Symbol": "SLS",
    "Name": "SELLAS Life Sciences Group, Inc."
  },
  {
    "Symbol": "LEDS",
    "Name": "SemiLEDS Corporation"
  },
  {
    "Symbol": "SMTC",
    "Name": "Semtech Corporation"
  },
  {
    "Symbol": "SENEA",
    "Name": "Seneca Foods Corp."
  },
  {
    "Symbol": "SENEB",
    "Name": "Seneca Foods Corp."
  },
  {
    "Symbol": "SNES",
    "Name": "SenesTech, Inc."
  },
  {
    "Symbol": "SNH",
    "Name": "Senior Housing Properties Trust"
  },
  {
    "Symbol": "SNHNI",
    "Name": "Senior Housing Properties Trust"
  },
  {
    "Symbol": "SNHNL",
    "Name": "Senior Housing Properties Trust"
  },
  {
    "Symbol": "AIHS",
    "Name": "Senmiao Technology Limited"
  },
  {
    "Symbol": "SNMX",
    "Name": "Senomyx, Inc."
  },
  {
    "Symbol": "SRTS",
    "Name": "Sensus Healthcare, Inc."
  },
  {
    "Symbol": "SRTSW",
    "Name": "Sensus Healthcare, Inc."
  },
  {
    "Symbol": "STNL",
    "Name": "Sentinel Energy Services Inc."
  },
  {
    "Symbol": "STNLU",
    "Name": "Sentinel Energy Services Inc."
  },
  {
    "Symbol": "STNLW",
    "Name": "Sentinel Energy Services Inc."
  },
  {
    "Symbol": "SQBG",
    "Name": "Sequential Brands Group, Inc."
  },
  {
    "Symbol": "MCRB",
    "Name": "Seres Therapeutics, Inc."
  },
  {
    "Symbol": "SREV",
    "Name": "ServiceSource International, Inc."
  },
  {
    "Symbol": "SFBS",
    "Name": "ServisFirst Bancshares, Inc."
  },
  {
    "Symbol": "SESN",
    "Name": "Sesen Bio, Inc."
  },
  {
    "Symbol": "SSC",
    "Name": "Seven Stars Cloud Group, Inc."
  },
  {
    "Symbol": "SVBI",
    "Name": "Severn Bancorp Inc"
  },
  {
    "Symbol": "SGBX",
    "Name": "SG Blocks, Inc."
  },
  {
    "Symbol": "SGOC",
    "Name": "SGOCO Group, Ltd"
  },
  {
    "Symbol": "SEII",
    "Name": "Sharing Economy International Inc."
  },
  {
    "Symbol": "SMED",
    "Name": "Sharps Compliance Corp."
  },
  {
    "Symbol": "SHSP",
    "Name": "SharpSpring, Inc."
  },
  {
    "Symbol": "SHEN",
    "Name": "Shenandoah Telecommunications Co"
  },
  {
    "Symbol": "PIXY",
    "Name": "ShiftPixy, Inc."
  },
  {
    "Symbol": "SHLO",
    "Name": "Shiloh Industries, Inc."
  },
  {
    "Symbol": "TYHT",
    "Name": "Shineco, Inc."
  },
  {
    "Symbol": "SHPG",
    "Name": "Shire plc"
  },
  {
    "Symbol": "SCVL",
    "Name": "Shoe Carnival, Inc."
  },
  {
    "Symbol": "SHBI",
    "Name": "Shore Bancshares Inc"
  },
  {
    "Symbol": "SSTI",
    "Name": "ShotSpotter, Inc."
  },
  {
    "Symbol": "SFLY",
    "Name": "Shutterfly, Inc."
  },
  {
    "Symbol": "SIFI",
    "Name": "SI Financial Group, Inc."
  },
  {
    "Symbol": "SIEB",
    "Name": "Siebert Financial Corp."
  },
  {
    "Symbol": "SNNA",
    "Name": "Sienna Biopharmaceuticals, Inc."
  },
  {
    "Symbol": "SIEN",
    "Name": "Sientra, Inc."
  },
  {
    "Symbol": "BSRR",
    "Name": "Sierra Bancorp"
  },
  {
    "Symbol": "SRRA",
    "Name": "Sierra Oncology, Inc."
  },
  {
    "Symbol": "SWIR",
    "Name": "Sierra Wireless, Inc."
  },
  {
    "Symbol": "SIFY",
    "Name": "Sify Technologies Limited"
  },
  {
    "Symbol": "SIGA",
    "Name": "SIGA Technologies Inc."
  },
  {
    "Symbol": "SGLB",
    "Name": "Sigma Labs, Inc."
  },
  {
    "Symbol": "SGLBW",
    "Name": "Sigma Labs, Inc."
  },
  {
    "Symbol": "SGMA",
    "Name": "SigmaTron International, Inc."
  },
  {
    "Symbol": "SBNY",
    "Name": "Signature Bank"
  },
  {
    "Symbol": "SBNYW",
    "Name": "Signature Bank"
  },
  {
    "Symbol": "SLGN",
    "Name": "Silgan Holdings Inc."
  },
  {
    "Symbol": "SILC",
    "Name": "Silicom Ltd"
  },
  {
    "Symbol": "SLAB",
    "Name": "Silicon Laboratories, Inc."
  },
  {
    "Symbol": "SIMO",
    "Name": "Silicon Motion Technology Corporation"
  },
  {
    "Symbol": "SAMG",
    "Name": "Silvercrest Asset Management Group Inc."
  },
  {
    "Symbol": "SSNT",
    "Name": "SilverSun Technologies, Inc."
  },
  {
    "Symbol": "SFNC",
    "Name": "Simmons First National Corporation"
  },
  {
    "Symbol": "SLP",
    "Name": "Simulations Plus, Inc."
  },
  {
    "Symbol": "SINA",
    "Name": "Sina Corporation"
  },
  {
    "Symbol": "SBGI",
    "Name": "Sinclair Broadcast Group, Inc."
  },
  {
    "Symbol": "SINO",
    "Name": "Sino-Global Shipping America, Ltd."
  },
  {
    "Symbol": "SVA",
    "Name": "Sinovac Biotech, Ltd."
  },
  {
    "Symbol": "SIRI",
    "Name": "Sirius XM Holdings Inc."
  },
  {
    "Symbol": "SITO",
    "Name": "SITO Mobile, Ltd."
  },
  {
    "Symbol": "SKYS",
    "Name": "Sky Solar Holdings, Ltd."
  },
  {
    "Symbol": "SKYW",
    "Name": "SkyWest, Inc."
  },
  {
    "Symbol": "SWKS",
    "Name": "Skyworks Solutions, Inc."
  },
  {
    "Symbol": "SNBR",
    "Name": "Sleep Number Corporation"
  },
  {
    "Symbol": "SLM",
    "Name": "SLM Corporation"
  },
  {
    "Symbol": "SLMBP",
    "Name": "SLM Corporation"
  },
  {
    "Symbol": "SGH",
    "Name": "SMART Global Holdings, Inc."
  },
  {
    "Symbol": "SND",
    "Name": "Smart Sand, Inc."
  },
  {
    "Symbol": "SMBK",
    "Name": "SmartFinancial, Inc."
  },
  {
    "Symbol": "SMSI",
    "Name": "Smith Micro Software, Inc."
  },
  {
    "Symbol": "SMTX",
    "Name": "SMTC Corporation"
  },
  {
    "Symbol": "SRAX",
    "Name": "Social Reality, Inc."
  },
  {
    "Symbol": "SCKT",
    "Name": "Socket Mobile, Inc."
  },
  {
    "Symbol": "SODA",
    "Name": "SodaStream International Ltd."
  },
  {
    "Symbol": "SOHU",
    "Name": "Sohu.com Limited"
  },
  {
    "Symbol": "SLRC",
    "Name": "Solar Capital Ltd."
  },
  {
    "Symbol": "SUNS",
    "Name": "Solar Senior Capital Ltd."
  },
  {
    "Symbol": "SEDG",
    "Name": "SolarEdge Technologies, Inc."
  },
  {
    "Symbol": "SLNO",
    "Name": "Soleno Therapeutics, Inc."
  },
  {
    "Symbol": "SLNOW",
    "Name": "Soleno Therapeutics, Inc."
  },
  {
    "Symbol": "SLGL",
    "Name": "Sol-Gel Technologies Ltd."
  },
  {
    "Symbol": "SLDB",
    "Name": "Solid Biosciences Inc."
  },
  {
    "Symbol": "SNGX",
    "Name": "Soligenix, Inc."
  },
  {
    "Symbol": "SNGXW",
    "Name": "Soligenix, Inc."
  },
  {
    "Symbol": "SONC",
    "Name": "Sonic Corp."
  },
  {
    "Symbol": "SOFO",
    "Name": "Sonic Foundry, Inc."
  },
  {
    "Symbol": "SNOA",
    "Name": "Sonoma Pharmaceuticals, Inc."
  },
  {
    "Symbol": "SNOAW",
    "Name": "Sonoma Pharmaceuticals, Inc."
  },
  {
    "Symbol": "SONO",
    "Name": "Sonos, Inc."
  },
  {
    "Symbol": "SPHS",
    "Name": "Sophiris Bio, Inc."
  },
  {
    "Symbol": "SORL",
    "Name": "SORL Auto Parts, Inc."
  },
  {
    "Symbol": "SRNE",
    "Name": "Sorrento Therapeutics, Inc."
  },
  {
    "Symbol": "SOHO",
    "Name": "Sotherly Hotels Inc."
  },
  {
    "Symbol": "SOHOB",
    "Name": "Sotherly Hotels Inc."
  },
  {
    "Symbol": "SOHOO",
    "Name": "Sotherly Hotels Inc."
  },
  {
    "Symbol": "SOHOK",
    "Name": "Sotherly Hotels LP"
  },
  {
    "Symbol": "SFBC",
    "Name": "Sound Financial Bancorp, Inc."
  },
  {
    "Symbol": "SSB",
    "Name": "South State Corporation"
  },
  {
    "Symbol": "SFST",
    "Name": "Southern First Bancshares, Inc."
  },
  {
    "Symbol": "SMBC",
    "Name": "Southern Missouri Bancorp, Inc."
  },
  {
    "Symbol": "SONA",
    "Name": "Southern National Bancorp of Virginia, Inc."
  },
  {
    "Symbol": "SBSI",
    "Name": "Southside Bancshares, Inc."
  },
  {
    "Symbol": "SP",
    "Name": "SP Plus Corporation"
  },
  {
    "Symbol": "SGRP",
    "Name": "SPAR Group, Inc."
  },
  {
    "Symbol": "SPKE",
    "Name": "Spark Energy, Inc."
  },
  {
    "Symbol": "SPKEP",
    "Name": "Spark Energy, Inc."
  },
  {
    "Symbol": "ONCE",
    "Name": "Spark Therapeutics, Inc."
  },
  {
    "Symbol": "SPAR",
    "Name": "Spartan Motors, Inc."
  },
  {
    "Symbol": "SPTN",
    "Name": "SpartanNash Company"
  },
  {
    "Symbol": "DWFI",
    "Name": "SPDR Dorsey Wright Fixed Income Allocation ETF"
  },
  {
    "Symbol": "SPPI",
    "Name": "Spectrum Pharmaceuticals, Inc."
  },
  {
    "Symbol": "SPRO",
    "Name": "Spero Therapeutics, Inc."
  },
  {
    "Symbol": "ANY",
    "Name": "Sphere 3D Corp."
  },
  {
    "Symbol": "SPEX",
    "Name": "Spherix Incorporated"
  },
  {
    "Symbol": "SPI",
    "Name": "SPI Energy Co., Ltd."
  },
  {
    "Symbol": "SAVE",
    "Name": "Spirit Airlines, Inc."
  },
  {
    "Symbol": "STXB",
    "Name": "Spirit of Texas Bancshares, Inc."
  },
  {
    "Symbol": "SPLK",
    "Name": "Splunk Inc."
  },
  {
    "Symbol": "SPOK",
    "Name": "Spok Holdings, Inc."
  },
  {
    "Symbol": "SPWH",
    "Name": "Sportsman&#39;s Warehouse Holdings, Inc."
  },
  {
    "Symbol": "SBPH",
    "Name": "Spring Bank Pharmaceuticals, Inc."
  },
  {
    "Symbol": "FUND",
    "Name": "Sprott Focus Trust, Inc."
  },
  {
    "Symbol": "SFM",
    "Name": "Sprouts Farmers Market, Inc."
  },
  {
    "Symbol": "SPSC",
    "Name": "SPS Commerce, Inc."
  },
  {
    "Symbol": "SSNC",
    "Name": "SS&C Technologies Holdings, Inc."
  },
  {
    "Symbol": "SSLJ",
    "Name": "SSLJ.com Limited"
  },
  {
    "Symbol": "SSRM",
    "Name": "SSR Mining Inc."
  },
  {
    "Symbol": "STAA",
    "Name": "STAAR Surgical Company"
  },
  {
    "Symbol": "STAF",
    "Name": "Staffing 360 Solutions, Inc."
  },
  {
    "Symbol": "STMP",
    "Name": "Stamps.com Inc."
  },
  {
    "Symbol": "STND",
    "Name": "Standard AVB Financial Corp."
  },
  {
    "Symbol": "SBLK",
    "Name": "Star Bulk Carriers Corp."
  },
  {
    "Symbol": "SBLKZ",
    "Name": "Star Bulk Carriers Corp."
  },
  {
    "Symbol": "SBUX",
    "Name": "Starbucks Corporation"
  },
  {
    "Symbol": "STFC",
    "Name": "State Auto Financial Corporation"
  },
  {
    "Symbol": "STBZ",
    "Name": "State Bank Financial Corporation."
  },
  {
    "Symbol": "GASS",
    "Name": "StealthGas, Inc."
  },
  {
    "Symbol": "STCN",
    "Name": "Steel Connect, Inc."
  },
  {
    "Symbol": "STLD",
    "Name": "Steel Dynamics, Inc."
  },
  {
    "Symbol": "SMRT",
    "Name": "Stein Mart, Inc."
  },
  {
    "Symbol": "STLR",
    "Name": "Stellar Acquisition III Inc."
  },
  {
    "Symbol": "STLRU",
    "Name": "Stellar Acquisition III Inc."
  },
  {
    "Symbol": "STLRW",
    "Name": "Stellar Acquisition III Inc."
  },
  {
    "Symbol": "SBOT",
    "Name": "Stellar Biotechnologies, Inc."
  },
  {
    "Symbol": "STML",
    "Name": "Stemline Therapeutics, Inc."
  },
  {
    "Symbol": "SRCL",
    "Name": "Stericycle, Inc."
  },
  {
    "Symbol": "SRCLP",
    "Name": "Stericycle, Inc."
  },
  {
    "Symbol": "SBT",
    "Name": "Sterling Bancorp, Inc."
  },
  {
    "Symbol": "STRL",
    "Name": "Sterling Construction Company Inc"
  },
  {
    "Symbol": "SHOO",
    "Name": "Steven Madden, Ltd."
  },
  {
    "Symbol": "SSFN",
    "Name": "Stewardship Financial Corp"
  },
  {
    "Symbol": "SFIX",
    "Name": "Stitch Fix, Inc."
  },
  {
    "Symbol": "SYBT",
    "Name": "Stock Yards Bancorp, Inc."
  },
  {
    "Symbol": "BANX",
    "Name": "StoneCastle Financial Corp"
  },
  {
    "Symbol": "SSKN",
    "Name": "Strata Skin Sciences, Inc."
  },
  {
    "Symbol": "SSYS",
    "Name": "Stratasys, Ltd."
  },
  {
    "Symbol": "STRA",
    "Name": "Strategic Education, Inc."
  },
  {
    "Symbol": "HNDL",
    "Name": "Strategy Shares Nasdaq 7HANDL Index ETF"
  },
  {
    "Symbol": "STRT",
    "Name": "Strattec Security Corporation"
  },
  {
    "Symbol": "STRS",
    "Name": "Stratus Properties Inc."
  },
  {
    "Symbol": "STRM",
    "Name": "Streamline Health Solutions, Inc."
  },
  {
    "Symbol": "SBBP",
    "Name": "Strongbridge Biopharma plc"
  },
  {
    "Symbol": "SUMR",
    "Name": "Summer Infant, Inc."
  },
  {
    "Symbol": "SMMF",
    "Name": "Summit Financial Group, Inc."
  },
  {
    "Symbol": "WISA",
    "Name": "Summit Semiconductor, Inc."
  },
  {
    "Symbol": "SSBI",
    "Name": "Summit State Bank"
  },
  {
    "Symbol": "SMMT",
    "Name": "Summit Therapeutics plc"
  },
  {
    "Symbol": "SNHY",
    "Name": "Sun Hydraulics Corporation"
  },
  {
    "Symbol": "SNDE",
    "Name": "Sundance Energy Australia Limited"
  },
  {
    "Symbol": "SNSS",
    "Name": "Sunesis Pharmaceuticals, Inc."
  },
  {
    "Symbol": "STKL",
    "Name": "SunOpta, Inc."
  },
  {
    "Symbol": "SPWR",
    "Name": "SunPower Corporation"
  },
  {
    "Symbol": "RUN",
    "Name": "Sunrun Inc."
  },
  {
    "Symbol": "SUNW",
    "Name": "Sunworks, Inc."
  },
  {
    "Symbol": "SPCB",
    "Name": "SuperCom, Ltd."
  },
  {
    "Symbol": "SCON",
    "Name": "Superconductor Technologies Inc."
  },
  {
    "Symbol": "SGC",
    "Name": "Superior Group of Companies, Inc."
  },
  {
    "Symbol": "SUPN",
    "Name": "Supernus Pharmaceuticals, Inc."
  },
  {
    "Symbol": "SPRT",
    "Name": "support.com, Inc."
  },
  {
    "Symbol": "SURF",
    "Name": "Surface Oncology, Inc."
  },
  {
    "Symbol": "SGRY",
    "Name": "Surgery Partners, Inc."
  },
  {
    "Symbol": "SRDX",
    "Name": "Surmodics, Inc."
  },
  {
    "Symbol": "SIVB",
    "Name": "SVB Financial Group"
  },
  {
    "Symbol": "SYKE",
    "Name": "Sykes Enterprises, Incorporated"
  },
  {
    "Symbol": "SYMC",
    "Name": "Symantec Corporation"
  },
  {
    "Symbol": "SYNC",
    "Name": "Synacor, Inc."
  },
  {
    "Symbol": "SYNL",
    "Name": "Synalloy Corporation"
  },
  {
    "Symbol": "SYNA",
    "Name": "Synaptics Incorporated"
  },
  {
    "Symbol": "SNDX",
    "Name": "Syndax Pharmaceuticals, Inc."
  },
  {
    "Symbol": "SYNH",
    "Name": "Syneos Health, Inc."
  },
  {
    "Symbol": "SGYP",
    "Name": "Synergy Pharmaceuticals, Inc."
  },
  {
    "Symbol": "SYBX",
    "Name": "Synlogic, Inc."
  },
  {
    "Symbol": "SNPS",
    "Name": "Synopsys, Inc."
  },
  {
    "Symbol": "SYNT",
    "Name": "Syntel, Inc."
  },
  {
    "Symbol": "SES",
    "Name": "Synthesis Energy Systems, Inc."
  },
  {
    "Symbol": "SYPR",
    "Name": "Sypris Solutions, Inc."
  },
  {
    "Symbol": "SYRS",
    "Name": "Syros Pharmaceuticals, Inc."
  },
  {
    "Symbol": "TROW",
    "Name": "T. Rowe Price Group, Inc."
  },
  {
    "Symbol": "TTOO",
    "Name": "T2 Biosystems, Inc."
  },
  {
    "Symbol": "TRHC",
    "Name": "Tabula Rasa HealthCare, Inc."
  },
  {
    "Symbol": "TCMD",
    "Name": "Tactile Systems Technology, Inc."
  },
  {
    "Symbol": "TAIT",
    "Name": "Taitron Components Incorporated"
  },
  {
    "Symbol": "TTWO",
    "Name": "Take-Two Interactive Software, Inc."
  },
  {
    "Symbol": "TLND",
    "Name": "Talend S.A."
  },
  {
    "Symbol": "TNDM",
    "Name": "Tandem Diabetes Care, Inc."
  },
  {
    "Symbol": "TLF",
    "Name": "Tandy Leather Factory, Inc."
  },
  {
    "Symbol": "TANH",
    "Name": "Tantech Holdings Ltd."
  },
  {
    "Symbol": "TAOP",
    "Name": "Taoping Inc."
  },
  {
    "Symbol": "TPIV",
    "Name": "TapImmune Inc."
  },
  {
    "Symbol": "TEDU",
    "Name": "Tarena International, Inc."
  },
  {
    "Symbol": "TATT",
    "Name": "TAT Technologies Ltd."
  },
  {
    "Symbol": "TAYD",
    "Name": "Taylor Devices, Inc."
  },
  {
    "Symbol": "CGBD",
    "Name": "TCG BDC, Inc."
  },
  {
    "Symbol": "AMTD",
    "Name": "TD Ameritrade Holding Corporation"
  },
  {
    "Symbol": "PETZ",
    "Name": "TDH Holdings, Inc."
  },
  {
    "Symbol": "TECD",
    "Name": "Tech Data Corporation"
  },
  {
    "Symbol": "TCCO",
    "Name": "Technical Communications Corporation"
  },
  {
    "Symbol": "TTGT",
    "Name": "TechTarget, Inc."
  },
  {
    "Symbol": "TGLS",
    "Name": "Tecnoglass Inc."
  },
  {
    "Symbol": "TGEN",
    "Name": "Tecogen Inc."
  },
  {
    "Symbol": "TNAV",
    "Name": "Telenav, Inc."
  },
  {
    "Symbol": "TLGT",
    "Name": "Teligent, Inc."
  },
  {
    "Symbol": "TELL",
    "Name": "Tellurian Inc."
  },
  {
    "Symbol": "TENB",
    "Name": "Tenable Holdings, Inc."
  },
  {
    "Symbol": "TENX",
    "Name": "Tenax Therapeutics, Inc."
  },
  {
    "Symbol": "TZACU",
    "Name": "Tenzing Acquisition Corp."
  },
  {
    "Symbol": "TERP",
    "Name": "TerraForm Power, Inc."
  },
  {
    "Symbol": "TBNK",
    "Name": "Territorial Bancorp Inc."
  },
  {
    "Symbol": "TSRO",
    "Name": "TESARO, Inc."
  },
  {
    "Symbol": "TSLA",
    "Name": "Tesla, Inc."
  },
  {
    "Symbol": "TESS",
    "Name": "TESSCO Technologies Incorporated"
  },
  {
    "Symbol": "TTEK",
    "Name": "Tetra Tech, Inc."
  },
  {
    "Symbol": "TTPH",
    "Name": "Tetraphase Pharmaceuticals, Inc."
  },
  {
    "Symbol": "TCBI",
    "Name": "Texas Capital Bancshares, Inc."
  },
  {
    "Symbol": "TCBIL",
    "Name": "Texas Capital Bancshares, Inc."
  },
  {
    "Symbol": "TCBIP",
    "Name": "Texas Capital Bancshares, Inc."
  },
  {
    "Symbol": "TCBIW",
    "Name": "Texas Capital Bancshares, Inc."
  },
  {
    "Symbol": "TXN",
    "Name": "Texas Instruments Incorporated"
  },
  {
    "Symbol": "TXRH",
    "Name": "Texas Roadhouse, Inc."
  },
  {
    "Symbol": "TFSL",
    "Name": "TFS Financial Corporation"
  },
  {
    "Symbol": "TGTX",
    "Name": "TG Therapeutics, Inc."
  },
  {
    "Symbol": "ANDE",
    "Name": "The Andersons, Inc."
  },
  {
    "Symbol": "TBBK",
    "Name": "The Bancorp, Inc."
  },
  {
    "Symbol": "BPRN",
    "Name": "The Bank of Princeton"
  },
  {
    "Symbol": "CG",
    "Name": "The Carlyle Group L.P."
  },
  {
    "Symbol": "TCGP",
    "Name": "The Carlyle Group L.P."
  },
  {
    "Symbol": "CAKE",
    "Name": "The Cheesecake Factory Incorporated"
  },
  {
    "Symbol": "CHEF",
    "Name": "The Chefs&#39; Warehouse, Inc."
  },
  {
    "Symbol": "TCFC",
    "Name": "The Community Financial Corporation"
  },
  {
    "Symbol": "DSGX",
    "Name": "The Descartes Systems Group Inc."
  },
  {
    "Symbol": "DXYN",
    "Name": "The Dixie Group, Inc."
  },
  {
    "Symbol": "ENSG",
    "Name": "The Ensign Group, Inc."
  },
  {
    "Symbol": "XONE",
    "Name": "The ExOne Company"
  },
  {
    "Symbol": "FBMS",
    "Name": "The First Bancshares, Inc."
  },
  {
    "Symbol": "FLIC",
    "Name": "The First of Long Island Corporation"
  },
  {
    "Symbol": "GT",
    "Name": "The Goodyear Tire & Rubber Company"
  },
  {
    "Symbol": "HABT",
    "Name": "The Habit Restaurants, Inc."
  },
  {
    "Symbol": "HCKT",
    "Name": "The Hackett Group, Inc."
  },
  {
    "Symbol": "HAIN",
    "Name": "The Hain Celestial Group, Inc."
  },
  {
    "Symbol": "CUBA",
    "Name": "The Herzfeld Caribbean Basin Fund, Inc."
  },
  {
    "Symbol": "INTG",
    "Name": "The Intergroup Corporation"
  },
  {
    "Symbol": "JYNT",
    "Name": "The Joint Corp."
  },
  {
    "Symbol": "KEYW",
    "Name": "The KEYW Holding Corporation"
  },
  {
    "Symbol": "KHC",
    "Name": "The Kraft Heinz Company"
  },
  {
    "Symbol": "OLD",
    "Name": "The Long-Term Care ETF"
  },
  {
    "Symbol": "LOVE",
    "Name": "The Lovesac Company"
  },
  {
    "Symbol": "MSG",
    "Name": "The Madison Square Garden Company"
  },
  {
    "Symbol": "MDCO",
    "Name": "The Medicines Company"
  },
  {
    "Symbol": "MEET",
    "Name": "The Meet Group, Inc."
  },
  {
    "Symbol": "MIK",
    "Name": "The Michaels Companies, Inc."
  },
  {
    "Symbol": "MIDD",
    "Name": "The Middleby Corporation"
  },
  {
    "Symbol": "NAVG",
    "Name": "The Navigators Group, Inc."
  },
  {
    "Symbol": "SLIM",
    "Name": "The Obesity ETF"
  },
  {
    "Symbol": "STKS",
    "Name": "The ONE Group Hospitality, Inc."
  },
  {
    "Symbol": "ORG",
    "Name": "The Organics ETF"
  },
  {
    "Symbol": "PRSC",
    "Name": "The Providence Service Corporation"
  },
  {
    "Symbol": "RMR",
    "Name": "The RMR Group Inc."
  },
  {
    "Symbol": "SMPL",
    "Name": "The Simply Good Foods Company"
  },
  {
    "Symbol": "SMPLW",
    "Name": "The Simply Good Foods Company"
  },
  {
    "Symbol": "TSG",
    "Name": "The Stars Group Inc."
  },
  {
    "Symbol": "TTD",
    "Name": "The Trade Desk, Inc."
  },
  {
    "Symbol": "ULTI",
    "Name": "The Ultimate Software Group, Inc."
  },
  {
    "Symbol": "YORW",
    "Name": "The York Water Company"
  },
  {
    "Symbol": "NCTY",
    "Name": "The9 Limited"
  },
  {
    "Symbol": "TXMD",
    "Name": "TherapeuticsMD, Inc."
  },
  {
    "Symbol": "TRPX",
    "Name": "Therapix Biosciences Ltd."
  },
  {
    "Symbol": "TBPH",
    "Name": "Theravance Biopharma, Inc."
  },
  {
    "Symbol": "TST",
    "Name": "TheStreet, Inc."
  },
  {
    "Symbol": "TCRD",
    "Name": "THL Credit, Inc."
  },
  {
    "Symbol": "TBRG",
    "Name": "Thunder Bridge Acquisition, Ltd."
  },
  {
    "Symbol": "TBRGU",
    "Name": "Thunder Bridge Acquisition, Ltd."
  },
  {
    "Symbol": "TBRGW",
    "Name": "Thunder Bridge Acquisition, Ltd."
  },
  {
    "Symbol": "TIBR",
    "Name": "Tiberius Acquisition Corporation"
  },
  {
    "Symbol": "TIBRU",
    "Name": "Tiberius Acquisition Corporation"
  },
  {
    "Symbol": "TIBRW",
    "Name": "Tiberius Acquisition Corporation"
  },
  {
    "Symbol": "TTS",
    "Name": "Tile Shop Hldgs, Inc."
  },
  {
    "Symbol": "TLRY",
    "Name": "Tilray, Inc."
  },
  {
    "Symbol": "TSBK",
    "Name": "Timberland Bancorp, Inc."
  },
  {
    "Symbol": "TIPT",
    "Name": "Tiptree Inc."
  },
  {
    "Symbol": "TITN",
    "Name": "Titan Machinery Inc."
  },
  {
    "Symbol": "TMDI",
    "Name": "Titan Medical Inc."
  },
  {
    "Symbol": "TTNP",
    "Name": "Titan Pharmaceuticals, Inc."
  },
  {
    "Symbol": "TVTY",
    "Name": "Tivity Health, Inc."
  },
  {
    "Symbol": "TIVO",
    "Name": "TiVo Corporation"
  },
  {
    "Symbol": "TKKSU",
    "Name": "TKK Symphony Acquisition Corporation"
  },
  {
    "Symbol": "TMUS",
    "Name": "T-Mobile US, Inc."
  },
  {
    "Symbol": "TMSR",
    "Name": "TMSR Holding Company Limited"
  },
  {
    "Symbol": "TOCA",
    "Name": "Tocagen Inc."
  },
  {
    "Symbol": "TNXP",
    "Name": "Tonix Pharmaceuticals Holding Corp."
  },
  {
    "Symbol": "TISA",
    "Name": "Top Image Systems, Ltd."
  },
  {
    "Symbol": "TOPS",
    "Name": "TOP Ships Inc."
  },
  {
    "Symbol": "TRCH",
    "Name": "Torchlight Energy Resources, Inc."
  },
  {
    "Symbol": "TRMD",
    "Name": "TORM plc"
  },
  {
    "Symbol": "TOTA",
    "Name": "Tottenham Acquisition I Limited"
  },
  {
    "Symbol": "TOTAR",
    "Name": "Tottenham Acquisition I Limited"
  },
  {
    "Symbol": "TOTAU",
    "Name": "Tottenham Acquisition I Limited"
  },
  {
    "Symbol": "TOTAW",
    "Name": "Tottenham Acquisition I Limited"
  },
  {
    "Symbol": "TSEM",
    "Name": "Tower Semiconductor Ltd."
  },
  {
    "Symbol": "CLUB",
    "Name": "Town Sports International Holdings, Inc."
  },
  {
    "Symbol": "TOWN",
    "Name": "Towne Bank"
  },
  {
    "Symbol": "TPIC",
    "Name": "TPI Composites, Inc."
  },
  {
    "Symbol": "TCON",
    "Name": "TRACON Pharmaceuticals, Inc."
  },
  {
    "Symbol": "TSCO",
    "Name": "Tractor Supply Company"
  },
  {
    "Symbol": "TWMC",
    "Name": "Trans World Entertainment Corp."
  },
  {
    "Symbol": "TACT",
    "Name": "TransAct Technologies Incorporated"
  },
  {
    "Symbol": "TRNS",
    "Name": "Transcat, Inc."
  },
  {
    "Symbol": "TGA",
    "Name": "TransGlobe Energy Corporation"
  },
  {
    "Symbol": "TBIO",
    "Name": "Translate Bio, Inc."
  },
  {
    "Symbol": "TA",
    "Name": "TravelCenters of America LLC"
  },
  {
    "Symbol": "TANNI",
    "Name": "TravelCenters of America LLC"
  },
  {
    "Symbol": "TANNL",
    "Name": "TravelCenters of America LLC"
  },
  {
    "Symbol": "TANNZ",
    "Name": "TravelCenters of America LLC"
  },
  {
    "Symbol": "TZOO",
    "Name": "Travelzoo"
  },
  {
    "Symbol": "TRMT",
    "Name": "Tremont Mortgage Trust"
  },
  {
    "Symbol": "TRVN",
    "Name": "Trevena, Inc."
  },
  {
    "Symbol": "TCDA",
    "Name": "Tricida, Inc."
  },
  {
    "Symbol": "TCBK",
    "Name": "TriCo Bancshares"
  },
  {
    "Symbol": "TDAC",
    "Name": "Trident Acquisitions Corp."
  },
  {
    "Symbol": "TDACU",
    "Name": "Trident Acquisitions Corp."
  },
  {
    "Symbol": "TDACW",
    "Name": "Trident Acquisitions Corp."
  },
  {
    "Symbol": "TRIL",
    "Name": "Trillium Therapeutics Inc."
  },
  {
    "Symbol": "TRS",
    "Name": "TriMas Corporation"
  },
  {
    "Symbol": "TRMB",
    "Name": "Trimble Inc."
  },
  {
    "Symbol": "TRIB",
    "Name": "Trinity Biotech plc"
  },
  {
    "Symbol": "TMCX",
    "Name": "Trinity Merger Corp."
  },
  {
    "Symbol": "TMCXU",
    "Name": "Trinity Merger Corp."
  },
  {
    "Symbol": "TMCXW",
    "Name": "Trinity Merger Corp."
  },
  {
    "Symbol": "TRIP",
    "Name": "TripAdvisor, Inc."
  },
  {
    "Symbol": "TSC",
    "Name": "TriState Capital Holdings, Inc."
  },
  {
    "Symbol": "TSCAP",
    "Name": "TriState Capital Holdings, Inc."
  },
  {
    "Symbol": "TBK",
    "Name": "Triumph Bancorp, Inc."
  },
  {
    "Symbol": "TRVG",
    "Name": "trivago N.V."
  },
  {
    "Symbol": "TRNC",
    "Name": "tronc, Inc."
  },
  {
    "Symbol": "TROV",
    "Name": "TrovaGene, Inc."
  },
  {
    "Symbol": "TRUE",
    "Name": "TrueCar, Inc."
  },
  {
    "Symbol": "THST",
    "Name": "Truett-Hurst, Inc."
  },
  {
    "Symbol": "TRUP",
    "Name": "Trupanion, Inc."
  },
  {
    "Symbol": "TRST",
    "Name": "TrustCo Bank Corp NY"
  },
  {
    "Symbol": "TRMK",
    "Name": "Trustmark Corporation"
  },
  {
    "Symbol": "TSRI",
    "Name": "TSR, Inc."
  },
  {
    "Symbol": "TTEC",
    "Name": "TTEC Holdings, Inc."
  },
  {
    "Symbol": "TTMI",
    "Name": "TTM Technologies, Inc."
  },
  {
    "Symbol": "TCX",
    "Name": "Tucows Inc."
  },
  {
    "Symbol": "TUES",
    "Name": "Tuesday Morning Corp."
  },
  {
    "Symbol": "TOUR",
    "Name": "Tuniu Corporation"
  },
  {
    "Symbol": "HEAR",
    "Name": "Turtle Beach Corporation"
  },
  {
    "Symbol": "TWLV",
    "Name": "Twelve Seas Investment Company"
  },
  {
    "Symbol": "TWLVR",
    "Name": "Twelve Seas Investment Company"
  },
  {
    "Symbol": "TWLVU",
    "Name": "Twelve Seas Investment Company"
  },
  {
    "Symbol": "TWLVW",
    "Name": "Twelve Seas Investment Company"
  },
  {
    "Symbol": "FOX",
    "Name": "Twenty-First Century Fox, Inc."
  },
  {
    "Symbol": "FOXA",
    "Name": "Twenty-First Century Fox, Inc."
  },
  {
    "Symbol": "TWIN",
    "Name": "Twin Disc, Incorporated"
  },
  {
    "Symbol": "TRCB",
    "Name": "Two River Bancorp"
  },
  {
    "Symbol": "TYME",
    "Name": "Tyme Technologies, Inc."
  },
  {
    "Symbol": "USCR",
    "Name": "U S Concrete, Inc."
  },
  {
    "Symbol": "PRTS",
    "Name": "U.S. Auto Parts Network, Inc."
  },
  {
    "Symbol": "USEG",
    "Name": "U.S. Energy Corp."
  },
  {
    "Symbol": "GROW",
    "Name": "U.S. Global Investors, Inc."
  },
  {
    "Symbol": "USAU",
    "Name": "U.S. Gold Corp."
  },
  {
    "Symbol": "UBNT",
    "Name": "Ubiquiti Networks, Inc."
  },
  {
    "Symbol": "UFPT",
    "Name": "UFP Technologies, Inc."
  },
  {
    "Symbol": "ULTA",
    "Name": "Ulta Beauty, Inc."
  },
  {
    "Symbol": "UCTT",
    "Name": "Ultra Clean Holdings, Inc."
  },
  {
    "Symbol": "UPL",
    "Name": "Ultra Petroleum Corp."
  },
  {
    "Symbol": "RARE",
    "Name": "Ultragenyx Pharmaceutical Inc."
  },
  {
    "Symbol": "ULBI",
    "Name": "Ultralife Corporation"
  },
  {
    "Symbol": "UMBF",
    "Name": "UMB Financial Corporation"
  },
  {
    "Symbol": "UMPQ",
    "Name": "Umpqua Holdings Corporation"
  },
  {
    "Symbol": "UNAM",
    "Name": "Unico American Corporation"
  },
  {
    "Symbol": "UBSH",
    "Name": "Union Bankshares Corporation"
  },
  {
    "Symbol": "UNB",
    "Name": "Union Bankshares, Inc."
  },
  {
    "Symbol": "QURE",
    "Name": "uniQure N.V."
  },
  {
    "Symbol": "UBCP",
    "Name": "United Bancorp, Inc."
  },
  {
    "Symbol": "UBOH",
    "Name": "United Bancshares, Inc."
  },
  {
    "Symbol": "UBSI",
    "Name": "United Bankshares, Inc."
  },
  {
    "Symbol": "UCBA",
    "Name": "United Community Bancorp"
  },
  {
    "Symbol": "UCBI",
    "Name": "United Community Banks, Inc."
  },
  {
    "Symbol": "UCFC",
    "Name": "United Community Financial Corp."
  },
  {
    "Symbol": "UBNK",
    "Name": "United Financial Bancorp, Inc."
  },
  {
    "Symbol": "UFCS",
    "Name": "United Fire Group, Inc"
  },
  {
    "Symbol": "UIHC",
    "Name": "United Insurance Holdings Corp."
  },
  {
    "Symbol": "UNFI",
    "Name": "United Natural Foods, Inc."
  },
  {
    "Symbol": "UBFO",
    "Name": "United Security Bancshares"
  },
  {
    "Symbol": "USLM",
    "Name": "United States Lime & Minerals, Inc."
  },
  {
    "Symbol": "UTHR",
    "Name": "United Therapeutics Corporation"
  },
  {
    "Symbol": "UG",
    "Name": "United-Guardian, Inc."
  },
  {
    "Symbol": "UNIT",
    "Name": "Uniti Group Inc."
  },
  {
    "Symbol": "UNTY",
    "Name": "Unity Bancorp, Inc."
  },
  {
    "Symbol": "UBX",
    "Name": "Unity Biotechnology, Inc."
  },
  {
    "Symbol": "OLED",
    "Name": "Universal Display Corporation"
  },
  {
    "Symbol": "UEIC",
    "Name": "Universal Electronics Inc."
  },
  {
    "Symbol": "UFPI",
    "Name": "Universal Forest Products, Inc."
  },
  {
    "Symbol": "ULH",
    "Name": "Universal Logistics Holdings, Inc."
  },
  {
    "Symbol": "USAP",
    "Name": "Universal Stainless & Alloy Products, Inc."
  },
  {
    "Symbol": "UVSP",
    "Name": "Univest Corporation of Pennsylvania"
  },
  {
    "Symbol": "UMRX",
    "Name": "Unum Therapeutics Inc."
  },
  {
    "Symbol": "UPLD",
    "Name": "Upland Software, Inc."
  },
  {
    "Symbol": "UONE",
    "Name": "Urban One, Inc."
  },
  {
    "Symbol": "UONEK",
    "Name": "Urban One, Inc."
  },
  {
    "Symbol": "URBN",
    "Name": "Urban Outfitters, Inc."
  },
  {
    "Symbol": "URGN",
    "Name": "UroGen Pharma Ltd."
  },
  {
    "Symbol": "ECOL",
    "Name": "US Ecology, Inc."
  },
  {
    "Symbol": "USAT",
    "Name": "USA Technologies, Inc."
  },
  {
    "Symbol": "USATP",
    "Name": "USA Technologies, Inc."
  },
  {
    "Symbol": "USAK",
    "Name": "USA Truck, Inc."
  },
  {
    "Symbol": "UTMD",
    "Name": "Utah Medical Products, Inc."
  },
  {
    "Symbol": "UTSI",
    "Name": "UTStarcom Holdings Corp"
  },
  {
    "Symbol": "UXIN",
    "Name": "Uxin Limited"
  },
  {
    "Symbol": "VCNX",
    "Name": "Vaccinex, Inc."
  },
  {
    "Symbol": "VLRX",
    "Name": "Valeritas Holdings, Inc."
  },
  {
    "Symbol": "VALX",
    "Name": "Validea Market Legends ETF"
  },
  {
    "Symbol": "VALU",
    "Name": "Value Line, Inc."
  },
  {
    "Symbol": "VNDA",
    "Name": "Vanda Pharmaceuticals Inc."
  },
  {
    "Symbol": "BBH",
    "Name": "VanEck Vectors Biotech ETF"
  },
  {
    "Symbol": "GNRX",
    "Name": "VanEck Vectors Generic Drugs ETF"
  },
  {
    "Symbol": "PPH",
    "Name": "VanEck Vectors Pharmaceutical ETF"
  },
  {
    "Symbol": "VWOB",
    "Name": "Vanguard Emerging Markets Government Bond ETF"
  },
  {
    "Symbol": "VNQI",
    "Name": "Vanguard Global ex-U.S. Real Estate ETF"
  },
  {
    "Symbol": "VCIT",
    "Name": "Vanguard Intermediate-Term Corporate Bond ETF"
  },
  {
    "Symbol": "VGIT",
    "Name": "Vanguard Intermediate-Term Treasury ETF"
  },
  {
    "Symbol": "VIGI",
    "Name": "Vanguard International Dividend Appreciation ETF"
  },
  {
    "Symbol": "VYMI",
    "Name": "Vanguard International High Dividend Yield ETF"
  },
  {
    "Symbol": "VCLT",
    "Name": "Vanguard Long-Term Corporate Bond ETF"
  },
  {
    "Symbol": "VGLT",
    "Name": "Vanguard Long-Treasury ETF"
  },
  {
    "Symbol": "VMBS",
    "Name": "Vanguard Mortgage-Backed Securities ETF"
  },
  {
    "Symbol": "VONE",
    "Name": "Vanguard Russell 1000 ETF"
  },
  {
    "Symbol": "VONG",
    "Name": "Vanguard Russell 1000 Growth ETF"
  },
  {
    "Symbol": "VONV",
    "Name": "Vanguard Russell 1000 Value ETF"
  },
  {
    "Symbol": "VTWO",
    "Name": "Vanguard Russell 2000 ETF"
  },
  {
    "Symbol": "VTWG",
    "Name": "Vanguard Russell 2000 Growth ETF"
  },
  {
    "Symbol": "VTWV",
    "Name": "Vanguard Russell 2000 Value ETF"
  },
  {
    "Symbol": "VTHR",
    "Name": "Vanguard Russell 3000 ETF"
  },
  {
    "Symbol": "VCSH",
    "Name": "Vanguard Short-Term Corporate Bond ETF"
  },
  {
    "Symbol": "VTIP",
    "Name": "Vanguard Short-Term Inflation-Protected Securities Index Fund"
  },
  {
    "Symbol": "VGSH",
    "Name": "Vanguard Short-Term Treasury ETF"
  },
  {
    "Symbol": "BND",
    "Name": "Vanguard Total Bond Market ETF"
  },
  {
    "Symbol": "VTC",
    "Name": "Vanguard Total Corporate Bond ETF"
  },
  {
    "Symbol": "BNDX",
    "Name": "Vanguard Total International Bond ETF"
  },
  {
    "Symbol": "VXUS",
    "Name": "Vanguard Total International Stock ETF"
  },
  {
    "Symbol": "VEAC",
    "Name": "Vantage Energy Acquisition Corp."
  },
  {
    "Symbol": "VEACU",
    "Name": "Vantage Energy Acquisition Corp."
  },
  {
    "Symbol": "VEACW",
    "Name": "Vantage Energy Acquisition Corp."
  },
  {
    "Symbol": "VREX",
    "Name": "Varex Imaging Corporation"
  },
  {
    "Symbol": "VRNS",
    "Name": "Varonis Systems, Inc."
  },
  {
    "Symbol": "VBLT",
    "Name": "Vascular Biogenics Ltd."
  },
  {
    "Symbol": "VXRT",
    "Name": "Vaxart, Inc."
  },
  {
    "Symbol": "VBIV",
    "Name": "VBI Vaccines, Inc."
  },
  {
    "Symbol": "VTIQ",
    "Name": "VectoIQ Acquisition Corp."
  },
  {
    "Symbol": "VTIQU",
    "Name": "VectoIQ Acquisition Corp."
  },
  {
    "Symbol": "VTIQW",
    "Name": "VectoIQ Acquisition Corp."
  },
  {
    "Symbol": "VECO",
    "Name": "Veeco Instruments Inc."
  },
  {
    "Symbol": "VEON",
    "Name": "VEON Ltd."
  },
  {
    "Symbol": "VRA",
    "Name": "Vera Bradley, Inc."
  },
  {
    "Symbol": "VCYT",
    "Name": "Veracyte, Inc."
  },
  {
    "Symbol": "VSTM",
    "Name": "Verastem, Inc."
  },
  {
    "Symbol": "VCEL",
    "Name": "Vericel Corporation"
  },
  {
    "Symbol": "VRNT",
    "Name": "Verint Systems Inc."
  },
  {
    "Symbol": "VRSN",
    "Name": "VeriSign, Inc."
  },
  {
    "Symbol": "VRSK",
    "Name": "Verisk Analytics, Inc."
  },
  {
    "Symbol": "VBTX",
    "Name": "Veritex Holdings, Inc."
  },
  {
    "Symbol": "VERI",
    "Name": "Veritone, Inc."
  },
  {
    "Symbol": "VRML",
    "Name": "Vermillion, Inc."
  },
  {
    "Symbol": "VRNA",
    "Name": "Verona Pharma plc"
  },
  {
    "Symbol": "VRCA",
    "Name": "Verrica Pharmaceuticals Inc."
  },
  {
    "Symbol": "VSAR",
    "Name": "Versartis, Inc."
  },
  {
    "Symbol": "VTNR",
    "Name": "Vertex Energy, Inc"
  },
  {
    "Symbol": "VRTX",
    "Name": "Vertex Pharmaceuticals Incorporated"
  },
  {
    "Symbol": "VERU",
    "Name": "Veru Inc."
  },
  {
    "Symbol": "VIA",
    "Name": "Viacom Inc."
  },
  {
    "Symbol": "VIAB",
    "Name": "Viacom Inc."
  },
  {
    "Symbol": "VSAT",
    "Name": "ViaSat, Inc."
  },
  {
    "Symbol": "VIAV",
    "Name": "Viavi Solutions Inc."
  },
  {
    "Symbol": "VICL",
    "Name": "Vical Incorporated"
  },
  {
    "Symbol": "VICR",
    "Name": "Vicor Corporation"
  },
  {
    "Symbol": "VCTR",
    "Name": "Victory Capital Holdings, Inc."
  },
  {
    "Symbol": "CIZ",
    "Name": "VictoryShares Developed Enhanced Volatility Wtd ETF"
  },
  {
    "Symbol": "VSDA",
    "Name": "VictoryShares Dividend Accelerator ETF"
  },
  {
    "Symbol": "CEY",
    "Name": "VictoryShares Emerging Market High Div Volatility Wtd ETF"
  },
  {
    "Symbol": "CEZ",
    "Name": "VictoryShares Emerging Market Volatility Wtd ETF"
  },
  {
    "Symbol": "CID",
    "Name": "VictoryShares International High Div Volatility Wtd ETF"
  },
  {
    "Symbol": "CIL",
    "Name": "VictoryShares International Volatility Wtd ETF"
  },
  {
    "Symbol": "CFO",
    "Name": "VictoryShares US 500 Enhanced Volatility Wtd ETF"
  },
  {
    "Symbol": "CFA",
    "Name": "VictoryShares US 500 Volatility Wtd ETF"
  },
  {
    "Symbol": "CSF",
    "Name": "VictoryShares US Discovery Enhanced Volatility Wtd ETF"
  },
  {
    "Symbol": "CDC",
    "Name": "VictoryShares US EQ Income Enhanced Volatility Wtd ETF"
  },
  {
    "Symbol": "CDL",
    "Name": "VictoryShares US Large Cap High Div Volatility Wtd ETF"
  },
  {
    "Symbol": "VSMV",
    "Name": "VictoryShares US Multi-Factor Minimum Volatility ETF"
  },
  {
    "Symbol": "CSB",
    "Name": "VictoryShares US Small Cap High Div Volatility Wtd ETF"
  },
  {
    "Symbol": "CSA",
    "Name": "VictoryShares US Small Cap Volatility Wtd ETF"
  },
  {
    "Symbol": "VRAY",
    "Name": "ViewRay, Inc."
  },
  {
    "Symbol": "VKTX",
    "Name": "Viking Therapeutics, Inc."
  },
  {
    "Symbol": "VKTXW",
    "Name": "Viking Therapeutics, Inc."
  },
  {
    "Symbol": "VBFC",
    "Name": "Village Bank and Trust Financial Corp."
  },
  {
    "Symbol": "VLGEA",
    "Name": "Village Super Market, Inc."
  },
  {
    "Symbol": "VNOM",
    "Name": "Viper Energy Partners LP"
  },
  {
    "Symbol": "VIRC",
    "Name": "Virco Manufacturing Corporation"
  },
  {
    "Symbol": "VTSI",
    "Name": "VirTra, Inc."
  },
  {
    "Symbol": "VIRT",
    "Name": "Virtu Financial, Inc."
  },
  {
    "Symbol": "VRTS",
    "Name": "Virtus Investment Partners, Inc."
  },
  {
    "Symbol": "VRTSP",
    "Name": "Virtus Investment Partners, Inc."
  },
  {
    "Symbol": "BBC",
    "Name": "Virtus LifeSci Biotech Clinical Trials ETF"
  },
  {
    "Symbol": "BBP",
    "Name": "Virtus LifeSci Biotech Products ETF"
  },
  {
    "Symbol": "VRTU",
    "Name": "Virtusa Corporation"
  },
  {
    "Symbol": "VTGN",
    "Name": "VistaGen Therapeutics, Inc."
  },
  {
    "Symbol": "VC",
    "Name": "Visteon Corporation"
  },
  {
    "Symbol": "VTL",
    "Name": "Vital Therapies, Inc."
  },
  {
    "Symbol": "VIVE",
    "Name": "Viveve Medical, Inc."
  },
  {
    "Symbol": "VVPR",
    "Name": "VivoPower International PLC"
  },
  {
    "Symbol": "VVUS",
    "Name": "VIVUS, Inc."
  },
  {
    "Symbol": "VOD",
    "Name": "Vodafone Group Plc"
  },
  {
    "Symbol": "VOXX",
    "Name": "VOXX International Corporation"
  },
  {
    "Symbol": "VYGR",
    "Name": "Voyager Therapeutics, Inc."
  },
  {
    "Symbol": "VSEC",
    "Name": "VSE Corporation"
  },
  {
    "Symbol": "VTVT",
    "Name": "vTv Therapeutics Inc."
  },
  {
    "Symbol": "VUZI",
    "Name": "Vuzix Corporation"
  },
  {
    "Symbol": "WBA",
    "Name": "Walgreens Boots Alliance, Inc."
  },
  {
    "Symbol": "WAFD",
    "Name": "Washington Federal, Inc."
  },
  {
    "Symbol": "WAFDW",
    "Name": "Washington Federal, Inc."
  },
  {
    "Symbol": "WASH",
    "Name": "Washington Trust Bancorp, Inc."
  },
  {
    "Symbol": "WSBF",
    "Name": "Waterstone Financial, Inc."
  },
  {
    "Symbol": "WVE",
    "Name": "WAVE Life Sciences Ltd."
  },
  {
    "Symbol": "WSTG",
    "Name": "Wayside Technology Group, Inc."
  },
  {
    "Symbol": "WCFB",
    "Name": "WCF Bancorp, Inc."
  },
  {
    "Symbol": "WDFC",
    "Name": "WD-40 Company"
  },
  {
    "Symbol": "WEB",
    "Name": "Web.com Group, Inc."
  },
  {
    "Symbol": "WB",
    "Name": "Weibo Corporation"
  },
  {
    "Symbol": "WEBK",
    "Name": "Wellesley Bancorp, Inc."
  },
  {
    "Symbol": "WEN",
    "Name": "Wendy&#39;s Company (The)"
  },
  {
    "Symbol": "WERN",
    "Name": "Werner Enterprises, Inc."
  },
  {
    "Symbol": "WSBC",
    "Name": "WesBanco, Inc."
  },
  {
    "Symbol": "WTBA",
    "Name": "West Bancorporation"
  },
  {
    "Symbol": "WABC",
    "Name": "Westamerica Bancorporation"
  },
  {
    "Symbol": "WSTL",
    "Name": "Westell Technologies, Inc."
  },
  {
    "Symbol": "WDC",
    "Name": "Western Digital Corporation"
  },
  {
    "Symbol": "WNEB",
    "Name": "Western New England Bancorp, Inc."
  },
  {
    "Symbol": "WPRT",
    "Name": "Westport Fuel Systems Inc"
  },
  {
    "Symbol": "WWR",
    "Name": "Westwater Resources, Inc."
  },
  {
    "Symbol": "WEYS",
    "Name": "Weyco Group, Inc."
  },
  {
    "Symbol": "WHLR",
    "Name": "Wheeler Real Estate Investment Trust, Inc."
  },
  {
    "Symbol": "WHLRD",
    "Name": "Wheeler Real Estate Investment Trust, Inc."
  },
  {
    "Symbol": "WHLRP",
    "Name": "Wheeler Real Estate Investment Trust, Inc."
  },
  {
    "Symbol": "WHLRW",
    "Name": "Wheeler Real Estate Investment Trust, Inc."
  },
  {
    "Symbol": "WHF",
    "Name": "WhiteHorse Finance, Inc."
  },
  {
    "Symbol": "WHLM",
    "Name": "Wilhelmina International, Inc."
  },
  {
    "Symbol": "WVVI",
    "Name": "Willamette Valley Vineyards, Inc."
  },
  {
    "Symbol": "WVVIP",
    "Name": "Willamette Valley Vineyards, Inc."
  },
  {
    "Symbol": "WLDN",
    "Name": "Willdan Group, Inc."
  },
  {
    "Symbol": "WLFC",
    "Name": "Willis Lease Finance Corporation"
  },
  {
    "Symbol": "WLTW",
    "Name": "Willis Towers Watson Public Limited Company"
  },
  {
    "Symbol": "WSC",
    "Name": "WillScot Corporation"
  },
  {
    "Symbol": "WIN",
    "Name": "Windstream Holdings, Inc."
  },
  {
    "Symbol": "WING",
    "Name": "Wingstop Inc."
  },
  {
    "Symbol": "WINA",
    "Name": "Winmark Corporation"
  },
  {
    "Symbol": "WINS",
    "Name": "Wins Finance Holdings Inc."
  },
  {
    "Symbol": "WTFC",
    "Name": "Wintrust Financial Corporation"
  },
  {
    "Symbol": "WTFCM",
    "Name": "Wintrust Financial Corporation"
  },
  {
    "Symbol": "WTFCW",
    "Name": "Wintrust Financial Corporation"
  },
  {
    "Symbol": "AGND",
    "Name": "WisdomTree Barclays Negative Duration U.S. Aggregate Bond Fund"
  },
  {
    "Symbol": "CXSE",
    "Name": "WisdomTree China ex-State-Owned Enterprises Fund"
  },
  {
    "Symbol": "EMCG",
    "Name": "WisdomTree Emerging Markets Consumer Growth Fund"
  },
  {
    "Symbol": "EMCB",
    "Name": "WisdomTree Emerging Markets Corporate Bond Fund"
  },
  {
    "Symbol": "DGRE",
    "Name": "WisdomTree Emerging Markets Quality Dividend Growth Fund"
  },
  {
    "Symbol": "DXGE",
    "Name": "WisdomTree Germany Hedged Equity Fund"
  },
  {
    "Symbol": "HYZD",
    "Name": "WisdomTree Interest Rate Hedged High Yield Bond Fund"
  },
  {
    "Symbol": "AGZD",
    "Name": "WisdomTree Interest Rate Hedged U.S. Aggregate Bond Fund"
  },
  {
    "Symbol": "WETF",
    "Name": "WisdomTree Investments, Inc."
  },
  {
    "Symbol": "DXJS",
    "Name": "WisdomTree Japan Hedged SmallCap Equity Fund"
  },
  {
    "Symbol": "GULF",
    "Name": "WisdomTree Middle East Dividend Fund"
  },
  {
    "Symbol": "HYND",
    "Name": "WisdomTree Negative Duration High Yield Bond Fund"
  },
  {
    "Symbol": "DGRW",
    "Name": "WisdomTree U.S. Quality Dividend Growth Fund"
  },
  {
    "Symbol": "DGRS",
    "Name": "WisdomTree U.S. SmallCap Quality Dividend Growth Fund"
  },
  {
    "Symbol": "WIX",
    "Name": "Wix.com Ltd."
  },
  {
    "Symbol": "WMIH",
    "Name": "WMIH Corp."
  },
  {
    "Symbol": "WWD",
    "Name": "Woodward, Inc."
  },
  {
    "Symbol": "WDAY",
    "Name": "Workday, Inc."
  },
  {
    "Symbol": "WKHS",
    "Name": "Workhorse Group, Inc."
  },
  {
    "Symbol": "WRLD",
    "Name": "World Acceptance Corporation"
  },
  {
    "Symbol": "WMGI",
    "Name": "Wright Medical Group N.V."
  },
  {
    "Symbol": "WMGIZ",
    "Name": "Wright Medical Group N.V."
  },
  {
    "Symbol": "WSFS",
    "Name": "WSFS Financial Corporation"
  },
  {
    "Symbol": "WSCI",
    "Name": "WSI Industries Inc."
  },
  {
    "Symbol": "WVFC",
    "Name": "WVS Financial Corp."
  },
  {
    "Symbol": "WYNN",
    "Name": "Wynn Resorts, Limited"
  },
  {
    "Symbol": "XBIT",
    "Name": "XBiotech Inc."
  },
  {
    "Symbol": "XELB",
    "Name": "Xcel Brands, Inc"
  },
  {
    "Symbol": "XEL",
    "Name": "Xcel Energy Inc."
  },
  {
    "Symbol": "XCRA",
    "Name": "Xcerra Corporation"
  },
  {
    "Symbol": "XNCR",
    "Name": "Xencor, Inc."
  },
  {
    "Symbol": "XBIO",
    "Name": "Xenetic Biosciences, Inc."
  },
  {
    "Symbol": "XENE",
    "Name": "Xenon Pharmaceuticals Inc."
  },
  {
    "Symbol": "XERS",
    "Name": "Xeris Pharmaceuticals, Inc."
  },
  {
    "Symbol": "XGTI",
    "Name": "XG Technology, Inc"
  },
  {
    "Symbol": "XLNX",
    "Name": "Xilinx, Inc."
  },
  {
    "Symbol": "XOMA",
    "Name": "XOMA Corporation"
  },
  {
    "Symbol": "XPER",
    "Name": "Xperi Corporation"
  },
  {
    "Symbol": "XSPA",
    "Name": "XpresSpa Group, Inc."
  },
  {
    "Symbol": "XSPL",
    "Name": "Xspand Products Lab, Inc."
  },
  {
    "Symbol": "XTLB",
    "Name": "XTL Biopharmaceuticals Ltd."
  },
  {
    "Symbol": "XNET",
    "Name": "Xunlei Limited"
  },
  {
    "Symbol": "YNDX",
    "Name": "Yandex N.V."
  },
  {
    "Symbol": "YRIV",
    "Name": "Yangtze River Port and Logistics Limited"
  },
  {
    "Symbol": "YTRA",
    "Name": "Yatra Online, Inc."
  },
  {
    "Symbol": "YTEN",
    "Name": "Yield10 Bioscience, Inc."
  },
  {
    "Symbol": "YIN",
    "Name": "Yintech Investment Holdings Limited"
  },
  {
    "Symbol": "YOGA",
    "Name": "YogaWorks, Inc."
  },
  {
    "Symbol": "YGYI",
    "Name": "Youngevity International, Inc."
  },
  {
    "Symbol": "YRCW",
    "Name": "YRC Worldwide, Inc."
  },
  {
    "Symbol": "YECO",
    "Name": "Yulong Eco-Materials Limited"
  },
  {
    "Symbol": "YY",
    "Name": "YY Inc."
  },
  {
    "Symbol": "ZFGN",
    "Name": "Zafgen, Inc."
  },
  {
    "Symbol": "ZAGG",
    "Name": "ZAGG Inc"
  },
  {
    "Symbol": "ZLAB",
    "Name": "Zai Lab Limited"
  },
  {
    "Symbol": "ZEAL",
    "Name": "Zealand Pharma A/S"
  },
  {
    "Symbol": "ZBRA",
    "Name": "Zebra Technologies Corporation"
  },
  {
    "Symbol": "Z",
    "Name": "Zillow Group, Inc."
  },
  {
    "Symbol": "ZG",
    "Name": "Zillow Group, Inc."
  },
  {
    "Symbol": "ZN",
    "Name": "Zion Oil & Gas Inc"
  },
  {
    "Symbol": "ZNWAA",
    "Name": "Zion Oil & Gas Inc"
  },
  {
    "Symbol": "ZION",
    "Name": "Zions Bancorporation"
  },
  {
    "Symbol": "ZIONW",
    "Name": "Zions Bancorporation"
  },
  {
    "Symbol": "ZIONZ",
    "Name": "Zions Bancorporation"
  },
  {
    "Symbol": "ZIOP",
    "Name": "ZIOPHARM Oncology Inc"
  },
  {
    "Symbol": "ZIXI",
    "Name": "Zix Corporation"
  },
  {
    "Symbol": "ZKIN",
    "Name": "ZK International Group Co., Ltd"
  },
  {
    "Symbol": "ZGNX",
    "Name": "Zogenix, Inc."
  },
  {
    "Symbol": "ZSAN",
    "Name": "Zosano Pharma Corporation"
  },
  {
    "Symbol": "ZS",
    "Name": "Zscaler, Inc."
  },
  {
    "Symbol": "ZUMZ",
    "Name": "Zumiez Inc."
  },
  {
    "Symbol": "ZYNE",
    "Name": "Zynerba Pharmaceuticals, Inc."
  },
  {
    "Symbol": "ZNGA",
    "Name": "Zynga Inc."
  }
    ];

    return {nasdaq, users, watching};
  }
}