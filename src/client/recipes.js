const recipes = [
    {
        "id": "iron-plate",
        "name": "Iron ingot",
        "inputs": [
            "iron-ore"
        ],
        "outputs": [
            "iron-ingot"
        ],
        "iconPosition": [
            3,
            5
        ]
    },
    {
        "id": "magnet",
        "name": "Magnet",
        "inputs": [
            "iron-ore"
        ],
        "outputs": [
            "magnet"
        ],
        "iconPosition": [
            9,
            5
        ]
    },
    {
        "id": "copper-plate",
        "name": "Copper ingot",
        "inputs": [
            "copper-ore"
        ],
        "outputs": [
            "copper-ingot"
        ],
        "iconPosition": [
            10,
            1
        ]
    },
    {
        "id": "reforming-refine",
        "name": "Reforming Refine",
        "inputs": [
            "coal",
            "hydrogen",
            "refined-oil"
        ],
        "outputs": [
            "refined-oil"
        ],
        "iconPosition": [
            2,
            8
        ]
    },
    {
        "id": "automatic-piler",
        "name": "Automatic piler",
        "inputs": [
            "steel",
            "gear",
            "super-magnetic-ring",
            "processor"
        ],
        "outputs": [
            "automatic-piler"
        ],
        "iconPosition": [
            4,
            7
        ]
    },
    {
        "id": "stone-brick",
        "name": "Stone brick",
        "inputs": [
            "stone"
        ],
        "outputs": [
            "stone-brick"
        ],
        "iconPosition": [
            4,
            9
        ]
    },
    {
        "id": "fire-ice-collecting",
        "name": "Fire Ice (collecting)",
        "inputs": [],
        "outputs": [
            "fire-ice"
        ],
        "iconPosition": [
            9,
            3
        ]
    },
    {
        "id": "spray-coater",
        "name": "Spray coater",
        "inputs": [
            "steel",
            "plasma-exciter",
            "circuit-board",
            "microcrystalline-component"
        ],
        "outputs": [
            "spray-coater"
        ],
        "iconPosition": [
            2,
            9
        ]
    },
    {
        "id": "proliferator-3",
        "name": "Proliferator mk.III",
        "inputs": [
            "proliferator-mk-ii",
            "carbon-nanotube"
        ],
        "outputs": [
            "proliferator-mk-iii"
        ],
        "iconPosition": [
            2,
            0
        ]
    },
    {
        "id": "proliferator-1",
        "name": "Proliferator mk.I",
        "inputs": [
            "coal"
        ],
        "outputs": [
            "proliferator-mk-i"
        ],
        "iconPosition": [
            0,
            0
        ]
    },
    {
        "id": "proliferator-2",
        "name": "Proliferator mk.II",
        "inputs": [
            "proliferator-mk-i",
            "diamond"
        ],
        "outputs": [
            "proliferator-mk-ii"
        ],
        "iconPosition": [
            1,
            0
        ]
    },
    {
        "id": "accumulator-full",
        "name": "Accumulator (full)",
        "inputs": [
            "accumulator"
        ],
        "outputs": [
            "accumulator-(full)"
        ],
        "iconPosition": [
            3,
            0
        ]
    },
    {
        "id": "traffic-monitor",
        "name": "Traffic monitor",
        "inputs": [
            "iron-ingot",
            "gear",
            "glass",
            "circuit-board"
        ],
        "outputs": [
            "traffic-monitor"
        ],
        "iconPosition": [
            1,
            6
        ]
    },
    {
        "id": "advanced-mining-drill",
        "name": "Advanced mining machine",
        "inputs": [
            "titanium-alloy",
            "frame-material",
            "super-magnetic-ring",
            "quantum-chip",
            "optical-grating-crystal"
        ],
        "outputs": [
            "advanced-mining-machine"
        ],
        "iconPosition": [
            12,
            5
        ]
    },
    {
        "id": "geothermal-power-station",
        "name": "Geothermal power station",
        "inputs": [
            "steel",
            "copper-ingot",
            "photon-combiner",
            "super-magnetic-ring"
        ],
        "outputs": [
            "geothermal-power-station"
        ],
        "iconPosition": [
            11,
            3
        ]
    },
    {
        "id": "deuterium-collecting",
        "name": "Deuterium (collecting)",
        "inputs": [],
        "outputs": [
            "deuterium"
        ],
        "iconPosition": [
            4,
            2
        ]
    },
    {
        "id": "hydrogen-collecting",
        "name": "Hydrogen (collecting)",
        "inputs": [],
        "outputs": [
            "hydrogen"
        ],
        "iconPosition": [
            7,
            4
        ]
    },
    {
        "id": "oil-vein",
        "name": "Crude oil seep",
        "inputs": [],
        "outputs": [
            "crude-oil"
        ],
        "iconPosition": [
            7,
            6
        ]
    },
    {
        "id": "sulphuric-acid-vein",
        "name": "Sulphuric acid ocean",
        "inputs": [],
        "outputs": [
            "sulfuric-acid"
        ],
        "iconPosition": [
            10,
            9
        ]
    },
    {
        "id": "mag-vein",
        "name": "Unipolar magnet vein",
        "inputs": [],
        "outputs": [
            "unipolar-magnet"
        ],
        "iconPosition": [
            2,
            6
        ]
    },
    {
        "id": "water-vein",
        "name": "Ocean",
        "inputs": [],
        "outputs": [
            "water"
        ],
        "iconPosition": [
            9,
            10
        ]
    },
    {
        "id": "orbital-collector",
        "name": "Orbital collector",
        "inputs": [
            "interstellar-logistics-station",
            "super-magnetic-ring",
            "reinforced-thruster",
            "accumulator-(full)"
        ],
        "outputs": [
            "orbital-collector"
        ],
        "iconPosition": [
            8,
            6
        ]
    },
    {
        "id": "coal-vein",
        "name": "Coal vein",
        "inputs": [],
        "outputs": [
            "coal"
        ],
        "iconPosition": [
            8,
            1
        ]
    },
    {
        "id": "mag-turbine",
        "name": "Electromagnetic turbine",
        "inputs": [
            "electric-motor",
            "magnetic-coil"
        ],
        "outputs": [
            "electromagnetic-turbine"
        ],
        "iconPosition": [
            8,
            5
        ]
    },
    {
        "id": "deuterium-formula",
        "name": "Deuterium fractionation",
        "inputs": [
            "hydrogen"
        ],
        "outputs": [
            "deuterium"
        ],
        "iconPosition": [
            3,
            2
        ]
    },
    {
        "id": "crysrub-vein",
        "name": "Organic crystal vein",
        "inputs": [],
        "outputs": [
            "organic-crystal"
        ],
        "iconPosition": [
            12,
            1
        ]
    },
    {
        "id": "copper-vein",
        "name": "Copper vein",
        "inputs": [],
        "outputs": [
            "copper-ore"
        ],
        "iconPosition": [
            9,
            1
        ]
    },
    {
        "id": "hyper-magnetism-ring",
        "name": "Super-magnetic ring",
        "inputs": [
            "electromagnetic-turbine",
            "magnet",
            "energetic-graphite"
        ],
        "outputs": [
            "super-magnetic-ring"
        ],
        "iconPosition": [
            8,
            4
        ]
    },
    {
        "id": "diamond-vein",
        "name": "Diamond vein",
        "inputs": [],
        "outputs": [
            "kimberlite-ore"
        ],
        "iconPosition": [
            6,
            2
        ]
    },
    {
        "id": "titanium-vein",
        "name": "Titanium vein",
        "inputs": [],
        "outputs": [
            "titanium-ore"
        ],
        "iconPosition": [
            4,
            10
        ]
    },
    {
        "id": "terrain-tool",
        "name": "Foundation",
        "inputs": [
            "stone-brick",
            "steel"
        ],
        "outputs": [
            "foundation"
        ],
        "iconPosition": [
            12,
            9
        ]
    },
    {
        "id": "logistic-drone",
        "name": "Logistics drone",
        "inputs": [
            "iron-ingot",
            "processor",
            "thruster"
        ],
        "outputs": [
            "logistics-drone"
        ],
        "iconPosition": [
            5,
            5
        ]
    },
    {
        "id": "fractal-vein",
        "name": "Fractal silicon vein",
        "inputs": [],
        "outputs": [
            "fractal-silicon"
        ],
        "iconPosition": [
            0,
            3
        ]
    },
    {
        "id": "photon-capacitor-full",
        "name": "Ray receiver photon generation",
        "inputs": [],
        "outputs": [
            "critical-photon"
        ],
        "iconPosition": [
            2,
            7
        ]
    },
    {
        "id": "storage-tank",
        "name": "Storage tank",
        "inputs": [
            "iron-ingot",
            "stone-brick",
            "glass"
        ],
        "outputs": [
            "storage-tank"
        ],
        "iconPosition": [
            8,
            9
        ]
    },
    {
        "id": "grat-vein",
        "name": "Optical grating crystal vein",
        "inputs": [],
        "outputs": [
            "optical-grating-crystal"
        ],
        "iconPosition": [
            3,
            4
        ]
    },
    {
        "id": "fractionator",
        "name": "Fractionator",
        "inputs": [
            "steel",
            "stone-brick",
            "glass",
            "processor"
        ],
        "outputs": [
            "fractionator"
        ],
        "iconPosition": [
            1,
            3
        ]
    },
    {
        "id": "g-matrix",
        "name": "Gravity matrix",
        "inputs": [
            "graviton-lens",
            "quantum-chip"
        ],
        "outputs": [
            "gravity-matrix"
        ],
        "iconPosition": [
            8,
            3
        ]
    },
    {
        "id": "splitter-4dir",
        "name": "Splitter",
        "inputs": [
            "iron-ingot",
            "gear",
            "circuit-board"
        ],
        "outputs": [
            "splitter"
        ],
        "iconPosition": [
            1,
            9
        ]
    },
    {
        "id": "storage-2",
        "name": "Storage mk.II",
        "inputs": [
            "steel",
            "stone-brick"
        ],
        "outputs": [
            "storage-mk-ii"
        ],
        "iconPosition": [
            7,
            9
        ]
    },
    {
        "id": "strange-matter-generator",
        "name": "Strange matter",
        "inputs": [
            "particle-container",
            "iron-ingot",
            "deuterium"
        ],
        "outputs": [
            "strange-matter"
        ],
        "iconPosition": [
            9,
            9
        ]
    },
    {
        "id": "gravity-lens",
        "name": "Graviton lens",
        "inputs": [
            "diamond",
            "strange-matter"
        ],
        "outputs": [
            "graviton-lens"
        ],
        "iconPosition": [
            4,
            4
        ]
    },
    {
        "id": "logistic-station",
        "name": "Planetary logistics station",
        "inputs": [
            "steel",
            "titanium-ingot",
            "processor",
            "particle-container"
        ],
        "outputs": [
            "planetary-logistics-station"
        ],
        "iconPosition": [
            6,
            5
        ]
    },
    {
        "id": "partical-capacitor",
        "name": "Particle container",
        "inputs": [
            "electromagnetic-turbine",
            "copper-ingot",
            "graphene"
        ],
        "outputs": [
            "particle-container"
        ],
        "iconPosition": [
            11,
            6
        ]
    },
    {
        "id": "partical-capacitor-lv2",
        "name": "Particle container (advanced)",
        "inputs": [
            "unipolar-magnet",
            "copper-ingot"
        ],
        "outputs": [
            "particle-container"
        ],
        "iconPosition": [
            10,
            6
        ]
    },
    {
        "id": "interstellar-logistic-station",
        "name": "Interstellar logistics station",
        "inputs": [
            "planetary-logistics-station",
            "titanium-alloy",
            "particle-container"
        ],
        "outputs": [
            "interstellar-logistics-station"
        ],
        "iconPosition": [
            0,
            5
        ]
    },
    {
        "id": "electric-motor",
        "name": "Electric motor",
        "inputs": [
            "iron-ingot",
            "gear",
            "magnetic-coil"
        ],
        "outputs": [
            "electric-motor"
        ],
        "iconPosition": [
            10,
            2
        ]
    },
    {
        "id": "vertical-launching-silo",
        "name": "Vertical launching silo",
        "inputs": [
            "titanium-alloy",
            "frame-material",
            "graviton-lens",
            "quantum-chip"
        ],
        "outputs": [
            "vertical-launching-silo"
        ],
        "iconPosition": [
            7,
            10
        ]
    },
    {
        "id": "accumulator",
        "name": "Accumulator",
        "inputs": [
            "iron-ingot",
            "super-magnetic-ring",
            "crystal-silicon"
        ],
        "outputs": [
            "accumulator"
        ],
        "iconPosition": [
            4,
            0
        ]
    },
    {
        "id": "photon-formula",
        "name": "Mass-energy storage",
        "inputs": [
            "critical-photon"
        ],
        "outputs": [
            "antimatter",
            "hydrogen"
        ],
        "iconPosition": [
            3,
            7
        ]
    },
    {
        "id": "em-rail-ejector",
        "name": "EM-Rail ejector",
        "inputs": [
            "steel",
            "gear",
            "processor",
            "super-magnetic-ring"
        ],
        "outputs": [
            "em-rail-ejector"
        ],
        "iconPosition": [
            11,
            2
        ]
    },
    {
        "id": "frame-material",
        "name": "Frame material",
        "inputs": [
            "carbon-nanotube",
            "titanium-alloy",
            "high-purity-silicon"
        ],
        "outputs": [
            "frame-material"
        ],
        "iconPosition": [
            2,
            3
        ]
    },
    {
        "id": "photo-shifter",
        "name": "Photon combiner",
        "inputs": [
            "prism",
            "circuit-board"
        ],
        "outputs": [
            "photon-combiner"
        ],
        "iconPosition": [
            1,
            7
        ]
    },
    {
        "id": "photo-shifter-lv2",
        "name": "Photon combiner (advanced)",
        "inputs": [
            "optical-grating-crystal",
            "circuit-board"
        ],
        "outputs": [
            "photon-combiner"
        ],
        "iconPosition": [
            0,
            7
        ]
    },
    {
        "id": "space-warper-lv2",
        "name": "Space warper (advanced)",
        "inputs": [
            "gravity-matrix"
        ],
        "outputs": [
            "space-warper"
        ],
        "iconPosition": [
            12,
            8
        ]
    },
    {
        "id": "fuel-plant",
        "name": "Thermal power plant",
        "inputs": [
            "iron-ingot",
            "stone-brick",
            "gear",
            "magnetic-coil"
        ],
        "outputs": [
            "thermal-power-plant"
        ],
        "iconPosition": [
            3,
            3
        ]
    },
    {
        "id": "rocket",
        "name": "Small carrier rocket",
        "inputs": [
            "dyson-sphere-component",
            "deuteron-fuel-rod",
            "quantum-chip"
        ],
        "outputs": [
            "small-carrier-rocket"
        ],
        "iconPosition": [
            3,
            8
        ]
    },
    {
        "id": "u-matrix",
        "name": "Universe matrix",
        "inputs": [
            "electromagnetic-matrix",
            "energy-matrix",
            "structure-matrix",
            "information-matrix",
            "gravity-matrix",
            "antimatter"
        ],
        "outputs": [
            "universe-matrix"
        ],
        "iconPosition": [
            6,
            10
        ]
    },
    {
        "id": "silicium-single-crystal",
        "name": "High-purity silicon",
        "inputs": [
            "silicon-ore"
        ],
        "outputs": [
            "high-purity-silicon"
        ],
        "iconPosition": [
            7,
            8
        ]
    },
    {
        "id": "plane-smelter",
        "name": "Plane Smelter",
        "inputs": [
            "arc-smelter",
            "frame-material",
            "plane-filter",
            "unipolar-magnet"
        ],
        "outputs": [
            "plane-smelter"
        ],
        "iconPosition": [
            8,
            8
        ]
    },
    {
        "id": "diamond",
        "name": "Diamond",
        "inputs": [
            "energetic-graphite"
        ],
        "outputs": [
            "diamond"
        ],
        "iconPosition": [
            7,
            2
        ]
    },
    {
        "id": "i-matrix",
        "name": "Information matrix",
        "inputs": [
            "processor",
            "particle-broadband"
        ],
        "outputs": [
            "information-matrix"
        ],
        "iconPosition": [
            9,
            4
        ]
    },
    {
        "id": "space-warper",
        "name": "Space warper",
        "inputs": [
            "graviton-lens"
        ],
        "outputs": [
            "space-warper"
        ],
        "iconPosition": [
            0,
            9
        ]
    },
    {
        "id": "solar-panel",
        "name": "Solar panel",
        "inputs": [
            "copper-ingot",
            "high-purity-silicon",
            "circuit-board"
        ],
        "outputs": [
            "solar-panel"
        ],
        "iconPosition": [
            11,
            8
        ]
    },
    {
        "id": "belt-1",
        "name": "Conveyor belt mk.I",
        "inputs": [
            "iron-ingot",
            "gear"
        ],
        "outputs": [
            "conveyor-belt-mk-i"
        ],
        "iconPosition": [
            11,
            0
        ]
    },
    {
        "id": "belt-2",
        "name": "Conveyor belt mk.II",
        "inputs": [
            "conveyor-belt-mk-i",
            "electromagnetic-turbine"
        ],
        "outputs": [
            "conveyor-belt-mk-ii"
        ],
        "iconPosition": [
            12,
            0
        ]
    },
    {
        "id": "belt-3",
        "name": "Conveyor belt mk.III",
        "inputs": [
            "conveyor-belt-mk-ii",
            "super-magnetic-ring",
            "graphene"
        ],
        "outputs": [
            "conveyor-belt-mk-iii"
        ],
        "iconPosition": [
            0,
            1
        ]
    },
    {
        "id": "water-pump",
        "name": "Water pump",
        "inputs": [
            "iron-ingot",
            "stone-brick",
            "electric-motor",
            "circuit-board"
        ],
        "outputs": [
            "water-pump"
        ],
        "iconPosition": [
            8,
            10
        ]
    },
    {
        "id": "ray-receiver",
        "name": "Ray receiver",
        "inputs": [
            "steel",
            "high-purity-silicon",
            "photon-combiner",
            "processor",
            "super-magnetic-ring"
        ],
        "outputs": [
            "ray-receiver"
        ],
        "iconPosition": [
            0,
            8
        ]
    },
    {
        "id": "titanium-plate",
        "name": "Titanium ingot",
        "inputs": [
            "titanium-ore"
        ],
        "outputs": [
            "titanium-ingot"
        ],
        "iconPosition": [
            5,
            10
        ]
    },
    {
        "id": "processor",
        "name": "Processor",
        "inputs": [
            "circuit-board",
            "microcrystalline-component"
        ],
        "outputs": [
            "processor"
        ],
        "iconPosition": [
            11,
            7
        ]
    },
    {
        "id": "quantum-processor",
        "name": "Quantum chip",
        "inputs": [
            "processor",
            "plane-filter"
        ],
        "outputs": [
            "quantum-chip"
        ],
        "iconPosition": [
            12,
            7
        ]
    },
    {
        "id": "storage-1",
        "name": "Storage mk.I",
        "inputs": [
            "iron-ingot",
            "stone-brick"
        ],
        "outputs": [
            "storage-mk-i"
        ],
        "iconPosition": [
            6,
            9
        ]
    },
    {
        "id": "smelter",
        "name": "Arc Smelter",
        "inputs": [
            "iron-ingot",
            "stone-brick",
            "circuit-board",
            "magnetic-coil"
        ],
        "outputs": [
            "arc-smelter"
        ],
        "iconPosition": [
            9,
            8
        ]
    },
    {
        "id": "assembler-1",
        "name": "Assembling machine mk.I",
        "inputs": [
            "iron-ingot",
            "gear",
            "circuit-board"
        ],
        "outputs": [
            "assembling-machine-mk-i"
        ],
        "iconPosition": [
            7,
            0
        ]
    },
    {
        "id": "assembler-2",
        "name": "Assembling machine mk.II",
        "inputs": [
            "assembling-machine-mk-i",
            "graphene",
            "processor"
        ],
        "outputs": [
            "assembling-machine-mk-ii"
        ],
        "iconPosition": [
            8,
            0
        ]
    },
    {
        "id": "assembler-3",
        "name": "Assembling machine mk.III",
        "inputs": [
            "assembling-machine-mk-ii",
            "particle-broadband",
            "quantum-chip"
        ],
        "outputs": [
            "assembling-machine-mk-iii"
        ],
        "iconPosition": [
            9,
            0
        ]
    },
    {
        "id": "circuit-board",
        "name": "Circuit board",
        "inputs": [
            "iron-ingot",
            "copper-ingot"
        ],
        "outputs": [
            "circuit-board"
        ],
        "iconPosition": [
            7,
            1
        ]
    },
    {
        "id": "fusion-reactor",
        "name": "Artificial star",
        "inputs": [
            "titanium-alloy",
            "frame-material",
            "annihilation-constraint-sphere",
            "quantum-chip"
        ],
        "outputs": [
            "artificial-star"
        ],
        "iconPosition": [
            7,
            3
        ]
    },
    {
        "id": "solar-collector",
        "name": "Solar sail",
        "inputs": [
            "graphene",
            "photon-combiner"
        ],
        "outputs": [
            "solar-sail"
        ],
        "iconPosition": [
            10,
            8
        ]
    },
    {
        "id": "plane-filter",
        "name": "Plane filter",
        "inputs": [
            "casimir-crystal",
            "titanium-glass"
        ],
        "outputs": [
            "plane-filter"
        ],
        "iconPosition": [
            5,
            7
        ]
    },
    {
        "id": "deuterium-energy-fuel",
        "name": "Deuteron fuel rod",
        "inputs": [
            "titanium-alloy",
            "deuterium",
            "super-magnetic-ring"
        ],
        "outputs": [
            "deuteron-fuel-rod"
        ],
        "iconPosition": [
            2,
            2
        ]
    },
    {
        "id": "antimatter-energy-fuel",
        "name": "Antimatter fuel rod",
        "inputs": [
            "antimatter",
            "hydrogen",
            "annihilation-constraint-sphere",
            "titanium-alloy"
        ],
        "outputs": [
            "antimatter-fuel-rod"
        ],
        "iconPosition": [
            6,
            0
        ]
    },
    {
        "id": "crystal-rubber-lv0",
        "name": "Organic crystal (original)",
        "inputs": [
            "log",
            "plant-fuel",
            "water"
        ],
        "outputs": [
            "organic-crystal"
        ],
        "iconPosition": [
            11,
            1
        ]
    },
    {
        "id": "particle-wide-band",
        "name": "Particle broadband",
        "inputs": [
            "carbon-nanotube",
            "crystal-silicon",
            "plastic"
        ],
        "outputs": [
            "particle-broadband"
        ],
        "iconPosition": [
            12,
            6
        ]
    },
    {
        "id": "bamboo-vein",
        "name": "Spiniform stalagmite crystal vein",
        "inputs": [],
        "outputs": [
            "spiniform-stalagmite-crystal"
        ],
        "iconPosition": [
            10,
            0
        ]
    },
    {
        "id": "iron-vein",
        "name": "Iron vein",
        "inputs": [],
        "outputs": [
            "iron-ore"
        ],
        "iconPosition": [
            2,
            5
        ]
    },
    {
        "id": "silicium-vein",
        "name": "Silicon vein",
        "inputs": [],
        "outputs": [
            "silicon-ore"
        ],
        "iconPosition": [
            6,
            8
        ]
    },
    {
        "id": "stone-vein",
        "name": "Stone vein",
        "inputs": [],
        "outputs": [
            "stone"
        ],
        "iconPosition": [
            5,
            9
        ]
    },
    {
        "id": "logistic-vessel",
        "name": "Logistics vessel",
        "inputs": [
            "titanium-alloy",
            "processor",
            "reinforced-thruster"
        ],
        "outputs": [
            "logistics-vessel"
        ],
        "iconPosition": [
            7,
            5
        ]
    },
    {
        "id": "fusion-power-station",
        "name": "Mini fusion power plant",
        "inputs": [
            "titanium-alloy",
            "super-magnetic-ring",
            "carbon-nanotube",
            "processor"
        ],
        "outputs": [
            "mini-fusion-power-plant"
        ],
        "iconPosition": [
            6,
            3
        ]
    },
    {
        "id": "inserter-1",
        "name": "Sorter mk.I",
        "inputs": [
            "iron-ingot",
            "circuit-board"
        ],
        "outputs": [
            "sorter-mk-i"
        ],
        "iconPosition": [
            10,
            4
        ]
    },
    {
        "id": "inserter-2",
        "name": "Sorter mk.II",
        "inputs": [
            "sorter-mk-i",
            "electric-motor"
        ],
        "outputs": [
            "sorter-mk-ii"
        ],
        "iconPosition": [
            11,
            4
        ]
    },
    {
        "id": "inserter-3",
        "name": "Sorter mk.III",
        "inputs": [
            "sorter-mk-ii",
            "electromagnetic-turbine"
        ],
        "outputs": [
            "sorter-mk-iii"
        ],
        "iconPosition": [
            12,
            4
        ]
    },
    {
        "id": "dyson-sphere-component",
        "name": "Dyson sphere component",
        "inputs": [
            "frame-material",
            "solar-sail",
            "processor"
        ],
        "outputs": [
            "dyson-sphere-component"
        ],
        "iconPosition": [
            8,
            2
        ]
    },
    {
        "id": "orbital-substation",
        "name": "Satellite substation",
        "inputs": [
            "wireless-power-tower",
            "super-magnetic-ring",
            "frame-material"
        ],
        "outputs": [
            "satellite-substation"
        ],
        "iconPosition": [
            9,
            6
        ]
    },
    {
        "id": "energy-exchanger",
        "name": "Energy exchanger",
        "inputs": [
            "titanium-alloy",
            "steel",
            "processor",
            "particle-container"
        ],
        "outputs": [
            "energy-exchanger"
        ],
        "iconPosition": [
            12,
            2
        ]
    },
    {
        "id": "silicium-high-purity-lv2",
        "name": "Crystal silicon (advanced)",
        "inputs": [
            "fractal-silicon"
        ],
        "outputs": [
            "crystal-silicon"
        ],
        "iconPosition": [
            4,
            8
        ]
    },
    {
        "id": "titanium-alloy",
        "name": "Titanium alloy",
        "inputs": [
            "titanium-ingot",
            "steel",
            "sulfuric-acid"
        ],
        "outputs": [
            "titanium-alloy"
        ],
        "iconPosition": [
            3,
            10
        ]
    },
    {
        "id": "x-ray",
        "name": "X-ray cracking",
        "inputs": [
            "refined-oil",
            "hydrogen"
        ],
        "outputs": [
            "hydrogen",
            "energetic-graphite"
        ],
        "iconPosition": [
            12,
            10
        ]
    },
    {
        "id": "steel-plate",
        "name": "Steel",
        "inputs": [
            "iron-ingot"
        ],
        "outputs": [
            "steel"
        ],
        "iconPosition": [
            3,
            9
        ]
    },
    {
        "id": "diamond-lv2",
        "name": "Diamond (advanced)",
        "inputs": [
            "kimberlite-ore"
        ],
        "outputs": [
            "diamond"
        ],
        "iconPosition": [
            5,
            2
        ]
    },
    {
        "id": "fusion-capacitor",
        "name": "Annihilation constraint sphere",
        "inputs": [
            "particle-container",
            "processor"
        ],
        "outputs": [
            "annihilation-constraint-sphere"
        ],
        "iconPosition": [
            5,
            3
        ]
    },
    {
        "id": "micro-component",
        "name": "Microcrystalline component",
        "inputs": [
            "high-purity-silicon",
            "copper-ingot"
        ],
        "outputs": [
            "microcrystalline-component"
        ],
        "iconPosition": [
            11,
            5
        ]
    },
    {
        "id": "glass",
        "name": "Glass",
        "inputs": [
            "stone"
        ],
        "outputs": [
            "glass"
        ],
        "iconPosition": [
            12,
            3
        ]
    },
    {
        "id": "mining-drill",
        "name": "Mining machine",
        "inputs": [
            "iron-ingot",
            "circuit-board",
            "magnetic-coil",
            "gear"
        ],
        "outputs": [
            "mining-machine"
        ],
        "iconPosition": [
            0,
            6
        ]
    },
    {
        "id": "hadron-collider",
        "name": "Miniature particle collider",
        "inputs": [
            "titanium-alloy",
            "frame-material",
            "super-magnetic-ring",
            "graphene",
            "processor"
        ],
        "outputs": [
            "miniature-particle-collider"
        ],
        "iconPosition": [
            5,
            4
        ]
    },
    {
        "id": "nanotube-lv2",
        "name": "Carbon nanotube (advanced)",
        "inputs": [
            "spiniform-stalagmite-crystal"
        ],
        "outputs": [
            "carbon-nanotube"
        ],
        "iconPosition": [
            3,
            6
        ]
    },
    {
        "id": "silicium-high-purity",
        "name": "Crystal silicon",
        "inputs": [
            "high-purity-silicon"
        ],
        "outputs": [
            "crystal-silicon"
        ],
        "iconPosition": [
            5,
            8
        ]
    },
    {
        "id": "graphene-lv2",
        "name": "Graphene (advanced)",
        "inputs": [
            "fire-ice"
        ],
        "outputs": [
            "graphene",
            "hydrogen"
        ],
        "iconPosition": [
            0,
            4
        ]
    },
    {
        "id": "graphene",
        "name": "Graphene",
        "inputs": [
            "energetic-graphite",
            "sulfuric-acid"
        ],
        "outputs": [
            "graphene"
        ],
        "iconPosition": [
            1,
            4
        ]
    },
    {
        "id": "titan-glass",
        "name": "Titanium glass",
        "inputs": [
            "glass",
            "titanium-ingot",
            "water"
        ],
        "outputs": [
            "titanium-glass"
        ],
        "iconPosition": [
            2,
            10
        ]
    },
    {
        "id": "casimir-crystal",
        "name": "Casimir crystal",
        "inputs": [
            "titanium-crystal",
            "graphene",
            "hydrogen"
        ],
        "outputs": [
            "casimir-crystal"
        ],
        "iconPosition": [
            3,
            1
        ]
    },
    {
        "id": "c-matrix",
        "name": "Structure matrix",
        "inputs": [
            "diamond",
            "titanium-crystal"
        ],
        "outputs": [
            "structure-matrix"
        ],
        "iconPosition": [
            1,
            1
        ]
    },
    {
        "id": "nanotube",
        "name": "Carbon nanotube",
        "inputs": [
            "graphene",
            "titanium-ingot"
        ],
        "outputs": [
            "carbon-nanotube"
        ],
        "iconPosition": [
            4,
            6
        ]
    },
    {
        "id": "titan-crystal",
        "name": "Titanium crystal",
        "inputs": [
            "organic-crystal",
            "titanium-ingot"
        ],
        "outputs": [
            "titanium-crystal"
        ],
        "iconPosition": [
            1,
            10
        ]
    },
    {
        "id": "casimir-crystal-lv2",
        "name": "Casimir crystal (advanced)",
        "inputs": [
            "optical-grating-crystal",
            "graphene",
            "hydrogen"
        ],
        "outputs": [
            "casimir-crystal"
        ],
        "iconPosition": [
            2,
            1
        ]
    },
    {
        "id": "chemical-plant",
        "name": "Chemical plant",
        "inputs": [
            "steel",
            "stone-brick",
            "glass",
            "circuit-board"
        ],
        "outputs": [
            "chemical-plant"
        ],
        "iconPosition": [
            6,
            1
        ]
    },
    {
        "id": "fuel-thruster",
        "name": "Thruster",
        "inputs": [
            "steel",
            "copper-ingot"
        ],
        "outputs": [
            "thruster"
        ],
        "iconPosition": [
            4,
            3
        ]
    },
    {
        "id": "graphite",
        "name": "Energetic graphite",
        "inputs": [
            "coal"
        ],
        "outputs": [
            "energetic-graphite"
        ],
        "iconPosition": [
            2,
            4
        ]
    },
    {
        "id": "oil-refinery",
        "name": "Oil refinery",
        "inputs": [
            "steel",
            "stone-brick",
            "circuit-board",
            "plasma-exciter"
        ],
        "outputs": [
            "oil-refinery"
        ],
        "iconPosition": [
            6,
            6
        ]
    },
    {
        "id": "plasma-generator",
        "name": "Plasma exciter",
        "inputs": [
            "magnetic-coil",
            "prism"
        ],
        "outputs": [
            "plasma-exciter"
        ],
        "iconPosition": [
            7,
            7
        ]
    },
    {
        "id": "plasma-refining",
        "name": "Plasma refining",
        "inputs": [
            "crude-oil"
        ],
        "outputs": [
            "hydrogen",
            "refined-oil"
        ],
        "iconPosition": [
            8,
            7
        ]
    },
    {
        "id": "oil-extractor",
        "name": "Oil extractor",
        "inputs": [
            "steel",
            "stone-brick",
            "circuit-board",
            "plasma-exciter"
        ],
        "outputs": [
            "oil-extractor"
        ],
        "iconPosition": [
            5,
            6
        ]
    },
    {
        "id": "hydrogen-energy-fuel",
        "name": "Hydrogen fuel rod",
        "inputs": [
            "titanium-ingot",
            "hydrogen"
        ],
        "outputs": [
            "hydrogen-fuel-rod"
        ],
        "iconPosition": [
            6,
            4
        ]
    },
    {
        "id": "e-matrix",
        "name": "Energy matrix",
        "inputs": [
            "energetic-graphite",
            "hydrogen"
        ],
        "outputs": [
            "energy-matrix"
        ],
        "iconPosition": [
            9,
            2
        ]
    },
    {
        "id": "prism",
        "name": "Prism",
        "inputs": [
            "glass"
        ],
        "outputs": [
            "prism"
        ],
        "iconPosition": [
            10,
            7
        ]
    },
    {
        "id": "ion-thruster",
        "name": "Reinforced thruster",
        "inputs": [
            "titanium-alloy",
            "electromagnetic-turbine"
        ],
        "outputs": [
            "reinforced-thruster"
        ],
        "iconPosition": [
            1,
            5
        ]
    },
    {
        "id": "t-matrix",
        "name": "Electromagnetic matrix",
        "inputs": [
            "magnetic-coil",
            "circuit-board"
        ],
        "outputs": [
            "electromagnetic-matrix"
        ],
        "iconPosition": [
            11,
            9
        ]
    },
    {
        "id": "magnetism-wire",
        "name": "Magnetic coil",
        "inputs": [
            "magnet",
            "copper-ingot"
        ],
        "outputs": [
            "magnetic-coil"
        ],
        "iconPosition": [
            10,
            5
        ]
    },
    {
        "id": "gear-wheel",
        "name": "Gear",
        "inputs": [
            "iron-ingot"
        ],
        "outputs": [
            "gear"
        ],
        "iconPosition": [
            10,
            3
        ]
    },
    {
        "id": "tesla-coil",
        "name": "Tesla tower",
        "inputs": [
            "iron-ingot",
            "magnetic-coil"
        ],
        "outputs": [
            "tesla-tower"
        ],
        "iconPosition": [
            0,
            10
        ]
    },
    {
        "id": "lab",
        "name": "Matrix lab",
        "inputs": [
            "iron-ingot",
            "glass",
            "circuit-board",
            "magnetic-coil"
        ],
        "outputs": [
            "matrix-lab"
        ],
        "iconPosition": [
            4,
            5
        ]
    },
    {
        "id": "charging-pole",
        "name": "Wireless power tower",
        "inputs": [
            "tesla-tower",
            "plasma-exciter"
        ],
        "outputs": [
            "wireless-power-tower"
        ],
        "iconPosition": [
            4,
            1
        ]
    },
    {
        "id": "plastic",
        "name": "Plastic",
        "inputs": [
            "refined-oil",
            "energetic-graphite"
        ],
        "outputs": [
            "plastic"
        ],
        "iconPosition": [
            9,
            7
        ]
    },
    {
        "id": "wind-turbine",
        "name": "Wind turbine",
        "inputs": [
            "iron-ingot",
            "gear",
            "magnetic-coil"
        ],
        "outputs": [
            "wind-turbine"
        ],
        "iconPosition": [
            10,
            10
        ]
    },
    {
        "id": "sulphuric-acid",
        "name": "Sulfuric acid",
        "inputs": [
            "refined-oil",
            "stone",
            "water"
        ],
        "outputs": [
            "sulfuric-acid"
        ],
        "iconPosition": [
            10,
            9
        ]
    },
    {
        "id": "silicium-ore",
        "name": "Silicon ore",
        "inputs": [
            "stone"
        ],
        "outputs": [
            "silicon-ore"
        ],
        "iconPosition": [
            6,
            8
        ]
    },
    {
        "id": "deuterium",
        "name": "Deuterium",
        "inputs": [
            "hydrogen"
        ],
        "outputs": [
            "deuterium"
        ],
        "iconPosition": [
            4,
            2
        ]
    },
    {
        "id": "fireice-vein",
        "name": "Fire ice vein",
        "inputs": [],
        "outputs": [
            "fire-ice"
        ],
        "iconPosition": [
            9,
            3
        ]
    },
    {
        "id": "crystal-rubber",
        "name": "Organic crystal",
        "inputs": [
            "plastic",
            "refined-oil",
            "water"
        ],
        "outputs": [
            "organic-crystal"
        ],
        "iconPosition": [
            12,
            1
        ]
    },
    {
        "id": "logistic-bots",
        "name": "Logistic Bots",
        "inputs": [
            "iron-ingot",
            "electromagnetic-turbine",
            "processor"
        ],
        "outputs": [
            "logistic-bots"
        ],
        "iconPosition": [
            0,
            2
        ]
    },
    {
        "id": "logistic-distributor",
        "name": "Logistic Distributor",
        "inputs": [
            "iron-ingot",
            "plasma-exciter",
            "processor"
        ],
        "outputs": [
            "logistic-distributor"
        ],
        "iconPosition": [
            1,
            2
        ]
    },
    {
        "id": "chemical-plant-v2",
        "name": "Quantum Chemical Plant",
        "inputs": [
            "chemical-plant",
            "titanium-glass",
            "strange-matter",
            "quantum-chip"
        ],
        "outputs": [
            "chemical-plant-v2"
        ],
        "iconPosition": [
            5,
            1
        ]
    }
]

export default recipes
