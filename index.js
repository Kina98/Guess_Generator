
let quotes = [
    "L'éducation, c'est important. C'est pour ça que j'ai construit une école à côté de mon palais. Si les enfants sont fatigués, ils peuvent rentrer à la maison pour dormir",
    "La corruption, c'est pas grave. C'est juste un petit cadeau que je fais à mes amis.",
    "Le chômage, c'est pas grave. C'est juste que les gens sont trop paresseux pour travailler",
    "La démocratie, c'est pas pour nous. On est trop intelligents pour ça",
    "La paix, c'est important. C'est pour ça que j'ai envoyé mon armée envahir les pays voisins",
    "La femme idéale, c'est celle qui est belle, intelligente et qui sait cuisiner. Mais comme ça n'existe pas, je me contente de celles qui sont belles",
    "J'ai décidé de moderniser mon pays. C'est pour ça que j'ai construit une centrale nucléaire. Mais comme je ne sais pas comment ça marche, j'ai mis un gardien pour surveiller le réacteur",
    "Je suis un grand humaniste. C'est pour ça que j'ai interdit la chasse aux éléphants. Mais comme j'aime la viande d'éléphant, j'ai envoyé mon armée les chasser pour moi",
    "Je suis un homme de paix. C'est pour ça que j'ai signé un accord de paix avec tous les pays voisins. Mais comme je suis un dictateur, ils ne me font pas confiance, alors je suis obligé de les surveiller",

     
  
   ];
  
   let length = quotes.length;
  
   function loopQuotes() {
     let rand = Math.round(Math.random() * (length - 1));
     let newQuote = quotes[rand]
     document.getElementById('demo').innerHTML = newQuote;
     
  }
  
  