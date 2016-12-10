"use strict";

class App{
  constructor(){
    this.dota = [
    
    {
      "id": 1,
      "dotapic": "img/dazzle.jpg",
      "heroname": "Dazzle",
      "description":`Dazzle the Shadow Priest is a ranged intelligence Hero known for his ability to heal and protect his teammates while preventing their deaths.

      Unlike most other supports, his spells revolve around dealing physical damage, allowing his abilities to scale into the late game. His first ability, Poison Touch, is a spammable spell that greatly slows its target and then deals damage over time; out of all his abilities`,
    },
    {
      "id": 2,
      "dotapic": "img/sf.jpg",
      "heroname": "Shadow Fiend",
      "description":`Nevermore the Shadow Fiend is a ranged agility hero possessing abilities that inflict superb burst damage from varying distances. Whether near or far, Shadow Fiend is able to release incredible offensive power, both physical and magical. Shadow Fiend's true power comes from the souls he takes, thus, he can release all of the captured souls in a devastating burst, dealing more damage to enemies that are closer to him`,  
    },

    {
      "id": 3,
      "dotapic": "img/storm.jpg",
      "heroname": "Storm Spirit", 
      "description":`Raijin Thunderkeg, the Storm Spirit, is a ranged intelligence hero who wields the elemental power of lightning. He has high mobility, strong ganking and carrying potential, and very good synergy between his hero abilities.`,
    },

    {
      "id": 4,
      "dotapic": "img/od.jpg",
      "heroname": "Outworld Devourer",
      "description":`Harbinger the Outworld Devourer is a ranged intelligence hero who qualifies as a carry, though unlike traditional carries, he excels against high-armor targets whilst being crippled by spell immunity. With Arcane Orb, his damage output is reliant on his intelligence attribute and the size of his mana pool.`,  
    },
    {
      "id": 5,
      "dotapic": "img/invoker.jpg",
      "heroname": "Invoker", 
      "description":`Invoker is a ranged intelligence hero who is very difficult to master. He is unique in that he possesses a total of 14 abilities in his arsenal; three of them - Quas, Wex, and Exort - are reagents and one is his special ultimate Invoke. The three abilities he learns throughout leveling up can have three instances,`,
    },
    {
      "id": 6,
      "dotapic": "img/svenn.jpg",   
      "heroname": "Sven",
      "description": `Sven, the Rogue Knight, is a versatile melee strength hero with superior physical power coupled with powerful utility abilities. He can fulfill various roles, but is often played as a semi-carry due to his high utility even without items. He possesses a versatile arsenal, from Warcry, which grants armor that can be used for escaping as well as pushing, to the throwable Storm Hammer that stuns enemies around the targeted unit.`,
    },
    {
      "id": 7,
      "dotapic": "img/encantress.jpg",   
      "heroname": "Enchantress",
      "description":`Aiushtha the Enchantress is a ranged intelligence hero who uses her abilities to push through lanes and gank with relative ease. Enchantress works well as a jungler in the early game, as it maximizes the effectiveness of her Enchant and Untouchable abilities. On first glance, she may be just a support, serving her allies with powerful heals, creep abilities and slows`,
    },
    ];

    this.dotapics = [
    {
      "color1":"red accent-4",
      "pic1":"https://i.ytimg.com/vi/Bnj9mvu9itw/maxresdefault.jpg",
      "button1":"Visit Dota Heroes",
      "click1":"component.dotalist()",
      "info1":"",
    },
    {

      "color1":"blue",
      "pic1":"img/sven.jpg",
      "button1":"Go to Hero Creation",
      "click1":"component.Chooseyourhero()",
      "info1":"",
    },

    ]


  }

  render(html, component){

    component.innerHTML += html;
  }

  reRender(html, component){

    component.innerHTML = html;
  }

  heroDesign(){
    let id = document.getElementById('id1');
    let dotapic = document.getElementById('dotapic_1');
    let heroname = document.getElementById('heroname_1');
    let description = document.getElementById('description_1');
    
    let home = { 
     "id": id.value,     
     "heroname": heroname.value,
     "dotapic": dotapic.value,
     "description": description.value,

     
   };


   this.dota.push(home);
   
   
   id.value = heroname.value = dotapic.value =  description.value =  ''; 
 } 

