import * as React from "react"
import { Avatar, Button, Card, CardBody, CardHeader, Chip, Divider } from "@heroui/react"
import { Link, type HeadFC, type PageProps } from "gatsby"

import bev from "../images/beve.jpg"
import FooterComponent from "../components/Footer"
import NavigationComponent from "../components/Navigation"

// const pageStyles = {
//   background: "#1a202c",
//   color: "#232129",
//   fontFamily: "-apple-system, Roboto, sans-serif, serif",
// }
// style={pageStyles} 

const cardStyle = {
  background: "linear-gradient(135deg, #E0F0FF 0%, #E9E9FF 100%)",
}

const skills: string[] = [
  'Vue.js',
  'React.js',
  'Typescript',
  'Tailwind',
  'Javascript',
  'Git'
];

const workExperiences = [
  {
    name: 'Liberkeys',
    description: [
      'Développer de nouvelles features',
      'Traiter la dette technique (retrait de Vuex ORM)',
      'Intégrer le redesign de l\'application',
      'Interroger l’API back selon les DTO établis'
    ],
    field: 'CRM / Saas immobilier',
    period: 'mai 2022 - aujourd\'hui',
    link: '/dome',
    title: 'Développeuse front-end',
    skills: [
      'Vue',
      'Typescript',
      'Tailwind',
      'Cypress',
      'Sentry',
      'Storybook',
      'Git'
    ]
  },
  {
    name: 'Akinox',
    description: [
      'Développer de nouvelles features',
      'Améliorer le UI et l\intégration du design system',
      'Gérer le storybook',
      'Monitorer les changements au design system avec Chromatic',
      'Tester les fonctionnalités avec TestCafé',
      'Conception et intégration de la page Carrières'
    ],
    field: 'Applications et formulaires de télésanté',
    period: 'février 2020 - février 2022',
    title: 'Développeuse front-end',
    skills: [
      'React.js',
      'Typescript',
      'PWA',
      'Redux',
      'TestCafé',
      'Chromatic',
      'Wordpress',
      'SCSS',
      'Storybook',
      'Git'
    ]
  },
  {
    name: 'Cossette',
    description: [
      'Maintenance d’un site en Angular',
      'Développement Drupal de 4 sites web',
      'Mise à niveau en accessibilité et responsive'
    ],
    field: 'Agence marketing',
    period: 'janvier 2021 - avril 2021',
    title: 'Développeuse front-end',
    skills: [
      'Angular',
      'Drupal',
      'SASS',
      'Javascript',
      'Git'
    ]
  },
  {
    name: 'Dreamingetaway x ChaletsConfort',
    description: [
      'Créer des sites transactionnels et des sites vitrines',
      'Développer une API de traduction avec C#'
    ],
    field: 'Location d\'hébergements court-terme',
    period: 'juin 2019 - janvier 2020',
    title: 'Développeuse front-end',
    skills: [
      'Wordpress',
      'PHP',
      'HTML',
      'CSS',
      'Javascript',
      'Vue.js',
      'Adobe XD',
      'C#'
    ]
  },
  {
    name: 'Digikong',
    description: [
      'Développement d’un blog en Wordpress (MyVestiaire)',
      'Mise à jour du site en Hugo'
    ],
    field: 'Stage de fin d\'études',
    period: '2019 (2 mois)',
    title: 'Développeuse front-end',
    skills: ['Wordpress', 'Hugo', 'Conception']
  },
]

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="light mx-4 sm:mx-0">
      <NavigationComponent activeKey="home" />

      <header className="flex flex-col items-center">
        <h1 className="pt-8">Développeuse front-end</h1>
        <p className="hidden pb-4 sm:mb-8 sm:block">aime aussi le design web, le montage vidéo et la photo</p>
        <Card className="max-w-[740px] mt-8 mb-4" isBlurred style={cardStyle}>
          <CardBody className="flex items-center gap-4 py-8 px-4">
            <Avatar
              className="w-40 h-40 text-large"
              src={bev}
              isBordered
            />
            <p className="sm:w-3/5 text-center">Développeuse d'origine québécoise, je suis maintenant installée en France. J'aime le clean code, développer des apps innovantes et refactorer des trucs.</p>
            <div className="flex gap-2 p-2 flex-wrap">
              {skills.map((skill, index) =>
                <Chip key={index} size="lg" variant="shadow" radius="full" color="primary">
                  {skill}
                </Chip>
              )}
            </div>
          </CardBody>
        </Card>
      </header>

      <div className="flex flex-col gap-8 max-w-4xl mx-auto">
        <h2 className="mt-12 pt-8 font-bold">Mes expériences professionnelles</h2>
        {workExperiences.map(experience =>
          <Card style={cardStyle}>
            <CardHeader><h4 className="flex justify-between w-full flex-row">{experience.period} <span className="font-bold">{experience.name}</span> <span>{experience.title}</span></h4></CardHeader>
            <Divider />
            <CardBody>
              <p className="italic">{experience.field}</p>
              <ul className="mt-2 mb-6" style={{ listStyle: 'circle', marginLeft: '2rem' }}>
                {experience.description.map(descriptionElement => <li>{descriptionElement}</li>)}
              </ul>


              <div className="flex gap-2 p-2 flex-wrap">
                {experience.skills && experience.skills.map((skill, index) =>
                  <Chip key={index} variant="shadow" radius="full" color="primary" size="sm">
                    {skill}
                  </Chip>
                )}
              </div>

              {experience.link && (
                <Link to="/dome" className="text-center">
                  <Button variant="solid" color="secondary" radius="full" className="my-4">En savoir plus sur Dôme</Button>
                </Link>
              )}
            </CardBody>
          </Card>)}
      </div>

      <FooterComponent />
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Accueil</title>
