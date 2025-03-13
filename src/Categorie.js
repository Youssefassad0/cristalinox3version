const products = [
  {
    nom: "Mobilier et Décoration intérieure",
    code: "MDI",
    souscategories: [
      {
        nom: "Chaises",
        description: "En inox pour un design moderne et épuré.",
        produits: [
          {
            id: "1",
            titre: "Chaise moderne en inox",
            description:
              "Une chaise élégante en inox avec un design minimaliste.",
            images: "/products/chaises/chaise1.jpeg",
          },
          {
            id: "2",
            titre: "Chaise 2  moderne en inox",
            description:
              "Une chaise élégante en inox avec un design minimaliste.",
            images: ["/products/chaises/chaise2.jpeg"],
          },
          {
            id: "3",
            titre: "Chaise 3 moderne en inox",
            description:
              "Une chaise élégante en inox avec un design minimaliste.",
            images: "/products/chaises/chaise3.jpeg",
          },
          {
            id: "4",
            titre: "Chaise 1 de bar en inox",
            description:
              "Haute et élégante, idéale pour les comptoirs et bars.",
            images: "/products/chaises/chaiseb1.jpg",
          },
          {
            id: "5",
            titre: "Chaise 2 de bar en inox",
            description:
              "Haute et élégante, idéale pour les comptoirs et bars.",
            images: "/products/chaises/chaiseb2.jpg",
          },
          {
            id: "6",
            titre: "Chaise 1 avec accoudoirs en inox ",
            description: "Confortable, avec des accoudoirs intégrés .",
            images: "/products/chaises/chaisea1.jpg",
          },
          {
            id: "7",
            titre: "Chaise 2 avec accoudoirs en inox ",
            description:
              "Confortable, Chaise de chirurgien avec accoudoirs pivotants .",
            images: "/products/chaises/chaisea2.jpg",
          },
          {
            id: "8",
            titre: "Chaise 1 pliante en inox",
            description:
              "Pratique et légère, parfaite pour les espaces réduits.",
            images: "/products/chaises/chaisep1.jpeg",
          },
          {
            id: "9",
            titre: "Chaise 2 pliante en inox",
            description:
              "Pratique et légère, parfaite pour les espaces réduits.",
            images: "/products/chaises/chaisep2.jpeg",
          },
        ],
      },
      {
        nom: "Tables",
        description:
          "Tables à manger, de bureau, ou de café avec des pieds en inox.",
        produits: [
          {
            id:"10",
            titre: "Table 1 en inox avec plateau en verre",
            description:
              "Une table robuste et moderne avec un plateau en verre et des pieds en inox.",
            images: "/products/tables/tablev1.jpeg",
          },
          {
            id:"11",
            titre: "Table 2 en inox avec plateau en verre",
            description:
              "Une table robuste et moderne avec un plateau en verre et des pieds en inox.",
            images: "/products/tables/tablev2.jpeg",
          },
          {
            id:"12",
            titre: "Table 3 en inox avec plateau en verre",
            description:
              "Une table robuste et moderne avec un plateau en verre et des pieds en inox.",
            images: "/products/tables/tablev3.jpeg",
          },
          {
            id:"13",
            titre: "Table 4 en inox avec plateau en verre",
            description:
              "Une table robuste et moderne avec un plateau en verre et des pieds en inox.",
            images: "/products/tables/tablev4.jpeg",
          },
          {
            id:"14",
            titre: "Table 5 en inox avec plateau en verre",
            description:
              "Une table robuste et moderne avec un plateau en verre et des pieds en inox.",
            images: "/products/tables/tablev5.jpeg",
          },
          {
            id:"15",
            titre: "Table 6 en inox avec plateau en verre",
            description:
              "Une table robuste et moderne avec un plateau en verre et des pieds en inox.",
            images: "/products/tables/tablev6.jpeg",
          },
          {
            id:"16",
            titre: "Table 7 en inox avec plateau en verre",
            description:
              "Une table robuste et moderne avec un plateau en verre et des pieds en inox.",
            images: "/products/tables/tablev7.jpeg",
          },
          {
            id:"17",
            titre: "Table 8 en inox avec plateau en verre",
            description:
              "Une table robuste et moderne avec un plateau en verre et des pieds en inox.",
            images: "/products/tables/tablev8.jpeg",
          },
        ],
      },
      //   ],
      // },
      // {
      //   nom: "Menuiserie",
      //   code: "Menuiserie",
      //   "souscategories": [
      //     {
      //       nom: "Portes",
      //       description:
      //         "Portes extérieures ou intérieures en inox, utilisées pour leur robustesse et leur résistance.",
      //       produits: [
      //         {
      //           id:"5",
      //           titre: "Porte moderne en inox",
      //           description:
      //             "Une porte élégante et résistante pour une sécurité accrue.",
      //           images: "image7.jpg",
      //         },
      //       ],
      //     },
      //   ],
      // },
      // {
      //   nom: "Équipements extérieurs et d'aménagement urbain",
      //   code: "EEAU",
      //   "souscategories": [
      //     {
      //       nom: "Portes",
      //       description:
      //         "Portes extérieures ou intérieures en inox, utilisées pour leur robustesse et leur résistance.",
      //       produits: [
      //         {
      //           id:"6",
      //           titre: "Porte moderne en inox",
      //           description:
      //             "Une porte élégante et résistante pour une sécurité accrue.",
      //           images: "image7.jpg",
      //         },
      //       ],
      //     },
      //   ],
      // },
      // {
      //   nom: "Équipements sanitaires et industriels",
      //   code: "ESI",
      //   "souscategories": [
      //     {
      //       nom: "Portes",
      //       description:
      //         "Portes extérieures ou intérieures en inox, utilisées pour leur robustesse et leur résistance.",
      //       produits: [
      //         {
      //           id:"7",
      //           titre: "Porte moderne en inox",
      //           description:
      //             "Une porte élégante et résistante pour une sécurité accrue.",
      //           images: "image7.jpg",
      //         },
      //       ],
      //     },
      //   ],
      // },
      // {
      //   nom: "Composants architecturaux",
      //   code: "CA",
      //   "souscategories": [
      //     {
      //       nom: "Portes",
      //       description:
      //         "Portes extérieures ou intérieures en inox, utilisées pour leur robustesse et leur résistance.",
      //       produits: [
      //         {
      //           id:"8",
      //           titre: "Porte moderne en inox",
      //           description:
      //             "Une porte élégante et résistante pour une sécurité accrue.",
      //           images: "image7.jpg",
      //         },
      //       ],
      //     },
    ],
  },
];

export default products;
