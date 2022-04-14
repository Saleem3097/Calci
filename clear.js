function clear(){
    inputs=document.getElementsByClassName('inputs')
    for(input of inputs){
        input.value = ' ' //this empties rthe input
    }
}