const root = document.getElementById('root');

function render(elements,rootContainer){
    const domElement = document.createElement(elements.type);
    domElement.innerHTML = elements.children;

    for(prop in elements.props){
        domElement.setAttribute(prop,elements.props[prop]);
    }

    rootContainer.appendChild(domElement);
}

const elements = {
    type : 'a',
    props : {
        href : 'https://google.com',
        target : '_blank'
    },
    children : 'go to google'
};

render(elements,root);


