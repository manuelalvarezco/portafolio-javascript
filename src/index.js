import '../src/components/Card';
import data from '../src/data.json';


const tabcontent = document.getElementsByClassName("tabcontent");

const getInfo = ()=>{
  for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
}

getInfo();


function openPage(evt, cityName) {
  
  getInfo();


  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

const $btnExperience = document.getElementById('btnExperience');
const $btnpPojects = document.getElementById('btnpPojects');
const $btncontact = document.getElementById('btncontact');

const container = document.getElementById('container');

$btnExperience.addEventListener('click', (event)=>{

  const experiences = data.info.categories.experiences;

  createNode(experiences, 'experiences');

});


$btnpPojects.addEventListener('click', (event)=>{

  
  const projects = data.info.categories.projects;

  createNode(projects, 'projects');
});


$btncontact.addEventListener('click', (event)=>{
  openPage(event, 'contact');
});

//

function createNode(array, id){

  clearNodes();

  const arrayNode = document.createElement('div');
  arrayNode.className = 'tabcontent';
  arrayNode.id = id;

  array.forEach( element => {

    const cardNode     = document.createElement('card-component');
    cardNode.titleName   = element.title;
    cardNode.time   = element.time;
    cardNode.subtitle   = element.subtitle;
    cardNode.description = element.description;
    cardNode.link        = element.link;
    cardNode.tecnologies = element.tecnologies;

    arrayNode.append(cardNode);
  
  })

  container.appendChild(arrayNode);


}

function clearNodes(){
  const expe = document.getElementById('experiences');
  const proj = document.getElementById('projects');

  if(expe){
    expe.remove();
  }

  if(proj){
    proj.remove();
  }
}