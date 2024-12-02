function coustomRender(reactelement,container){
   /* const domelement = document.createElement(reactelement.type)
    domelement.innerHTML = reactelement.children;
    domelement.setAttribute('href',reactelement.props.href)
    domelement.setAttribute('target',reactelement.props.target)
    
    container.appendChild(domelement);
*/
const domelement = document.createElement(reactelement.type)
    domelement.innerHTML = reactelement.children;
    for (const prop in reactelement.props) {
        if (prop === 'children') continue
        domelement.setAttribute(prop, reactelement.props[prop])
       }
       container.appendChild(domelement)


}
const reactelement = {
    type: "a",
    props : {
        href : "https://google.com" ,
        target : " _blank",
    },
    children : "click me to vist there !"
}


const maincontinaner = document.getElementById("root")

coustomRender(reactelement,maincontinaner)