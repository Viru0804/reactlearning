function customRender(reactElement, container){
    /*
    const domElement = document.createElement(reactElement.type);

    domElement.innerHTML = reactElement.props.children;
    domElement.setAttribute('href', reactElement.props.href);
    domElement.setAttribute('target', reactElement.props.target);
    
    container.appendChild(domElement);
    */
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.props.children;
    for (const prop in reactElement.props) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement);
}

const reactElement = {
    type: "h1",
    props: { 
        href:"http://www.google.com",
        target : "_blank",
        children: "Hello, Click here to visit Google!"
    },
};

const mainContainer = document.getElementById("root");
