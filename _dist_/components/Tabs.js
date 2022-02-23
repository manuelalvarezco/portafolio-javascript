class Tabs extends HTMLElement {
  constructor(){
    super();

    this.attachShadow({ mode: 'open'});
  }

  static get observedAttributes() {
    return ["id", "name"];
  }

  attributeChangedCallback(attr, oldVal, newVal) {

    if (attr === "id") {
      this.id = newVal;
    }    
    if (attr === "name") {
      this.name = newVal;
    }
  }

  getTemplate(){
    const template = document.createElement('template');

    template.innerHTML = `
    <div class="main">
          <div class="tab-container">
            <button id="${this.id}" class="tablinks">
              <span class="mx-1 text-sm sm:text-base"> ${this.name} </span>
            </button>
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

     .main {
       display:flex;
       justify-content: center;
       align-items: center;
       margin: 2rem 0;
     }
     
     .tab-container {
      display:flex;
      border-bottom: 1px solid #ccc;
      letter-spacing: 0.025em;
     }

     .tab-container button {
      color: rgba(55, 65, 81, 1);
      text-align: center;
      padding: 0.5rem;
      background-color: transparent;
      border-color: transparent;
      align-items: center;
      height: 2.5rem;
      display: flex;
      margin-bottom: -1px;
      cursor: pointer
     }

     .tab-container button:focus,
     .tab-container button:hover {
        border-bottom: 2px solid var(--primary-color);
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



customElements.define('tabs-component', Tabs);