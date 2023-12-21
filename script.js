const initialFacts = [
    {
        id: 1,
        text: "React is being developed by Meta (formerly facebook)",
        source: "https://opensource.fb.com/",
        category: "technology",
        votesInteresting: 24,
        votesMindblowing: 9,
        votesFalse: 4,
        createdIn: 2021,
    },
    {
        id: 2,
        text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
        source:
            "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
        category: "society",
        votesInteresting: 11,
        votesMindblowing: 2,
        votesFalse: 0,
        createdIn: 2019,
    },
    {
        id: 3,
        text: "Lisbon is the capital of Portugal",
        source: "https://en.wikipedia.org/wiki/Lisbon",
        category: "society",
        votesInteresting: 8,
        votesMindblowing: 3,
        votesFalse: 1,
        createdIn: 2015,
    },
];

const CATEGORIES = [
    { name: "technology", color: "#3b82f6" },
    { name: "science", color: "#16a34a" },
    { name: "finance", color: "#ef4444" },
    { name: "society", color: "#eab308" },
    { name: "entertainment", color: "#db2777" },
    { name: "health", color: "#14b8a6" },
    { name: "history", color: "#f97316" },
    { name: "news", color: "#8b5cf6" },
];


//Selecting DOM elements
const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
const factsList = document.querySelector(".facts-list");

//Creating DOM elements; Render facts in list
factsList.innerHTML = "";
loadFacts();

async function loadFacts() {
    //Load data from supabase
    const res = await fetch("https://ixnfjsrjmolhbuqkzegg.supabase.co/rest/v1/facts", {
        headers: {
            apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml4bmZqc3JqbW9saGJ1cWt6ZWdnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI1MDM0MzEsImV4cCI6MjAxODA3OTQzMX0.z13bjv7PZn6Te51K_FCMM2kIZ4MYF1kH0_uelbo9hzY",
            authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml4bmZqc3JqbW9saGJ1cWt6ZWdnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI1MDM0MzEsImV4cCI6MjAxODA3OTQzMX0.z13bjv7PZn6Te51K_FCMM2kIZ4MYF1kH0_uelbo9hzY"
        }
    });
    const data = await res.json();
    //const filteredData = data.filter((fact) => fact.category === "technology");
    createFactsList(data);
}

//createFactsList(initialFacts);

function createFactsList(data) {
    const htmlArr = data.map((fact) => `<li class="fact">
    <p>
        ${fact.text}
        <a class="source" href="${fact.source}" target="_blank">(Source)</a>
    </p>
    <span class="tag" style="background-color: ${CATEGORIES.find((cat) => cat.name === fact.category).color}">${fact.category}</span></li>`);

    const html = htmlArr.join("");
    factsList.insertAdjacentHTML("afterbegin", html);
}


//Toggle form visibility
btn.addEventListener("click", function () {
    if (form.classList.contains("hidden")) {
        form.classList.remove("hidden");
        btn.textContent = "Close";
    } else {
        form.classList.add("hidden");
        btn.textContent = "Share a fact";
    }
});

console.log([7, 64, 6, -23, 11].filter((el) => el > 10));
console.log([7, 64, 6, -23, 11].find((el) => el > 10));
// function calcFact(year) {
//     const currentYear = new Date().getFullYear();
//     const age = currentYear - year;

//     if (age >= 0) return `${age} years old!`;
//     else throw new Error(`${year} cannot be later than ${currentYear}`);
// }
// console.log(calcFact(2020));
// console.log(calcFact(2034));
//const calcFact2 = (year) => new Date().getFullYear() - year;
// const calcFact2 = (year) => year <= new Date().getFullYear() ? new Date().getFullYear() - year : `${year} cannot be later than ${currentYear}`
// console.log(calcFact2(2009));

// const fact = ["Lisbon is the capital of Portugal", 2015, true];
// const newFact = [...fact, "category"];
// console.log(newFact);

// const factObj = {
//     text: "Lisbon is the capital of Portugal",
//     category: "society",
//     createdIn: 2015,
//     isCorrect: true,
//     createSummary: function () {
//         return `The fact "${this.text}" is from category ${this.category.toUpperCase()}`;
//     }
// };
// console.log(factObj.text);
// const { category, isCorrect } = factObj;
// console.log(`${category}\n${isCorrect}`);
// console.log(factObj.createSummary());

// [2, 4, 6, 8].forEach(function (el) {
//     console.log(el);
// });
// const times10 = [2, 4, 6, 8].map((el) => el * 10);
// console.log(times10);

// const CATEGORIES = [
//     { name: "technology", color: "#3b82f6" },
//     { name: "science", color: "#16a34a" },
//     { name: "finance", color: "#ef4444" },
//     { name: "society", color: "#eab308" },
//     { name: "entertainment", color: "#db2777" },
//     { name: "health", color: "#14b8a6" },
//     { name: "history", color: "#f97316" },
//     { name: "news", color: "#8b5cf6" },
// ];

const allCategories = CATEGORIES.map((el) => el.name);
console.log(allCategories);

// const initialFacts = [
//     {
//         id: 1,
//         text: "React is being developed by Meta (formerly facebook)",
//         source: "https://opensource.fb.com/",
//         category: "technology",
//         votesInteresting: 24,
//         votesMindblowing: 9,
//         votesFalse: 4,
//         createdIn: 2021,
//     },
//     {
//         id: 2,
//         text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
//         source:
//             "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
//         category: "society",
//         votesInteresting: 11,
//         votesMindblowing: 2,
//         votesFalse: 0,
//         createdIn: 2019,
//     },
//     {
//         id: 3,
//         text: "Lisbon is the capital of Portugal",
//         source: "https://en.wikipedia.org/wiki/Lisbon",
//         category: "society",
//         votesInteresting: 8,
//         votesMindblowing: 3,
//         votesFalse: 1,
//         createdIn: 2015,
//     },
// ];

function calcFact(year) {
    const currentYear = new Date().getFullYear();
    const age = currentYear - year;

    if (age >= 0) return age;
    else throw new Error(`${year} cannot be later than ${currentYear}`);
}

const factAges = initialFacts.map((el) => calcFact(el.createdIn));
console.log(factAges.join("-"));




