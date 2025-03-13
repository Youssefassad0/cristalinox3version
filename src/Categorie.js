const products = [
  {
    nom: "Mobilier et Décoration intérieure",
    code: "MDI",
    souscategories: [
      {
        nom: "Chaises",
        description: "En inox pour un design moderne et épuré.",
        image: "/products/chaises/chaise1.jpeg",
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
        image: "/products/tables/tablev6.jpeg",

        produits: [
          {
            id: "10",
            titre: "Table 1 en inox avec plateau en verre",
            description:
              "Une table robuste et moderne avec un plateau en verre et des pieds en inox.",
            images: "/products/tables/tablev1.jpeg",
          },
          {
            id: "11",
            titre: "Table 2 en inox avec plateau en verre",
            description:
              "Une table robuste et moderne avec un plateau en verre et des pieds en inox.",
            images: "/products/tables/tablev2.jpeg",
          },
          {
            id: "12",
            titre: "Table 3 en inox avec plateau en verre",
            description:
              "Une table robuste et moderne avec un plateau en verre et des pieds en inox.",
            images: "/products/tables/tablev3.jpeg",
          },
          {
            id: "13",
            titre: "Table 4 en inox avec plateau en verre",
            description:
              "Une table robuste et moderne avec un plateau en verre et des pieds en inox.",
            images: "/products/tables/tablev4.jpeg",
          },
          {
            id: "14",
            titre: "Table 5 en inox avec plateau en verre",
            description:
              "Une table robuste et moderne avec un plateau en verre et des pieds en inox.",
            images: "/products/tables/tablev5.jpeg",
          },
          {
            id: "15",
            titre: "Table 6 en inox avec plateau en verre",
            description:
              "Une table robuste et moderne avec un plateau en verre et des pieds en inox.",
            images: "/products/tables/tablev6.jpeg",
          },
          {
            id: "16",
            titre: "Table 7 en inox avec plateau en verre",
            description:
              "Une table robuste et moderne avec un plateau en verre et des pieds en inox.",
            images: "/products/tables/tablev7.jpeg",
          },
          {
            id: "17",
            titre: "Table à manger ",
            description:
              "Une table robuste et moderne avec un plateau en verre et des pieds en inox.",
            images: "/products/tables/tablev8.jpeg",
          },
        ],
      },

      {
        nom: "Bureaux ",
        description:
          "Sur mesure, avec des structures en inox pour une allure contemporaine.",
        image: "/products/bureaux/bureaux.jpg",
        produits: [
          {
            id: "5",
            titre: "Porte moderne en inox",
            description:
              "Une porte élégante et résistante pour une sécurité accrue.",
            images: "image7.jpg",
          },
        ],
      },
      {
        nom: "Bibliothèques et étagères",
        description: "Avec des étagères en inox pour un aspect industriel.",
        image: "/products/biblio/bibliotheque.jpg",
        produits: [
          {
            id: "5",
            titre: "Porte moderne en inox",
            description:
              "Une porte élégante et résistante pour une sécurité accrue.",
            images: "image7.jpg",
          },
        ],
      },
      {
        nom: "Éléments de décoration ",
        description: "Sculptures, miroirs avec cadres en inox, lampes, etc.",
        image: "/products/decoration/decoration.jpeg",
        produits: [
          {
            id: "5",
            titre: "Porte moderne en inox",
            description:
              "Une porte élégante et résistante pour une sécurité accrue.",
            images: "image7.jpg",
          },
        ],
      },
    ],
  },
  {
    nom: "Menuiserie",
    code: "Menuiserie",
    souscategories: [
      {
        nom: "Portes",
        description:
          "Portes extérieures ou intérieures en inox, utilisées pour leur robustesse et leur résistance.",
        image: "/products/portes/porte.jpeg",
        produits: [
          {
            id: "5",
            titre: "Porte moderne en inox",
            description:
              "Une porte élégante et résistante pour une sécurité accrue.",
            images: "image7.jpg",
          },
        ],
      },
      {
        nom: "Fenêtres",
        description:
          "Cadres de fenêtres, offrant un look moderne et une haute résistance aux intempéries.",
        image: "/products/fenetres/fenetre.jpeg",
        produits: [
          {
            id: "5",
            titre: "Porte moderne en inox",
            description:
              "Une porte élégante et résistante pour une sécurité accrue.",
            images: "image7.jpg",
          },
        ],
      },
      {
        nom: "Volets roulants",
        description: "Avec des matériaux inox pour une meilleure durée de vie.",
        image: "/products/volets/volet.jpeg",
        produits: [
          {
            id: "5",
            titre: "Porte moderne en inox",
            description:
              "Une porte élégante et résistante pour une sécurité accrue.",
            images: "image7.jpg",
          },
        ],
      },
      {
        nom: "Portails et grilles",
        description:
          "Portails extérieurs et grilles de sécurité fabriqués en inox.",
        image: "/products/portails/portail.jpeg",
        produits: [
          {
            id: "5",
            titre: "Porte moderne en inox",
            description:
              "Une porte élégante et résistante pour une sécurité accrue.",
            images: "image7.jpg",
          },
        ],
      },
    ],
  },
  {
    nom: "Équipements sanitaires et industriels",
    code: "ESI",
    souscategories: [
      {
        nom: "Sanitaires ",
        image: "/products/industrie/sanitaire.jpeg",
        description:
          "Lavabos, douches, et autres équipements sanitaires en inox pour leur résistance et leur facilité d’entretien.",
        produits: [
          {
            id: "7",
            titre: "Porte moderne en inox",
            description:
              "Une porte élégante et résistante pour une sécurité accrue.",
            images: "image7.jpg",
          },
        ],
      },
      {
        nom: "Tuyauteries ",
        image: "/products/industrie/tuyautrie.jpeg",
        description:
          "Conduites, tuyaux et raccords en inox pour le transport de fluides dans les systèmes industriels.",
        produits: [
          {
            id: "7",
            titre: "Porte moderne en inox",
            description:
              "Une porte élégante et résistante pour une sécurité accrue.",
            images: "image7.jpg",
          },
        ],
      },
      {
        nom: "Réservoirs",
        image: "/products/industrie/reservoir.jpeg",
        description:
          "Réservoirs de stockage ou cuves en inox utilisés dans l'industrie alimentaire, chimique, ou pharmaceutique",
        produits: [
          {
            id: "7",
            titre: "Porte moderne en inox",
            description:
              "Une porte élégante et résistante pour une sécurité accrue.",
            images: "image7.jpg",
          },
        ],
      },
      {
        nom: "Machines industrielles ",
        image: "/products/industrie/machine.jpg",
        description:
          "Composants de machines, comme des supports ou des éléments en inox pour leur robustesse et leur résistance à la chaleur",
        produits: [
          {
            id: "7",
            titre: "Porte moderne en inox",
            description:
              "Une porte élégante et résistante pour une sécurité accrue.",
            images: "image7.jpg",
          },
        ],
      },
    ],
  },
];

export default products;
