let allMatches = [];
const modal = document.getElementById("matchModal");
const closeBtn = document.getElementsByClassName("close")[0];

// Dark Mode Toggle
function toggleTheme() {
  const body = document.body;
  const themeToggle = document.querySelector(".theme-toggle");

  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    themeToggle.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    themeToggle.textContent = "🌙";
    localStorage.setItem("theme", "light");
  }
}

// Load saved theme
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  const themeToggle = document.querySelector(".theme-toggle");

  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeToggle.textContent = "☀️";
  }
});

// Close modal handlers
closeBtn.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

function simulateAPICall() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        status: "success",
        matches: [
          {
            id: 1,
            league: "Premier League",
            homeTeam: "Manchester United",
            awayTeam: "Liverpool",
            homeLogo:
              "https://upload.wikimedia.org/wikipedia/id/thumb/7/7a/Manchester_United_FC_crest.svg/250px-Manchester_United_FC_crest.svg.png",
            awayLogo:
              "https://images.seeklogo.com/logo-png/27/1/liverpool-fc-logo-png_seeklogo-272372.png",
            homeScore: 2,
            awayScore: 1,
            date: "2025-11-26",
            time: "22:00 WIB",
            venue: "Old Trafford",
            status: "upcoming",
            stats: {
              possession: { home: 55, away: 45 },
              shots: { home: 12, away: 8 },
              shotsOnTarget: { home: 5, away: 3 },
              corners: { home: 6, away: 4 },
              fouls: { home: 10, away: 12 },
            },
            lineup: {
              home: [
                "De Gea (GK)",
                "Wan-Bissaka",
                "Maguire",
                "Martinez",
                "Shaw",
                "Casemiro",
                "Eriksen",
                "Bruno Fernandes",
                "Antony",
                "Rashford",
                "Martial",
              ],
              away: [
                "Alisson (GK)",
                "Alexander-Arnold",
                "Van Dijk",
                "Konate",
                "Robertson",
                "Fabinho",
                "Henderson",
                "Thiago",
                "Salah",
                "Nunez",
                "Diaz",
              ],
            },
          },
          {
            id: 2,
            league: "Premier League",
            homeTeam: "Arsenal",
            awayTeam: "Chelsea",
            homeLogo:
              "https://upload.wikimedia.org/wikipedia/id/thumb/5/53/Arsenal_FC.svg/1020px-Arsenal_FC.svg.png",
            awayLogo:
              "https://upload.wikimedia.org/wikipedia/id/thumb/c/cc/Chelsea_FC.svg/1200px-Chelsea_FC.svg.png",
            homeScore: 3,
            awayScore: 2,
            date: "2025-11-25",
            time: "21:00 WIB",
            venue: "Emirates Stadium",
            status: "live",
            minute: 78,
            stats: {
              possession: { home: 58, away: 42 },
              shots: { home: 18, away: 11 },
              shotsOnTarget: { home: 8, away: 5 },
              corners: { home: 9, away: 5 },
              fouls: { home: 8, away: 14 },
            },
            lineup: {
              home: [
                "Ramsdale (GK)",
                "White",
                "Saliba",
                "Gabriel",
                "Zinchenko",
                "Partey",
                "Xhaka",
                "Odegaard",
                "Saka",
                "Jesus",
                "Martinelli",
              ],
              away: [
                "Kepa (GK)",
                "James",
                "Silva",
                "Fofana",
                "Chilwell",
                "Kante",
                "Kovacic",
                "Mount",
                "Havertz",
                "Sterling",
                "Aubameyang",
              ],
            },
            events: [
              {
                time: "12'",
                type: "⚽",
                description: "Goal! Saka (Arsenal)",
              },
              {
                time: "28'",
                type: "⚽",
                description: "Goal! Sterling (Chelsea)",
              },
              {
                time: "45'",
                type: "⚽",
                description: "Goal! Jesus (Arsenal)",
              },
              {
                time: "62'",
                type: "⚽",
                description: "Goal! Mount (Chelsea)",
              },
              {
                time: "71'",
                type: "⚽",
                description: "Goal! Martinelli (Arsenal)",
              },
              {
                time: "75'",
                type: "🟥",
                description: "Red Card! Fofana (Chelsea)",
              },
            ],
          },
          {
            id: 3,
            league: "Liga 1",
            homeTeam: "Persija Jakarta",
            awayTeam: "Persib Bandung",
            homeLogo:
              "https://tse2.mm.bing.net/th/id/OIP.ktPmBizm4ZyKf2Jjts1CqQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
            awayLogo:
              "https://upload.wikimedia.org/wikipedia/id/0/0d/Logo_Persib_Bandung.png",
            homeScore: 1,
            awayScore: 0,
            date: "2025-11-25",
            time: "19:00 WIB",
            venue: "GBK",
            status: "live",
            minute: 67,
            stats: {
              possession: { home: 54, away: 46 },
              shots: { home: 11, away: 8 },
              shotsOnTarget: { home: 4, away: 2 },
              corners: { home: 6, away: 3 },
              fouls: { home: 12, away: 10 },
            },
            lineup: {
              home: [
                "Andritany (GK)",
                "Rezaldi",
                "Maman",
                "Habibi",
                "Alfath",
                "Rohit",
                "Syahrian",
                "Riko",
                "Braif",
                "Marko Simic",
                "Bambang",
              ],
              away: [
                "Aqsa (GK)",
                "Fabiano",
                "Nick",
                "Victor",
                "Bauman",
                "Marc",
                "Beckham",
                "Ezra",
                "Wander",
                "Ciro Alves",
                "David",
              ],
            },
            events: [
              {
                time: "34'",
                type: "⚽",
                description: "Goal! Marko Simic (Persija Jakarta)",
              },
              {
                time: "60'",
                type: "🟨",
                description: "Yellow Card! Victor (Persib Bandung)",
              },
              {
                time: "65'",
                type: "🟨",
                description: "Yellow Card! Riko (Persija Jakarta)",
              },
              {
                time: "70'",
                type: "⚽",
                description: "Goal! Ciro Alves (Persib Bandung)",
              },
            ],
          },
          {
            id: 4,
            league: "La Liga",
            homeTeam: "FC Barcelona",
            awayTeam: "Real Madrid",
            homeLogo:
              "https://upload.wikimedia.org/wikipedia/id/thumb/4/47/FC_Barcelona_%28crest%29.svg/1200px-FC_Barcelona_%28crest%29.svg.png",
            awayLogo:
              "https://upload.wikimedia.org/wikipedia/id/thumb/5/56/Real_Madrid_CF.svg/1200px-Real_Madrid_CF.svg.png",
            homeScore: 0,
            awayScore: 0,
            date: "2025-11-27",
            time: "23:00 WIB",
            venue: "Camp Nou",
            status: "upcoming",
            stats: {
              possession: { home: 60, away: 40 },
              shots: { home: 15, away: 7 },
              shotsOnTarget: { home: 6, away: 2 },
              corners: { home: 8, away: 3 },
              fouls: { home: 9, away: 11 },
            },
            lineup: {
              home: [
                "Ter Stegen (GK)",
                "Dest",
                "Araujo",
                "Pique",
                "Alba",
                "Busquets",
                "Pedri",
                "Gavi",
                "Fati",
                "Lewandowski",
                "Dembele",
              ],
              away: [
                "Courtois (GK)",
                "Carvajal",
                "Militao",
                "Alaba",
                "Mendy",
                "Casemiro",
                "Modric",
                "Kroos",
                "Vinicius Jr.",
                "Benzema",
                "Rodrygo",
              ],
            },
          },
          {
            id: 5,
            league: "Serie A",
            homeTeam: "Juventus",
            awayTeam: "AC Milan",
            homeLogo:
              "https://1000logos.net/wp-content/uploads/2021/05/Juventus-logo.png",
            awayLogo:
              "https://upload.wikimedia.org/wikipedia/commons/1/17/AC_Milan.png",
            homeScore: 2,
            awayScore: 2,
            date: "2025-11-24",
            time: "20:00 WIB",
            venue: "Allianz Stadium",
            status: "finished",
            stats: {
              possession: { home: 65, away: 35 },
              shots: { home: 15, away: 9 },
              shotsOnTarget: { home: 10, away: 6 },
              corners: { home: 12, away: 6 },
              fouls: { home: 10, away: 15 },
            },
            lineup: {
              home: [
                "Szczesny (GK)",
                "Danilo",
                "Bonucci",
                "De Ligt",
                "Alex Sandro",
                "Locatelli",
                "Rabiot",
                "Chiesa",
                "Dybala",
                "Vlahovic",
                "Kulusevski",
              ],
              away: [
                "Maignan (GK)",
                "Calabria",
                "Tomori",
                "Kjaer",
                "Hernandez",
                "Kessie",
                "Tonali",
                "Brahim Diaz",
                "Leao",
                "Ibrahimovic",
                "Rebic",
              ],
            },
            events: [
              {
                time: "22'",
                type: "⚽",
                description: "Goal! Vlahovic (Juventus)",
              },
              {
                time: "45+2'",
                type: "⚽",
                description: "Goal! Leao (AC Milan)",
              },
              {
                time: "68'",
                type: "⚽",
                description: "Goal! Dybala (Juventus)",
              },
              {
                time: "82'",
                type: "⚽",
                description: "Goal! Ibrahimovic (AC Milan)",
              },
            ],
          },
          {
            id: 6,
            league: "Bundesliga",
            homeTeam: "Bayern Munich",
            awayTeam: "Borussia Dortmund",
            homeLogo:
              "https://upload.wikimedia.org/wikipedia/commons/8/8d/FC_Bayern_M%C3%BCnchen_logo_%282024%29.svg",
            awayLogo:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Borussia_Dortmund_logo.svg/1200px-Borussia_Dortmund_logo.svg.png",
            homeScore: 1,
            awayScore: 3,
            date: "2025-11-23",
            time: "21:30 WIB",
            venue: "Allianz Arena",
            status: "finished",
            stats: {
              possession: { home: 52, away: 48 },
              shots: { home: 10, away: 15 },
              shotsOnTarget: { home: 4, away: 7 },
              corners: { home: 5, away: 8 },
              fouls: { home: 11, away: 9 },
            },
            lineup: {
              home: [
                "Neuer (GK)",
                "Pavard",
                "Upamecano",
                "Sule",
                "Davies",
                "Kimmich",
                "Goretzka",
                "Coman",
                "Musiala",
                "Muller",
                "Sane",
              ],
              away: [
                "Kobel (GK)",
                "Meunier",
                "Hummels",
                "Akanji",
                "Guerreiro",
                "Reus",
                "Bellingham",
                "Brandt",
                "Hazard",
                "Haaland",
                "Sancho",
              ],
            },
            events: [
              {
                time: "30'",
                type: "⚽",
                description: "Goal! Haaland (Borussia Dortmund)",
              },
              {
                time: "55'",
                type: "⚽",
                description: "Goal! Sancho (Borussia Dortmund)",
              },
              {
                time: "70'",
                type: "⚽",
                description: "Goal! Muller (Bayern Munich)",
              },
              {
                time: "85'",
                type: "⚽",
                description: "Goal! Reus (Borussia Dortmund)",
              },
            ],
          },
          {
            id: 7,
            league: "La Liga",
            homeTeam: "Atletico Madrid",
            awayTeam: "Sevilla FC",
            homeLogo:
              "https://upload.wikimedia.org/wikipedia/id/thumb/f/f4/Atletico_Madrid_2017_logo.svg/1200px-Atletico_Madrid_2017_logo.svg.png",
            awayLogo:
              "https://upload.wikimedia.org/wikipedia/id/thumb/3/3b/Sevilla_FC_logo.svg/1200px-Sevilla_FC_logo.svg.png",
            homeScore: 0,
            awayScore: 0,
            date: "2025-11-26",
            time: "20:00 WIB",
            venue: "Wanda Metropolitano",
            status: "upcoming",
            stats: {
              possession: { home: 57, away: 43 },
              shots: { home: 13, away: 6 },
              shotsOnTarget: { home: 5, away: 2 },
              corners: { home: 7, away: 2 },
              fouls: { home: 10, away: 15 },
            },
            lineup: {
              home: [
                "Oblak (GK)",
                "Trippier",
                "Gimenez",
                "Savic",
                "Hernandez",
                "Koke",
                "Llorente",
                "De Paul",
                "Correa",
                "Griezmann",
                "Joao Felix",
              ],
              away: [
                "Bono (GK)",
                "Navas",
                "Kounde",
                "Diego Carlos",
                "Acuna",
                "Fernando",
                "Jordan",
                "Rakitic",
                "Ocampos",
                "En-Nesyri",
                "Suso",
              ],
            },
          },
        ],
      });
    }, 1500);
  });
}

