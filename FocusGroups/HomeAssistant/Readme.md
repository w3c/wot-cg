Home Assistant Focus Group
--------------------------

The Home Assistant Focus Group is an outgrowth of the breakout session at TPAC 2023

https://github.com/w3c/tpac2023-breakouts/issues/50

This folder will collect ideas, interested people and possible outcomes of the focus group.

## Discussions 

### GitHub Discussion

https://github.com/w3c/wot-cg/discussions/97

### Discord

https://discordapp.com/channels/1081253871688622181/1155946862864502784

# Implementation
Current activities include building a WoT Home Assistant Integration.    

## WOT Home Assistant Integration
The Home Assistant integration uses wot-py.

Integration: https://github.com/joshco/ha-wot

wot-py: https://gitlab.eclipse.org/eclipse-research-labs/nephele-project/vo-wot

## WoT Devices
WoT prototype devices are built with Arduino WoT.
https://github.com/Citrullin/web-of-thing-arduino

> Links to device source code is forthcoming.

### WoT LED light
The first device is the simplest, a "light" using an LED.
![wot-light](./wot-light-small.png)

[Watch LED Video](https://www.youtube.com/watch?v=tvRTwVi7UZE)

### WoT Rainbow
![wot-rainbow](./wot-rainbow-small.png)

[Watch Rainbow Video](https://www.youtube.com/watch?v=mxAz2rAN8Ac)

This is an example of a device that I think is easier to build and integrate with Home Assistant than ESPHome.   While it is represented in HA as a light, when the light is turned on it runs code to animate a rainbow on the attached matrix of addressable RGB leds.  
While this could be implemented with ESPhome, via lambdas embedded in YAML, that can get messy quickly, and the device and logic are "locked-in" to ESPHome formats.

### WoT Scene Selector
The previous devices are building up to WoT Scene Selector.  This device requires upstream events such as "red scene clicked", so it depends on the next features to come in the HA integration.

![wot-scene](./wot-scene-small.JPG)

> Coming soon