 deletehero(key){
  let r = this.dota;
  for(let i=0;i<r.length;i++){
    if(r[i].id == key){
      this.dota.splice(i,1);
      break;
    }
  }   
  this.dotaList();
}

updateDota(id){

  id = id+1;
  let heroDummy = {
    "id" :  id,
    "dotapic" : $('#dotapictures').val(),
    "heroname" : $('#heronames').val(),
    "description" : $('#descriptionheroes').val()
  }

  let r = this.dota;
  for(let i=0;i<r.length;i++){
    if(r[i].id == id){
      r[i] = heroDummy;
      break;
    }
  }

  this.dotaList();
}



Dotasearchid(id){

 let r = this.dota;
 for(let i=0;i<r.length;i++){
  if(id==r[i].id){
    return r[i];
  }
}
}
dotasearch(RealName){
  let objects = [];
  let r = this.dota;
  for(let i=0;i<r.length;i++){
    let expr = (r[i].RealName.toUpperCase().indexOf(RealName.toUpperCase()) > -1);
    if(expr){
      objects.push(r[i]);
    }
  }
  return objects;
}
}

class Component extends App{
  constructor(){
    
    super();
  }

  dotaLayout(){
    let html = `


    
    <nav>
    <div class="nav-wrapper black">
    <img src="img/img1.png" height="60px">
    <a href="#" onclick="component.home()" class="brand-logo "><b>&nbspDefense of the Ancients</b></a>
    <ul id="nav-mobile" class="right hide-on-med-and-down">
    <li>
    <a href="#"onclick="component.home()"><i class="material-icons left">store</i>Tavern</a>
    </li>
    <li>   
    <a href="#"onclick="component.dotaList()"><i class="material-icons left">person_pin</i>Choose Heroes</a>  
    </li>
    <li>   
    <a href="#"onclick="component.Chooseyourhero()"><i class="material-icons left">assignment_ind</i>Hero Creation</a>  
    </li>
    </div>
    </nav>

    <div id="dotapage"></div>
    <div id="dotarecent"></div>
    <div id="home"></div>
    <div id="dotaView"></div>
    <div id="dotaList"></div>
    <div id="Chooseyourhero"></div>
    <div id="updateHeroes"></div>
    


    </main>   

    <footer class="page-footer  black">
    <div class="container">
    <div class="row">
    <div class="col s6">
    <h5 class="white-text">Horace Europa</h5>
    <p><a class="grey-text text-lighten-3" href="#">
    <img class="left" src="img/horace.jpg"/>
    </div>
    <div class="col l4 offset-l2 s6 ">
    <h5 class="white-text ">Defense of the Ancients 2</h5>
    <img class="left" src="img/logo.jpg"/>
    
    </div>
    <p><a class="grey-text text-lighten-3" href="https://www.facebook.com/horace.europa">
    </div>
    </div>         
    </div>
    </div>
    <div class="footer-copyright">
    <div class="container">
    @Horace.Europa   
    </div>
    </div>      
    </footer>
    </div> 
    


    `;

    this.reRender(`
      
      ${html}
      
      `,document.getElementById("app"));
    this.dotarecent();    
  }

