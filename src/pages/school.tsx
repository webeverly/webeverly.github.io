import * as React from "react"
import { Card, CardBody, CardHeader, Chip, CircularProgress, Divider, Image } from "@heroui/react"
import { HeadFC, PageProps } from "gatsby"

import AgencyPhoto from "../images/eliqo-small.png";
import QuizPhoto from "../images/quiz.png";
import TracesPhoto from "../images/traces.png";
import VideoGamePhoto from "../images/video-game.png";

import FooterComponent from "../components/Footer";
import NavigationComponent from "../components/Navigation";

const webProjects = [
  {
    img: AgencyPhoto,
    value: 'agence web',
    title: 'Site d\'agence Wordpress',
    description: 'Création d\'une agence web fictive impliquant un site web dynamique (Wordpress) en collaboration avec 3 autres étudiants',
    tags: ['wordpress', 'design', 'intégration', 'programmation']
  },
  {
    img: VideoGamePhoto,
    value: 'Jeu vidéo: le farfadet, aperçu du jeu',
    title: 'Jeu vidéo : Le Farfadet',
    description: 'Jeu vidéo créé avec Adobe Animate, TypeScript (en programmation orientée objet)',
    tags: ['design', 'programmation']
  },
  {
    img: TracesPhoto,
    value: 'Site de librairie en ligne',
    title: 'Projet de librairie en ligne',
    description: 'Site transactionnel élaboré en équipe de 3 (scrum, méthodes agiles): ajout au panier, connexion, facturation, fil d\'Ariane, traduction d\'un site, sécurité web à l\'aide d\'HTML, CSS, JavaScript et PHP',
    tags: ['design', 'intégration', 'programmation']
  },
  {
    img: QuizPhoto,
    value: 'Quiz aperçu dans une tablette',
    title: 'Quiz',
    description: 'Progressive web app (PWA) axée sur l\'accessibilité et la performance. Réalisé seul en 3 semaines',
    tags: ['design', 'intégration']
  },
];

const videoProjects = [
  {
    src: 'https://player.vimeo.com/video/232884981',
    title: 'Vidéo : Le Clo(w)ne (2018)',
    description: 'Vidéo créée avec Adobe Premiere Pro pour pratiquer les techniques de clonage',
  },
  {
    src: 'https://player.vimeo.com/video/259510379',
    title: 'Vidéo : Ducks d\'Anaheim (2018)',
    description: 'Vidéo créée avec Adobe Animate pour pratiquer l\'animation'
  },
  // {
  //   src: 'https://www.youtube.com/embed/6JeAha-ahCc',
  //   title: 'Bande annonce du court-métrage Percuté (2014)',
  //   description: 'Vidéo montée avec iMovie',
  //   width: 355,
  //   height: 200
  // },
]

const TIMSkills: {
  key: string;
  color: "success" | "default" | "primary" | "secondary" | "warning" | "danger" | undefined;
  value: number;
}[] = [
    { key: 'Programmation', color: "success", value: 25 },
    { key: 'Intégration', color: 'secondary', value: 25 },
    { key: 'Conception', color: 'warning', value: 25 },
    { key: 'Médias', color: 'danger', value: 15 },
    { key: 'Autres', color: 'default', value: 10 },
  ];

const SchoolPage: React.FC<PageProps> = () => {
  return (
    <div className="light mx-4 sm:mx-0">
      <NavigationComponent activeKey="school" />

      <header>
        <h1 className="font-bold text-center pt-8">Projets scolaires</h1>
        <p className="text-center max-w-[500px] mx-auto my-4">Durant mes études collégiales en <b className="text-blue-800">Techniques d'intégration multimédia</b> au <b>Cégep de Sainte-Foy</b>, j'ai appris divers aspects du développement d'un site web.</p>
        <div className="flex flex-wrap sm:flex-nowrap gap-4 max-w-[400px] mx-auto justify-center pb-4">
          {TIMSkills.map(skill => <CircularProgress className="w-1/3 sm:w-full" color={skill.color} showValueLabel={true} label={skill.key} size="lg" value={skill.value} />)}
        </div>
      </header>

      <p className="text-center max-w-[500px] mx-auto mt-8 mb-4">Voici les projets que j'ai conçu et développé.</p>
      <div className="flex flex-col md:flex-row flex-wrap justify-center mx-auto md:max-w-[900px] gap-4 mt-4 px-2">
        {webProjects.map(project =>
          <Card key={project.value} className="w-full md:w-1/3 md:grow px-2 sm:px-0">
            <CardBody className="flex items-center">
              <Image
                alt={project.value}
                className="object-cover rounded-xl"
                src={project.img}
                height={270}
              />
              <h2 className="font-bold py-4">
                {project.title}
              </h2>
              <p>{project.description}</p>
              <div className="flex gap-1 flex-wrap mt-3">
                {project.tags?.map(tag => <Chip variant="solid">{tag}</Chip>)}
              </div>
            </CardBody>
          </Card>
        )}

        {videoProjects.map(project =>
          <Card key={project.title} className="md:w-1/3 grow">
            <CardBody>
              <iframe width={400} height={225} src={project.src} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              <div className="content">
                <h2 className="font-bold">
                  {project.title}
                </h2>
                <p>
                  {project.description}
                </p>
              </div>
            </CardBody>
          </Card>
        )}
      </div>
      <FooterComponent />
    </div>
  )
}

export default SchoolPage

export const Head: HeadFC = () => <title>Projets scolaires</title>
