import React from "react";
import "./App.css";
import Select from "react-dropdown-select";
import ExternalClear from "./ExternalClear";

const data = [
  {
    id: "e424db3b-db45-462e-b002-068bc54c2ee0",
    name: "Yadira Mraz",
    username: "Victoria_Koepp",
    email: "Nikko14@gmail.com",
    address: {
      street: "Adam Courts",
      suite: 83051,
      city: "Elizaville",
      zipcode: "79763",
      geo: {
        lat: "-73.6025",
        lng: "41.6100"
      }
    },
    phone: "1-669-651-2506 x48065",
    website: "remington.com",
    company: {
      name: "Hagenes and Sons",
      catchPhrase: "Pre-emptive context-sensitive toolset",
      bs: "global leverage e-services"
    }
  },
  {
    id: "1975067a-81c4-4516-9cd5-5fb16fdf4516",
    name: "Murl Marvin",
    username: "Lizzie_Schaden",
    email: "Alejandrin.Brakus@hotmail.com",
    address: {
      street: "Fay Trail",
      suite: 47933,
      city: "North Dustyberg",
      zipcode: "98469-9495",
      geo: {
        lat: "54.3177",
        lng: "117.9980"
      }
    },
    phone: "532.286.7943",
    website: "penelope.info",
    company: {
      name: "Roberts - Kunze",
      catchPhrase: "Customizable bottom-line array",
      bs: "viral embrace schemas"
    }
  },
  {
    id: "355c0ba7-c617-4b41-9ad9-1eff393e101c",
    name: "Keven Wiza",
    username: "Berta_Rempel",
    email: "Emil_Labadie@yahoo.com",
    address: {
      street: "Favian Highway",
      suite: 29592,
      city: "Hintzborough",
      zipcode: "23881",
      geo: {
        lat: "54.5881",
        lng: "178.4820"
      }
    },
    phone: "571.208.5063",
    website: "darrin.info",
    company: {
      name: "Wilkinson - Boyle",
      catchPhrase: "Enhanced web-enabled service-desk",
      bs: "strategic implement metrics"
    }
  },
  {
    id: "b86b0260-faa1-4589-9883-94b95a0aeb2d",
    name: "Alyson Cormier",
    username: "Sid_Huels11",
    email: "Savannah39@hotmail.com",
    address: {
      street: "Marina Locks",
      suite: 87093,
      city: "East Guidohaven",
      zipcode: "99039-7708",
      geo: {
        lat: "-32.8236",
        lng: "133.5736"
      }
    },
    phone: "(545) 338-6247",
    website: "macie.name",
    company: {
      name: "O'Reilly - Cronin",
      catchPhrase: "Streamlined motivating collaboration",
      bs: "turn-key orchestrate supply-chains"
    }
  },
  {
    id: "fa20bcbc-6a40-4900-b9b4-99ec3f749bd4",
    name: "Sunny Stark",
    username: "Martina.Murphy",
    email: "Vilma.Schamberger@gmail.com",
    address: {
      street: "Price Dam",
      suite: 36953,
      city: "North Ruben",
      zipcode: "99893",
      geo: {
        lat: "16.5091",
        lng: "-42.2953"
      }
    },
    phone: "1-376-981-6126",
    website: "gertrude.biz",
    company: {
      name: "Gusikowski, Jacobson and Lynch",
      catchPhrase: "Intuitive full-range benchmark",
      bs: "leading-edge syndicate functionalities"
    }
  },
  {
    id: "04c24279-d84d-4d95-9121-5274758ba689",
    name: "Ena Gorczany",
    username: "Troy.Bednar82",
    email: "Mathias25@hotmail.com",
    address: {
      street: "Goodwin Mount",
      suite: 31065,
      city: "South Samara",
      zipcode: "62251-2864",
      geo: {
        lat: "-57.4593",
        lng: "-111.1936"
      }
    },
    phone: "(270) 119-4748 x166",
    website: "darian.info",
    company: {
      name: "Leuschke - Morar",
      catchPhrase: "Quality-focused logistical database",
      bs: "back-end leverage technologies"
    }
  },
  {
    id: "42daacd7-1c80-47bc-8d90-e09bad8aa5cf",
    name: "Pasquale Langosh",
    username: "Leo_Goldner56",
    email: "Kian81@yahoo.com",
    address: {
      street: "Dickinson Cape",
      suite: 27798,
      city: "Fannyton",
      zipcode: "04391",
      geo: {
        lat: "-41.9731",
        lng: "-92.1878"
      }
    },
    phone: "355-829-6822",
    website: "ellsworth.com",
    company: {
      name: "Koepp - Champlin",
      catchPhrase: "Intuitive solution-oriented software",
      bs: "e-business syndicate relationships"
    }
  },
  {
    id: "8c6ebe94-ae4d-40f4-958b-9e1a7cf8b014",
    name: "Jarod Jast",
    username: "Webster_Runte",
    email: "Rick_Goldner77@hotmail.com",
    address: {
      street: "Tremblay Mews",
      suite: 47850,
      city: "Hegmannborough",
      zipcode: "84416-6032",
      geo: {
        lat: "-86.0098",
        lng: "-30.1425"
      }
    },
    phone: "1-610-543-2307",
    website: "jessyca.biz",
    company: {
      name: "Skiles, Zieme and Luettgen",
      catchPhrase: "Stand-alone composite leverage",
      bs: "synergistic matrix mindshare"
    }
  },
  {
    id: "35f59b75-bc23-4998-8e44-48d75afa78a2",
    name: "Dustin Murphy",
    username: "Ryann_Sporer98",
    email: "Freida32@yahoo.com",
    address: {
      street: "Edmond Estates",
      suite: 53595,
      city: "Rennerborough",
      zipcode: "12447",
      geo: {
        lat: "88.0136",
        lng: "-7.9140"
      }
    },
    phone: "1-445-519-1016 x76162",
    website: "guy.org",
    company: {
      name: "Bernier, Runte and Boyer",
      catchPhrase: "Centralized non-volatile extranet",
      bs: "vertical brand interfaces"
    }
  },
  {
    id: "5750607c-9fc7-40ff-8cf1-96915f909bf0",
    name: "Mandy Kilback",
    username: "Zoila.Erdman",
    email: "Lee.Bergnaum66@hotmail.com",
    address: {
      street: "Kenya Route",
      suite: 7122,
      city: "Nyashire",
      zipcode: "01357-6677",
      geo: {
        lat: "-86.5144",
        lng: "-140.5022"
      }
    },
    phone: "1-860-304-6575",
    website: "bonnie.info",
    company: {
      name: "Hickle - Bergnaum",
      catchPhrase: "Networked uniform groupware",
      bs: "bricks-and-clicks exploit communities"
    }
  },
  {
    id: "f0289cd1-495c-4d64-989d-55ba1a97274b",
    name: "Donato Reinger",
    username: "Jamel.Muller69",
    email: "Reba16@hotmail.com",
    address: {
      street: "West Avenue",
      suite: 57039,
      city: "Wittingside",
      zipcode: "44799",
      geo: {
        lat: "-25.0144",
        lng: "-127.4481"
      }
    },
    phone: "925.234.7626 x68586",
    website: "jammie.biz",
    company: {
      name: "Murray, Powlowski and Schmitt",
      catchPhrase: "Digitized client-server knowledge user",
      bs: "world-class incubate models"
    }
  },
  {
    id: "bbc3ca67-b22a-4bce-846a-80ba38f1b512",
    name: "Bernadine White",
    username: "Miller28",
    email: "Boyd.Jacobs@hotmail.com",
    address: {
      street: "Spencer Port",
      suite: 89032,
      city: "South Gust",
      zipcode: "79961",
      geo: {
        lat: "-30.2837",
        lng: "143.0219"
      }
    },
    phone: "674-285-4313 x368",
    website: "jade.org",
    company: {
      name: "Lindgren, Robel and Wolff",
      catchPhrase: "Ergonomic motivating approach",
      bs: "intuitive iterate platforms"
    }
  },
  {
    id: "6d4fcab6-9082-4cb7-97d4-3543cfe1a257",
    name: "Stanford Kirlin",
    username: "Wilfrid.Pagac",
    email: "Bobby22@hotmail.com",
    address: {
      street: "Juwan Shoal",
      suite: 94631,
      city: "Lake Judahshire",
      zipcode: "30949",
      geo: {
        lat: "80.9823",
        lng: "-171.4387"
      }
    },
    phone: "(185) 425-8435 x08163",
    website: "jaydon.biz",
    company: {
      name: "Corkery Inc",
      catchPhrase: "Digitized optimal implementation",
      bs: "B2C maximize systems"
    }
  },
  {
    id: "d3825ae8-e6ae-4861-ba2f-956b7760ad2d",
    name: "Aron Marks",
    username: "Raoul_Nitzsche",
    email: "Jayden_Schoen98@yahoo.com",
    address: {
      street: "Malvina Dam",
      suite: 64325,
      city: "Port Carol",
      zipcode: "03525-8893",
      geo: {
        lat: "-45.7225",
        lng: "-109.0231"
      }
    },
    phone: "1-403-220-0011 x2105",
    website: "rex.biz",
    company: {
      name: "Witting, Leffler and Bruen",
      catchPhrase: "Open-architected intangible Graphic Interface",
      bs: "plug-and-play unleash networks"
    }
  },
  {
    id: "b44c123c-1028-49f3-9046-780c9e5b20a3",
    name: "Phyllis Anderson",
    username: "Ocie_Oberbrunner79",
    email: "Euna_Daniel@hotmail.com",
    address: {
      street: "Funk Mountains",
      suite: 50110,
      city: "New Leopold",
      zipcode: "84327",
      geo: {
        lat: "-41.1018",
        lng: "-29.2246"
      }
    },
    phone: "1-183-381-6643 x06550",
    website: "elliott.com",
    company: {
      name: "Ondricka, Kub and Beier",
      catchPhrase: "Multi-layered value-added internet solution",
      bs: "open-source matrix ROI"
    }
  },
  {
    id: "c4f08ab0-e8a9-4a5c-bbbe-04b3d1eac2df",
    name: "June Veum",
    username: "Delbert8",
    email: "Braeden_Feeney56@gmail.com",
    address: {
      street: "Ruthe Rapid",
      suite: 45891,
      city: "Jerryfurt",
      zipcode: "55263",
      geo: {
        lat: "15.1773",
        lng: "-20.7243"
      }
    },
    phone: "799.071.0757 x1504",
    website: "eldora.info",
    company: {
      name: "Wunsch - Stoltenberg",
      catchPhrase: "Customizable cohesive intranet",
      bs: "proactive strategize platforms"
    }
  },
  {
    id: "05ababd3-2d60-4c16-a33a-b6417b884ac8",
    name: "Antonio Stracke",
    username: "Anne75",
    email: "Branson5@yahoo.com",
    address: {
      street: "Urban Hollow",
      suite: 33821,
      city: "Jasperberg",
      zipcode: "26355",
      geo: {
        lat: "-1.2368",
        lng: "-44.5950"
      }
    },
    phone: "822-092-8872 x992",
    website: "missouri.info",
    company: {
      name: "Bogan - Ziemann",
      catchPhrase: "Right-sized asymmetric strategy",
      bs: "seamless integrate web-readiness"
    }
  },
  {
    id: "53b73120-2434-4a3d-b053-beb0c14b6a93",
    name: "Kathryne O'Kon",
    username: "Ivah.Sanford",
    email: "Sydnee96@yahoo.com",
    address: {
      street: "Pinkie Oval",
      suite: 21274,
      city: "South Sunnyshire",
      zipcode: "11462-9732",
      geo: {
        lat: "-9.8722",
        lng: "-133.3488"
      }
    },
    phone: "615.207.4234 x883",
    website: "wilhelmine.com",
    company: {
      name: "Hyatt - Hayes",
      catchPhrase: "Balanced uniform service-desk",
      bs: "strategic strategize eyeballs"
    }
  },
  {
    id: "822ed3e7-9395-41a5-b130-c0571b3346f9",
    name: "Demetrius Prosacco",
    username: "Jabari_Hackett",
    email: "Rachelle.McDermott@yahoo.com",
    address: {
      street: "Rosalee Track",
      suite: 72479,
      city: "Konopelskiton",
      zipcode: "52384-0055",
      geo: {
        lat: "24.5212",
        lng: "55.4750"
      }
    },
    phone: "(690) 088-6167",
    website: "athena.biz",
    company: {
      name: "Hansen and Sons",
      catchPhrase: "Cross-group local Graphical User Interface",
      bs: "seamless reintermediate web-readiness"
    }
  },
  {
    id: "ce2ef7dc-bdc4-43a8-b3cd-bcf223389176",
    name: "Nadia Purdy",
    username: "Zelma_Schmidt",
    email: "Cassie26@yahoo.com",
    address: {
      street: "Dickinson Coves",
      suite: 52808,
      city: "West Emerymouth",
      zipcode: "59906",
      geo: {
        lat: "85.3836",
        lng: "-33.1614"
      }
    },
    phone: "941.073.8487 x40348",
    website: "willy.net",
    company: {
      name: "Nader Group",
      catchPhrase: "Triple-buffered high-level algorithm",
      bs: "customized cultivate niches"
    }
  },
  {
    id: "5d8a7eb7-82ce-4302-8071-412a5e9310e3",
    name: "Merlin Paucek",
    username: "Ivory_Altenwerth54",
    email: "Laurie63@hotmail.com",
    address: {
      street: "Neal Forest",
      suite: 19949,
      city: "Nolanfurt",
      zipcode: "95124",
      geo: {
        lat: "80.4924",
        lng: "48.4101"
      }
    },
    phone: "560.123.9455 x579",
    website: "philip.com",
    company: {
      name: "Stark - Hintz",
      catchPhrase: "Diverse tangible circuit",
      bs: "out-of-the-box grow web services"
    }
  },
  {
    id: "faad3ec6-b522-4eed-a26c-d69fabbc0ef4",
    name: "Charlie Kub",
    username: "Earlene.Ankunding",
    email: "Reed_Wisozk14@yahoo.com",
    address: {
      street: "Trenton Parks",
      suite: 70117,
      city: "Tyreechester",
      zipcode: "92482",
      geo: {
        lat: "-27.5023",
        lng: "-9.9219"
      }
    },
    phone: "(021) 557-1145 x1695",
    website: "brisa.info",
    company: {
      name: "Heller - Schulist",
      catchPhrase: "Up-sized contextually-based challenge",
      bs: "e-business productize architectures"
    }
  },
  {
    id: "d4917414-05d0-4e42-a81f-389d6c0fc6cb",
    name: "Talon Prosacco",
    username: "Helga71",
    email: "Lincoln.Kertzmann@hotmail.com",
    address: {
      street: "Casper Shoal",
      suite: 71360,
      city: "East Jay",
      zipcode: "97390-5280",
      geo: {
        lat: "-78.8007",
        lng: "4.7921"
      }
    },
    phone: "(051) 260-8138",
    website: "elenora.name",
    company: {
      name: "Kuhic LLC",
      catchPhrase: "Multi-layered logistical success",
      bs: "world-class revolutionize action-items"
    }
  },
  {
    id: "f9642096-da28-4035-acaa-f97e2f1c147d",
    name: "Landen Armstrong",
    username: "Kenyatta17",
    email: "Lucie58@yahoo.com",
    address: {
      street: "Evans Plain",
      suite: 64115,
      city: "South Lorenza",
      zipcode: "65700-5242",
      geo: {
        lat: "-31.5580",
        lng: "-110.0629"
      }
    },
    phone: "706-888-0482 x34454",
    website: "milan.net",
    company: {
      name: "D'Amore - Baumbach",
      catchPhrase: "Inverse 24/7 array",
      bs: "e-business whiteboard metrics"
    }
  },
  {
    id: "397daf48-44d3-412d-96fd-714d7ff018ae",
    name: "Ima McLaughlin",
    username: "Mallory1",
    email: "Merritt72@gmail.com",
    address: {
      street: "Bailey Village",
      suite: 1300,
      city: "Ashlyfurt",
      zipcode: "05681-9645",
      geo: {
        lat: "-23.6055",
        lng: "64.4609"
      }
    },
    phone: "428-153-7360",
    website: "brandyn.name",
    company: {
      name: "Will LLC",
      catchPhrase: "Optional context-sensitive adapter",
      bs: "robust harness e-markets"
    }
  },
  {
    id: "5a9294e0-9253-4e61-b852-11a50bf44b59",
    name: "Olin Koepp",
    username: "Aileen21",
    email: "Kiel.Little@gmail.com",
    address: {
      street: "Batz Manor",
      suite: 2509,
      city: "South Otiston",
      zipcode: "98142-1015",
      geo: {
        lat: "60.5867",
        lng: "47.0417"
      }
    },
    phone: "1-117-495-3325",
    website: "cleve.name",
    company: {
      name: "Waelchi Group",
      catchPhrase: "Sharable tangible budgetary management",
      bs: "clicks-and-mortar e-enable initiatives"
    }
  },
  {
    id: "ffc0f9e7-350e-47a7-8d38-75c611d5fbf6",
    name: "Kailee Zulauf",
    username: "Brielle9",
    email: "Orie_Schowalter@yahoo.com",
    address: {
      street: "Littel Unions",
      suite: 16367,
      city: "Stehrshire",
      zipcode: "06780",
      geo: {
        lat: "29.1635",
        lng: "16.9073"
      }
    },
    phone: "(287) 392-7456 x310",
    website: "melody.org",
    company: {
      name: "Doyle Group",
      catchPhrase: "Inverse regional conglomeration",
      bs: "dot-com streamline vortals"
    }
  },
  {
    id: "b9c74f87-f76c-4b3d-9d3d-03403de74226",
    name: "Deonte Hahn",
    username: "Odie46",
    email: "Julian_Wolff75@hotmail.com",
    address: {
      street: "Morar Roads",
      suite: 90503,
      city: "East Gerardofort",
      zipcode: "59128",
      geo: {
        lat: "6.6674",
        lng: "-24.8005"
      }
    },
    phone: "(365) 939-5937",
    website: "emmie.name",
    company: {
      name: "Mueller, Gleichner and Hintz",
      catchPhrase: "Future-proofed cohesive model",
      bs: "scalable evolve niches"
    }
  },
  {
    id: "b4d1ca4f-624f-4949-b73d-938c2b94a1f9",
    name: "Olen Runolfsson",
    username: "Arianna52",
    email: "Zelda_Sawayn@hotmail.com",
    address: {
      street: "Krista Branch",
      suite: 48285,
      city: "Bennettberg",
      zipcode: "00460",
      geo: {
        lat: "-54.2204",
        lng: "-89.0134"
      }
    },
    phone: "1-684-992-1258",
    website: "alvera.net",
    company: {
      name: "Murphy - Rosenbaum",
      catchPhrase: "Adaptive grid-enabled framework",
      bs: "one-to-one innovate metrics"
    }
  },
  {
    id: "83c76a98-20f4-430e-b56f-d5750994a8c4",
    name: "Dasia Bins",
    username: "Manuel_Leannon",
    email: "Nelle.Braun94@gmail.com",
    address: {
      street: "Rau Locks",
      suite: 18693,
      city: "Yasminetown",
      zipcode: "89598",
      geo: {
        lat: "63.9481",
        lng: "-77.5067"
      }
    },
    phone: "664-630-4076 x735",
    website: "meda.com",
    company: {
      name: "Bednar, Senger and Prohaska",
      catchPhrase: "De-engineered impactful system engine",
      bs: "end-to-end productize web-readiness"
    }
  }
];

const App: React.FC = () => {
  const [values, setValues] = React.useState([
    {
      value: "",
      label: ""
    }
  ]);

  const onChange = (values: any) => {
    console.log(values);
  };

  const getOptions = () => {
    return data.map(function(entity) {
      return {
        value: entity.id,
        label: entity.name
      };
    });
  };

  const test = () => {
    const opt = getOptions()[6];
    setValues([opt]);
  };

  console.log(getOptions());

  return (
    <div className="App">
      <Select
        multi={false}
        values={values}
        options={getOptions()}
        onChange={(values: any) => onChange(values)}
      />
      <button
        onClick={() => {
          test();
        }}
      >
        Test
      </button>
      <ExternalClear options={getOptions()} />
    </div>
  );
};

export default App;
