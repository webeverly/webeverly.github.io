import * as React from "react"
import { Button, Card, CardBody, CardHeader, Checkbox, CheckboxGroup, Chip, Image } from "@heroui/react"
import { Link } from "gatsby";

import bev from "../images/beve.jpg";
import NavigationComponent from "../components/Navigation"
import FooterComponent from "../components/Footer"
// import CV from "../images/CV - Beverly.png"

const skills: string[] = [
  'Vue',
  'Typescript',
  'Tailwind',
  'CSS/SASS/SCSS',
  'Git',
  'JSON',
  'HTML',
  'React',
  'Javascript',
  'Wordpress',
  'Storybook',
  'Chromatic',
  'SQL',
  'Base de données',
  'PHP',
  'Angular',
  'Drupal',
  'Documentation',
  'Méthodes agiles (scrum, kanban)',
  'Suite Adobe',
  'jQuery',
];

export default function Component() {
  return <main className="mx-2 sm:mx-0">
    <NavigationComponent activeKey="about" />
    <div className="flex gap-4 flex-col sm:flex-row sm:gap-8 mx-auto my-8 w-4/5 justify-center">
      <Image src={bev} width={300} />
      <div className="flex flex-col gap-1">
        <h1 className="mb-4">Salut 👋 c'est Beverly !</h1>
        <p> 📍 J'habite à <span className="font-bold">Paris</span>.</p>
        <p> 🏰 Je viens de la ville de Québec.</p>
        <p> 🏒 J'adore le <span className="font-bold">hockey</span>, le <span className="font-bold">soccer</span> et le <span className="font-bold">football</span>.</p>
        <p> ⚽️ J'ai d'ailleurs été arbitre au soccer durant 7 ans.</p>
        <p> 🗺️ J'ai voyagé un peu partout en France et dans plusieurs pays d'Europe.</p>
        <p> 💻 Je code professionnellement depuis <b>plus de 5 ans</b>, mais j'ai tenu des blogs dès l'âge de 10 ans.</p>
      </div>
    </div>
    <div className="w-4/5 my-8 sm:my-12 mx-auto sm:w-2/3">
      <h2>Mes compétences 👩‍💻</h2>
      <div className="flex gap-2 flex-wrap pt-2">
      {skills.map(skill => <Chip color="danger">{skill}</Chip>)}
      </div>
    </div>
    <div className="w-4/5 my-8 sm:my-12 mx-auto sm:w-2/3">
      <h2>Mon emploi de rêve 🧪</h2>
      <p>Voici les critères qui me tiennent à coeur.</p>
      <CheckboxGroup color="secondary" defaultValue={["remote", "projects", "positive", "salary", "quebec"]} label="Je considère quand même les offres qui diffèrent de ces critères.">
        <Checkbox value="remote">Remote</Checkbox>
        <Checkbox value="projects">Projets intéressants</Checkbox>
        <Checkbox value="positive">Projet à impact (positif)</Checkbox>
        <Checkbox value="salary">Salaire qui respecte la carte Talent</Checkbox>
        <Checkbox value="quebec">Travailler 1 fois par année du Québec</Checkbox>
      </CheckboxGroup>
    </div>
    <div className="my-12 mx-auto w-full sm:w-2/3">
      {/* TODO: CV */}
      {/* <h2>Obtenir mon CV</h2> */}
      {/* <p>Pour en savoir plus et obtenir mon CV c'est ici!</p> */}
      <div className="flex gap-4">
        {/* <Button className="my-2 block"><Link to={CV}>Obtenir mon CV</Link></Button> */}
        <Button className="my-2 block" color="primary" radius="full"><Link to="https://www.linkedin.com/in/beverly-cagelet/">Contacter sur Linkedin</Link></Button>
    {/* <section id="one" className="wrapper style1 special">
        <a href="images/CV - Beverly.png" className="button fit" >Voir le CV</a>
        </section> */}
    {/* <iframe style={{ border: "none", margin: 0, padding: 0, display: "inline-block", width: "300px", height: "250px", overflow: "hidden" }} src="/api/snippet/26199/s"></iframe> */}
    {/* <!-- TODO CTA contact --> bg-[#FFE3CE] text-black */}
      </div>
    </div>
    <Card id="cta" className="max-w-[700px] sm:mx-auto mt-8 mx-8 p-4 ">
      <CardHeader className="w-full">
        <h2 className="font-bold text-center py-2 border-b w-full">Contactez-moi</h2>
      </CardHeader>
      <CardBody>
        <p className="my-2">
          Que ce soit pour une demande d'informations, un contrat ou une collaboration.
        </p>
        <div className="flex gap-2 justify-center">
          <Button className="my-2 block" variant="light" color="primary" radius="full">
            <Link to="https://calendar.app.google/xeLir2EqXixX134d6">Prendre RDV (Google)</Link>
          </Button>
          <Button className="my-2 block" color="primary" radius="full"><Link to='mailto:beverly.cagelet.protic@gmail.com'>Envoyer un email</Link></Button>
        </div>
      </CardBody>
    </Card>
    <FooterComponent />
  </main>
}
