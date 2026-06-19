const workouts = {

Monday: [
{
name: "Bicep Curls",
sets: "4",
reps: "12",
instructions:
"Keep your elbows close to your body. Lift with control and lower slowly."
},
{
name: "Push Ups",
sets: "4",
reps: "15",
instructions:
"Keep your body straight and lower your chest fully."
}
],

Tuesday: [
{
name: "Squats",
sets: "4",
reps: "20",
instructions:
"Push your hips back and keep your knees aligned with your feet."
},
{
name: "Lunges",
sets: "3",
reps: "12",
instructions:
"Step forward and lower until both knees form 90 degree angles."
}
],

Thursday: [
{
name: "Pull Ups",
sets: "4",
reps: "8",
instructions:
"Pull your chest toward the bar and control the descent."
},
{
name: "Rows",
sets: "4",
reps: "12",
instructions:
"Squeeze your shoulder blades together on every rep."
}
],

Friday: [
{
name: "Shoulder Press",
sets: "4",
reps: "10",
instructions:
"Press overhead through a full range of motion."
},
{
name: "Lateral Raises",
sets: "3",
reps: "15",
instructions:
"Lift arms to shoulder height while keeping control."
}
]

};

const today = new Date().toLocaleDateString(
"en-US",
{ weekday: "long" }
);

document.getElementById("dayTitle").textContent = today;

const workoutContainer =
document.getElementById("workoutContainer");

const restDay =
document.getElementById("restDay");

if(!workouts[today]){
workoutContainer.style.display = "none";
restDay.classList.remove("hidden");
}

let currentExercise = 0;

function loadExercise(){

const exercise =
workouts[today][currentExercise];

document.getElementById("exerciseName").textContent =
exercise.name;

document.getElementById("sets").textContent =
exercise.sets;

document.getElementById("reps").textContent =
exercise.reps;

document.getElementById("instructions").textContent =
exercise.instructions;
}

if(workouts[today]){
loadExercise();
}

let startY = 0;

document.addEventListener("touchstart",(e)=>{

startY = e.touches[0].clientY;

});

document.addEventListener("touchend",(e)=>{

const endY =
e.changedTouches[0].clientY;

if(startY - endY > 100){

const popup =
document.getElementById("levelPopup");

popup.classList.remove("hidden");

setTimeout(()=>{

popup.classList.add("hidden");

currentExercise++;

if(currentExercise < workouts[today].length){

loadExercise();

}else{

document.querySelector(".exercise-card").innerHTML = `

<div style="
height:100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
text-align:center;
">

<h1 style="
font-size:56px;
font-weight:900;
background:linear-gradient(
90deg,
#22c55e,
#67e8f9,
#8b5cf6
);
-webkit-background-clip:text;
-webkit-text-fill-color:transparent;
">
Workout Complete
</h1>

<p style="
margin-top:20px;
font-size:18px;
max-width:280px;
line-height:1.7;
color:#94a3b8;
">
You gained experience today.
Return tomorrow for your next mission.
</p>

</div>
`;

}

},1200);

}

});