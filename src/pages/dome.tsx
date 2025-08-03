import * as React from "react";
import { Chip, Image } from "@heroui/react";

import DomeAfter from "../images/after-dome.png";
import DomeBefore from "../images/before-dome.png";
import NavigationComponent from "../components/Navigation";
import PerformanceIndicator from "../images/indicateur-de-performance.gif";

export default function Component () {
  return <div className="light mx-2 md:mx-0 relative">
    <NavigationComponent />
    <h1 className="text-center">Dôme</h1>
    <Chip variant="solid" color="warning" className="md:absolute md:right-8">Page en construction</Chip>
    <h2 className="text-center italic">CRM / SaaS immobilier</h2>
    <div className="mx-auto w-4/5 gap-4 py-3">
      <p>Je travaille sur <a href="https://dome.immo/" className="text-blue-600 hover:text-blue-200">Dôme</a> depuis 2022 avec une super équipe en télétravail!</p>
      <p>Notre but est de révolutionner l'immobilier. </p>
      <p>Voici une page sur laquelle j'ai eu le plaisir de travailler. Une page où les agents peuvent voir des indicateurs de leur performance et voir comment leurs objectifs se portent.</p>
    </div>
    <Image src={PerformanceIndicator} className="px-12 my-8" />
    <h2 className="text-center mb-4">Intégration du "bleu"</h2>
    <p className="italic text-center">Redesign global appliqué pour donner de la personnalité à Dôme</p>
    <div className="flex mx-auto w-4/5 gap-4">
      <Image src={DomeBefore} />
      <Image src={DomeAfter} />
    </div>
  </div>
}