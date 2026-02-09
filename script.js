console.log("Script loaded!");

// Community Dragon URLs - ALLES über CDN
const runeIcons = {
    "Conqueror": "https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Precision/Conqueror/Conqueror.png",
    "Lethal Tempo": "https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Precision/LethalTempo/LethalTempoTemp.png",
    "Press the Attack": "https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Precision/PressTheAttack/PressTheAttack.png",
    "Fleet Footwork": "https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Precision/FleetFootwork/FleetFootwork.png",
    "Grasp of the Undying": "https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Resolve/GraspOfTheUndying/GraspOfTheUndying.png",
    "Dark Harvest": "https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Domination/DarkHarvest/DarkHarvest.png",
    "Electrocute": "https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Domination/Electrocute/Electrocute.png",
    "Aery": "https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Sorcery/SummonAery/SummonAery.png",
    "Comet": "https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Sorcery/ArcaneComet/ArcaneComet.png"
};

// Rune Tree Icons (Zweitrunen)
const secondaryRuneIcons = {
    "Precision": "https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7201_Precision.png",
    "Domination": "https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7200_Domination.png",
    "Sorcery": "https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7202_Sorcery.png",
    "Resolve": "https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7204_Resolve.png",
    "Inspiration": "https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7203_Inspiration.png"
};

