console.log("Script loaded!");
const champions = { 
    "Yasuo": [
        { lane: "Adc", runes: ["Press the attack","Fleet Footwork", "Lethal Tempo", "Conqueror", "Grasp of the Undying"] },
        { lane: "Top", runes: ["Conqueror", "Grasp of the Undying", "Lethal Tempo"] },
        { lane: "Mid", runes: ["Phase Rush", "Electrocute", "Dark Harvest", "Grasp of the Undying", "Arcane Comet"]}
    ],
    "Teemo": [
        { lane: "Jungle", runes: ["Press the attack","Dark Harvest", "Electrocute", "Fleet Footwork"] },
        { lane: "Adc", runes: ["Press the attack","Lethal Tempo", "Fleet Footwork", "Arcane Comet"] }
    ],
    "Syndra": [
        { lane: "ADC", runes: ["Electrocute", "First Strike"] },
        { lane: "Support", runes: ["First Strike"] }
    ],
    "Jax": [
        { lane: "Adc", runes: ["Lethal Tempo", "Dark Harvest", "Electrocute"] }
    ],
    "Ahri": [
        { lane: "Adc", runes: ["Electrocute", "Dark Harvest", "First Strike"] },
        { lane: "Support", runes: ["Summon Aery", "Electrocute", "Dark Harvest"] }
    ],
    "Fiora": [
        { lane: "Adc", runes: ["Dark Harvest", "Electrocute", "Press the attack","First Strike", "Conqueror"] },
        { lane: "Support", runes: ["Press the attack", "Electrocute", "Dark Harvest", "First Strike"] }
    ],
    "Ivern": [
        { lane: "Top", runes: ["Press the attack", "Summon Aery"] },
        { lane: "Support", runes: ["Summon Aery"] }
    ],
    "Rengar": [
        { lane: "Top", runes: ["Conqueror", "Grasp of the Undying"] },
        { lane: "Adc", runes: ["Conqueror", "Electrocute"] },
        { lane: "Support", runes: ["Conqueror", "Electrocute", "Dark Harvest", "Grasp of the Undying"] }
    ],
    "Thresh": [
        { lane: "Top", runes: ["Lethal Tempo", "Press the attack", "Dark Harvest", "Electrocute"] },
        { lane: "Adc", runes: ["Lehtal Tempo", "Press the attack", "Dark Harvest", "Electrocute"] }
    ],
    "Blitzcrank": [
        { lane: "Top", runes: ["Dark Harvest", "Electrocute", "Press the attack", "Lethal Tempo"] },
        { lane: "Adc", runes: ["Lethal Tempo", "Electrocute", "Press the attack", "Lethal Tempo"] }
    ],
    "Nautilus": [
        { lane: "Top", runes: ["Dark Harvest", "Electrocute", "Grasp of the Undying"] }
    ],
    
};


const btn = document.getElementById('generateBtn');
const result = document.getElementById('result');
const championText = document.getElementById('champion');
const laneText = document.getElementById('lane');


btn.addEventListener('click', () => {
    const championNames = Object.keys(champions);
    
    const randomChampionName = championNames[Math.floor(Math.random() * championNames.length)];
    
    const championVariations = champions[randomChampionName];
    
    const randomVariation = championVariations[Math.floor(Math.random() * championVariations.length)];
    
    const randomRune = randomVariation.runes[Math.floor(Math.random() * randomVariation.runes.length)];
    
    championText.textContent = randomChampionName;
    laneText.textContent = randomVariation.lane + " - " + randomRune;
    result.classList.remove('hidden');
});