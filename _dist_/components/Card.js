
class Card extends HTMLElement {
  constructor(){
    super();

    this.attachShadow({ mode: 'open'});
  }

  static get observedAttributes() {
    return ["subtitle", "time", "description","titleName", "tecnologies", "link", "image"];
  }

  attributeChangedCallback(attr, oldVal, newVal) {

    if (attr === "titleName") {
      this.titleName = newVal;
    }    
    if (attr === "subtitle") {
      this.subtitle = newVal;
    }
    if (attr === "time") {
      this.time = newVal;
    }
    if (attr === "description") {
      this.description = newVal;
    }
    if (attr === "tecnologies") {
      this.tecnologies = newVal;
    }
    if (attr === "link") {
      this.link = newVal;
    }
    if (attr === "image") {
      this.image = newVal;
    }
  }


  getTemplate(){
    const template = document.createElement('template');

    template.innerHTML = `
    <div class="card">
        <div class="card-header">
          <div class="card-header-content">
            <a target="_blank" ${this.link ? `href="${this.link}"` : ''}>${this.titleName}</a>
            <small>${this.subtitle ? this.subtitle : ''} </small> <small> ${this.time ? ' | ' + this.time : ''}</small>
          </div>
          ${this.image ? `<img class="card-header-img" src="${this.image}" alt="Imagen" />` : '' }
        </div>
        <div class="card-body">
            ${this.description}
        </div>
        <div class="card-footer">
          ${  this.tecnologies ? this.tecnologies.map( element => `<p class="card-footer_element">${element.name}</p>`) : ''}
          </div>
    </div>
    ${this.getStyles()}
    `;

    return template;
  }

  getStyles(){
   return `
    <style>
      :host{
        --text-sm:  0.875rem;
        --primary-color: rgba(219, 39, 119, 1);
        --color-span-footer: #FFF;
        --fw-bold: 700;
      }
      .card {
        margin: 10px auto;
        max-width: 42rem;
        border: 2px solid rgba(243, 244, 246, 1);
        padding: 0 2rem;
        box-sizing: border-box;
        box-shadow:  0 5px 15px -3px rgba(0, 0, 0, 0.1);
      }
      .card-header, .card-body {
        padding: 1rem 1.5rem;
        border-bottom: 1px solid rgba(229, 231, 235, 1);
      }

      .card-header-content{
        margin: 10px 0;
      }

      .card-header-content a {
        display:block;
        cursor: pointer;
        text-decoration: none;
        color: black;
        text-transform: uppercase;
        font-weight: var(--fw-bold);
        margin: 0;
      }

      .card-header-content a:hover {
        color: var(--primary-color);
      }

      .card-header-content small {
        font-size: var(--text-sm);
        line-height: 1.25rem;
      }

      .card-header-img {
        max-width: 100%;
      }

      .card-footer {
        display: flex;
        flex-wrap: wrap;
        padding: 1em;
      }

      .card-footer_element{
        border-radius: 9999px;
        color: var(--color-span-footer);
        background-color: var(--primary-color);
        height: 1.5rem;
        padding: 0.2em 1rem;
        margin: 3px 0;

      }
      .card-footer-link{
        margin: 10px 0;
        text-align: right;
      }
      .card-footer-link a{
        text-decoration:none;
        color: gray;
      }

      .card-footer-link a:hover,
      .card-footer-link a:visited{
        color: var(--primary-color);
      }

      @media (min-width: 644px){
        .card{
          width: 42rem;
        }
      }
    </style>
   `; 
  }

  render(){
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true))
  }

  connectedCallback(){
    this.render();
  }
}

customElements.define('card-component', Card);