const fs = require('node:fs'); // Or 'fs' for older Node.js versions
const genPost  = (missionary) => (
	`---
pageTitle: Conheça os Missionários • ${missionary}
title: ${missionary}
date: 2025-08-30
draft: false
---
Estamos atualizando as informações 😊🙏🏽.
`
)

const fileList = [
  {name: "isis-e-tiago.md", content: genPost(`Tiago e Isis`)},
  // {name: "nill.md", content: genPostHeader(`Lydia`)},
  {name: "james-e-silvia.md", content: genPost(`James e Silvia`)},
  {name: "selma.md", content: genPost(`Selma`)},
  {name: "pra-dalvanis-rosa.md", content: genPost(`Pastora Dalvanis Rosa`)},
  {name: "missao-vida.md", content: genPost(`Missão Vida`)},
  {name: "daa.md", content: genPost(`DAA`)},
  {name: "pr-vinute-e-adnancy.md", content: genPost(`Pr. Vinute e Adnancy`)},
  {name: "mpc.md", content: genPost(`MPC`)},
  {name: "pr-hilario-e-sandra.md", content: genPost(`Pr. Hilário e Sandra`)},
  {name: "marcia-e-pr-ildemar.md", content: genPost(`Marcia e Pr.Ildemar`)},
  {name: "roberta.md", content: genPost(`Roberta`)},
  {name: "sebastian-e-alejandrina.md", content: genPost(`Sebastian e Alejandrina`)},
  {name: "jaciara-e-francisco-irismar.md", content: genPost(`Jaciara e Francisco Irismar`)},
  {name: "mario-tito-e-midian.md", content: genPost(`Mario Tito e Midian`)},
  {name: "aldacyr-e-monick.md", content: genPost(`Aldacyr e Monick`)},
  {name: "carlos-antonio-e-lindavania.md", content: genPost(`Carlos Antônio e Lidanvânia`)},
  {name: "robert-e-adriana.md", content: genPost(`Robert e Adriana`)},
  {name: "daniela-e-saulo.md", content: genPost(`Daniela e Saulo`)}
];

fileList.forEach(item => {
	const filename = typeof item === 'string' ? item : item.name;
	const content = typeof item === 'string' ? '' : item.content; // Empty for string items

	try {
		fs.writeFileSync(filename, content);
		console.log(`Generated file: ${filename}`);
	} catch (err) {
		console.error(`Error generating ${filename}:`, err);
	}
});

