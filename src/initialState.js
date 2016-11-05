let mapSettings = [
  { type: 'choice', name: '__mappreset', text: 'Preset', choices: [] },
  {
    type: 'choice', name: '__gameMode', text: 'Game mode', choices: [
      { name: 'Cooperative', value: 'coop' },
      { name: "Deathmatch", value: 'deathmatch' },
      { name: "CTF", value: 'ctf' }
    ]
  },
  { type: 'boolean', name: 'forcewater', text: 'Force water' },
  { type: 'boolean', name: 'sv_voodoo_spawns', text: 'Enable limited voodoo doll support' },
  { type: 'boolean', name: 'var_pushers', text: 'Enable wind (BOOM push/pull effects)' },
  { type: 'boolean', name: 'unknown1', text: 'Old style CTF compatibility mode' },
  { type: 'boolean', name: 'SV_NoJump', text: 'Allow jumping (but abide MAPINFO)', displayInverted: true },
  { type: 'boolean', name: 'SV_NoFreelook', text: 'Allow freelook', displayInverted: true },
  { type: 'boolean', name: 'SV_NoCrouch', text: 'Allow crouch (but abide MAPINFO)', displayInverted: true },
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

  //DmFlags
  { type: 'boolean', name: 'SV_NoHealth', displayInverted: true , text: 'Spawn health (DM)' },
  { type: 'boolean', name: 'SV_NoItems', displayInverted: true , text: 'Spawn powerups (DM)' },
  { type: 'boolean', name: 'SV_WeaponStay', text: 'Weapon stay (DM)' },
  { type: 'choice', name: '__fallingDamage', text: 'Falling damage formula', choices: [
      { value: 'default', name: 'Default' },
      { value: 'zdoom', name: 'ZDoom' },
      { value: 'hexen', name: 'Hexen' },
      { value: 'strife', name: 'Strife' }
  ] },
  { type: 'boolean', name: 'SV_NoExit', text: 'Kill on exit (DM)' },
  { type: 'boolean', name: 'SV_SameLevel', text: 'Advance map on exit (DM)', displayInverted: true },
  { type: 'boolean', name: 'SV_SpawnFarthest', text: 'Spawn farthest (DM)' },
  { type: 'boolean', name: 'SV_NoArmor', text: 'Spawn armor (DM)', displayInverted: true },
  { type: 'boolean', name: 'SV_InfiniteAmmo', text: 'Infinite ammo' },
  { type: 'boolean', name: 'SV_NoMonsters', text: 'Spawn monsters', displayInverted: true },
  { type: 'boolean', name: 'SV_MonsterRespawn', text: 'Respawn monsters' },
  { type: 'boolean', name: 'SV_ItemRespawn', text: 'Respawn items' },
  { type: 'boolean', name: 'SV_FastMonsters', text: 'Fast monsters' },
  { type: 'boolean', name: 'SV_RespawnSuper', text: "Respawn 'Mega' items" },
  { type: 'boolean', name: 'SV_NoFOV', text: "Allow custom FOV", displayInverted: true },
  { type: 'boolean', name: 'SV_NoWeaponSpawn', text: "Spawm multiplayer weapons (COOP)", displayInverted: true },
  { type: 'boolean', name: 'SV_Coop_LoseInventory', text: 'Lose inventory when killed (COOP)' },
  { type: 'boolean', name: 'SV_Coop_LoseKeys', text: 'Lose keys when killed (COOP)' },
  { type: 'boolean', name: 'SV_Coop_LoseWeapons', text: 'Lose weapons when killed (COOP)' },
  { type: 'boolean', name: 'SV_Coop_LoseArmor', text: 'Lose armor when killed (COOP)' },
  { type: 'boolean', name: 'SV_Coop_LosePowerups', text: 'Lose powerups when killed (COOP)' },
  { type: 'boolean', name: 'SV_Coop_LoseAmmo', text: 'Lose ammo when killed (COOP)' },
  { type: 'boolean', name: 'SV_Coop_HalveAmmo', text: 'Halve ammo when killed (COOP)' },
  { type: 'boolean', name: 'SV_Coop_LoseKeys', text: 'Lose keys when killed (COOP)' },
  { type: 'boolean', name: 'SV_Coop_LoseKeys', text: 'Lose keys when killed (COOP)' },
  { type: 'boolean', name: 'SV_Coop_LoseKeys', text: 'Lose keys when killed (COOP)' },
  { type: 'boolean', name: 'SV_AllowJump', text: 'Allow jumping (override MAPINFO)' },
  { type: 'boolean', name: 'SV_AllowCrouch', text: 'Allow crouch (override MAPINFO)' },
  { type: 'boolean', name: 'unknown10', text: 'Spawn runes' },
  { type: 'boolean', name: 'unknown11', text: 'Allow crosshair' },
  { type: 'boolean', name: 'unknown12', text: 'Old style thrusting' },
  { type: 'boolean', name: 'unknown13', text: 'Keys stay in team modes' },
  { type: 'boolean', name: 'unknown14', text: 'Hide player countries' },
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
  { type: 'boolean', name: 'unknown36', text: 'Show target names' },
  { type: 'boolean', name: 'sv_teamautoaim', text: 'Exclude teammates from autoaim' },
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