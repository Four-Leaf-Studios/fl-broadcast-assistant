export const classes = {
  app: `
    position: relative;
    width: 1920px;
    height: 1080px;
    `,

  // TargetBoost
  target_boost_box: `
    font-size: 3rem;
    font-weight: bold;
    position: absolute;
    bottom: 0px;
    right: 0px;
    width: 200px;
    height: 200px;
    margin-bottom: 50px;
    margin-right: 50px;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    overflow: hidden;
    `,

  target_boost_box_left: `
    border: 5px solid #07132d;
    background: #07132d;
    `,

  target_boost_box_right: `
    border: 5px solid #11151a;
    background: #11151a;
    `,

  target_boost_container: `
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    `,

  target_boost_container_left: `
    background: #07132d;
    mask: conic-gradient(#060f25 270deg, transparent 270deg);
    transform: rotate(180deg);
    `,
  target_boost_container_right: `
    background: #11151a;
    mask: conic-gradient(#0e1218 270deg, transparent 270deg);
    transform: rotate(180deg);
      `,
  target_boost_inner: `
    position: absolute;
    margin: auto;
    width: 80%;
    height: 80%;
    border-radius: 50%;
    z-index: 50;`,
  target_boost_inner_left: `background: #07132d;`,
  target_boost_inner_right: `background: #11151a;`,
  target_boost_meter_bar: `
    position: absolute;
    height: 100%;
    width: 100%;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all .5s ease-in-out;
    `,

  target_boost_meter_bar_left: ``,
  target_boost_meter_bar_right: ``,
  target_boost_meter_svg: `
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 500;
    display: flex;
    justify-content: center;
    align-items: center;
    `,
  target_boost_meter_svg_circle: `
    stroke-dasharray: 4 25%;
    stroke-width: 41;
    stroke-dashoffset: 18;
    fill: transparent;
    `,
  target_boost_meter_svg_circle_left: `stroke: #07132d;`,
  target_boost_meter_svg_circle_right: `stroke: #11151a;`,
  target_boost_value: `        
    position: absolute;
    z-index: 500;
    `,

  // Player Card
  player_card_box: `
    position: absolute;
    bottom: 0px;
    width: 672px;
    height: 54.217px;
    flex-shrink: 0;
    margin-left: 52px;
    margin-bottom: 34px;
    display: flex;
    `,
  player_card_stat_box: `
    position: absolute;
    right: 0px;
    bottom: 0px;
    width: 363.893px;
    height: 78.522px;
    flex-shrink: 0;
    margin-bottom: 7.48px;
    background: #1D1D21;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 6.4px;
    `,
  player_card_stat_box_stat: `
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #FFF;
    text-align: center;
    font-family: Lato;
    font-size: 24px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    `,
  player_card_name: `
    color: #FFF;
    font-family: Lato;
    font-size: 24px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    text-transform: uppercase;
    `,
  player_card_boost_box: `
    z-index: 20;
    position: relative;
    width: 258.329px;
    height: 100%;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: end;
    margin-left: 29.18px;
    margin-right: 20.6px;
  
    color: #FFF;
    font-family: Lato;
    font-size: 20px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    text-transform: uppercase;
    gap: 2px;
    `,
  player_photo: `
    border-radius: 5%;
    position: absolute;
    top: -155px;
    left: 0px;
    height: 150px;
    width: 150px;
    object-fit: contain;`,

  // Team Player Boost
  team_boost_box: `
    position: absolute;
    top: 49px;
    display: flex;
    width: fit-content;
    flex-direction: column;
    justify-content: start;
    gap: 5px;
    `,
  left_team_boost_box: `
    align-items: start;
    left: -10px;`,
  right_team_boost_box: `
    right: 0px;
    align-items: end;`,

  // Player Boost
  player_boost_box: `
    position: relative;
    display: flex;
    justify-content: start;
    align-items: center;
    min-width: 347px;
    height: 46px;
    border-radius: 5px;
    background: #1D1D21;
    padding-left: 27.8px;
    padding-right: 13.2px;
    padding-bottom: 8px;
    transition: width 4s ease-in-out;`,
  player_boost_box_container: `      
    min-width: 347px;
    height: 100%;
    order: 1;`,
  player_boost_text: `
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: end;`,
  name: `
    color: #FFF;
    font-family: Lato;
    font-size: 24px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    padding-top: 2px;
    text-transform: uppercase;`,
  left_name: `
    order: 1;`,
  right_name: `
    order: 0;`,

  stat_box: `      
    width: 100px;
    display: flex;
    align-items: center;
    z-index: 500;`,
  left_stat_box: `
    order: 3;
    justify-content: end;`,
  right_stat_box: `
    order: 0;
    justify-content: start;`,
  stat_icon: `
    width: 80px;
    height: 80px;
    object-fit: contain;
    position: absolute;`,
  boost_bar_amount: ``,

  // Boost
  boost_box: `
    width: 100%;
    height: 9px;
    flex-shrink: 0;
    border-radius: 2px;
    display: flex;
    `,
  left_boost_box: `
    justify-content: start;`,
  right_boost_box: `
    justify-content: end;
    `,
  boost_bar: `
    height: 100%;
    flex-shrink: 0;
    border-radius: 2px;
    transition: width 1s ease; `,

  // Replay Scene
  replay_box: `
    position: absolute;
    margin: auto;
    left: 0px;
    right: 0px;
    z-index: 500;
    width: 449px;
    height: 101px;
    background-color: #1D1D21;
    clip-path: polygon(0 0, 100% 0, 85% 100%, 15% 100%);
  
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    `,
  replay_text: `
    color: rgb(255, 79, 79);
    text-align: center;
    font-family: Lato;
    font-size: 48px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;`,

  dot: `
    width: 20px;
    height: 20px;
    background-color: rgb(255, 79, 79);
    border-radius: 50%;
    clip-path: circle(50% at 50% 50%);`,

  // Between Game Scoreboard
  between_game_scoreboard: `
    padding-top: 25px;
    position: absolute;
    width: 100%;
    height: fit-content;
    top: 0px;
    margin: auto;
  
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: xx-large;
    font-size: xx-large;
    gap: 5%`,
  between_game_team_box: `
    flex: 3;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5%;`,

  between_game_series_box: `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
    white-space: nowrap; `,
  between_game_series_score: `
    color: #FFF;
    text-align: center;
    font-family: Lato;
    font-size: 120px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    flex: 1;`,
  between_game_team_name: `
    color: #FFF;
    text-align: center;
    font-family: Lato;
    font-size: 80px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    flex: 1;
    `,
  team_logo: `
    width: 150px;
    height: 150px;
    flex-shrink: 0;`,

  // Between Game Player
  between_game_player_box: `
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    justify-content: space-between;
  
    color: #FFF;
    text-align: right;
    font-family: Lato;
    font-size: 25px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    text-transform: uppercase;
    padding-left: 5px;`,
  right_between_game_player_box: `
    flex-direction: row;
    padding-left: 0px;
    padding-right: 5px;`,
  labels: `
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    border-bottom: 1px solid white;
    padding-bottom: 16px;
    gap: 35px;`,
  right_labels: `
    flex-direction: row;`,
  label: `
    width: 65px;
    text-align: center;`,
  between_game_team_player_stats: `
    border-bottom: 0px;`,
  between_game_team_stats_player_name: `
    order: 1;`,
  between_game_player_photo: `
    order: 2;
    height: 110px;
    object-fit: cover;
    padding: 10px;`,

  // Between Games Lobby
  between_game_box_background: `
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: -5;
    background-image: url("https://cdn.discordapp.com/attachments/865315347732758558/1158842710904549416/Hexagons_1.png?ex=651db7e0&is=651c6660&hm=1795958414e197a6f732791d221558757ca83a63e83ced007c6441d04c4630fe&");`,
  between_game_box: `
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    z-index: -10;`,

  // Between Games Stats
  between_game_stat_box: `
    position: relative;
    align-self: flex-end;
    
    bottom: 0px;
    
    height: 70%;
    width: 100%;
    z-index: -5;
  
    display: flex;
    justify-content: center;
    align-items: start;
  
    color: white;`,
  between_game_stat_container: `
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 33px;
    `,
  divider: `
    width: 1px;
    height: 100%;
    background: white;`,

  // Between Game Team Stats
  between_game_team_stats: `
    flex: 1;
    display: flex;
    flex-direction: column;
    height: 100%;
    padding-top: 20px;`,

  // Scoreboard
  scoreboard: `
    position: absolute;
    width: 785px;
    height: 100px;
    margin: auto;
    left: 0px;
    right: 0px;
    top: 0px;
    margin: auto;
      `,
  time_box: `
    position: absolute;
    margin: auto;
    left: 0px;
    right: 0px;
    width: 225px;
    height: 100px;
    background-color: #1D1D21;
    clip-path: polygon(0 0, 100% 0, 85% 100%, 15% 100%);
    z-index: 50;
    `,
  time: `
    display: flex;
    width: 225px;
    height: 100px;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
  
    color: #F9F9F9;
    text-align: center;
    font-family: Lato;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    `,
  team_box_name: `
    position: absolute;
    bottom: -29px;
    z-index: 0;
  
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 2px;
    padding-top: 2px;
  
    color: #FFF;
    text-align: center;
    font-family: Lato;
    font-size: 24px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    border-radius: 0px 0px 5px 5px;
    background: #1D1D21;`,
  left_team_box_name: `left: 66px;`,
  right_team_box_name: `right: 66px`,

  //  Scoreboard Team Box
  team_box: `
    position: absolute;
    width: fit-content;
    height: 100px;
    flex-shrink: 0;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 5px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    z-index: 0;
    display: flex;
    align-items: center;
    gap: 10px;
    z-index: 30;
    `,
  left_team_box: `
    left: 0;
    justify-content: end;`,
  right_team_box: `
    right: 0;
    justify-content: start;
    `,

  team_box_container: `
    width: 336px;
    height: 79px;
    flex-shrink: 0;
    border-radius: 5px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    display: flex;
    align-items: center;
    gap: 60px;
    overflow: hidden;
    `,

  left_team_box_container: `
    justify-content: start;`,
  right_team_box_container: `
    justify-content: end;
    `,
  team_box_score: `
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
  
    color: #FFF;
    text-align: center;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-family: Lato;
    font-size: 60px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;`,
  team_box_logo: `
    width: 98px;
    height: 95%;
    flex-shrink: 0;
    border-radius: 5px;`,
  left_team_box_logo: ``,
  right_team_box_logo: `
    order: 1;
    `,

  // Scoreboard Series Box
  team_series_box: `
    width: 45px;
    height: 79px;
    flex-shrink: 0;
    border-radius: 5px;
    left: 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 9px;
    background: rgba(5, 0, 0, 0.53);
    `,

  left_team_series_box: `
    order: 0;`,
  right_team_series_box: `
    order: 1;`,

  team_series_point: `
    width: 80%;
    max-height: 11px;
    flex: 1;
    flex-shrink: 0;
    border-radius: 5px;
    background: #FFF;
    order: 2;
    `,
  team_series_point_empty: `
    order: 1;
    border-radius: 5px;
    background: rgba(217, 217, 217, 0.32);
    `,
};