async function fetchMatches() {
  const loadingIndicator = document.getElementById("loadingIndicator");
  const scheduleGrid = document.getElementById("scheduleGrid");

  loadingIndicator.style.display = "block";
  scheduleGrid.style.opacity = "0.5";

  try {
    const response = await simulateAPICall();
    allMatches = response.matches;
    updateLastUpdateTime();
    filterMatches();
    console.log("✅ Data berhasil diambil:", allMatches);
  } catch (error) {
    console.error("❌ Error:", error);
  } finally {
    loadingIndicator.style.display = "none";
    scheduleGrid.style.opacity = "1";
  }
}

function updateLastUpdateTime() {
  const now = new Date();
  document.getElementById("lastUpdate").textContent =
    now.toLocaleTimeString("id-ID");
}

function renderMatches(matches) {
  const grid = document.getElementById("scheduleGrid");

  if (matches.length === 0) {
    grid.innerHTML = '<div class="loading">Tidak ada pertandingan</div>';
    return;
  }

  grid.innerHTML = matches
    .map(
      (match) => `
            <div class="match-card" onclick="showMatchDetail(${match.id})">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; padding-bottom: 15px; border-bottom: 2px solid #f0f0f0;">
                    <span class="league-badge">${match.league}</span>
                    <span style="color: #666; font-size: 14px;">📅 ${
                      match.date
                    } | ⏰ ${match.time}</span>
                </div>
                <div style="display: flex; justify-content: space-between; align-items: center; gap: 20px;">
                    <div style="flex: 1; text-align: center;">
                        <img src="${match.homeLogo}" alt="${
        match.homeTeam
      }" class="team-logo">
                        <div style="font-size: 18px; font-weight: 700; color: #333; margin-top: 10px;">${
                          match.homeTeam
                        }</div>
                        ${
                          match.status !== "upcoming"
                            ? `<div style="font-size: 28px; font-weight: 700; color: #667eea; margin-top: 5px;">${match.homeScore}</div>`
                            : ""
                        }
                    </div>
                    <div style="font-size: 20px; font-weight: 700; color: #667eea;">VS</div>
                    <div style="flex: 1; text-align: center;">
                        <img src="${match.awayLogo}" alt="${
        match.awayTeam
      }" class="team-logo">
                        <div style="font-size: 18px; font-weight: 700; color: #333; margin-top: 10px;">${
                          match.awayTeam
                        }</div>
                        ${
                          match.status !== "upcoming"
                            ? `<div style="font-size: 28px; font-weight: 700; color: #667eea; margin-top: 5px;">${match.awayScore}</div>`
                            : ""
                        }
                    </div>
                </div>
                <div style="display: flex; justify-content: space-between; margin-top: 20px; padding-top: 15px; border-top: 2px solid #f0f0f0; font-size: 14px; color: #666;">
                    <span>📍 ${match.venue}</span>
                    <span class="status ${match.status}">${
        match.status === "live"
          ? "🔴 LIVE"
          : match.status === "upcoming"
          ? "Akan Datang"
          : "Selesai"
      }</span>
                </div>
            </div>
        `
    )
    .join("");
}

