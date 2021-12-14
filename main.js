//returns one random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G'];
    return dnaBases[Math.floor(Math.random() * dnaBases.length)]    //return a random index from the dnaBases array
}

//returns a random strand of DNA with 15 bases
const mockUpStrand = () =>{
    const newStrand = [];
    while(newStrand.length < 15){                                                          //assign a random DNA base while < 15
        newStrand.push(returnRandBase())                                               //push a random base to array
    }
    return newStrand;
}

//create factory function with two parameters 
const pAequorFactory = (specimenNum, dna) => {
    return { 
        specimenNum,
        dna,
        
        //method to mutate and replace one random DNA base
        mutate() {
            const randIndex = Math.floor(Math.random() * this.dna.length);//assign a random index from a DNA strand
            console.log(this.dna);
            console.log(`The DNA base that will mutate is ${this.dna[randIndex]} at index ${randIndex}`);
            
            let newBase = returnRandBase();                                              //assign one new random base
                                                                                                                   //replace a random DNA base with the new random base
            while(newBase === this.dna[randIndex]){                                    //avoid replacing the same base
                newBase = returnRandBase()                                                     // pick another random base
            }
            console.log(`New DNA base will be ${newBase}`);
            this.dna[randIndex] = newBase;                                                    
            return this.dna;
        },

        //compare two DNA strands and show percentage of identical DNA's
        compareDNA(anotherMutation){
            let sameDna = 0;                                                                        //count number of identical bases
            this.dna.forEach((elem, indx)=>{                                              //loop over the DNA strand
                if(this.dna[indx] === anotherMutation.dna[indx]){                                  //compare bases from both strands
                    sameDna ++                                                                      //increment when same base is identical
                }
            });
           console.log(`DNA bases in common = ${sameDna}`);
            let percentageDnaShared = (sameDna / this.dna.length) * 100;
            let roundPercentage= percentageDnaShared.toFixed(2);
            console.log(`Specimen ${specimenNum} and ${anotherMutation.specimenNum} have ${roundPercentage} % DNA in common `)
        },

        //method to show survivability of DNA if it contains bases 'C' and 'G'
         willLikelySurvive(){
            const result = this.dna.filter(elem => elem === 'C' || elem === 'G')  //filter the DNA for optimal bases
            return result.length / this.dna.length >= 0.6;                                      //calculate if DNA is at least 60% optimal bases
        },

    }

}

//create 30 instances of the organism object with a survivable DNA
let idCounter = 1;                                                                                  //create different specimenNum 
const survivOrg = [];                                                                             //array with the 30 surviving DNA's

while(survivOrg.length < 30){                                                             //create specimen objects untill condition is met
    let sampleOrg = pAequorFactory(idCounter, mockUpStrand());    //create new organsim object
    if(sampleOrg.willLikelySurvive()){                                                     
        survivOrg.push(sampleOrg);                                                        //if condition passes. add to array
    }
    idCounter++                                                                                     //increment parameter for specimenNum
}

const newMutation = survivOrg[0];
const anotherMutation = survivOrg[1];
console.log(newMutation.mutate())
console.log(newMutation.compareDNA(anotherMutation))
console.log('Will the specimen survive? ' + newMutation.willLikelySurvive())
console.log(survivOrg);