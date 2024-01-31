<script>
export default {
  name:'InfoBoolbnb',
}
</script>


<template>
  <div class="bg-img">
    <div class="container py-5">
  
      <!-- section history -->
      <h2 class="text-center text-black">Cosa è boolbnb</h2>
      <section class="d-flex flex-column-reverse flex-md-row section-info justify-content-around  ">
        <div class="img-container d-flex justify-content-start me-3">
          <img src="../img/casa.jpg" alt="casa" class="img-fluid">
        </div>
        <div class="w-50 d-flex">
          <p class="m-0 space">Benvenuto su BoolBnB. BoolBnB è più di una semplice piattaforma di affitto per vacanze; è il luogo dove le tue avventure iniziano e i ricordi indimenticabili prendono vita. Sia che tu stia pianificando una fuga romantica, una vacanza in famiglia o una sosta per esplorare nuove destinazioni, BoolBnB offre un mondo di opportunità di alloggio personalizzato per ogni tipo di viaggiatore. Cosa rende BoolBnB così speciale? <strong>Diversità di Alloggi:</strong> Scegli tra una vasta gamma di opzioni, tra cui appartamenti accoglienti nel cuore della città, ville panoramiche con vista mozzafiato, rifugi tranquilli sulla spiaggia e molto altro ancora. Con BoolBnB, puoi trovare l'alloggio perfetto per soddisfare le tue esigenze e rendere la tua vacanza unica. <strong>Comunità Accogliente:</strong>Unisciti a una comunità di viaggiatori appassionati su BoolBnB. Condividi le tue esperienze, scopri nuovi luoghi e connettiti con host e ospiti da tutto il mondo. <strong>Assistenza 24/7:</strong>La tua tranquillità è la nostra priorità. Il nostro team di assistenza è disponibile 24/7 per rispondere alle tue domande, gestire le tue preoccupazioni e assicurarsi che il tuo soggiorno su BoolBnB sia indimenticabile. Con BoolBnB stai creando esperienze uniche che rimarranno con te per sempre. Il mondo è tuo da esplorare - BoolBnB ti aspetta!</p>
        </div>
      </section>
  
      <!-- section team2 -->
        <h2 class="text-center my-4 text-black" >Da cosa nasce</h2>
      <section class="d-flex section-info flex-column-reverse flex-md-row justify-content-around ">
        <div class="w-50 d-flex align-items-center">
          <p class=" m-0 space">Tutto ebbe inizio con sei brillanti menti: Asia, Argel, Alessandro, Carmelo, Emanuele e Vincenzo. Questo gruppo eterogeneo di programmatori appassionati, uniti dalla comune visione di creare qualcosa di straordinario, si incontrò casualmente durante un hackathon dedicato all'innovazione nel mondo del viaggio. Argel, un programmatore esperto con un occhio per il design intuitivo, Alessandro, un appassionato di esperienze di viaggio uniche, Carmelo, un genio del codice con un amore per la sostenibilità, Emanuele, un programmatore appassionato di connessioni umane, Asia, una mente creativa con una passione per le tecnologie emergenti, e Vincenzo, un esperto di algoritmi con una visione globale, si trovarono condividendo la stessa ambizione: reinventare il modo in cui il mondo vive le sue avventure. Durante una sessione di brainstorming intensiva, emerse un'idea rivoluzionaria: creare una piattaforma che connettesse viaggiatori con host autentici offrendo non solo alloggi, ma un'esperienza unica. Nacque così BoolBnB. Il team di programmatori si immerse nel progetto con zelo, sviluppando la piattaforma passo dopo passo. Ognuno contribuì con la propria esperienza, creando una fusione di competenze che si rifletteva nella diversità di BoolBnB. Attraverso sfide tecnologiche, notti bianche di codifica e momenti di ispirazione collettiva, BoolBnB prese forma. La piattaforma divenne un rifugio digitale dove storie, culture e persone si intrecciavano in un'esperienza di viaggio unica. La storia di BoolBnB era stata scritta.</p>
        </div>
        <div class="img-container d-flex justify-content-start ms-3">
          <img src="../img/viaggi.jpg" alt="viaggi">
        </div>
      </section>
      
      <!-- section team2 -->
        <h2 class="text-center my-4 text-black" >Il team 2</h2>
      <section class="d-flex section-info flex-column-reverse flex-md-row justify-content-around ">
  
        <div class="w-50 d-flex align-items-center">
          <p class="m-0 space lh-5">In una tranquilla giornata estiva, sei appassionati di tecnologia provenienti da diverse parti del mondo si sono ritrovati in una aula illuminata dal caldo bagliore dei computer portatili. Il luogo era il corso "Boolean", un'intensa esperienza di formazione dedicata all'arte dello sviluppo software. Asia, Argel, Alessandro, Carmelo, Emanuele e Vincenzo, ognuno con la propria esperienza e passione per il codice, si trovarono casualmente assegnati al Team 2. Durante le lunghe sessioni di programmazione, il Team 2 non solo imparava gli uni dagli altri ma cresceva anche come amici. Le risate, le sfide risolte insieme e il sostegno reciproco li legarono in modo indissolubile. Mentre lavoravano al progetto assegnato dal corso Boolean, il Team 2 iniziò a fantasticare su idee più ampie, sognando di creare qualcosa di significativo al di là delle aule del corso. Il loro sogno prese forma quando, alla fine del corso Boolean, decisero di mettere insieme le loro abilità e la loro passione per creare BoolBnB, una piattaforma che avrebbe rivoluzionato il modo in cui le persone vivono e condividono le esperienze di viaggio. Da un'aula di corso a una squadra di sviluppatori impegnati in un progetto ambizioso, la storia del Team 2 diventò la storia di BoolBnB.</p>
        </div>
        <div class="img-container d-flex justify-content-start ms-3">
            <img src="../img/team2.png" alt="team2">
          </div>
      </section>
    </div>
  </div>

</template>

<style lang="scss" scoped>
.bg-img{
  .space{
    line-height: 2.0;
    color: rgb(0, 0, 0);
    font-size: large;
  }
  .section-info{
    background-color: #4b82c0b7;
    padding: 10px;
    border-radius: 20px;
  
  
    .img-container{
      width: 40%;
      height: 80%;
      border-radius: 50%;
      background-color: #c8cdffa2;
      img{
        width:100%;
      }
    }
  }
}
</style>