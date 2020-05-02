var CGPA=7.74

if (CGPA>=7.75)
{
    console.log("Congratulations! You are passed First class with distinction")
}
else if((CGPA>=6.75)&&(CGPA<7.75))
{
    console.log("Good! You are passed with First class")
}
else if((CGPA>=6.25)&&(CGPA<6.75))
{
    console.log("Keep it up! You are passed with Higher Second class")
}
else if((CGPA>=5.50)&&(CGPA<6.25))
{
    console.log("You are passed with Second class. Study Hard")
}
else
{
    console.log("Hard Luck! You are FAIL")
}