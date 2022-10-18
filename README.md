# DSP Production Overview

![publish](https://github.com/batchmode/dsp-production-overview/actions/workflows/publish.yml/badge.svg)

## Online Production Overview for [Dyson Sphere Program](https://store.steampowered.com/app/1366540/Dyson_Sphere_Program/) players.

Ever being tired of writing down notes about which factories you build on which planet?
Or which planet provides which products or what are the needs of a planet?

Me too! So I started to write a little [online page](https://batchmode.github.io/dsp-production-overview/) where you can keep track about your systems and planets.

![overview](doc/images/overview.png?raw=true "Overview")


You can configure import products and export products for each planet.

![exports](doc/images/select_exports.png?raw_true "Exports")


There is also a feature to visualize the production lines for a planet in a tree layout based upon which products you are exporting.

![chain](doc/images/production_chain.png?raw=true "Production Chain")

For this you can enable the recipes for each planet to use in the case that there are multiple ways to create a product.
If there are more recipes available for a product you have to enable at least one of them.
If not, a little warning icon with an exclamation mark will be displayed.

![recipes](doc/images/enable_recipes.png?raw=true "Enable Recipes")

Your configuration will be stored locally in the `localstorage` of your browser.
The `localstorage` is usually not being deleted so easily as it is with cookies. 
You can close the browser and shutdown your PC. The data will be kept on your computer.

However it is possible to save and restore you configuration to and from a file using import and export.
Using this feature you also can share your configuration.

## Start Client in Dev mode

Run the DSP Overview locally in `dev` mode.
Install the dependencies with

```
npm install
```

And then start the client with

```
npm run dev
```

## Run as Docker container

Build the container

```
./build.sh
``` 

Start the container with

```
docker run -e BASE_URL=/dsp-production-overview -p 8080:8080 batchmode/dsp-overview:latest
```

Open http://localhost:8080/dsp-production-overview/