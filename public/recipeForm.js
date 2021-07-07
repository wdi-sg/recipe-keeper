window.onload = () => {   
    checkButtonListeners(document.body.querySelectorAll('.ingredients-wrapper'));
    checkButtonListeners(document.body.querySelectorAll('.instructions-wrapper'));
}

function checkButtonListeners(nodeList){
    nodeList.forEach((node, index) => {
        addButtonListeners(node);
        index === 0 ? node.childNodes[2].style.display = "none" : node.childNodes[2].style.display = "flex";
        index === nodeList.length - 1 ? node.childNodes[1].style.display = "flex" : node.childNodes[1].style.display = "none" ;
    });
}

function duplicateThis(){
    let parentNode = this.parentNode;
    let clonedNode = clone(parentNode);
    let clonedNodeType = clonedNode.childNodes[0].name;

    addButtonListeners(clonedNode);

    if (clonedNodeType === 'instructions'){
        document.body.querySelector('form').insertBefore(clonedNode, document.body.querySelector('#submit-button'));
    } else {
        document.body.querySelector('form').insertBefore(clonedNode, document.body.querySelector('#instructions-label'));
    }

    this.style.display = "none";
}

function clone(node){
    let clonedNode = node.cloneNode(true);
    clonedNode.childNodes[0].value = "";
    clonedNode.childNodes[2].style.display = "flex";
    return clonedNode;
}

function addButtonListeners(node){
    node.childNodes[0].addEventListener('keypress', e => {
        let key = e.which || e.keyCode;
        key === 13 ? e.preventDefault() : 0;
    });
    node.childNodes[1].addEventListener('click', duplicateThis);
    node.childNodes[2].addEventListener('click', removeThis);
}

function removeThis(){
    let parentNode = this.parentNode;
    let nodeType = parentNode.childNodes[0].name;
    parentNode.remove();
    let otherSimilarNodes = document.body.querySelectorAll('.' + nodeType + '-wrapper');
    otherSimilarNodes[otherSimilarNodes.length - 1].childNodes[1].style.display = "flex";
}