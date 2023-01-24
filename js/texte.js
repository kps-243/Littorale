var i=0,text;
  text = "Le Littoral arrive sur tous les réseaux sociaux"

  function typing() {
    if(i<text.length){
      document.getElementById("text").innerHTML += text.charAt(i);
      i++;
      setTimeout(typing,80);
    }
  }
  typing();