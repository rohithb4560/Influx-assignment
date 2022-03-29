//Rohith Bellamkonda - Rohith4560@gmail.com
//For Running node Optional.js in shell

let Rohith;
function TripGroup(){
  
  Rohith = new Object();
  console.log(Rohith)
}
function AddMember(name){
  if (!Rohith[name]){
    console.log(`${name} added to the list`)
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
  TripGroup();
  let members = ["Virat","Rahul","Dinesh","Nehra","Ganguly","Sachin","Dravid","Bumrah","Shastri","Kumble","Hardik","Pujara","Rahane","Pant","Chahal","ABD","Warner","Shami"]
  
  //console.log(Object.keys(Rohith).length)
  
 while (Object.keys(Rohith).length < 10){
   let randomNum=Math.floor(Math.random() * 
    members.length);
    AddMember(members[randomNum])  
  }
  trip_members=Object.keys(Rohith) 
  
  for (let i=0;i<300;i++){
    let paid_person = trip_members[Math.floor(Math.random() * 
    trip_members.length)]
    let paid_amount = ((Math.floor(Math.random()*100))+1)*10
    let got_paid_members_count = Math.floor(Math.random()*10)+1
    let whom=[];
    if (got_paid_members_count==10){
      whom=trip_members
      
    }
    else{
      while (whom.length!=got_paid_members_count){
        random_person = trip_members[Math.floor(Math.random()*10)]
        if (!whom.includes(random_person) && random_person!=paid_person){
          whom.push(random_person)
        }
      }     
    }
    
     AddExpenses(paid_person,paid_amount,whom)
  }
  Result()
}

Main()
