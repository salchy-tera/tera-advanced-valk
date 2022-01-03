
module.exports = function supervalk(mod) {
	
	//Variables
	let cid
	let myPosition
	let myAngle
	let enabled = true
	let distance = 1000
	let dolance = false
	let stacks = 0
	let replaced = false
	let category_enabled = false
	let runes = 0
	let just_hit_crescent = false
	let wait = false
	let bs = false
	let gun_cat = 13023
	let gun_enab = false
	let cast_gun = false
	let cast_cresc = false

	
	//TimeOuts
	let isCD_overhead_timeOut = null
	let isCD_glaive_timeOut = null
	let isCD_charge_timeOut = null
	let isCD_maelstrom_timeOut = null
	let isCD_leaping_timeOut = null
	let isCD_spinning_timeOut = null
	let isCD_titan_timeOut = null
	let isCD_ground_timeOut = null
	let isCD_dream_timeOut = null
	let isCD_crescent_timeOut = null
	let isCD_ragnarok_timeOut = null
	let isCD_bloodflower_timeOut = null
	let isCD_windslash_timeOut = null
	let isCD_runeburst_timeOut = null
	let isCD_balders_timeOut = null
	let isCD_reclamation_timeOut = null
	let isCD_backstab_timeOut = null
	let isCD_herald_timeOut = null
	let isCD_gungnir_timeOut = null
	let isCD_twilight_timeOut = null
	let isCD_godsfall_timeOut = null
	let isCD_crescent_1_timeOut = null	
	
	
	//CDs
	
	let isCD_overhead = false
	let isCD_glaive = false
	let isCD_charge = false
	let isCD_maelstrom = false
	let isCD_leaping = false
	let isCD_spinning = false
	let isCD_titan = false
	let isCD_ground = false
	let isCD_dream = false
	let isCD_crescent = false
	let isCD_ragnarok = false
	let isCD_bloodflower = false
	let isCD_windslash = false
	let isCD_runeburst = false
	let isCD_balders = false
	let isCD_reclamation = false
	let isCD_backstab = false
	let isCD_herald = false
	let isCD_gungnir = false
	let isCD_twilight = false
	let isCD_godsfall = false
	let isCD_crescent_1 = false
	


	
	//IDs
	let slash_id = 11200
	let category = 13009
	let overhead_id = 25700
	let glaive_id = 35900
	let charge_id = 46000
	let maelstrom_id = 50500
	let leaping_id = 61200
	let spinning_id = 75900
	let titan_id = 80100
	let ground_id = 96100
	let dream_id = 101100
	let crescent_id = 110400
	let ragnarok_id = 120100
	let bloodflower_id = 131100
	let windslash_id = 151100
	let runeburst_id = 161200
	let balders_id = 170100
	let reclamation_id = 190100
	let backstab_id = 205800
	let herald_id = 210100
	let gungnir_id = 230100
	let twilight_0_id = 240100,
		twilight_1_id = 240101,
		twilight_2_id = 240102,
		twilight_3_id = 240103,
		twilight_4_id = 240104
		
	let godsfall_id = 250100
	
	
	//Boss
	let bossid
	let bossloc
	let bossw
	let monsters = []
	let block_hit = false

	
	mod.command.add('valk', () => {
		enabled = !enabled
		mod.command.message(`Salchy's valk mod is now ${(enabled) ? 'en' : 'dis'}abled.`)
	})
	
	mod.hook('S_LOGIN', 14, (event) => {
		cid = event.gameId
	})
	
	mod.hook('S_WEAK_POINT', 1, (event) => {
		runes = event.runemarksAdded
	})	
	
	mod.hook('S_SKILL_CATEGORY', 4, event => {
		if(!enabled) return
		if(mod.game.me.class !== 'glaiver') return
		if(event.category==category) {
			category_enabled = event.enabled
		}
		if(event.category==gun_cat) {
			gun_enab = event.enabled
		}		
		
	})
	
	mod.hook('S_START_COOLTIME_SKILL', 3, {order: -999999}, event => {
		if(!enabled) return
		if(mod.game.me.class !== 'glaiver') return
		if(event.skill.id==overhead_id) {
			clearTimeout(isCD_overhead_timeOut)
			isCD_overhead = true
			isCD_overhead_timeOut = setTimeout(function () {
				isCD_overhead = false
			}, event.cooldown)
		}
		if(event.skill.id==glaive_id) {
			clearTimeout(isCD_glaive_timeOut)
			isCD_glaive = true
			isCD_glaive_timeOut = setTimeout(function () {
				isCD_glaive = false
			}, event.cooldown)
		}
		if(event.skill.id==charge_id) {
			clearTimeout(isCD_charge_timeOut)
			isCD_charge = true
			isCD_charge_timeOut = setTimeout(function () {
				isCD_charge = false
			}, event.cooldown)
		}		
		if(event.skill.id==maelstrom_id) {
			clearTimeout(isCD_maelstrom_timeOut)
			isCD_maelstrom = true
			isCD_maelstrom_timeOut = setTimeout(function () {
				isCD_maelstrom = false
			}, event.cooldown)
		}
		if(event.skill.id==leaping_id) {
			clearTimeout(isCD_leaping_timeOut)
			isCD_leaping = true
			isCD_leaping_timeOut = setTimeout(function () {
				isCD_leaping = false
			}, event.cooldown)
		}
		if(event.skill.id==spinning_id) {
			clearTimeout(isCD_spinning_timeOut)
			isCD_spinning = true
			isCD_spinning_timeOut = setTimeout(function () {
				isCD_spinning = false
			}, event.cooldown)
		}
		if(event.skill.id==titan_id) {
			clearTimeout(isCD_titan_timeOut)
			isCD_titan = true
			isCD_titan_timeOut = setTimeout(function () {
				isCD_titan = false
			}, event.cooldown)
		}
		if(event.skill.id==ground_id) {
			clearTimeout(isCD_ground_timeOut)
			isCD_ground = true
			isCD_ground_timeOut = setTimeout(function () {
				isCD_ground = false
			}, event.cooldown)
		}
		if(event.skill.id==dream_id) {
			clearTimeout(isCD_dream_timeOut)
			isCD_dream = true
			isCD_dream_timeOut = setTimeout(function () {
				isCD_dream = false
			}, event.cooldown)
		}
		if(event.skill.id==crescent_id) {
			clearTimeout(isCD_crescent_timeOut)
			isCD_crescent = true
			isCD_crescent_timeOut = setTimeout(function () {
				isCD_crescent = false
			}, event.cooldown)
		}
		if(event.skill.id==crescent_id + 1) {
			clearTimeout(isCD_crescent_1_timeOut)
			isCD_crescent_1 = true
			isCD_crescent_1_timeOut = setTimeout(function () {
				isCD_crescent_1 = false
			}, event.cooldown)
		}		
		
		if(event.skill.id==ragnarok_id) {
			clearTimeout(isCD_ragnarok_timeOut)
			isCD_ragnarok = true
			isCD_ragnarok_timeOut = setTimeout(function () {
				isCD_ragnarok = false
			}, event.cooldown)
		}
		if(event.skill.id==bloodflower_id) {
			clearTimeout(isCD_bloodflower_timeOut)
			isCD_bloodflower = true
			isCD_bloodflower_timeOut = setTimeout(function () {
				isCD_bloodflower = false
			}, event.cooldown)
		}
		if(event.skill.id==windslash_id) {
			clearTimeout(isCD_windslash_timeOut)
			isCD_windslash = true
			isCD_windslash_timeOut = setTimeout(function () {
				isCD_windslash = false
			}, event.cooldown)
		}		
		if(event.skill.id==runeburst_id) {
			clearTimeout(isCD_runeburst_timeOut)
			isCD_runeburst = true
			isCD_runeburst_timeOut = setTimeout(function () {
				isCD_runeburst = false
			}, event.cooldown)
		}
		if(event.skill.id==balders_id) {
			clearTimeout(isCD_balders_timeOut)
			isCD_balders = true
			isCD_balders_timeOut = setTimeout(function () {
				isCD_balders = false
			}, event.cooldown)
		}
		if(event.skill.id==reclamation_id) {
			clearTimeout(isCD_reclamation_timeOut)
			isCD_reclamation = true
			isCD_reclamation_timeOut = setTimeout(function () {
				isCD_reclamation = false
			}, event.cooldown)
		}
		if(event.skill.id==backstab_id) {
			clearTimeout(isCD_backstab_timeOut)
			isCD_backstab = true
			isCD_backstab_timeOut = setTimeout(function () {
				isCD_backstab = false
			}, event.cooldown)
		}
		if(event.skill.id==herald_id) {
			clearTimeout(isCD_herald_timeOut)
			isCD_herald = true
			isCD_herald_timeOut = setTimeout(function () {
				isCD_herald = false
			}, event.cooldown)
		}
		if(event.skill.id==gungnir_id) {
			clearTimeout(isCD_gungnir_timeOut)
			isCD_gungnir = true
			isCD_gungnir_timeOut = setTimeout(function () {
				isCD_gungnir = false
			}, event.cooldown)
		}
		if(event.skill.id==twilight_0_id) {
			clearTimeout(isCD_twilight_timeOut)
			isCD_twilight = true
			isCD_twilight_timeOut = setTimeout(function () {
				isCD_twilight = false
			}, event.cooldown)
		}
		if(event.skill.id==godsfall_id) {
			clearTimeout(isCD_godsfall_timeOut)
			isCD_godsfall = true
			isCD_godsfall_timeOut = setTimeout(function () {
				isCD_godsfall = false
			}, event.cooldown)
		}		
		
	})
	mod.hook('S_EACH_SKILL_RESULT', 15, event => {
		if(!enabled) return
		if(mod.game.me.class !== 'glaiver') return		
	})	

	mod.hook('S_SPAWN_NPC', 12, event => {
		if(!enabled) return
		if(mod.game.me.class !== 'glaiver') return		
		monsters.push({ gameId: event.gameId, loc: event.loc, w: event.w })
	})
	mod.hook('S_BOSS_GAGE_INFO', 3, event => {
		if(!enabled) return
		if(mod.game.me.class !== 'glaiver') return
		if(bossid && bossid == event.id) return
		bossid = event.id
		mod.send("S_CUSTOM_STYLE_SYSTEM_MESSAGE", 1, {
			message: "Boss detected",
			style: 54
		})
		mod.send("S_PLAY_SOUND", 1, {
			SoundID: 2023
		})		
		let monster = monsters.find(m => m.gameId === event.id)
		if (monster) { 
			bossloc = monster.loc
			bossw = monster.w
		}		
				
		
	})

	mod.hook('S_NPC_LOCATION', 3, event => {
		if(!enabled) return
		if(mod.game.me.class !== 'glaiver') return
		let monster = monsters.find(m => m.gameId === event.gameId)
		if (monster) { 
			monster.loc = event.loc
			monster.w = event.w
		}
		if(bossid == event.gameId) { 
			bossloc = event.loc
			bossw = event.w
		}
	})
	mod.hook('S_DESPAWN_NPC', 3, event => {
		if(!enabled) return
		if(mod.game.me.class !== 'glaiver') return
		monsters = monsters.filter(m => m.gameId != event.gameId)
		if(bossid == event.gameId) { 
			bossid = null
			bossloc = null
			bossw = null
		}	
	})
	
	mod.hook('S_START_USER_PROJECTILE', 9, event => {
		if(!enabled) return
		if(mod.game.me.class !== 'glaiver') return
		block_hit = false
		if(!bossid) return
		let targets = []		
			targets.push({
				gameId: bossid
			})			
		
		if(!targets[0]) {
			block_hit = false
			return
		} else {
			block_hit = true
			mod.send('S_START_USER_PROJECTILE', 9, event)
			mod.send('C_HIT_USER_PROJECTILE', 4, {
				id: event.id,
				end: event.end,
				loc: bossloc,
				targets: targets
			})			
			return false	
		}
	})

	mod.hook('C_HIT_USER_PROJECTILE', 4, event => {
		if(!enabled) return
		if(mod.game.me.class !== 'glaiver') return		
		//if(block_hit) return false
	})	

	mod.hook('S_ACTION_STAGE', 9, event => {
		if(!enabled) return
		if(mod.game.me.class !== 'glaiver') return
		if(bossid == event.gameId) { 
			bossloc = event.loc
			bossw = event.w
		}
	})		

	mod.hook('S_ACTION_END', 5, event => {
		if(!enabled) return
		if(mod.game.me.class !== 'glaiver') return
		if(bossid == event.gameId) { 
			bossloc = event.loc
			bossw = event.w
		}
	})
	
	mod.hook('S_CANNOT_START_SKILL', 4, event => {
		if(!enabled) return
		if(mod.game.me.class !== 'glaiver') return
		if(event.skill.id==crescent_id) isCD_crescent = true
		if(event.skill.id==crescent_id + 1) isCD_crescent_1 = true
		if(event.skill.id==leaping_id + 1) isCD_leaping = true
	})			
	
	mod.hook('S_PLAYER_STAT_UPDATE', 17, event => {
		if(!enabled) return
		if(mod.game.me.class !== 'glaiver') return
	})	

	
	mod.hook('C_PLAYER_LOCATION', 5, (event) => {
		myPosition = event.loc
		myAngle = event.w
	})
	
	mod.hook('C_START_SKILL', 7, { order: -1000 }, (event) => {
		if(!enabled) return
		if(mod.game.me.class !== 'glaiver') return		
		myPosition = event.loc
		myAngle = event.w
		replaced = false
		let sInfo = getSkillInfo(event.skill.id)
		if(sInfo.group===1 || sInfo.group===2) {
				
				if(sInfo.group===1) bs = true
				if(sInfo.group===2) bs = false
				if(bs && !bossloc) return false
				if(!isCD_crescent_1 && cast_cresc) {
					event.skill.id = crescent_id + 1
					
					replaced = true
					cast_cresc = false					
				}
				if(!isCD_gungnir && !replaced && cast_gun) {
					event.skill.id = gungnir_id
					
					replaced = true
					cast_gun = false
				}
												
			
				if(!isCD_crescent && (runes>=7) && !replaced) {
					event.skill.id = crescent_id
		
					replaced = true
					just_hit_crescent = true
					cast_gun = true	
					cast_cresc = true
				}
				if(!isCD_twilight && !replaced && isCD_crescent) {
					event.skill.id = twilight_0_id
					
					replaced = true
					cast_gun = true
				}				
				if(!isCD_maelstrom && (runes<=2) && !replaced) {
					event.skill.id = maelstrom_id
					
					replaced = true
					cast_gun = true
				}								
				/*if(!isCD_crescent_1 && just_hit_crescent && (runes==0) && !replaced) {
					event.skill.id = crescent_id + 1
					
					replaced = true
					just_hit_crescent = false
				}*/	
				if(!isCD_ground && !replaced && category_enabled) {
					event.skill.id = ground_id
					
					replaced = true
				}
				if(!isCD_leaping && !replaced) {
					event.skill.id = leaping_id
					
					replaced = true
					cast_gun = false
				}				
				if(!isCD_herald && (runes>=7) && !replaced) {
					event.skill.id = herald_id
					
					replaced = true
					wait = false

				}				
				if(!isCD_runeburst && (runes>=7) && !replaced) {
					event.skill.id = runeburst_id
					
					replaced = true
					wait = false
					cast_gun = true
				}			

				if(!isCD_glaive && !replaced && category_enabled) {
					event.skill.id = glaive_id
					
					replaced = true
					cast_gun = true
				}
				
				if(!isCD_windslash && !replaced) {
					event.skill.id = windslash_id
					
					replaced = true
					cast_gun = true
				}				

				if(!isCD_dream && !replaced) {
					event.skill.id = dream_id
					
					replaced = true
					cast_gun = true
				}
				if(!isCD_bloodflower && !replaced) {
					event.skill.id = bloodflower_id
					
					replaced = true
					cast_gun = true
				}				
				if(bs) {
					event.loc.x = (Math.cos(bossw) * -150) + bossloc.x
					event.loc.y = (Math.sin(bossw) * -150) + bossloc.y
					event.loc.z = bossloc.z
					event.w = bossw
				}
				/*if(event.skill.id==crescent_id && replaced) {
					let packet_crescent = {}
					packet_crescent = event
					packet_crescent.skill.id = crescent_id + 1
					setTimeout(function () {
						mod.send('C_START_SKILL', 7, packet_crescent)
					}, 2000)
				}*/
				if(replaced) return true
				if(!replaced) return false				
		}
		if((sInfo.group===1 || sInfo.group===2) && !bossloc) {
			return false
		}				
	})

	mod.hook('C_START_INSTANCE_SKILL', 7, (event) => {
		if(!enabled) return
		if(mod.game.me.class !== 'glaiver') return		
		myPosition = event.loc
		myAngle = event.w
	})

	mod.hook('C_PRESS_SKILL', 4, { filter: { fake: false } }, (event) => {
		if(!enabled) return
		if(mod.game.me.class !== 'glaiver') return		
		myPosition = event.loc
		myAngle = event.w
		
	})

    function getSkillInfo(id) {
		let nid = id;
        return {
            id: nid,
            group: Math.floor(nid / 10000),
            level: Math.floor(nid / 100) % 100,
            sub: nid % 100
        };
    }
}