  dotarecent(){
    
    let html = `




    <div class="carousel carousel-slider">

    <a class="carousel-item" href="#one!"><img src="https://worldpartyword.files.wordpress.com/2011/08/defense_of_the_ancients__6_63__by_kunkka.jpg"></a>
    <a class="carousel-item" href="#two!"><img src="https://portforward.com/games/walkthroughs/DotA/DotA-small-2.jpg"></a>
    <a class="carousel-item" href="#three!"><img src="img/aa.jpg"></a>
    <a class="carousel-item" href="#four!"><img src="img/aaa.jpg"></a>
    </div>

    `;
    for(let index=0;index<this.dotapics.length;index++){

      html+=`

      <div class="row">

      <div class="col s6 m6">
      <div class="card ${this.dotapics[index].color1}">
      <div class="card-image">
      <img src="${this.dotapics[index].pic1}">
      </div>
      <div class="card-content">
      <p>${this.dotapics[index].info1}</p>
      </div>
      <div class="card-action">
      <a href="#"onclick="${this.dotapics[index].click1}"><i class="material-icons center">recent_actors</i>${this.dotapics[index].button1}</a>
      </div>
      </div>
      </div>




      `; 
    }



    html+=`





    <div class="carousel carousel-slider">

    <a class="carousel-item" href="#one!"><img src="img/abbb.jpg"></a>
    <a class="carousel-item" href="#two!"><img src="img/abb.jpg"></a>
    <a class="carousel-item" href="#three!"><img src="img/ab.jpg"></a>
    <a class="carousel-item" href="#four!"><img src="img/a.jpg"></a>
    </div>


    `;

    let r = this.dota;
    let count = 0;
    for(let i=(r.length-1);i>=0;i--){
      if(count++ === 4)break;
      html+= `
      
      <div class="column">
      <div class="col s6 m6">
      <div class="card">
      <div class="card-image">
      <img src="${r[i].dotapic}">
      <span class="card-title"><span class="red accent-4"><b>${r[i].heroname}</b></span>
      </div>
      <div class="card-content">
      ${r[i].description}
      </div>
      <div class="card-action">
      <a href="#" onclick="component.dotaView(${r[i].id})"><i class="material-icons center">perm_identity</i> Details</a>
      </div>
      </div>
      </div>
      

      `;
    }

    html += `</div>`;

    this.render(`   
      
      ${html}
      
      `,document.getElementById("dotarecent"));
    
  }

  dotaView(id){
    
    let r = this.Dotasearchid(id);
    let html = `
    <div class="col s12 m7">
    <h2 class="header"></h2>
    <div class="card horizontal">
    <div class="card-image">
    <img src="${r.dotapic}">
    </div>
    <div class="card-stacked">
    <div class="card-content">
    <p>Hero  ${r.heroname}</p>
    <p>Description: ${r.description}</p>
    </div>
    <div class="card-action" Medium>

    <button onclick="component.deletehero(${r.id})" class="btn waves-effect waves-light">Delete</button>
    <button onclick="component.dotaList()" class="btn waves-effect waves-light">Back</button>
    <button onclick="component.updateHeroes(${r.id})" class="btn waves-effect waves-light">Update</button>


    
    </div>
    </div>
    </div>
    </div>


    
    
    `;

    this.reRender(`   
      
      ${html}     

      `,document.getElementById("dotaView"));
    
    $('#dotaView').show();
    $('#dotarecent').hide();
    $('#updateHeroes').hide();
    $('#dotaList').hide();
    $('#Chooseyourhero').hide();
    $('#dotapage').hide();
    $('#home').hide();      
  }

  dotaList(){
    
    let html = `
    
    </br>
    <nav>
    <div class="nav-wrapper white">
    
    <div class="input-field">       
    <input onkeyup="component.dotastorage(this.value)" id="search" type="search" placeholder="Search" required>
    <label for="search"><i class="material-icons">search</i></label>
    <i class="material-icons">close</i>
    </div>
    </div>
    </nav>
    </br>



    `;

    html += `
    
    <div class="row" id="dotastorage">
    
    `;
    
    let r = this.dota;
    for(let i=0;i<r.length;i++){
      html+= `
      
      <div class="row">
      <div class="col s6 m6 ">
      
      <div class="card ">
      <div class="card-image">
      <img src="${r[i].dotapic}">
      <span class="card-title">${r[i].heroname}</b></span>
      </div>
      <div class="card-stacked">
      <div class="card-content">
      ${r[i].description}</p>
      </div>
      <div class="card-action">
      <a href="#" onclick="component.dotaView(${r[i].id})"><i class="material-icons center">assignment</i> Details</a>
      </div>
      </div>
      </div>
      </div>





      
      `;
    }

    html += `</div>  <div class="row">`;


    this.reRender(`
      
      ${html}
      
      `,document.getElementById("dotaList"));
    
    $('#dotaList').show();
    $('#dotaView').hide();
    $('#updateHeroes').hide();
    $('#dotarecent').hide();
    $('#Chooseyourhero').hide();       
    $('#dotapage').hide();
    $('#home').hide();    
    $('#dotaLayout').hide();        
    
  }

