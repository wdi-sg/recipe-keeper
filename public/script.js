window.onload = () => {   
    let firstIngredient = document.body.querySelectorAll('.ingredients-wrapper')[0]
    let firstInstruction = document.body.querySelectorAll('.instructions-wrapper')[0];
    addButtonListeners(firstIngredient);
    addButtonListeners(firstInstruction);
}

function duplicateThis(){
    let parentNode = this.parentNode;
    let clonedNode = clone(parentNode);
    let clonedNodeType = clonedNode.childNodes[0].name;

    addButtonListeners(clonedNode);

    if (clonedNodeType === 'instructions'){
        document.body.querySelector('form').insertBefore(clonedNode, document.body.querySelector('#submit-button'));
    } else {
        document.body.querySelector('form').insertBefore(clonedNode, document.body.querySelector('#cooking-instructions-label'));
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
    node.childNodes[1].addEventListener('click', duplicateThis);
    node.childNodes[1].addEventListener('keypress', e => {
        var key = e.which || e.keyCode;
        if (key === 13) {
            e.preventDefault();
            duplicateThis();
        }
    });
    node.childNodes[2].addEventListener('click', removeThis);
}

function removeThis(){
    let parentNode = this.parentNode;
    let nodeType = parentNode.childNodes[0].name;
    parentNode.remove();
    let otherSimilarNodes = document.body.querySelectorAll('.' + nodeType + '-wrapper');
    otherSimilarNodes[otherSimilarNodes.length - 1].childNodes[1].style.display = "flex";
}