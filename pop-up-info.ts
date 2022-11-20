class PopUpInfo extends HTMLElement {
        constructor() {
            super();
            const shadow = this.attachShadow({ mode: 'open' });

            const info = document.createElement('span');
            info.setAttribute('class', 'info');
            const text = this.getAttribute('message');
            info.textContent = text;

            const style = document.createElement('style');
            style.textContent = `
                .info {
                    border: 1px solid green;
                    padding: 10px;
                    background-color: #ffd9d9;
                }
            `;

            shadow.appendChild(style);
            shadow.appendChild(info);
        }
    }