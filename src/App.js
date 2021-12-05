import React from "react";
import "./App.css";
import { Card } from "./Card";
import daniel from "./assets/image-daniel.jpg";
import jeanette from "./assets/image-jeanette.jpg";
import jonathan from "./assets/image-jonathan.jpg";
import kira from "./assets/image-kira.jpg";
import patrick from "./assets/image-patrick.jpg";

const texto = [
  {
    indice: 1,
    imagen: daniel,
    autor: "Daniel Clifford",
    oficio: "Verified Graduate",
    titulo:
      "I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.",
    contenido:
      "“ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a   transition and have heard some people who had an amazing experience here. I signed up   for the free intro course and found it incredibly fun! I enrolled shortly thereafter.   The next 12 weeks was the best - and most grueling - time of my life. Since completing   the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup. ”",
    style: {
      backgroundColor: "hsl(263,55%,52%)",
    },
    colorFuente: {
      color: "hsl(210, 46%, 95%)",
    },
  },
  {
    indice: 2,
    imagen: jonathan,
    autor: "Jonathan Walters",
    oficio: "Verified Graduate",
    titulo: "The team was very supportive and kept me motivated",
    contenido:
      "“ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I’ve made in myself. ”",
    style: {
      backgroundColor: "hsl(217,19%,35%)",
    },
    colorFuente: {
      color: "hsl(210, 46%, 95%)",
    },
  },
  {
    indice: 3,
    imagen: kira,
    autor: "Kira Whittle",
    oficio: "Verified Graduate",
    titulo: "Such a life-changing experience. Highly recommended!",
    contenido:
      "“ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I’ve often referred to it during interviews as an example of my developent experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend! ”",
    style: {
      backgroundColor: "hsl(0,0%,100%)",
    },
    colorFuente: {
      color: "hsl(217, 19%, 35%)",
    },
  },
  {
    indice: 4,
    imagen: jeanette,
    autor: "Jeanette Harmon",
    oficio: "Verified Graduate",
    titulo: "An overall wonderful and rewarding experience",
    contenido:
      "“ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love. ”",
    style: {
      backgroundColor: "hsl(0,0%,100%)",
    },
    colorFuente: {
      color: "hsl(217, 19%, 35%)",
    },
  },
  {
    indice: 5,
    imagen: patrick,
    autor: "Patrick Abrams",
    oficio: "Verified Graduate",
    titulo:
      "Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.",
    contenido:
      "“ The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people. ”",
    style: {
      backgroundColor: "hsl(219,29%,14%)",
    },
    colorFuente: {
      color: "hsl(210, 46%, 95%)",
    },
  },
];

function App() {
  return (
    <React.Fragment>
      <div className="contenedor-general">
        <div className="contenedor-card">
          {texto.map((texto) => (
            <div
              key={texto.indice}
              className={`card${texto.indice}`}
              style={texto.style}
            >
              <Card
                imagen={texto.imagen}
                autor={texto.autor}
                oficio={texto.oficio}
                titulo={texto.titulo}
                contenido={texto.contenido}
                colorFuente={texto.colorFuente}
              />
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
