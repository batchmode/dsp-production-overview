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
        "icon": "iron-ingot"
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
        "icon": "magnet"
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
        "icon": "copper-ingot"
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
        "icon": "reforming-refine"
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
        "icon": "automatic-piler"
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
        "icon": "stone-brick"
    },
    {
        "id": "fire-ice-collecting",
        "name": "Fire Ice (collecting)",
        "inputs": [],
        "outputs": [
            "fire-ice"
        ],
        "icon": "fire-ice"
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
        "icon": "spray-coater"
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
        "icon": "proliferator-mk-iii"
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
        "icon": "proliferator-mk-i"
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
        "icon": "proliferator-mk-ii"
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
        "icon": "accumulator-(full)"
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
        "icon": "traffic-monitor"
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
        "icon": "advanced-mining-machine"
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
        "icon": "geothermal-power-station"
    },
    {
        "id": "deuterium-collecting",
        "name": "Deuterium (collecting)",
        "inputs": [],
        "outputs": [
            "deuterium"
        ],
        "icon": "deuterium"
    },
    {
        "id": "hydrogen-collecting",
        "name": "Hydrogen (collecting)",
        "inputs": [],
        "outputs": [
            "hydrogen"
        ],
        "icon": "hydrogen"
    },
    {
        "id": "oil-vein",
        "name": "Crude oil seep",
        "inputs": [],
        "outputs": [
            "crude-oil"
        ],
        "icon": "crude-oil"
    },
    {
        "id": "sulphuric-acid-vein",
        "name": "Sulphuric acid ocean",
        "inputs": [],
        "outputs": [
            "sulfuric-acid"
        ],
        "icon": "sulfuric-acid"
    },
    {
        "id": "mag-vein",
        "name": "Unipolar magnet vein",
        "inputs": [],
        "outputs": [
            "unipolar-magnet"
        ],
        "icon": "unipolar-magnet"
    },
    {
        "id": "water-vein",
        "name": "Ocean",
        "inputs": [],
        "outputs": [
            "water"
        ],
        "icon": "water"
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
        "icon": "orbital-collector"
    },
    {
        "id": "coal-vein",
        "name": "Coal vein",
        "inputs": [],
        "outputs": [
            "coal"
        ],
        "icon": "coal"
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
        "icon": "electromagnetic-turbine"
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
        "icon": "deuterium"
    },
    {
        "id": "crysrub-vein",
        "name": "Organic crystal vein",
        "inputs": [],
        "outputs": [
            "organic-crystal"
        ],
        "icon": "organic-crystal"
    },
    {
        "id": "copper-vein",
        "name": "Copper vein",
        "inputs": [],
        "outputs": [
            "copper-ore"
        ],
        "icon": "copper-ore"
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
        "icon": "super-magnetic-ring"
    },
    {
        "id": "diamond-vein",
        "name": "Diamond vein",
        "inputs": [],
        "outputs": [
            "kimberlite-ore"
        ],
        "icon": "kimberlite-ore"
    },
    {
        "id": "titanium-vein",
        "name": "Titanium vein",
        "inputs": [],
        "outputs": [
            "titanium-ore"
        ],
        "icon": "titanium-ore"
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
        "icon": "foundation"
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
        "icon": "logistics-drone"
    },
    {
        "id": "fractal-vein",
        "name": "Fractal silicon vein",
        "inputs": [],
        "outputs": [
            "fractal-silicon"
        ],
        "icon": "fractal-silicon"
    },
    {
        "id": "photon-capacitor-full",
        "name": "Ray receiver photon generation",
        "inputs": [],
        "outputs": [
            "critical-photon"
        ],
        "icon": "critical-photon"
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
        "icon": "storage-tank"
    },
    {
        "id": "grat-vein",
        "name": "Optical grating crystal vein",
        "inputs": [],
        "outputs": [
            "optical-grating-crystal"
        ],
        "icon": "optical-grating-crystal"
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
        "icon": "fractionator"
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
        "icon": "gravity-matrix"
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
        "icon": "splitter"
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
        "icon": "storage-mk-ii"
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
        "icon": "strange-matter"
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
        "icon": "graviton-lens"
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
        "icon": "planetary-logistics-station"
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
        "icon": "particle-container"
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
        "icon": "particle-container-advanced"
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
        "icon": "interstellar-logistics-station"
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
        "icon": "electric-motor"
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
        "icon": "vertical-launching-silo"
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
        "icon": "accumulator"
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
        "icon": "mass-energy-storage"
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
        "icon": "em-rail-ejector"
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
        "icon": "frame-material"
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
        "icon": "photon-combiner"
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
        "icon": "photon-combiner-advanced"
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
        "icon": "space-warper-advanced"
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
        "icon": "thermal-power-plant"
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
        "icon": "small-carrier-rocket"
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
        "icon": "universe-matrix"
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
        "icon": "high-purity-silicon"
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
        "icon": "plane-smelter"
    },
    {
        "id": "negentropy-smelter",
        "name": "Negentropy Smelter",
        "inputs": [
            "plane-smelter",
            "negentropy-singularity",
            "energy-shard",
            "quantum-chip"
        ],
        "outputs": [
            "negentropy-smelter"
        ],
        "icon": "negentropy-smelter"
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
        "icon": "diamond"
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
        "icon": "information-matrix"
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
        "icon": "space-warper"
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
        "icon": "solar-panel"
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
        "icon": "conveyor-belt-mk-i"
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
        "icon": "conveyor-belt-mk-ii"
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
        "icon": "conveyor-belt-mk-iii"
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
        "icon": "water-pump"
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
        "icon": "ray-receiver"
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
        "icon": "titanium-ingot"
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
        "icon": "processor"
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
        "icon": "quantum-chip"
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
        "icon": "storage-mk-i"
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
        "icon": "arc-smelter"
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
        "icon": "assembling-machine-mk-i"
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
        "icon": "assembling-machine-mk-ii"
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
        "icon": "assembling-machine-mk-iii"
    },
    {
        "id": "re-composing-assembler",
        "name": "Re Composing Assembler",
        "inputs": [
            "assembling-machine-mk-iii",
            "matter-recombinator",
            "energy-shard",
            "quantum-chip"
        ],
        "outputs": [
            "re-composing-assembler"
        ],
        "icon": "re-composing-assembler"
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
        "icon": "circuit-board"
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
        "icon": "artificial-star"
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
        "icon": "solar-sail"
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
        "icon": "plane-filter"
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
        "icon": "deuteron-fuel-rod"
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
        "icon": "antimatter-fuel-rod"
    },
    {
        "id": "strange-annihilation-fuel-rod",
        "name": "Strange Annihilation Fuel Rod",
        "inputs": [
            "antimatter-fuel-rod",
            "core-element",
            "strange-matter",
            "frame-material"
        ],
        "outputs": [
            "strange-annihilation-fuel-rod"
        ],
        "icon": "strange-annihilation-fuel-rod"
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
        "icon": "organic-crystal-original"
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
        "icon": "particle-broadband"
    },
    {
        "id": "bamboo-vein",
        "name": "Spiniform stalagmite crystal vein",
        "inputs": [],
        "outputs": [
            "spiniform-stalagmite-crystal"
        ],
        "icon": "spiniform-stalagmite-crystal"
    },
    {
        "id": "iron-vein",
        "name": "Iron vein",
        "inputs": [],
        "outputs": [
            "iron-ore"
        ],
        "icon": "iron-ore"
    },
    {
        "id": "silicium-vein",
        "name": "Silicon vein",
        "inputs": [],
        "outputs": [
            "silicon-ore"
        ],
        "icon": "silicon-ore"
    },
    {
        "id": "stone-vein",
        "name": "Stone vein",
        "inputs": [],
        "outputs": [
            "stone"
        ],
        "icon": "stone"
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
        "icon": "logistics-vessel"
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
        "icon": "mini-fusion-power-plant"
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
        "icon": "sorter-mk-i"
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
        "icon": "sorter-mk-ii"
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
        "icon": "sorter-mk-iii"
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
        "icon": "dyson-sphere-component"
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
        "icon": "satellite-substation"
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
        "icon": "energy-exchanger"
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
        "icon": "crystal-silicon-advanced"
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
        "icon": "titanium-alloy"
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
        "icon": "x-ray-cracking"
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
        "icon": "steel"
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
        "icon": "diamond-advanced"
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
        "icon": "annihilation-constraint-sphere"
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
        "icon": "microcrystalline-component"
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
        "icon": "glass"
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
        "icon": "mining-machine"
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
        "icon": "miniature-particle-collider"
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
        "icon": "carbon-nanotube-advanced"
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
        "icon": "crystal-silicon"
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
        "icon": "graphene-advanced"
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
        "icon": "graphene"
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
        "icon": "titanium-glass"
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
        "icon": "casimir-crystal"
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
        "icon": "structure-matrix"
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
        "icon": "carbon-nanotube"
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
        "icon": "titanium-crystal"
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
        "icon": "casimir-crystal-advanced"
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
        "icon": "chemical-plant"
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
        "icon": "thruster"
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
        "icon": "energetic-graphite"
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
        "icon": "oil-refinery"
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
        "icon": "plasma-exciter"
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
        "icon": "plasma-refining"
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
        "icon": "oil-extractor"
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
        "icon": "hydrogen-fuel-rod"
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
        "icon": "energy-matrix"
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
        "icon": "prism"
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
        "icon": "reinforced-thruster"
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
        "icon": "electromagnetic-matrix"
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
        "icon": "magnetic-coil"
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
        "icon": "gear"
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
        "icon": "tesla-tower"
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
        "icon": "matrix-lab"
    },
    {
        "id": "self-evolution-lab",
        "name": "Self Evolution Lab",
        "inputs": [
            "matrix-lab",
            "silicon-based-neuron",
            "dark-fog-matrix",
            "quantum-chip"
        ],
        "outputs": [
            "self-evolution-lab"
        ],
        "icon": "self-evolution-lab"
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
        "icon": "wireless-power-tower"
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
        "icon": "plastic"
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
        "icon": "wind-turbine"
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
        "icon": "sulfuric-acid"
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
        "icon": "silicon-ore"
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
        "icon": "deuterium"
    },
    {
        "id": "fireice-vein",
        "name": "Fire ice vein",
        "inputs": [],
        "outputs": [
            "fire-ice"
        ],
        "icon": "fire-ice"
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
        "icon": "organic-crystal"
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
        "icon": "logistic-bots"
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
        "icon": "logistic-distributor"
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
        "icon": "chemical-plant-v2"
    },
    {
        "id": "combustible-unit",
        "name": "Combustible Unit",
        "inputs": [
            "coal"
        ],
        "outputs": [
            "combustible-unit"
        ],
        "icon": "combustible-unit"
    },
    {
        "id": "explosive-unit",
        "name": "Explosive Unit",
        "inputs": [
            "combustible-unit",
            "plastic",
            "sulfuric-acid"
        ],
        "outputs": [
            "explosive-unit"
        ],
        "icon": "explosive-unit"
    },
    {
        "id": "crystal-explosive-unit",
        "name": "Crystal Explosive Unit",
        "inputs": [
            "explosive-unit",
            "casimir-crystal",
            "crystal-silicon"
        ],
        "outputs": [
            "crystal-explosive-unit"
        ],
        "icon": "crystal-explosive-unit"
    },
    {
        "id": "magnum-ammo-box",
        "name": "Magnum Ammo Box",
        "inputs": [
            "copper-ingot"
        ],
        "outputs": [
            "magnum-ammo-box"
        ],
        "icon": "magnum-ammo-box"
    },
    {
        "id": "titanium-ammo-box",
        "name": "Titanium Ammo Box",
        "inputs": [
            "magnum-ammo-box",
            "titanium-ingot"
        ],
        "outputs": [
            "titanium-ammo-box"
        ],
        "icon": "titanium-ammo-box"
    },
    {
        "id": "superalloy-ammo-box",
        "name": "Superalloy Ammo Box",
        "inputs": [
            "titanium-ammo-box",
            "titanium-alloy"
        ],
        "outputs": [
            "superalloy-ammo-box"
        ],
        "icon": "superalloy-ammo-box"
    },
    {
        "id": "plasma-capsule",
        "name": "Plasma Capsule",
        "inputs": [
            "graphene",
            "magnet",
            "deuterium"
        ],
        "outputs": [
            "plasma-capsule"
        ],
        "icon": "plasma-capsule"
    },
    {
        "id": "antimatter-capsule",
        "name": "Antimatter Capsule",
        "inputs": [
            "plasma-capsule",
            "particle-container",
            "hydrogen",
            "antimatter"
        ],
        "outputs": [
            "antimatter-capsule"
        ],
        "icon": "antimatter-capsule"
    },
    {
        "id": "jamming-capsule",
        "name": "Jamming Capsule",
        "inputs": [
            "electromagnetic-turbine",
            "plasma-exciter",
            "hydrogen"
        ],
        "outputs": [
            "jamming-capsule"
        ],
        "icon": "jamming-capsule"
    },
    {
        "id": "suppressing-capsule",
        "name": "Suppressing Capsule",
        "inputs": [
            "jamming-capsule",
            "super-magnetic-ring",
            "titanium-glass"
        ],
        "outputs": [
            "suppressing-capsule"
        ],
        "icon": "suppressing-capsule"
    },
    {
        "id": "missile-set",
        "name": "Missile Set",
        "inputs": [
            "copper-ingot",
            "circuit-board",
            "combustible-unit",
            "engine"
        ],
        "outputs": [
            "missile-set"
        ],
        "icon": "missile-set"
    },
    {
        "id": "supersonic-missile-set",
        "name": "Supersonic Missile Set",
        "inputs": [
            "missile-set",
            "processor",
            "explosive-unit",
            "thruster"
        ],
        "outputs": [
            "supersonic-missile-set"
        ],
        "icon": "supersonic-missile-set"
    },
    {
        "id": "gravity-missile-set",
        "name": "Gravity Missile Set",
        "inputs": [
            "supersonic-missile-set",
            "crystal-explosive-unit",
            "strange-matter"
        ],
        "outputs": [
            "gravity-missile-set"
        ],
        "icon": "gravity-missile-set"
    },
    {
        "id": "shell-set",
        "name": "Shell Set",
        "inputs": [
            "copper-ingot",
            "combustible-unit"
        ],
        "outputs": [
            "shell-set"
        ],
        "icon": "shell-set"
    },
    {
        "id": "high-explosive-shell-set",
        "name": "High Explosive Shell Set",
        "inputs": [
            "shell-set",
            "titanium-ingot",
            "explosive-unit"
        ],
        "outputs": [
            "high-explosive-shell-set"
        ],
        "icon": "high-explosive-shell-set"
    },
    {
        "id": "crystal-shell-set",
        "name": "Crystal Shell Set",
        "inputs": [
            "high-explosive-shell-set",
            "titanium-alloy",
            "crystal-explosive-unit"
        ],
        "outputs": [
            "crystal-shell-set"
        ],
        "icon": "crystal-shell-set"
    },
    {
        "id": "prototype",
        "name": "Prototype",
        "inputs": [
            "iron-ingot",
            "engine",
            "circuit-board",
            "plasma-exciter"
        ],
        "outputs": [
            "prototype"
        ],
        "icon": "prototype"
    },
    {
        "id": "precision-drone",
        "name": "Precision Drone",
        "inputs": [
            "prototype",
            "electromagnetic-turbine",
            "circuit-board",
            "photon-combiner"
        ],
        "outputs": [
            "precision-drone"
        ],
        "icon": "precision-drone"
    },
    {
        "id": "attack-drone",
        "name": "Attack Drone",
        "inputs": [
            "prototype",
            "electromagnetic-turbine",
            "processor",
            "particle-container"
        ],
        "outputs": [
            "attack-drone"
        ],
        "icon": "attack-drone"
    },
    {
        "id": "corvette",
        "name": "Corvette",
        "inputs": [
            "titanium-alloy",
            "reinforced-thruster",
            "processor",
            "particle-container"
        ],
        "outputs": [
            "corvette"
        ],
        "icon": "corvette"
    },
    {
        "id": "destroyer",
        "name": "Destroyer",
        "inputs": [
            "frame-material",
            "reinforced-thruster",
            "processor",
            "strange-matter"
        ],
        "outputs": [
            "destroyer"
        ],
        "icon": "destroyer"
    },
    {
        "id": "engine",
        "name": "Engine",
        "inputs": [
            "magnetic-coil",
            "copper-ingot"
        ],
        "outputs": [
            "engine"
        ],
        "icon": "engine"
    },
    {
        "id": "gauss-turret",
        "name": "Gauss Turret",
        "inputs": [
            "iron-ingot",
            "gear",
            "circuit-board",
            "magnetic-coil"
        ],
        "outputs": [
            "gauss-turret"
        ],
        "icon": "gauss-turret"
    },
    {
        "id": "missile-turret",
        "name": "Missile Turret",
        "inputs": [
            "steel",
            "electric-motor",
            "circuit-board",
            "engine"
        ],
        "outputs": [
            "missile-turret"
        ],
        "icon": "missile-turret"
    },
    {
        "id": "implosion-cannon",
        "name": "Implosion Cannon",
        "inputs": [
            "steel",
            "electric-motor",
            "circuit-board",
            "super-magnetic-ring"
        ],
        "outputs": [
            "implosion-cannon"
        ],
        "icon": "implosion-cannon"
    },
    {
        "id": "laser-turret",
        "name": "Laser Turret",
        "inputs": [
            "steel",
            "plasma-exciter",
            "circuit-board",
            "photon-combiner"
        ],
        "outputs": [
            "laser-turret"
        ],
        "icon": "laser-turret"
    },
    {
        "id": "plasma-turret",
        "name": "Plasma Turret",
        "inputs": [
            "titanium-alloy",
            "titanium-glass",
            "super-magnetic-ring",
            "plasma-exciter",
            "processor"
        ],
        "outputs": [
            "plasma-turret"
        ],
        "icon": "plasma-turret"
    },
    {
        "id": "battlefield-analysis-base",
        "name": "Battlefield Analysis Base",
        "inputs": [
            "steel",
            "circuit-board",
            "microcrystalline-component",
            "engine"
        ],
        "outputs": [
            "battlefield-analysis-base"
        ],
        "icon": "battlefield-analysis-base"
    },
    {
        "id": "jammer-tower",
        "name": "Jammer Tower",
        "inputs": [
            "copper-ingot",
            "plasma-exciter",
            "diamond",
            "processor"
        ],
        "outputs": [
            "jammer-tower"
        ],
        "icon": "jammer-tower"
    },
    {
        "id": "signal-tower",
        "name": "Signal Tower",
        "inputs": [
            "wireless-power-tower",
            "steel",
            "crystal-silicon"
        ],
        "outputs": [
            "signal-tower"
        ],
        "icon": "signal-tower"
    },
    {
        "id": "planetary-shield-generator",
        "name": "Planetary Shield Generator",
        "inputs": [
            "steel",
            "electromagnetic-turbine",
            "super-magnetic-ring",
            "particle-container"
        ],
        "outputs": [
            "planetary-shield-generator"
        ],
        "icon": "planetary-shield-generator"
    }
]

export default recipes
