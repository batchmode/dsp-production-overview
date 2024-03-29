const products = [
    {
        "id": "proliferator-mk-i",
        "name": "Proliferator mk. I",
        "iconPosition": [
            0,
            0
        ],
        "category": "product"
    },
    {
        "id": "proliferator-mk-ii",
        "name": "Proliferator mk. II",
        "iconPosition": [
            1,
            0
        ],
        "category": "product"
    },
    {
        "id": "proliferator-mk-iii",
        "name": "Proliferator mk. III",
        "iconPosition": [
            2,
            0
        ],
        "category": "product"
    },
    {
        "id": "magnet",
        "name": "Magnet",
        "iconPosition": [
            9,
            7
        ],
        "category": "product"
    },
    {
        "id": "sulfuric-acid",
        "name": "Sulfuric acid",
        "iconPosition": [
            0,
            13
        ],
        "category": "resource"
    },
    {
        "id": "assembling-machine-mk-i",
        "name": "Assembling machine mk. I",
        "iconPosition": [
            7,
            0
        ],
        "category": "building"
    },
    {
        "id": "assembling-machine-mk-ii",
        "name": "Assembling machine mk. II",
        "iconPosition": [
            8,
            0
        ],
        "category": "building"
    },
    {
        "id": "assembling-machine-mk-iii",
        "name": "Assembling machine mk. III",
        "iconPosition": [
            9,
            0
        ],
        "category": "building"
    },
    {
        "id": "re-composing-assembler",
        "name": "Re-composing Assembler",
        "iconPosition": [
            10,
            0
        ],
        "category": "building"
    },
    {
        "id": "conveyor-belt-mk-i",
        "name": "Conveyor belt mk. I",
        "iconPosition": [
            1,
            1
        ],
        "category": "building"
    },
    {
        "id": "conveyor-belt-mk-ii",
        "name": "Conveyor belt mk. II",
        "iconPosition": [
            2,
            1
        ],
        "category": "building"
    },
    {
        "id": "conveyor-belt-mk-iii",
        "name": "Conveyor belt mk. III",
        "iconPosition": [
            3,
            1
        ],
        "category": "building"
    },
    {
        "id": "solar-sail",
        "name": "Solar sail",
        "iconPosition": [
            11,
            11
        ],
        "category": "product"
    },
    {
        "id": "gravity-matrix",
        "name": "Gravity matrix",
        "iconPosition": [
            4,
            5
        ],
        "category": "product"
    },
    {
        "id": "accumulator",
        "name": "Accumulator",
        "iconPosition": [
            4,
            0
        ],
        "category": "building"
    },
    {
        "id": "accumulator-(full)",
        "name": "Accumulator (full)",
        "iconPosition": [
            3,
            0
        ],
        "category": "building"
    },
    {
        "id": "electromagnetic-matrix",
        "name": "Electromagnetic matrix",
        "iconPosition": [
            1,
            13
        ],
        "category": "product"
    },
    {
        "id": "gear",
        "name": "Gear",
        "iconPosition": [
            6,
            5
        ],
        "category": "product"
    },
    {
        "id": "structure-matrix",
        "name": "Structure matrix",
        "iconPosition": [
            7,
            1
        ],
        "category": "product"
    },
    {
        "id": "deuteron-fuel-rod",
        "name": "Deuteron fuel rod",
        "iconPosition": [
            3,
            3
        ],
        "category": "product"
    },
    {
        "id": "antimatter-fuel-rod",
        "name": "Antimatter fuel rod",
        "iconPosition": [
            6,
            0
        ],
        "category": "product"
    },
    {
        "id": "strange-annihilation-fuel-rod",
        "name": "Strange Annihilation Fuel Rod",
        "iconPosition": [
            7,
            14
        ],
        "category": "product"
    },
    {
        "id": "spray-coater",
        "name": "Spray coater",
        "iconPosition": [
            4,
            12
        ],
        "category": "building"
    },
    {
        "id": "titanium-alloy",
        "name": "Titanium alloy",
        "iconPosition": [
            6,
            13
        ],
        "category": "product"
    },
    {
        "id": "copper-ore",
        "name": "Copper ore",
        "iconPosition": [
            9,
            2
        ],
        "category": "resource"
    },
    {
        "id": "iron-ore",
        "name": "Iron ore",
        "iconPosition": [
            1,
            7
        ],
        "category": "resource"
    },
    {
        "id": "energetic-graphite",
        "name": "Energetic graphite",
        "iconPosition": [
            11,
            5
        ],
        "category": "product"
    },
    {
        "id": "coal",
        "name": "Coal",
        "iconPosition": [
            8,
            2
        ],
        "category": "resource"
    },
    {
        "id": "sorter-mk-i",
        "name": "Sorter mk. I",
        "iconPosition": [
            8,
            6
        ],
        "category": "building"
    },
    {
        "id": "sorter-mk-ii",
        "name": "Sorter mk. II",
        "iconPosition": [
            9,
            6
        ],
        "category": "building"
    },
    {
        "id": "sorter-mk-iii",
        "name": "Sorter mk. III",
        "iconPosition": [
            10,
            6
        ],
        "category": "building"
    },
    {
        "id": "sorter-mk-iv",
        "name": "Sorter mk. IV",
        "iconPosition": [
            7,
            15
        ],
        "category": "building"
    },
    {
        "id": "space-warper",
        "name": "Space warper",
        "iconPosition": [
            2,
            12
        ],
        "category": "product"
    },
    {
        "id": "information-matrix",
        "name": "Information matrix",
        "iconPosition": [
            7,
            6
        ],
        "category": "product"
    },
    {
        "id": "artificial-star",
        "name": "Artificial star",
        "iconPosition": [
            3,
            5
        ],
        "category": "building"
    },
    {
        "id": "graviton-lens",
        "name": "Graviton lens",
        "iconPosition": [
            1,
            6
        ],
        "category": "product"
    },
    {
        "id": "quantum-chip",
        "name": "Quantum chip",
        "iconPosition": [
            8,
            10
        ],
        "category": "product"
    },
    {
        "id": "processor",
        "name": "Processor",
        "iconPosition": [
            7,
            10
        ],
        "category": "product"
    },
    {
        "id": "deuterium",
        "name": "Deuterium",
        "iconPosition": [
            5,
            3
        ],
        "category": "resource"
    },
    {
        "id": "organic-crystal",
        "name": "Organic crystal",
        "iconPosition": [
            0,
            3
        ],
        "category": "resource"
    },
    {
        "id": "strange-matter",
        "name": "Strange matter",
        "iconPosition": [
            11,
            12
        ],
        "category": "product"
    },
    {
        "id": "plasma-exciter",
        "name": "Plasma exciter",
        "iconPosition": [
            3,
            10
        ],
        "category": "product"
    },
    {
        "id": "crude-oil",
        "name": "Crude oil",
        "iconPosition": [
            1,
            9
        ],
        "category": "resource"
    },
    {
        "id": "antimatter",
        "name": "Antimatter",
        "iconPosition": [
            5,
            0
        ],
        "category": "product"
    },
    {
        "id": "casimir-crystal",
        "name": "Casimir crystal",
        "iconPosition": [
            3,
            2
        ],
        "category": "resource"
    },
    {
        "id": "particle-broadband",
        "name": "Particle broadband",
        "iconPosition": [
            7,
            9
        ],
        "category": "product"
    },
    {
        "id": "copper-ingot",
        "name": "Copper ingot",
        "iconPosition": [
            10,
            2
        ],
        "category": "product"
    },
    {
        "id": "high-purity-silicon",
        "name": "High-purity silicon",
        "iconPosition": [
            5,
            11
        ],
        "category": "product"
    },
    {
        "id": "plane-filter",
        "name": "Plane filter",
        "iconPosition": [
            1,
            10
        ],
        "category": "product"
    },
    {
        "id": "hydrogen",
        "name": "Hydrogen",
        "iconPosition": [
            5,
            6
        ],
        "category": "resource"
    },
    {
        "id": "spiniform-stalagmite-crystal",
        "name": "Spiniform stalagmite crystal",
        "iconPosition": [
            11,
            0
        ],
        "category": "resource"
    },
    {
        "id": "energy-matrix",
        "name": "Energy matrix",
        "iconPosition": [
            10,
            3
        ],
        "category": "product"
    },
    {
        "id": "photon-combiner",
        "name": "Photon combiner",
        "iconPosition": [
            9,
            9
        ],
        "category": "product"
    },
    {
        "id": "water",
        "name": "Water",
        "iconPosition": [
            1,
            15
        ],
        "category": "resource"
    },
    {
        "id": "titanium-ore",
        "name": "Titanium ore",
        "iconPosition": [
            7,
            13
        ],
        "category": "resource"
    },
    {
        "id": "silicon-ore",
        "name": "Silicon ore",
        "iconPosition": [
            4,
            11
        ],
        "category": "resource"
    },
    {
        "id": "titanium-ingot",
        "name": "Titanium ingot",
        "iconPosition": [
            8,
            13
        ],
        "category": "product"
    },
    {
        "id": "iron-ingot",
        "name": "Iron ingot",
        "iconPosition": [
            2,
            7
        ],
        "category": "product"
    },
    {
        "id": "refined-oil",
        "name": "Refined oil",
        "iconPosition": [
            11,
            10
        ],
        "category": "product"
    },
    {
        "id": "hydrogen-fuel-rod",
        "name": "Hydrogen fuel rod",
        "iconPosition": [
            4,
            6
        ],
        "category": "product"
    },
    {
        "id": "wireless-power-tower",
        "name": "Wireless power tower",
        "iconPosition": [
            4,
            2
        ],
        "category": "building"
    },
    {
        "id": "critical-photon",
        "name": "Critical photon",
        "iconPosition": [
            10,
            9
        ],
        "category": "product"
    },
    {
        "id": "magnetic-coil",
        "name": "Magnetic coil",
        "iconPosition": [
            10,
            7
        ],
        "category": "product"
    },
    {
        "id": "glass",
        "name": "Glass",
        "iconPosition": [
            8,
            5
        ],
        "category": "product"
    },
    {
        "id": "super-magnetic-ring",
        "name": "Super-magnetic ring",
        "iconPosition": [
            6,
            6
        ],
        "category": "product"
    },
    {
        "id": "annihilation-constraint-sphere",
        "name": "Annihilation constraint sphere",
        "iconPosition": [
            1,
            5
        ],
        "category": "product"
    },
    {
        "id": "fractal-silicon",
        "name": "Fractal silicon",
        "iconPosition": [
            8,
            4
        ],
        "category": "resource"
    },
    {
        "id": "crystal-silicon",
        "name": "Crystal silicon",
        "iconPosition": [
            3,
            11
        ],
        "category": "product"
    },
    {
        "id": "planetary-logistics-station",
        "name": "Planetary logistics station",
        "iconPosition": [
            6,
            7
        ],
        "category": "building"
    },
    {
        "id": "interstellar-logistics-station",
        "name": "Interstellar logistics station",
        "iconPosition": [
            11,
            6
        ],
        "category": "building"
    },
    {
        "id": "orbital-collector",
        "name": "Orbital collector",
        "iconPosition": [
            2,
            9
        ],
        "category": "building"
    },
    {
        "id": "stone-brick",
        "name": "Stone brick",
        "iconPosition": [
            6,
            12
        ],
        "category": "product"
    },
    {
        "id": "fire-ice",
        "name": "Fire ice",
        "iconPosition": [
            5,
            5
        ],
        "category": "resource"
    },
    {
        "id": "titanium-crystal",
        "name": "Titanium crystal",
        "iconPosition": [
            4,
            13
        ],
        "category": "product"
    },
    {
        "id": "graphene",
        "name": "Graphene",
        "iconPosition": [
            10,
            5
        ],
        "category": "product"
    },
    {
        "id": "foundation",
        "name": "Foundation",
        "iconPosition": [
            2,
            13
        ],
        "category": "product"
    },
    {
        "id": "small-carrier-rocket",
        "name": "Small carrier rocket",
        "iconPosition": [
            1,
            11
        ],
        "category": "product"
    },
    {
        "id": "ray-receiver",
        "name": "Ray receiver",
        "iconPosition": [
            9,
            10
        ],
        "category": "building"
    },
    {
        "id": "thruster",
        "name": "Thruster",
        "iconPosition": [
            0,
            5
        ],
        "category": "product"
    },
    {
        "id": "thermal-power-plant",
        "name": "Thermal power plant",
        "iconPosition": [
            11,
            4
        ],
        "category": "building"
    },
    {
        "id": "mini-fusion-power-plant",
        "name": "Mini fusion power plant",
        "iconPosition": [
            2,
            5
        ],
        "category": "building"
    },
    {
        "id": "frame-material",
        "name": "Frame material",
        "iconPosition": [
            10,
            4
        ],
        "category": "product"
    },
    {
        "id": "steel",
        "name": "Steel",
        "iconPosition": [
            5,
            12
        ],
        "category": "product"
    },
    {
        "id": "stone",
        "name": "Stone",
        "iconPosition": [
            7,
            12
        ],
        "category": "resource"
    },
    {
        "id": "storage-mk-i",
        "name": "Storage mk. I",
        "iconPosition": [
            8,
            12
        ],
        "category": "building"
    },
    {
        "id": "storage-mk-ii",
        "name": "Storage mk. II",
        "iconPosition": [
            9,
            12
        ],
        "category": "building"
    },
    {
        "id": "traffic-monitor",
        "name": "Traffic monitor",
        "iconPosition": [
            6,
            8
        ],
        "category": "building"
    },
    {
        "id": "circuit-board",
        "name": "Circuit board",
        "iconPosition": [
            7,
            2
        ],
        "category": "product"
    },
    {
        "id": "electric-motor",
        "name": "Electric motor",
        "iconPosition": [
            11,
            3
        ],
        "category": "product"
    },
    {
        "id": "particle-container",
        "name": "Particle container",
        "iconPosition": [
            5,
            9
        ],
        "category": "product"
    },
    {
        "id": "carbon-nanotube",
        "name": "Carbon nanotube",
        "iconPosition": [
            9,
            8
        ],
        "category": "product"
    },
    {
        "id": "optical-grating-crystal",
        "name": "Optical grating crystal",
        "iconPosition": [
            0,
            6
        ],
        "category": "resource"
    },
    {
        "id": "microcrystalline-component",
        "name": "Microcrystalline component",
        "iconPosition": [
            0,
            8
        ],
        "category": "product"
    },
    {
        "id": "plastic",
        "name": "Plastic",
        "iconPosition": [
            5,
            10
        ],
        "category": "product"
    },
    {
        "id": "diamond",
        "name": "Diamond",
        "iconPosition": [
            8,
            3
        ],
        "category": "product"
    },
    {
        "id": "kimberlite-ore",
        "name": "Kimberlite ore",
        "iconPosition": [
            7,
            3
        ],
        "category": "resource"
    },
    {
        "id": "electromagnetic-turbine",
        "name": "Electromagnetic turbine",
        "iconPosition": [
            8,
            7
        ],
        "category": "product"
    },
    {
        "id": "logistics-drone",
        "name": "Logistics drone",
        "iconPosition": [
            5,
            7
        ],
        "category": "product"
    },
    {
        "id": "unipolar-magnet",
        "name": "Unipolar magnet",
        "iconPosition": [
            7,
            8
        ],
        "category": "resource"
    },
    {
        "id": "universe-matrix",
        "name": "Universe matrix",
        "iconPosition": [
            5,
            14
        ],
        "category": "product"
    },
    {
        "id": "log",
        "name": "Log",
        "iconPosition": [
            3,
            15
        ],
        "category": "resource"
    },
    {
        "id": "plant-fuel",
        "name": "Plant fuel",
        "iconPosition": [
            2,
            10
        ],
        "category": "resource"
    },
    {
        "id": "titanium-glass",
        "name": "Titanium glass",
        "iconPosition": [
            5,
            13
        ],
        "category": "product"
    },
    {
        "id": "dyson-sphere-component",
        "name": "Dyson sphere component",
        "iconPosition": [
            9,
            3
        ],
        "category": "product"
    },
    {
        "id": "wind-turbine",
        "name": "Wind turbine",
        "iconPosition": [
            2,
            15
        ],
        "category": "building"
    },
    {
        "id": "satellite-substation",
        "name": "Satellite substation",
        "iconPosition": [
            3,
            9
        ],
        "category": "building"
    },
    {
        "id": "tesla-tower",
        "name": "Tesla tower",
        "iconPosition": [
            3,
            13
        ],
        "category": "building"
    },
    {
        "id": "prism",
        "name": "Prism",
        "iconPosition": [
            6,
            10
        ],
        "category": "product"
    },
    {
        "id": "reinforced-thruster",
        "name": "Reinforced thruster",
        "iconPosition": [
            0,
            7
        ],
        "category": "product"
    },
    {
        "id": "logistics-vessel",
        "name": "Logistics vessel",
        "iconPosition": [
            7,
            7
        ],
        "category": "product"
    },
    {
        "id": "storage-tank",
        "name": "Storage tank",
        "iconPosition": [
            10,
            12
        ],
        "category": "building"
    },
    {
        "id": "splitter",
        "name": "Splitter",
        "iconPosition": [
            3,
            12
        ],
        "category": "building"
    },
    {
        "id": "automatic-piler",
        "name": "Automatic piler",
        "iconPosition": [
            0,
            10
        ],
        "category": "building"
    },
    {
        "id": "em-rail-ejector",
        "name": "EM-Rail ejector",
        "iconPosition": [
            0,
            4
        ],
        "category": "building"
    },
    {
        "id": "chemical-plant",
        "name": "Chemical plant",
        "iconPosition": [
            6,
            2
        ],
        "category": "building"
    },
    {
        "id": "solar-panel",
        "name": "Solar panel",
        "iconPosition": [
            0,
            12
        ],
        "category": "building"
    },
    {
        "id": "energy-exchanger",
        "name": "Energy exchanger",
        "iconPosition": [
            1,
            4
        ],
        "category": "building"
    },
    {
        "id": "advanced-mining-machine",
        "name": "Advanced mining machine",
        "iconPosition": [
            1,
            8
        ],
        "category": "building"
    },
    {
        "id": "water-pump",
        "name": "Water pump",
        "iconPosition": [
            0,
            15
        ],
        "category": "building"
    },
    {
        "id": "vertical-launching-silo",
        "name": "Vertical launching silo",
        "iconPosition": [
            6,
            14
        ],
        "category": "building"
    },
    {
        "id": "oil-extractor",
        "name": "Oil extractor",
        "iconPosition": [
            11,
            8
        ],
        "category": "building"
    },
    {
        "id": "matrix-lab",
        "name": "Matrix lab",
        "iconPosition": [
            4,
            7
        ],
        "category": "building"
    },
    {
        "id": "self-evolution-lab",
        "name": "Self-evolution Lab",
        "iconPosition": [
            3,
            7
        ],
        "category": "building"
    },
    {
        "id": "mining-machine",
        "name": "Mining machine",
        "iconPosition": [
            2,
            8
        ],
        "category": "building"
    },
    {
        "id": "miniature-particle-collider",
        "name": "Miniature particle collider",
        "iconPosition": [
            2,
            6
        ],
        "category": "building"
    },
    {
        "id": "fractionator",
        "name": "Fractionator",
        "iconPosition": [
            9,
            4
        ],
        "category": "building"
    },
    {
        "id": "geothermal-power-station",
        "name": "Geothermal power station",
        "iconPosition": [
            7,
            5
        ],
        "category": "building"
    },
    {
        "id": "oil-refinery",
        "name": "Oil refinery",
        "iconPosition": [
            0,
            9
        ],
        "category": "building"
    },
    {
        "id": "arc-smelter",
        "name": "Arc Smelter",
        "iconPosition": [
            9,
            11
        ],
        "category": "building"
    },
    {
        "id": "plane-smelter",
        "name": "Plane Smelter",
        "iconPosition": [
            7,
            11
        ],
        "category": "building"
    },
    {
        "id": "negentropy-smelter",
        "name": "Negentropy Smelter",
        "iconPosition": [
            8,
            11
        ],
        "category": "building"
    },
    {
        "id": "logistic-bots",
        "name": "Logistic Bots",
        "iconPosition": [
            1,
            3
        ],
        "category": "product"
    },
    {
        "id": "logistic-distributor",
        "name": "Logistic Distributor",
        "iconPosition": [
            2,
            3
        ],
        "category": "building"
    },
    {
        "id": "chemical-plant-v2",
        "name": "Quantum Chemical Plant",
        "iconPosition": [
            5,
            2
        ],
        "category": "building"
    },
    {
        "id": "reforming-refine",
        "name": "Reforming Refine",
        "iconPosition": [
            0,
            11
        ],
        "category": "recipe"
    },
    {
        "id": "particle-container-advanced",
        "name": "Particle Container (advanced)",
        "iconPosition": [
            4,
            9
        ],
        "category": "recipe"
    },
    {
        "id": "mass-energy-storage",
        "name": "Mass Energy Storage",
        "iconPosition": [
            11,
            9
        ],
        "category": "recipe"
    },
    {
        "id": "photon-combiner-advanced",
        "name": "Photon combiner (advanced)",
        "iconPosition": [
            8,
            9
        ],
        "category": "recipe"
    },
    {
        "id": "space-warper-advanced",
        "name": "Space warper (advanced)",
        "iconPosition": [
            1,
            12
        ],
        "category": "recipe"
    },
    {
        "id": "organic-crystal-original",
        "name": "Organic crystal (original)",
        "iconPosition": [
            11,
            2
        ],
        "category": "recipe"
    },
    {
        "id": "crystal-silicon-advanced",
        "name": "Crystal silicon (advanced)",
        "iconPosition": [
            2,
            11
        ],
        "category": "recipe"
    },
    {
        "id": "x-ray-cracking",
        "name": "X-Ray Cracking",
        "iconPosition": [
            4,
            15
        ],
        "category": "recipe"
    },
    {
        "id": "diamond-advanced",
        "name": "Diamond (advanced)",
        "iconPosition": [
            6,
            3
        ],
        "category": "product"
    },
    {
        "id": "carbon-nanotube-advanced",
        "name": "Carbon nanotube (advanced)",
        "iconPosition": [
            8,
            8
        ],
        "category": "recipe"
    },
    {
        "id": "graphene-advanced",
        "name": "Graphene (advanced)",
        "iconPosition": [
            9,
            5
        ],
        "category": "product"
    },
    {
        "id": "casimir-crystal-advanced",
        "name": "Casimir crystal (advanced)",
        "iconPosition": [
            2,
            2
        ],
        "category": "recipe"
    },
    {
        "id": "plasma-refining",
        "name": "Plasma  Refining",
        "iconPosition": [
            4,
            10
        ],
        "category": "recipe"
    },
    {
        "id": "combustible-unit",
        "name": "Combustible Unit",
        "iconPosition": [
            4,
            4
        ],
        "category": "product"
    },
    {
        "id": "explosive-unit",
        "name": "Explosive Unit",
        "iconPosition": [
            3,
            6
        ],
        "category": "product"
    },
    {
        "id": "magnum-ammo-box",
        "name": "Magnum Ammo Box",
        "iconPosition": [
            6,
            1
        ],
        "category": "product"
    },
    {
        "id": "titanium-ammo-box",
        "name": "Titanium Ammo Box",
        "iconPosition": [
            5,
            1
        ],
        "category": "product"
    },
    {
        "id": "superalloy-ammo-box",
        "name": "Superalloy Ammo Box",
        "iconPosition": [
            4,
            1
        ],
        "category": "product"
    },
    {
        "id": "missile-set",
        "name": "Missile Set",
        "iconPosition": [
            5,
            8
        ],
        "category": "product"
    },
    {
        "id": "supersonic-missile-set",
        "name": "Supersonic Missile Set",
        "iconPosition": [
            4,
            8
        ],
        "category": "product"
    },
    {
        "id": "plasma-capsule",
        "name": "Plasma Capsule",
        "iconPosition": [
            1,
            2
        ],
        "category": "product"
    },
    {
        "id": "antimatter-capsule",
        "name": "Antimatter Capsule",
        "iconPosition": [
            11,
            1
        ],
        "category": "product"
    },
    {
        "id": "jamming-capsule",
        "name": "Jamming Capsule",
        "iconPosition": [
            5,
            15
        ],
        "category": "product"
    },
    {
        "id": "suppressing-capsule",
        "name": "Suppressing Capsule",
        "iconPosition": [
            6,
            15
        ],
        "category": "product"
    },
    {
        "id": "shell-set",
        "name": "Shell Set",
        "iconPosition": [
            10,
            1
        ],
        "category": "product"
    },
    {
        "id": "high-explosive-shell-set",
        "name": "High Explosive Shell Set",
        "iconPosition": [
            9,
            1
        ],
        "category": "product"
    },
    {
        "id": "crystal-shell-set",
        "name": "Crystal Shell Set",
        "iconPosition": [
            8,
            1
        ],
        "category": "product"
    },
    {
        "id": "engine",
        "name": "Engine",
        "iconPosition": [
            3,
            4
        ],
        "category": "product"
    },
    {
        "id": "prototype",
        "name": "Prototype",
        "iconPosition": [
            7,
            4
        ],
        "category": "product"
    },
    {
        "id": "precision-drone",
        "name": "Precision Drone",
        "iconPosition": [
            6,
            4
        ],
        "category": "product"
    },
    {
        "id": "attack-drone",
        "name": "Attack Drone",
        "iconPosition": [
            5,
            4
        ],
        "category": "product"
    },
    {
        "id": "corvette",
        "name": "Corvette",
        "iconPosition": [
            10,
            14
        ],
        "category": "product"
    },
    {
        "id": "gauss-turret",
        "name": "Gauss Turret",
        "iconPosition": [
            11,
            13
        ],
        "category": "building"
    },
    {
        "id": "missile-turret",
        "name": "Missile Turret",
        "iconPosition": [
            1,
            14
        ],
        "category": "building"
    },
    {
        "id": "implosion-cannon",
        "name": "Implosion Cannon",
        "iconPosition": [
            9,
            13
        ],
        "category": "building"
    },
    {
        "id": "laser-turret",
        "name": "Laser Turret",
        "iconPosition": [
            0,
            14
        ],
        "category": "building"
    },
    {
        "id": "plasma-turret",
        "name": "Plasma Turret",
        "iconPosition": [
            2,
            14
        ],
        "category": "building"
    },
    {
        "id": "battlefield-analysis-base",
        "name": "Battlefield Analysis Base",
        "iconPosition": [
            0,
            1
        ],
        "category": "building"
    },
    {
        "id": "jammer-tower",
        "name": "Jammer Tower",
        "iconPosition": [
            10,
            13
        ],
        "category": "building"
    },
    {
        "id": "signal-tower",
        "name": "Signal Tower",
        "iconPosition": [
            4,
            14
        ],
        "category": "building"
    },
    {
        "id": "planetary-shield-generator",
        "name": "Planetary Shield Generator",
        "iconPosition": [
            3,
            14
        ],
        "category": "building"
    },
    {
        "id": "destroyer",
        "name": "Destroyer",
        "iconPosition": [
            9,
            14
        ],
        "category": "product"
    },
    {
        "id": "crystal-explosive-unit",
        "name": "Crystal Explosive Unit",
        "iconPosition": [
            6,
            9
        ],
        "category": "product"
    },
    {
        "id": "gravity-missile-set",
        "name": "Gravity Missile Set",
        "iconPosition": [
            3,
            8
        ],
        "category": "product"
    },
    {
        "id": "energy-shard",
        "name": "Energy Shard",
        "iconPosition": [
            2,
            4
        ],
        "category": "product"
    },
    {
        "id": "dark-fog-matrix",
        "name": "Dark Fog Matrix",
        "iconPosition": [
            11,
            7
        ],
        "category": "product"
    },
    {
        "id": "matter-recombinator",
        "name": "Matter Recombinator",
        "iconPosition": [
            10,
            10
        ],
        "category": "product"
    },
    {
        "id": "silicon-based-neuron",
        "name": "Silicon-based Neuron",
        "iconPosition": [
            6,
            11
        ],
        "category": "product"
    },
    {
        "id": "negentropy-singularity",
        "name": "Negentropy Singularity",
        "iconPosition": [
            10,
            8
        ],
        "category": "product"
    },
    {
        "id": "core-element",
        "name": "Core Element",
        "iconPosition": [
            8,
            14
        ],
        "category": "product"
    }
]

export default products
