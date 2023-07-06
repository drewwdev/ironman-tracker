export type playerType = [
  {
    id: number;
    username: string;
    displayName: string;
    type: string;
    build: string;
    status: string;
    country: string;
    exp: number;
    ehp: number;
    ehb: number;
    ttm: number;
    tt200m: number;
    registeredAt: string;
    updatedAt: string;
    lastChangedAt: string;
    lastImportedAt: string;
    combatLevel: number;
    latestSnapshot: {
      id: number;
      playerId: number;
      createdAt: string;
      importedAt: string;
      data: {
        skills: {
          overall: {
            metric: string;
            experience: number;
            rank: number;
            level: number;
            ehp: number;
          };
          attack: {
            metric: string;
            experience: number;
            rank: number;
            level: number;
            ehp: number;
          };
          defence: {
            metric: string;
            experience: number;
            rank: number;
            level: number;
            ehp: number;
          };
          strength: {
            metric: string;
            experience: number;
            rank: number;
            level: number;
            ehp: number;
          };
          hitpoints: {
            metric: string;
            experience: number;
            rank: number;
            level: number;
            ehp: number;
          };
          ranged: {
            metric: string;
            experience: number;
            rank: number;
            level: number;
            ehp: number;
          };
          prayer: {
            metric: string;
            experience: number;
            rank: number;
            level: number;
            ehp: number;
          };
          magic: {
            metric: string;
            experience: number;
            rank: number;
            level: number;
            ehp: number;
          };
          cooking: {
            metric: string;
            experience: number;
            rank: number;
            level: number;
            ehp: number;
          };
          woodcutting: {
            metric: string;
            experience: number;
            rank: number;
            level: number;
            ehp: number;
          };
          fletching: {
            metric: string;
            experience: number;
            rank: number;
            level: number;
            ehp: number;
          };
          fishing: {
            metric: string;
            experience: number;
            rank: number;
            level: number;
            ehp: number;
          };
          firemaking: {
            metric: string;
            experience: number;
            rank: number;
            level: number;
            ehp: number;
          };
          crafting: {
            metric: string;
            experience: number;
            rank: number;
            level: number;
            ehp: number;
          };
          smithing: {
            metric: string;
            experience: number;
            rank: number;
            level: number;
            ehp: number;
          };
          mining: {
            metric: string;
            experience: number;
            rank: number;
            level: number;
            ehp: number;
          };
          herblore: {
            metric: string;
            experience: number;
            rank: number;
            level: number;
            ehp: number;
          };
          agility: {
            metric: string;
            experience: number;
            rank: number;
            level: number;
            ehp: number;
          };
          thieving: {
            metric: string;
            experience: number;
            rank: number;
            level: number;
            ehp: number;
          };
          slayer: {
            metric: string;
            experience: number;
            rank: number;
            level: number;
            ehp: number;
          };
          farming: {
            metric: string;
            experience: number;
            rank: number;
            level: number;
            ehp: number;
          };
          runecrafting: {
            metric: string;
            experience: number;
            rank: number;
            level: number;
            ehp: number;
          };
          hunter: {
            metric: string;
            experience: number;
            rank: number;
            level: number;
            ehp: number;
          };
          construction: {
            metric: string;
            experience: number;
            rank: number;
            level: number;
            ehp: number;
          };
        };
        bosses: {
          abyssal_sire: {
            metric: string;
            kills: number;
            rank: number;
            ehb: number;
          };
          alchemical_hydra: {
            metric: string;
            kills: number;
            rank: number;
            ehb: number;
          };
          artio: {
            metric: string;
            kills: number;
            rank: number;
            ehb: number;
          };
          barrows_chests: {
            metric: string;
            kills: number;
            rank: number;
            ehb: number;
          };
          bryophyta: {
            metric: string;
            kills: number;
            rank: number;
            ehb: number;
          };
          callisto: {
            metric: string;
            kills: number;
            rank: number;
            ehb: number;
          };
          calvarion: {
            metric: string;
            kills: number;
            rank: number;
            ehb: number;
          };
          cerberus: {
            metric: string;
            kills: number;
            rank: number;
            ehb: number;
          };
          chambers_of_xeric: {
            metric: string;
            kills: number;
            rank: number;
            ehb: number;
          };
          chambers_of_xeric_challenge_mode: {
            metric: string;
            kills: number;
            rank: number;
            ehb: number;
          };
          chaos_elemental: {
            metric: string;
            kills: number;
            rank: number;
            ehb: number;
          };
          chaos_fanatic: {
            metric: string;
            kills: number;
            rank: number;
            ehb: number;
          };
          commander_zilyana: {
            metric: string;
            kills: number;
            rank: number;
            ehb: number;
          };
          corporeal_beast: {
            metric: string;
            kills: number;
            rank: number;
            ehb: number;
          };
          crazy_archaeologist: {
            metric: string;
            kills: number;
            rank: number;
            ehb: number;
          };
          dagannoth_prime: {
            metric: string;
            kills: number;
            rank: number;
            ehb: number;
          };
          dagannoth_rex: {
            metric: string;
            kills: number;
            rank: number;
            ehb: number;
          };
          dagannoth_supreme: {
            metric: string;
            kills: number;
            rank: number;
            ehb: number;
          };
          deranged_archaeologist: {
            metric: string;
            kills: number;
            rank: number;
            ehb: number;
          };
          general_graardor: {
            metric: string;
            kills: number;
            rank: number;
            ehb: number;
          };
          giant_mole: {
            metric: string;
            kills: number;
            rank: number;
            ehb: number;
          };
          grotesque_guardians: {
            metric: string;
            kills: number;
            rank: number;
            ehb: number;
          };
          hespori: {
            metric: string;
            kills: number;
            rank: number;
            ehb: number;
          };
          kalphite_queen: {
            metric: string;
            kills: number;
            rank: number;
            ehb: number;
          };
          king_black_dragon: {
            metric: string;
            kills: number;
            rank: number;
            ehb: number;
          };
          kraken: {
            metric: string;
            kills: number;
            rank: number;
            ehb: number;
          };
          kreearra: {
            metric: string;
            kills: number;
            rank: number;
            ehb: number;
          };
          kril_tsutsaroth: {
            metric: string;
            kills: number;
            rank: number;
            ehb: number;
          };
          mimic: {
            metric: string;
            kills: number;
            rank: number;
            ehb: number;
          };
          nex: {
            metric: string;
            kills: number;
            rank: number;
            ehb: number;
          };
          nightmare: {
            metric: string;
            kills: number;
            rank: number;
            ehb: number;
          };
          phosanis_nightmare: {
            metric: string;
            kills: number;
            rank: number;
            ehb: number;
          };
          obor: {
            metric: string;
            kills: number;
            rank: number;
            ehb: number;
          };
          phantom_muspah: {
            metric: string;
            kills: number;
            rank: number;
            ehb: number;
          };
          sarachnis: {
            metric: string;
            kills: number;
            rank: number;
            ehb: number;
          };
          scorpia: {
            metric: string;
            kills: number;
            rank: number;
            ehb: number;
          };
          skotizo: {
            metric: string;
            kills: number;
            rank: number;
            ehb: number;
          };
          spindel: {
            metric: string;
            kills: number;
            rank: number;
            ehb: number;
          };
          tempoross: {
            metric: string;
            kills: number;
            rank: number;
            ehb: number;
          };
          the_gauntlet: {
            metric: string;
            kills: number;
            rank: number;
            ehb: number;
          };
          the_corrupted_gauntlet: {
            metric: string;
            kills: number;
            rank: number;
            ehb: number;
          };
          theatre_of_blood: {
            metric: string;
            kills: number;
            rank: number;
            ehb: number;
          };
          theatre_of_blood_hard_mode: {
            metric: string;
            kills: number;
            rank: number;
            ehb: number;
          };
          thermonuclear_smoke_devil: {
            metric: string;
            kills: number;
            rank: number;
            ehb: number;
          };
          tombs_of_amascut: {
            metric: string;
            kills: number;
            rank: number;
            ehb: number;
          };
          tombs_of_amascut_expert: {
            metric: string;
            kills: number;
            rank: number;
            ehb: number;
          };
          tzkal_zuk: {
            metric: string;
            kills: number;
            rank: number;
            ehb: number;
          };
          tztok_jad: {
            metric: string;
            kills: number;
            rank: number;
            ehb: number;
          };
          venenatis: {
            metric: string;
            kills: number;
            rank: number;
            ehb: number;
          };
          vetion: {
            metric: string;
            kills: number;
            rank: number;
            ehb: number;
          };
          vorkath: {
            metric: string;
            kills: number;
            rank: number;
            ehb: number;
          };
          wintertodt: {
            metric: string;
            kills: number;
            rank: number;
            ehb: number;
          };
          zalcano: {
            metric: string;
            kills: number;
            rank: number;
            ehb: number;
          };
          zulrah: {
            metric: string;
            kills: number;
            rank: number;
            ehb: number;
          };
        };
        activities: {
          league_points: {
            metric: string;
            score: number;
            rank: number;
          };
          bounty_hunter_hunter: {
            metric: string;
            score: number;
            rank: number;
          };
          bounty_hunter_rogue: {
            metric: string;
            score: number;
            rank: number;
          };
          clue_scrolls_all: {
            metric: string;
            score: number;
            rank: number;
          };
          clue_scrolls_beginner: {
            metric: string;
            score: number;
            rank: number;
          };
          clue_scrolls_easy: {
            metric: string;
            score: number;
            rank: number;
          };
          clue_scrolls_medium: {
            metric: string;
            score: number;
            rank: number;
          };
          clue_scrolls_hard: {
            metric: string;
            score: number;
            rank: number;
          };
          clue_scrolls_elite: {
            metric: string;
            score: number;
            rank: number;
          };
          clue_scrolls_master: {
            metric: string;
            score: number;
            rank: number;
          };
          last_man_standing: {
            metric: string;
            score: number;
            rank: number;
          };
          pvp_arena: {
            metric: string;
            score: number;
            rank: number;
          };
          soul_wars_zeal: {
            metric: string;
            score: number;
            rank: number;
          };
          guardians_of_the_rift: {
            metric: string;
            score: number;
            rank: number;
          };
        };
        computed: {
          ehp: {
            metric: string;
            value: number;
            rank: number;
          };
          ehb: {
            metric: string;
            value: number;
            rank: number;
          };
        };
      };
    };
  }
];
