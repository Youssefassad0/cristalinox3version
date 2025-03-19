import React from "react";
import "./Services.css";
function Services() {
  const services = [
    {
      id: 1,
      title: "Conception et conseil personnalisé",
      description:
        " Accompagnement des clients dès la phase de conception pour choisir les meilleures solutions en inox.",
    },
    {
      id: 2,
      title: "Fabrication sur commande et sur mesure",
      description:
        " Production d’éléments inox selon les exigences du client avec un contrôle qualité strict.",
    },
    {
      id: 3,
      title: "Livraison et installation",
      description:
        "Transport sécurisé des produits jusqu’au site du client avec un emballage soigné pour éviter tout dommage.",
    },
  ];
  return (
    <>
      <div className="body_service">
        <div className="container-service">
          {services.map((service, index) => (
            <div className="box-service">
              <div className="icon-service">{service.id}</div>
              <div className="content-service">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href="#">Lire plus</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Services;
