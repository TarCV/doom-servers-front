let mapSettings = [
  { type: 'choice', name: '__mappreset', text: 'Preset', choices: [] },
  {
    type: 'choice', name: 'gametype1', text: 'Game mode', choices: [
      { name: 'Cooperative', value: 0 },
      { name: "Deathmatch", value: 1 },
      { name: "CTF", value: 2 }
    ]
  },
  { type: 'boolean', name: 'forcewater', text: 'Force water' },
  { type: 'boolean', name: 'sv_voodoo_spawns', text: 'Enable limited voodoo doll support' },
  { type: 'boolean', name: 'var_pushers', text: 'Enable wind (BOOM push/pull effects)' },
  { type: 'boolean', name: 'unknown1', text: 'Old style CTF compatibility mode' },
  { type: 'boolean', name: 'unknown2', text: 'Allow jumping' },
  { type: 'integer', name: 'sv_splashfactor', text: 'Splash factor', value: '1' },
  { type: 'integer', name: 'maxlostsouls', text: 'Maximum lost souls allowed to spawn', value: '20' },
  { type: 'boolean', name: 'var_friction', text: 'Enable ice (BOOM friction effects)' },
  { type: 'boolean', name: 'unknown3', text: 'Infinitely tall actors' }
]

let gameplaySettings = [
  { type: 'choice', name: 'logicpreset', text: 'Preset', choices: [] },
  {
    type: 'choice', name: 'skill', text: 'Skill (affects item spawn, ammo and&nbsp; monster settings)', value: 2, choices: [
      { name: "I'm Too Young To Die", value: 0 },
      { name: "Hey, Not Too Rough", value: 1 },
      { name: "Hurt Me Plenty", value: 2 },
      { name: "Ultra-Violence", value: 3 },
      { name: "Nightmare!", value: 4 }
    ]
  },
  { type: 'boolean', name: 'gametype2', text: 'TDM/Survival' },
  { type: 'integer', name: 'killlimit', text: 'Kill limit (COOP)', value: '0' },
  { type: 'integer', name: 'maxlives', text: 'Player lives (SURVIVAL)', value: '0' },
  { type: 'integer', name: 'fraglimit', text: 'Frag limit', value: '0' },
  { type: 'integer', name: 'timelimit', text: 'Time limit', value: '0' },
  { type: 'boolean', name: 'overtime', text: 'Overtime on tie' },
  { type: 'integer', name: 'minplayers', text: 'Minimal players required (missing will be replaced by bots)', value: '0' },
  { type: 'boolean', name: 'removebotswhenhumans', text: 'Remove all bots when a human enters' },
  { type: 'integer', name: 'maxplayers', text: 'Maximum active players', value: '16' },
  { type: 'integer', name: 'maxteams', text: 'Maximum active teams', value: '4' },
  { type: 'integer', name: 'maxplayersperteam', text: 'Maximum players per team', value: '0' },
  { type: 'integer', name: 'teamscorelimit', text: 'Team score limit', value: '0' },
  { type: 'integer', name: 'teamdamage', text: 'Friendly fire factor', value: '0' },
  { type: 'integer', name: 'sv_gravity1', text: 'Gravity', value: '1.0' },
  { type: 'integer', name: 'sv_aircontrol', text: 'Air control', value: '0' },
  { type: 'integer', name: 'sv_deathlimit', text: 'Seconds allowed to stay dead', value: '180' },
  {
    type: 'choice', name: 'sv_forcerespawn', text: 'If a player remained dead too long (DM)', value: 1, choices: [
      { value: 0, name: 'make spectator' },
      { value: 1, name: 'force respawn' }
    ]
  },
  { type: 'boolean', name:   'unknown37', text: 'Spawn health (DM)' },
  { type: 'boolean', name: 'unknown38', text: 'Spawn powerups (DM)' },
  { type: 'boolean', name: 'unknown39', text: 'Weapon stay (DM)' },
  { type: 'boolean', name: 'unknown40', text: 'Kill on exit (DM)' },
  { type: 'boolean', name: 'unknown41', text: 'Falling damage as in ZDoom' },
  { type: 'boolean', name: 'unknown42', text: 'Falling damage as in Hexen' },
  { type: 'boolean', name: 'unknown43', text: 'Advance map on exit (DM)' },
  { type: 'boolean', name: 'unknown44', text: 'Spawn farthest (DM)' },
  { type: 'boolean', name: 'unknown1', text: 'Spawn armor (DM)' },
  { type: 'boolean', name: 'unknown2', text: 'Allow exit (DM)' },
  { type: 'boolean', name: 'unknown3', text: 'Infinite ammo' },
  { type: 'boolean', name: 'unknown4', text: 'Spawn monsters' },
  { type: 'boolean', name: 'unknown5', text: 'Respawn monsters' },
  { type: 'boolean', name: 'unknown6', text: 'Respawn items' },
  { type: 'boolean', name: 'unknown7', text: 'Fast monsters' },
  { type: 'boolean', name: 'unknown8', text: 'Allow freelook' },
  { type: 'boolean', name: 'unknown9', text: "Respawn 'Mega' items" },
  { type: 'boolean', name: 'unknown10', text: 'Spawn spheres' },
  { type: 'boolean', name: 'unknown11', text: 'Allow crosshair' },
  { type: 'boolean', name: 'unknown12', text: 'Old style thrusting' },
  { type: 'boolean', name: 'unknown13', text: 'Keys stay in team modes' },
  { type: 'boolean', name: 'unknown14', text: 'Hide player countries' },
  { type: 'boolean', name: 'sv_teamautoaim', text: 'Exclude teammates from autoaim' },
  { type: 'boolean', name: 'unknown15', text: 'Missiles can teleport' },
  { type: 'boolean', name: 'unknown16', text: 'Players drop weapons when they die' },
  { type: 'boolean', name: 'unknown17', text: 'Spawn where died (COOP)' },
  { type: 'boolean', name: 'unknown18', text: 'Respawn barrels' },
  { type: 'boolean', name: 'unknown19', text: 'Player spawn protection (DM)' },
  { type: 'boolean', name: 'unknown20', text: 'Nice weapons (COOP)' },
  { type: 'boolean', name: 'unknown21', text: 'Keep keys' },
  { type: 'boolean', name: 'unknown22', text: 'Double monsters strength' },
  { type: 'boolean', name: 'unknown23', text: 'Double monsters damage' },
  { type: 'boolean', name: 'unknown24', text: 'Classic pickup sounds' },
  { type: 'boolean', name: 'unknown25', text: 'Classic sound limit' },
  { type: 'boolean', name: 'unknown26', text: 'Classic wallrunning' },
  { type: 'boolean', name: 'unknown27', text: 'Classic sound cutoff' },
  { type: 'boolean', name: 'unknown28', text: 'Classic movement' },
  { type: 'boolean', name: 'unknown29', text: 'Classic vertical movement' },
  { type: 'boolean', name: 'unknown30', text: 'Classic weapon damage' },
  { type: 'boolean', name: 'unknown31', text: 'Enable team starts' },
  { type: 'boolean', name: 'unknown32', text: 'Spawn keys in team modes' },
  { type: 'boolean', name: 'unknown33', text: 'Assign team keys' },
  { type: 'boolean', name: 'unknown34', text: 'Vampire mode' },
  { type: 'boolean', name: 'unknown35', text: 'Instant weapon switching' },
  { type: 'boolean', name: 'unknown36', text: 'Show target names' }
]

let serverSettings = [
  { type: 'password', name: 'password', text: 'Join password (makes server private):\nWARNING:password is removed automatically when going to stand up mode'},
  { type: 'boolean', name: 'sv_randmaps', text: 'randomize map order' },
  { type: 'boolean', name: 'sv_vote_randmap', text: 'Enable random map voting' },
  { type: 'boolean', name: 'sv_vote_reset', text: 'Enable map reset voting' },
  { type: 'boolean', name: 'sv_vote_map', text: 'Enable map change voting' },
  { type: 'boolean', name: 'sv_vote_randcaps', text: 'Enable skip maps voting' },
  { type: 'boolean', name: 'sv_vote_kick', text: 'Enable kick voting' },
  { type: 'boolean', name: 'specs_dont_disturb_players', text: 'Hide spectator messages from active players' }
]

export const initialState = {
  server : {
    initialSettings: {
      map: mapSettings,
      gameplay: gameplaySettings,
      server: serverSettings
    }
  }
}