  dotastorage(RealName){
    
    let html = ``;
    let r = this.dotasearch(RealName);
    for(let i=0;i<r.length;i++){
      html+= `
      <div class="col s12 m4">
      <div class="card large hoverable">
      <div class="card-image">
      <img src="${r[i].dotapic}">
      <span class="card-title">Real Name: ${r[i].heroname}</span>
      </div>
      <div class="card-content">
      <p>Description: ${r[i].description}</p>

      </div>
      <div class="card-action">
      <a href="#" onclick="component.dotaView(${r[i].id})">More</a>
      </div>
      </div>
      </div>
      
      `;
      
    }   
    
    this.reRender(`
      
      ${html}
      
      `,document.getElementById("dotastorage"));
    
    $('#dotaList').show();
    $('#dotaView').hide();
    $('#updateHeroes').hide();
    $('#dotarecent').hide();  
    $('#Chooseyourhero').hide();
    $('#dotapage').hide();   
    $('#home').hide();       
    
  }

  Chooseyourhero(){
    let html = `

    <center>
    <div class="form-style-3">
    <div class="row">
    
    <center><h1>Spawn Dota Heroes</h1></center>
    <center><label for="id1"><span>Number of Heroes Spawned <span class="required">*</span></span><input disabled value="${this.dota.length+1}" id="id1" type="text" ></label></center>
    <center><label for="dotapic_1">  <span>Hero Picture</span><input type="email" id="dotapic_1"/> </label></center>
    <center><label for="heroname_1">  <span>Dota Hero</span><input type="email" id="heroname_1"/> </label></center>
    <center><label for="description_1"><span>Hero Description:</span><textarea id="description_1" class="textarea-field"></textarea> </label></center>

    <div class="center-align">
    <button onclick="component.dotaList()" class="btn waves-effect waves-light">Back to Tavern</button>
    <button onclick="component.heroDesign()" class="btn waves-effect waves-light">Spawn Hero</button>

    </div>
    </div>


    </div>
    </center>



    `;

    this.reRender(`
      
      ${html}
      
      `,document.getElementById("Chooseyourhero"));
    
    $('#Chooseyourhero').show();
    $('#dotaList').hide();
    $('#updateHeroes').hide();
    $('#dotaView').hide();
    $('#dotarecent').hide();  
    $('#dotapage').hide();  
    $('#home').hide();     
    
    
  }

  updateHeroes(id){

    id = id - 1;
    let html = `
    


    <center>
    <div class="form-style-3">
    <div class="row">
    
    <center><h1>Update Heroes</h1></center>
    <center><label for="id1"><span>Number of Heroes Spawned <span class="required">*</span></span><input disabled value="${this.dota.length+1}" id="id1" type="text" ></label></center>
    <center><label for="dotapictures">  <span>Hero Picture</span><input type="email" id="dotapictures"value="${this.dota[id].dotapic}"/> </label></center>
    <center><label for="heronames">  <span>Dota Hero</span><input type="email" id="heronames"value="${this.dota[id].heroname}"/> </label></center>
    <center><label for="descriptionheroes"><span>Hero Description:</span><textarea id="descriptionheroes" class="textarea-field"value="${this.dota[id].description}"></textarea> </label></center>

    <div class="center-align">
    <button onclick="component.dotaList()" class="btn waves-effect waves-light">Back</button>
    <a onclick="component.updateDota(${id})" class="waves-effect blue waves-light btn">Update</a>
    </div>
    </div>


    </div>
    </center>






    `;  
    this.reRender(`

      ${html}

      `,document.getElementById("updateHeroes"));   

    
    $('#Chooseyourhero').hide();
    $('#dotaList').hide();
    $('#updateHeroes').show();
    $('#dotaView').hide();
    $('#dotarecent').hide();  
    $('#dotapage').hide();  
    $('#home').hide();     
    
    
  }





  home(){
    let html = `
    `;

    this.reRender(`
      
      ${html}
      
      `,document.getElementById("Chooseyourhero"));
    
    $('#Chooseyourhero').hide();
    $('#dotaList').hide();
    $('#updateHeroes').hide();
    $('#dotaView').hide();
    $('#dotarecent').show();  
    $('#dotapage').hide();  
    $('#home').hide();      
    
  }
} 

let component = new Component();
component.dotaLayout();