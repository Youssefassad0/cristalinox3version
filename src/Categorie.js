const products = [
  {
    nom: "Mobilier et Décoration intérieure",
    code: "MDI",
    "souscategories": [
      {
        nom: "Chaises",
        description: "En inox pour un design moderne et épuré.",
        produits: [
          {
            id:"1",
            titre: "Chaise moderne en inox",
            description:
              "Une chaise élégante en inox avec un design minimaliste.",
            images: "/products/chaises/chaise1.jpeg",
          },
          {
            id:"2",
            titre: "Chaise 2  moderne en inox",
            description:
              "Une chaise élégante en inox avec un design minimaliste.",
            images: ["/products/chaises/chaise2.jpeg"],
          },
          {
            id:"3",
            titre: "Chaise 3 moderne en inox",
            description:
              "Une chaise élégante en inox avec un design minimaliste.",
            images: "/products/chaises/chaise3.jpeg",
          },
        ],
      },
      {
        nom: "Tables",
        description:
          "Tables à manger, de bureau, ou de café avec des pieds en inox.",
        produits: [
          {
            id:"4",
            titre: "Table à manger en inox",
            description:
              "Une table robuste et moderne avec un plateau en verre et des pieds en inox.",
            images: "/products/tables/table1.jpeg",
          },
        ],
      },
    ],
  },
  {
    nom: "Menuiserie",
    code: "Menuiserie",
    "souscategories": [
      {
        nom: "Portes",
        description:
          "Portes extérieures ou intérieures en inox, utilisées pour leur robustesse et leur résistance.",
        produits: [
          {
            id:"5",
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
    nom: "Équipements extérieurs et d'aménagement urbain",
    code: "EEAU",
    "souscategories": [
      {
        nom: "Portes",
        description:
          "Portes extérieures ou intérieures en inox, utilisées pour leur robustesse et leur résistance.",
        produits: [
          {
            id:"6",
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
    "souscategories": [
      {
        nom: "Portes",
        description:
          "Portes extérieures ou intérieures en inox, utilisées pour leur robustesse et leur résistance.",
        produits: [
          {
            id:"7",
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
    nom: "Composants architecturaux",
    code: "CA",
    "souscategories": [
      {
        nom: "Portes",
        description:
          "Portes extérieures ou intérieures en inox, utilisées pour leur robustesse et leur résistance.",
        produits: [
          {
            id:"8",
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
