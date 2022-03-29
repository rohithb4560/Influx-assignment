//Rohith Bellamkonda - Rohith4560@gmail.com
//For Running node index.js in shell

let Rohith;
function TripGroup(){
  
  Rohith = new Object();
  console.log(Rohith)
}
function AddMember(name){
  if (!Rohith[name]){
    Rohith[name]={}
  }
  else{
    console.log("Your friend is already in list")
  }
  console.log(Rohith)
}
function AddExpenses(name,amount,whom){
  if (whom=="all"){
    whom=Object.keys(Rohith)
  }
  if (!Rohith[name]){
    console.log("Your friend is not in the list")
  }    
  else{
   for (let i=0;i<whom.length;i++){
     if (whom[i]!=name){
     if (!Rohith[name][whom[i]]){
       Rohith[name][whom[i]]=amount/((whom.length)+1)
       
       if (!Rohith[whom[i]][name]){
        Rohith[whom[i]][name]=(amount*-1)/((whom.length)+1)
       }
       else{
         Rohith[whom[i]][name]-=amount/((whom.length)+1)
      }
     }
     else{
       Rohith[name][whom[i]]+=amount/((whom.length)+1)
               if (!Rohith[whom[i]][name]){
        Rohith[whom[i]][name]=(amount*-1)/((whom.length)+1)
       }
       else{
         Rohith[whom[i]][name]-=amount/((whom.length)+1)
      }
     }
     }
   }   
  }
}

function Result(){
  console.log("Here are expenses and who owes who")
  console.log(Rohith)
}

function Main(){
  TripGroup()
  AddMember("Virat")
  AddMember("Dhoni")
  AddMember("Rahul")
  AddExpenses("Virat",30,["Rahul","Dhoni"])
 
  Result()
                      
  
  
}
Main()