function showMatchDetail(matchId) {
  const match = allMatches.find((m) => m.id === matchId);
  if (!match) return;

  console.log("Showing detail for:", match);

  document.getElementById(
    "modalTitle"
  ).textContent = `${match.homeTeam} vs ${match.awayTeam}`;

  let html = `
            <div style="text-align: center; margin-bottom: 30px;">
                <div style="display: flex; justify-content: center; align-items: center; gap: 30px; margin-bottom: 20px;">
                    <div>
                        <img src="${match.homeLogo}" alt="${
    match.homeTeam
  }" style="width: 80px; height: 80px; object-fit: contain;">
                        <h3 style="margin-top: 10px;">${match.homeTeam}</h3>
                        ${
                          match.status !== "upcoming"
                            ? `<div style="font-size: 48px; font-weight: 700; color: #667eea;">${match.homeScore}</div>`
                            : ""
                        }
                    </div>
                    <div style="font-size: 32px; color: #999;">VS</div>
                    <div>
                        <img src="${match.awayLogo}" alt="${
    match.awayTeam
  }" style="width: 80px; height: 80px; object-fit: contain;">
                        <h3 style="margin-top: 10px;">${match.awayTeam}</h3>
                        ${
                          match.status !== "upcoming"
                            ? `<div style="font-size: 48px; font-weight: 700; color: #667eea;">${match.awayScore}</div>`
                            : ""
                        }
                    </div>
                </div>
                <p><strong>${match.league}</strong></p>
                <p>📍 ${match.venue} | ⏰ ${match.time}</p>
            </div>
        `;

  if (match.stats && match.status !== "upcoming") {
    html += `
                <div class="stats-section">
                    <div class="stats-title">📊 Statistik Pertandingan</div>
                    ${createStatBar(
                      "Penguasaan Bola",
                      match.stats.possession.home,
                      match.stats.possession.away,
                      "%"
                    )}
                    ${createStatBar(
                      "Total Tembakan",
                      match.stats.shots.home,
                      match.stats.shots.away,
                      ""
                    )}
                    ${createStatBar(
                      "Tembakan Tepat Sasaran",
                      match.stats.shotsOnTarget.home,
                      match.stats.shotsOnTarget.away,
                      ""
                    )}
                    ${createStatBar(
                      "Tendangan Sudut",
                      match.stats.corners.home,
                      match.stats.corners.away,
                      ""
                    )}
                    ${createStatBar(
                      "Pelanggaran",
                      match.stats.fouls.home,
                      match.stats.fouls.away,
                      ""
                    )}
                </div>
            `;
  }

  if (match.events && match.events.length > 0) {
    html += `
                <div class="stats-section">
                    <div class="stats-title">⚡ Timeline Pertandingan</div>
                    <div class="event-timeline">
                        ${match.events
                          .map(
                            (event) => `
                            <div class="event-item">
                                <div class="event-time">${event.time}</div>
                                <div style="font-size: 20px;">${event.type}</div>
                                <div style="flex: 1;">${event.description}</div>
                            </div>
                        `
                          )
                          .join("")}
                    </div>
                </div>
            `;
  }

  if (match.lineup) {
    html += `
                <div class="stats-section">
                    <div class="stats-title">👥 Susunan Pemain</div>
                    <div class="lineup-grid">
                        <div class="lineup-team">
                            <h4>${match.homeTeam}</h4>
                            <ul class="player-list">
                                ${match.lineup.home
                                  .map((player) => `<li>${player}</li>`)
                                  .join("")}
                            </ul>
                        </div>
                        <div class="lineup-team">
                            <h4>${match.awayTeam}</h4>
                            <ul class="player-list">
                                ${match.lineup.away
                                  .map((player) => `<li>${player}</li>`)
                                  .join("")}
                            </ul>
                        </div>
                    </div>
                </div>
            `;
  }

  document.getElementById("modalBody").innerHTML = html;
  modal.style.display = "block";
}

