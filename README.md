# leaflet.getset
Getting/Setting properties for Leaflet objects

# Goal
Most of the time geographical objects like markers or layers need additional attributes. The most time this is done on the following way:
```Javascript
var marker = L.marker([51.5, -0.09]);
if (marker) {
  marker.privateData = {};
  marker.privateData.country="Great Britain";
  marker.addTo(map);
 }
 ```
 This is fast. This easy. But this has two disadvantages:
 * the more properties you set the more this is becoming confusing and the readability is not very good
 * it is not possible to react on changes of the properties by firing an event
 
 # Solution and Methods
 The solution is adding two more methods to the base object L.Class. Because all object classes are derived from L.Class all object have the two methods!
 
 * Fetching the private data of an object
 ```Javascript
 <leaflet-object>.get(<key>);
 ```
 The parameter <key> is mandatory. 
 
 * Setting private data of an object:
 ```Javascript
 <leaflet-object>.set(<key>, <value>, <notification>);
 ```
 This method is used for setting private data within an object. It is stored in array under the key <key> with the value <value>. The parameter <notification> is boolean. Setting this to true everytime a property gets a new value an "changeprivatedata" event is fired. Otherwise no event is fired.
Reacting on such event is easy:
```
<leaflet-object>.on("changeprivatedata", eventHandler);
```
* Event: changeprivatedata
This event provides the folling addition informations:
* event.key: contains the key whose value has changed
* event.newValue: new value
* event.oldValue: the value before change
* event.target: the object which fired the event
* event.type: the event type, here "changeprivatedata"

# Example
Taking the example above with the new methods the code looks like:
```Javascript
var marker = L.marker([51.5, -0.09]);
if (marker) {
  marker.set("country", "Great Britain", true); // property changed -> fire event
  marker.addTo(map);
 }
 ```
 ```
 var country = marker.get("country");
 if (country) {
  setStyle(...);
 }
 
 
