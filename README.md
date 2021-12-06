# Codecademy-Challenge-Project-New-DNA-Organism
Create new mutated objects using a factory function and compare percentage of identical values

This is a Challenge Project from the Full Stack Engineer Path at Codecademy.
The code was not created by me but I fully understand it and can reproduce it.

Project Goals............................................................................
 
There are two helper functions: returnRandBase() and mockUpStrand().

When returnRandBase(.) is called, it will randomly select a base and return the base ('A','T','C', or 'G'). DNA is comprised of four bases (Adenine, Thymine, Cytosine, and Guanine). 

mockUpStrand() is used to generate an array containing 15 bases to represent a single DNA strand with 15 bases.

Create a factory function pAequorFactory() that has two parameters: first parameter is a number (no two organisms should have the same number).
The second parameter is an array of 15 DNA bases.
pAequorFactory() should return an object that contains the properties specimenNum and dna that correspond to the parameters provided.

Below methods will be added to change the factory function:

  - .mutate() is responsible for randomly selecting a base in the object’s dna property and changing the current base to a different base. Then .mutate() will return the object’s dna.

For example, if the randomly selected base is the 1st base and it is 'A', the base must be changed to 'T', 'C', or 'G'. But it cannot be 'A' again.

  - .compareDNA() has one parameter, another pAequor object.

The behavior of .compareDNA() is to compare the current pAequor‘s .dna with the passed in pAequor‘s .dna and compute how many bases are identical and in the same locations. .compareDNA() does not return anything, but prints a message that states the percentage of DNA the two objects have in common — use the .specimenNum to identify which pAequor objects are being compared.

In the returned object of pAequorFactory(), add another method .willLikelySurvive().

.willLikelySurvive() returns true if the object’s .dna array contains at least 60% 'C' or 'G' bases. Otherwise, .willLikelySurvive() returns false.

With the factory function set up, create 30 instances of pAequor that can survive in their natural environment. Store these instances in an array for your team to study later.