function createStatBar(label, homeValue, awayValue, unit) {
  const total = homeValue + awayValue;
  const homePercent = total > 0 ? (homeValue / total) * 100 : 50;

  return `
            <div class="stat-bar">
                <div class="stat-label">${label}</div>
                <div class="stat-value">${homeValue}${unit}</div>
                <div class="stat-progress">
                    <div class="stat-fill" style="width: ${homePercent}%"></div>
                </div>
                <div class="stat-value">${awayValue}${unit}</div>
            </div>
        `;
}

function filterMatches() {
  const league = document.getElementById("leagueFilter").value;
  const date = document.getElementById("dateFilter").value;
  const status = document.getElementById("statusFilter").value;

  let filtered = allMatches;

  if (league !== "all") {
    filtered = filtered.filter((m) => m.league === league);
  }

  if (date) {
    filtered = filtered.filter((m) => m.date === date);
  }

  if (status !== "all") {
    filtered = filtered.filter((m) => m.status === status);
  }

  renderMatches(filtered);
}

document
  .getElementById("leagueFilter")
  .addEventListener("change", filterMatches);
document.getElementById("dateFilter").addEventListener("change", filterMatches);
document
  .getElementById("statusFilter")
  .addEventListener("change", filterMatches);

// Initial load
fetchMatches();

// Update live scores
setInterval(() => {
  allMatches.forEach((match) => {
    if (match.status === "live" && Math.random() > 0.85) {
      if (Math.random() > 0.5) {
        match.homeScore++;
      } else {
        match.awayScore++;
      }
      match.minute = Math.min(match.minute + 1, 90);
    }
  });
  filterMatches();
}, 10000);