const champions = {
    "Yasuo": [
        {
            lane: "Top",
            runeOptions: [
                {
                    rune: "Grasp of the Undying",
                    secondaryRunes: ["Precision"],
                    buildOptions: [
                        null,
                        {
                            type: "Tank Build",
                            showItems: true,
                            items: [
                                { name: "Berserker's Greaves", id: "3006" },
                                { name: "Stridebreaker", id: "6631" },
                                { name: "Heartsteel", id: "3084" },
                                { name: "Titanic Hydra", id: "3748" },
                                { name: "Wit's End", id: "3091" },
                                { name: "Sterak's Gage", id: "3053" }
                            ]
                        }
                    ]
                },
                { 
                    rune: "Lethal Tempo",
                    secondaryRunes: ["Domination", "Resolve"]
                },
                { 
                    rune: "Press the Attack",
                    secondaryRunes: ["Resolve", "Domination"]
                },
                {
                    runes: ["Dark Harvest", "Electrocute"],
                    secondaryRunes: ["Precision", "Resolve"],
                    buildOptions: [
                        null,
                        {
                            type: "AP Build",
                            showItems: true,
                            items: [
                                { name: "Nashor's Tooth", id: "3115" },
                                { name: "Sorcerer's Shoes", id: "3020" },
                                { 
                                    itemOptions: [
                                        { name: "Hextech Protobelt", id: "3152" },
                                        { name: "Hextech Gunblade", id: "3146" },
                                        { name: "Stormsurge", id: "4644" }
                                    ]
                                },
                                {
                                    itemOptions: [
                                        { name: "Shadowflame", id: "4645" },
                                        { name: "Zhonya's Hourglass", id: "3157" },
                                        { name: "Lich Bane", id: "3100" }
                                    ]
                                },
                                { name: "Rabadon's Deathcap", id: "3089" },
                                { name: "Void Staff", id: "3135" }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            lane: "ADC",
            runeOptions: [
                { 
                    rune: "Press the Attack",
                    secondaryRunes: ["Resolve", "Domination"]
                },
                { 
                    rune: "Lethal Tempo",
                    secondaryRunes: ["Domination", "Resolve"]
                },
                { 
                    rune: "Grasp of the Undying",
                    secondaryRunes: ["Precision"]
                },
                { 
                    rune: "Conqueror",
                    secondaryRunes: ["Domination", "Resolve"]
                }
            ]
        },
        {
            lane: "Mid",
            runeOptions: [
                {
                    runes: ["Electrocute", "Dark Harvest"],
                    secondaryRunes: ["Precision", "Resolve"],
                    buildOptions: [
                        null,
                        {
                            type: "AP Build",
                            showItems: true,
                            items: [
                                {
                                    itemOptions: [
                                        { name: "Nashor's Tooth", id: "3115" },
                                        { name: "Rageblade", id: "3124" }
                                    ]
                                },
                                {
                                    itemOptions: [
                                        { name: "Sorcerer's Shoes", id: "3020" },
                                        { name: "Berserker's Greaves", id: "3006" }
                                    ]
                                },
                                { 
                                    itemOptions: [
                                        { name: "Hextech Protobelt", id: "3152" },
                                        { name: "Hextech Gunblade", id: "3146" },
                                        { name: "Stormsurge", id: "4644" }
                                    ]
                                },
                                {
                                    itemOptions: [
                                        { name: "Shadowflame", id: "4645" },
                                        { name: "Zhonya's Hourglass", id: "3157" },
                                        { name: "Lich Bane", id: "3100" }
                                    ]
                                },
                                { name: "Rabadon's Deathcap", id: "3089" },
                                { name: "Void Staff", id: "3135" }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};

const btn = document.getElementById('generateBtn');
const result = document.getElementById('result');
const championImage = document.getElementById('championImage');
const championText = document.getElementById('champion');
const laneText = document.getElementById('lane');
const runeText = document.getElementById('rune');
const mainRuneIcon = document.getElementById('mainRuneIcon');
const secondaryRuneIcon = document.getElementById('secondaryRuneIcon');
const buildSection = document.getElementById('buildSection');
const buildType = document.getElementById('buildType');
const itemsContainer = document.getElementById('itemsContainer');
const noBuildSection = document.getElementById('noBuildSection');

btn.addEventListener('click', () => {
    const championNames = Object.keys(champions);
    const randomChampionName = championNames[Math.floor(Math.random() * championNames.length)];
    const championVariations = champions[randomChampionName];
    const randomVariation = championVariations[Math.floor(Math.random() * championVariations.length)];
    const randomRuneOption = randomVariation.runeOptions[Math.floor(Math.random() * randomVariation.runeOptions.length)];
    
    let selectedRune;
    if (randomRuneOption.runes) {
        selectedRune = randomRuneOption.runes[Math.floor(Math.random() * randomRuneOption.runes.length)];
    } else {
        selectedRune = randomRuneOption.rune;
    }
    
    let selectedSecondaryRune = null;
    if (randomRuneOption.secondaryRunes && randomRuneOption.secondaryRunes.length > 0) {
        selectedSecondaryRune = randomRuneOption.secondaryRunes[Math.floor(Math.random() * randomRuneOption.secondaryRunes.length)];
    }
    
    let selectedBuild = null;
    if (randomRuneOption.buildOptions) {
        selectedBuild = randomRuneOption.buildOptions[Math.floor(Math.random() * randomRuneOption.buildOptions.length)];
    } else if (randomRuneOption.build) {
        selectedBuild = randomRuneOption.build;
    }
    
    // Community Dragon Champion Image
    const championImageUrl = `https://ddragon.leagueoflegends.com/cdn/14.24.1/img/champion/${randomChampionName}.png`;
    
    championImage.src = championImageUrl;
    championImage.style.display = 'block';
    championText.textContent = randomChampionName;
    laneText.textContent = randomVariation.lane;
    runeText.textContent = selectedRune;
    
    if (runeIcons[selectedRune]) {
        mainRuneIcon.src = runeIcons[selectedRune];
        mainRuneIcon.style.display = 'block';
    } else {
        mainRuneIcon.style.display = 'none';
    }
    
    if (selectedSecondaryRune && secondaryRuneIcons[selectedSecondaryRune]) {
        secondaryRuneIcon.src = secondaryRuneIcons[selectedSecondaryRune];
        secondaryRuneIcon.style.display = 'block';
    } else {
        secondaryRuneIcon.style.display = 'none';
    }
    
    if (selectedBuild) {
        buildSection.style.display = 'block';
        noBuildSection.style.display = 'none';
        buildType.textContent = selectedBuild.type;
        
        if (selectedBuild.showItems && selectedBuild.items) {
            itemsContainer.innerHTML = '';
            
            selectedBuild.items.forEach((item, index) => {
                let finalItem;
                if (item.itemOptions) {
                    finalItem = item.itemOptions[Math.floor(Math.random() * item.itemOptions.length)];
                } else {
                    finalItem = item;
                }
                
                // Community Dragon CDN Item Images
                const itemImageUrl = `https://ddragon.leagueoflegends.com/cdn/14.24.1/img/item/${finalItem.id}.png`;
                
                const itemDiv = document.createElement('div');
                itemDiv.className = 'item';
                itemDiv.innerHTML = `
                    <img src="${itemImageUrl}" alt="${finalItem.name}">
                    <span>${finalItem.name}</span>
                `;
                
                itemsContainer.appendChild(itemDiv);
                
                if (index < selectedBuild.items.length - 1) {
                    const arrow = document.createElement('div');
                    arrow.className = 'arrow';
                    arrow.textContent = '→';
                    itemsContainer.appendChild(arrow);
                }
            });
        } else {
            itemsContainer.innerHTML = '';
        }
    } else {
        // KEIN BUILD - Zeige "Up to you"
        buildSection.style.display = 'none';
        noBuildSection.style.display = 'block';
    }
    
    result.classList.remove('hidden');
});
// Chat Widget Logic
const chatButton = document.getElementById('chatButton');
const chatWindow = document.getElementById('chatWindow');
const closeChat = document.getElementById('closeChat');
const chatInput = document.getElementById('chatInput');
const sendButton = document.getElementById('sendButton');
const chatMessages = document.getElementById('chatMessages');

chatButton.addEventListener('click', () => {
    chatWindow.classList.toggle('hidden');
});

closeChat.addEventListener('click', () => {
    chatWindow.classList.add('hidden');
});

sendButton.addEventListener('click', sendMessage);
chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
});

async function sendMessage() {
    const message = chatInput.value.trim();
    if (!message) return;
    
    // User message anzeigen
    const userDiv = document.createElement('div');
    userDiv.className = 'user-message';
    userDiv.textContent = message;
    chatMessages.appendChild(userDiv);
    
    chatInput.value = '';
    chatMessages.scrollTop = chatMessages.scrollHeight;
    
    // An Backend senden
    try {
        const response = await fetch('/.netlify/functions/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message })
        });
        
        const data = await response.json();
        
        // Bot response anzeigen
        const botDiv = document.createElement('div');
        botDiv.className = 'bot-message';
        botDiv.textContent = data.reply;
        chatMessages.appendChild(botDiv);
        
        chatMessages.scrollTop = chatMessages.scrollHeight;
    } catch (error) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'bot-message';
        errorDiv.textContent = 'Fehler beim Senden der Nachricht.';
        chatMessages.appendChild(errorDiv);
    }
}
