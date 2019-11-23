import React from "react"

import banner from "../assets/img/banner.jpg"

export const Banner = () => (
  <div
    style={{
      width: "100%",
      height: "auto",
      textAlign: "right",
      backgroundColor: "#78715F",
      padding: 0,
    }}
  >
    <img
      style={{
        marginBottom: 0,
      }}
      src={banner}
      alt="Lire au Nicaragua. Pour que les enfants aient accès à la lecture. Pour que tous puissent s'instruire et se former. L'association Nicarali soutient le développement d'un réseau de bibliothèques publiques au Nicaragua."
    />
  </div>
)

export default Banner
